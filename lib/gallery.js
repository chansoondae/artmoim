// lib/gallery.js
export const galleryData = [
    {
      id: 1,
      category: '전시종료',
      title: '권아람: 피버 아이',
      gallery: '송은',
      location: '청담동',
      period: '25. 06. 24 ~ 25. 08. 09',
      address: '서울 강남구 도산대로 441',
      likes: 89,
      isLiked: false,
      image: 'https://dbuuh2wfbpxcx.cloudfront.net/media/thumbnail/300/0/jpg/eyJpZCI6IjEwNGU1OTQxODJiZTVhMTkyNjJhMTE3M2I2YjdiYTcyLmpwZyIsInN0b3JhZ2UiOiJzdG9yZSJ9?type=image%2Fjpeg&signature=3108f59b0a49eb41723a3944c3032c9f9d675bef95ba1fcc85e0e28a670c1a8a',
      description: '권아람 작가의 피버 아이 개인전'
    },
    {
      id: 2,
      category: '전시종료',
      title: 'Pace: 65 Years',
      gallery: '페이스갤러리',
      location: '한남동',
      period: '25. 05. 21 ~ 25. 08. 09',
      address: '서울 용산구 이태원로 267 페이스갤러리',
      likes: 156,
      isLiked: true,
      image: 'https://www.pacegallery.com/media/images/961014keySYAccHxXYQ1at2fuVl_g6w.width-2000.webp',
      description: '페이스갤러리 65주년 기념 전시'
    },
    {
      id: 3,
      category: '종료임박',
      title: '맑고 투명하고 깨어 있는',
      gallery: '아트선재센터',
      location: '삼청동',
      period: '25. 06. 05 ~ 25. 08. 15',
      address: '서울 종로구 율곡로3길 87 아트선재센터',
      likes: 234,
      isLiked: false,
      image: 'https://artsonje.org/wp-content/uploads/2025/04/square_KOR-768x768.jpg',
      description: '아트선재센터의 특별 기획전'
    },
    {
      id: 4,
      category: '종료임박',
      title: 'A Comedy for Mortals: Paradiso',
      gallery: '리만머핀',
      location: '한남동',
      period: '25. 06. 08 ~ 25. 08. 15',
      address: '서울 용산구 이태원로 213 1층 리만머핀',
      likes: 78,
      isLiked: true,
      image: 'https://img.artlogic.net/w_1600,h_1600,c_limit/exhibit-e/5b363dcb6aa72c840f8e552f/cd7aa868c8caf0d249d647ca4b69076a.jpeg',
      description: '현대미술의 새로운 해석'
    },
    {
      id: 5,
      category: '전시중',
      title: '김선두 개인전',
      gallery: '갤러리밈',
      location: '인사동',
      period: '25. 06. 11 ~ 25. 08. 22',
      address: '서울 종로구 인사동5길 3',
      likes: 45,
      isLiked: false,
      image: 'http://www.gallerymeme.com/upload/banner/20250606152250_0a558a4b.jpg',
      description: '김선두 작가의 회화 작품전'
    },
    {
      id: 6,
      category: '전시중',
      title: 'Li Hei Di: Tongues of Flare',
      gallery: '페이스갤러리',
      location: '한남동',
      period: '25. 05. 29 ~ 25. 08. 29',
      address: '서울 용산구 이태원로 267 페이스갤러리',
      likes: 198,
      isLiked: true,
      image: 'https://www.pacegallery.com/media/images/94859_HEI_DI_v01_version2_det_banner.width-2000.webp',
      description: 'Li Hei Di 작가의 개인전'
    },
    {
      id: 7,
      category: '전시중',
      title: '메두사의 미궁',
      gallery: '바라캇',
      location: '삼청동',
      period: '25. 06. 01 ~ 25. 08. 31',
      address: '서울 종로구 삼청로 58-4',
      likes: 67,
      isLiked: false,
      image: 'http://www.barakat.kr/exhibition/1638684281j_l_img_s.jpg',
      description: '신화와 현실을 오가는 미술 작품들'
    },
    {
      id: 8,
      category: '전시중',
      title: 'Perrotin Dubai',
      gallery: '페로탕 서울',
      location: '청담동',
      period: '25. 04. 16 ~ 25. 09. 01',
      address: '서울 강남구 도산대로45길 10',
      likes: 123,
      isLiked: true,
      image: 'https://s3.perrotin.com/d:1282x756/exhibition/12863_v_1747300215.jpg',
      description: '페로탕 두바이 갤러리 특별전'
    },
    {
      id: 9,
      category: '전시중',
      title: 'KF XR 갤러리 기획전 <공명하는 문자>',
      gallery: 'KF갤러리',
      location: '을지로',
      period: '25. 03. 31 ~ 25. 09. 12',
      address: '서울 중구 을지로5길 26 미래에셋센터원빌딩 서관 2층',
      likes: 89,
      isLiked: false,
      image: 'https://www.mcst.go.kr/attachFiles/cultureInfoCourt/monthServ/1743662715743.jpg',
      description: 'XR 기술을 활용한 디지털 아트 전시'
    },
    {
      id: 10,
      category: '전시중',
      title: 'GUTEN MORGEN, DU SCHÖNE',
      gallery: '쾨닉 서울',
      location: '한남동',
      period: '25. 03. 29 ~ 25. 09. 14',
      address: '서울 용산구 소월로38길 30-34 B1F',
      likes: 145,
      isLiked: true,
      image: 'https://www.koeniggalerie.com/cdn/shop/files/B0216827_1600x.jpg?v=1743151138',
      description: '독일 현대미술의 새로운 지평'
    },
    {
      id: 11,
      category: '전시중',
      title: '하종현 5975',
      gallery: '아트선재센터',
      location: '삼청동',
      period: '25. 08. 01 ~ 25. 09. 30',
      address: '서울 종로구 율곡로3길 87 아트선재센터',
      likes: 267,
      isLiked: false,
      image: 'https://artsonje.org/wp-content/uploads/2025/01/20250203_005658-768x768.jpg',
      description: '하종현 작가의 대표작 5975 전시'
    },
    {
      id: 12,
      category: '전시중',
      title: 'Miquel Barceló - El present permanent',
      gallery: '타데우스 로팍',
      location: '한남동',
      period: '25. 06. 21 ~ 25. 11. 16',
      address: '서울 용산구 독서당로 122-1 1',
      likes: 89,
      isLiked: true,
      image: 'https://d1bc1xn3hygkq4.cloudfront.net/rimage/ftw_webp_2304/image/23774/2e9378f913d220d342bee2d0a0cc37d9',
      description: '미켈 바르셀로 작가의 개인전'
    },
    {
      id: 13,
      category: '전시중',
      title: 'Antony Gormley - Drawing on Space',
      gallery: '타데우스 로팍',
      location: '한남동',
      period: '25. 06. 20 ~ 25. 11. 30',
      address: '서울 용산구 독서당로 122-1 1',
      likes: 312,
      isLiked: false,
      image: 'https://cdn.sanity.io/images/rgmbly0p/production/766e72db9e5e481f9d4704e91e16543069ab5c90-2500x1874.jpg?w=1000&q=85&auto=format',
      description: '안토니 곰리의 공간 드로잉 전시'
    },
    {
      id: 14,
      category: '전시중',
      title: '개관전 Then ( )',
      gallery: '상업화랑',
      location: '을지로',
      period: '25. 01. 01 ~ 25. 12. 31',
      address: '서울 중구 을지로 143 4층',
      likes: 56,
      isLiked: true,
      image: 'https://artbava.s3.amazonaws.com/media/cache/3c/44/3c44e3da4e98d6237933547cc6c48e52.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA2HEPYWZMOND2WFUE%2F20250809%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T025446Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=5e869a8c098d10b15585aeadae82ce6983b88e38ad50f50b979ccd7b97f8a806',
      description: '상업화랑 개관 기념 전시'
    },
    {
      id: 15,
      category: '전시중',
      title: 'MMCA 다원예술 2025: 숲',
      gallery: '국립현대미술관 서울',
      location: '삼청동',
      period: '25. 05. 23 ~ 26. 01. 15',
      address: '서울 종로구 삼청로 30',
      likes: 445,
      isLiked: true,
      image: 'https://www.mmca.go.kr/upload/exhibition/2025/04/2025040701032703116320.png',
      description: '다원예술의 새로운 가능성을 탐구하는 전시'
    },
    {
      id: 16,
      category: '전시중',
      title: '마음_봄',
      gallery: '국립현대미술관 서울',
      location: '삼청동',
      period: '25. 05. 02 ~ 26. 02. 27',
      address: '서울 종로구 삼청로 30',
      likes: 278,
      isLiked: false,
      image: 'https://www.mmca.go.kr/upload/exhibition/2025/04/2025041404592022613259.jpg',
      description: '봄과 마음을 주제로 한 감성적 전시'
    }
  ];
  
  // 유틸리티 함수들
  export const getExhibitionById = (id) => {
    return galleryData.find(exhibition => exhibition.id === id);
  };
  
  export const getExhibitionsByCategory = (category) => {
    return galleryData.filter(exhibition => exhibition.category === category);
  };
  
  export const getExhibitionsByLocation = (location) => {
    return galleryData.filter(exhibition => 
      exhibition.location.includes(location)
    );
  };
  
  export const getExhibitionsByGallery = (gallery) => {
    return galleryData.filter(exhibition => 
      exhibition.gallery.includes(gallery)
    );
  };
  
  export const toggleExhibitionLike = (id) => {
    const exhibition = getExhibitionById(id);
    if (exhibition) {
      exhibition.isLiked = !exhibition.isLiked;
      exhibition.likes += exhibition.isLiked ? 1 : -1;
    }
    return exhibition;
  };
  
  export const sortExhibitionsByLikes = () => {
    return [...galleryData].sort((a, b) => b.likes - a.likes);
  };
  
  export const getPopularExhibitions = (limit = 3) => {
    return sortExhibitionsByLikes().slice(0, limit);
  };
  
  export const getExhibitionsByRegion = (region) => {
    return galleryData.filter(exhibition => 
      exhibition.location.includes(region)
    );
  };
  
  export const getCurrentExhibitions = () => {
    // 현재 진행 중인 전시만 필터링 (실제 앱에서는 날짜 비교 로직 필요)
    return galleryData.filter(exhibition => 
      !exhibition.period.includes('25. 01. 01 ~ 25. 12. 31') // 상설전 제외
    );
  };
  
  export const getUniqueGalleries = () => {
    return [...new Set(galleryData.map(exhibition => exhibition.gallery))];
  };
  
  export const getUniqueLocations = () => {
    return [...new Set(galleryData.map(exhibition => exhibition.location))];
  };