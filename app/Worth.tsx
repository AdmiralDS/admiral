"use client";
import Link from "next/link";

import  styled  from "styled-components";

const Title = styled.div`
  font-family: "Loos Wide";
  font-style: normal;
  font-weight: 500;
  font-size: 90px;
  line-height: 80px;

  font-feature-settings: "tnum" on, "lnum" on;

  color: #0e0d0d;

  margin-bottom: 40px;
`;

export default function Worth() {
  return (
    <>
      <div>
        <Title>Проверка</Title>
      </div>
    </>
  );
}
