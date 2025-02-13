import React from "react";
import styled, { keyframes, css } from "styled-components";
import { FaAws, FaDocker, FaNodeJs, FaReact } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiMongodb, SiMysql } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

function Marque() {
  const row1 = [FaDocker, FaReact, FaAws, FaNodeJs, TbBrandFramerMotion, SiMysql];

  return (
    <AppContainer>
      <Wrapper>
        <Marquee>
          <MarqueeGroup>
            {row1.map((Icon, index) => (
              <IconWrapper key={index}>
                <Icon size={70} color="gray" />
              </IconWrapper>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((Icon, index) => (
              <IconWrapper key={index}>
                <Icon size={70} color="gray" />
              </IconWrapper>
            ))}
          </MarqueeGroup>
        </Marquee>
      </Wrapper>
    </AppContainer>
  );
}

export default Marque;

const AppContainer = styled.div`
  width: 100%;
  height: 35vh;
  color: rgb(255, 255, 255);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 30vh;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Marquee = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );

  @media (max-width: 768px) {
    width: 90%;
    margin-left: 20px; /* Add margin on small screens */
    margin-right: 20px;
  }
`;

/* Keyframe animation for continuous horizontal scrolling */
const scrollX = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

/* Common styles for smooth scrolling */
const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 6s linear infinite;

  @media (max-width: 768px) {
    animation-duration: 6s; /* Adjusted for smoothness */
    gap: 40px;
  }
`;

const MarqueeGroup = styled.div`
  ${common}
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  margin: 10px;
`;
