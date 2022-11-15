"use client";
import Header from "./Header";
import "./globals.css";
import localFont from "@next/font/local";
import "@admiral-ds/fonts/VTBGroupUI.css";
import Content from "./Content";
import Worth from "./Worth";
import styled from "styled-components";
// const myFont = localFont({ src: "@admiral-ds/fonts/VTBGroupUI.css" });
const Container = styled.div`
  background-color: #000000;
  padding-top: 0 10px;
`;

const ContainerContent = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  background: url("bigLogoAnimation.png") no-repeat;
`;

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body>
        <Container>
          <ContainerContent>
            <Header />
            {children}
            <Content />
          </ContainerContent>
        </Container>
        <Worth />
      </body>
    </html>
  );
}
