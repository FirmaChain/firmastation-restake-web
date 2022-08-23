import styled from "styled-components";

export const RoundContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const RoundHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    line-height: 50px;
  }
  & > div:nth-child(1){
    flex: 1 1 80%;
    text-align: center;
  }
  & > div:nth-child(2){
    flex: 1 1 150%;
  }
  & > div:nth-child(3){
    flex: 1 1 150%;
    text-align:right;
  }
  & > div:nth-child(4){
    flex: 1 1 100%;
    text-align:right;
  }
  & > div:nth-child(5){
    flex: 1 1 100%;
    text-align:right;
  }
  & > div:nth-child(6){
    flex: 1 1 80%;
    text-align:center;
  }
`;

export const RoundHeaderItem = styled.div`
  height: 50px;
  color: #8d8d8d;
  font-size: 14px;
  font-family: Lato;
`;

export const RoundColumnItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 58px;
  
  & > div:nth-child(1){
    flex: 1 1 80%;
    text-align: center;
  }
  & > div:nth-child(2){
    flex: 1 1 150%;
  }
  & > div:nth-child(3){
    flex: 1 1 150%;
    text-align: right;
  }
  & > div:nth-child(4){
    flex: 1 1 100%;
    text-align: right;
  }
  & > div:nth-child(5){
    flex: 1 1 100%;
    text-align: right;
    margin-right: -5px;
  }
  & > div:nth-child(6){
    flex: 1 1 80%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const RoundColumnItem12 = styled.div`
  white-space: pre-wrap;
  color: #c4c4c4;
  font-size: ${({ theme }) => theme.sizes.itemColumnSize12};
  line-height:16px;
`;

export const RoundColumnItem16 = styled.div`
  color: #c4c4c4;
  font-size: ${({ theme }) => theme.sizes.itemColumnSize16};
`;

export const RoundColumnBtnImg = styled.div`
  width: 24px;
  height: 24px;
  cursor:pointer;
  background-image: url("/images/ic_list_24px.svg");
  background-repeat:no-repeat;
  background-size:contain;
  margin-left: 10px;
`;