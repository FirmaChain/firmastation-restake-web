
import React from "react";
import { useMediaQuery } from "react-responsive";
import { TitleDesktopMiniText, TitleDesktopSymbol, TitleDesktopText, TitleDesktopTextWrapper, TitleMobileMiniText, TitleMobileSymbol, TitleMobileText, TitleMobileTextSubWrapper, TitleMobileTextWrapper, TitleMobileWrapper } from "./styles";

function Title() {
  const isMobile = useMediaQuery({ query: "(min-width:0px) and (max-width:800px)" });

  if (isMobile) {
    return (
      <TitleMobileWrapper>
        <TitleMobileSymbol/>
        <TitleMobileTextWrapper>
          <TitleMobileText>FIRMASTATION</TitleMobileText>
          <TitleMobileTextSubWrapper>
            <TitleMobileText>RESTAKE</TitleMobileText>
            <TitleMobileMiniText>(Beta)</TitleMobileMiniText>
          </TitleMobileTextSubWrapper>
        </TitleMobileTextWrapper>
      </TitleMobileWrapper>
    )
  } else {
    return (
      <>
        <TitleDesktopSymbol/>
        <TitleDesktopTextWrapper>
          <TitleDesktopText>FIRMASTATION RESTAKE</TitleDesktopText>
          <TitleDesktopMiniText>(Beta)</TitleDesktopMiniText>
        </TitleDesktopTextWrapper>
      </>
    )
  }
}

export default React.memo(Title);