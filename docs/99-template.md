---
id: template
title: 브로슈어 블록 작성 가이드 — 전체 디렉티브 참조서
sidebar_position: 99
nav_label: 템플릿
theme: public-blue
hide_title: true
---

:::hero
badge: 📋 TEMPLATE GUIDE
title: 브로슈어 블록 작성 가이드
description: 모든 ::: 블록의 사용법과 라이브 예시를 한 곳에서 확인하세요. JSX 없이 ::: 문법만으로 모든 레이아웃을 만들 수 있습니다.
:::

---

## 핵심 규칙

- 모든 블록은 `:::블록이름` 으로 시작하고 `:::` 으로 끝납니다
- 속성은 `key: 값` 형태로 적습니다
- 목록 항목은 `-` 로 시작하며, 하위 속성은 2칸 들여쓰기합니다
- 항목 내 여러 값은 `|` 파이프로 구분합니다 (items 필드)
- 큰따옴표(`"`), 꺾쇠(`<>`)는 속성값에 넣지 마세요
- 숫자 특수기호(①②③)는 반드시 따옴표로 감쌉니다: `"①"`

---

## ① hero — 상단 히어로 배너

페이지 맨 위에 반드시 배치합니다. 파란 그라데이션 배경에 뱃지·제목·설명이 표시됩니다.

**속성:**
| 속성 | 필수 | 설명 |
|------|------|------|
| badge | 권장 | 챕터 번호·카테고리 레이블 |
| title | 필수 | 크게 표시되는 메인 제목 |
| description | 권장 | 부제목 설명 (1~2문장) |

```
:::hero
badge: CHAPTER 01 · 사업소개
title: 진정한 AI·SW 가치확산을 실현하는 부산대학교 SW중심대학
description: 대학교육을 SW중심으로 혁신함으로써 학생·기업·사회의 Software 경쟁력을 강화합니다.
:::
```

:::hero
badge: CHAPTER 01 · 사업소개
title: 진정한 AI·SW 가치확산을 실현하는 부산대학교 SW중심대학
description: 대학교육을 SW중심으로 혁신함으로써 학생·기업·사회의 Software 경쟁력을 강화합니다.
:::

---

## ② kpi — 핵심 지표 가로 나열

숫자·통계를 가로로 나란히 보여줍니다. 큰 숫자가 강조됩니다.

**속성:**
| 속성 | 필수 | 설명 |
|------|------|------|
| subtitle | 선택 | 영문 소제목 |
| title | 선택 | 한글 제목 |

**항목 속성:**
| 속성 | 설명 |
|------|------|
| label | 지표 이름 |
| value | 숫자/값 (크게 표시) |
| sub | 보조 설명 |

```
:::kpi
subtitle: Key Figures
title: 핵심 현황

- label: SW학과 정원
  value: 192명
  sub: 2019년 대비 43% 순증

- label: 전공 특화 트랙
  value: 8개
  sub: 클라우드·보안·IoT 등

- label: 동남권 AI·SW
  value: 거점 1위
  sub: 국립대학 최초 SW중심대학 선정
:::
```

:::kpi
subtitle: Key Figures
title: 핵심 현황

- label: SW학과 정원
  value: 192명
  sub: 2019년 대비 43% 순증

- label: 전공 특화 트랙
  value: 8개
  sub: 클라우드·보안·IoT 등

- label: 동남권 AI·SW
  value: 거점 1위
  sub: 국립대학 최초 SW중심대학 선정
:::

---

## ③ stats — 통계 카드 그리드

kpi와 비슷하지만 카드 형태로 배치됩니다.

**속성:**
| 속성 | 설명 |
|------|------|
| title | 섹션 제목 |
| subtitle | 영문 소제목 |

**항목 속성:**
| 속성 | 설명 |
|------|------|
| label | 지표 이름 |
| value | 숫자/값 |
| sub | 보조 설명 |

```
:::stats
title: 주요 성과 지표
subtitle: KEY PERFORMANCE INDICATORS

- label: 졸업생 취업률
  value: 89.3%
  sub: 전국 상위 5% 수준

- label: 산학협력 기업
  value: 247개사
  sub: 부울경 기반 주요 ICT 기업

- label: 교육 수혜 학생
  value: 12,400명
  sub: 누적 기준 2023년
:::
```

:::stats
title: 주요 성과 지표
subtitle: KEY PERFORMANCE INDICATORS

- label: 졸업생 취업률
  value: 89.3%
  sub: 전국 상위 5% 수준

- label: 산학협력 기업
  value: 247개사
  sub: 부울경 기반 주요 ICT 기업

- label: 교육 수혜 학생
  value: 12,400명
  sub: 누적 기준 2023년
:::

---

## ④ cards — 카드 그리드

아이콘+제목+설명 카드를 그리드로 배치합니다.

**속성:**
| 속성 | 필수 | 설명 |
|------|------|------|
| title | 선택 | 섹션 제목 |
| subtitle | 선택 | 영문 소제목 |
| columns | 선택 | 열 수 (2~4, 기본 3) |
| variant | 선택 | `elevated` (그림자), `outlined` (테두리) |

**항목 속성:**
| 속성 | 설명 |
|------|------|
| icon | 이모지 아이콘 |
| title | 카드 제목 |
| description | 카드 설명 |

```
:::cards
title: 5대 핵심 교육 미션
subtitle: CORE EDUCATION MISSION
columns: 3
variant: elevated

- title: AI·SW 전문인력 양성
  description: 이론과 실무를 겸비한 AI·SW 전문 교육으로 실무형 인재 양성
  icon: 🎯

- title: 실효성 있는 산학협력
  description: 산학협력 프로젝트, 채용연계형 인턴십을 통한 실무 역량 교육
  icon: 🤝

- title: AI·SW 가치확산
  description: 공교육 내 AI·SW 교육 강화, 맞춤형 프로그램 운영
  icon: 🌏
:::
```

:::cards
title: 5대 핵심 교육 미션
subtitle: CORE EDUCATION MISSION
columns: 3
variant: elevated

- title: AI·SW 전문인력 양성
  description: 이론과 실무를 겸비한 AI·SW 전문 교육으로 실무형 인재 양성
  icon: 🎯

- title: 실효성 있는 산학협력
  description: 산학협력 프로젝트, 채용연계형 인턴십을 통한 실무 역량 교육
  icon: 🤝

- title: AI·SW 가치확산
  description: 공교육 내 AI·SW 교육 강화, 맞춤형 프로그램 운영
  icon: 🌏
:::

---

## ⑤ panel — 아이콘+제목+목록 패널

파란 헤더바 아래 그리드로 나열합니다. 두 가지 스타일로 사용 가능합니다.

**속성:**
| 속성 | 필수 | 설명 |
|------|------|------|
| header | 필수 | 상단 헤더 제목 |
| headersub | 선택 | 헤더 영문 부제목 |
| columns | 선택 | 열 수 (2~4, 기본 3) |

**항목 속성 — 목록형 (`items`):**
```
:::panel
header: AI융합교육원 사업추진체계
headersub: Organization
columns: 3

- icon: 📚
  title: 기초교육부
  items: AI기본교육 전략수립 | AI기초교육과정 운영 | 교육콘텐츠 공동개발

- icon: 🎓
  title: 전공교육부
  items: AI대학 연계 및 인프라 구축 | 전공특화트랙 운영

- icon: 🔗
  title: 융합교육부
  items: AI융합연계전공 운영 | 개방형 온라인과정 운영
:::
```

:::panel
header: AI융합교육원 사업추진체계
headersub: Organization
columns: 3

- icon: 📚
  title: 기초교육부
  items: AI기본교육 전략수립 | AI기초교육과정 운영 | 교육콘텐츠 공동개발

- icon: 🎓
  title: 전공교육부
  items: AI대학 연계 및 인프라 구축 | 전공특화트랙 운영

- icon: 🔗
  title: 융합교육부
  items: AI융합연계전공 운영 | 개방형 온라인과정 운영
:::

**항목 속성 — 설명형 (`desc`):**
```
:::panel
header: 8개 AI·SW 전공 특화 트랙
headersub: SPECIALIZED CURRICULUM TRACKS
columns: 4

- icon: ☁️
  title: 클라우드
  desc: 클라우드 시장 연 18% 성장. 2030년 약 80만 명 신규 일자리 창출 전망

- icon: 🔒
  title: 융합보안
  desc: 차세대 보안 세계시장 연평균 15.33% 성장

- icon: 🤖
  title: 생성AI
  desc: 글로벌 시장 연평균 20% 이상 성장

- icon: 🧠
  title: 인공지능응용
  desc: 글로벌 시장 2030년까지 연평균 30% 이상 성장 전망
:::
```

:::panel
header: 8개 AI·SW 전공 특화 트랙
headersub: SPECIALIZED CURRICULUM TRACKS
columns: 4

- icon: ☁️
  title: 클라우드
  desc: 클라우드 시장 연 18% 성장. 2030년 약 80만 명 신규 일자리 창출 전망

- icon: 🔒
  title: 융합보안
  desc: 차세대 보안 세계시장 연평균 15.33% 성장

- icon: 🤖
  title: 생성AI
  desc: 글로벌 시장 연평균 20% 이상 성장

- icon: 🧠
  title: 인공지능응용
  desc: 글로벌 시장 2030년까지 연평균 30% 이상 성장 전망
:::

---

## ⑥ stepper — 단계별 프로세스

가로로 나열된 단계 카드입니다. 로드맵·PDCA·절차 표현에 적합합니다.

**속성:**
| 속성 | 설명 |
|------|------|
| header | 섹션 헤더 제목 |
| headersub | 영문 부제목 |

**항목 속성:**
| 속성 | 설명 |
|------|------|
| phase | 단계 레이블 (PLAN, DO, 1단계 등) |
| period | 기간 또는 보조 레이블 |
| title | 단계 제목 |
| items | 세부 항목 (`|` 파이프 구분) |

```
:::stepper
header: 3단계 추진 로드맵 · 2023–2028
headersub: THREE-PHASE ROADMAP

- phase: 1단계
  period: 2023–2024
  title: AI·SW 교육체계 재정비
  items: 8개 전공트랙 신설 | 인공지능 공동학과 신설 | PNU DevCloud 구축

- phase: 2단계
  period: 2025–2026
  title: 맞춤형 교육 내실화
  items: SMART-PNU 교육혁신모델 내실화 | 산학협력 선순환 체계 구축

- phase: 3단계
  period: 2027–2028
  title: 성과 분석 및 공유확산
  items: PNU-ICEx 성과 관리 | 취업연계 인턴십 성과 확산
:::
```

:::stepper
header: 3단계 추진 로드맵 · 2023–2028
headersub: THREE-PHASE ROADMAP

- phase: 1단계
  period: 2023–2024
  title: AI·SW 교육체계 재정비
  items: 8개 전공트랙 신설 | 인공지능 공동학과 신설 | PNU DevCloud 구축

- phase: 2단계
  period: 2025–2026
  title: 맞춤형 교육 내실화
  items: SMART-PNU 교육혁신모델 내실화 | 산학협력 선순환 체계 구축

- phase: 3단계
  period: 2027–2028
  title: 성과 분석 및 공유확산
  items: PNU-ICEx 성과 관리 | 취업연계 인턴십 성과 확산
:::

---

## ⑦ timeline — 순서형 타임라인

번호가 달린 단계를 세로로 나열합니다. stepper의 세로 버전입니다.

**속성:**
| 속성 | 설명 |
|------|------|
| title | 섹션 제목 |
| subtitle | 영문 소제목 |

**항목 속성:**
| 속성 | 설명 |
|------|------|
| phase | 단계/기간 레이블 |
| title | 단계 제목 |
| description | 단계 설명 |
| accent | `true` 입력 시 강조 스타일 |

```
:::timeline
title: 추진 일정
subtitle: PROJECT TIMELINE

- phase: 2023년 1분기
  title: 사업 출범 및 기반 구축
  description: SW중심대학 사업 선정, 추진위원회 구성, 전담 조직 설치

- phase: 2024년
  title: 교육과정 전면 개편
  description: 8개 특화트랙 교육과정 신설, 산업체 자문위원회 운영
  accent: true

- phase: 2025–2028년
  title: 성과 창출 및 확산
  description: 취업률 90% 목표, 지역 SW 가치확산 거점 완성
:::
```

:::timeline
title: 추진 일정
subtitle: PROJECT TIMELINE

- phase: 2023년 1분기
  title: 사업 출범 및 기반 구축
  description: SW중심대학 사업 선정, 추진위원회 구성, 전담 조직 설치

- phase: 2024년
  title: 교육과정 전면 개편
  description: 8개 특화트랙 교육과정 신설, 산업체 자문위원회 운영
  accent: true

- phase: 2025–2028년
  title: 성과 창출 및 확산
  description: 취업률 90% 목표, 지역 SW 가치확산 거점 완성
:::

---

## ⑧ strategy — 전략 카드

어두운 그라데이션 배경에 알파벳 레터+전략 카드를 배치합니다.

**속성:**
| 속성 | 설명 |
|------|------|
| title | 섹션 제목 |
| subtitle | 영문 소제목 |

**항목 속성:**
| 속성 | 설명 |
|------|------|
| letter | 강조 알파벳 1자 |
| title | 전략 이름 |
| desc | 전략 설명 |

```
:::strategy
title: 4C 추진전략
subtitle: STRATEGIC FRAMEWORK

- letter: C
  title: Customized Education
  desc: 신기술 반영 교육과정 기반 맞춤형 교육혁신

- letter: C
  title: Convergence Research
  desc: 미래지향적 융합 연구 및 성과 창출

- letter: C
  title: Cooperative Industry-Univ.
  desc: 소통·관계 중심 산학협력 네트워크 강화

- letter: C
  title: Connected Regional Community
  desc: SW가치확산 지역거점 AI·SW 허브 구축
:::
```

:::strategy
title: 4C 추진전략
subtitle: STRATEGIC FRAMEWORK

- letter: C
  title: Customized Education
  desc: 신기술 반영 교육과정 기반 맞춤형 교육혁신

- letter: C
  title: Convergence Research
  desc: 미래지향적 융합 연구 및 성과 창출

- letter: C
  title: Cooperative Industry-Univ.
  desc: 소통·관계 중심 산학협력 네트워크 강화

- letter: C
  title: Connected Regional Community
  desc: SW가치확산 지역거점 AI·SW 허브 구축
:::

---

## ⑨ alphagrid — 알파벳 뱃지 그리드

컬러 뱃지+레이블을 그리드로 나열합니다. 약어 모델·인재상 표현에 적합합니다.

**속성:**
| 속성 | 설명 |
|------|------|
| title | 섹션 제목 |
| subtitle | 영문 소제목 |
| columns | 열 수 (2~4, 기본 4) |

**항목 속성:**
| 속성 | 설명 |
|------|------|
| letter | 뱃지 알파벳 1자 |
| label | 한글 설명 |
| sub | 영문 보조 설명 |

```
:::alphagrid
title: SMARTPNU — 8가지 인재상
subtitle: TALENT MODEL
columns: 4

- letter: S
  label: 문제해결형 혁신인재
  sub: Software

- letter: M
  label: 미래지향적 혁신인재
  sub: Medoid

- letter: A
  label: 자기주도형 혁신인재
  sub: AIMCSD

- letter: R
  label: 지역 혁신인재
  sub: Region
:::
```

:::alphagrid
title: SMARTPNU — 8가지 인재상
subtitle: TALENT MODEL
columns: 4

- letter: S
  label: 문제해결형 혁신인재
  sub: Software

- letter: M
  label: 미래지향적 혁신인재
  sub: Medoid

- letter: A
  label: 자기주도형 혁신인재
  sub: AIMCSD

- letter: R
  label: 지역 혁신인재
  sub: Region
:::

---

## ⑩ roadmap — 단계별 로드맵 트랙

번호+단계명+제목+불릿을 가로 트랙으로 나열합니다. stepper와 유사하나 더 컴팩트합니다.

**속성:**
| 속성 | 설명 |
|------|------|
| title | 섹션 제목 |
| subtitle | 영문 소제목 |

**항목 속성:**
| 속성 | 설명 |
|------|------|
| phase | 단계 이름 (1단계, Phase 1 등) |
| title | 단계 제목 |
| bullets | 세부 항목 (`|` 파이프 구분) |

```
:::roadmap
title: 사업 추진 로드맵
subtitle: IMPLEMENTATION ROADMAP

- phase: 1단계
  title: 기반 구축
  bullets: SW중심대학 출범 | 전담조직 설치 | 기초 교과 개편

- phase: 2단계
  title: 교육 고도화
  bullets: 8개 특화트랙 운영 | 산학협력 확대 | PNU DevCloud 구축

- phase: 3단계
  title: 성과 확산
  bullets: 지역 SW 허브 완성 | 성과 공유 세미나 | 모델 이전
:::
```

:::roadmap
title: 사업 추진 로드맵
subtitle: IMPLEMENTATION ROADMAP

- phase: 1단계
  title: 기반 구축
  bullets: SW중심대학 출범 | 전담조직 설치 | 기초 교과 개편

- phase: 2단계
  title: 교육 고도화
  bullets: 8개 특화트랙 운영 | 산학협력 확대 | PNU DevCloud 구축

- phase: 3단계
  title: 성과 확산
  bullets: 지역 SW 허브 완성 | 성과 공유 세미나 | 모델 이전
:::

---

## ⑪ badges — 컬러 뱃지 모음

컬러 그라데이션 원형 뱃지를 나열합니다. alphagrid보다 단순한 형태입니다.

**속성:**
| 속성 | 설명 |
|------|------|
| title | 섹션 제목 |
| subtitle | 영문 소제목 |
| dark | `true` 입력 시 어두운 배경 |

**항목 속성:**
| 속성 | 설명 |
|------|------|
| letter | 뱃지 알파벳 1자 |
| label | 뱃지 레이블 |

```
:::badges
title: 핵심 역량 키워드
subtitle: CORE COMPETENCIES

- letter: A
  label: AI

- letter: D
  label: Data

- letter: S
  label: Security

- letter: C
  label: Cloud
:::
```

:::badges
title: 핵심 역량 키워드
subtitle: CORE COMPETENCIES

- letter: A
  label: AI

- letter: D
  label: Data

- letter: S
  label: Security

- letter: C
  label: Cloud
:::

---

## ⑫ chapters — 챕터 목차 카드

번호+카테고리+제목+설명+링크를 그리드로 나열합니다. 목차나 과목 소개에 사용합니다.

**속성:**
| 속성 | 설명 |
|------|------|
| title | 섹션 제목 |
| subtitle | 영문 소제목 |
| columns | 열 수 |

**항목 속성:**
| 속성 | 설명 |
|------|------|
| category | 카테고리 레이블 |
| title | 챕터 제목 |
| description | 챕터 설명 |
| link | 링크 URL (선택) |

```
:::chapters
title: 브로슈어 구성
subtitle: BROCHURE CONTENTS
columns: 3

- category: CHAPTER 01
  title: 대학 소개 및 운영 방향
  description: 부산대학교 AI·SW 교육의 비전과 목표, 중장기 추진 전략을 소개합니다.
  link: /docs/intro

- category: CHAPTER 02
  title: 핵심 성과 및 역량
  description: SW중심대학 선정 이후 달성한 정량·정성적 성과를 정리합니다.
  link: /docs/part-2

- category: CHAPTER 03
  title: 교육혁신 체계
  description: 학사 조직 개편과 글로벌 표준 교육모델 SMART-PNU를 소개합니다.
  link: /docs/part-3
:::
```

:::chapters
title: 브로슈어 구성
subtitle: BROCHURE CONTENTS
columns: 3

- category: CHAPTER 01
  title: 대학 소개 및 운영 방향
  description: 부산대학교 AI·SW 교육의 비전과 목표, 중장기 추진 전략을 소개합니다.
  link: /docs/intro

- category: CHAPTER 02
  title: 핵심 성과 및 역량
  description: SW중심대학 선정 이후 달성한 정량·정성적 성과를 정리합니다.
  link: /docs/part-2

- category: CHAPTER 03
  title: 교육혁신 체계
  description: 학사 조직 개편과 글로벌 표준 교육모델 SMART-PNU를 소개합니다.
  link: /docs/part-3
:::

---

## ⑬ quote — 인용문 블록

강조 인용문을 표시합니다. 학장 인사말, 핵심 메시지 등에 사용합니다.

**속성:**
| 속성 | 필수 | 설명 |
|------|------|------|
| text | 필수 | 인용 문장 |
| author | 선택 | 발화자 이름 |
| role | 선택 | 직책·소속 |
| accent | 선택 | `true` 입력 시 강조 스타일 |

```
:::quote
text: AI·SW 교육은 더 이상 선택이 아닌 필수입니다. 부산대학교는 동남권 AI 교육의 거점으로서 대한민국 디지털 미래를 이끌어 나가겠습니다.
author: 차정인
role: 부산대학교 총장
accent: true
:::
```

:::quote
text: AI·SW 교육은 더 이상 선택이 아닌 필수입니다. 부산대학교는 동남권 AI 교육의 거점으로서 대한민국 디지털 미래를 이끌어 나가겠습니다.
author: 차정인
role: 부산대학교 총장
accent: true
:::

---

## ⑭ cta — 행동 유도(Call to Action)

행동을 유도하는 버튼과 메시지를 표시합니다. 페이지 하단에 배치하는 경우가 많습니다.

**속성:**
| 속성 | 필수 | 설명 |
|------|------|------|
| title | 필수 | 메인 메시지 |
| description | 선택 | 부제 설명 |
| buttonText | 선택 | 버튼 텍스트 |
| buttonLink | 선택 | 버튼 클릭 시 이동할 URL |

```
:::cta
title: AI·SW 교육, 지금 시작하세요
description: 부산대학교 AI융합교육원의 다양한 교육 프로그램을 만나보세요.
buttonText: 교육과정 바로가기
buttonLink: /docs/intro
:::
```

:::cta
title: AI·SW 교육, 지금 시작하세요
description: 부산대학교 AI융합교육원의 다양한 교육 프로그램을 만나보세요.
buttonText: 교육과정 바로가기
buttonLink: /docs/intro
:::

---

## ⑮ split — 좌우 분할 패널

왼쪽(통계·다크)과 오른쪽(목록·라이트)을 나란히 배치합니다.

**속성:**
| 속성 | 설명 |
|------|------|
| left-header | 왼쪽 패널 제목 |
| left-sub | 왼쪽 패널 부제목 |
| left-dark | `true` 입력 시 왼쪽 어두운 배경 |
| right-header | 오른쪽 패널 제목 |
| right-sub | 오른쪽 패널 부제목 |

**`left:` 섹션 항목 속성:**
| 속성 | 설명 |
|------|------|
| label | 항목 이름 |
| value | 숫자/값 (크게 표시) |
| desc | 보조 설명 |

**`right:` 섹션 항목 속성:**
| 속성 | 설명 |
|------|------|
| num | 번호 (반드시 따옴표: `"①"`) |
| title | 항목 제목 |
| desc | 항목 설명 |

```
:::split
left-header: 부산대–경북대 인공지능 공동학과
left-sub: Joint AI Department · 전국 최초
left-dark: true
right-header: 융합교육 혁신 4방향
right-sub: Convergence Strategy

left:
- label: 부산대학교
  value: 68명
  desc: AI Software 특화 교과목 주관

- label: 경북대학교
  value: 60명
  desc: AI Hardware 특화 교과목 주관

- label: 총 정원
  value: 128명
  desc: 전국 최초 인공지능 공동학과

right:
- num: "①"
  title: 융합교육체계 다변화
  desc: AI·SW융합트랙(14개) 추가. 수요별 다양한 융합 교육 과정

- num: "②"
  title: 융합 범위 확장
  desc: 이공계 중심에서 인문·사회 포함 전 분야로 확장
:::
```

:::split
left-header: 부산대–경북대 인공지능 공동학과
left-sub: Joint AI Department · 전국 최초
left-dark: true
right-header: 융합교육 혁신 4방향
right-sub: Convergence Strategy

left:
- label: 부산대학교
  value: 68명
  desc: AI Software 특화 교과목 주관

- label: 경북대학교
  value: 60명
  desc: AI Hardware 특화 교과목 주관

- label: 총 정원
  value: 128명
  desc: 전국 최초 인공지능 공동학과

right:
- num: "①"
  title: 융합교육체계 다변화
  desc: AI·SW융합트랙(14개) 추가. 수요별 다양한 융합 교육 과정

- num: "②"
  title: 융합 범위 확장
  desc: 이공계 중심에서 인문·사회 포함 전 분야로 확장
:::

---

## 프론트매터(파일 헤더) 작성 규칙

모든 md 파일 맨 위에 반드시 다음 형식을 포함합니다:

```
---
id: part-5
title: 전공 교육 운영
sidebar_position: 5
nav_label: 전공교육
theme: public-blue
---
```

| 필드 | 설명 |
|------|------|
| id | URL 경로 (영문 소문자, 하이픈) |
| title | 페이지 전체 제목 |
| sidebar_position | 네비게이션 탭 순서 (숫자) |
| nav_label | 상단 네비게이션 탭에 짧게 표시되는 이름 |
| theme | 브로슈어 색상 테마 (`public-blue` 권장) |

---

## AI에게 새 챕터 작성 요청할 때 프롬프트

```
아래 텍스트 자료를 바탕으로 Docusaurus md 파일을 작성해줘.

규칙:
1. 반드시 ::: 디렉티브 문법만 사용 (99-template.md 참고)
2. JSX, HTML 코드는 절대 쓰지 말 것
3. 파일 맨 위에 frontmatter(id, title, sidebar_position, nav_label, theme: public-blue) 넣을 것
4. hero 블록을 가장 먼저 배치하고, 그 다음 kpi → panel/cards/stepper 순으로 배치
5. 내용을 빠짐없이 다 담을 것
6. 숫자 특수기호(①②③)는 반드시 따옴표로 감쌀 것: "①"
7. 큰따옴표나 꺾쇠(<>)는 속성값 안에 절대 쓰지 말 것

사용 가능한 블록:
- hero: 상단 히어로 배너 (필수, 1개)
- kpi: 핵심 숫자 지표 가로 나열
- stats: 통계 카드 그리드
- cards: 아이콘+제목+설명 카드
- panel: 아이콘+제목+목록/설명 패널 (가장 많이 쓰임)
- stepper: 단계별 프로세스 가로 나열
- timeline: 순서형 타임라인 세로 나열
- strategy: 알파벳 레터+전략 카드 (어두운 배경)
- alphagrid: 알파벳 뱃지+설명 그리드
- roadmap: 단계별 로드맵 트랙
- badges: 컬러 뱃지 모음
- chapters: 챕터 목차 카드
- quote: 인용문 블록
- cta: 행동 유도 버튼
- split: 좌우 분할 패널 (left:/right: 섹션 필수)

[여기에 텍스트 자료 붙여넣기]
```
