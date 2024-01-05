import { createContext, useContext, useState, useRef, useEffect } from "react";

const MyContext = createContext(null);

export const MyContextProvider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [SVGstyle, setSVGstyle] = useState({});
  const myRef = useRef(null);
  const [darkModeStyle, setDarkModeStyle] = useState<object>({});
  const [vantaEffect, setVantaEffect] = useState<null | any>(null);
  const [isCheckedLight, setIsCheckedLight] = useState<boolean>(true);
  const [isCheckedDark, setIsCheckedDark] = useState<boolean>(false);
  const [inputChange, setInputChange] = useState<object>({})
  const [ lightInputChange, setLightInputChange] = useState<object>({})
  const [pathColor, setPathColor] = useState<object>({})
  const handleClick = (applyChanges) => {
    const allLinks = document.querySelectorAll("a");
    const allParagraphs = document.querySelectorAll("p");
  
    if (applyChanges) {
      // Apply changes logic
      allLinks.forEach((link) => {
        link.style.color = "white";
      });
  
      allParagraphs.forEach((paragraph) => {
        paragraph.style.color = "white";
      });
  
      vantaEffect.setOptions({ backgroundColor: 0x000000 });
      setDarkModeStyle({ backgroundColor: "black", color: "white" });
      setIsCheckedDark(true);
    } else {
      // Cancel changes logic
      allLinks.forEach((link) => {
        link.style.color = ""; // Reset to default
      });
  
      allParagraphs.forEach((paragraph) => {
        paragraph.style.color = ""; // Reset to default
      });
  
      vantaEffect.setOptions({ backgroundColor:  0xe1e3ef});
      setDarkModeStyle({ backgroundColor: 'hsl(231, 32%, 91%)' , color: 'black'});
    }
  };
  
  const contextValues = {
    activeIndex,
    setActiveIndex,
    SVGstyle,
    setSVGstyle,
    myRef,
    darkModeStyle,
    setDarkModeStyle,
    vantaEffect,
    setVantaEffect,
    isCheckedLight,
    setIsCheckedLight,
    isCheckedDark,
    setIsCheckedDark,
    handleClick,
    inputChange, setInputChange,
    lightInputChange, setLightInputChange,
    pathColor, setPathColor
  };
  return (
    <MyContext.Provider value={contextValues}>{children}</MyContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useMyContext = () => useContext(MyContext);
