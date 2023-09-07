import React, { useEffect, useState } from "react";
import { ScrollImage, Wrapper } from "./scroll-styles";
import TopBtn from "../../../../public/assets/scroll-btn.svg";
import Image from "next/image";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 2000;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      <Wrapper>
        {isVisible && (
          <div className="top-btn" onClick={goToBtn}>
            <ScrollImage src={TopBtn} alt="icon" />
          </div>
        )}
      </Wrapper>
    </>
  );
};

export default ScrollButton;
