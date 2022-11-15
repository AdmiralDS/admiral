"use client";
import Header from "./Header";
import "./globals.css";
import localFont from "@next/font/local";
import "@admiral-ds/fonts/VTBGroupUI.css";
import Content from "./Content";
import styled from "styled-components";
import image from "/public/bigLogoAnimation.png";
// const myFont = localFont({ src: "@admiral-ds/fonts/VTBGroupUI.css" });
const Container = styled.div`
  max-width: 1280px;
  background-image: url('');
`;

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body>
        <Container style={{ backgroundImage:`url(${image})`}}>
          <Header />
          {children}
          <Content />
        </Container>
      </body>
    </html>
  );
}
