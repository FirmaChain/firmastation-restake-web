export const calcAPR = (supply: number, inflationRate: number, blocksPerYear: number, bonded: number, avgBlockPerDay: number) => {
  const mintingPerYear = supply * inflationRate;
  const createBlockPerYear = (86400 * 365) / avgBlockPerDay;
  const miningPerBlock = mintingPerYear / blocksPerYear;
  const realMiningPerYear = createBlockPerYear * miningPerBlock;
  const totalApr = realMiningPerYear / bonded;
  const apr = totalApr * 0.97;

  return apr;
}