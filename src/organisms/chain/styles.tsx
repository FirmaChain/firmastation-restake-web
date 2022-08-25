import styled from "styled-components";

export const ChainInfoCard = styled.div`
  width: calc(100% - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  margin-left: 30px;

  @media only screen and (max-width: 700px) {
    width: calc(100% - 36px);
    margin-left: 18px;
  }
`;

export const ChainDescription = styled.div`
  width: 100%;
  font-size: 13px;
  color: #777;
  margin-top:-9px;
`;

export const ChainInfoText = styled.div`
  width: 100%;
  font-size: 24px;
  font-weight: semi-bold;
  color: #ffffff;
`;

export const ChainInfoDataWrap = styled.div`
  width: 100%;
  height: calc(100% - 30px);
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 30px;
  gap: 20px;
`;

export const ChainInfoTextWrap = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  border-bottom: 1px solid #444;
  &:last-child {
    border: 0;
  }
`;

export const ChainInfoTypo = styled.div`
  height: calc(100% - 8px);
  color: #aaa;
  margin-bottom: 8px;
  font-size: ${({ theme }) => theme.sizes.restakeCardSize1};
`;

export const ChainInfoContentTypo = styled.div`
  color: #ffffff;
  font-size: ${({ theme }) => theme.sizes.restakeCardSize2};
`;