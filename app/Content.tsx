"use client";

import styled from "styled-components";
import Figma from "./Components/Figma";
import Github from "./Components/Github";

const TextContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 220px;
`;

const TextContent = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Title = styled.h1`
  font-family: "Loos Wide";
  font-style: normal;
  font-weight: 500;
  font-size: 90px;
  line-height: 80px;

  font-feature-settings: "tnum" on, "lnum" on;

  color: #ffffff;

  margin-bottom: 40px;
`;
const SubTitle = styled.h2`
  font-family: "VTB Group UI";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  /* or 133% */

  font-feature-settings: "tnum" on, "lnum" on;

  /* Neutral/Neutral 00 */

  color: #ffffff;
`;

const Icons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default function Content() {
  return (
    <>
      <Icons>
        <Figma />
        <Github />
      </Icons>

      <TextContainer>
        <TextContent>
          <Title>Дизайн-система Адмирал</Title>
          <SubTitle>
            Мы предоставляем пользователям набор инструментов для долгосрочного
            развития продукта, анализируя потребности клиентов и изменяющиеся
            тренды
          </SubTitle>
        </TextContent>
      </TextContainer>
    </>
  );
}
