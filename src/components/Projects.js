import React from 'react';
import styled from 'styled-components';
import { BsGithub } from "react-icons/bs";
import { HiMiniHome } from "react-icons/hi2";
import pieceWish from "../images/PieceWish.jpg";
import familyTalk from "../images/FamilyTalk.jpg";

const ProjectsWraaper = styled.div`
  padding: 50px 0;
  border-top: 1px dashed #80d8da;
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
    padding-left: 30px;

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
      width: 400px;
      margin: 0 0 20px 0;
    }
  }
`;

const ProjectContents = styled.div`
  margin: 0 20px 0 0;
`;

const LinkWrapper = styled.div`
  display: flex;

  a {
    color: #333;
    text-decoration: none;
    display: flex;
    align-items: center;
    
    &:hover {
      color: #80d8da;
    }
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

function Projects(props) {
  return (
    <ProjectsWraaper className='mt-5'>
      <h2>Projects</h2>
      <Project className='mt-5'>
        <ProjectContents className='project-contents'>
          <h3>Piece of your wish</h3>
          <p className='mt-2'>프로젝트 기간 : 2023년 04월 20일 ~ 2023년 05월 03일</p>
          <p className='mt-2'>플라워샵 운영을 위한 제품 소개 및 결제 시스템</p>
          <LinkWrapper className='mt-3'>
            <p>
              <a href='https://piecewish.netlify.app/' target='_blank'>
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
        <SiteImgWrapper>
          <a href='https://piecewish.netlify.app/' target='_blank'><PieceWishImg /></a>
        </SiteImgWrapper>
      </Project>
      <Project className='mt-5'>
        <ProjectContents className='project-contents'>
          <h3>Family Talk</h3>
          <p className='mt-2'>프로젝트 기간 : 2023년 06월 26일 ~ 2023년 07월 11일</p>
          <p className='mt-2'>가족들의 일상 공유 시스템</p>
          <ul className='mt-2'>
            <li>날씨 api를 이용한 현재 위치의 실시간 날씨 정보 구현</li>
            <li>My Json Server로 간단한 API서버를 구축하여 사용자 정보 저장</li>
          </ul>
          <LinkWrapper className='mt-3'>
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
        <SiteImgWrapper>
          <a href='https://family-talk.netlify.app' target='_blank'><FamilyTalkImg /></a>
        </SiteImgWrapper>
      </Project>
    </ProjectsWraaper>
  );
}

export default Projects;