import { useParams } from "react-router";
import { useGetEntertainmentsCurrentQuery } from "../../reduxTools/requests/apiRequests";
import { HomeBlockTemplate } from "../../components/HomeBlockTemplate";
import { MyGallery } from "../../components/ImageGalleryCarousel";
import styles from "./EntertainmentCurrent.module.scss";
import { FaceBlock } from "../../components/FaceBlock";
import { Container } from "../../components/Container";
import { BeatLoader } from "react-spinners";
import { ToFormButton } from './../../components/buttons/toFormButton/ToFormButton';
import {useDatas} from "../../services/useDatas";
import {useRate} from "../../services/useRate";
import React from "react";

const EntertainmentCurrent = () => {
  const { id } = useParams();
  const { data } = useGetEntertainmentsCurrentQuery(id!);
  const datas = useDatas();
  const rate = useRate();
  const {titleEntertainment, entertainments_back} = datas;
  const {cur_rate, cur_scale } = rate;

  if (!data) return(
    <div className={styles.preload}><BeatLoader color="#583711" /></div>
    )
  
  const price =  data.prices&&data.prices[0] ? 
  (data.prices.map((el,index) => {
    for (let key in el){
      return (
        <React.Fragment key = {key}>
        <div >{key}</div>
          <div>{(el[key]/ cur_scale * cur_rate).toFixed(0)} BYN</div>
        </React.Fragment>
      
      )
    }
  })) : <div >бесплатно</div>
  
  return (
    <>
      <FaceBlock title={titleEntertainment} image={entertainments_back}/>
      <Container className={styles.card}>
        <p className={styles.title}>
          {data.title}
        </p>
        <div className={styles.sliderContainer}>
          {
            data.photos
          ?
            <MyGallery images={data.photos} thubnailPosition="right" />
          :
            null
          }
        </div>
        <div className={styles.info}>
          <p>
            {data.description_long}
          </p>
          <h1>Цены </h1>
          <hr className={styles.line} />
          <div className={styles.grid}>
            {/* {
              data.prices && data.prices.map((el,index) => {
                for (let key in el){
                  return (
                    <>
                    <div >{key}</div>
                      <div>{(el[key]/ cur_scale * cur_rate).toFixed(0)}</div>
                    </>
                  
                  )
                }
              })
            } */}
            {price}
          </div>
        </div>
      </Container>
      <ToFormButton/>
    </>
    
  );
};

export default EntertainmentCurrent;
