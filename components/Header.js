import Link from "next/link";
import { HomeButton, ThemeToggle } from "./MetaButton";

export const Header = () => {
  return (
    <>
      <div className={`z-[100] flex flex-row place-content-between
      text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-full w-full mt-4 mb-8
      gap-x-4 sm:gap-x-8 md:gap-x-12 lg:gap-x-16`}>
        
        <div className="flex ml-4">
          <HomeButton />
        </div>

        <div className="flex flex-row gap-x-4 sm:gap-x-8 md:gap-x-12 lg:gap-x-16">
          <Link href="/blog">     blog     </Link>
          <Link href="/about">    about    </Link>
          <Link href="/contact">  contact  </Link>
        </div>

        <div className="flex mr-4">
          <ThemeToggle />
        </div>

      </div>
    </>
  );
};
