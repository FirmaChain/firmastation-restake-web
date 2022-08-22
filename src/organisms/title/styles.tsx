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

export const TitleDesktopText = styled.div`
  width: 534px;
  text-align: center;
  font-size: 42px;
  font-weight: bold;
  font-family: Metropolis !important;
  color: white;
  margin-top: 18px;
`;

export const TitleMobileWrapper = styled.div`
  width: 100%;
  padding-top: 20px;
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
  font-family: Metropolis !important;
  color: white;
  margin-top: 10px;
`;