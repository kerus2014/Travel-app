import { useGetInfoQuery } from "../reduxTools/requests/apiRequests";
import { useGetRateQuery } from "../reduxTools/requests/apiRate";

export const  useRate = () =>{
  const { data } = useGetInfoQuery();
  const currency = data? data[0].currency.toUpperCase(): "";
  const { data:rate } = useGetRateQuery(currency);  
  const answer = rate ? {
    cur_scale:rate?.Cur_Scale,
    cur_rate: rate?.Cur_OfficialRate
  } : {
    cur_scale: 1,
    cur_rate: 1
  }
  return answer
    
}