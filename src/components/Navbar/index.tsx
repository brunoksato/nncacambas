import { Link } from 'react-scroll';
import styled from 'styled-components';
import { ClockHistory, Whatsapp } from 'styled-icons/bootstrap';
import Image from '@global-components/Image';

const Navbar = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <WrapperImage>
            <Image src={`/assets/nnCacambasLogo.png`} layout={`fill`} />
          </WrapperImage>
          <NameCompany>N&N Locação de caçambas e caminhões</NameCompany>
          <Divider />
          <Flex>
            <ClockHistory width={`30px`} height={`30px`} />
            <TextRed>
              Seg - Sex: 7H - 17H <br />
              Sábado: 7H - 12H
            </TextRed>
          </Flex>
          <Divider />
          <FlexColumn>
            <TextContact>Contato:</TextContact>
            <Flex>
              <Whatsapp width={`30px`} height={`30px`} />
              <TextRed>
                (12) 98890-3512 <br /> (12) 3931-5725
              </TextRed>
            </Flex>
          </FlexColumn>
        </Wrapper>
      </Container>
      <ContainerNav>
        <WrapperNav>
          <CustomLink>A Empresa</CustomLink>
          <CustomLink>Frota</CustomLink>
          <CustomLink>Cidades</CustomLink>
          <CustomLink>Descartes</CustomLink>
          <CustomLink>Horários e Locais Restritos</CustomLink>
          <CustomLink>Orientações ao Gerador</CustomLink>
          <ExternalLinkWhatsapp
            href="https://api.whatsapp.com/send?1=ptBR&phone=5512988903512&text=Olá%20quero%20solicitar%20uma%20ca%C3%A7amba"
            target={`_blank`}
          >
            <Whatsapp width={`24px`} height={`24px`} color={`#fff`} />
            <TextWhatsapp>
              Solicite
              <br /> pelo Whatsapp
            </TextWhatsapp>
          </ExternalLinkWhatsapp>
        </WrapperNav>
      </ContainerNav>
    </>
  );
};
export default Navbar;

const Container = styled.div`
  width: 100%;
  background-color: #f9c302;
  padding: 1.25rem 0;
  border-radius: 0 0 1rem 1rem;
  z-index: 11;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: -1.6rem;
`;

const Divider = styled.div`
  width: 1px;
  height: 100px;
  background-color: #1a202c;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const WrapperImage = styled.div`
  width: 100%;
  max-width: 160px;
  height: 120px;
  position: relative;
`;

const NameCompany = styled.h4`
  color: #1a202c;
  font-size: 1.375rem;
  font-weight: 700;
  font-family: 'Fredericka the Great';
  text-align: center;
  text-transform: uppercase;
`;

const TextRed = styled.p`
  color: #dd1d21;
  font-family: 'Roboto';
  font-size: 1.25rem;
  line-height: 1.625rem;
  margin-left: 1rem;
  /* margin-top: 0.5rem; */
`;
const TextContact = styled.p`
  color: #1a202c;
  font-family: 'Roboto';
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  /* margin-top: 0.5rem; */
`;

const ContainerNav = styled.nav`
  width: 100%;
  background-color: #1a202c;
  padding: 2.3rem 0 1.25rem 0;
  margin-top: -1rem;
  z-index: 10;
`;

const WrapperNav = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CustomLink = styled(Link)`
  max-width: 150px;
  text-align: center;
  color: white;
  font-family: 'Roboto';
  text-transform: uppercase;
  font-weight: 500;
  line-height: 1.125rem;
  cursor: pointer;
`;

const ExternalLinkWhatsapp = styled.a`
  display: flex;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background-color: #14950f;
  border: none;
  cursor: pointer;
  text-decoration: none;

  :hover {
    background-color: green;
  }
  :focus {
    background-color: green !important;
  }
`;
const TextWhatsapp = styled.p`
  margin-left: 0.5rem;
  text-transform: uppercase;
  font-size: 0.875rem;
  font-family: 'Roboto';
  font-weight: 500;
  color: #fff;
`;
