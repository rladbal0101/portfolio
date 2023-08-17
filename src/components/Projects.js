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
    list-style-type: disc;
    padding-left: 20px;

    li {
      /* font-size: 14px; */
    }
    li + li {
      margin-top: 10px;
    }

    ul {
      list-style-type: circle;
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
    /* margin-top: 10px; */
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
              <h2>{project.name}</h2>
              <p className='mt-1'>{project.introduction} | {project.period}</p>
              <p className='mt-1'>{project.contribute}</p>
              <p className='mt-1'>{project.environment}</p>
              <h3 className='mt-2'>1. 목표</h3>
              <ul className='mt-1'>
                {project.objectives.map(objective => <li>{objective}</li>)}
              </ul>
              <h3 className='mt-2'>2. 기능</h3>
              <ul className='mt-1'>
                {project.skills.map(skill => <li>{skill}</li>)}
              </ul>
              {
                project.responsiblePart &&
                <>
                  <h3 className='mt-2'>3. 담당업무</h3>
                  <ul className='mt-1'>
                    {project.responsiblePart.map(responsiblePart => <li>{responsiblePart}</li>)}
                  </ul>
                </>
              }
              {
                project.collaborate &&
                <>
                  <h3 className='mt-2'>4. 협업과정</h3>
                  <ul className='mt-1'>
                    {project.collaborate.map(collaborate => 
                      <>
                        <li className='mt-1'>{collaborate.title}</li>
                        <ul className='mt-1'>
                          {collaborate.content.map(collaborateContent => <li>{collaborateContent}</li>)}
                        </ul>
                      </>
                    )}
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