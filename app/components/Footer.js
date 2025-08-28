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
    </footer>
  );
};

export default Footer; 