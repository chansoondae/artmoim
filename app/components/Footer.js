import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      background: '#f5f5f5',
      color: '#333',
      padding: '24px 0',
      textAlign: 'center',
      fontSize: '14px',
      borderTop: '1px solid #e0e0e0',
      marginTop: '40px',
      marginBottom: '72px', // BottomNav 가리지 않도록 여백 추가
    }}>
      <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>
        아트프렌즈 주식회사 (Art Friends Co., Ltd.)
      </div>
      <div>사업자등록번호: 806-88-03529</div>
      <div>이메일: artfriendscafe@gmail.com</div>
      <div>전화: 070-7918-3582</div>
      <div>주소: 서울시 서초구 강남대로 373, 위워크 8층 104호</div>
      <div style={{ marginTop: '12px' }}>
        <a href="/privacy" style={{ color: '#8b5cf6', textDecoration: 'underline', marginRight: '16px' }}>개인정보 처리방침</a>
        <a href="http://pf.kakao.com/_gIxlNb" target="_blank" rel="noopener noreferrer" style={{ color: '#3C1E1E', textDecoration: 'underline' }}>카카오톡 문의하기</a>
      </div>
    </footer>
  );
};

export default Footer; 