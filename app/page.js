async function HomePage() {
  return (
    <div className={"flex flex-col w-full grow justify-center font-bold"}>
      <div className="flex flex-col gap-2 mx-auto">
        <h1 className="relative w-full text-center text-[clamp(3rem,12vw,6rem)]">
          Inexperienced Me
        </h1>
        <h2 className="relative w-full text-center text-[clamp(1rem,4vw,2rem)]">
          One-man intelligence agency
        </h2>
      </div>
    </div>
  );
}

export default HomePage;