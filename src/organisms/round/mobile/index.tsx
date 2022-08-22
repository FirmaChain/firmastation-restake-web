import React from "react";
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List } from 'react-window';
import { changeDateFormat } from "../../../utils/common";

import { IModalTxHashData, IRoundData, IRoundDetail, IRoundTimeInfo } from "../../restake/interfaces";
import { RoundColumnBtnImg, RoundColumnItem12, RoundColumnItem16, RoundColumnItemWrapper, RoundContainer, RoundHeaderItem, RoundHeaderWrapper, RoundTitle } from "./styles";

interface IProps {
  roundTimeInfos: IRoundTimeInfo[],
  roundState: IRoundData[],
  changeModalState: (active: boolean) => void,
  txDataState: (datas: IModalTxHashData[]) => void
}

const numberWithCommas = (x: string) => {
  return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Row = ({ data, index, style, roundTimeInfos, changeModalState, txDataState }: any) => {
  const onClickTransaction = (roundDetails: IRoundDetail[]) => {
    let modalDatas: IModalTxHashData[] = [];

    for (let i = 0; i < roundDetails.length; i++) {
      const roundDetail = roundDetails[i];
      modalDatas.push({
        count: i + 1,
        completion: roundDetail.dateTime,
        hash: roundDetail.txHash
      });
    }

    changeModalState(true);
    txDataState(modalDatas);
  }

  
  const currentAsset = data[index];
  const startTime = changeDateFormat(roundTimeInfos[index].startDateTime);
  
  let restakeAmount = '';
  const nRestakeAmount = Number(currentAsset.restakeAmount) / Math.pow(10, 6);
  if (nRestakeAmount < 100) {
    restakeAmount = nRestakeAmount.toFixed(2);
  } else {
    restakeAmount = numberWithCommas(nRestakeAmount.toFixed(0));
  }

  style.backgroundColor = index % 2 === 1 ? '#212329' : '#2A2C33'

  return (
    <RoundColumnItemWrapper style={style}>
      <RoundColumnItem16>{currentAsset.round}</RoundColumnItem16>
      <RoundColumnItem12>{`${startTime}`}</RoundColumnItem12>
      <RoundColumnItem16>{restakeAmount} <span style={{ fontSize: "12px", color: '#888' }}>FCT</span></RoundColumnItem16>
      <RoundColumnItem16>{currentAsset.restakeCount}</RoundColumnItem16>
      <RoundColumnItem16>
        <RoundColumnBtnImg onClick={() => onClickTransaction(currentAsset.roundDetails)} />
      </RoundColumnItem16>
    </RoundColumnItemWrapper>
  )
}

function RoundMobile({ roundTimeInfos, roundState, changeModalState, txDataState }: IProps) {
  return (
    <RoundContainer>
      <RoundTitle>Rounds</RoundTitle>
      <AutoSizer>
      {({ height, width }) => (
          <>
            <RoundHeaderWrapper style={{ width }}>
              <RoundHeaderItem>Round</RoundHeaderItem>
              <RoundHeaderItem>Start Time <span style={{ fontSize: "12px", color: "#666" }}>(UTC)</span></RoundHeaderItem>
              <RoundHeaderItem>Amount</RoundHeaderItem>
              <RoundHeaderItem>Count</RoundHeaderItem>
              <RoundHeaderItem>TX</RoundHeaderItem>
            </RoundHeaderWrapper>
            <List
              width={width}
              height={height - 90}
              itemCount={roundState.length}
              itemSize={50}
              itemData={roundState}>
              {(props) => Row({ ...props, roundTimeInfos, changeModalState, txDataState })}
            </List>
          </>
        )}
      </AutoSizer>
    </RoundContainer>
  )
}

export default React.memo(RoundMobile);