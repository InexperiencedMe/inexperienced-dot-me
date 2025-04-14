import "@/styles/globals.css";
import { Header } from "@/components/Header";
import { fredoka } from "@/styles/fonts";
import { unstable_ViewTransition as ViewTransition } from "react"

export const metadata = {
  title: "Inexperienced Me",
  description: "Personal Website of Inexperienced Me",
};

export default function RootLayout({children}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script dangerouslySetInnerHTML={{
          __html: // Preventing flickering of light mode on refresh
            `if (localStorage.getItem('dark-mode') === 'true' || (!('dark-mode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.querySelector('html').classList.add('dark');
            } else {
                document.querySelector('html').classList.remove('dark');
            }`}}/>
      </head>
      <body
        className={`bg-background text-foreground place-items-center min-h-screen flex flex-col relative ${fredoka.className}
                    tranisiton-opacity duration-500 ease-in-out`}>
      <Header />
      <ViewTransition>{children}</ViewTransition>
      </body>
    </html>
  );
}