import styled from "styled-components";

export const ModalWrapper = styled.div<{ visible: boolean }>`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
  height: auto;
`;

export const ModalOverlay = styled.div<{ visible: boolean }>`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
`;

export const ModalInner = styled.div<{ width: string }>`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #212329;
  border-radius: 6px;
  width: ${(props) => (props.width ? props.width : "300px")};
  max-width: ${(props) => (props.width ? props.width : "300px")};
  height: 490px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.defaultWhite};
`;

export const ModalContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ModalTitle = styled.div`
  width: calc(100% - 30px);
  font-size: 22px;
  color: white;
  font-family: Metropolis !important;
  font-weight: bold;
  margin-left: 30px;
  margin-top: 30px;
`;

export const ModalCloseButton = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  top: 0px;
  right: 0px;
  display: inline-block;
  cursor: pointer;
  margin-top: 30px;
  margin-right: 30px;
  color: ${({ theme }) => theme.colors.defaultWhite};
  background-image: url("${({ theme }) => theme.urls.close}");
  background-size: contain;
`;

export const TransactionContainer = styled.div`
  width: 100%;
  height: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  margin-top: 22px;
`;

export const TRHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TRHeader = styled.div`
  width: 100%;
  display: flex;
  & > div: nth-child(1) {
    flex: 1 1 250px;
    display: flex;
    justify-content: center;
  }

  & > div: nth-child(2) {
    margin-left: 30px;
  }

  & > div: nth-child(3) {
    margin-left: -20px;
  }

  @media only screen and (max-width: 1200px) {
    & > div: nth-child(2) {
      margin-left: -10px;
    }
    & > div: nth-child(3) {
      margin: 0px;
    }
  }
`;

export const TRHeaderRow = styled.div`
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  color: #aaa;
  flex: 1 1 100%;
`;

export const TRItemWrapper = styled.div`
  width: 100%;
  height: 360px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  
  & > div: nth-child(even) {
    background-color: #2d2f36;
  }
`;

export const TRItem = styled.div`
  width: 100%;
  display: flex;
  
  & > div:nth-child(1){
    flex: 1 1 250px;
    display: flex;
    justify-content: center;
  }

  & > div: nth-child(2) {
    margin-left: 30px;
  }

  & > div:nth-last-child(1) {
    cursor: pointer;
    text-decoration: underline;
    margin-left: -20px;

    $:hover {
      color: black;
    }
  }

  @media only screen and (max-width: 1200px) {
    & > div: nth-child(2) {
      margin-left: -10px;
    }
    & > div: nth-child(3) {
      margin: 0px;
    }
  }
`;

export const TRItemRow = styled.div`
  height: 45px;
  line-height: 45px;
  font-size: 15px;
  color: #aaa;
  flex: 1 1 100%;
`;
