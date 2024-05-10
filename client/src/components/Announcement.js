import React from "react";
import styled, { keyframes } from "styled-components";

const moveAnnouncement = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  overflow: hidden;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(
      to right,
      teal 0%,
      teal 25%,
      transparent 50%,
      teal 75%,
      teal 100%
    );
    animation: ${moveAnnouncement} 10s linear infinite;
  }
`;

const Announcement = () => {
  return (
    <Container>
      <span>Super Deal! Free Shipping on Orders Over $50</span>
    </Container>
  );
};

export default Announcement;
