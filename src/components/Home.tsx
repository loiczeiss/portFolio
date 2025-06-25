import {useEffect} from "react";
import NET from "vanta/dist/vanta.net.min.js";
import Presentation from "./Presentation";
import Projects from "./Projects";
import Info from "./Info";
import Contact from "./Contact";
import {useMyContext} from "./MyContext";

export default function Home() {
    const {
        vantaEffect,
        setVantaEffect,
        myRef,
        activeIndex,
        setActiveIndex,
        isDarkMode,
    } = useMyContext();

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                NET({
                    el: myRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    color: 0x655f5f,
                    backgroundColor: 0xe1e3ef,
                    points: 8.0,
                    maxDistance: 14.0,
                    spacing: 10.0,
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <div className="flex flex-col sm:flex-row justify-between relative border border-black dark:border-white w-[calc(100%-120px)] h-[calc(100%-60px)] mr-[26.8px] pl-5 select-none z-10" id="frame">
            <div className="absolute top-0 left-0 w-full h-full z-[-1]" ref={myRef}></div>
            <div className="flex flex-col">
                <header className="mt-5">
                    <h1 className="font-neueMontrealLight text-5xl sm:text-6xl mt-5 mb-1 text-black dark:text-white">Loïc Zeiss</h1>
                    <p className="m-0 font-neueMontrealLight text-black dark:text-white">Front-End Developer</p>
                </header>
                <ul className="font-neueMontrealBold p-0 list-none mt-10 flex flex-col space-y-6 text-2xl">
                    <li className="pb-[5px]">
                        <p
                            onClick={() => {
                                setActiveIndex(0);
                                if (vantaEffect) {
                                    vantaEffect.setOptions({
                                        maxDistance: 18.0,
                                    });
                                }
                            }}
                            className="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-400 transition-colors duration-300 cursor-pointer"
                        >
                            Home
                        </p>
                    </li>
                    <li className="pb-[5px]">
                        <p
                            onClick={() => {
                                setActiveIndex(1);
                                if (vantaEffect) {
                                    vantaEffect.setOptions({
                                        maxDistance: 22.0,
                                    });
                                }
                            }}
                            className="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-400 transition-colors duration-300 cursor-pointer"
                        >
                            Projects
                        </p>
                    </li>
                    <li className="pb-[5px]">
                        <p
                            onClick={() => {
                                setActiveIndex(2);
                                if (vantaEffect) {
                                    vantaEffect.setOptions({
                                        maxDistance: 26.0,
                                    });
                                }
                            }}
                            className="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-400 transition-colors duration-300 cursor-pointer"
                        >
                            About
                        </p>
                    </li>
                    <li className="pb-[5px]">
                        <p
                            onClick={() => {
                                if (vantaEffect)
                                    vantaEffect.setOptions({
                                        maxDistance: 30.0,
                                    });
                                setActiveIndex(3);
                            }}
                            className="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-400 transition-colors duration-300 cursor-pointer"
                        >
                            Contact
                        </p>
                    </li>
                </ul>
            </div>
            {activeIndex === 0 && <Presentation/>}
            {activeIndex === 1 && <Projects/>}
            {activeIndex === 2 && <Info/>}
            {activeIndex === 3 && <Contact/>}
        </div>
    );
}
