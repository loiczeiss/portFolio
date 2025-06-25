import { useMyContext } from "./MyContext";

function Theme() {
  const {
    isDarkMode,
    toggleDarkMode,
  } = useMyContext();

  return (
    <div className="flex flex-row self-end writing-vertical-lr">
      <div
        onClick={toggleDarkMode}
        className="flex m-1 mb-8 transform rotate-180 cursor-pointer"
      >
        <input
          className="appearance-none w-4 h-4 border border-black dark:border-white outline-none m-0 p-0 checked:bg-black dark:checked:bg-white"
          checked={isDarkMode}
          type="checkbox"
          name="darkMode"
          id="darkMode"
        />
        <p className="m-0 font-neueMontreal text-sm uppercase mt-1 text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-400 transition-colors duration-300">Dark</p>
      </div>
      <div
        onClick={toggleDarkMode}
        className="flex m-1 mb-8 transform rotate-180 cursor-pointer"
      >
        <input
          className="appearance-none w-4 h-4 border border-black dark:border-white outline-none m-0 p-0 checked:bg-black dark:checked:bg-white"
          checked={!isDarkMode}
          type="checkbox"
          name="lightMode"
          id="lightMode"
        />
        <p className="m-0 font-neueMontreal text-sm uppercase mt-1 text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-400 transition-colors duration-300">Light</p>
      </div>
    </div>
  );
}

export default Theme;
