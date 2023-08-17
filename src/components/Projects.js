import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import dataProject from "../dataProject.json";

import { BsGithub } from "react-icons/bs";
import { HiMiniHome } from "react-icons/hi2";


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
    list-style-type: "- ";
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

    .link-wrapper {
      justify-content: center;
    }

    .site-img-wrapper {
      width: 320px;
      height: 220px;

      img {
        height: auto;
      }
    }
  }
`;

const ProjectContents = styled.div`
  margin: 0 20px 0 0;

  & > p {
    margin-top: 10px;
  }
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
  /* height: 300px; */
  overflow-y: hidden;
  background-position: center;
  box-shadow: 2px 2px 10px #ccc;
  display: flex;
  /* align-items: center; */
  
  img {
    width: 100%;
    height: 100%;
  }
`;

function Projects(props) {
  const [sortProjectData, setSortProjectData] = useState([]);

  useEffect(() => {
    const reverseData = dataProject.reverse();
    setSortProjectData(reverseData);
  }, []);

  return (
    <ProjectsWraaper className='mt-5' id='project'>
      <h1>Projects</h1>
      {
        sortProjectData.map(project => 
          <Project className='mt-5'>
            <ProjectContents className='project-contents'>
              <h3>{project.name}</h3>
              <p>{project.introduction}</p>
              <p>개발기간 : {project.period}</p>
              <p>개발인원 : {project.number}명</p>
              <p>개발환경 : {project.environment}</p>
              <p>목표 : </p>
              <ul className='mt-1'>
                {project.objectives.map(objective => <li>{objective}</li>)}
              </ul>
              <p>기능 : </p>
              <ul className='mt-1'>
                {project.skills.map(skill => <li>{skill}</li>)}
              </ul>
              {
                project.responsiblePart &&
                <>
                  <p>담당업무 : </p>
                  <ul className='mt-1'>
                    {project.responsiblePart.map(responsiblePart => <li>{responsiblePart}</li>)}
                  </ul>
                </>
              }
              <LinkWrapper className='mt-3 link-wrapper'>
                <p>
                  <a href={project.url.map(link => link.home)} target='_blank'>
                    <HiMiniHome />사이트 바로가기
                  </a>
                </p>
                <p className='ml-2'>
                  <a href={project.url.map(link => link.gitHub)} target='_blank'>
                    <BsGithub />GitHub 바로가기
                  </a>
                </p>
              </LinkWrapper>
            </ProjectContents>
            <SiteImgWrapper className='site-img-wrapper'>
              {
                project.id == "2"
                ? project.url.map(link => 
                  <a href={link.home}>
                    <img src={link.image} />
                  </a>
                )
                : project.url.map(link => 
                  <a href={link.home} target='_blank'>
                    <img src={link.image} />
                  </a>
                )
              }
            </SiteImgWrapper>
          </Project>
        )
      }
    </ProjectsWraaper>
  );
}

export default Projects;