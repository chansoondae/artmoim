// app/meetups/page.js

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Heart, Users, Calendar, MapPin, Bus, ArrowLeft, Clock } from 'lucide-react';
import { galleryData } from '../../lib/gallery';
import { meetupsData } from '../../lib/meetups';
import { useRouter } from 'next/navigation';

const MeetupDetailPage = () => {
  const [isLiked, setIsLiked] = useState(false);
  const router = useRouter();

  // 실제 모임 데이터 (ID 10번 아트버스)
  const meetup = meetupsData.find(m => m.id === 10) || meetupsData[1]; // ID 10번이 없으면 기본값
  
  // 확장된 모임 정보 (실제 데이터에 추가 정보)
  const extendedMeetupInfo = {
    description: `${meetup.location}의 갤러리 뽀개기 하는 아트투어입니다. .`,
    maxParticipants: 28,
    currentParticipants: 26,
    meetingPoint: '서울시청역 3번 출구',
    timeline: [
      {
        time: '06:30',
        location: '서울시청역 3번출구 출발',
        type: 'departure'
      },
      {
        time: '07:00',
        location: '교대역 9번출구 출발',
        type: 'departure'
      },
      {
        time: '07:15',
        location: '동천간이버스정류장 출발',
        type: 'departure'
      },
      {
        time: '07:20',
        location: '죽전간이버스정류장 출발',
        type: 'departure'
      },
      {
        time: '07:30',
        location: '신갈간이버스정류장 출발',
        type: 'departure'
      },
      {
        time: '10:00',
        location: galleryData[1].gallery,
        description: galleryData[1].description,
        address: galleryData[1].address,
        image: galleryData[1].image,
        type: 'visit'
      },
      {
        time: '12:00',
        location: galleryData[3].gallery,
        description: galleryData[3].description,
        address: galleryData[3].address,
        image: galleryData[3].image,
        type: 'visit'
      },
      {
        time: '15:00',
        location: galleryData[5].gallery,
        description: galleryData[5].description,
        address: galleryData[5].address,
        image: galleryData[5].image,
        type: 'visit'
      }
    ]
  };

  // 참여자 프로필 데이터
  const participants = [
    { id: 1, image: '/images/profile/random1.jpg', name: '김수진' },
    { id: 2, image: '/images/profile/random9.jpg', name: '이민호' },
    { id: 3, image: '/images/profile/random2.jpg', name: '박지영' },
    { id: 4, image: '/images/profile/random8.jpg', name: '최준호' },
    { id: 5, image: '/images/profile/random3.jpg', name: '정소연' },
    { id: 6, image: '/images/profile/random10.jpg', name: '김태현' },
    { id: 7, image: '/images/profile/random4.jpg', name: '송미라' },
    { id: 8, image: '/images/profile/random5.jpg', name: '윤미래' },
    { id: 9, image: '/images/profile/random6.jpg', name: '한예슬' }
  ];

  // 연령대 분포 데이터
  const ageDistribution = [
    { range: '20대', percentage: 22, color: 'bg-pink-400' },
    { range: '30대', percentage: 44, color: 'bg-purple-400' },
    { range: '40대', percentage: 23, color: 'bg-blue-400' },
    { range: '50대', percentage: 11, color: 'bg-green-400' }
  ];

  // 성별 분포 데이터
  const genderDistribution = [
    { gender: '여성', percentage: 67, color: 'bg-red-400' },
    { gender: '남성', percentage: 33, color: 'bg-blue-500' }
  ];

  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
  };

  const handleBackClick = () => {
    router.push('/');
  };

  const handleParticipantClick = (participantName) => {
    router.push(`/mypage?nickname=${participantName}&mbti=entj`);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* 뒤로가기 버튼 */}
      <button 
        onClick={handleBackClick}
        className="flex items-center gap-2 text-gray-600 mb-6 hover:text-gray-900 hover:bg-gray-300 transition-all duration-200 cursor-pointer px-3 py-2 rounded-lg hover:transform hover:scale-105"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>뒤로가기</span>
      </button>

      {/* 기본 정보 카드 */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
        <div className="p-6">
          {/* 상태 배지와 좋아요 */}
          <div className="flex justify-between items-start mb-4">
            <span className={`text-white text-sm px-3 py-1 rounded-full font-medium ${
              meetup.remainingSpots === 0 ? 'bg-gray-500' : 
              meetup.remainingSpots <= 2 ? 'bg-red-500' : 'bg-orange-500'
            }`}>
              {meetup.remainingSpots === 0 ? '대기 신청' : `${meetup.remainingSpots}자리 남음`}
            </span>
            <Heart 
              className={`w-6 h-6 cursor-pointer transition-colors ${
                isLiked ? 'text-red-500 fill-red-500' : 'text-gray-300 hover:text-red-500'
              }`}
              onClick={handleLikeToggle}
            />
          </div>

          {/* 호스트 정보 */}
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-4 relative overflow-hidden">
              <Image 
                src={meetup.image} 
                alt={meetup.host}
                width={64}
                height={64}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-gray-900 text-lg">{meetup.host}</span>
                <span className="text-gray-500 text-sm">{meetup.role}</span>
              </div>
              <div className="flex items-center gap-2">
                {meetup.host === '아트버스' ? (
                  <Bus className="w-4 h-4 text-blue-500" />
                ) : (
                  <Users className="w-4 h-4 text-blue-500" />
                )}
                <span className="text-blue-500 text-sm font-medium">{meetup.status}</span>
              </div>
            </div>
          </div>

          {/* 제목 */}
          <h1 className="font-bold text-gray-900 text-xl mb-4">{meetup.title}</h1>

          {/* 기본 정보 */}
          <div className="flex flex-col gap-3 text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{meetup.date} · {meetup.day}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{meetup.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>참여자 {extendedMeetupInfo.currentParticipants}/{extendedMeetupInfo.maxParticipants}명</span>
            </div>
          </div>

          {/* 설명 */}
          <p className="text-gray-700">{extendedMeetupInfo.description}</p>

          {/* 참여 버튼 */}
          {/* <button className="w-full bg-red-400 hover:bg-red-500 text-white py-3 rounded-xl font-semibold transition-all duration-200">
            모임 참여하기
          </button> */}
        </div>
      </div>

      {/* 타임라인 */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">투어 일정</h2>
          
          <div className="relative">
            {/* 타임라인 라인 */}
            <div className="absolute left-4 lg:left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            
            {extendedMeetupInfo.timeline.map((item, index) => (
              <div key={index} className="relative flex mb-6 lg:mb-8 last:mb-0">
                {/* 타임라인 점 */}
                <div className={`relative z-10 w-8 h-8 lg:w-12 lg:h-12 rounded-full flex items-center justify-center mr-3 lg:mr-4 ${
                  item.type === 'departure' ? 'bg-pink-100' : 'bg-blue-100'
                }`}>
                  <div className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full ${
                    item.type === 'departure' ? 'bg-pink-500' : 'bg-blue-500'
                  }`}></div>
                </div>
                
                {/* 컨텐츠 */}
                <div className="flex-1 min-w-0">
                  {item.type === 'departure' ? (
                    // 출발 지점 - 간단하게
                    <div className="bg-gray-50 rounded-lg p-3 lg:p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="w-3 h-3 lg:w-4 lg:h-4 text-gray-500" />
                        <span className="font-semibold text-gray-900 text-sm lg:text-base">{item.time}</span>
                      </div>
                      <h3 className="font-medium text-gray-700 text-sm lg:text-base">{item.location}</h3>
                    </div>
                  ) : (
                    // 방문 장소 - 상세하게
                    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                      <div className="p-3 lg:p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="w-3 h-3 lg:w-4 lg:h-4 text-gray-500" />
                          <span className="font-semibold text-gray-900 text-sm lg:text-base">{item.time}</span>
                        </div>
                        <h3 className="font-bold text-gray-900 text-sm lg:text-base mb-2">{item.location}</h3>
                        {item.address && (
                          <p className="text-xs lg:text-sm text-gray-500 mb-2">{item.address}</p>
                        )}
                        
                        {item.description && (
                          <p className="text-xs lg:text-sm text-gray-600 mb-3 leading-relaxed">{item.description}</p>
                        )}
                        
                        {item.image && (
                          <div className="w-full h-32 lg:h-48 bg-gray-200 rounded-lg overflow-hidden mb-3">
                            <Image
                              src={item.image}
                              alt={item.location}
                              width={400}
                              height={200}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.style.display = 'none';
                              }}
                            />
                          </div>
                        )}
                        
                        <button className="bg-red-400 text-white px-3 lg:px-4 py-2 rounded-lg text-xs lg:text-sm font-medium hover:bg-pink-600 transition-colors">
                          자세히 보기
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 참여자 정보 */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-24">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">참여자 정보</h2>
          
          {/* 참여자 프로필 */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">함께하는 사람들</h3>
            <div className="flex flex-wrap gap-3">
              {participants.map((participant, index) => (
                <div 
                  key={participant.id} 
                  className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => handleParticipantClick(participant.name)}
                >
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mb-1">
                    <Image
                      src={participant.image}
                      alt={participant.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  <span className="text-xs text-gray-600">{participant.name}</span>
                </div>
              ))}
              {meetup.remainingSpots > 0 && (
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-1 border-2 border-dashed border-gray-300">
                    <span className="text-gray-400 text-lg">+</span>
                  </div>
                  <span className="text-xs text-gray-400">당신</span>
                </div>
              )}
            </div>
          </div>

          {/* 연령대 분포 */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">연령대 분포</h3>
            <div className="space-y-3">
              {ageDistribution.map((age, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-sm text-gray-600 w-12">{age.range}</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2 mx-3">
                    <div 
                      className={`h-2 rounded-full ${age.color}`} 
                      style={{ width: `${age.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 w-10">{age.percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* 성별 분포 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">성별 분포</h3>
            <div className="space-y-3">
              {genderDistribution.map((gender, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-sm text-gray-600 w-12">{gender.gender}</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2 mx-3">
                    <div 
                      className={`h-2 rounded-full ${gender.color}`} 
                      style={{ width: `${gender.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 w-10">{gender.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 하단 고정 참여 버튼 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-10">
        <div className="max-w-4xl mx-auto">
          <button className="w-full bg-gray-400 text-white py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-[1.02]">
            모임 참여하기 ({meetup.remainingSpots}자리 남음)
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeetupDetailPage;