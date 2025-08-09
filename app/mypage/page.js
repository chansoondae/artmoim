
// app/mypage/page.js (서버 컴포넌트)
import { Suspense } from 'react';
import MyPageClient from './MyPageClient';

// 로딩 컴포넌트
const MyPageLoading = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-50/30 via-white to-pink-50/30">
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* 프로필 헤더 스켈레톤 */}
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100/50 p-6 mb-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-20 h-20 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="flex-1 space-y-2">
            <div className="h-6 bg-gray-200 rounded animate-pulse w-32"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-28"></div>
          </div>
        </div>
        <div className="h-4 bg-gray-200 rounded animate-pulse mb-6"></div>
        <div className="grid grid-cols-4 gap-3">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="p-3 bg-gray-100 rounded-xl">
              <div className="h-6 bg-gray-200 rounded animate-pulse mb-1"></div>
              <div className="h-3 bg-gray-200 rounded animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* 콘텐츠 스켈레톤 */}
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100/50 p-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 bg-gray-200 rounded-2xl animate-pulse"></div>
          <div className="h-8 bg-gray-200 rounded animate-pulse w-48"></div>
        </div>
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
        </div>
      </div>
    </div>
  </div>
);

export default function MyPage() {
  return (
    <Suspense fallback={<MyPageLoading />}>
      <MyPageClient />
    </Suspense>
  );
}