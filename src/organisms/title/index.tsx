
import React from "react";
import { useMediaQuery } from "react-responsive";
import { TitleDesktopSymbol, TitleDesktopText, TitleMobileSymbol, TitleMobileText, TitleMobileTextWrapper, TitleMobileWrapper } from "./styles";

function Title() {
  const isMobile = useMediaQuery({ query: "(min-width:0px) and (max-width:800px)" });

  if (isMobile) {
    return (
      <TitleMobileWrapper>
        <TitleMobileSymbol/>
        <TitleMobileTextWrapper>
          <TitleMobileText>FIRMASTATION</TitleMobileText>
          <TitleMobileText>RESTAKE</TitleMobileText>
        </TitleMobileTextWrapper>
      </TitleMobileWrapper>
    )
  } else {
    return (
      <>
        <TitleDesktopSymbol/>
        <TitleDesktopText>FIRMASTATION RESTAKE</TitleDesktopText>
      </>
    )
  }
}

export default React.memo(Title);