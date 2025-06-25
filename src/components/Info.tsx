function Info() {

  return (
    <div className="self-center md:self-end lg:self-center flex flex-col mr-0 sm:mr-5 font-neueMontreal sm:text-4xl lg:text-5xl text-2xl pb-8 px-3 sm:px-0 w-full sm:w-auto">
      <a
        className="sm:text-3xl md:text-4xl lg:text-5xl text-2xl mt-2.5 mb-2.5 text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-400 transition-colors duration-300"
        href="https://github.com/loiczeiss"
      >
        <div className="flex flex-row items-center group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="github"
            className="fill-black dark:fill-white group-hover:fill-gray-500 dark:group-hover:fill-gray-400 transition-colors duration-300 h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12"
          >
            <path d="M12 .14c-6.617 0-12 5.383-12 12 0 5.576 3.95 10.5 9.392 11.708A.5.5 0 0 0 10 23.36v-2.72a.5.5 0 0 0-.5-.5h-1c-1.248 0-2.097-1.183-2.847-2.226-.077-.107-.153-.214-.23-.318.355.188.66.415.961.638.599.444 1.219.903 2.043.903h.01c.064.007.648.067 1.1-.33.212-.187.463-.54.463-1.167v-.349a.499.499 0 0 0-.364-.481C6.863 16.025 5 13.947 5 11.64c0-1.2.493-2.345 1.425-3.312a.5.5 0 0 0 .094-.558c-.372-.802-.293-1.893.148-2.548.584.227 1.341.704 1.833 1.288a.5.5 0 0 0 .554.147 8.67 8.67 0 0 1 5.893 0 .5.5 0 0 0 .554-.147c.492-.584 1.249-1.061 1.832-1.289.442.655.521 1.747.148 2.549a.5.5 0 0 0 .094.558C18.507 9.295 19 10.44 19 11.64c0 2.422-2.07 4.591-5.033 5.274a.5.5 0 0 0-.329.72c.247.47.362 1.107.362 2.006v3.72a.5.5 0 0 0 .608.488C20.05 22.64 24 17.716 24 12.14c0-6.617-5.383-12-12-12z"></path>
          </svg>
          <p className="ml-2.5 text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-400 transition-colors duration-300">GitHub</p>
        </div>
      </a>
      <a
        className="sm:text-3xl md:text-4xl lg:text-5xl text-2xl mt-2.5 mb-2.5 text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-400 transition-colors duration-300"
        href="https://www.linkedin.com/in/loiczeiss/"
      >
        <div className="flex flex-row items-center group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 30 30"
            className="fill-black dark:fill-white group-hover:fill-gray-500 dark:group-hover:fill-gray-400 transition-colors duration-300 h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12"
          >
            <path
              d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"
            ></path>
          </svg>
          <p className="ml-2.5 text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-400 transition-colors duration-300">LinkedIn</p>
        </div>
      </a>
    </div>
  );
}

export default Info;
