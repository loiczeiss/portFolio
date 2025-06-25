function Contact() {


    return (
        <div
            className="flex flex-col self-center font-neueMontreal mr-5 text-sm uppercase text-end text-black dark:text-white group dark:group-hover:text-gray-400">
            <p className="text-black dark:text-white group-hover:fill-gray-500">Contact me on</p>
            <div className="">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enableBackground="new 0 0 64 64"
                    viewBox="0 0 64 64"
                    id="arrow"
                    width={24}
                    className="fill-black dark:fill-white group-hover:fill-gray-500 dark:group-hover:fill-gray-400 transition-colors duration-300"
                >
                    <g transform="translate(28 328)">
                        <path
                            d="M4-272.1c-13.2 0-23.9-10.7-23.9-23.9S-9.2-319.9 4-319.9s23.9 10.7 23.9 23.9S17.2-272.1 4-272.1zm0-45.2c-11.7 0-21.3 9.6-21.3 21.3s9.6 21.3 21.3 21.3 21.3-9.6 21.3-21.3-9.6-21.3-21.3-21.3z"></path>
                        <path d="m3.5-282.3-1.8-1.9L13.4-296 1.7-307.8l1.8-1.9L17.2-296 3.5-282.3"></path>
                        <path d="M15.3-294.6h-24v-2.8h24z"></path>
                    </g>
                </svg>
                <a className="font-neueMontrealBold text-3xl text-black dark:text-white group-hover:text-gray-500 dark:group-hover:text-gray-400 transition-colors duration-300"
                   href="mailto:loiczeiss@gmail.com">
                    loiczeiss@gmail.com
                </a>
            </div>
        </div>
    );
}

export default Contact;
