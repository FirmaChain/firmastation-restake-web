export interface IRestakeState {
  round: number;
  feesAmount: number;
  restakeAmount: number;
  restakeCount: number;
  nextRoundDateTime: string;
  roundDatas: IRoundData[]
}

export interface IRoundData {
  round: number;
  feesAmount: number;
  restakeAmount: number;
  restakeCount: number;
  startDateTime: string;
  roundDetails: IRoundDetail[];
}

export interface IRoundDetail {
  txHash: string;
  feesAmount: number;
  restakeAmount: number;
  restakeCount: number;
  dateTime: string;
}

export interface IRoundTimeInfo {
  diffTime: number;
  startDateTime: string;
  endDateTime: string;
}

export interface IModalTxHashData {
  count: number,
  completion: string,
  hash: string
}