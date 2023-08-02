import React from 'react';
import styled from 'styled-components';
import profileImg from "../images/profile_img.jpg";

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;

    .profile-info {
      text-align: center;
      margin: 50px 0 0 0;
    }
    .content-title {
      justify-content: center;
    }
  }
`;

const ProfileImgWrapper = styled.div`
  width: 350px;
  height: 350px;
`;

const ProfileImg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${profileImg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

const ProfileInfo = styled.div`
  width: 400px;
  margin-left: 50px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContactTitle = styled.div`
  display: flex;
  align-items: center;
`;
const ContactInfoUl = styled.ul`

  p {
    font-size: 14px;

    a {
      color: #333;
      text-decoration: none;

      &:hover {
        color: #80d8da;
      }
    }
  }
`;

const Introduce = styled.div`
  /* p {
    font-size: 20px;
  } */
`;

function Profile(props) {
  return (
    <div className='mt-3'>
      <ProfileWrapper>
        <ProfileImgWrapper>
          <ProfileImg />
        </ProfileImgWrapper>
        <ProfileInfo className='profile-info'>
          <ContactTitle className='content-title'>
            <h2>김 유 미</h2>
            <p className='ml-1'>프론트엔드 개발자</p>
          </ContactTitle>
          <ContactInfoUl className='mt-1'>
            <li className='mt-2'>
              <h4>생년월일</h4>
              <p className='mt-1'>1993년 11월 16일</p>
            </li>
            <li className='mt-2'>
              <h4>E-mail</h4>
              <p className='mt-1'>kyumi16@gmail.com</p>
            </li>
            <li className='mt-2'>
              <h4>휴대폰</h4>
              <p className='mt-1'>010-2990-5887</p>
            </li>
            <li className='mt-2'>
              <h4>주소</h4>
              <p className='mt-1'>인천시 계양구 장제로 995번길 26</p>
            </li>
            <li className='mt-2'>
              <h4>GitHub</h4>
              <p className='mt-1'>
                <a href='https://github.com/rladbal0101' target='_blank'>https://github.com/rladbal0101</a>
              </p>
            </li>
          </ContactInfoUl>
        </ProfileInfo>
      </ProfileWrapper>
      
      {/* 자기소개 */}
      <Introduce className='mt-5'>
        <h2>안녕하세요?</h2>
        <p className='mt-1'>프론트엔드 개발을 꿈꾸는 김유미 입니다.</p>
        <p className='mt-1'>프론트엔드 개발을 꿈꾸는 김유미 입니다.</p>
        <p className='mt-1'>프론트엔드 개발을 꿈꾸는 김유미 입니다.</p>
        <p className='mt-1'>프론트엔드 개발을 꿈꾸는 김유미 입니다.</p>
        <p className='mt-1'>프론트엔드 개발을 꿈꾸는 김유미 입니다.</p>
        <p className='mt-1'>프론트엔드 개발을 꿈꾸는 김유미 입니다.</p>
      </Introduce>
    </div>
  );
}

export default Profile;