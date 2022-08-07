import styled from 'styled-components';
import Navbar from '@global-components/Navbar';

type Props = {
  children: React.ReactNode;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
`;

const Wrap = styled.div`
  flex: 1 1 0%;
  background-color: #e2e8f0;
`;

const Default = ({ children }: Props) => {
  return (
    <Container>
      <Navbar />
      <Wrap>
        <div>{children}</div>
      </Wrap>
    </Container>
  );
};

export default Default;
