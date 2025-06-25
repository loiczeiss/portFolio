import "./index.css";
import Home from "./components/Home";
import Theme from "./components/Theme";

function App() {
    return (
        <>
            <div className="w-full h-full bg-light-bg dark:bg-black flex justify-center items-center z-[-2] overflow-hidden">
                <Theme/>
                <Home/>
            </div>
        </>
    );
}

export default App;
