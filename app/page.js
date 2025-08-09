// app/page.js 

'use client';

import React from 'react';
import Image from 'next/image';
import { Heart, Users, Calendar, MapPin, Bus } from 'lucide-react';
import { meetupsData } from '../lib/meetups';

const ArtFriendsApp = () => {
  const MeetupCard = ({ meetup }) => {
    const handleLikeToggle = () => {
      // 실제 앱에서는 API 호출이나 상태 관리 라이브러리 사용
      console.log(`Toggling like for meetup ${meetup.id}`);
    };

    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
        {/* Header with badge and heart */}
        <div className="relative p-4 pb-2">
          <div className="flex justify-between items-start mb-3">
            <span className={`text-white text-xs lg:text-sm px-3 py-1 rounded-full font-medium ${
              meetup.remainingSpots === 0 ? 'bg-gray-500' : 
              meetup.remainingSpots <= 2 ? 'bg-red-500' : 'bg-orange-500'
            }`}>
              {meetup.remainingSpots === 0 ? '대기 신청' : `${meetup.remainingSpots}자리 남음`}
            </span>
            <Heart 
              className={`w-5 h-5 cursor-pointer transition-colors ${
                meetup.isLiked ? 'text-red-500 fill-red-500' : 'text-gray-300 hover:text-red-500'
              }`}
              onClick={handleLikeToggle}
            />
          </div>

          {/* Profile section */}
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-3 relative overflow-hidden">
              <Image 
                src={meetup.image} 
                alt={meetup.host}
                width={64}
                height={64}
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  // 이미지 로드 실패 시 배경색만 보여주기
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div className="flex-1">
              <div className="flex flex-col lg:flex-row lg:items-center lg:gap-2 mb-1">
                <span className="font-semibold text-gray-900 text-sm lg:text-base">{meetup.host}</span>
                <div className="flex items-center gap-2 lg:gap-0">
                  {/* <span className="text-gray-500 text-xs lg:text-sm hidden lg:inline">|</span> */}
                  <span className="text-gray-500 text-xs lg:text-sm">{meetup.role}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-bold text-gray-900 text-sm lg:text-base leading-tight mb-1">
            {meetup.title}
          </h3>
        </div>

        {/* Footer with status and details */}
        <div className="px-4 pb-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1">
              {meetup.host === '아트버스' ? (
                <Bus className="w-4 h-4 text-blue-500" />
              ) : (
                <Users className="w-4 h-4 text-blue-500" />
              )}
              <span className="text-blue-500 text-xs lg:text-sm font-medium">
                {meetup.status}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-1 text-xs lg:text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3 lg:w-4 lg:h-4" />
              <span>{meetup.date} · {meetup.day}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3 lg:w-4 lg:h-4" />
              <span>{meetup.location}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Title Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          함께하는 미술 모임
        </h2>
        <p className="text-gray-600">
          다양한 아트 경험을 나누고 새로운 친구들을 만나보세요
        </p>
      </div>

      {/* Meetup Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {meetupsData.map((meetup) => (
          <MeetupCard key={meetup.id} meetup={meetup} />
        ))}
      </div>

      {/* Load More Button */}
      <div className="mt-12 text-center">
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105">
          더 많은 모임 보기
        </button>
      </div>
    </div>
  );
};

export default ArtFriendsApp;