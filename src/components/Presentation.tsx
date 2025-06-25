function Presentation() {
  return (
    <div className="flex self-center sm:self-end justify-start md:justify-end  p-4 text-left w-full md:w-[40%] mt-4 sm:mt-20 mr-5 max-h-[calc(100%-80px)]">
      <div className="self-start md:self-end mt-auto mb-5 w-full md:w-[300px]  text-sm font-neueMontrealBold text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-400 transition-colors duration-300">
        <p className={'text-base sm:text-sm md:text-xl md:text-end text-pretty max-sm:w-full '}>
          Born in 1994
          <br /> in Tournai, Belgium. <br />
          I see websites as personal extensions, offering an immersive journey
          into our concepts and visions. <br />
          My commitment to web development is rooted in the belief that
          technology should seamlessly reflect the depth of our thoughts,
          providing an expansive platform for limitless possibilities.
        </p>
      </div>
    </div>
  );
}

export default Presentation;
