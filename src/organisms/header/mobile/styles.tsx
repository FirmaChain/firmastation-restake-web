import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: calc(100% - 20px);
  height: 60px;
  display: flex;
  align-items: center;
`;

export const HeaderWrapper = styled.div`  
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLeftWrapper = styled.div`
  display: flex;
`;

export const HeaderRightWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ccc;
`;

export const HeaderLogo = styled.img`
  width: 124px;
`;

export const HamburgerMenu = styled.div<{ isShow: boolean }>`
  z-index: 10;
  width: 100%;
  position: absolute;
  top: 60px;
  left: 0;
  flex-direction: column;
  font-size: ${({ theme }) => theme.sizes.defaultSize};
  background-color: #131317;
  box-shadow: 0px 3px 10px black;
  ${(props) => (props.isShow ? `display:flex;` : `display:none;`)}
`;

export const MobileMenuItem = styled.div`
  width: calc(100% - 40px);
  padding: 0 20px;
  height: 50px;
  line-height: 50px;
  color: white;
  border-top: 1px solid #222;
  font-size: 16px;
  text-align: right;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;

  cursor: pointer;
  $:hover {
    color: black;
  }
`;

export const HeaderButtonIcon = styled.div`
  width: 24px;
  height: 24px;
  background-image: url('${({ theme }) => theme.urls.link}');
`;

export const HeaderRightTimeText = styled.div`
  font-size: 12px;
  color: #c4c4c4;
`;

export const HeaderRightTimeWrapper = styled.div`
  width: 78px;
  height: 28px;
  padding:0 0px;
  background-color: #2a2c33;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  border-radius: 4px;
`;

export const HeaderRightTimeValue = styled.div`
  font-size: 14px;
  color: #ccc;
  font-weight: 600;
`;
