import { useEffect, useState } from "react";
import { RESTAKE_API, STATUS_API_INTERVAL } from "../../config";
import { AxiosInstance } from "../../utils/axiosInstance";
import { useInterval } from "../../utils/interval";
import { IRestakeState } from "./interfaces";

export const useRestakeData = () => {
  const [restakeData, setRestakeData] = useState<IRestakeState>({
    round: 0,
    feesAmount: 0,
    restakeAmount: 0,
    restakeCount: 0,
    restakeAvgTime: 0,
    nextRoundDateTime: '2022-01-01T00:00:00.000Z',
    roundDatas: []
  });

  const axiosInstance = AxiosInstance(RESTAKE_API.URI);
  useEffect(() => {
    axiosInstance.get(RESTAKE_API.GET_STATUS).then((response)=>{
      let data = response.data;

      if(data !== restakeData){
        setRestakeData(response.data);
      }
    }).catch((e)=>{console.log(e)})
  }, []);

  useInterval(async () => {
      try {
        const response = await axiosInstance.get(RESTAKE_API.GET_STATUS);
        let data = response.data;
  
        if(data !== restakeData){
          setRestakeData(response.data);
        }
      } catch (e) {
        console.log(e);
      }
  }, STATUS_API_INTERVAL);

  return {
    restakeData
  };
}