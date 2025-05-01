import Eagle from "@/public/mainFiles/eagleMain.svg";

const HomePage = () => {
  return (
    <div className="relative flex flex-col w-full grow justify-center font-bold overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <Eagle className="w-[80%] h-[80%] max-w-5xl fill-current text-eagle-main opacity-70 eagle-art will-change-transform" />
      </div>

      <div className="flex flex-col gap-2 mx-auto relative z-10">
        <h1 className="w-full text-center text-[clamp(3rem,10vw,6rem)]">
          Inexperienced Me
        </h1>
        <h2 className="w-full text-center text-[clamp(1rem,4vw,2rem)]">
          One-man intelligence agency
        </h2>
      </div>
    </div>
  );
};

export default HomePage;