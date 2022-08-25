import React, { useEffect, useState } from "react";
import { changeDateFormat } from "../../../utils/common";

import { IModalTxHashData, IRoundData, IRoundDetail } from "../../restake/interfaces";
import { 
  RoundColumnBtnImg,
  RoundColumnItem12,
  RoundColumnItem16,
  RoundColumnItemWrapper,
  RoundColumnWrapper,
  RoundContainer,
  RoundHeaderItem,
  RoundHeaderWrapper,
  RoundPagination,
  RoundPaginationBtn,
  RoundPaginationNumber,
  RoundTitle
} from "./styles";

const ITEM_PER_PAGE = 8;

interface IProps {
  roundState: IRoundData[],
  changeModalState: (active: boolean) => void,
  txDataState: (datas: IModalTxHashData[]) => void
}

const numberWithCommas = (x: string) => {
  return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function RoundMobile({ roundState, changeModalState, txDataState }: IProps) {
  const [currentRoundState, setCurrentRoundState] = useState<IRoundData[]>([]);
  const [totalPageCount, setTotalPageCount] = useState(0);
  const [directionState, setDirectionState] = useState(0);
  const [currentRoundPage, setCurrentRoundPage] = useState(0);

  useEffect(() => {
    const startRange = currentRoundPage * ITEM_PER_PAGE;
    const endRange = (currentRoundPage + 1) * ITEM_PER_PAGE;
    const currentRounds = roundState.slice(startRange, endRange);
    setCurrentRoundState(currentRounds);
    setTotalPageCount(Math.ceil(roundState.length / ITEM_PER_PAGE));
  }, [roundState]);

  useEffect(() => {
    if (directionState !== 0) {
      const movePage = currentRoundPage + directionState;
      if (movePage > -1 && movePage < totalPageCount) {
        setCurrentRoundPage(movePage);

        const startRange = movePage * ITEM_PER_PAGE;
        const endRange = (movePage + 1) * ITEM_PER_PAGE;
        const currentRounds = roundState.slice(startRange, endRange);
        setCurrentRoundState(currentRounds);

        setDirectionState(0);
      }
    }
  }, [directionState]);

  useEffect(() => {

  }, [currentRoundState]);

  const onClickMovePage = (direction: number) => {
    if (direction !== 0) {
      setDirectionState(direction);
    }
  }
  
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
  
  return (
    <RoundContainer>
      <RoundTitle>Rounds</RoundTitle>
      <RoundHeaderWrapper>
        <RoundHeaderItem>Round</RoundHeaderItem>
        <RoundHeaderItem>Start Time <span style={{ fontSize: "12px", color: "#666" }}>(UTC)</span></RoundHeaderItem>
        <RoundHeaderItem>Amount</RoundHeaderItem>
        <RoundHeaderItem>Count</RoundHeaderItem>
        <RoundHeaderItem>TX</RoundHeaderItem>
      </RoundHeaderWrapper>
      <RoundColumnWrapper>
        {
          currentRoundState.map((round, index) => {
            return (
            <RoundColumnItemWrapper key={index}>
              <RoundColumnItem16>{round.round}</RoundColumnItem16>
              <RoundColumnItem12>{`${changeDateFormat(round.startDateTime)}`}</RoundColumnItem12>
              <RoundColumnItem16>{numberWithCommas((Number(round.restakeAmount) / Math.pow(10, 6)).toFixed(0))} <span style={{ fontSize: "12px", color: '#888' }}>FCT</span></RoundColumnItem16>
              <RoundColumnItem16>{round.restakeCount}</RoundColumnItem16>
              <RoundColumnItem16>
                <RoundColumnBtnImg onClick={() => onClickTransaction(round.roundDetails)} />
              </RoundColumnItem16>
            </RoundColumnItemWrapper>
            )
          })
        }
      </RoundColumnWrapper>
      <RoundPagination>
        <RoundPaginationBtn onClick={() => onClickMovePage(-1)}>{"<"}</RoundPaginationBtn>
        <RoundPaginationNumber>{`${currentRoundPage + 1} /`}&nbsp;</RoundPaginationNumber>
        <RoundPaginationNumber>{`${totalPageCount}`}</RoundPaginationNumber>
        <RoundPaginationBtn onClick={() => onClickMovePage(1)}>{">"}</RoundPaginationBtn>
      </RoundPagination>
    </RoundContainer>
  )
}

export default React.memo(RoundMobile);