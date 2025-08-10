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
    rating: 4.8,
    reviewCount: 156,
    savedCount: 342,
    isSaved: false,
    image: 'https://dbuuh2wfbpxcx.cloudfront.net/media/thumbnail/300/0/jpg/eyJpZCI6IjEwNGU1OTQxODJiZTVhMTkyNjJhMTE3M2I2YjdiYTcyLmpwZyIsInN0b3JhZ2UiOiJzdG9yZSJ9?type=image%2Fjpeg&signature=3108f59b0a49eb41723a3944c3032c9f9d675bef95ba1fcc85e0e28a670c1a8a',
    description: '권아람 작가의 피버 아이 개인전',
    reviews: [
      {
        id: 1,
        userId: 'user1',
        nickname: '까비',
        profileImage: 'https://i.pravatar.cc/40?img=1',
        rating: 5,
        comment: '정말 인상적인 전시였어요. 작가의 독특한 시각이 잘 드러났습니다...',
        date: '2025.08.05'
      },
      {
        id: 2,
        userId: 'user2',
        nickname: '티아라',
        profileImage: 'https://i.pravatar.cc/40?img=2',
        rating: 4,
        comment: '색채 표현이 매우 인상깊었어요. 다음에도 이런 전시 보고 싶습니다...',
        date: '2025.08.03'
      },
      {
        id: 3,
        userId: 'user3',
        nickname: '바람은',
        profileImage: 'https://i.pravatar.cc/40?img=3',
        rating: 5,
        comment: '작품 하나하나 모두 완성도가 높았어요. 특히 마지막 작품이...',
        date: '2025.08.01'
      }
    ]
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
    rating: 4.6,
    reviewCount: 243,
    savedCount: 567,
    isSaved: true,
    image: 'https://www.pacegallery.com/media/images/961014keySYAccHxXYQ1at2fuVl_g6w.width-2000.webp',
    description: '페이스갤러리 65주년 기념 전시',
    reviews: [
      {
        id: 4,
        userId: 'user4',
        nickname: '미술관가는날',
        profileImage: 'https://i.pravatar.cc/40?img=4',
        rating: 5,
        comment: '65년 역사를 한눈에 볼 수 있는 뜻깊은 전시였습니다...',
        date: '2025.08.07'
      },
      {
        id: 5,
        userId: 'user5',
        nickname: '그린이',
        profileImage: 'https://i.pravatar.cc/40?img=5',
        rating: 4,
        comment: '역사적 가치가 있는 작품들을 볼 수 있어서 좋았어요...',
        date: '2025.08.04'
      },
      {
        id: 6,
        userId: 'user6',
        nickname: '소라속',
        profileImage: 'https://i.pravatar.cc/40?img=6',
        rating: 5,
        comment: '페이스갤러리의 진가를 알 수 있었던 전시. 강력 추천합니다...',
        date: '2025.08.02'
      }
    ]
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
    rating: 4.7,
    reviewCount: 187,
    savedCount: 421,
    isSaved: false,
    image: 'https://artsonje.org/wp-content/uploads/2025/04/square_KOR-768x768.jpg',
    description: '아트선재센터의 특별 기획전',
    reviews: [
      {
        id: 7,
        userId: 'user7',
        nickname: '로즈골드',
        profileImage: 'https://i.pravatar.cc/40?img=7',
        rating: 5,
        comment: '제목처럼 정말 맑고 투명한 느낌의 전시였어요. 마음이 정화되는...',
        date: '2025.08.08'
      },
      {
        id: 8,
        userId: 'user8',
        nickname: '문올리브',
        profileImage: 'https://i.pravatar.cc/40?img=8',
        rating: 4,
        comment: '아트선재센터 특유의 기획력이 돋보이는 전시. 추천해요...',
        date: '2025.08.06'
      },
      {
        id: 9,
        userId: 'user9',
        nickname: '딸꾹질',
        profileImage: 'https://i.pravatar.cc/40?img=9',
        rating: 5,
        comment: '깊이 있는 작품들로 구성된 전시. 시간 가는 줄 몰랐어요...',
        date: '2025.08.04'
      }
    ]
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
    rating: 4.4,
    reviewCount: 92,
    savedCount: 198,
    isSaved: true,
    image: 'https://img.artlogic.net/w_1600,h_1600,c_limit/exhibit-e/5b363dcb6aa72c840f8e552f/cd7aa868c8caf0d249d647ca4b69076a.jpeg',
    description: '현대미술의 새로운 해석',
    reviews: [
      {
        id: 10,
        userId: 'user10',
        nickname: '파랑새홍',
        profileImage: 'https://i.pravatar.cc/40?img=10',
        rating: 4,
        comment: '제목이 흥미로워서 갔는데 정말 독특한 관점의 작품들이...',
        date: '2025.08.09'
      },
      {
        id: 11,
        userId: 'user11',
        nickname: '방탄조아',
        profileImage: 'https://i.pravatar.cc/40?img=11',
        rating: 5,
        comment: '리만머핀의 색깔이 잘 드러난 전시. 파라디소라는 제목이 딱...',
        date: '2025.08.07'
      },
      {
        id: 12,
        userId: 'user12',
        nickname: '제이커',
        profileImage: 'https://i.pravatar.cc/40?img=12',
        rating: 4,
        comment: '철학적이면서도 유머러스한 작품들. 생각할 거리를 많이 주네요...',
        date: '2025.08.05'
      }
    ]
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
    rating: 4.5,
    reviewCount: 67,
    savedCount: 134,
    isSaved: false,
    image: 'http://www.gallerymeme.com/upload/banner/20250606152250_0a558a4b.jpg',
    description: '김선두 작가의 회화 작품전',
    reviews: [
      {
        id: 13,
        userId: 'user13',
        nickname: '꿀물',
        profileImage: 'https://i.pravatar.cc/40?img=13',
        rating: 5,
        comment: '김선두 작가의 섬세한 붓터치가 인상적이었어요. 색감도 아름답고...',
        date: '2025.08.10'
      },
      {
        id: 14,
        userId: 'user14',
        nickname: '신나는아름쌤',
        profileImage: 'https://i.pravatar.cc/40?img=14',
        rating: 4,
        comment: '인사동 나들이 겸 들렀는데 생각보다 좋은 작품들이 많았어요...',
        date: '2025.08.08'
      },
      {
        id: 15,
        userId: 'user15',
        nickname: '나야',
        profileImage: 'https://i.pravatar.cc/40?img=15',
        rating: 4,
        comment: '갤러리밈의 공간과 작품이 잘 어우러진 전시. 편안한 관람이었어요...',
        date: '2025.08.06'
      }
    ]
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
    rating: 4.3,
    reviewCount: 124,
    savedCount: 289,
    isSaved: true,
    image: 'https://www.pacegallery.com/media/images/94859_HEI_DI_v01_version2_det_banner.width-2000.webp',
    description: 'Li Hei Di 작가의 개인전',
    reviews: [
      {
        id: 16,
        userId: 'user16',
        nickname: '쩡민이',
        profileImage: 'https://i.pravatar.cc/40?img=16',
        rating: 4,
        comment: '중국 현대미술의 새로운 면을 볼 수 있어서 좋았어요...',
        date: '2025.08.11'
      },
      {
        id: 17,
        userId: 'user17',
        nickname: '둔탱이',
        profileImage: 'https://i.pravatar.cc/40?img=17',
        rating: 5,
        comment: '페이스갤러리는 역시 작가 선정이 뛰어나네요. 강추합니다...',
        date: '2025.08.09'
      },
      {
        id: 18,
        userId: 'user18',
        nickname: '멋진꿈',
        profileImage: 'https://i.pravatar.cc/40?img=18',
        rating: 4,
        comment: '작가의 독창적인 표현 방식이 돋보이는 전시. 볼거리가 많아요...',
        date: '2025.08.07'
      }
    ]
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
    rating: 4.2,
    reviewCount: 83,
    savedCount: 156,
    isSaved: false,
    image: 'http://www.barakat.kr/exhibition/1638684281j_l_img_s.jpg',
    description: '신화와 현실을 오가는 미술 작품들',
    reviews: [
      {
        id: 19,
        userId: 'user19',
        nickname: '신화매니아',
        profileImage: 'https://i.pravatar.cc/40?img=19',
        rating: 5,
        comment: '신화를 현대적으로 재해석한 작품들이 정말 흥미로웠어요...',
        date: '2025.08.10'
      },
      {
        id: 20,
        userId: 'user20',
        nickname: 'Kitten',
        profileImage: 'https://i.pravatar.cc/40?img=20',
        rating: 4,
        comment: '바라캇은 항상 독특한 전시를 기획하는 것 같아요. 좋았습니다...',
        date: '2025.08.08'
      },
      {
        id: 21,
        userId: 'user21',
        nickname: '밍기뉴',
        profileImage: 'https://i.pravatar.cc/40?img=21',
        rating: 4,
        comment: '제목처럼 정말 미로 같은 전시. 숨겨진 의미를 찾는 재미가...',
        date: '2025.08.06'
      }
    ]
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
    rating: 4.4,
    reviewCount: 167,
    savedCount: 298,
    isSaved: true,
    image: 'https://s3.perrotin.com/d:1282x756/exhibition/12863_v_1747300215.jpg',
    description: '페로탕 두바이 갤러리 특별전',
    reviews: [
      {
        id: 22,
        userId: 'user22',
        nickname: '제타',
        profileImage: 'https://i.pravatar.cc/40?img=22',
        rating: 4,
        comment: '두바이와 서울을 연결하는 흥미로운 기획. 국제적 감각이 돋보여요...',
        date: '2025.08.11'
      },
      {
        id: 23,
        userId: 'user23',
        nickname: 'Go아트',
        profileImage: 'https://i.pravatar.cc/40?img=23',
        rating: 5,
        comment: '페로탕은 역시 세계적인 갤러리답네요. 작품 퀄리티가 높아요...',
        date: '2025.08.09'
      },
      {
        id: 24,
        userId: 'user24',
        nickname: '토이와',
        profileImage: 'https://i.pravatar.cc/40?img=24',
        rating: 4,
        comment: '청담동에서 볼 수 있는 수준 높은 전시. 추천합니다...',
        date: '2025.08.07'
      }
    ]
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
    rating: 4.1,
    reviewCount: 73,
    savedCount: 145,
    isSaved: false,
    image: 'https://www.mcst.go.kr/attachFiles/cultureInfoCourt/monthServ/1743662715743.jpg',
    description: 'XR 기술을 활용한 디지털 아트 전시',
    reviews: [
      {
        id: 25,
        userId: 'user25',
        nickname: '샬랄라',
        profileImage: 'https://i.pravatar.cc/40?img=25',
        rating: 5,
        comment: 'XR 기술과 전통 문자의 만남이 정말 신선했어요. 미래적이에요...',
        date: '2025.08.10'
      },
      {
        id: 26,
        userId: 'user26',
        nickname: '트래블러버',
        profileImage: 'https://i.pravatar.cc/40?img=26',
        rating: 4,
        comment: '을지로에서 이런 첨단 전시를 볼 수 있다니. 시대가 많이 변했네요...',
        date: '2025.08.08'
      },
      {
        id: 27,
        userId: 'user27',
        nickname: '비포선라이즈',
        profileImage: 'https://i.pravatar.cc/40?img=27',
        rating: 4,
        comment: '기술과 예술의 융합. 새로운 가능성을 보여주는 전시였어요...',
        date: '2025.08.06'
      }
    ]
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
    rating: 4.5,
    reviewCount: 129,
    savedCount: 267,
    isSaved: true,
    image: 'https://www.koeniggalerie.com/cdn/shop/files/B0216827_1600x.jpg?v=1743151138',
    description: '독일 현대미술의 새로운 지평',
    reviews: [
      {
        id: 28,
        userId: 'user28',
        nickname: '초록해',
        profileImage: 'https://i.pravatar.cc/40?img=28',
        rating: 5,
        comment: '독일 현대미술의 진수를 볼 수 있는 전시. 쾨닉갤러리 최고예요...',
        date: '2025.08.11'
      },
      {
        id: 29,
        userId: 'user29',
        nickname: '여유',
        profileImage: 'https://i.pravatar.cc/40?img=29',
        rating: 4,
        comment: '한남동에 이런 갤러리가 있다니. 작품들이 모두 수준급이에요...',
        date: '2025.08.09'
      },
      {
        id: 30,
        userId: 'user30',
        nickname: '어디론가',
        profileImage: 'https://i.pravatar.cc/40?img=30',
        rating: 4,
        comment: '현대적이면서도 따뜻한 느낌의 전시. 제목이 참 예쁘네요...',
        date: '2025.08.07'
      }
    ]
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
    rating: 4.9,
    reviewCount: 198,
    savedCount: 456,
    isSaved: false,
    image: 'https://artsonje.org/wp-content/uploads/2025/01/20250203_005658-768x768.jpg',
    description: '하종현 작가의 대표작 5975 전시',
    reviews: [
      {
        id: 31,
        userId: 'user31',
        nickname: '놀람',
        profileImage: 'https://i.pravatar.cc/40?img=31',
        rating: 5,
        comment: '하종현 작가의 대표작을 한 자리에서 볼 수 있는 귀한 기회였어요...',
        date: '2025.08.11'
      },
      {
        id: 32,
        userId: 'user32',
        nickname: '아테나',
        profileImage: 'https://i.pravatar.cc/40?img=32',
        rating: 5,
        comment: '단색화의 거장 하종현. 작품의 깊이가 정말 대단해요...',
        date: '2025.08.09'
      },
      {
        id: 33,
        userId: 'user33',
        nickname: '곰탱이',
        profileImage: 'https://i.pravatar.cc/40?img=33',
        rating: 5,
        comment: '아트선재센터의 기획력과 하종현의 작품이 만나 최고의 전시가...',
        date: '2025.08.07'
      }
    ]
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
    rating: 4.3,
    reviewCount: 94,
    savedCount: 178,
    isSaved: true,
    image: 'https://d1bc1xn3hygkq4.cloudfront.net/rimage/ftw_webp_2304/image/23774/2e9378f913d220d342bee2d0a0cc37d9',
    description: '미켈 바르셀로 작가의 개인전',
    reviews: [
      {
        id: 34,
        userId: 'user34',
        nickname: '이자벨라',
        profileImage: 'https://i.pravatar.cc/40?img=34',
        rating: 4,
        comment: '바르셀로의 독특한 질감과 색채가 인상적이었어요...',
        date: '2025.08.10'
      },
      {
        id: 35,
        userId: 'user35',
        nickname: '홀리올',
        profileImage: 'https://i.pravatar.cc/40?img=35',
        rating: 5,
        comment: '타데우스 로팍은 항상 좋은 작가들을 소개해주네요. 감사해요...',
        date: '2025.08.08'
      },
      {
        id: 36,
        userId: 'user36',
        nickname: '수하',
        profileImage: 'https://i.pravatar.cc/40?img=36',
        rating: 4,
        comment: '조각과 회화의 경계를 넘나드는 작품들. 정말 흥미로워요...',
        date: '2025.08.06'
      }
    ]
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
    rating: 4.8,
    reviewCount: 231,
    savedCount: 489,
    isSaved: false,
    image: 'https://cdn.sanity.io/images/rgmbly0p/production/766e72db9e5e481f9d4704e91e16543069ab5c90-2500x1874.jpg?w=1000&q=85&auto=format',
    description: '안토니 곰리의 공간 드로잉 전시',
    reviews: [
      {
        id: 37,
        userId: 'user37',
        nickname: '해피한가',
        profileImage: 'https://i.pravatar.cc/40?img=37',
        rating: 5,
        comment: '안토니 곰리의 철 조각들이 공간과 만나 만들어내는 마법 같은 순간...',
        date: '2025.08.11'
      },
      {
        id: 38,
        userId: 'user38',
        nickname: '늘봄',
        profileImage: 'https://i.pravatar.cc/40?img=38',
        rating: 5,
        comment: '공간을 그린다는 개념이 이렇게 아름다울 수가. 감동적이에요...',
        date: '2025.08.09'
      },
      {
        id: 39,
        userId: 'user39',
        nickname: '메이메이',
        profileImage: 'https://i.pravatar.cc/40?img=39',
        rating: 4,
        comment: '영국 현대조각의 대가 안토니 곰리. 역시 기대를 저버리지 않네요...',
        date: '2025.08.07'
      }
    ]
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
    rating: 4.0,
    reviewCount: 45,
    savedCount: 89,
    isSaved: true,
    image: 'https://artbava.s3.amazonaws.com/media/img/201421526_1555898161420349_1370071971845307846_n.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA2HEPYWZMOND2WFUE%2F20250810%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161749Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=7bffb807bffc1543f95d0ac9c1981529629d476b6ab4b5d5941611f3184f5d0c',
    description: '상업화랑 개관 기념 전시',
    reviews: [
      {
        id: 40,
        userId: 'user40',
        nickname: '을지로힙스터',
        profileImage: 'https://i.pravatar.cc/40?img=40',
        rating: 4,
        comment: '을지로에 새로 생긴 갤러리. 공간이 독특하고 전시도 참신해요...',
        date: '2025.08.09'
      },
      {
        id: 41,
        userId: 'user41',
        nickname: '신갤러리탐방',
        profileImage: 'https://i.pravatar.cc/40?img=41',
        rating: 4,
        comment: '개관전이라 그런지 다양한 작가들의 작품을 볼 수 있어서 좋았어요...',
        date: '2025.08.07'
      },
      {
        id: 42,
        userId: 'user42',
        nickname: '아트좋아',
        profileImage: 'https://i.pravatar.cc/40?img=42',
        rating: 4,
        comment: '상업화랑이라는 이름이 독특하네요. 앞으로가 기대됩니다...',
        date: '2025.08.05'
      }
    ]
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
    rating: 4.7,
    reviewCount: 312,
    savedCount: 678,
    isSaved: true,
    image: 'https://www.mmca.go.kr/upload/exhibition/2025/04/2025040701032703116320.png',
    description: '다원예술의 새로운 가능성을 탐구하는 전시',
    reviews: [
      {
        id: 43,
        userId: 'user43',
        nickname: '아트아이유',
        profileImage: 'https://i.pravatar.cc/40?img=43',
        rating: 5,
        comment: '국립현대미술관답게 스케일이 큰 전시. 숲이라는 주제가 인상깊어요...',
        date: '2025.08.11'
      },
      {
        id: 44,
        userId: 'user44',
        nickname: '환쟁이',
        profileImage: 'https://i.pravatar.cc/40?img=44',
        rating: 5,
        comment: '다원예술의 가능성을 보여주는 훌륭한 전시. 미래가 기대돼요...',
        date: '2025.08.09'
      },
      {
        id: 45,
        userId: 'user45',
        nickname: '맑은햇살',
        profileImage: 'https://i.pravatar.cc/40?img=45',
        rating: 4,
        comment: '숲이라는 테마로 자연과 예술의 만남을 보여주는 멋진 전시...',
        date: '2025.08.07'
      }
    ]
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
    rating: 4.6,
    reviewCount: 189,
    savedCount: 367,
    isSaved: false,
    image: 'https://www.mmca.go.kr/upload/exhibition/2025/04/2025041404592022613259.jpg',
    description: '봄과 마음을 주제로 한 감성적 전시',
    reviews: [
      {
        id: 46,
        userId: 'user46',
        nickname: '너T야',
        profileImage: 'https://i.pravatar.cc/40?img=46',
        rating: 5,
        comment: '제목부터 감성적인 전시. 정말 마음이 따뜻해지는 작품들이...',
        date: '2025.08.10'
      },
      {
        id: 47,
        userId: 'user47',
        nickname: '꿀엄마',
        profileImage: 'https://i.pravatar.cc/40?img=47',
        rating: 4,
        comment: '봄 기운이 가득한 전시. 계절과 잘 어울리는 기획이에요...',
        date: '2025.08.08'
      },
      {
        id: 48,
        userId: 'user48',
        nickname: '제니',
        profileImage: 'https://i.pravatar.cc/40?img=48',
        rating: 5,
        comment: '마음이 힐링되는 전시. 일상에 지쳤을 때 보면 좋을 것 같아요...',
        date: '2025.08.06'
      }
    ]
  },
  {
    id: 17,
    category: '전시중',
    title: '수집, 취향의 지형도',
    gallery: 'S2A',
    location: '강남',
    period: '25. 08. 12 ~ 25. 09. 20',
    address: '서울 강남구 영동대로 325 1층',
    likes: 228,
    isLiked: false,
    rating: 4.4,
    reviewCount: 156,
    savedCount: 298,
    isSaved: false,
    image: 'https://artlogic-res.cloudinary.com/w_1200,c_limit,f_auto,fl_lossy,q_auto/ws-artlogicwebsite0966/usr/images/exhibitions/group_images_override/22/_instagram_1.jpg',
    description: '필립 티로, 김남규, 정승우, 이준혁, 그리고 S2A, 다섯 컬렉션을 통해, 수집이라는 행위가 동시대 미술의 흐름 속에서 어떻게 하나의 시선이자 실천으로 작동하는지를 탐색',
    reviews: [
      {
        id: 49,
        userId: 'user49',
        nickname: '바닐라스콘',
        profileImage: 'https://i.pravatar.cc/40?img=49',
        rating: 4,
        comment: '수집에 대한 새로운 관점을 제시하는 흥미로운 전시. 생각할 거리가 많아요...',
        date: '2025.08.11'
      },
      {
        id: 50,
        userId: 'user50',
        nickname: '나달리',
        profileImage: 'https://i.pravatar.cc/40?img=50',
        rating: 5,
        comment: 'S2A 갤러리는 항상 독특한 시각의 전시를 기획하네요. 좋아요...',
        date: '2025.08.09'
      },
      {
        id: 51,
        userId: 'user51',
        nickname: 'Ana',
        profileImage: 'https://i.pravatar.cc/40?img=51',
        rating: 4,
        comment: '취향이라는 것이 어떻게 형성되는지 보여주는 재미있는 전시...',
        date: '2025.08.07'
      }
    ]
  },
  {
    id: 18,
    category: '전시중',
    title: '이탈리아 국립 카포디몬테 미술관',
    gallery: '마이아트뮤지엄',
    location: '강남',
    period: '25. 08. 01 ~ 25. 11. 30',
    address: '서울 강남구 테헤란로 518 섬유센터빌딩 B1층',
    likes: 128,
    isLiked: false,
    rating: 4.5,
    reviewCount: 203,
    savedCount: 345,
    isSaved: false,
    image: 'http://www.myartmuseum.co.kr/admin/data/product2/2506130001_M1.jpg',
    description: '이탈리아 국립 나폴리 카포디몬테 미술관과 협력하여, 그들이 소장한 19세기 회화 컬렉션을 통해 이탈리아 남부가 겪은 사회의 변화와 그 시대의 삶을 펼쳐 보인다.',
    reviews: [
      {
        id: 52,
        userId: 'user52',
        nickname: 'siena',
        profileImage: 'https://i.pravatar.cc/40?img=52',
        rating: 5,
        comment: '이탈리아 고전 회화를 한국에서 볼 수 있다니! 정말 귀한 기회였어요...',
        date: '2025.08.10'
      },
      {
        id: 53,
        userId: 'user53',
        nickname: '이팝꽃',
        profileImage: 'https://i.pravatar.cc/40?img=53',
        rating: 4,
        comment: '19세기 이탈리아 남부의 사회상을 엿볼 수 있는 의미있는 전시...',
        date: '2025.08.08'
      },
      {
        id: 54,
        userId: 'user54',
        nickname: '마미',
        profileImage: 'https://i.pravatar.cc/40?img=54',
        rating: 5,
        comment: '클래식한 회화의 아름다움을 다시 한번 느낄 수 있었어요. 감동적...',
        date: '2025.08.06'
      }
    ]
  },
  {
    id: 19,
    category: '전시종료',
    title: '불멸의 화가 반 고흐',
    gallery: '예술의전당',
    location: '강남',
    period: '24. 11. 29 ~ 25. 03. 19',
    address: '서울 서초구 남부순환로 2406',
    likes: 438,
    isLiked: true,
    rating: 4.8,
    reviewCount: 505,
    savedCount: 543,
    isSaved: true,
    image: 'https://www.sac.or.kr/site/main/file/thumbnail/uu/11db938b3d1d432ca8dd86e271161217',
    description: '네덜란드 크롤레뮐러 미술관이 소장한 빈센트 반 고흐 작품을 보여줍니다.',
    audioGuide: 'https://www.youtube.com/playlist?list=PLx_Gfh8MUyMw78NiX6a6Bqmm3UeFMITKy',
    youTube: 'https://youtu.be/mCDvaNgFU2c',
    reviews: [
      {
        id: 55,
        userId: 'user55',
        nickname: '라파엘라',
        profileImage: 'https://i.pravatar.cc/40?img=55',
        rating: 5,
        comment: '반 고흐 작품을 한국에서 볼 수 있다니 감격스럽습니다.',
        date: '2025.04.12'
      },
      {
        id: 56,
        userId: 'user56',
        nickname: '오늘이2',
        profileImage: 'https://i.pravatar.cc/40?img=56',
        rating: 4,
        comment: '그저 눈물이 납니다. 반 고흐의 작품을 제 마음을 파고 들어요',
        date: '2025.04.07'
      },
      {
        id: 57,
        userId: 'user57',
        nickname: '공백',
        profileImage: 'https://i.pravatar.cc/40?img=57',
        rating: 5,
        comment: '왜 많은 사람들이 추천하는지 알 수 있었습니다.',
        date: '2025.04.06'
      }
    ]
  },
  {
    id: 20,
    category: '전시중',
    title: '마르크 샤갈 특별전',
    gallery: '예술의전당',
    location: '강남',
    period: '25. 05. 23 ~ 25. 09. 21',
    address: '서울 서초구 남부순환로 2406',
    likes: 338,
    isLiked: true,
    rating: 4.6,
    reviewCount: 372,
    savedCount: 453,
    isSaved: true,
    image: 'https://www.sac.or.kr/site/main/file/download/uu/e99b0a43caa64e6bb9d601269c768d8f',
    description: '전 세계 최초 미공개 유화 7점 예술의전당서 공개, 170여 점의 대규모 특별전',
    youTube: 'https://youtu.be/AAxLjh9HReo',
    reviews: [
      {
        id: 58,
        userId: 'user58',
        nickname: '파란자몽',
        profileImage: 'https://i.pravatar.cc/40?img=58',
        rating: 5,
        comment: '샤갈 작품을 이렇게 많이 볼 수 있다니요',
        date: '2025.08.12'
      },
      {
        id: 59,
        userId: 'user59',
        nickname: 'berry',
        profileImage: 'https://i.pravatar.cc/40?img=59',
        rating: 4,
        comment: '사진촬영은 3관, 4관만 가능하더라구요',
        date: '2025.08.07'
      },
      {
        id: 60,
        userId: 'user60',
        nickname: '무아',
        profileImage: 'https://i.pravatar.cc/40?img=60',
        rating: 5,
        comment: '공간이 잘 꾸며져있어서 작품 감상하기 더 좋았습니다',
        date: '2025.08.06'
      }
    ]
  }
];

// 새로운 유틸리티 함수들 추가
export const getExhibitionReviews = (id, limit = 3) => {
  const exhibition = getExhibitionById(id);
  return exhibition ? exhibition.reviews.slice(0, limit) : [];
};

export const addReview = (exhibitionId, review) => {
  const exhibition = getExhibitionById(exhibitionId);
  if (exhibition) {
    exhibition.reviews.unshift(review);
    exhibition.reviewCount += 1;
    // 평점 재계산
    const totalRating = exhibition.reviews.reduce((sum, r) => sum + r.rating, 0);
    exhibition.rating = totalRating / exhibition.reviews.length;
  }
  return exhibition;
};

export const toggleSave = (id) => {
  const exhibition = getExhibitionById(id);
  if (exhibition) {
    exhibition.savedCount += exhibition.isSaved ? -1 : 1;
    exhibition.isSaved = !exhibition.isSaved;
  }
  return exhibition;
};

export const getTopRatedExhibitions = (limit = 5) => {
  return [...galleryData]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
};

// 기존 유틸리티 함수들
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
  return galleryData.filter(exhibition => 
    !exhibition.period.includes('25. 01. 01 ~ 25. 12. 31')
  );
};

export const getUniqueGalleries = () => {
  return [...new Set(galleryData.map(exhibition => exhibition.gallery))];
};

export const getUniqueLocations = () => {
  return [...new Set(galleryData.map(exhibition => exhibition.location))];
};