import { useState, useEffect } from "react";
import "./style.css";
import Logo from "../../Assets/Logo.svg";
import Question from "../../Assets/Question.svg";

function useScrollDirection() {
  const [ scrollDirection, setScrollDirection ] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [ scrollDirection ]);

  return scrollDirection;
}

function Header() {
  const scrollDirection = useScrollDirection();

  return (
    <div
      className={`headerComponent sticky ${ scrollDirection === "down" ? "-top-24" : "top-0"
        } flex justify-between transition-all duration-500 px-20 w-full`}
    >
      <div className="header-container flex justify-between  sm:w-full md:w-full">
        <img
          src={Logo}
          alt="logo"
          className="logoImage"
          width={"76px"}
          height={"24px"}
        />
        <div className="right-side-container">
          <img
            src={Question}
            alt="Question"
            className="help"
            width={"20px"}
            height={"20px"}
          />
          <span className="header-right-title">Help</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
