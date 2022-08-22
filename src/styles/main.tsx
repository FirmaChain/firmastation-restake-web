import styled from "styled-components";

export const RootContainer = styled.div`
  z-index: 1;
  font-size: 0px;
  display: flex;
  background: #191a21;
`;

export const ContentContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  flex-grow: 1;
`;

export const MainContentWrapper = styled.div`
  z-index: 1;
  width: 100%;
  height: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 40px;

  @media only screen and (max-width: 1200px) {
    height: calc(100% - 30px);
    margin-bottom: 30px;
  }
`;

export const MainIcon = styled.div`
  width: 60px;
  height: 60px;
  background-image: url('${({ theme }) => theme.urls.logo}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const MainText = styled.div`
  width: 534px;
  text-align: center;
  font-size: 42px;
  font-weight: bold;
  font-family: Metropolis !important;
  color: white;
  margin-top: 18px;
`;

export const MainDetailWrapper = styled.div`
  width: 100%;
  height: calc(485px - 24px);
  max-width: 1200px;
  display: flex;
  margin-top: 24px;
  gap: 20px;
  padding-bottom: 24px;
  @media only screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    height: 950px;
    gap: 10px;
    margin-top: 16px;
  }
`;

export const MainDetailLeftWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  @media only screen and (max-width: 1200px) {
    width: calc(100% - 20px);
    margin: 10px;
    flex-direction: column;
  }
  background: #212329;
`;

export const MainDetailRightWrapper = styled.div`
  flex: 4;
  display: flex;
  border-radius: 6px;
  @media only screen and (max-width: 1200px) {
    width: calc(100% - 20px);
    margin-left: 10px;
    flex-direction: column;
  }
  background: #212329;
`;
