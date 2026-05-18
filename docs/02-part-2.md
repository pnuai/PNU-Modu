---
id: part-2
title: 교육목표 및 혁신노력
sidebar_position: 1
theme: blue
---
<style>{`
  :root {
    --navy: #0a1f44;
    --blue: #1a56c4;
    --sky: #3b9ede;
    --accent: #ff5533;
    --gold: #f5a623;
    --light: #f0f5ff;
    --white: #ffffff;
    --gray: #6b7a99;
    --border: #dce6f5;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    background: #f7faff;
    color: var(--navy);
    line-height: 1.7;
  }

  /* HERO */
  .hero {
    background: linear-gradient(135deg, var(--navy) 0%, #1a3a7a 60%, var(--blue) 100%);
    color: white;
    padding: 80px 40px 60px;
    position: relative;
    overflow: hidden;
  }
  .hero::before {
    content: '';
    position: absolute;
    top: -80px; right: -80px;
    width: 400px; height: 400px;
    border-radius: 50%;
    background: rgba(58,158,222,0.15);
  }
  .hero::after {
    content: '';
    position: absolute;
    bottom: -60px; left: 10%;
    width: 250px; height: 250px;
    border-radius: 50%;
    background: rgba(255,85,51,0.1);
  }
  .hero-inner { max-width: 960px; margin: 0 auto; position: relative; z-index: 1; }
  .hero-badge {
    display: inline-block;
    background: var(--accent);
    color: white;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2px;
    padding: 5px 14px;
    border-radius: 20px;
    margin-bottom: 20px;
    text-transform: uppercase;
  }
  .hero h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: clamp(26px, 5vw, 46px);
    font-weight: 900;
    line-height: 1.15;
    margin-bottom: 14px;
    letter-spacing: -1px;
  }
  .hero h1 span { color: var(--sky); }
  .hero-sub {
    font-size: 16px;
    color: rgba(255,255,255,0.72);
    font-weight: 300;
    max-width: 540px;
  }
  .hero-tag {
    margin-top: 30px;
    display: flex; flex-wrap: wrap; gap: 10px;
  }
  .hero-tag span {
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.2);
    color: rgba(255,255,255,0.85);
    font-size: 12px;
    padding: 5px 14px;
    border-radius: 20px;
  }

  /* SECTION */
  section { max-width: 960px; margin: 0 auto; padding: 60px 24px; }
  .section-title {
    display: flex; align-items: center; gap: 12px;
    margin-bottom: 36px;
  }
  .section-num {
    font-family: 'Montserrat', sans-serif;
    font-size: 13px;
    font-weight: 900;
    color: var(--blue);
    background: var(--light);
    border: 2px solid var(--blue);
    width: 36px; height: 36px;
    display: flex; align-items: center; justify-content: center;
    border-radius: 8px;
    flex-shrink: 0;
  }
  .section-title h2 {
    font-size: 22px;
    font-weight: 700;
    color: var(--navy);
  }
  hr.divider {
    border: none;
    border-top: 2px solid var(--border);
    margin: 0 24px;
  }

  /* ROADMAP STEPS */
  .roadmap {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }
  .step-card {
    background: white;
    border-radius: 16px;
    padding: 28px 22px;
    box-shadow: 0 2px 16px rgba(10,31,68,0.07);
    border-top: 4px solid transparent;
    position: relative;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .step-card:hover { transform: translateY(-4px); box-shadow: 0 8px 32px rgba(10,31,68,0.12); }
  .step-card.s1 { border-top-color: var(--blue); }
  .step-card.s2 { border-top-color: var(--sky); }
  .step-card.s3 { border-top-color: var(--gold); }
  .step-card.s4 { border-top-color: var(--accent); }
  .step-label {
    font-family: 'Montserrat', sans-serif;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 6px;
  }
  .s1 .step-label { color: var(--blue); }
  .s2 .step-label { color: var(--sky); }
  .s3 .step-label { color: var(--gold); }
  .s4 .step-label { color: var(--accent); }
  .step-card h3 { font-size: 16px; font-weight: 700; margin-bottom: 8px; }
  .step-card p { font-size: 13px; color: var(--gray); line-height: 1.6; }
  .step-period {
    display: inline-block;
    font-size: 11px;
    font-weight: 600;
    padding: 3px 10px;
    border-radius: 10px;
    margin-top: 12px;
    background: var(--light);
    color: var(--navy);
  }

  /* PHASE DETAIL TABLE */
  .phase-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .phase-block {
    background: white;
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 2px 12px rgba(10,31,68,0.06);
    border-left: 5px solid var(--blue);
  }
  .phase-block.pb2 { border-left-color: var(--sky); }
  .phase-block.pb3 { border-left-color: var(--gold); }
  .phase-block-header {
    background: var(--light);
    padding: 16px 22px;
    display: flex; align-items: center; gap: 12px;
  }
  .phase-block-header h3 { font-size: 15px; font-weight: 700; }
  .phase-block-header .period-tag {
    font-size: 11px;
    font-weight: 600;
    background: var(--blue);
    color: white;
    padding: 2px 10px;
    border-radius: 20px;
    margin-left: auto;
  }
  .pb2 .phase-block-header .period-tag { background: var(--sky); }
  .pb3 .phase-block-header .period-tag { background: var(--gold); }
  .phase-block-body { padding: 20px 22px; }
  .area-group { margin-bottom: 16px; }
  .area-group:last-child { margin-bottom: 0; }
  .area-label {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--blue);
    margin-bottom: 8px;
  }
  .item-list {
    list-style: none;
    display: flex; flex-direction: column; gap: 5px;
  }
  .item-list li {
    font-size: 13px;
    color: #334;
    padding-left: 14px;
    position: relative;
  }
  .item-list li::before {
    content: '▸';
    position: absolute; left: 0;
    color: var(--sky);
    font-size: 10px;
    top: 3px;
  }

  /* ORG CHART */
  .org-container {
    background: white;
    border-radius: 16px;
    padding: 32px;
    box-shadow: 0 2px 16px rgba(10,31,68,0.07);
  }
  .org-center {
    text-align: center;
    margin-bottom: 28px;
  }
  .org-center .org-main-box {
    display: inline-block;
    background: var(--navy);
    color: white;
    padding: 14px 40px;
    border-radius: 10px;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.5px;
  }
  .dept-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 14px;
  }
  .dept-card {
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 14px 16px;
    background: var(--light);
    transition: border-color 0.2s;
  }
  .dept-card:hover { border-color: var(--sky); }
  .dept-card h4 {
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 6px;
    color: var(--blue);
  }
  .dept-card ul { list-style: none; }
  .dept-card ul li {
    font-size: 11.5px;
    color: var(--gray);
    padding: 2px 0;
    border-bottom: 1px dashed var(--border);
  }
  .dept-card ul li:last-child { border-bottom: none; }

  /* ACHIEVEMENTS */
  .achieve-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }
  .achieve-card {
    background: white;
    border-radius: 14px;
    padding: 26px 22px;
    box-shadow: 0 2px 12px rgba(10,31,68,0.07);
    position: relative;
    overflow: hidden;
  }
  .achieve-card::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 3px;
  }
  .achieve-card.a1::after { background: var(--blue); }
  .achieve-card.a2::after { background: var(--sky); }
  .achieve-card.a3::after { background: var(--gold); }
  .achieve-card.a4::after { background: var(--accent); }
  .achieve-icon {
    font-size: 24px; margin-bottom: 10px;
  }
  .achieve-card h3 { font-size: 15px; font-weight: 700; margin-bottom: 8px; }
  .achieve-card p { font-size: 12.5px; color: var(--gray); line-height: 1.65; }

  /* SUPPORT */
  .support-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  @media (max-width: 600px) { .support-grid { grid-template-columns: 1fr; } }
  .support-card {
    background: white;
    border-radius: 14px;
    padding: 26px 22px;
    box-shadow: 0 2px 12px rgba(10,31,68,0.07);
    border-top: 3px solid var(--blue);
  }
  .support-card:nth-child(2) { border-top-color: var(--accent); }
  .support-card h3 { font-size: 15px; font-weight: 700; margin-bottom: 10px; }
  .support-card p { font-size: 13px; color: var(--gray); }
  .stat-highlight {
    font-size: 28px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
    color: var(--blue);
    margin-bottom: 4px;
  }

  /* FOOTER */
  footer {
    background: var(--navy);
    color: rgba(255,255,255,0.5);
    text-align: center;
    padding: 28px;
    font-size: 12px;
    margin-top: 20px;
  }
  footer strong { color: rgba(255,255,255,0.8); }

  /* ANIMATION */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .fade-up { animation: fadeUp 0.6s ease both; }
  .delay-1 { animation-delay: 0.1s; }
  .delay-2 { animation-delay: 0.2s; }
  .delay-3 { animation-delay: 0.3s; }
  .delay-4 { animation-delay: 0.4s; }
`}</style>


<div class="hero">
  <div class="hero-inner">
    <div class="hero-badge">부산대학교 SW중심대학</div>
    <h1>동남권 디지털 대전환을 이끄는<br /><span>SMART 인재 양성 플랫폼</span></h1>
    <p class="hero-sub">교육목표 및 혁신노력 — AI·SW중심 대학 교육체계 개편 및 단계별 인력양성 전략</p>
    <div class="hero-tag">
      <span>AI융합교육원</span>
      <span>PNU-SW2023</span>
      <span>산학협력</span>
      <span>가치확산</span>
      <span>개방형 교육과정</span>
    </div>
  </div>
</div>




## 단계별 추진 로드맵

<section>
  <div class="section-title fade-up">
    <div class="section-num">01</div>
    <h2>단계별 추진 로드맵</h2>
  </div>
  <div class="roadmap">
    <div class="step-card s1 fade-up delay-1">
      <div class="step-label">1단계</div>
      <h3>AI·SW중심 대학 교육체계 개편</h3>
      <p>AI·SW교육 인프라 구축, 전공교육 체계 개편, 기초교육 의무화, 연계전공 신설, 개방형 교육과정 운영, AI융합교육원 설립</p>
    </div>
    <div class="step-card s2 fade-up delay-2">
      <div class="step-label">기반 재정비 단계</div>
      <h3>신기술 수요 반영한 교육체계 재정비</h3>
      <p>대학본부 직속 추진조직 확대, AI·SW융합트랙·마이크로디그리 신설, 지역 맞춤형 교육과정 발굴·운영, 부산대-경북대 인공지능 공동학과 설립</p>
      <span class="step-period">2023–2024</span>
    </div>
    <div class="step-card s3 fade-up delay-3">
      <div class="step-label">성과 내실화 단계</div>
      <h3>맞춤형 교육 내실화 및 산학협력 활성화</h3>
      <p>SMART-PNU 교육혁신 모델 내실화, 자율선택 기초교과목 확대, 고교 연계 인공지능 교과목 운영, 오픈소스 에코시스템 기반 산학협력 선순환 체계 구축</p>
      <span class="step-period">2025–2026</span>
    </div>
    <div class="step-card s4 fade-up delay-4">
      <div class="step-label">성과 공유·확산 단계</div>
      <h3>성과 분석 및 공유확산</h3>
      <p>PNU-ICEx AI·SW통합 교육시스템 성과 관리, 개방형 교육과정 공동 개발 확대, 취업연계 인턴십 성과 확산, 공교육 연계 우수사례 발굴·확산</p>
      <span class="step-period">2027–2028</span>
    </div>
  </div>
</section>

<hr class="divider"/>




## 단계별 세부 추진전략

<section>
  <div class="section-title fade-up">
    <div class="section-num">02</div>
    <h2>단계별 세부 추진전략</h2>
  </div>
  <div class="phase-grid">

    <div class="phase-block fade-up">
      <div class="phase-block-header">
        <h3>기반 재정비 단계 (STEP 1)</h3>
        <span class="period-tag">2023–2024</span>
      </div>
      <div class="phase-block-body">
        <div class="area-group">
          <div class="area-label">교육혁신</div>
          <ul class="item-list">
            <li>8개 전공트랙 신설 (클라우드, 융합보안, 지능형IoT, 메타버스, 생성AI, 인공지능응용, 의생명빅데이터통계, 디자인테크)</li>
            <li>ACM/IEEE CS2013/CE2016/CDS2021 반영 PNU-SW2023 교육과정 운영</li>
            <li>PBL(Problem Based Learning) 교과목 운영</li>
            <li>부산대–경북대 인공지능 공동학과 신설 운영</li>
          </ul>
        </div>
        <div class="area-group">
          <div class="area-label">산학혁신</div>
          <ul class="item-list">
            <li>지역 기업 디지털 전환을 위한 사업 발굴·운영</li>
            <li>기업주도 문제해결형 One-Stop 산학협력 플랫폼 구축</li>
            <li>지속가능한 발전 기반 창업지 및 취업연계 산학협력 프로젝트 체계 재정비</li>
          </ul>
        </div>
        <div class="area-group">
          <div class="area-label">지역혁신</div>
          <ul class="item-list">
            <li>고교-대학 연계 고교학점제 인공지능 관련 교과목 개설 운영</li>
            <li>비전공생을 위한 AI·SW 기초교과목에 신기술 분야 반영</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="phase-block pb2 fade-up">
      <div class="phase-block-header">
        <h3>성과 내실화 단계 (STEP 2)</h3>
        <span class="period-tag">2025–2026</span>
      </div>
      <div class="phase-block-body">
        <div class="area-group">
          <div class="area-label">교육혁신</div>
          <ul class="item-list">
            <li>SMART-PNU 교육혁신 모델 운영체계 내실화</li>
            <li>PNU-ICEx SW통합교육시스템 구축을 통한 산업체 수요기반 교육</li>
            <li>인공지능, 블록체인, 클라우드, 빅데이터 교육 강화</li>
            <li>자율선택적 AI·SW기초교과목 확대 및 질적 관리 체계 고도화</li>
          </ul>
        </div>
        <div class="area-group">
          <div class="area-label">산학혁신</div>
          <ul class="item-list">
            <li>오픈소스 에코시스템 운영을 통한 산학협력 선순환 체계 구축</li>
            <li>기업주도 산학협력 교과목 개설을 통한 현장 맞춤형 교육 확대</li>
            <li>창업지원협의회 구성</li>
          </ul>
        </div>
        <div class="area-group">
          <div class="area-label">지역혁신</div>
          <ul class="item-list">
            <li>고교-대학 연계 고교학점제 AI·SW 교과목 운영을 통한 고교 AI·SW교육 내실화</li>
            <li>공교육 연계 부산형 AI·SW가치확산 우수사례 발굴 및 타학교 공유</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="phase-block pb3 fade-up">
      <div class="phase-block-header">
        <h3>성과 공유·확산 단계 (STEP 3)</h3>
        <span class="period-tag">2027–2028</span>
      </div>
      <div class="phase-block-body">
        <div class="area-group">
          <div class="area-label">교육혁신</div>
          <ul class="item-list">
            <li>SMART-PNU 교육혁신모델 고도화 및 PNU-ICEx SW통합교육시스템 운영</li>
            <li>클라우드 시스템, 블록체인/융합보안 전문 과정 운영 고도화</li>
            <li>AI·SW융합교육과정 배출인력 모니터링을 통한 성과분석</li>
          </ul>
        </div>
        <div class="area-group">
          <div class="area-label">산학혁신</div>
          <ul class="item-list">
            <li>취업연계 산학협력 프로젝트와 인턴십 매칭 성과 확산</li>
            <li>전체 학생이 참여하는 기업주도 산학협력 프로젝트 체계 확산</li>
            <li>문제해결형 One-Stop 산학협력 플랫폼 고도화 및 환류 체계 확산</li>
          </ul>
        </div>
        <div class="area-group">
          <div class="area-label">지역혁신</div>
          <ul class="item-list">
            <li>부산형 AI·SW가치확산 우수사례 부울경 지역으로 확대</li>
            <li>정보 소외계층, 미취업자 및 일반인 대상 맞춤형 프로그램 확산</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<hr class="divider"/>




## AI융합교육원 사업추진체계

<section>
  <div class="section-title fade-up">
    <div class="section-num">03</div>
    <h2>AI융합교육원 사업추진체계</h2>
  </div>
  <div class="org-container fade-up">
    <div class="org-center">
      <div class="org-main-box">부산대학교 AI융합교육원<br /><small style={{fontSize: '11px', fontWeight: '400', opacity: '0.7'}}>AI CONVERGENCE EDUCATION INSTITUTE</small></div>
    </div>
    <div class="dept-grid">
      <div class="dept-card">
        <h4>기초교육부</h4>
        <ul>
          <li>AI기본교육 전략수립</li>
          <li>AI기초교육과정 운영</li>
          <li>AI기초교육 비교과과정 운영</li>
          <li>교육콘텐츠 공동개발</li>
        </ul>
      </div>
      <div class="dept-card">
        <h4>전공교육부</h4>
        <ul>
          <li>AI대학 연계 및 인프라 구축</li>
          <li>전공특화트랙 및 부트캠프 운영</li>
          <li>AI교육과정혁신위원회</li>
          <li>글로벌 표준 교육과정 연구</li>
        </ul>
      </div>
      <div class="dept-card">
        <h4>융합교육부</h4>
        <ul>
          <li>AI융합연계전공 운영</li>
          <li>AI융합트랙 및 융합전공 운영</li>
          <li>AI융합마이크로디그리 운영</li>
          <li>개방형 온라인과정 운영</li>
        </ul>
      </div>
      <div class="dept-card">
        <h4>산학협력부</h4>
        <ul>
          <li>산학협력프로젝트·인턴십 운영</li>
          <li>기업주도 교육과정 운영</li>
          <li>해외교육프로그램 운영</li>
          <li>창업교육 지원</li>
        </ul>
      </div>
      <div class="dept-card">
        <h4>가치확산부</h4>
        <ul>
          <li>교내 대상별 AI기본교육지원</li>
          <li>초중고 AI역량강화 교육</li>
          <li>고교-대학연계프로그램 운영</li>
          <li>타 대학과의 AI교육 협력</li>
        </ul>
      </div>
      <div class="dept-card">
        <h4>행정실</h4>
        <ul>
          <li>교내 협력업무</li>
          <li>외부기관 협력업무</li>
          <li>예산편성 및 결산</li>
          <li>인사, 시설 및 장비관리</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<hr class="divider"/>




## 주요 성과

<section>
  <div class="section-title fade-up">
    <div class="section-num">04</div>
    <h2>주요 성과</h2>
  </div>
  <div class="achieve-grid">
    <div class="achieve-card a1 fade-up delay-1">
      <div class="achieve-icon">🎓</div>
      <h3>전공 교육</h3>
      <p>프로그래밍 및 실습교육 강화(4학점 교과목), 산업체 수요 맞춤형 프로젝트 교과목 신설, 학·석사·박사 연계과정 운영, PNU-ICEx SW 통합교육 시스템 구축, PNU 코딩인증제 도입</p>
    </div>
    <div class="achieve-card a2 fade-up delay-2">
      <div class="achieve-icon">🤝</div>
      <h3>산학 협력</h3>
      <p>카카오테크캠퍼스 기업주도 교육 운영, AI·SW전공생 문제해결형 산학협력 프로젝트 의무화, 학점연계 인턴십-산학교류회-창업 해커톤, AI·SW산학협력센터 신설</p>
    </div>
    <div class="achieve-card a3 fade-up delay-3">
      <div class="achieve-icon">💡</div>
      <h3>기초·융합 교육</h3>
      <p>전교생 AI·SW기초교육 의무화(1과목 3학점), AI·SW융합교육과정 다양화(융합연계전공·융합트랙·마이크로디그리 신설), AI·SW융합연계전공 개편</p>
    </div>
    <div class="achieve-card a4 fade-up delay-4">
      <div class="achieve-icon">🌏</div>
      <h3>가치 확산</h3>
      <p>지자체-지역교육청 공교육 협력 체계 구축, AI선도학교 멘토링, 중학교 자유학기제 교육 콘텐츠 및 전문 강사 지원, 개방형 온라인 교육과정 운영</p>
    </div>
  </div>
</section>

<hr class="divider"/>




## 교육혁신 노력 및 대학의 지원 의지

<section>
  <div class="section-title fade-up">
    <div class="section-num">05</div>
    <h2>교육혁신 노력 및 대학의 지원 의지</h2>
  </div>
  <div class="support-grid">
    <div class="support-card fade-up delay-1">
      <h3>AI·SW 관련 대학의 교육 혁신</h3>
      <div class="stat-highlight">+43.3%</div>
      <p>대학정원 감축에도 불구하고 SW학과 정원 43.3% 대폭 증원 (2019년 134명 → 2023년 192명, 58명 증원). 인공지능전공 신설 및 경북대학교와 공동학과 운영. "PNU 비전 2030" 대학 중장기 발전계획을 통해 대표 특성화 단위로 선정.</p>
    </div>
    <div class="support-card fade-up delay-2">
      <h3>AI·SW 교육혁신을 위한 지원 의지</h3>
      <div class="stat-highlight">21,302㎡</div>
      <p>「AI융합교육원」 신설 등 제도적·행정적 지원. AI·SW학과 전용 2개 건물 신축 및 교육시설 확충 (IT관 25.10월 준공, 경암공학관 23.10월 준공: 총 21,302㎡). AI·SW전공 및 융합 교육 지원 시설 확충.</p>
    </div>
  </div>
</section>

<footer>
  <strong>부산대학교 SW중심대학</strong> — 동남권 디지털 대전환을 이끄는 SMART 인재 양성 플랫폼<br />
  <span style={{fontSize: '11px'}}>본 문서는 AI융합교육원 사업 보고서를 기반으로 정리되었습니다.</span>
</footer>
