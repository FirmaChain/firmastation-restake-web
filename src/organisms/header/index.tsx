import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

import HeaderDesktop from "./desktop/index";
import HeaderMobile from "./mobile/index";

interface IProps {
  nextRoundDateTime: string
}

function Header({ nextRoundDateTime }: IProps) {
  const isMobile = useMediaQuery({ query: "(min-width:0px) and (max-width:800px)" });

  const [nextRoundTime, setNextRoundTime] = useState('00:00:00');

  const useInterval = (callback: () => void, delay: number) => {
    const savedCallback = useRef<() => void>();

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      function tick() {
        if (savedCallback.current) savedCallback.current();
      }
      if (delay !== null) {
        tick();
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  };

  useInterval(() => {
    if (nextRoundDateTime) {
      const now = new Date();
      const diff = new Date(nextRoundDateTime).getTime() - now.getTime();

      if (diff < 0) return;

      let diffHour = Math.floor((diff / (1000 * 60 * 60)) % 24);
      let diffMin = Math.floor((diff / (1000 * 60)) % 60);
      let diffSec = Math.floor((diff / 1000) % 60);

      diffHour = diffHour === -1 ? 0 : diffHour;
      diffMin = diffMin === -1 ? 0 : diffMin;
      diffSec = diffSec === -1 ? 0 : diffSec;

      setNextRoundTime(`${('00' + diffHour).slice(-2)}:${('00' + diffMin).slice(-2)}:${('00' + diffSec).slice(-2)}`);
    }
  }, 800);
  
  if (isMobile) {
    return <HeaderMobile nextRoundTime={nextRoundTime}/>
  } else {
    return <HeaderDesktop nextRoundTime={nextRoundTime}/>
  }
}

export default React.memo(Header);