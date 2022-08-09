import { useState } from 'react';
import styled from 'styled-components';
// import { MenuDrawerProps } from './types';

const MenuDrawer = (isOpen) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(true);
  console.log(isOpen);
  return (
    <Container
      className="bg-yellow-500"
      style={isOpenModal === true ? { display: `block` } : { display: `none` }}
    >
      <p onClick={() => setIsOpenModal(isOpen)}>testandoooo</p>
    </Container>
  );
};
export default MenuDrawer;

const Container = styled.div``;
