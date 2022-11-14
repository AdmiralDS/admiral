import Header from "./Header";
import "./globals.css";
import localFont from "@next/font/local";
import "@admiral-ds/fonts/VTBGroupUI.css";

// const myFont = localFont({ src: "@admiral-ds/fonts/VTBGroupUI.css" });

export default function RootLayout({ children }) {
  return (
    <html lang='en' >
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
