// lib/chat.js

// 개인 채팅 데이터
export const personalChats = [
    {
      id: 1,
      name: '까비',
      role: '관장님(?)',
      lastMessage: '미셸앙리 전시 어떠셨어요? 후기 궁금해요 😊',
      timestamp: '오후 3:24',
      unreadCount: 2,
      isOnline: true,
      avatar: '/images/hosts/까비.jpg'
    },
    {
      id: 2,
      name: '바람은',
      role: '바쁜 직장인',
      lastMessage: '백영수 미술관 다음에 또 같이 가요!',
      timestamp: '오후 2:15',
      unreadCount: 0,
      isOnline: false,
      avatar: '/images/hosts/바람은.jpg'
    },
    {
      id: 3,
      name: '제이커',
      role: '도록 다수 보유자',
      lastMessage: '도록 나눔 관심있으시면 연락주세요',
      timestamp: '오전 11:30',
      unreadCount: 1,
      isOnline: true,
      avatar: '/images/hosts/제이커.jpg'
    },
    {
      id: 4,
      name: '꿀물',
      role: '도슨트',
      lastMessage: '송은 투어 정말 재밌었어요! 감사합니다',
      timestamp: '어제',
      unreadCount: 0,
      isOnline: false,
      avatar: '/images/hosts/꿀물.jpg'
    },
    {
      id: 5,
      name: '연지빛',
      role: '미술정보여왕',
      lastMessage: '서울대 미술관 새로운 전시 정보 공유드려요',
      timestamp: '어제',
      unreadCount: 3,
      isOnline: true,
      avatar: '/images/hosts/연지빛.jpg'
    }
  ];
  
  // 모임 채팅 데이터
  export const groupChats = [
    {
      id: 1,
      name: '미셸앙리 VIVID 모다갤러리',
      host: '까비',
      memberCount: 8,
      lastMessage: '까비: 전시 관람 후 근처 카페에서 뒷풀이 어떠세요?',
      timestamp: '오후 4:10',
      unreadCount: 5,
      status: '진행중',
      thumbnail: '/images/exhibitions/gallery1.jpg'
    },
    {
      id: 2,
      name: '백영수 미술관 + 서울시립 사진미술관',
      host: '바람은',
      memberCount: 6,
      lastMessage: '민수: 사진 공유드립니다! 정말 좋은 시간이었어요',
      timestamp: '오후 1:45',
      unreadCount: 0,
      status: '완료',
      thumbnail: '/images/exhibitions/gallery2.jpg'
    },
    {
      id: 3,
      name: '마르크 샤갈과 샤갈의 후계자',
      host: '제이커',
      memberCount: 12,
      lastMessage: '제이커: 도록 추가 주문하신 분들 확인 부탁드려요',
      timestamp: '오후 12:20',
      unreadCount: 2,
      status: '진행중',
      thumbnail: '/images/exhibitions/gallery3.jpg'
    },
    {
      id: 4,
      name: '송은 도슨트 투어',
      host: '꿀물',
      memberCount: 15,
      lastMessage: '수진: 다음 투어 일정도 알려주세요!',
      timestamp: '오전 10:15',
      unreadCount: 0,
      status: '완료',
      thumbnail: '/images/exhibitions/gallery4.jpg'
    },
    {
      id: 5,
      name: '서울대 미술관 함께 가실분',
      host: '연지빛',
      memberCount: 4,
      lastMessage: '연지빛: 내일 오후 2시에 정문에서 만나요!',
      timestamp: '어제',
      unreadCount: 1,
      status: '예정',
      thumbnail: '/images/exhibitions/gallery5.jpg'
    }
  ];
  
  // 유틸리티 함수들
  export const getAllChats = () => {
    return [...personalChats, ...groupChats];
  };
  
  export const getPersonalChatsOnly = () => {
    return personalChats;
  };
  
  export const getGroupChatsOnly = () => {
    return groupChats;
  };
  
  export const getChatById = (id, type = 'personal') => {
    const chats = type === 'personal' ? personalChats : groupChats;
    return chats.find(chat => chat.id === id);
  };
  
  export const getUnreadCount = () => {
    const personalUnread = personalChats.reduce((sum, chat) => sum + chat.unreadCount, 0);
    const groupUnread = groupChats.reduce((sum, chat) => sum + chat.unreadCount, 0);
    return { personal: personalUnread, group: groupUnread, total: personalUnread + groupUnread };
  };
  
  export const markAsRead = (id, type = 'personal') => {
    const chats = type === 'personal' ? personalChats : groupChats;
    const chat = chats.find(chat => chat.id === id);
    if (chat) {
      chat.unreadCount = 0;
    }
    return chat;
  };