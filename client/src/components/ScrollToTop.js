import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  z-index: 9999;
`;

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ScrollToTopButton
      visible={isVisible}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      &#8679;
    </ScrollToTopButton>
  );
};

export default ScrollToTop;
