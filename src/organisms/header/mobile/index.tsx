
import React, { useState } from "react";
import { HamburgerMenu, HeaderButtonIcon, HeaderContainer, HeaderLeftWrapper, HeaderLogo, HeaderRightTimeText, HeaderRightTimeValue, HeaderRightTimeWrapper, HeaderRightWrapper, HeaderWrapper, MobileMenuItem } from "./styles";
import Hamburger from "hamburger-react";

interface IProps {
  nextRoundTime: string
}

const menus = [
  { name: "FIRMA STATION", path: "/station", externalLink: "https://station.firmachain.io" },
  { name: "BLOCK EXPLORER", path: "/explorer", externalLink: "https://explorer.firmachain.dev" },
]
function HeaderMobile ({ nextRoundTime }: IProps) {
  const [isOpen, setOpen] = useState(false);
  
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderLeftWrapper>
          <HeaderLogo src='/images/img_logo.svg'/>
        </HeaderLeftWrapper>
        <HeaderRightWrapper>
          <HeaderRightTimeText>Remaining Time</HeaderRightTimeText>
          <HeaderRightTimeWrapper>
            <HeaderRightTimeValue>{nextRoundTime}</HeaderRightTimeValue>
          </HeaderRightTimeWrapper>
          <Hamburger size={26} toggled={isOpen} toggle={setOpen} />
        </HeaderRightWrapper>
      </HeaderWrapper>
      <HamburgerMenu isShow={isOpen}>
        {menus.map((menu, index) => {
          return (
            <MobileMenuItem key={index} onClick={() => {
              window.open(menu.externalLink);
            }}>
              <>
                {menu.name}
                <HeaderButtonIcon/>
              </>
            </MobileMenuItem>
          )
        })}
      </HamburgerMenu>
    </HeaderContainer>
  )
}

export default React.memo(HeaderMobile);