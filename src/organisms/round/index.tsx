import React from "react";
import { useMediaQuery } from 'react-responsive';

import { IModalTxHashData, IRoundData } from "../restake/interfaces";

import RoundDesktop from './desktop/index';
import RoundMobile from './mobile/index';

interface IProps {
  roundState: IRoundData[],
  changeModalState: (active: boolean) => void,
  txDataState: (datas: IModalTxHashData[]) => void
}

const Round = ({ roundState, changeModalState, txDataState }: IProps) => {
  const isMobile = useMediaQuery({ query: "(min-width:0px) and (max-width:700px)" });

  const sortRoundsDesc = (rounds: IRoundData[]) => {
    return roundState.sort((a, b) => b.round - a.round);
  }

  if(roundState.length === 0){
    return <></>
  }else{
    if (isMobile) {
      return <RoundMobile
        roundState={sortRoundsDesc(roundState)}
        changeModalState={changeModalState}
        txDataState={txDataState}
      />
    } else {
      return <RoundDesktop
        roundState={sortRoundsDesc(roundState)}
        changeModalState={changeModalState}
        txDataState={txDataState}
      />
    }
  }
}

export default React.memo(Round);