import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div style={{ maxWidth: 700, margin: '40px auto', padding: '24px', background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 24 }}>개인정보 처리방침</h1>
      <p>아트프렌즈 주식회사(이하 "회사")는 이용자의 개인정보를 소중하게 생각하며, 관련 법령을 준수합니다. 본 방침은 회사가 제공하는 서비스 이용 시 적용됩니다.</p>
      <h2 style={{ fontSize: 20, fontWeight: 600, marginTop: 32 }}>1. 수집하는 개인정보 항목</h2>
      <ul style={{ marginLeft: 20 }}>
        <li>필수: 이름, 이메일, 비밀번호, 닉네임</li>
        <li>선택: 프로필 사진, MBTI, 관심사</li>
        <li>서비스 이용 기록, 접속 로그, 쿠키, 접속 IP 정보 등</li>
      </ul>
      <h2 style={{ fontSize: 20, fontWeight: 600, marginTop: 32 }}>2. 개인정보의 수집 및 이용 목적</h2>
      <ul style={{ marginLeft: 20 }}>
        <li>회원 가입 및 관리</li>
        <li>서비스 제공 및 맞춤형 서비스 제공</li>
        <li>문의 및 민원 처리</li>
        <li>서비스 개선 및 신규 서비스 개발</li>
        <li>법적 의무 이행</li>
      </ul>
      <h2 style={{ fontSize: 20, fontWeight: 600, marginTop: 32 }}>3. 개인정보의 보유 및 이용 기간</h2>
      <ul style={{ marginLeft: 20 }}>
        <li>회원 탈퇴 시까지(단, 관련 법령에 따라 보존 필요 시 해당 기간 동안 보관)</li>
      </ul>
      <h2 style={{ fontSize: 20, fontWeight: 600, marginTop: 32 }}>4. 개인정보의 제3자 제공</h2>
      <ul style={{ marginLeft: 20 }}>
        <li>회사는 이용자의 동의 없이 개인정보를 외부에 제공하지 않습니다. 단, 법령에 의거하거나 수사기관의 요청이 있는 경우 등은 예외로 합니다.</li>
      </ul>
      <h2 style={{ fontSize: 20, fontWeight: 600, marginTop: 32 }}>5. 이용자의 권리와 행사 방법</h2>
      <ul style={{ marginLeft: 20 }}>
        <li>이용자는 언제든지 자신의 개인정보를 조회, 수정, 삭제, 처리정지 요청할 수 있습니다.</li>
        <li>회원 탈퇴는 서비스 내 설정 메뉴 또는 문의를 통해 가능합니다.</li>
      </ul>
      <h2 style={{ fontSize: 20, fontWeight: 600, marginTop: 32 }}>6. 개인정보 보호책임자 및 문의처</h2>
      <ul style={{ marginLeft: 20 }}>
        <li>책임자: 아트프렌즈 주식회사</li>
        <li>이메일: artfriendscafe@gmail.com</li>
        <li>전화: 070-7918-3582</li>
        <li>주소: 서울시 서초구 강남대로 373, 위워크 8층 104호</li>
      </ul>
      <h2 style={{ fontSize: 20, fontWeight: 600, marginTop: 32 }}>7. 기타</h2>
      <ul style={{ marginLeft: 20 }}>
        <li>본 방침은 관련 법령 및 회사 정책에 따라 변경될 수 있습니다. 변경 시 사전 공지합니다.</li>
      </ul>
      <div style={{ marginTop: 40, color: '#888', fontSize: 14 }}>
        시행일: 2024년 6월 1일
      </div>
    </div>
  );
}
