const yaml = require('js-yaml');
const { visit } = require('unist-util-visit');

function remarkBrochureDirectives() {
  return (tree) => {
    visit(tree, (node) => {
      if (
        node.type === 'containerDirective' ||
        node.type === 'leafDirective' ||
        node.type === 'textDirective'
      ) {
        const targetBlocks = ['hero', 'stats', 'cards', 'timeline', 'quote', 'cta', 'chapters', 'roadmap', 'badges'];
        if (!targetBlocks.includes(node.name)) return;

        const data = node.data || (node.data = {});
        const attributes = { ...node.attributes };

        // 1. MDast AST 노드군을 표준 마크다운 YAML 문자열로 완벽히 직렬화 복원
        const toMarkdownText = (n) => {
          if (!n) return '';
          if (n.type === 'text') return n.value;
          if (n.type === 'code') return `\n\`\`\`\n${n.value}\n\`\`\`\n`;
          if (n.type === 'inlineCode') return `\`${n.value}\``;
          
          if (n.type === 'paragraph') {
            return n.children ? n.children.map(toMarkdownText).join('') + '\n' : '';
          }
          
          if (n.type === 'listItem') {
            const content = n.children ? n.children.map(toMarkdownText).join('').trim() : '';
            const indented = content.split('\n').map((line, idx) => {
              if (idx === 0) return line;
              return '  ' + line; // YAML 목록의 자식 요소들에 2칸 들여쓰기 보정
            }).join('\n');
            return `- ${indented}\n`;
          }
          
          if (n.type === 'list') {
            return n.children ? n.children.map(toMarkdownText).join('') + '\n' : '';
          }
          
          if (n.children) {
            return n.children.map(toMarkdownText).join('');
          }
          return '';
        };

        const rawBody = node.children ? node.children.map(toMarkdownText).join('').trim() : '';

        // 2. 메타 속성부와 리스트 목록부를 분리하여 YAML 파싱 수행
        let parsedProps = {};
        let rawItemsList = null;

        if (rawBody) {
          try {
            const lines = rawBody.split('\n');
            const metaLines = [];
            const listLines = [];
            let isListStarted = false;

            for (let line of lines) {
              const trimmed = line.trim();
              if (trimmed.startsWith('-')) {
                isListStarted = true;
              }
              if (isListStarted) {
                listLines.push(line);
              } else {
                metaLines.push(line);
              }
            }

            const metaStr = metaLines.join('\n').trim();
            const listStr = listLines.join('\n').trim();

            if (metaStr) {
              const metaObj = yaml.load(metaStr);
              if (metaObj && typeof metaObj === 'object') {
                parsedProps = { ...metaObj };
              }
            }

            if (listStr) {
              const listObj = yaml.load(listStr);
              if (Array.isArray(listObj)) {
                rawItemsList = listObj;
              } else if (listObj && typeof listObj === 'object') {
                if (listObj.items) {
                  rawItemsList = listObj.items;
                } else {
                  parsedProps = { ...parsedProps, ...listObj };
                }
              }
            }
          } catch (e) {
            console.warn('[Brochure Directive Parser Warning]: Failed to parse body of :::' + node.name, e);
          }
        }

        // [Base64 안전 격리 전송 설계]
        // 복잡한 Array 객체가 HTML/SSG/JSX 직렬화 과정에서 [object Object] 문자열로 뭉개지는 것을 원천 차단하기 위해,
        // items 배열을 Base64 인코딩된 깨끗하고 손실 없는 일반 아스키 문자열로 치환하여 전달
        if (rawItemsList) {
          try {
            const jsonStr = JSON.stringify(rawItemsList);
            const base64Str = Buffer.from(jsonStr, 'utf8').toString('base64');
            parsedProps.items = base64Str;
          } catch (err) {
            console.error('[Brochure Directive Parser Base64 Error]:', err);
          }
        }

        // AST 노드의 attributes 자체와 hProperties 모두에 완전히 동일하게 치환 공급
        node.attributes = {
          ...attributes,
          ...parsedProps
        };

        data.hName = node.name;
        data.hProperties = {
          ...node.attributes
        };

        // AST children을 props로 완전 위임하므로 노드 내부 children은 비워 중복 렌더링 방지
        node.children = [];
      }
    });
  };
}

module.exports = remarkBrochureDirectives;
