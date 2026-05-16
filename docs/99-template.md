---
id: template
title: "템플릿 및 컴포넌트 가이드"
sidebar_position: 99
theme: blue
---

<style>{`
  :root {
    --navy: #0b1f45;
    --blue: #1651c8;
    --sky: #3a9fe0;
    --coral: #e84b35;
    --mint: #27c0a4;
    --gold: #f5a623;
    --light: #eef4ff;
    --gray: #667799;
    --border: #d8e4f4;
    --white: #fff;
    --bg: #f5f8ff;
  }

  /* 템플릿 전용 커스텀 스타일이 필요하다면 이곳에 추가하세요 */
`}</style>

<div className="hero fade-up">
  <div className="hero-grid" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
    <div className="hero-content">
      <span className="hero-badge">컴포넌트 가이드</span>
      <h1 className="hero-title">
        매력적인 브로슈어 <br/>
        <span className="highlight-text">손쉽게 만들기</span>
      </h1>
      <p className="hero-desc">
        이 페이지는 브로슈어 작성에 사용할 수 있는 다양한 UI 컴포넌트의 모음입니다.<br/>
        원하는 디자인을 복사하여 새 문서에 붙여넣어 사용하세요.
      </p>
    </div>
  </div>
</div>

## 1. 하이라이트 & 강조 텍스트

기본적인 마크다운 문법 외에도 글자를 예쁘게 강조할 수 있습니다.

- <Highlight color="#1651c8">파란색 하이라이트</Highlight>
- <Highlight color="#e84b35">빨간색 하이라이트</Highlight>
- <Highlight color="#27c0a4">민트색 하이라이트</Highlight>

> **[참고]** 마크다운 인용구(`>`)를 사용하면 이렇게 깔끔한 박스 형태로 표시됩니다.

---

## 2. 2단 / 3단 반응형 다단 레이아웃 (Columns)

PC에서는 가로로 나란히, 모바일에서는 세로로 차곡차곡 쌓이는 반응형 레이아웃입니다.

<Columns>
  <Column>
    <h3>✨ 첫 번째 컬럼</h3>
    <p>여기에 첫 번째 내용을 적습니다. 사진이나 표를 넣어도 좋습니다.</p>
  </Column>
  <Column>
    <h3>🚀 두 번째 컬럼</h3>
    <p>가운데에 들어가는 내용입니다. <code>&lt;Columns&gt;</code> 컴포넌트는 알아서 공간을 분배합니다.</p>
  </Column>
  <Column>
    <h3>🎯 세 번째 컬럼</h3>
    <p>오른쪽에 들어가는 내용입니다. 3단 레이아웃도 문제 없습니다.</p>
  </Column>
</Columns>

---

## 3. 단계별 추진 로드맵 (Phase Blocks)

시간 순서대로 진행되는 단계나 중요한 구역을 나눌 때 사용하기 좋은 블록 디자인입니다.

<div className="phase-block fade-up">
  <div className="phase-block-header">
    <h3>1단계: 기반 구축 및 혁신 (STEP 1)</h3>
    <span className="period-tag">2023–2024</span>
  </div>
  <div className="phase-block-body">
    <div className="area-group">
      <div className="area-label">교육 부문</div>
      <ul className="item-list">
        <li>전공트랙 신설 및 교육과정 개편</li>
        <li>최신 기술(AI, 메타버스 등) 인프라 도입</li>
      </ul>
    </div>
    <div className="area-group">
      <div className="area-label">산학 부문</div>
      <ul className="item-list">
        <li>지역 기업 연계 프로젝트 발굴</li>
        <li>문제해결형 플랫폼 구축 완료</li>
      </ul>
    </div>
  </div>
</div>

<div className="phase-block pb2 fade-up" style={{ marginTop: '30px' }}>
  <div className="phase-block-header">
    <h3>2단계: 성과 고도화 (STEP 2)</h3>
    <span className="period-tag">2025–2026</span>
  </div>
  <div className="phase-block-body">
    <div className="area-group">
      <div className="area-label">확산 부문</div>
      <ul className="item-list">
        <li>부울경 지역으로 우수사례 확산</li>
        <li>맞춤형 인재 배출 및 취업 연계 90% 달성</li>
      </ul>
    </div>
  </div>
</div>

---

## 4. 눈에 띄는 통계 수치 (Data Highlights)

숫자를 강조해서 보여줘야 할 때 매우 유용한 레이아웃입니다.

<Columns>
  <Column>
    <div style={{ background: '#f5f8ff', padding: '24px', borderRadius: '12px', textAlign: 'center', border: '1px solid #d8e4f4' }}>
      <div style={{ fontSize: '36px', fontWeight: '900', color: '#1651c8', marginBottom: '8px' }}>+43.3%</div>
      <div style={{ fontSize: '15px', color: '#667799', fontWeight: '600' }}>SW전공정원 대폭 증원</div>
    </div>
  </Column>
  <Column>
    <div style={{ background: '#f5f8ff', padding: '24px', borderRadius: '12px', textAlign: 'center', border: '1px solid #d8e4f4' }}>
      <div style={{ fontSize: '36px', fontWeight: '900', color: '#27c0a4', marginBottom: '8px' }}>21,302㎡</div>
      <div style={{ fontSize: '15px', color: '#667799', fontWeight: '600' }}>최첨단 교육시설 확충</div>
    </div>
  </Column>
</Columns>

<br/><br/>

---
## 5. 핵심 안내 및 알림 (Callout)

중요한 공지나 주의사항을 강조할 때 사용합니다. `type`에 따라 색상과 아이콘이 바뀝니다.

<Callout type="info" title="안내드립니다">
  본 교육 과정은 부산대학교 학생이라면 누구나 신청 가능합니다.
</Callout>

<Callout type="success" title="접수 완료">
  서류 접수가 정상적으로 처리되었습니다. 결과는 개별 통보됩니다.
</Callout>

<Callout type="warning" title="주의사항">
  신청 기간 이후에는 수정이 불가능하므로 신중하게 입력해주세요.
</Callout>

<Callout type="danger" title="긴급 공지">
  시스템 점검으로 인해 오늘 오후 6시부터 서비스가 일시 중단됩니다.
</Callout>

---

## 6. 신청 및 추진 절차 (Step List)

단계별로 진행되는 절차를 시각적으로 보여줍니다.

<StepList>
  <StepItem step="1" title="온라인 신청 접수">
    홈페이지를 통해 신청서를 작성하고 증빙 서류를 업로드합니다.
  </StepItem>
  <StepItem step="2" title="서류 심사 및 면접">
    제출된 서류를 바탕으로 1차 선발 후 면접을 진행합니다.
  </StepItem>
  <StepItem step="3" title="최종 합격자 발표">
    최종 선발된 인원에게 개별 연락 및 오리엔테이션을 실시합니다.
  </StepItem>
</StepList>

---

## 7. 자주 묻는 질문 (FAQ/Details)

많은 내용을 깔끔하게 정리하거나 FAQ를 만들 때 유용합니다.

<Details summary="Q. 수강료는 얼마인가요?">
  본 교육원은 전액 국비 지원으로 운영되므로 별도의 수강료가 발생하지 않습니다.
</Details>

<Details summary="Q. 비전공자도 신청 가능한가요?">
  네, 전공에 상관없이 AI에 관심 있는 학생이라면 누구나 기초 과정부터 수강할 수 있습니다.
</Details>

---

## 8. 글자 크기 및 스타일 (Text)

`<Text>` 컴포넌트를 사용하면 마크다운 안에서도 글자 크기, 굵기, 색상을 자유롭게 조절할 수 있습니다.

### 폰트 굵기 미리보기 (Weight Preview)

<div style={{ background: '#fff', padding: '32px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
  {[100, 200, 300, 400, 500, 600, 700, 800, 900].map(w => (
    <div key={w} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', borderBottom: w === 900 ? 'none' : '1px solid #f1f5f9' }}>
      <Text size="28" weight={w}>세상에 이런 폰트가 나오다니 천재인듯</Text>
      <Text size="14" color="#94a3b8" weight="700">{w}</Text>
    </div>
  ))}
</div>

<br/>

```jsx
<Text size="28" weight="900">굵은 강조 텍스트</Text>
```

<br/>

### 폰트 종류 미리보기 (Font Family)

다양한 느낌을 줄 수 있는 4가지 대표 폰트를 즉시 사용할 수 있습니다.

<div style={{ background: '#fff', padding: '32px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
  <div style={{ marginBottom: '24px', borderBottom: '1px solid #f1f5f9', paddingBottom: '16px' }}>
    <Text size="14" color="#94a3b8" weight="700" display="block" style={{ marginBottom: '8px' }}>PRETENDARD (가장 범용적인 서체)</Text>
    <Text size="32" family="pretendard" weight="700">모든 국민은 인간으로서의 존엄과 가치를 가지며</Text>
  </div>
  <div style={{ marginBottom: '24px', borderBottom: '1px solid #f1f5f9', paddingBottom: '16px' }}>
    <Text size="14" color="#94a3b8" weight="700" display="block" style={{ marginBottom: '8px' }}>GMARKET SANS (제목용으로 추천)</Text>
    <Text size="32" family="gmarket" weight="700">행복을 추구할 권리를 가진다. 국가는 확인한다.</Text>
  </div>
  <div style={{ marginBottom: '24px', borderBottom: '1px solid #f1f5f9', paddingBottom: '16px' }}>
    <Text size="14" color="#94a3b8" weight="700" display="block" style={{ marginBottom: '8px' }}>NANUM GOTHIC (친숙하고 부드러운 서체)</Text>
    <Text size="32" family="nanum" weight="700">기본적 인권을 확인하고 이를 보장할 의무를 진다.</Text>
  </div>
  <div>
    <Text size="14" color="#94a3b8" weight="700" display="block" style={{ marginBottom: '8px' }}>NOTO SANS KR (기본 서체)</Text>
    <Text size="32" family="noto" weight="700">국가는 개인이 가지는 불가침의 인권을 확인한다.</Text>
  </div>
</div>

<br/>

```jsx
<Text family="gmarket" size="40" weight="700">지마켓 산스 타이틀</Text>
<Text family="pretendard" size="20">프리텐다드 본문</Text>
```

<br/><br/>

<br/><br/>

### 💡 사용 방법
1. 위 코드를 복사(Ctrl+C)합니다.
2. 관리자 페이지(`우측 상단 톱니바퀴` -> `새 문서 작성`)를 엽니다.
3. `Markdown` 탭에 붙여넣기(Ctrl+V) 한 뒤, 원하는 텍스트만 쏙쏙 바꿔서 사용하세요!
