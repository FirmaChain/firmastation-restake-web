import { calcAPR } from "../src/utils/apr";
import { IChainData } from "../src/organisms/restake/chainHooks";

interface IProps {
  chainData: IChainData
}

export default function Preview({ chainData }: IProps) {
  let latestBlock = chainData.height;
  let supply = chainData.supply;
  let inflationRate = chainData.inflation;
  let blocksPerYear = chainData.blocksPerYear;
  let bonded = chainData.bonded;
  let avgBlockPerDay = chainData.avgBlockPerDay;

  let apr = calcAPR(supply, inflationRate, blocksPerYear, bonded, avgBlockPerDay);

  return (
    {/* <PreviewComponentStyle>
      <PreviewBoxStyle>
        <PreviewContentsStyle>{latestBlock}</PreviewContentsStyle>
        <PreviewContentsStyle>{supply}</PreviewContentsStyle>
        <PreviewContentsStyle>{apr}</PreviewContentsStyle>
      </PreviewBoxStyle>
    </PreviewComponentStyle> */}
  )
}