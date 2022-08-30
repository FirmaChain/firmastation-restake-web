import styled from "styled-components";

export const RestakeContainer = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  max-width: 900px;
  min-height: 536px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
`;

export const RestakeWrap = styled.div`
  width: 100%;
  height: 90px;
  max-width: ${({ theme }) => theme.sizes.retakeWrapSize};
  background-color: ${({ theme }) => theme.colors.restakeCard};
  border-radius: 4px;
  display: flex;
  margin-top: 35px;

  @media only screen and (max-width: 1200px) {
    width: calc(100% - 20px);
    height: auto;
    flex-wrap: wrap;
    padding-top: 5px;
    margin-top: 16px;
    background-color: #00000000;
    gap: 7px;
  }
`;

export const RestakeTextWrap = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: center;
  border-right: 1px solid #444;
  border-color: #96adea60;
  
  &:last-child {
    border: 0;
  }

  @media only screen and (max-width: 1200px) {
    width: calc(50% - 20px);
    height: 100px;
    flex: auto;
    background-color: ${({ theme }) => theme.colors.restakeCard};
    border: 0;
    border-radius: 4px;
    gap: 8px;
  }
`;

export const RestakeTitleTypo = styled.div`
  height: auto;
  color: #b6c2e1;
  margin-bottom: 8px;
  font-size: ${({ theme }) => theme.sizes.restakeCardSize1};
  font-failmy: Lato;
  
  @media only screen and (max-width: 1200px) {
    font-size: ${({ theme }) => theme.sizes.restakeCardSize0};
    text-align: left;
    margin-top: 24px;
    margin-left: 20px;
    width: calc(100% - 20px);
  }
`;

export const RestakeContentTypo = styled.div`
  width: 100%;
  display: flex;
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media only screen and (max-width: 1200px) {
    justify-content: left;
    align-items: center;
    margin-top: -10px;
  }
`;

export const RestakeContentTypoWrapper = styled.div`
  width: 100%;
  height: 29px;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media only screen and (max-width: 1200px) {
    display: flex;
    align-items: left;
    justify-content: left;
    margin-top: -2px;
    margin-left: 20px;
    width: calc(100% - 20px);
  }
`;

export const RestakeContentTypoValue = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
`;

export const RestakeContentTypoSymbol = styled.div`
  font-size: 14px;
  color: #b8cbea;
  margin-left: 5px;
  margin-bottom: 2px;
`;