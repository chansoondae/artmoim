// lib/mypage.js

// 사용자 프로필 정보
export const userProfile = {
    id: 1,
    name: '차가운순대',
    email: 'artlover@artfriends.com',
    profileImage: '/images/profile/user-profile.jpg',
    joinDate: '2024.03.15',
    location: '서울, 한국',
    bio: '미술과 사진을 사랑하는 직장인입니다. 주말마다 갤러리 투어를 다니며 새로운 작품들을 만나고 있어요 🎨',
    mannerTemperature: 37.8,
    exhibitionType: 'INFP', // MBTI 기반 전시 관람 성향
    totalMeetups: 24,
    totalExhibitions: 89,
    followers: 156,
    following: 43
  };
  
  // 참여했던 모임 히스토리
  export const meetupHistory = [
    {
      id: 1,
      title: '미셸앙리 VIVID 모다갤러리',
      host: '까비',
      date: '2024.08.12',
      status: '참여완료',
      rating: 5,
      review: '전시도 좋았고 함께 간 분들도 모두 좋으셨어요!',
      image: '/images/meetups/meetup1.jpg'
    },
    {
      id: 2,
      title: '백영수 미술관 + 서울시립 사진미술관',
      host: '바람은',
      date: '2024.08.09',
      status: '참여완료',
      rating: 4,
      review: '사진 전시가 특히 인상깊었습니다.',
      image: '/images/meetups/meetup2.jpg'
    },
    {
      id: 3,
      title: '송은 도슨트 투어',
      host: '꿀물',
      date: '2024.07.31',
      status: '참여완료',
      rating: 5,
      review: '도슨트 설명이 정말 유익했어요!',
      image: '/images/meetups/meetup3.jpg'
    },
    {
      id: 4,
      title: '서울대 미술관 함께 가실분',
      host: '연지빛',
      date: '2024.07.24',
      status: '참여예정',
      rating: null,
      review: null,
      image: '/images/meetups/meetup4.jpg'
    }
  ];
  
  // 전시 관람 인증 기록
  export const exhibitionCertifications = [
    {
      id: 1,
      title: '권아람: 피버 아이',
      gallery: '송은',
      date: '2024.08.12',
      image: 'https://dbuuh2wfbpxcx.cloudfront.net/media/thumbnail/300/0/jpg/eyJpZCI6IjEwNGU1OTQxODJiZTVhMTkyNjJhMTE3M2I2YjdiYTcyLmpwZyIsInN0b3JhZ2UiOiJzdG9yZSJ9?type=image%2Fjpeg&signature=3108f59b0a49eb41723a3944c3032c9f9d675bef95ba1fcc85e0e28a670c1a8a',
      tags: ['개인전', '현대미술', '회화']
    },
    {
      id: 2,
      title: 'Pace: 65 Years',
      gallery: '페이스갤러리',
      date: '2024.08.05',
      image: 'https://www.pacegallery.com/media/images/961014keySYAccHxXYQ1at2fuVl_g6w.width-2000.webp',
      tags: ['기념전', '컬렉션', '국제']
    },
    {
      id: 3,
      title: '맑고 투명하고 깨어 있는',
      gallery: '아트선재센터',
      date: '2024.07.28',
      image: 'https://artsonje.org/wp-content/uploads/2025/04/square_KOR-768x768.jpg',
      tags: ['기획전', '실험미술', '설치']
    },
    {
      id: 4,
      title: '하종현 5975',
      gallery: '아트선재센터',
      date: '2024.07.15',
      image: 'https://artsonje.org/wp-content/uploads/2025/01/20250203_005658-768x768.jpg',
      tags: ['개인전', '단색화', '한국미술']
    },
    {
      id: 5,
      title: 'MMCA 다원예술 2025: 숲',
      gallery: '국립현대미술관 서울',
      date: '2024.07.08',
      image: 'https://www.mmca.go.kr/upload/exhibition/2025/04/2025040701032703116320.png',
      tags: ['기획전', '다원예술', '자연']
    },
    {
      id: 6,
      title: '메두사의 미궁',
      gallery: '바라캇',
      date: '2024.06.20',
      image: 'http://www.barakat.kr/exhibition/1638684281j_l_img_s.jpg',
      tags: ['기획전', '신화', '현대해석']
    }
  ];
  
  // 매너온도 세부 평가 항목
  export const mannerDetails = {
    attendance: 95, // 모임 참석률
    punctuality: 92, // 시간 약속
    communication: 88, // 소통 능력
    consideration: 90, // 배려심
    participation: 85 // 적극성
  };
  
  // 유틸리티 함수들
  export const getMannerGrade = (temperature) => {
    if (temperature >= 40) return { grade: '최고', color: 'text-green-600' };
    if (temperature >= 37) return { grade: '좋음', color: 'text-blue-600' };
    if (temperature >= 35) return { grade: '보통', color: 'text-yellow-600' };
    return { grade: '개선필요', color: 'text-red-600' };
  };
  
  export const getCompletedMeetups = () => {
    return meetupHistory.filter(meetup => meetup.status === '참여완료');
  };
  
  export const getUpcomingMeetups = () => {
    return meetupHistory.filter(meetup => meetup.status === '참여예정');
  };
  
  export const getRecentCertifications = (limit = 6) => {
    return exhibitionCertifications.slice(0, limit);
  };