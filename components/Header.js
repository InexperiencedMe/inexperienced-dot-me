import Link from "next/link";
import { BackButton, ThemeToggle } from "./MetaButton";

export const Header = () => {
  return (
    <>
      <div className={`z-[100] flex flex-row place-content-around sm:place-content-between place-items-center
      text-xl md:text-2xl tracking-wide max-w-full md:max-w-2xl w-full h-fit py-8 px-8`}>
        <div className="hidden sm:flex w-0 h-0 sm:w-8 sm:h-8">
          <BackButton />
        </div>
          <Link href="/blog">     blog      <br/> </Link>
          <Link href="/about">    about me    <br/> </Link>
          <Link href="/contact">  contact   <br/> </Link>
        <div className="sm:flex w-0 h-0 sm:w-8 sm:h-8">
          <ThemeToggle />
        </div>
      </div>
    </>
  );
};
