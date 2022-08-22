import React, { useEffect, useState } from "react";
import Footer from "../organisms/footer";
import Header from "../organisms/header";
import Restake from "../organisms/restake";
import { useRestakeData } from "../organisms/restake/restakeHooks";

import { ContentContainer, MainContentWrapper, MainDetailLeftWrapper, MainDetailRightWrapper, MainDetailWrapper, MainIcon, MainText } from "../styles/main";
import { useChainData } from "../organisms/restake/chainHooks";
import Chain from "../organisms/chain";
import Round from "../organisms/round";
import { IModalTxHashData, IRoundTimeInfo } from "../organisms/restake/interfaces";
import Modal from "../organisms/modal";
import Title from "../organisms/title";

export interface ITotalRestakeState {
  round: number;
  feesAmount: number;
  restakeAmount: number;
  restakeCount: number;
}

function Main() {
  const { chainData } = useChainData();
  const { restakeData } = useRestakeData();

  const [ modalState, setModalState ] = useState(false);
  const [ nextRoundDateTime, setNextRoundDateTime ] = useState('00:00:00');
  const [ avgRestakeTime, setAvgRestakeTime ] = useState('0');
  const [ roundTimeInfos, setRoundTimeInfos ] = useState<Array<IRoundTimeInfo>>([]);
  const [ txDataState, setTxDataState ] = useState<Array<IModalTxHashData>>([]);
  
  const totalRestakeState: ITotalRestakeState = {
    round: restakeData.round,
    feesAmount: restakeData.feesAmount,
    restakeAmount: restakeData.restakeAmount,
    restakeCount: restakeData.restakeCount
  };
  
  useEffect(()=>{
    setNextRoundDateTime(restakeData.nextRoundDateTime);

    const roundDatas = restakeData.roundDatas;

    let roundTimeInfos: IRoundTimeInfo[] = [];
    let totalRetakeTime = 0;
    
    for (let i = 0; i < roundDatas.length; i++) {
      const roundData = roundDatas[i];
  
      let roundTimeInfo: IRoundTimeInfo = {
        startDateTime: roundData.startDateTime,
        endDateTime: roundData.startDateTime,
        diffTime: 0
      };
      
      if (roundData.roundDetails.length > 0) {
        const startDateTime = new Date(roundData.startDateTime);
        const lastRoundDetail = roundData.roundDetails[roundData.roundDetails.length - 1];
        const endDateTime = new Date(lastRoundDetail.dateTime);
        const diffTime = (endDateTime.getTime() - startDateTime.getTime()) / 1000;
  
        roundTimeInfo = {
          startDateTime: roundData.startDateTime,
          endDateTime: lastRoundDetail.dateTime,
          diffTime: diffTime
        }
  
        if (i < 10) {
          totalRetakeTime += diffTime;
        }
      }
  
      roundTimeInfos.push(roundTimeInfo);
    }

    setRoundTimeInfos(roundTimeInfos);

    if (roundDatas.length >= 1) {
      let count = roundDatas.length >= 10 ? 10 : roundDatas.length;
      setAvgRestakeTime((totalRetakeTime / count).toFixed(2));
    }
  },[restakeData]);
  
  return (
    <ContentContainer>
      <Header nextRoundDateTime={nextRoundDateTime}/>
      <MainContentWrapper>
        <Title/>
        <Restake totalRestakeState={totalRestakeState}/>
        <MainDetailWrapper>
          <MainDetailLeftWrapper>
            <Chain avgRestakeTime={avgRestakeTime} chainState={chainData} />
          </MainDetailLeftWrapper>
          <MainDetailRightWrapper>
            <Round roundTimeInfos={roundTimeInfos} roundState={restakeData.roundDatas} changeModalState={setModalState} txDataState={setTxDataState}/>
          </MainDetailRightWrapper>
        </MainDetailWrapper>
      </MainContentWrapper>
      <Footer/>
      <Modal modalState={modalState} changeModalState={setModalState} txData={txDataState}/>
    </ContentContainer>
  )
}

export default React.memo(Main);