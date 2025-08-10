// app/components/BottomNav.js
'use client';

import { Users, Image, Plus, MessageCircle, User } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

const BottomNav = () => {
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    {
      id: 'meetups',
      path: '/',
      icon: Users,
      label: '모임',
    },
    {
      id: 'gallery',
      path: '/gallery',
      icon: Image,
      label: '갤러리',
    },
    // {
    //   id: 'create',
    //   path: '/create',
    //   icon: Plus,
    //   label: null, // 가운데 버튼은 라벨 없음
    //   isCenter: true,
    // },
    {
      id: 'personality',
      path: '/personality',
      icon: Plus,
      label: null, // 가운데 버튼은 라벨 없음
      isCenter: true,
    },
    {
      id: 'chat',
      path: '/chat',
      icon: MessageCircle,
      label: '채팅',
    },
    {
      id: 'mypage',
      path: '/mypage',
      icon: User,
      label: '마이페이지',
    }
  ];

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-around items-end py-2 relative">
          {navItems.map(({ id, path, icon: Icon, label, isCenter }) => {
            const isActive = pathname === path;
            
            if (isCenter) {
              // 가운데 원형 + 버튼
              return (
                <button
                  key={id}
                  onClick={() => handleNavigation(path)}
                  className="bg-red-400 hover:bg-pink-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition-all duration-200 -mt-6"
                >
                  <Icon className="w-7 h-7" />
                </button>
              );
            }

            // 일반 네비게이션 버튼
            return (
              <button
                key={id}
                onClick={() => handleNavigation(path)}
                className={`flex flex-col items-center gap-1 py-2 px-3 transition-colors hover:bg-gray-50 rounded-lg min-w-0 ${
                  isActive ? 'text-red-400' : 'text-gray-400'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-medium truncate">{label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;