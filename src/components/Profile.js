import React from 'react';
import styled from 'styled-components';
import profileImg from "../images/profile_img.jpg";
import { BsGithub } from "react-icons/bs";
import { RxNotionLogo } from "react-icons/rx";

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 85px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    &#profile {
      padding-top: 65px;
    }
    .profile-info {
      text-align: center;
      margin: 50px 0 0 0;
    }
    .content-title {
      justify-content: center;
    }
    .link {
      justify-content: center;
    }
  }
`;

const ProfileImgWrapper = styled.div`
  width: 300px;
  height: 300px;
  margin-top: 20px;
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
  }

  .link {
    display: flex;
    
    a {
      display: flex;
      align-items: center;

      svg {
        font-size: 25px;
        margin-right: 5px;
      }
    }

    h4 + h4 {
      margin-left: 20px;
    }
  }
`;

function Profile(props) {
  return (
    <ProfileWrapper id='profile'>
      <ProfileImgWrapper>
        <ProfileImg />
      </ProfileImgWrapper>
      <ProfileInfo className='profile-info'>
        <ContactTitle className='content-title'>
          <h2>김 유 미</h2>
          <p className='ml-1'>프론트엔드 개발자</p>
        </ContactTitle>
        <ContactInfoUl>
          <li className='mt-2'>
            <h4>휴대폰</h4>
            <p>010-2990-5887</p>
          </li>
          <li className='mt-2'>
            <h4>E-mail</h4>
            <p>kyumi16@gmail.com</p>
          </li>
          <li className='mt-2'>
            <h4>생년월일</h4>
            <p>1993년 11월 16일 &#40;만29세&#41;</p>
          </li>
          <li className='mt-2'>
            <h4>주소</h4>
            <p>인천시 계양구 장제로 995번길 26</p>
          </li>
          <li className='mt-2 link'>
            <h4>
              <a href='https://github.com/rladbal0101' target='_blank'><BsGithub />GitHub</a>
            </h4>
            <h4>
              <a href='https://magnificent-echinodon-80d.notion.site/52656b0ab27741e2b2fa50df4ad632a0?pvs=4' target='_blank'><RxNotionLogo />Notion</a>
            </h4>
          </li>
        </ContactInfoUl>
      </ProfileInfo>
    </ProfileWrapper>
  );
}

export default Profile;