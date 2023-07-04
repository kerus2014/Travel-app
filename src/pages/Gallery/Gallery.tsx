import { ToFormButton } from './../../components/buttons/toFormButton/ToFormButton';
import { HomeBlockTemplate } from "../../components/HomeBlockTemplate";
import styles from "./Gallery.module.scss";
import ImageViewer from 'react-simple-image-viewer';
import React, { useState, useCallback } from 'react';
import { useGetGalleryQuery } from "../../reduxTools/requests";
import { ArrowPrev } from "../../assets/icons/ArrowPrev";
import { ArrowNext } from "../../assets/icons/ArrowNext";
import { BeatLoader } from "react-spinners";

export const Gallery = () => {
  const { data } = useGetGalleryQuery();
  const [value, setValue] = useState("");
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index:number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  let photosData:string[] = []
  if (!value && data){
    data[0].photos.map ((el) => photosData.push(el)) 
  } else {
  data && data.map((el) => {
    
    if (value == el.title){
      el.photos.map((el) => photosData.push(el))
    }
  })} 
  console.log(data);
  console.log(value);
  
  

  return (
    <>
      <div className={styles.header}></div>
      <HomeBlockTemplate title="Наша галерея">
        <div className={styles["tabs-grid"]}>
          {data && data.map((el) => {
            return (
              <div key={el.id} className={value == el.title ? `${styles["tab-item"]} ${styles.active}` : styles["tab-item"]} onClick={() => setValue(el.title)}>{el.title}</div>
            )
          })}
        </div>

        <div className={styles["images-grid"]}>
          {photosData ? photosData.map((src:string,index:number) => {
            return(
              <div key={index.toString()} onClick={ () => openImageViewer(index) } className={styles.image}>
                <img src={src} alt=""/>
              </div>
              )
            })
          :
          <div className={styles.preload}>
            <BeatLoader color="#583711" />
          </div>
          }
        </div>

      </HomeBlockTemplate>
      <ToFormButton className={styles.form}/>
      {isViewerOpen && (
        <div className={styles["image-viewer"]}>
          <div className={styles["photo-view"]}>
            <img src={photosData[currentImage]} alt="" />
            <ArrowPrev 
              onClick={() => {
                if(currentImage > 0){
                  setCurrentImage(prev => --prev) 
                }
              }
            }
              className={styles["arrow-prev"]}
            />
            <ArrowNext onClick={() => {
              if(currentImage < photosData.length-1){
                setCurrentImage(prev => ++prev)
              }
              }
            }  
              className={styles["arrow-next"]}
            />
          </div>
          <div onClick={() => setIsViewerOpen(false)} className={styles["close"]}>&#10006;</div>
        </div>
      )
      }
    </>
  );
};
