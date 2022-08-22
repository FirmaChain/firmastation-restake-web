import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

interface IQueryParam {
  onCompleted: (data: any) => void;
}

export const useChainDataQuery = ({ onCompleted }: IQueryParam) => {
  return useQuery(
    gql`
      query {
        block(order_by: {height: desc}, limit: 1) {
          height
        }
        inflation {
          value
        }
        supply(order_by: {height: desc}, limit: 1) {
          coins
        }
        staking_pool {
          bonded_tokens
        }
        mint_params {
          params(path: "blocks_per_year")
        }
        average_block_time_per_day {
          average_time
        }
      }
    `,
    { onCompleted, pollInterval: 5000, notifyOnNetworkStatusChange: true }
  );
};