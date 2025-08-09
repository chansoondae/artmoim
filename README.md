# 🎨 아트프렌즈 (ArtFriends)

> **함께하는 미술 모임** - MBTI 기반 전시 관람 성향으로 나와 잘 맞는 아트프렌즈를 찾아보세요!

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC)](https://tailwindcss.com/)
[![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-Latest-orange)](https://lucide.dev/)

## 📖 프로젝트 소개

아트프렌즈는 **미술과 전시를 사랑하는 사람들을 위한 소셜 플랫폼**입니다. MBTI 기반의 전시 관람 성향 분석을 통해 취향이 비슷한 사람들과 함께 갤러리 투어를 즐길 수 있습니다.

### ✨ 주요 특징

- **🎭 MBTI 기반 전시 관람 성향**: 16가지 성향으로 나만의 아트 취향 발견
- **👥 맞춤형 모임 매칭**: 비슷한 취향의 아트프렌즈와 함께하는 전시 관람
- **📱 직관적인 모바일 UI**: 언제 어디서나 편리한 갤러리 탐색
- **🌈 매너온도 시스템**: 무지개 게이지로 표현되는 신뢰도 평가
- **💬 실시간 채팅**: 개인 및 그룹 채팅으로 원활한 소통
- **📸 관람 인증**: 전시 관람 경험을 기록하고 공유

## 🎨 MBTI 전시 관람 성향 16가지

### 🧠 분석형 (NT)
- **INTJ** - 서사적 감상가
- **INTP** - 철학적 분석가  
- **ENTJ** - 구조적 미니멀리스트
- **ENTP** - 개념적 혁신가

### 💫 외교형 (NF)
- **INFP** - 초현실적 몽상가
- **INFJ** - 정서적 내면주의자
- **ENFP** - 열정적 발견가
- **ENFJ** - 감성적 표현주의자

### 🏛️ 관리형 (SJ)
- **ISTJ** - 역사적 맥락주의자
- **ISFJ** - 차분한 관찰자
- **ESTJ** - 기술적 완벽주의자
- **ESFJ** - 사회적 리얼리스트

### 🎪 탐험형 (SP)
- **ISTP** - 정밀 구조 탐색가
- **ISFP** - 몰입형 풍경주의자
- **ESTP** - 역동적 구조주의자
- **ESFP** - 자유로운 즉흥주의자

## 🚀 시작하기

### 필수 요구사항

- Node.js 18.0 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/chansoondae/artmoim.git
cd artfriends

# 의존성 설치
npm install
# 또는
yarn install

# 개발 서버 실행
npm run dev
# 또는
yarn dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build
npm start

# 또는
yarn build
yarn start
```

## 📁 프로젝트 구조

```
artfriends/
├── app/
│   ├── components/          # 공통 컴포넌트
│   │   └── BottomNav.js    # 하단 네비게이션
│   ├── lib/                # 라이브러리 및 데이터
│   │   ├── exhibitionTypes.js  # MBTI 전시 관람 성향 데이터
│   │   ├── mypage.js       # 마이페이지 데이터
│   │   ├── meetups.js      # 모임 데이터
│   │   ├── chat.js         # 채팅 데이터
│   │   └── gallery.js      # 갤러리 데이터
│   ├── chat/               # 채팅 페이지
│   ├── gallery/            # 갤러리 페이지
│   ├── mypage/             # 마이페이지
│   ├── page.js             # 홈페이지 (모임 목록)
│   ├── layout.js           # 루트 레이아웃
│   └── globals.css         # 글로벌 스타일
├── public/
│   ├── images/
│   │   └── mbti/           # MBTI 타입별 이미지
│   └── favicon.ico
└── README.md
```

## 🎯 주요 기능

### 1. 홈 (모임 목록)
- 다양한 미술 모임 조회
- 남은 자리 실시간 표시
- 좋아요 및 관심 표시
- 모임 상태별 분류

### 2. 갤러리
- 전시 정보 검색 및 필터링
- 지역별 전시 분류
- 전시 상태 (진행중/종료임박/종료) 표시
- 좋아요 기능

### 3. 채팅
- 개인 채팅 및 그룹 채팅
- 읽지 않은 메시지 카운트
- 온라인 상태 표시
- 모임별 그룹 채팅방

### 4. 마이페이지
- **무지개 매너온도**: 참석률, 시간약속, 소통능력, 배려심 평가
- **MBTI 전시 관람 성향**: 16가지 타입별 상세 정보 및 테스트 기능
- **활동 내역**: 참여 모임 및 전시 관람 인증
- **프라이버시 설정**: 성향 공개/비공개 설정

## 🎨 디자인 시스템

### 색상 팔레트
- **Primary**: Purple (#8b5cf6) to Pink (#ec4899) gradient
- **Secondary**: Blue (#3b82f6), Green (#10b981), Orange (#f59e0b)
- **Neutral**: Gray scale (#f9fafb to #111827)

### 특별한 UI 요소
- **무지개 매너온도**: SVG 기반 반원형 그라데이션 게이지
- **MBTI 아트 이미지**: 각 타입별 아르누보 스타일 일러스트
- **부드러운 애니메이션**: 모든 상태 변화에 자연스러운 트랜지션

## 🛠️ 기술 스택

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: JavaScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Images**: Next.js Image Optimization

### 특징
- **반응형 디자인**: 모바일 퍼스트 접근
- **PWA 지원**: 모바일 앱과 같은 경험
- **SEO 최적화**: 메타데이터 및 구조화된 데이터
- **접근성**: WCAG 가이드라인 준수

## 🔮 향후 계획

### Phase 1 (현재)
- [x] 기본 UI/UX 구현
- [x] MBTI 전시 관람 성향 시스템
- [x] 무지개 매너온도 시스템
- [x] 모임/갤러리/채팅 기본 기능

### Phase 2 (예정)
- [ ] 사용자 인증 시스템
- [ ] 실제 데이터베이스 연동
- [ ] 실시간 채팅 구현
- [ ] 지도 기반 갤러리 검색
- [ ] 푸시 알림

### Phase 3 (계획)
- [ ] AI 기반 전시 추천
- [ ] 소셜 기능 확장
- [ ] 결제 시스템
- [ ] 오프라인 이벤트 연동

## 🤝 기여하기

프로젝트에 기여하고 싶으시다면:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 👥 팀

- **기획**: 아트프렌즈 기획팀
- **디자인**: 아트프렌즈 디자인팀  
- **개발**: 아트프렌즈 개발팀

---

**🎨 함께 만들어가는 아트 커뮤니티, 아트프렌즈입니다!**