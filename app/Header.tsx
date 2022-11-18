"use client";
import Link from "next/link";
import styled from "styled-components";
import Logo from "./Components/Logo";
const HeaderStyled = styled.div`
  max-width: 268px;
  display: flex;
  justify-content: space-between;
  padding: 28px 0;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
`;


export default function Header() {
  return (
    <HeaderStyled>
      <div>
        <Logo />
      </div>


    </HeaderStyled>
  );
}

Header;
