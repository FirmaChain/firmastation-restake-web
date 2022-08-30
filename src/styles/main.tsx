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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 20px;

  @media only screen and (max-width: 1200px) {
    margin-top: 6px;
    height: calc(100% - 61px);
    margin-bottom: 55px;
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
  height: calc(546px - 24px);
  max-width: 1200px;
  display: flex;
  margin-top: 24px;
  gap: 20px;
  @media only screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    height: 1000px;
    gap: 5px;
    margin-top: 5px;
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
    height: 10px;
    margin-left: 10px;
  }
  background: #212329;
`;
