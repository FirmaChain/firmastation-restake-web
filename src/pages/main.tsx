import React, { useEffect, useState } from "react";
import Footer from "../organisms/footer";
import Header from "../organisms/header";
import Restake from "../organisms/restake";
import { useRestakeData } from "../organisms/restake/restakeHooks";

import { ContentContainer, MainContentWrapper, MainDetailLeftWrapper, MainDetailRightWrapper, MainDetailWrapper } from "../styles/main";
import { useChainData } from "../organisms/restake/chainHooks";
import Chain from "../organisms/chain";
import Round from "../organisms/round";
import { IModalTxHashData } from "../organisms/restake/interfaces";
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

  const [ nextRoundDateTime, setNextRoundDateTime ] = useState('00:00:00');
  const [ avgRestakeTime, setAvgRestakeTime ] = useState('0');
  const [ modalState, setModalState ] = useState(false);
  const [ txDataState, setTxDataState ] = useState<Array<IModalTxHashData>>([]);
  
  const totalRestakeState: ITotalRestakeState = {
    round: restakeData.round,
    feesAmount: restakeData.feesAmount,
    restakeAmount: restakeData.restakeAmount,
    restakeCount: restakeData.restakeCount
  };
  
  useEffect(()=>{
    // Header
    setNextRoundDateTime(restakeData.nextRoundDateTime);
    // Left Detail
    setAvgRestakeTime(restakeData.restakeAvgTime.toFixed(2));

  }, [restakeData]);
  
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
            <Round roundState={restakeData.roundDatas} changeModalState={setModalState} txDataState={setTxDataState}/>
          </MainDetailRightWrapper>
        </MainDetailWrapper>
      </MainContentWrapper>
      <Footer/>
      <Modal modalState={modalState} changeModalState={setModalState} txData={txDataState}/>
    </ContentContainer>
  )
}

export default React.memo(Main);