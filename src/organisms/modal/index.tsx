import React from "react";
import { useMediaQuery } from "react-responsive";

import { EXPLORER_TRANSACTION } from "../../config";
import { changeDateFormat, convertTransactionHash } from "../../utils/common";
import { IModalTxHashData } from "../restake/interfaces";

import {
  ModalOverlay,
  ModalWrapper,
  ModalInner,
  ModalContainer,
  ModalTitle,
  ModalCloseButton,
  TransactionContainer,
  TRHeaderWrapper,
  TRItemWrapper,
  TRHeader,
  TRHeaderRow,
  TRItem,
  TRItemRow,
} from "./styles";

interface IProps {
  modalState: boolean,
  changeModalState:(active:boolean) => void,
  txData: IModalTxHashData[]
}

const Modal = ({modalState, changeModalState, txData}: IProps) => {
  const closeModal = () =>{
    changeModalState(false);
  }

  let modalWidthSize = '530px';
  let hashLength = 8;
  let fontSize = '16px';

  const isMobile = useMediaQuery({ query: "(min-width:0px) and (max-width:600px)" });
  if (isMobile === true) {
    modalWidthSize = '350px';
    hashLength = 6;
    fontSize = '13px';
  }

  return (
    <>
      <ModalOverlay visible={modalState}/>
      <ModalWrapper tabIndex={-1} visible={modalState}>
        <ModalInner tabIndex={0} width={modalWidthSize}>
          <ModalContainer>
            <ModalTitle>TX Hash</ModalTitle>
            <ModalCloseButton onClick={closeModal} />
            <TransactionContainer>
              <TRHeaderWrapper>
                <TRHeader>
                  <TRHeaderRow>Count</TRHeaderRow>
                  <TRHeaderRow>Completion Time</TRHeaderRow>
                  <TRHeaderRow>Hash</TRHeaderRow>
                </TRHeader>
              </TRHeaderWrapper>
              <TRItemWrapper>
                {txData.map((tx,idx)=>{
                  const completion = changeDateFormat(tx.completion);
                  const hash = convertTransactionHash(tx.hash, hashLength);
                  const url = `${EXPLORER_TRANSACTION}/${tx.hash}`;

                  return (
                    <TRItem key={idx}>
                      <TRItemRow style={{fontSize: fontSize}}>{`#${tx.count}`}</TRItemRow>
                      <TRItemRow style={{fontSize: fontSize}}>{completion}</TRItemRow>
                      <TRItemRow
                        style={{color: '#50b5ff', fontSize: fontSize}}
                        onClick={() => {
                          if (tx.hash !== '') {
                            window.open(url)
                          }
                        }}>
                          {hash}
                      </TRItemRow>
                    </TRItem>
                  )
                })}
              </TRItemWrapper>
            </TransactionContainer>
          </ModalContainer>
        </ModalInner>
      </ModalWrapper>
    </>
  );
}

export default React.memo(Modal);