import React from "react";
import { useMediaQuery } from 'react-responsive';

import { IModalTxHashData, IRoundData, IRoundTimeInfo } from "../restake/interfaces";

import RoundDesktop from './desktop/index';
import RoundMobile from './mobile/index';

interface IProps {
  roundTimeInfos: IRoundTimeInfo[],
  roundState: IRoundData[],
  changeModalState: (active: boolean) => void,
  txDataState: (datas: IModalTxHashData[]) => void
}

const Round = ({ roundTimeInfos, roundState, changeModalState, txDataState }: IProps) => {
  const isMobile = useMediaQuery({ query: "(min-width:0px) and (max-width:700px)" });

  if(roundTimeInfos.length !== roundState.length){
    return <></>
  }else{
    if (isMobile) {
      return <RoundMobile
        roundTimeInfos={roundTimeInfos}
        roundState={roundState}
        changeModalState={changeModalState}
        txDataState={txDataState}
      />
    } else {
      return <RoundDesktop
        roundTimeInfos={roundTimeInfos}
        roundState={roundState}
        changeModalState={changeModalState}
        txDataState={txDataState}
      />
    }
  }

}

export default React.memo(Round);