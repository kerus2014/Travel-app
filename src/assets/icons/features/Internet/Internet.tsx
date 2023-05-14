import { ContainerForFeatures } from "../ContainerForFeatures"

interface IProps{
  littleIcon?:boolean;
}

export const Internet = (props:IProps) => {
  return(
    <ContainerForFeatures littleIcon={props.littleIcon}>
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.9457 19.6056C14.9457 20.9561 13.8528 22.0489 12.5023 22.0489C11.1516 22.0489 10.0586 20.9561 10.0586 19.6056C10.0586 18.2547 11.1516 17.1619 12.5023 17.1619C13.8527 17.1619 14.9457 18.2547 14.9457 19.6056ZM6.8773 14.9017L8.75071 16.4725C10.6192 14.2409 14.3897 14.2409 16.2558 16.4743L18.1316 14.9087C16.7308 13.234 14.6785 12.2745 12.5022 12.2745C10.3257 12.2745 8.27593 13.2315 6.8773 14.9017ZM3.44602 11.4012L5.25723 13.0431C7.10663 11.0003 9.74588 9.83105 12.5023 9.83105C15.2564 9.83105 17.8956 11.0003 19.7452 13.0382L21.5541 11.3963C19.2412 8.84764 15.943 7.38736 12.5023 7.38736C9.05869 7.38728 5.75828 8.85248 3.44602 11.4012ZM0 7.92919L1.78486 9.59728C4.5482 6.64022 8.4549 4.94352 12.5022 4.94352C16.6094 4.94352 20.413 6.5951 23.2147 9.59237L24.9999 7.92169C21.7781 4.47607 17.2223 2.5 12.5021 2.5C7.77948 2.5 3.22394 4.47833 0 7.92919Z" fill="#3F260A"/>
      </svg>
    </ContainerForFeatures>
  )
}