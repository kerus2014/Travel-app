import { useGetInfoQuery } from "../reduxTools/requests";

export const useRate = () =>{
  const { data } = useGetInfoQuery();
  const currency = data? data[0].currency.toUpperCase(): "BYN";
  
  
    
}