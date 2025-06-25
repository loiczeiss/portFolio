import React, {
    createContext,
    useContext,
    useState,
    useRef,
    ReactNode,
    useEffect,
} from "react";

interface MyContextProps {
    activeIndex: number;
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
    myRef: React.RefObject<HTMLDivElement>;
    vantaEffect: any | null;
    setVantaEffect: React.Dispatch<React.SetStateAction<any | null>>;
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
    toggleDarkMode: () => void;
    inputChange: Record<string, any>;
    setInputChange: React.Dispatch<React.SetStateAction<Record<string, any>>>;
    lightInputChange: Record<string, any>;
    setLightInputChange: React.Dispatch<React.SetStateAction<Record<string, any>>>;
    pathColor: Record<string, any>;
    setPathColor: React.Dispatch<React.SetStateAction<Record<string, any>>>;
}

const MyContext = createContext<MyContextProps | null>(null);

export const MyContextProvider = ({children}: { children: ReactNode }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const myRef = useRef<HTMLDivElement | null>(null);
    const [vantaEffect, setVantaEffect] = useState<any | null>(null);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Check if user prefers dark mode
        const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDarkMode;
    });
    const [inputChange, setInputChange] = useState<Record<string, any>>({});
    const [lightInputChange, setLightInputChange] = useState<Record<string, any>>({});
    const [pathColor, setPathColor] = useState<Record<string, any>>({});

    // Apply dark mode class to html element
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            if (vantaEffect) vantaEffect.setOptions({backgroundColor: 0x000000});
        } else {
            document.documentElement.classList.remove('dark');
            if (vantaEffect) vantaEffect.setOptions({backgroundColor: 0xe1e3ef});
        }
    }, [isDarkMode, vantaEffect]);

    // Listen for changes in system color scheme preference
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e: MediaQueryListEvent) => {
            setIsDarkMode(e.matches);
        };

        // Add listener for changes
        mediaQuery.addEventListener('change', handleChange);

        // Clean up listener on component unmount
        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const contextValues: MyContextProps = {
        activeIndex,
        setActiveIndex,
        myRef,
        vantaEffect,
        setVantaEffect,
        isDarkMode,
        setIsDarkMode,
        toggleDarkMode,
        inputChange,
        setInputChange,
        lightInputChange,
        setLightInputChange,
        pathColor,
        setPathColor,
    };

    return <MyContext.Provider value={contextValues}>{children}</MyContext.Provider>;
};

export const useMyContext = () => {
    const context = useContext(MyContext);
    if (!context) throw new Error("useMyContext must be used within a MyContextProvider");
    return context;
};
