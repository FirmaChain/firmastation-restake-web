import React from "react";
import { HeaderButtonIcon, HeaderButtonText, HeaderButtonWrapper, HeaderContainer, HeaderLeftWrapper, HeaderLogo, HeaderRightTimeText, HeaderRightTimeValue, HeaderRightTimeWrapper, HeaderRightWrapper, HeaderWrapper } from "./styles"

interface IProps {
  nextRoundTime: string
}

function HeaderDesktop ({ nextRoundTime }: IProps) {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderLeftWrapper>
          <HeaderLogo src='/images/img_logo.svg'/>
          <HeaderButtonWrapper onClick={() => window.open('https://station.firmachain.io')}>
            <HeaderButtonText>FIRMA STATION</HeaderButtonText>
            <HeaderButtonIcon/>
          </HeaderButtonWrapper>
          <HeaderButtonWrapper onClick={() => window.open('https://explorer.firmachain.dev')}>
            <HeaderButtonText>BLOCK EXPLORER</HeaderButtonText>
            <HeaderButtonIcon/>
          </HeaderButtonWrapper>
        </HeaderLeftWrapper>
        <HeaderRightWrapper>
          <HeaderRightTimeText>Remaining Time</HeaderRightTimeText>
          <HeaderRightTimeWrapper>
            <HeaderRightTimeValue>{nextRoundTime}</HeaderRightTimeValue>
          </HeaderRightTimeWrapper>
        </HeaderRightWrapper>
      </HeaderWrapper>
    </HeaderContainer>
  )
}

export default React.memo(HeaderDesktop);