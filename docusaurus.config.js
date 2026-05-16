// @ts-check

import { themes as prismThemes } from "prism-react-renderer";
import fs from 'fs';
import path from 'path';

// docs 폴더의 파일들을 읽어서 동적으로 네비게이션 탭으로 만듭니다.
function getDynamicNavItems() {
  const docsDir = path.join(process.cwd(), 'docs');
  if (!fs.existsSync(docsDir)) return [];
  
  const files = fs.readdirSync(docsDir).filter(f => f.endsWith('.md') || f.endsWith('.mdx'));
  
  // 정렬을 위해 파일명(예: 01-intro.md)을 기준으로 정렬
  files.sort();

  return files.map(file => {
    const content = fs.readFileSync(path.join(docsDir, file), 'utf8');
    const titleMatch = content.match(/title:\s*"?([^"\n]+)"?/);
    const title = titleMatch ? titleMatch[1] : file.replace('.md', '');
    const idMatch = content.match(/id:\s*"?([^"\n]+)"?/);
    const id = idMatch ? idMatch[1] : file.replace('.md', '');
    
    return {
      to: '/docs/' + id,
      label: title,
    };
  });
}

const dynamicNavItems = getDynamicNavItems();
const firstDocLink = dynamicNavItems.length > 0 ? dynamicNavItems[0].to : '/docs/intro';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "2026 AI 교육 안내서",
  
  customFields: {
    firstDocLink,
    defaultLayout: "standard", // "slim", "compact", "standard", "poster", "cinema"
  },

  tagline: "부산대학교 AI융합교육원 온라인 브로슈어",

  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },

  // GitHub Pages URL (조직 이동 시 자동 대응)
  url: process.env.GITHUB_REPOSITORY 
    ? `https://${process.env.GITHUB_REPOSITORY.split('/')[0]}.github.io` 
    : "https://pnuai.github.io",

  // Repository name (GitHub Actions에서 자동 인식, 로컬은 /)
  baseUrl: process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/` : "/",

  // GitHub Pages deployment config
  organizationName: process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[0] : "pnuai",
  projectName: process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : "pnu-slate",

  onBrokenLinks: "warn",

  i18n: {
    defaultLocale: "ko",
    locales: ["ko"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.js",

          editUrl: ({versionDocsDirPath, docPath}) => {
            // Docusaurus 빌드 경고(Broken Link) 방지를 위해 절대 경로로 반환
            const isLocal = !process.env.GITHUB_REPOSITORY;
            const baseUrl = isLocal ? "/" : `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/`;
            const domain = isLocal ? "http://localhost:3000" : "https://pnuai.github.io";
            return `${domain}${baseUrl}admin/index.html?file=${docPath}`;
          },
        },

        // blog 제거 가능
        blog: false,

        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",

    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

    navbar: {
      title: "AI융합교육원",

      logo: {
        alt: "PNU Logo",
        src: "img/logo.jpg",
      },

      items: [
        {
          type: 'dropdown',
          label: '브로슈어 목차',
          position: 'right',
          items: dynamicNavItems,
        },
        {
          to: "/admin/",
          position: "right",
          label: "관리 페이지",
          target: "_blank",
        },
        {
          href: "https://pnuai.github.io",
          position: "right",
          label: "허브 홈으로",
        },
      ],
    },

    footer: {
      style: "light",

      links: [
        {
          title: "AI융합교육원",
          items: [
            {
              label: "브로슈어 홈",
              to: "/",
            },
          ],
        },
      ],

      copyright: `Copyright © ${new Date().getFullYear()} 부산대학교 AI융합교육원`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
