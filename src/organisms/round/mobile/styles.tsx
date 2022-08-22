import styled from "styled-components";

export const RoundContainer = styled.div`
  width: calc(100% - 55px);
  height: 100%;
  border-radius: 4px;
  margin-top: 30px;
  margin-left: 30px;
`;

export const RoundTitle = styled.div`
  width: 100%;
  font-size: 24px;
  font-weight: semi-bold;
  color: #ffffff;
`;

export const RoundHeaderWrapper = styled.div`
  display: flex;
  width: 100px;
  & > div {
    line-height: 50px;
  }
  & > div:nth-child(1){
    flex: 1 1 400px;
    text-align: left;
  }
  & > div:nth-child(2){
    flex: 1 1 200%;
    margin-left: -10px;
  }
  & > div:nth-child(3){
    flex: 1 1 150%;
    text-align: right;
  }
  & > div:nth-child(4){
    flex: 1 1 100%;
    text-align: right;
    margin-right: 5px;
  }
  & > div:nth-child(5){
    flex: 1 1 80%;
    text-align: center;
    margin-right: -5px;
  }
`;

export const RoundColumnItemWrapper = styled.div`
  width: 100px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 58px;
  
  & > div:nth-child(1){
    flex: 1 1 400px;
    margin-left: 5px;
  }
  & > div:nth-child(2){
    flex: 1 1 200%;
    margin-left: -15px;
  }
  & > div:nth-child(3){
    flex: 1 1 150%;
    text-align: right;
  }
  & > div:nth-child(4){
    flex: 1 1 100%;
    text-align: right;
    margin-right: -5px;
  }
  & > div:nth-child(5){
    flex: 1 1 80%;
    display: flex;
    justify-content: center;
  }
`;

export const RoundHeaderItem = styled.div`
  width: 100%;
  height: 50px;
  color: #8d8d8d;
  font-size: 14px;
  font-family: Lato;
`;

export const RoundColumnItem12 = styled.div`
  white-space: nowrap;
  color: #c4c4c4;
  font-size: ${({ theme }) => theme.sizes.itemColumnSize12};
  line-height:16px;
`;

export const RoundColumnItem16 = styled.div`
  width: calc(100% - 20px);
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
  margin-left: 20px;
`;