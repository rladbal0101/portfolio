import React from 'react';
import styled from 'styled-components';
import { BiSolidPhone } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { RxNotionLogo } from "react-icons/rx";

const ContactWrapper = styled.div`
  padding-top: 85px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    &#contact {
      padding-top: 65px;
    }
  }
`;

const ContactTitle = styled.div`
  display: flex;
  align-items: baseline;
  margin: 50px 0;
  flex-wrap: wrap;

  h1 {
    color: #000;
    font-size: 40px;
  }
  p {
    font-size: 20px;
    margin: 0 0 0 20px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    h1 {
      font-size: 32px;
    }
    p {
      font-size: 18px;
      margin: 20px 0 0 0;
    }
  }
`;

const ContactInfo = styled.div`
  width: 400px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContactInfoUl = styled.ul`

  p {
    font-size: 14px;
  }

  li {
    display: flex;
    
    a {
      display: flex;
      align-items: center;

    }
    svg {
      font-size: 22px;
      margin-right: 10px;
    }

    h4 + h4 {
      margin-left: 20px;
    }
  }
`;

function Contact(props) {
  return (
    <ContactWrapper id='contact'>
      <ContactTitle>
        <h1>김 유 미 &#40;Kim, Yumi&#41;</h1>
        <p>프론트엔드 개발자</p>
      </ContactTitle>

      <h1>Contact</h1>
      <ContactInfo className='mt-3'>
        <ContactInfoUl>
          <li className='mt-2'>
            <BiSolidPhone />
            <p>010-2990-5887</p>
          </li>
          <li className='mt-2'>
            <FiMail />
            <p>kyumi16@gmail.com</p>
          </li>
          <li className='mt-2'>
            <h4>
              <a href='https://github.com/rladbal0101' target='_blank'><BsGithub />GitHub</a>
            </h4>
            <h4>
              <a href='https://magnificent-echinodon-80d.notion.site/52656b0ab27741e2b2fa50df4ad632a0?pvs=4' target='_blank'><RxNotionLogo />Notion</a>
            </h4>
          </li>
        </ContactInfoUl>
      </ContactInfo>
    </ContactWrapper>
  );
}

export default Contact;