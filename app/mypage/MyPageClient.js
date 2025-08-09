
// app/mypage/MyPageClient.js (클라이언트 컴포넌트)
'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { 
  User, 
  Calendar, 
  MapPin, 
  Star, 
  Thermometer, 
  Camera, 
  Users, 
  Award,
  Eye,
  Heart,
  MessageCircle,
  Settings,
  Share,
  Edit3,
  EyeOff,
  Sparkles,
  ChevronDown,
  Check,
  MapIcon,
  Palette,
  UserCheck
} from 'lucide-react';
import { 
  userProfile, 
  meetupHistory, 
  exhibitionCertifications,
  mannerDetails,
  getMannerGrade,
  getCompletedMeetups,
  getRecentCertifications
} from '../../lib/mypage';
import { getExhibitionTypeInfo, getAllExhibitionTypes, exhibitionTypes } from '../../lib/exhibitionTypes';

const MyPageClient = () => {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [imageErrors, setImageErrors] = useState(new Set());
  const [isExhibitionTypeVisible, setIsExhibitionTypeVisible] = useState(true);
  const [selectedExhibitionType, setSelectedExhibitionType] = useState(userProfile.exhibitionType);
  const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);
  const [isDetailExpanded, setIsDetailExpanded] = useState(false);
  const [currentProfile, setCurrentProfile] = useState(userProfile);

  // URL 파라미터 처리
  useEffect(() => {
    const nicknameParam = searchParams.get('nickname');
    const mbtiParam = searchParams.get('mbti');
    
    const updatedProfile = { ...userProfile };
    
    // nickname 파라미터가 있으면 이름과 프로필 이미지 변경
    if (nicknameParam) {
      updatedProfile.name = nicknameParam;
      // random1.jpg ~ random5.jpg 중 랜덤 선택
      const randomNumber = Math.floor(Math.random() * 5) + 1;
      updatedProfile.profileImage = `/images/profile/random${randomNumber}.jpg`;
    }
    
    // mbti 파라미터가 있으면 전시 관람 성향 변경
    if (mbtiParam && exhibitionTypes[mbtiParam.toUpperCase()]) {
      updatedProfile.exhibitionType = mbtiParam.toUpperCase();
      setSelectedExhibitionType(mbtiParam.toUpperCase());
    }
    
    setCurrentProfile(updatedProfile);
  }, [searchParams]);

  const handleImageError = useCallback((id) => {
    setImageErrors(prev => new Set([...prev, id]));
  }, []);

  const isImageError = useCallback((id) => {
    return imageErrors.has(id);
  }, [imageErrors]);

  const toggleExhibitionTypeVisibility = () => {
    setIsExhibitionTypeVisible(!isExhibitionTypeVisible);
  };

  const handleTypeChange = (newType) => {
    setSelectedExhibitionType(newType);
    setIsTypeDropdownOpen(false);
  };

  const handleTypeDropdownToggle = () => {
    setIsTypeDropdownOpen(!isTypeDropdownOpen);
  };

  const toggleDetailExpansion = () => {
    setIsDetailExpanded(!isDetailExpanded);
  };

  const tabs = [
    { id: 'overview', label: '개요', icon: Eye },
    { id: 'meetups', label: '참여 모임', icon: Users },
    { id: 'certifications', label: '관람 인증', icon: Camera }
  ];

  const mannerGrade = getMannerGrade(currentProfile.mannerTemperature);
  const exhibitionTypeInfo = getExhibitionTypeInfo(selectedExhibitionType);
  const completedMeetups = getCompletedMeetups();
  const recentCertifications = getRecentCertifications();
  const allExhibitionTypes = getAllExhibitionTypes();

  const ProfileHeader = () => (
    <div className="bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 rounded-3xl shadow-lg border border-gray-100/50 p-6 mb-8 backdrop-blur-sm">
      {/* 프로필 이미지와 기본 정보 */}
      <div className="flex items-start gap-4 mb-6">
        {/* 프로필 이미지 */}
        <div className="relative flex-shrink-0">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full overflow-hidden ring-3 ring-white shadow-lg">
            {!isImageError('profile') ? (
              <Image
                src={currentProfile.profileImage}
                alt={currentProfile.name}
                width={80}
                height={80}
                className="w-full h-full object-cover"
                onError={() => handleImageError('profile')}
                priority
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-400 to-pink-400">
                <User className="w-10 h-10 text-white" />
              </div>
            )}
          </div>
          <button className="absolute -bottom-1 -right-1 w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center hover:bg-purple-600 transition-all duration-200 shadow-md">
            <Edit3 className="w-3 h-3" />
          </button>
        </div>

        {/* 닉네임, 정보, 버튼 */}
        <div className="flex-1 min-w-0">
          <h1 className="text-xl font-bold text-gray-900 mb-2">{currentProfile.name}</h1>
          
          <div className="flex flex-col gap-2 mb-3">
            <div className="flex items-center gap-1 text-gray-600 text-sm">
              <MapPin className="w-3 h-3" />
              <span>{currentProfile.location}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-600 text-sm">
              <Calendar className="w-3 h-3" />
              <span>{currentProfile.joinDate} 가입</span>
            </div>
          </div>

          <div className="flex gap-2">
            <button className="flex items-center gap-1 px-3 py-1.5 bg-white/70 text-gray-700 rounded-lg hover:bg-white transition-all duration-200 shadow-sm text-xs font-medium">
              <Share className="w-3 h-3" />
              <span>공유</span>
            </button>
            <button className="flex items-center gap-1 px-3 py-1.5 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all duration-200 shadow-sm text-xs font-medium">
              <Settings className="w-3 h-3" />
              <span>설정</span>
            </button>
          </div>
        </div>
      </div>

      {/* 자기소개 */}
      <p className="text-gray-600 mb-6 text-sm leading-relaxed">{currentProfile.bio}</p>

      {/* 통계 - 4개 항목 한 줄 */}
      <div className="grid grid-cols-4 gap-3">
        <div className="text-center p-3 bg-white/60 rounded-xl backdrop-blur-sm border border-gray-100/50">
          <div className="text-lg font-bold text-purple-600 mb-1">{currentProfile.totalMeetups}</div>
          <div className="text-xs text-gray-600 font-medium">참여 모임</div>
        </div>
        <div className="text-center p-3 bg-white/60 rounded-xl backdrop-blur-sm border border-gray-100/50">
          <div className="text-lg font-bold text-pink-600 mb-1">{currentProfile.totalExhibitions}</div>
          <div className="text-xs text-gray-600 font-medium">관람 전시</div>
        </div>
        <div className="text-center p-3 bg-white/60 rounded-xl backdrop-blur-sm border border-gray-100/50">
          <div className="text-lg font-bold text-blue-600 mb-1">{currentProfile.followers}</div>
          <div className="text-xs text-gray-600 font-medium">팔로워</div>
        </div>
        <div className="text-center p-3 bg-white/60 rounded-xl backdrop-blur-sm border border-gray-100/50">
          <div className="text-lg font-bold text-green-600 mb-1">{currentProfile.following}</div>
          <div className="text-xs text-gray-600 font-medium">팔로잉</div>
        </div>
      </div>
    </div>
  );

  const OverviewTab = () => (
    <div className="space-y-8">
      {/* 전시 관람 성향 */}
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100/50 p-8 relative overflow-hidden">
        {/* 헤더 */}
        <div className="flex items-center justify-between mb-8 relative z-10">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-100 rounded-2xl">
              <Eye className="w-8 h-8 text-purple-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">전시 관람 성향</h2>
          </div>
          
          {/* 프라이버시 토글 */}
          <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-2">
            <span className="text-sm text-gray-600 font-medium">
              {isExhibitionTypeVisible ? '공개' : '비공개'}
            </span>
            <button
              onClick={toggleExhibitionTypeVisibility}
              className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
                isExhibitionTypeVisible ? 'bg-purple-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-200 ${
                  isExhibitionTypeVisible ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>

        {/* 성향 내용 영역 */}
        <div className="relative">
          <div className={`transition-all duration-500 ${
            isExhibitionTypeVisible ? 'filter-none opacity-100' : 'filter blur-md opacity-50'
          }`}>
            {/* MBTI 타입 이미지와 정보 */}
            <div className="flex flex-col lg:flex-row gap-8 mb-8">
              {/* MBTI 이미지 - 세로형으로 조정 */}
              <div className="flex-shrink-0 lg:flex-shrink-0">
                <div className="w-48 h-72 lg:w-56 lg:h-80 rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-purple-100 to-pink-100 mx-auto lg:mx-0 p-2">
                  <Image
                    src={exhibitionTypeInfo.image}
                    alt={exhibitionTypeInfo.name}
                    width={224}
                    height={320}
                    className="w-full h-full object-contain rounded-2xl"
                    onError={() => handleImageError(`mbti-${selectedExhibitionType}`)}
                  />
                </div>
              </div>

              {/* 타입 정보 */}
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                  {/* MBTI 타입 선택 드롭다운 */}
                  <div className="relative">
                    <button
                      onClick={handleTypeDropdownToggle}
                      className={`flex items-center gap-3 px-6 py-3 rounded-full text-lg font-bold ${exhibitionTypeInfo.color} shadow-sm hover:shadow-md transition-all duration-200 min-w-fit`}
                    >
                      <span>{exhibitionTypeInfo.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isTypeDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* 드롭다운 메뉴 */}
                    {isTypeDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-200 z-50 max-h-80 overflow-y-auto w-fit">
                        <div className="p-2">
                          {allExhibitionTypes.map((type) => {
                            const typeInfo = exhibitionTypes[type];
                            const isSelected = type === selectedExhibitionType;
                            return (
                              <button
                                key={type}
                                onClick={() => handleTypeChange(type)}
                                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm hover:bg-gray-50 transition-colors ${
                                  isSelected ? 'bg-purple-50' : ''
                                }`}
                              >
                                <div className="flex items-center gap-3">
                                  <span className={`px-3 py-1 rounded-lg text-xs font-medium ${typeInfo.color}`}>
                                    {typeInfo.name}
                                  </span>
                                </div>
                                {isSelected && (
                                  <Check className="w-4 h-4 text-purple-600 flex-shrink-0" />
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed mb-6">{exhibitionTypeInfo.description}</p>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                  {exhibitionTypeInfo.characteristics.map((char, index) => (
                    <span key={index} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl text-sm text-center font-medium hover:bg-gray-200 transition-colors">
                      {char}
                    </span>
                  ))}
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">추천 장르</h4>
                  <div className="flex flex-wrap gap-3">
                    {exhibitionTypeInfo.recommendedGenres.map((genre, index) => (
                      <span key={index} className="px-4 py-2 bg-purple-100 text-purple-700 rounded-xl text-sm font-medium hover:bg-purple-200 transition-colors">
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 더보기 버튼 */}
                <div className="mt-6">
                  <button
                    onClick={toggleDetailExpansion}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-xl text-sm font-medium hover:bg-gray-200 transition-all duration-200"
                  >
                    <span>{isDetailExpanded ? '접기' : '더보기'}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDetailExpanded ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>
            </div>

            {/* 상세 성향 정보 - 더보기 클릭 시 표시 */}
            <div className={`transition-all duration-500 overflow-hidden ${
              isDetailExpanded ? 'max-h-none opacity-100 mt-8' : 'max-h-0 opacity-0'
            }`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* 성격 특성 */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <UserCheck className="w-6 h-6 text-purple-600" />
                    <h4 className="font-bold text-gray-900 text-lg">성격 특성</h4>
                  </div>
                  <div className="space-y-3">
                    {Object.entries(exhibitionTypeInfo.personality).map(([key, trait]) => (
                      <div key={key} className="bg-white/60 p-3 rounded-xl">
                        <p className="text-gray-700 text-sm leading-relaxed">{trait}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 관람 스타일 */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="w-6 h-6 text-blue-600" />
                    <h4 className="font-bold text-gray-900 text-lg">관람 스타일</h4>
                  </div>
                  <div className="space-y-3">
                    {Object.entries(exhibitionTypeInfo.viewingStyle).map(([key, style]) => (
                      <div key={key} className="bg-white/60 p-3 rounded-xl">
                        <p className="text-gray-700 text-sm leading-relaxed">{style}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 추천 여행지 및 선호 작가 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* 추천 여행지 */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <MapIcon className="w-6 h-6 text-green-600" />
                    <h4 className="font-bold text-gray-900 text-lg">추천 여행지</h4>
                  </div>
                  <div className="space-y-3">
                    {Object.entries(exhibitionTypeInfo.recommendedTravel).map(([key, place]) => (
                      <div key={key} className="bg-white/60 p-3 rounded-xl">
                        <p className="text-gray-700 text-sm leading-relaxed">{place}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 선호 작가/작품 */}
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Palette className="w-6 h-6 text-orange-600" />
                    <h4 className="font-bold text-gray-900 text-lg">선호 작가/작품</h4>
                  </div>
                  <div className="bg-white/60 p-4 rounded-xl">
                    <p className="text-gray-700 text-sm leading-relaxed">{exhibitionTypeInfo.preferredArtists}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 매너온도 */}
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100/50 p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-red-100 rounded-2xl">
            <Thermometer className="w-8 h-8 text-red-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">매너온도</h2>
        </div>
        
        <div className="flex items-center gap-6 mb-8">
          <div className="text-4xl font-bold text-red-500">{currentProfile.mannerTemperature}°C</div>
          <div className={`text-xl font-bold ${mannerGrade.color} px-4 py-2 bg-gray-50 rounded-xl`}>
            {mannerGrade.grade}
          </div>
        </div>

        {/* 무지개 형태 매너온도 게이지 */}
        <div className="relative mb-8 flex items-center justify-center">
          <svg width="300" height="160" viewBox="0 0 300 160" className="mx-auto">
            {/* 배경 반원 */}
            <path
              d="M 30 150 A 120 120 0 0 1 270 150"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="20"
              strokeLinecap="round"
            />
            
            {/* 무지개 그라데이션 반원 */}
            <defs>
              <linearGradient id="rainbowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="25%" stopColor="#10b981" />
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="75%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#ef4444" />
              </linearGradient>
            </defs>
            <path
              d="M 30 150 A 120 120 0 0 1 270 150"
              fill="none"
              stroke="url(#rainbowGradient)"
              strokeWidth="20"
              strokeLinecap="round"
              strokeDasharray="377" // 반원 둘레
              strokeDashoffset={377 - (377 * Math.min((currentProfile.mannerTemperature / 42), 1))}
              className="transition-all duration-1000 ease-out"
            />
            
            {/* 온도 표시 포인터 */}
            {(() => {
              const percentage = Math.min((currentProfile.mannerTemperature / 42), 1);
              const angle = Math.PI * percentage; // 0 to π (반원)
              const x = 150 + 120 * Math.cos(Math.PI - angle);
              const y = 150 - 120 * Math.sin(Math.PI - angle);
              
              return (
                <circle
                  cx={x}
                  cy={y}
                  r="8"
                  fill="white"
                  stroke="#374151"
                  strokeWidth="3"
                  className="drop-shadow-lg transition-all duration-1000 ease-out"
                />
              );
            })()}
            
            {/* 온도 텍스트 */}
            <text
              x="150"
              y="140"
              textAnchor="middle"
              className="text-lg font-bold fill-gray-700"
            >
              {currentProfile.mannerTemperature}°C
            </text>
          </svg>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(mannerDetails)
            .filter(([key]) => key !== 'participation') // 적극성 제외
            .map(([key, value]) => {
            const labels = {
              attendance: '참석률',
              punctuality: '시간약속',
              communication: '소통능력',
              consideration: '배려심'
            };
            const colors = {
              attendance: 'text-blue-600',
              punctuality: 'text-green-600',
              communication: 'text-orange-600',
              consideration: 'text-red-600'
            };
            return (
              <div key={key} className="text-center p-4 bg-gray-50 rounded-2xl">
                <div className={`text-2xl font-bold mb-1 ${colors[key]}`}>{value}%</div>
                <div className="text-sm text-gray-600 font-medium">{labels[key]}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 최근 활동 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 최근 참여 모임 */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100/50 p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-2xl">
                <Users className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">최근 참여 모임</h3>
            </div>
            <button className="text-purple-500 text-sm font-medium hover:underline">더보기</button>
          </div>
          
          <div className="space-y-4">
            {completedMeetups.slice(0, 3).map((meetup) => (
              <div key={meetup.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                <div className="w-16 h-16 bg-gray-200 rounded-2xl overflow-hidden flex-shrink-0">
                  {!isImageError(`meetup-${meetup.id}`) ? (
                    <Image
                      src={meetup.image}
                      alt={meetup.title}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                      onError={() => handleImageError(`meetup-${meetup.id}`)}
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                      <Users className="w-8 h-8 text-gray-500" />
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-gray-900 truncate mb-1">{meetup.title}</h4>
                  <p className="text-sm text-gray-500">{meetup.date}</p>
                </div>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < meetup.rating ? 'fill-current' : ''}`} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 최근 전시 인증 */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100/50 p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-2xl">
                <Camera className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">최근 관람 인증</h3>
            </div>
            <button className="text-purple-500 text-sm font-medium hover:underline">더보기</button>
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            {recentCertifications.slice(0, 6).map((cert) => (
              <div key={cert.id} className="aspect-square bg-gray-200 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-200">
                {!isImageError(`cert-${cert.id}`) ? (
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    width={120}
                    height={120}
                    className="w-full h-full object-cover"
                    onError={() => handleImageError(`cert-${cert.id}`)}
                  />
                ) : (
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <Camera className="w-8 h-8 text-gray-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const MeetupsTab = () => (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-100/50 p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">참여 모임 내역</h2>
      
      <div className="space-y-6">
        {meetupHistory.map((meetup) => (
          <div key={meetup.id} className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-gray-200 rounded-2xl overflow-hidden flex-shrink-0">
                {!isImageError(`history-${meetup.id}`) ? (
                  <Image
                    src={meetup.image}
                    alt={meetup.title}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                    onError={() => handleImageError(`history-${meetup.id}`)}
                  />
                ) : (
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <Users className="w-10 h-10 text-gray-500" />
                  </div>
                )}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-900 text-lg">{meetup.title}</h3>
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                    meetup.status === '참여완료' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {meetup.status}
                  </span>
                </div>
                
                <div className="flex items-center gap-6 text-gray-500 mb-3">
                  <span>호스트: {meetup.host}</span>
                  <span>{meetup.date}</span>
                </div>
                
                {meetup.rating && (
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-5 h-5 ${i < meetup.rating ? 'fill-current' : ''}`} />
                      ))}
                    </div>
                    <span className="text-gray-600 font-medium">({meetup.rating}/5)</span>
                  </div>
                )}
                
                {meetup.review && (
                  <p className="text-gray-600 bg-gray-50 p-4 rounded-xl">{meetup.review}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const CertificationsTab = () => (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-100/50 p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">전시 관람 인증</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {exhibitionCertifications.map((cert) => (
          <div key={cert.id} className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-[4/3] bg-gray-200">
              {!isImageError(`certification-${cert.id}`) ? (
                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                  onError={() => handleImageError(`certification-${cert.id}`)}
                />
              ) : (
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <Camera className="w-16 h-16 text-gray-500" />
                </div>
              )}
            </div>
            
            <div className="p-6">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">{cert.title}</h3>
              <p className="text-gray-600 mb-2 font-medium">{cert.gallery}</p>
              <p className="text-gray-500 mb-4">{cert.date}</p>
              
              <div className="flex flex-wrap gap-2">
                {cert.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-xl text-sm font-medium">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50/30 via-white to-pink-50/30" onClick={() => setIsTypeDropdownOpen(false)}>
      <div className="max-w-7xl mx-auto px-4 py-8" onClick={(e) => e.stopPropagation()}>
        {/* 프로필 헤더 */}
        <ProfileHeader />

        {/* 탭 메뉴 */}
        {/* <div className="mb-8">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-2xl text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-purple-500 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div> */}

        {/* 탭 콘텐츠 */}
        {activeTab === 'overview' && <OverviewTab />}
        {activeTab === 'meetups' && <MeetupsTab />}
        {activeTab === 'certifications' && <CertificationsTab />}
      </div>
    </div>
  );
};

export default MyPageClient;