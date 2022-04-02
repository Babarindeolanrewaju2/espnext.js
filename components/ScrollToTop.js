import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const ScrollTop = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", ScrollTop);

    // remove when component is unmounted
    return () => {
      window.removeEventListener("scroll", ScrollTop);
    };
  }, []);

  return (
    <>
      {showButton && (
        <div
          className="back-to-top"
          style={{ display: "inline" }}
          onClick={scrollToTop}
        >
          <i className="fas fa-chevron-up"></i>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
