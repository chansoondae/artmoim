// app/layout.js
import { Users } from 'lucide-react';
import BottomNav from './components/BottomNav';
import './globals.css'; // Tailwind CSS

export const metadata = {
  title: {
    default: '아트프렌즈 - 함께하는 미술 모임',
    template: '%s | 아트프렌즈'
  },
  description: '다양한 아트 경험을 나누고 새로운 친구들을 만나보세요. MBTI 기반 전시 관람 성향으로 나와 잘 맞는 아트프렌즈를 찾아 함께 갤러리 투어를 즐겨보세요.',
  keywords: ['미술', '전시', '갤러리', '모임', '아트', '예술', 'MBTI', '전시관람', '미술관', '아트프렌즈', '문화생활', '예술친구'],
  authors: [{ name: '아트프렌즈 팀' }],
  creator: '아트프렌즈',
  publisher: '아트프렌즈',
  applicationName: '아트프렌즈',
  metadataBase: new URL('https://www.gungeum.co.kr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://www.gungeum.co.kr',
    title: '아트프렌즈 - 함께하는 미술 모임',
    description: '다양한 아트 경험을 나누고 새로운 친구들을 만나보세요. MBTI 기반 전시 관람 성향으로 나와 잘 맞는 아트프렌즈를 찾아 함께 갤러리 투어를 즐겨보세요.',
    siteName: '아트프렌즈',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '아트프렌즈 - 함께하는 미술 모임',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '아트프렌즈 - 함께하는 미술 모임',
    description: '다양한 아트 경험을 나누고 새로운 친구들을 만나보세요',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    naver: 'your-naver-verification-code',
  },
  category: '예술 및 문화',
  classification: '소셜 네트워킹',
  other: {
    'theme-color': '#8b5cf6',
    'color-scheme': 'light',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': '아트프렌즈',
    'format-detection': 'telephone=no',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#8b5cf6',
  colorScheme: 'light',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="naver-site-verification" content="your-naver-verification-code" />
      </head>
      <body>
        <div className="min-h-screen bg-gray-50">
          {/* Header */}
          <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">A</span>
                  </div>
                  <h1 className="text-xl font-bold text-gray-900">아트프렌즈</h1>
                </div>
                <div className="flex items-center gap-4">
                  <button className="text-gray-600 hover:text-gray-900 transition-colors">
                    <Users className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="pb-20">
            {children}
          </main>

          {/* Bottom Navigation */}
          <BottomNav />
        </div>
      </body>
    </html>
  );
}