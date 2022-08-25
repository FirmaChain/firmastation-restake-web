import styled from "styled-components";

export const RoundContainer = styled.div`
  width: calc(100% - 36px);
  height: 100%;
  border-radius: 4px;
  margin-top: 30px;
  margin-left: 18px;
`;

export const RoundTitle = styled.div`
  width: 100%;
  font-size: 24px;
  font-weight: semi-bold;
  color: #ffffff;
`;

export const RoundHeaderWrapper = styled.div`
  display: flex;
  width: 100%;
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
    flex: 1 1 90%;
    text-align: right;
  }
  & > div:nth-child(5){
    flex: 1 1 70%;
    text-align: center;
    margin-right: -5px;
  }
`;

export const RoundHeaderItem = styled.div`
  width: 100%;
  height: 50px;
  color: #8d8d8d;
  font-size: 14px;
  font-family: Lato;
`;

export const RoundColumnWrapper = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RoundColumnItemWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;

  & > div:nth-child(1){
    flex: 1 1 400px;
    text-align: center;
    margin-left: -13px;
  }
  & > div:nth-child(2){
    flex: 1 1 200%;
  }
  & > div:nth-child(3){
    flex: 1 1 150%;
    text-align: right;
    margin-left: 7px;
    margin-right: -2px;
  }
  & > div:nth-child(4){
    flex: 1 1 90%;
    text-align: right;
    margin-right: -11px;
  }
  & > div:nth-child(5){
    flex: 1 1 70%;
    display: flex;
    margin-right: 2px;
    justify-content: center;
  }
`;

export const RoundColumnItem12 = styled.div`
  white-space: nowrap;
  color: #c4c4c4;
  font-size: ${({ theme }) => theme.sizes.itemColumnSize12};
  line-height: 16px;
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

export const RoundPagination = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const RoundPaginationBtn = styled.div`
  width: 30px;
  font-size: 18px;
  color: #aaa;
  display: flex;
  justify-content: center;

  cursor: pointer;
  $:hover {
    color: black;
  }
`;

export const RoundPaginationInput = styled.input`
  width: 30px;
  font-size: 16px;
  color: black;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const RoundPaginationNumber = styled.div`
  width: auto;
  font-size: 16px;
  color: #aaa;
  display: flex;
  justify-content: center;
`;