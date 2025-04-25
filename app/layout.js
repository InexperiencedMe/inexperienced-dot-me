// layout.js
import "@/styles/globals.css";
import { Header } from "@/components/Header";
import { fredoka } from "@/styles/fonts";
import { unstable_ViewTransition as ViewTransition } from "react";

export const metadata = {
  title: "Inexperienced Me",
  description: "Personal Website of Inexperienced Me",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (!theme) {
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`bg-background text-foreground place-items-center min-h-screen flex flex-col relative ${fredoka.className}`}
      >
        <ViewTransition>
          <Header />
          <div className="hidden md:block absolute inset-0 -z-10 h-full w-full bg-radial from-background-tertiary to-10% to-transparent bg-size-[20px_20px]"></div>
          {children}
        </ViewTransition>
      </body>
    </html>
  );
}
