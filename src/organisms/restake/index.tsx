import React, { useEffect, useState } from "react";

import { RestakeContentTypo, RestakeContentTypoSymbol, RestakeContentTypoValue, RestakeContentTypoWrapper, RestakeTextWrap, RestakeTitleTypo, RestakeWrap } from "./styles";
import theme from "../../themes";
import { isValid } from "../../utils/common";
import { ITotalRestakeState } from "../../pages/main";

interface IProps {
  totalRestakeState: ITotalRestakeState;
}

const numberWithCommas = (x:string) =>{
  return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Restake = ({ totalRestakeState }: IProps) => {
  const [restakeData, setRestakeData] = useState([
    { name: 'Round', value: 0, color: theme.colors.defaultBalance },
    { name: 'Cumulative Amount', value: '0', color: theme.colors.defaultBalance },
    { name: 'Cumulative Fee', value: '0', color: theme.colors.defaultBalance },
    { name: 'Cumulative Count', value: 0, color: theme.colors.defaultBalance },
  ]);

  useEffect(() => {
    if (isValid(totalRestakeState)) {
      let strRestakeAmount = '';
      let strFeesAmount = '';
      let nRestakeAmount = Number(Number(totalRestakeState.restakeAmount.toString()) / Math.pow(10, 6));
      let nFeesAmount = Number(Number(totalRestakeState.feesAmount.toString()) / Math.pow(10, 6));

      if (nRestakeAmount < 100) {
        strRestakeAmount = nRestakeAmount.toFixed(2);
      } else {
        strRestakeAmount = nRestakeAmount.toFixed(0);
      }

      if (nFeesAmount < 100) {
        strFeesAmount = nFeesAmount.toFixed(2);
      } else {
        strFeesAmount = nFeesAmount.toFixed(0);
      }

      let data = [...restakeData];
      data[0].value = totalRestakeState.round;
      data[1].value = strRestakeAmount;
      data[2].value = strFeesAmount;
      data[3].value = totalRestakeState.restakeCount;
      setRestakeData(data);
    }
  }, [totalRestakeState]);

  return (
    <RestakeWrap>
      <RestakeTextWrap>
        <RestakeTitleTypo>Current Round</RestakeTitleTypo>
        <RestakeContentTypoWrapper>
          <RestakeContentTypo>{restakeData[0].value}</RestakeContentTypo>
        </RestakeContentTypoWrapper>
      </RestakeTextWrap>

      <RestakeTextWrap>
        <RestakeTitleTypo>Cumulative Amount</RestakeTitleTypo>
        <RestakeContentTypoWrapper>
          <RestakeContentTypoValue>{restakeData[1].value}</RestakeContentTypoValue>
          <RestakeContentTypoSymbol> FCT</RestakeContentTypoSymbol>
        </RestakeContentTypoWrapper>
        {/* <RestakeContentTypo>{restakeData[1].value}</RestakeContentTypo> */}
      </RestakeTextWrap>

      <RestakeTextWrap>
        <RestakeTitleTypo>Cumulative Fee</RestakeTitleTypo>
        <RestakeContentTypoWrapper>
          <RestakeContentTypoValue>{restakeData[2].value}</RestakeContentTypoValue>
          <RestakeContentTypoSymbol> FCT</RestakeContentTypoSymbol>
        </RestakeContentTypoWrapper>
      </RestakeTextWrap>

      <RestakeTextWrap>
        <RestakeTitleTypo>Cumulative Count</RestakeTitleTypo>
        <RestakeContentTypoWrapper>
          <RestakeContentTypo>{numberWithCommas(restakeData[3].value.toString())}</RestakeContentTypo>
        </RestakeContentTypoWrapper>
      </RestakeTextWrap>
    </RestakeWrap>
  );
};

export default React.memo(Restake);