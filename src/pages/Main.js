import React from 'react';
import profileImg from "../images/profile_img.jpg";
import styled from 'styled-components';
import { GrContactInfo } from "react-icons/gr";

const MainWrapper = styled.div`
  /* margin-top: 80px; */
  margin-top: 30px;
`;

const ProfileWrapper = styled.div`
  height: 400px;
  display: flex;
  justify-content: center;
  /* background-color: blue; */
`;

const ProfileImgWrapper = styled.div`
  width: 280px;
  height: 300px;
`;

const ProfileImg = styled.div`
  width: 100%;
  /* height: 300px; */
  /* height: 100%; */
  background-image: url(${profileImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /* border-radius: 100px; */
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

  h2 {
    font-size: 30px;
  }
  p {
    font-size: 16px;
  }
`;
const ContactInfoUl = styled.ul`
  margin-top: 10px;

  li {

    h3 {
      font-size: 20px;
    }
    p {
      font-size: 16px;

      a {
        color: #333;
      }
    }
  }
`;

const Introduce = styled.div`
  margin-top: 50px;

  h2 {
    font-size: 30px;
  }
  p {
    margin-top: 10px;
    font-size: 20px;
  }
`;

function Main(props) {
  return (
    <MainWrapper className='inner'>
      <ProfileWrapper>
        <ProfileImgWrapper>
          <ProfileImg />
        </ProfileImgWrapper>
        <ProfileInfo>
          <ContactTitle>
            {/* <GrContactInfo/> */}
            <h2>김 유 미</h2>
            <p className='ml-1'>프론트엔드 개발자</p>
          </ContactTitle>
          <ContactInfoUl>
            <li className='mt-2'>
              <h3>생년월일</h3>
              <p className='mt-1'>1993년 11월 16일</p>
            </li>
            <li className='mt-2'>
              <h3>E-mail</h3>
              <p className='mt-1'>kyumi16@gmail.com</p>
            </li>
            <li className='mt-2'>
              <h3>휴대폰</h3>
              <p className='mt-1'>010-2990-5887</p>
            </li>
            <li className='mt-2'>
              <h3>주소</h3>
              <p className='mt-1'>인천시 계양구 장제로 995번길 26</p>
            </li>
            <li className='mt-2'>
              <h3>GitHub</h3>
              <p className='mt-1'>
                <a href='https://github.com/rladbal0101' target='_blank'>https://github.com/rladbal0101</a>
              </p>
            </li>
          </ContactInfoUl>
        </ProfileInfo>
      </ProfileWrapper>
      <Introduce>
        <h2>안녕하세요?</h2>
        <p>프론트엔드 개발을 꿈꾸는 김유미 입니다.</p>
        <p>프론트엔드 개발을 꿈꾸는 김유미 입니다.</p>
        <p>프론트엔드 개발을 꿈꾸는 김유미 입니다.</p>
        <p>프론트엔드 개발을 꿈꾸는 김유미 입니다.</p>
        <p>프론트엔드 개발을 꿈꾸는 김유미 입니다.</p>
        <p>프론트엔드 개발을 꿈꾸는 김유미 입니다.</p>
      </Introduce>
    </MainWrapper>
  );
}

export default Main;