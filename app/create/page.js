// app/create/page.js

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Bus, 
  Plus, 
  X, 
  Sparkles,
  ChevronDown,
  Search
} from 'lucide-react';
import { galleryData } from '../../lib/gallery';

const CreateMeetupPage = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  
  // 폼 데이터 상태
  const [formData, setFormData] = useState({
    host: '차가운순대',
    role: '아트러버',
    title: '',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0], // 내일 날짜
    time: '10:00',
    location: '한남동',
    meetingPoint: '',
    maxParticipants: 4,
    description: '',
    selectedGalleries: [],
    transportType: 'meetup', // 'meetup' or 'bus'
    timeline: []
  });

  // UI 상태
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [gallerySearchQuery, setGallerySearchQuery] = useState('');
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showTimeSelector, setShowTimeSelector] = useState(false);
  const [tempSelectedGalleries, setTempSelectedGalleries] = useState([]); // 모달에서 임시 선택

  // 서울 주요 지역 데이터
  const seoulDistricts = [
    '강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구',
    '노원구', '도봉구', '동대문구', '동작구', '마포구', '서대문구', '서초구', '성동구',
    '성북구', '송파구', '양천구', '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구'
  ];

  // 인기 지역 (갤러리가 많은 곳)
  const popularAreas = ['한남동', '청담동', '삼청동', '인사동', '을지로', '강남'];

  // 시간 선택 옵션 (10:00 ~ 19:00, 30분 간격)
  const timeOptions = [];
  for (let hour = 10; hour <= 19; hour++) {
    timeOptions.push(`${hour.toString().padStart(2, '0')}:00`);
    if (hour < 19) {
      timeOptions.push(`${hour.toString().padStart(2, '0')}:30`);
    }
  }

  // 참여자 수 옵션
  const regularMeetupOptions = [2, 3, 4, 5, 6, 8, 10, 12];
  const busMeetupOptions = [28];

  // 갤러리 필터링
  const filteredGalleries = galleryData.filter(gallery => 
    gallery.gallery.toLowerCase().includes(gallerySearchQuery.toLowerCase()) ||
    gallery.location.toLowerCase().includes(gallerySearchQuery.toLowerCase()) ||
    gallery.title.toLowerCase().includes(gallerySearchQuery.toLowerCase())
  );

  const handleInputChange = (field, value) => {
    setFormData(prev => {
      const newData = {
        ...prev,
        [field]: value
      };
      
      // 모임 형태가 변경될 때 참여자 수도 자동 조정
      if (field === 'transportType') {
        if (value === 'bus') {
          newData.maxParticipants = 28;
        } else {
          newData.maxParticipants = 8; // 일반 모임 기본값
        }
      }
      
      return newData;
    });
  };

  const handleGallerySelect = (gallery) => {
    if (tempSelectedGalleries.find(g => g.id === gallery.id)) {
      // 이미 선택된 갤러리면 제거
      setTempSelectedGalleries(prev => prev.filter(g => g.id !== gallery.id));
    } else {
      // 새로운 갤러리 추가
      setTempSelectedGalleries(prev => [...prev, gallery]);
    }
  };

  const handleGalleryModalOpen = () => {
    // 모달 열 때 현재 선택된 갤러리들을 임시 상태로 복사
    setTempSelectedGalleries([...formData.selectedGalleries]);
    setShowGalleryModal(true);
  };

  const handleGalleryModalClose = () => {
    // 모달 닫을 때 임시 선택 초기화
    setTempSelectedGalleries([]);
    setGallerySearchQuery('');
    setShowGalleryModal(false);
  };

  const handleGalleryConfirm = () => {
    // 선택 확정
    setFormData(prev => ({
      ...prev,
      selectedGalleries: [...tempSelectedGalleries]
    }));
    setTempSelectedGalleries([]);
    setGallerySearchQuery('');
    setShowGalleryModal(false);
  };

  const removeGallery = (galleryId) => {
    setFormData(prev => ({
      ...prev,
      selectedGalleries: prev.selectedGalleries.filter(g => g.id !== galleryId)
    }));
  };

  const generateAISchedule = async () => {
    setIsGenerating(true);
    
    // AI 호출 시뮬레이션 (3초 대기)
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // 임시 생성된 스케줄
    const generatedTimeline = [
      {
        time: '10:00',
        location: formData.selectedGalleries[0]?.gallery || '갤러리 A',
        description: '첫 번째 갤러리 관람',
        duration: '1.5시간'
      },
      {
        time: '12:00',
        location: '점심 식사',
        description: '근처 맛집에서 함께 식사',
        duration: '1시간'
      },
      {
        time: '13:30',
        location: formData.selectedGalleries[1]?.gallery || '갤러리 B',
        description: '두 번째 갤러리 관람 및 작품 토론',
        duration: '2시간'
      }
    ];

    setFormData(prev => ({
      ...prev,
      timeline: generatedTimeline,
      title: `${formData.location} 갤러리 투어`,
      description: `${formData.location}의 주요 갤러리들을 함께 돌아보며 작품을 감상하고 이야기를 나누는 모임입니다.`
    }));
    
    setIsGenerating(false);
    setCurrentStep(3);
  };

  const handleBackClick = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      router.push('/');
    }
  };

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSubmit = () => {
    console.log('모임 생성:', formData);
    // 실제로는 API 호출
    router.push('/');
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {[1, 2, 3].map((step) => (
        <React.Fragment key={step}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
            step <= currentStep 
              ? 'bg-red-400 text-white' 
              : 'bg-gray-200 text-gray-500'
          }`}>
            {step}
          </div>
          {step < 3 && (
            <div className={`w-12 h-0.5 mx-2 ${
              step < currentStep ? 'bg-red-400' : 'bg-gray-200'
            }`} />
          )}
        </React.Fragment>
      ))}
    </div>
  );

  const renderStep1 = () => (
    <div className="space-y-6 pb-20">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">기본 정보</h2>
        <p className="text-gray-600">모임의 기본 정보를 입력해주세요</p>
      </div>

      {/* 날짜 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <Calendar className="w-4 h-4 inline mr-1" />
          날짜
        </label>
        <input
          type="date"
          value={formData.date}
          onChange={(e) => handleInputChange('date', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-400 focus:border-red-400"
          min={new Date().toISOString().split('T')[0]}
        />
      </div>

      {/* 시간 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <Clock className="w-4 h-4 inline mr-1" />
          출발/만남 시간
        </label>
        <div className="relative">
          <input
            type="text"
            value={formData.time}
            onClick={() => setShowTimeSelector(true)}
            placeholder="시간을 선택하세요"
            readOnly
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-400 focus:border-red-400 cursor-pointer"
          />
          
          {showTimeSelector && (
            <div className="absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-xl shadow-lg max-h-48 overflow-y-auto">
              <div className="p-3 grid grid-cols-3 gap-2">
                {timeOptions.map(time => (
                  <button
                    key={time}
                    onClick={() => {
                      handleInputChange('time', time);
                      setShowTimeSelector(false);
                    }}
                    className={`p-2 rounded-lg text-sm font-medium transition-colors ${
                      formData.time === time
                        ? 'bg-red-400 text-white'
                        : 'bg-gray-50 text-gray-700 hover:bg-red-50 hover:text-red-600'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 지역 선택 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <MapPin className="w-4 h-4 inline mr-1" />
          주요 활동 지역
        </label>
        
        {/* 인기 지역 바로가기 */}
        <div className="mb-3">
          <p className="text-xs text-gray-500 mb-2">인기 지역</p>
          <div className="flex flex-wrap gap-2">
            {popularAreas.map(area => (
              <button
                key={area}
                onClick={() => handleInputChange('location', area)}
                className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                  formData.location === area
                    ? 'bg-red-400 text-white border-red-400'
                    : 'bg-white text-gray-600 border-gray-300 hover:border-red-400'
                }`}
              >
                {area}
              </button>
            ))}
          </div>
        </div>

        {/* 직접 입력 */}
        <div className="relative">
          <input
            type="text"
            value={formData.location}
            onChange={(e) => handleInputChange('location', e.target.value)}
            onFocus={() => setShowLocationDropdown(true)}
            placeholder="지역을 검색하거나 직접 입력하세요"
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-400 focus:border-red-400"
          />
          
          {showLocationDropdown && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-xl shadow-lg max-h-48 overflow-y-auto">
              {seoulDistricts
                .filter(district => district.includes(formData.location))
                .map(district => (
                <button
                  key={district}
                  onClick={() => {
                    handleInputChange('location', district);
                    setShowLocationDropdown(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm"
                >
                  {district}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 모임 형태 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          모임 형태
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => handleInputChange('transportType', 'meetup')}
            className={`p-4 border rounded-xl text-center transition-colors ${
              formData.transportType === 'meetup'
                ? 'border-red-400 bg-red-50 text-red-700'
                : 'border-gray-300 text-gray-600 hover:border-red-400'
            }`}
          >
            <Users className="w-6 h-6 mx-auto mb-2" />
            <div className="font-medium">일반 모임</div>
            <div className="text-xs text-gray-500">각자 이동</div>
          </button>
          <button
            onClick={() => handleInputChange('transportType', 'bus')}
            className={`p-4 border rounded-xl text-center transition-colors ${
              formData.transportType === 'bus'
                ? 'border-red-400 bg-red-50 text-red-700'
                : 'border-gray-300 text-gray-600 hover:border-red-400'
            }`}
          >
            <Bus className="w-6 h-6 mx-auto mb-2" />
            <div className="font-medium">아트버스</div>
            <div className="text-xs text-gray-500">단체 이동</div>
          </button>
        </div>
      </div>

      {/* 최대 참여자 수 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          <Users className="w-4 h-4 inline mr-1" />
          최대 참여자 수
        </label>
        
        {formData.transportType === 'bus' ? (
          // 아트버스인 경우 28명 고정 표시
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
            <div className="text-red-700 font-semibold text-lg">28명</div>
            <div className="text-red-600 text-sm">아트버스 고정 인원</div>
          </div>
        ) : (
          // 일반 모임인 경우 버튼 선택
          <div className="grid grid-cols-4 gap-2">
            {regularMeetupOptions.map(num => (
              <button
                key={num}
                onClick={() => handleInputChange('maxParticipants', num)}
                className={`p-3 rounded-xl text-center transition-colors ${
                  formData.maxParticipants === num
                    ? 'bg-red-400 text-white'
                    : 'bg-gray-50 text-gray-700 hover:bg-red-50 hover:text-red-600 border border-gray-200'
                }`}
              >
                <div className="font-medium text-sm">{num}명</div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6 pb-20">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">갤러리 선택</h2>
        <p className="text-gray-600">방문하고 싶은 갤러리를 선택해주세요</p>
      </div>

      {/* 선택된 갤러리 */}
      {formData.selectedGalleries.length > 0 && (
        <div className="bg-gray-50 rounded-xl p-4 mb-6">
          <h3 className="font-medium text-gray-900 mb-3">선택된 갤러리 ({formData.selectedGalleries.length}개)</h3>
          <div className="space-y-2">
            {formData.selectedGalleries.map(gallery => (
              <div key={gallery.id} className="flex items-center justify-between bg-white p-3 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src={gallery.image}
                      alt={gallery.gallery}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <div className="font-medium text-sm">{gallery.gallery}</div>
                    <div className="text-xs text-gray-500">{gallery.location}</div>
                  </div>
                </div>
                <button
                  onClick={() => removeGallery(gallery.id)}
                  className="text-gray-400 hover:text-red-500"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 갤러리 추가 버튼 */}
      <button
        onClick={handleGalleryModalOpen}
        className="w-full border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-red-400 transition-colors"
      >
        <Plus className="w-6 h-6 mx-auto mb-2 text-gray-400" />
        <div className="text-gray-600">갤러리 추가하기</div>
      </button>

      {/* AI 일정 생성 */}
      {formData.selectedGalleries.length >= 1 && (
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-purple-500" />
            <span className="font-medium text-purple-900">AI 일정 생성</span>
          </div>
          <p className="text-sm text-purple-700 mb-4">
            선택한 갤러리들을 바탕으로 최적의 일정을 AI가 자동으로 생성해드립니다.
          </p>
          <button
            onClick={generateAISchedule}
            disabled={isGenerating}
            className="w-full bg-purple-500 text-white py-3 rounded-xl font-semibold hover:bg-purple-600 transition-colors disabled:bg-purple-300"
          >
            {isGenerating ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                일정 생성 중...
              </div>
            ) : (
              '✨ AI로 일정 생성하기'
            )}
          </button>
        </div>
      )}
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6 pb-20">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">최종 확인</h2>
        <p className="text-gray-600">모임 정보를 확인하고 수정해주세요</p>
      </div>

      {/* 모임 제목 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">모임 제목</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => handleInputChange('title', e.target.value)}
          placeholder="모임 제목을 입력하세요"
          className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-400 focus:border-red-400"
        />
      </div>

      {/* 모임 설명 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">모임 설명</label>
        <textarea
          value={formData.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
          placeholder="모임에 대한 자세한 설명을 입력하세요"
          rows={4}
          className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-400 focus:border-red-400"
        />
      </div>

      {/* 생성된 일정 (AI가 생성한 경우) */}
      {formData.timeline.length > 0 && (
        <div className="bg-gray-50 rounded-xl p-4">
          <h3 className="font-medium text-gray-900 mb-3">일정</h3>
          <div className="space-y-3">
            {formData.timeline.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-16 text-sm font-medium text-gray-600 mt-1">
                  {item.time}
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">{item.location}</div>
                  <div className="text-sm text-gray-600">{item.description}</div>
                  {item.duration && (
                    <div className="text-xs text-gray-500">소요시간: {item.duration}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 모임 정보 요약 */}
      <div className="bg-gray-50 rounded-xl p-4">
        <h3 className="font-medium text-gray-900 mb-3">모임 정보</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">날짜</span>
            <span className="font-medium">{formData.date}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">시간</span>
            <span className="font-medium">{formData.time}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">지역</span>
            <span className="font-medium">{formData.location}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">최대 참여자</span>
            <span className="font-medium">{formData.maxParticipants}명</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">방문 갤러리</span>
            <span className="font-medium">{formData.selectedGalleries.length}곳</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* 헤더 */}
        <div className="flex items-center gap-4 mb-8">
          <button 
            onClick={handleBackClick}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-bold text-gray-900">모임 만들기</h1>
        </div>

        {/* 단계 표시 */}
        {renderStepIndicator()}

        {/* 단계별 컨텐츠 */}
        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderStep3()}
      </div>

      {/* 하단 고정 버튼 - Step별로 다른 버튼 */}
      {currentStep === 1 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-10">
          <div className="max-w-2xl mx-auto">
            <button
              onClick={handleNextStep}
              disabled={!formData.date || !formData.time || !formData.location}
              className="w-full bg-red-400 text-white py-3 rounded-xl font-semibold hover:bg-red-500 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              다음 단계
            </button>
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-10">
          <div className="max-w-2xl mx-auto">
            <div className="flex gap-3">
              <button
                onClick={handleBackClick}
                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
              >
                이전
              </button>
              <button
                onClick={handleNextStep}
                disabled={formData.selectedGalleries.length === 0}
                className="flex-1 bg-red-400 text-white py-3 rounded-xl font-semibold hover:bg-red-500 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                수동으로 계속
              </button>
            </div>
          </div>
        </div>
      )}

      {currentStep === 3 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-10">
          <div className="max-w-2xl mx-auto">
            <div className="flex gap-3">
              <button
                onClick={handleBackClick}
                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
              >
                이전
              </button>
              <button
                onClick={handleSubmit}
                disabled={!formData.title}
                className="flex-1 bg-red-400 text-white py-3 rounded-xl font-semibold hover:bg-red-500 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                모임 만들기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 갤러리 선택 모달 */}
      {showGalleryModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[80vh] overflow-hidden flex flex-col">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">갤러리 선택</h3>
                <button
                  onClick={handleGalleryModalClose}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              {/* 검색 */}
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={gallerySearchQuery}
                  onChange={(e) => setGallerySearchQuery(e.target.value)}
                  placeholder="갤러리 검색..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-red-400"
                />
              </div>
              
              {/* 선택된 갤러리 수 표시 */}
              {tempSelectedGalleries.length > 0 && (
                <div className="mt-3 text-sm text-gray-600">
                  {tempSelectedGalleries.length}개 선택됨
                </div>
              )}
            </div>
            
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-3">
                {filteredGalleries.map(gallery => (
                  <div
                    key={gallery.id}
                    onClick={() => handleGallerySelect(gallery)}
                    className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                      tempSelectedGalleries.find(g => g.id === gallery.id)
                        ? 'border-red-400 bg-red-50'
                        : 'border-gray-200 hover:border-red-400'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gray-200 rounded-lg overflow-hidden">
                        <Image
                          src={gallery.image}
                          alt={gallery.gallery}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{gallery.gallery}</div>
                        <div className="text-xs text-gray-500">{gallery.location}</div>
                        <div className="text-xs text-gray-400 truncate">{gallery.title}</div>
                      </div>
                      {tempSelectedGalleries.find(g => g.id === gallery.id) && (
                        <div className="w-5 h-5 bg-red-400 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* 하단 선택 버튼 */}
            <div className="p-6 border-t border-gray-200">
              <button
                onClick={handleGalleryConfirm}
                disabled={tempSelectedGalleries.length === 0}
                className={`w-full py-3 rounded-xl font-semibold transition-colors ${
                  tempSelectedGalleries.length > 0
                    ? 'bg-red-400 text-white hover:bg-red-500'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {tempSelectedGalleries.length > 0 
                  ? `${tempSelectedGalleries.length}개 갤러리 선택하기`
                  : '갤러리를 선택해주세요'
                }
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 클릭 이벤트 처리를 위한 오버레이 */}
      {(showLocationDropdown || showTimeSelector) && (
        <div 
          className="fixed inset-0 z-5"
          onClick={() => {
            setShowLocationDropdown(false);
            setShowTimeSelector(false);
          }}
        />
      )}
    </>
  );
};

export default CreateMeetupPage;