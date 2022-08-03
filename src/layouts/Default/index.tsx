import styled from 'styled-components';

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
  background-color: #121212;
`;

const Default = ({ children }: Props) => {
  return (
    <Container>
      <Wrap>
        <div>{children}</div>
      </Wrap>
    </Container>
  );
};

export default Default;
