import styled from 'styled-components';

export const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 1;
  width: 100%;
  height: 40px;
  min-height: 40px;
  color: #999;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(42, 44, 51, 0.6);
  margin-top: auto;

  @media only screen and (max-width: 1200px) {
    width: calc(100% - 20px);
    padding: 0 10px;
  }
`;

export const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
`;

export const Copyright = styled.div`
  padding: 0 4px;
`;

export const Maintainer = styled.div`
  padding: 0 10px;
`;

export const Contact = styled.div`
  float: right;
  padding: 0 4px;
`;