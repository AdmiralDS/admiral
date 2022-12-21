import { ReactComponent as MainBackgroundSvg } from './background.svg';
import styled from 'styled-components';
import Image from 'next/image';
import imageUrl from './Frame336890.png';

const PositionedMainBackground = styled(MainBackgroundSvg)`
  pointer-events: none;
  position: absolute;
  height: 100vh;
  left: 50%;
  transform: translateX(-50%);
`;

const Container = styled.div`
  position: fixed;
  overflow: hidden;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
const Head = styled.div`
  font-family: 'Loos Wide Medium', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 90px;
  line-height: 80px;

  font-feature-settings: 'tnum' on, 'lnum' on;

  color: #ffffff;
`;
const Descr = styled.div`
  font-family: 'VTB Group UI' ,sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  /* or 133% */

  font-feature-settings: 'tnum' on, 'lnum' on;

  /* Neutral/Neutral White */

  color: #ffffff;
`;
const Box = styled.div`
  width: 513px;
  position: absolute;

  right: 15%;
  top: 20%;
`;
const StyledImage = styled(Image)`
  position: relative;
`;
export const MainPage = () => {
  return (
    <Container>
      <PositionedMainBackground />
      <StyledImage src={imageUrl} alt={'pic'} />
      <Box>
        <Head>Дизайн-система Адмирал<title>Дизайн-система Адмирал</title></Head>
        <Descr style={{marginTop: 40}}>
          Мы предоставляем пользователям набор инструментов для долгосрочного развития продукта, анализируя потребности
          клиентов и изменяющиеся тренды
        </Descr>
      </Box>
    </Container>
  );
};
