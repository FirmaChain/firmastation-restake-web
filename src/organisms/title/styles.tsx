import styled from "styled-components";

export const TitleContainer = styled.div`
  width: 100%;
`;

export const TitleDesktopSymbol = styled.div`
  width: 60px;
  height: 60px;
  background-image: url('${({ theme }) => theme.urls.logo}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const TitleDesktopTextWrapper = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TitleDesktopText = styled.div`
  width: 534px;
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  font-family: Metropolis-ExtraBold !important;
  color: white;
  margin-top: 14px;
`;

export const TitleDesktopMiniText = styled.div`
  color: #aaa;
  font-size: 22px;
  display: flex;
  align-self: flex-end;
  margin-bottom: 7px;
`;

export const TitleMobileWrapper = styled.div`
  width: 100%;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;

export const TitleMobileSymbol = styled.div`
  width: 48px;
  height: 48px;
  background-image: url('${({ theme }) => theme.urls.logo}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const TitleMobileTextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TitleMobileText = styled.div`
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  font-family: Metropolis-ExtraBold !important;
  color: white;
  margin-top: 10px;
`;

export const TitleMobileTextSubWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const TitleMobileMiniText = styled.div`
  color: #aaa;
  font-size: 16px;
  display: flex;
  align-self: flex-end;
  margin-left: 5px;
  margin-bottom: 3px;
`;