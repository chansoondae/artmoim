// app/gallery/page.js 


'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Heart, MapPin, Calendar, Filter, Search } from 'lucide-react';
import { galleryData, toggleExhibitionLike } from '../../lib/gallery';

const GalleryPage = () => {
  const [exhibitions, setExhibitions] = useState(galleryData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('전체');
  const [selectedCategory, setSelectedCategory] = useState('전체');

  const locations = ['전체', '청담동', '한남동', '삼청동', '인사동', '을지로', '강남'];
  const categories = ['전체', '전시중', '종료임박', '전시종료'];

  // 지역별 색상 매핑
  const locationColors = {
    '청담동': 'bg-pink-100 text-pink-700 border-pink-200',
    '한남동': 'bg-blue-100 text-blue-700 border-blue-200',
    '삼청동': 'bg-green-100 text-green-700 border-green-200',
    '인사동': 'bg-orange-100 text-orange-700 border-orange-200',
    '을지로': 'bg-purple-100 text-purple-700 border-purple-200',
  };

  // 카테고리별 색상 매핑
  const categoryColors = {
    '전시중': 'bg-green-600/80',
    '종료임박': 'bg-red-600/80', 
    '전시종료': 'bg-gray-600/80',
  };

  const handleLikeToggle = (id) => {
    toggleExhibitionLike(id);
    setExhibitions([...galleryData]); // 상태 업데이트를 위한 새 배열
  };

  const filteredExhibitions = exhibitions.filter(exhibition => {
    const matchesSearch = exhibition.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         exhibition.gallery.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         exhibition.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = selectedLocation === '전체' || exhibition.location === selectedLocation;
    const matchesCategory = selectedCategory === '전체' || exhibition.category === selectedCategory;
    return matchesSearch && matchesLocation && matchesCategory;
  });

  const ExhibitionCard = ({ exhibition }) => {
    const [imageError, setImageError] = useState(false);

    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
        {/* 전시 이미지 */}
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
          {!imageError ? (
            <Image
              src={exhibition.image}
              alt={exhibition.title}
              width={300}
              height={225}
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              <div className="text-center text-gray-400">
                <div className="w-12 h-12 mx-auto mb-2 bg-gray-200 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-xs">이미지를 불러올 수 없습니다</p>
              </div>
            </div>
          )}
          
          {/* 좋아요 버튼 */}
          <button
            onClick={() => handleLikeToggle(exhibition.id)}
            className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
                exhibition.isLiked ? 'text-red-500 fill-red-500' : 'text-gray-600'
              }`}
            />
          </button>
          
          {/* 카테고리 뱃지 */}
          <div className="absolute top-3 left-3">
            <span className={`text-white text-xs px-2 py-1 rounded-full ${categoryColors[exhibition.category] || 'bg-black/70'}`}>
              {exhibition.category}
            </span>
          </div>

          {/* 지역 뱃지 */}
          <div className="absolute bottom-3 right-3">
            <span className={`text-xs px-2 py-1 rounded-full border ${locationColors[exhibition.location] || 'bg-gray-100 text-gray-700 border-gray-200'}`}>
              {exhibition.location}
            </span>
          </div>
        </div>

        {/* 전시 정보 */}
        <div className="p-4">
          <h3 className="font-bold text-gray-900 text-sm lg:text-base mb-2 line-clamp-2">
            {exhibition.title}
          </h3>
          
          <div className="flex flex-col gap-2 text-xs lg:text-sm text-gray-500 mb-3">
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3 lg:w-4 lg:h-4 flex-shrink-0" />
              <span>{exhibition.gallery}</span>
              <span className="inline-block w-1 h-1 bg-gray-400 rounded-full mx-1"></span>
              <span>{exhibition.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3 lg:w-4 lg:h-4 flex-shrink-0" />
              <span>{exhibition.period}</span>
            </div>
          </div>

          {/* 설명 */}
          <p className="text-xs lg:text-sm text-gray-600 mb-3 line-clamp-2">
            {exhibition.description}
          </p>

          {/* 좋아요 수 */}
          <div className="flex items-center gap-1 text-xs lg:text-sm text-gray-500">
            <Heart className="w-3 h-3 lg:w-4 lg:h-4" />
            <span>{exhibition.likes}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* 헤더 */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">갤러리</h1>
        <p className="text-gray-600">다양한 전시와 문화 행사를 둘러보세요</p>
      </div>

      {/* 검색 및 필터 */}
      <div className="mb-6 space-y-4">
        {/* 검색바 */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="전시명, 갤러리명, 지역을 검색해보세요"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent"
          />
        </div>

        {/* 카테고리 필터 */}
        {/* <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                selectedCategory === category
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div> */}

        {/* 지역 필터 */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {locations.map((location) => (
            <button
              key={location}
              onClick={() => setSelectedLocation(location)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                selectedLocation === location
                  ? 'bg-red-400 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {location}
            </button>
          ))}
        </div>
      </div>

      {/* 전시 목록 */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredExhibitions.map((exhibition) => (
          <ExhibitionCard key={exhibition.id} exhibition={exhibition} />
        ))}
      </div>

      {/* 검색 결과 없음 */}
      {filteredExhibitions.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-2">
            <Search className="w-12 h-12 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">검색 결과가 없어요</h3>
          <p className="text-gray-500">다른 키워드로 검색해보시거나 필터를 변경해보세요</p>
        </div>
      )}

      {/* 더 보기 버튼 */}
      {filteredExhibitions.length > 0 && (
        <div className="mt-12 text-center">
          <button className="bg-gradient-to-r from-red-400 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-red-500 hover:to-pink-600 transition-all duration-200 transform hover:scale-105">
            더 많은 전시 보기
          </button>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;