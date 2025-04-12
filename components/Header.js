import Link from "next/link";
import { BackButton, ThemeToggle } from "./MetaButton";

export const Header = () => {
  return (
    <>
      <div className={`z-[100] flex flex-row place-content-between
      text-xl md:text-2xl lg:text-3xl max-w-full w-full h-fit mt-4 mb-8 px-4`}>
        
        <div className="flex">
          <BackButton />
        </div>

        <div className="flex gap-x-4 md:gap-x-16">
          <Link href="/blog">     blog    </Link>
          {/* <Link href="/about">    about   </Link> */}
          <Link href="/contact">  contact </Link>
        </div>

        <div className="flex">
          <ThemeToggle />
        </div>

      </div>
    </>
  );
};
