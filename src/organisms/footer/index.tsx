import React from 'react';
import { FooterContainer, FooterWrapper, Copyright, Contact } from './styles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Copyright>Copyright © FirmaChain 2022</Copyright>
        <Contact>contact@firmachain.org</Contact>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default React.memo(Footer);
