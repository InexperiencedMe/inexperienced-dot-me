import "@/styles/globals.css";
import { Header } from "@/components/Header";
import { fredoka } from "@/styles/fonts";

export const metadata = {
  title: "Inexperienced Me",
  description: "Personal Website of Inexperienced Me",
};

export default function RootLayout({children}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const storedTheme = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  
                  if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (err) { }
              })()`
          }}
        />
      </head>
      <body
        className={`bg-background text-foreground place-items-center min-h-screen flex flex-col relative ${fredoka.className}`}>
      <Header />
      {children}
      </body>
    </html>
  );
}