import React, { useEffect, useState } from "react";
import theme from "../../themes";
import { calcAPR } from "../../utils/apr";
import { convertNumberFormat, isValid } from "../../utils/common";
import { IChainData } from "../restake/chainHooks";
import { ChainInfoCard, ChainInfoContentTypo, ChainInfoDataWrap, ChainInfoText, ChainInfoTextWrap, ChainInfoTypo, ChainDescription } from "./styles";

interface IProps {
  avgRestakeTime: string,
  chainState: IChainData
}

const Chain = ({ avgRestakeTime, chainState }: IProps) => {
  const [chainData, setChainData] = useState([
    { name: 'Latest Block', value: '0', color: theme.colors.defaultBalance, decimal: '' },
    { name: 'Supply', value: '0', color: theme.colors.defaultBalance, decimal: 'FCT' },
    { name: 'APR', value: '0', color: theme.colors.defaultBalance, decimal: '%' },
    { name: 'Average Restake Time', value: '0', color: theme.colors.defaultBalance, decimal: 's' },
  ]);

  useEffect(() => {
    if (isValid(chainState)) {
      let data = [...chainData];

      const height = chainState.height;
      const supply = chainState.supply;
      const inflationRate = chainState.inflation;
      const blocksPerYear = chainState.blocksPerYear;
      const bonded = chainState.bonded;
      const avgBlockPerDay = chainState.avgBlockPerDay;
      const apr = calcAPR(supply, inflationRate, blocksPerYear, bonded, avgBlockPerDay);
      const aprPercent = `${apr.toFixed(2)}`;

      data[0].value = convertNumberFormat(height, 0);
      data[1].value = convertNumberFormat(supply, 0);
      data[2].value = aprPercent;
      data[3].value = `${avgRestakeTime}`;

      setChainData(data);
    }
  }, [chainState, avgRestakeTime]);

  return (
    <ChainInfoCard>
      <ChainInfoText>Info</ChainInfoText>
      <ChainInfoDataWrap>
        {chainData.map((data, idx) => {
          return (
            <ChainInfoTextWrap key={idx}>
              <ChainInfoTypo>
                {data.name}{' '}
              </ChainInfoTypo>
              <ChainInfoContentTypo>
                {data.value}<span style={{ fontSize: '13px', color: '#999' }}>{` ${data.decimal}`}</span>
              </ChainInfoContentTypo>
            </ChainInfoTextWrap>
          ) 
        })}
      </ChainInfoDataWrap>
      <ChainDescription>(Last 10 rounds)</ChainDescription>
    </ChainInfoCard>
  );
};

export default React.memo(Chain);