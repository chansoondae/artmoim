// app/chat/page.js 

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MessageCircle, Users, User, Search, MoreVertical } from 'lucide-react';
import { personalChats, groupChats, getUnreadCount } from '../../lib/chat';
import BottomNav from './../components/BottomNav';

const ChatPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const unreadCount = getUnreadCount();

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
        <button className="bg-gradient-to-r from-red-400 to-pink-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:from-red-300 hover:to-pink-500 transition-all duration-200 transform hover:scale-105">
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
    {/* Footer로 BottomNav 추가 */}
    <BottomNav />
    </>
  );
};

export default ChatPage;