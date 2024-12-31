import { FC } from 'react';
import { IconProps } from "@/types";

const IconAirplaneSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.34" : "1"} d="M9.85953 19.0002L11.5395 17.5802C11.7895 17.3702 12.2095 17.3702 12.4695 17.5802L14.1395 19.0002C14.5295 19.2002 15.0095 19.0002 15.1495 18.5802L15.4695 17.6202C15.5495 17.3902 15.4695 17.0502 15.2995 16.8802L13.6595 15.2302C13.5395 15.1102 13.4495 14.8802 13.4495 14.7202V12.8702C13.4495 12.4502 13.7595 12.2502 14.1495 12.4102L17.4995 13.8502C18.0495 14.0902 18.5095 13.7902 18.5095 13.1902V12.2602C18.5095 11.7802 18.1495 11.2202 17.6995 11.0302L13.7595 9.33023C13.5895 9.26023 13.4595 9.05023 13.4595 8.87023V6.80023C13.4595 6.12023 12.9595 5.32023 12.3595 5.01023C12.1395 4.90023 11.8895 4.90023 11.6695 5.01023C11.0595 5.31023 10.5695 6.12023 10.5695 6.80023V8.87023C10.5695 9.05023 10.4295 9.26023 10.2695 9.33023L6.32953 11.0302C5.88953 11.2202 5.51953 11.7802 5.51953 12.2602V13.1902C5.51953 13.7902 5.96953 14.0902 6.52953 13.8502L9.87953 12.4102C10.2595 12.2402 10.5795 12.4502 10.5795 12.8702V14.7202C10.5795 14.8902 10.4795 15.1202 10.3695 15.2302L8.69953 16.8702C8.52953 17.0402 8.44953 17.3802 8.52953 17.6102L8.84953 18.5702C8.98953 19.0002 9.45953 19.2002 9.85953 19.0002Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M9.85953 19L11.5395 17.58C11.7895 17.37 12.2095 17.37 12.4695 17.58L14.1395 19C14.5295 19.2 15.0095 19 15.1495 18.58L15.4695 17.62C15.5495 17.39 15.4695 17.05 15.2995 16.88L13.6595 15.23C13.5395 15.11 13.4495 14.88 13.4495 14.72V12.87C13.4495 12.45 13.7595 12.25 14.1495 12.41L17.4995 13.85C18.0495 14.09 18.5095 13.79 18.5095 13.19V12.26C18.5095 11.78 18.1495 11.22 17.6995 11.03L13.7595 9.32999C13.5895 9.25999 13.4595 9.04999 13.4595 8.86999V6.79999C13.4595 6.11999 12.9595 5.31999 12.3595 5.00999C12.1395 4.89999 11.8895 4.89999 11.6695 5.00999C11.0595 5.30999 10.5695 6.11999 10.5695 6.79999V8.86999C10.5695 9.04999 10.4295 9.25999 10.2695 9.32999L6.32953 11.03C5.88953 11.22 5.51953 11.78 5.51953 12.26V13.19C5.51953 13.79 5.96953 14.09 6.52953 13.85L9.87953 12.41C10.2595 12.24 10.5795 12.45 10.5795 12.87V14.72C10.5795 14.89 10.4795 15.12 10.3695 15.23L8.69953 16.87C8.52953 17.04 8.44953 17.38 8.52953 17.61L8.84953 18.57C8.98953 19 9.45953 19.2 9.85953 19Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconAirplaneSquare;