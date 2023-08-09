import React from 'react';
import styled from 'styled-components';
import { BsGithub } from "react-icons/bs";
import { HiMiniHome } from "react-icons/hi2";
import pieceWish from "../images/PieceWish.jpg";
import familyTalk from "../images/FamilyTalk.jpg";
import portfolio from "../images/Portfolio.jpg";

const ProjectsWraaper = styled.div`
  padding: 50px 0;
  border-top: 1px dashed #80d8da;

  &#project {
    padding-top: 65px;
  }
`;

const Project = styled.div`
  padding: 30px;
  border: 1px dotted #aaa;
  border-radius: 8px;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    list-style-type: disc;
    padding-left: 20px;

    li {
      /* font-size: 14px; */
    }
    li + li {
      margin-top: 10px;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    
    .project-contents {
      margin: 0 0 20px 0;
    }

    .site-img-wrapper {
      width: 320px;
      height: 220px;
    }
  }
`;

const ProjectContents = styled.div`
  margin: 0 20px 0 0;
`;

const LinkWrapper = styled.div`
  display: flex;

  a {
    display: flex;
    align-items: center;
    
    svg {
      font-size: 25px;
      margin-right: 5px;
    }
  }
`;

const SiteImgWrapper = styled.div`
  width: 400px;
  height: 300px;
`;

const PieceWishImg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${pieceWish});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

const FamilyTalkImg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${familyTalk});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

const PortFolioImg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${portfolio});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`; 

function Projects(props) {
  return (
    <ProjectsWraaper className='mt-5' id='project'>
      <h2>Projects</h2>
      <Project className='mt-5'>
        <ProjectContents className='project-contents'>
          <h3>Piece of your wish</h3>
          <p className='mt-1'>개발기간 : 2023.04.20 - 2023.05.03</p>
          <p className='mt-1'>개발인원 : 1명</p>
          <p className='mt-1'>플라워샵 운영을 위한 제품 소개 및 결제 시스템</p>
          <ul className='mt-1'>
            <li>디자인부터 기획, 개발, 배포 진행</li>
            <li>HTML, CSS, JS를 활용한 페이지 구현</li>
            <li>GSAP & ScrollToPlugin, SWIPER, ScrollMagic 등 다양한 라이브러리를 사용하여 페이지 구현</li>
          </ul>
          <LinkWrapper className='mt-2'>
            <p>
              <a href='https://piecewish.netlify.app' target='_blank'>
                <HiMiniHome />사이트 바로가기
              </a>
            </p>
            <p className='ml-2'>
              <a href='https://github.com/rladbal0101/PieceWish.git' target='_blank'>
                <BsGithub />GitHub 바로가기
              </a>
            </p>
          </LinkWrapper>
        </ProjectContents>
        <SiteImgWrapper className='site-img-wrapper'>
          <a href='https://piecewish.netlify.app' target='_blank'><PieceWishImg /></a>
        </SiteImgWrapper>
      </Project>
      <Project className='mt-5'>
        <ProjectContents className='project-contents'>
          <h3>Family Talk</h3>
          <p className='mt-1'>개발기간 : 2023.06.26 - 2023.07.11</p>
          <p className='mt-1'>개발인원 : 4명</p>
          <p className='mt-1'>가족들의 일상 공유 시스템</p>
          <ul className='mt-1'>
            <li>날씨 api를 이용한 현재 위치의 실시간 날씨 정보 구현</li>
            <li>My Json Server로 간단한 API서버를 구축하여 사용자 정보 저장</li>
            <li>저장된 데이터를 불러와 이용자들의 생일 디데이를 계산하여 가장 빨리 다가오는 생일을 화면에 출력</li>
            <li>토스페이먼츠를 이용하여 결제위젯 연동</li>
          </ul>
          <LinkWrapper className='mt-2'>
            <p>
              <a href='https://family-talk.netlify.app' target='_blank'>
                <HiMiniHome />사이트 바로가기
              </a>
            </p>
            <p className='ml-2'>
              <a href='https://github.com/evejin9/Family-Talk.git' target='_blank'>
                <BsGithub />GitHub 바로가기
              </a>
            </p>
          </LinkWrapper>
        </ProjectContents>
        <SiteImgWrapper className='site-img-wrapper'>
          <a href='https://family-talk.netlify.app' target='_blank'><FamilyTalkImg /></a>
        </SiteImgWrapper>
      </Project>
      <Project className='mt-5'>
        <ProjectContents className='project-contents'>
          <h3>포트폴리오</h3>
          <p className='mt-1'>개발기간 : 2023.07.28 - 2023.08.04</p>
          <p className='mt-1'>개발인원 : 1명</p>
          <p className='mt-1'>개인 포트폴리오&#40;이력서, 자기소개서&#41;를 위한 웹페이지</p>
          <ul className='mt-1'>
            <li>디자인부터 기획, 개발, 배포 진행</li>
            <li>리액트를 이용하여 페이지 구현</li>
          </ul>
          <LinkWrapper className='mt-2'>
            <p>
              <a href='https://yumi-portfolio.netlify.app'>
                <HiMiniHome />사이트 바로가기
              </a>
            </p>
            <p className='ml-2'>
              <a href='https://github.com/rladbal0101/portfolio.git' target='_blank'>
                <BsGithub />GitHub 바로가기
              </a>
            </p>
          </LinkWrapper>
        </ProjectContents>
        <SiteImgWrapper className='site-img-wrapper'>
          <a href='https://yumi-portfolio.netlify.app'><PortFolioImg /></a>
        </SiteImgWrapper>
      </Project>
    </ProjectsWraaper>
  );
}

export default Projects;