import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  top: 0;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1210px;
`;

export const HeaderLeftWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderLogo = styled.img`
  width: 194px;
`;

export const HeaderButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  font-size: 16px;
`;

export const HeaderButtonWrapper = styled.div`
  width: calc(100% - 30px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 40px;
  
  cursor: pointer;
  $:hover {
    color: black;
  }
`;

export const HeaderButtonText = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #ccc;
  white-space: nowrap;
`;

export const HeaderButtonIcon = styled.div`
  width: 24px;
  height: 24px;
  background-image: url('${({ theme }) => theme.urls.link}');
`;

export const HeaderRightWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderRightTimeText = styled.div`
  font-size: 14px;
  color: #c4c4c4;
`;

export const HeaderRightTimeWrapper = styled.div`
  width: 98px;
  height: 36px;
  padding:0 0px;
  background-color: #2a2c33;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  border-radius: 4px;
`;

export const HeaderRightTimeValue = styled.div`
  font-size: 18px;
  color: #ccc;
  font-weight: 600;
`;
