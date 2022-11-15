"use client";
import Link from "next/link";
import styled from "styled-components";
import Figma from "./Components/Figma";
import Github from "./Components/Github";
import Logo from "./Components/Logo";
const HeaderStyled = styled.div`
  max-width: 1300px;
  display: flex;
  justify-content: space-between;
  padding: 28px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const Icons = styled.div`
display: flex;
`;
export default function Header() {
  return (
    <HeaderStyled>
      <div>
        <Logo />
      </div>

      <Icons>
        <Figma />
        <Github />
      </Icons>
    </HeaderStyled>
  );
}

Header;
