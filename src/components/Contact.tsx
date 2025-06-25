function Contact() {


    return (
        <div
            className="max-sm:my-auto flex flex-col sm:self-center  font-neueMontreal mr-0 sm:mr-5 text-sm uppercase text-center sm:text-end text-black dark:text-white group dark:group-hover:text-gray-400 px-3 sm:px-0 w-full sm:w-auto">
            <p className="text-black dark:text-white text-sm md:text-lg group-hover:fill-gray-500">Contact me on</p>
            <div className="flex flex-row items-center justify-center sm:justify-end flex-wrap">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enableBackground="new 0 0 64 64"
                    viewBox="0 0 64 64"
                    id="arrow"
                    width={24}
                    className="fill-black dark:fill-white group-hover:fill-gray-500 dark:group-hover:fill-gray-400 mr-1"
                >
                    <g transform="translate(28 328)">
                        <path
                            d="M4-272.1c-13.2 0-23.9-10.7-23.9-23.9S-9.2-319.9 4-319.9s23.9 10.7 23.9 23.9S17.2-272.1 4-272.1zm0-45.2c-11.7 0-21.3 9.6-21.3 21.3s9.6 21.3 21.3 21.3 21.3-9.6 21.3-21.3-9.6-21.3-21.3-21.3z"></path>
                        <path d="m3.5-282.3-1.8-1.9L13.4-296 1.7-307.8l1.8-1.9L17.2-296 3.5-282.3"></path>
                        <path d="M15.3-294.6h-24v-2.8h24z"></path>
                    </g>
                </svg>
                <a className="font-neueMontrealBold text-xl md:text-3xl text-black dark:text-white group-hover:text-gray-500 dark:group-hover:text-gray-400 break-all"
                   href="mailto:loiczeiss@gmail.com">
                    loiczeiss@gmail.com
                </a>
            </div>
        </div>
    );
}

export default Contact;
