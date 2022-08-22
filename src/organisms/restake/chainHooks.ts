import { useEffect, useState } from "react";
import { useChainDataQuery } from "../../apollo/graphqls";
import { DENOM } from "../../config";
import { convertDisitNumber } from "../../utils/convert";

export interface IChainData {
  height: number;
  inflation: number;
  supply: number;
  bonded: number;
  blocksPerYear: number;
  avgBlockPerDay: number;
}

export const useChainData = () => {
  const [chainData, setChainData] = useState<IChainData>({
    height: 0,
    inflation: 0,
    supply: 0,
    bonded: 0,
    blocksPerYear: 0,
    avgBlockPerDay: 0
  });

  useChainDataQuery({
    onCompleted: (data) => {
      let height: number = 0;
      let inflation: number = 0;
      let supply: number = 0;
      let bonded: number = 0;
      let blocksPerYear: number = 0;
      let avgBlockPerDay: number = 0;

      // Block Height
      if (data.block.length !== 0) {
        height = data.block[0].height;
      }

      if (data.inflation.length !== 0) {
        inflation = data.inflation[0].value;
      }

      if (data.supply.length !== 0) {
        supply = convertDisitNumber(data.supply[0].coins.filter((data: any) => data.denom === DENOM)[0].amount, 2);
      }

      if (data.staking_pool.length !== 0) {
        bonded = convertDisitNumber(data.staking_pool[0].bonded_tokens, 0);
      }

      if (data.mint_params.length !== 0) {
        blocksPerYear = parseFloat(data.mint_params[0].params);
      }

      if (data.average_block_time_per_day.length !== 0) {
        avgBlockPerDay = parseFloat(data.average_block_time_per_day[0].average_time);
      }
      
      setChainData({
        height,
        inflation,
        supply,
        bonded,
        blocksPerYear,
        avgBlockPerDay
      });
    }
  });

  return {
    chainData
  }
}