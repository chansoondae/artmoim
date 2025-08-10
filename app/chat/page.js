// app/chat/page.js 

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MessageCircle, Users, User, Search, MoreVertical, X, Send, Bot } from 'lucide-react';
import { personalChats, groupChats, getUnreadCount } from '../../lib/chat';
import { galleryData } from '../../lib/gallery';
import BottomNav from './../components/BottomNav';

const ChatPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAIModal, setShowAIModal] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatAreaRef = React.useRef(null);

  const unreadCount = getUnreadCount();

  // AI 채팅 관련 함수들
  const exampleQuestions = [
    "지금 한남동 전시 임박한것 알려줘",
    "삼청동 전시 코스 짜줘", 
    "요즘 인기 많은 전시 뭐야?"
  ];

  const followUpQuestions = {
    "지금 한남동 전시 임박한것 알려줘": [
      "관련 전시 모임 있어?",
      "삼청동 전시 임박한 것 알려줘", 
      "Pace: 65 Years에 나오는 장 뒤 뷔페 Jean Dubuffet 작가에 대해 알려줘"
    ],
    "삼청동 전시 코스 짜줘": [
      "몇일날 가는게 좋을까?",
      "교통비는 총 얼마야?",
      "현대미술로만 코스 다시 짜줘"
    ],
    "요즘 인기 많은 전시 뭐야?": [
      "인기 많은 전시로 코스 짜 줘",
      "1위 전시에 대한 사람들 반응을 알려줘",
      "이 중에 고전 미술 전시 있어?"
    ]
  };

  const getAIResponse = (question) => {
    switch (question) {
      case "지금 한남동 전시 임박한것 알려줘":
        const hannamExhibitions = galleryData.filter(ex => 
          ex.location === '한남동' && (ex.category === '종료임박' || ex.category === '전시중')
        );
        const endingSoon = hannamExhibitions.filter(ex => ex.category === '종료임박');
        
        if (endingSoon.length > 0) {
          return `한남동에서 종료 임박한 전시는 다음과 같습니다:\n\n${endingSoon.map(ex => 
            `📍 ${ex.title}\n🏛️ ${ex.gallery}\n📅 ${ex.period}\n⭐ ${ex.rating}/5.0 (리뷰 ${ex.reviewCount}개)`
          ).join('\n\n')}`;
        } else {
          const ongoing = hannamExhibitions.filter(ex => ex.category === '전시중');
          return `한남동에 현재 종료 임박한 전시는 없지만, 진행 중인 전시들이 있어요:\n\n${ongoing.slice(0, 3).map(ex => 
            `📍 ${ex.title}\n🏛️ ${ex.gallery}\n📅 ${ex.period}\n⭐ ${ex.rating}/5.0`
          ).join('\n\n')}`;
        }

      case "삼청동 전시 코스 짜줘":
        const samcheongExhibitions = galleryData.filter(ex => 
          ex.location === '삼청동' && ex.category === '전시중'
        );
        
        return `삼청동 전시 코스를 추천드려요! 🎨\n\n${samcheongExhibitions.map((ex, index) => 
          `${index + 1}. ${ex.title}\n📍 ${ex.gallery}\n⏰ ${ex.period}\n⭐ ${ex.rating}/5.0\n💭 ${ex.description}`
        ).join('\n\n')}\n\n삼청동은 걸어서 이동하기 좋아서 하루에 모두 둘러보실 수 있어요! ☺️`;

      case "요즘 인기 많은 전시 뭐야?":
        const popularExhibitions = [...galleryData]
          .sort((a, b) => b.likes - a.likes)
          .slice(0, 5);
        
        return `요즘 가장 인기 있는 전시 TOP 5를 알려드릴게요! 🔥\n\n${popularExhibitions.map((ex, index) => 
          `${index + 1}. ${ex.title}\n🏛️ ${ex.gallery} (${ex.location})\n❤️ ${ex.likes}명이 좋아해요\n⭐ ${ex.rating}/5.0 (리뷰 ${ex.reviewCount}개)`
        ).join('\n\n')}`;

      // 후속 질문들에 대한 답변
      case "관련 전시 모임 있어?":
        return "현재 한남동 전시 관련 모임을 찾고 있어요... 🔍\n\n아직 관련 모임이 개설되지 않았지만, 직접 모임을 만들어서 다른 아트프렌즈들과 함께 전시를 관람해보는 건 어떨까요? 모임 탭에서 새 모임을 만들 수 있어요! 😊";

      case "삼청동 전시 임박한 것 알려줘":
        const samcheongEndingSoon = galleryData.filter(ex => 
          ex.location === '삼청동' && ex.category === '종료임박'
        );
        
        if (samcheongEndingSoon.length > 0) {
          return `삼청동에서 종료 임박한 전시는 다음과 같습니다:\n\n${samcheongEndingSoon.map(ex => 
            `📍 ${ex.title}\n🏛️ ${ex.gallery}\n📅 ${ex.period}\n⭐ ${ex.rating}/5.0 (리뷰 ${ex.reviewCount}개)`
          ).join('\n\n')}`;
        } else {
          return "삼청동에는 현재 종료 임박한 전시가 없어요. 하지만 진행 중인 전시들이 많으니 천천히 둘러보시면 좋을 것 같아요! 😊";
        }

      case "Pace: 65 Years에 나오는 장 뒤 뷔페 Jean Dubuffet 작가에 대해 알려줘":
        return `장 뒤뷔페(Jean Dubuffet, 1901-1985)는 프랑스의 화가이자 조각가로, '아르 브뤼(Art Brut)' 운동의 창시자입니다. 🎨\n\n주요 특징:\n• 전통적인 미술 개념에 반발\n• 원시적이고 거친 표현 추구\n• 일상적인 재료 사용 (모래, 아스팔트 등)\n• 정신병자나 어린이의 그림에서 영감\n\n대표작으로는 '여인의 몸' 연작과 '우를루프' 조각 시리즈가 있어요. 페이스갤러리의 65주년 전시에서 그의 작품을 직접 보실 수 있다니 정말 좋은 기회네요! ✨`;

      case "몇일날 가는게 좋을까?":
        return "삼청동 전시 관람 추천 일정을 말씀드릴게요! 📅\n\n평일 추천:\n• 화-목요일: 관람객 적고 여유롭게 관람 가능\n• 오전 10-12시: 조용하고 집중도 높음\n\n주말:\n• 토요일 오전: 활기찬 분위기, 다른 관람객들과 소통 기회\n• 일요일 오후: 여유로운 마무리\n\n날씨 좋은 날이면 삼청동 거리도 함께 즐기실 수 있어서 더욱 좋아요! 🌞";

      case "교통비는 총 얼마야?":
        return "삼청동 전시 코스 교통비를 계산해드릴게요! 🚇\n\n지하철 이용시:\n• 3호선 안국역 하차 → 도보 10분\n• 기본요금: 1,370원 (카드 기준)\n• 왕복: 2,740원\n\n버스 이용시:\n• 광화문, 종로 경유 버스들\n• 기본요금: 1,200원\n• 왕복: 2,400원\n\n삼청동 내 이동은 모두 도보로 가능해서 추가 교통비 없어요! 총 3,000원 내외면 충분합니다. 💰";

      case "현대미술로만 코스 다시 짜줜":
        const modernArtSamcheong = galleryData.filter(ex => 
          ex.location === '삼청동' && ex.category === '전시중' && 
          (ex.title.includes('현대') || ex.gallery.includes('현대') || ex.description.includes('현대'))
        );
        
        return `삼청동 현대미술 전시 코스를 다시 짜드릴게요! 🎨\n\n${modernArtSamcheong.length > 0 ? 
          modernArtSamcheong.map((ex, index) => 
            `${index + 1}. ${ex.title}\n📍 ${ex.gallery}\n⏰ ${ex.period}\n⭐ ${ex.rating}/5.0\n💭 ${ex.description}`
          ).join('\n\n') : 
          '국립현대미술관 서울을 중심으로 한 현대미술 코스:\n\n1. MMCA 다원예술 2025: 숲\n📍 국립현대미술관 서울\n⏰ 25. 05. 23 ~ 26. 01. 15\n⭐ 4.7/5.0\n💭 다원예술의 새로운 가능성을 탐구하는 전시\n\n2. 마음_봄\n📍 국립현대미술관 서울\n⏰ 25. 05. 02 ~ 26. 02. 27\n⭐ 4.6/5.0\n💭 봄과 마음을 주제로 한 감성적 전시'}\n\n현대미술의 실험적 정신을 충분히 느끼실 수 있을 거예요! 🌟`;

      case "인기 많은 전시로 코스 짜 줘":
        const topPopular = [...galleryData]
          .sort((a, b) => b.likes - a.likes)
          .slice(0, 3);
        
        return `인기 전시 TOP 3로 코스를 짜드릴게요! 🔥\n\n${topPopular.map((ex, index) => 
          `${index + 1}. ${ex.title}\n📍 ${ex.gallery} (${ex.location})\n❤️ ${ex.likes}명이 좋아해요\n⭐ ${ex.rating}/5.0\n📍 ${ex.address}`
        ).join('\n\n')}\n\n이동 순서는 지역별로 묶어서 다니시면 효율적이에요! 하루에 2-3곳 정도가 적당합니다. 🚶‍♀️`;

      case "1위 전시에 대한 사람들 반응을 알려줘":
        const topExhibition = [...galleryData].sort((a, b) => b.likes - a.likes)[0];
        const reviews = topExhibition.reviews.slice(0, 3);
        
        return `"${topExhibition.title}" 전시에 대한 사람들 반응을 알려드릴게요! 💬\n\n${reviews.map(review => 
          `⭐ ${review.rating}/5 by ${review.nickname}\n"${review.comment}"\n📅 ${review.date}`
        ).join('\n\n')}\n\n전체적으로 ${topExhibition.rating}/5.0의 높은 평점을 받고 있고, ${topExhibition.reviewCount}개의 리뷰가 있어요. 대부분 작품의 완성도와 전시 기획에 대해 긍정적인 반응을 보이고 있습니다! 👍`;

      case "이 중에 고전 미술 전시 있어?":
        const classicalExhibitions = galleryData.filter(ex => 
          ex.title.includes('이탈리아') || ex.title.includes('카포디몬테') || 
          ex.description.includes('19세기') || ex.description.includes('고전')
        );
        
        if (classicalExhibitions.length > 0) {
          return `고전 미술 전시를 찾아드렸어요! 🏛️\n\n${classicalExhibitions.map((ex, index) => 
            `${index + 1}. ${ex.title}\n📍 ${ex.gallery} (${ex.location})\n⭐ ${ex.rating}/5.0\n💭 ${ex.description}`
          ).join('\n\n')}\n\n특히 이탈리아 국립 카포디몬테 미술관 전시는 19세기 고전 회화를 볼 수 있는 귀한 기회예요! 🎨`;
        } else {
          return "현재 인기 전시 중에는 순수 고전 미술 전시는 없지만, 현대적으로 재해석된 클래식한 작품들을 볼 수 있는 전시들이 있어요. 마이아트뮤지엄의 이탈리아 전시를 추천드려요! 🎭";
        }

      default:
        return "죄송해요, 해당 질문에 대한 답변을 준비하지 못했어요. 다른 질문을 해주시면 도움드릴게요! 😊";
    }
  };

  const scrollToBottom = () => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleExampleClick = async (question) => {
    const userMessage = { type: 'user', content: question, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // 타이핑 효과를 위한 딜레이
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const aiResponse = getAIResponse(question);
    const aiMessage = { 
      type: 'ai', 
      content: aiResponse, 
      timestamp: new Date(),
      showFollowUp: true,
      originalQuestion: question
    };
    
    setMessages(prev => [...prev, aiMessage]);
    setIsTyping(false);
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;
    
    const userMessage = { type: 'user', content: inputMessage, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const aiResponse = "안녕하세요! 아직 이 질문에 대한 답변을 준비하지 못했어요. 위의 예시 질문들을 클릭해보시거나, 전시 관련 질문을 해주시면 더 정확한 답변을 드릴 수 있어요! 😊";
    const aiMessage = { type: 'ai', content: aiResponse, timestamp: new Date() };
    
    setMessages(prev => [...prev, aiMessage]);
    setIsTyping(false);
  };

  const formatMessageContent = (content) => {
    return content.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < content.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  const tabs = [
    { id: 'all', label: '전체', count: unreadCount.total },
    { id: 'personal', label: '개인', count: unreadCount.personal },
    { id: 'group', label: '모임', count: unreadCount.group }
  ];

  const getFilteredChats = () => {
    let chats = [];
    
    if (activeTab === 'all') {
      // 개인 채팅과 모임 채팅을 구분해서 표시
      chats = [
        ...personalChats.map(chat => ({ ...chat, type: 'personal' })),
        ...groupChats.map(chat => ({ ...chat, type: 'group' }))
      ];
    } else if (activeTab === 'personal') {
      chats = personalChats.map(chat => ({ ...chat, type: 'personal' }));
    } else {
      chats = groupChats.map(chat => ({ ...chat, type: 'group' }));
    }

    // 검색 필터링
    if (searchTerm) {
      chats = chats.filter(chat => 
        chat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        chat.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // 최신 메시지 순으로 정렬 (임시로 unread가 있는 것 우선)
    return chats.sort((a, b) => b.unreadCount - a.unreadCount);
  };

  const PersonalChatItem = ({ chat }) => (
    <div className="flex items-center p-4 hover:bg-gray-50 cursor-pointer transition-colors">
      {/* 프로필 이미지 */}
      <div className="relative mr-3">
        <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
          <Image
            src={chat.avatar}
            alt={chat.name}
            width={48}
            height={48}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
        {/* 온라인 상태 */}
        {chat.isOnline && (
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
        )}
      </div>

      {/* 채팅 정보 */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-gray-900 text-sm">{chat.name}</h3>
            <span className="text-xs text-gray-500">{chat.role}</span>
          </div>
          <span className="text-xs text-gray-500">{chat.timestamp}</span>
        </div>
        <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
      </div>

      {/* 읽지 않은 메시지 수 */}
      {chat.unreadCount > 0 && (
        <div className="ml-2">
          <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
            {chat.unreadCount}
          </span>
        </div>
      )}
    </div>
  );

  const GroupChatItem = ({ chat }) => {
    const getStatusColor = (status) => {
      switch (status) {
        case '진행중': return 'bg-green-100 text-green-700';
        case '완료': return 'bg-gray-100 text-gray-700';
        case '예정': return 'bg-blue-100 text-blue-700';
        default: return 'bg-gray-100 text-gray-700';
      }
    };

    return (
      <div className="flex items-center p-4 hover:bg-gray-50 cursor-pointer transition-colors">
        {/* 모임 썸네일 */}
        <div className="w-12 h-12 bg-gray-200 rounded-lg overflow-hidden mr-3 flex-shrink-0">
          <Image
            src={chat.thumbnail}
            alt={chat.name}
            width={48}
            height={48}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>

        {/* 채팅 정보 */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-gray-900 text-sm truncate">{chat.name}</h3>
              <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusColor(chat.status)}`}>
                {chat.status}
              </span>
            </div>
            <span className="text-xs text-gray-500">{chat.timestamp}</span>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <Users className="w-3 h-3 text-gray-400" />
            <span className="text-xs text-gray-500">{chat.memberCount}명</span>
            <span className="text-xs text-gray-500">• {chat.host}</span>
          </div>
          <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
        </div>

        {/* 읽지 않은 메시지 수 */}
        {chat.unreadCount > 0 && (
          <div className="ml-2">
            <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
              {chat.unreadCount}
            </span>
          </div>
        )}
      </div>
    );
  };

  const filteredChats = getFilteredChats();

  return (
    <>
    <div className="max-w-7xl mx-auto px-4 py-6 pb-20">
      {/* 헤더 */}
      {/* <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">채팅</h1>
        <p className="text-gray-600">아트프렌즈와 대화를 나누어보세요</p>
      </div> */}

      {/* 검색바 */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="이름이나 메시지를 검색해보세요"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent"
          />
        </div>
      </div>

      {/* 탭 메뉴 */}
      <div className="mb-6">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-red-400 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab.label}
              {tab.count > 0 && (
                <span className={`text-xs rounded-full px-2 py-0.5 ${
                  activeTab === tab.id 
                    ? 'bg-white/20 text-white' 
                    : 'bg-red-500 text-white'
                }`}>
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* 채팅 리스트 */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {filteredChats.length > 0 ? (
          <div className="divide-y divide-gray-100">
            {filteredChats.map((chat) => (
              <div key={`${chat.type}-${chat.id}`}>
                {chat.type === 'personal' ? (
                  <PersonalChatItem chat={chat} />
                ) : (
                  <GroupChatItem chat={chat} />
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-2">
              <MessageCircle className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">채팅이 없어요</h3>
            <p className="text-gray-500">새로운 모임에 참여하거나 아트프렌즈와 대화해보세요</p>
          </div>
        )}
      </div>

      {/* 새 채팅 버튼 */}
      <div className="fixed bottom-24 right-4">
        <button 
          onClick={() => setShowAIModal(true)}
          className="bg-gradient-to-r from-red-400 to-pink-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:from-red-300 hover:to-pink-500 transition-all duration-200 transform hover:scale-105"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>

      {/* AI 채팅 모달 */}
      {showAIModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md h-[600px] flex flex-col">
            {/* 모달 헤더 */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-red-400 to-pink-500 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">아트프렌즈 AI</h3>
                  <p className="text-xs text-gray-500">전시 정보를 도움드려요</p>
                </div>
              </div>
              <button 
                onClick={() => {
                  setShowAIModal(false);
                  setMessages([]);
                  setInputMessage('');
                }}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            {/* 채팅 영역 */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 && (
                <div className="text-center space-y-4">
                  <div className="text-gray-500 mb-4">
                    <Bot className="w-12 h-12 mx-auto text-gray-300 mb-2" />
                    <p className="text-sm">안녕하세요! 전시 정보에 대해 궁금한 것이 있으시면 언제든 물어보세요 😊</p>
                  </div>
                  
                  {/* 예시 질문들 */}
                  <div className="space-y-2">
                    <p className="text-xs text-gray-400 text-left">💡 이런 것들을 물어보세요</p>
                    {exampleQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleExampleClick(question)}
                        className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors text-sm text-gray-700"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* 메시지들 */}
              {messages.map((message, index) => (
                <div key={index}>
                  <div className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-xl ${
                      message.type === 'user' 
                        ? 'bg-red-400 text-white' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      <div className="text-sm whitespace-pre-line">
                        {formatMessageContent(message.content)}
                      </div>
                      <div className={`text-xs mt-1 ${
                        message.type === 'user' ? 'text-red-100' : 'text-gray-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString('ko-KR', { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </div>
                    </div>
                  </div>
                  
                  {/* 후속 질문들 */}
                  {message.type === 'ai' && message.showFollowUp && followUpQuestions[message.originalQuestion] && (
                    <div className="mt-3 space-y-2">
                      <p className="text-xs text-gray-400">💡 이런 것도 궁금하지 않으세요?</p>
                      {followUpQuestions[message.originalQuestion].map((followUp, followUpIndex) => (
                        <button
                          key={followUpIndex}
                          onClick={() => handleExampleClick(followUp)}
                          className="block w-full text-left p-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-xs text-gray-700"
                        >
                          {followUp}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* 타이핑 인디케이터 */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 p-3 rounded-xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 입력 영역 */}
            <div className="p-4 border-t border-gray-100">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="메시지를 입력하세요..."
                  className="flex-1 px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isTyping}
                  className="w-10 h-10 bg-red-400 text-white rounded-xl flex items-center justify-center hover:bg-red-500 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    {/* Footer로 BottomNav 추가 */}
    <BottomNav />
    </>
  );
};

export default ChatPage;