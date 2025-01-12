import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconFile: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3929 4.05389L14.8912 4.61136L15.3929 4.05389ZM19.3517 7.61679L18.85 8.17426L19.3517 7.61679ZM21.654 10.1543L20.9689 10.4595V10.4595L21.654 10.1543ZM3.17157 20.8287L3.7019 20.2983H3.7019L3.17157 20.8287ZM20.8284 20.8287L20.2981 20.2983L20.2981 20.2983L20.8284 20.8287ZM14 21.2502H10V22.7502H14V21.2502ZM2.75 14.0002V10.0002H1.25V14.0002H2.75ZM21.25 13.5631V14.0002H22.75V13.5631H21.25ZM14.8912 4.61136L18.85 8.17426L19.8534 7.05932L15.8947 3.49642L14.8912 4.61136ZM22.75 13.5631C22.75 11.8748 22.7651 10.8058 22.3391 9.84921L20.9689 10.4595C21.2349 11.0567 21.25 11.7423 21.25 13.5631H22.75ZM18.85 8.17426C20.2034 9.39235 20.7029 9.86224 20.9689 10.4595L22.3391 9.84921C21.9131 8.89265 21.1084 8.18877 19.8534 7.05932L18.85 8.17426ZM10.0298 2.75024C11.6116 2.75024 12.2085 2.76182 12.7405 2.96598L13.2779 1.56555C12.4261 1.23867 11.498 1.25024 10.0298 1.25024V2.75024ZM15.8947 3.49642C14.8087 2.51903 14.1297 1.89239 13.2779 1.56555L12.7405 2.96598C13.2727 3.17017 13.7215 3.55861 14.8912 4.61136L15.8947 3.49642ZM10 21.2502C8.09318 21.2502 6.73851 21.2487 5.71085 21.1105C4.70476 20.9752 4.12511 20.7215 3.7019 20.2983L2.64124 21.359C3.38961 22.1074 4.33855 22.4395 5.51098 22.5971C6.66182 22.7518 8.13558 22.7502 10 22.7502V21.2502ZM1.25 14.0002C1.25 15.8647 1.24841 17.3384 1.40313 18.4893C1.56076 19.6617 1.89288 20.6106 2.64124 21.359L3.7019 20.2983C3.27869 19.8751 3.02502 19.2955 2.88976 18.2894C2.75159 17.2617 2.75 15.9071 2.75 14.0002H1.25ZM14 22.7502C15.8644 22.7502 17.3382 22.7518 18.489 22.5971C19.6614 22.4395 20.6104 22.1074 21.3588 21.359L20.2981 20.2983C19.8749 20.7215 19.2952 20.9752 18.2892 21.1105C17.2615 21.2487 15.9068 21.2502 14 21.2502V22.7502ZM21.25 14.0002C21.25 15.9071 21.2484 17.2617 21.1102 18.2894C20.975 19.2955 20.7213 19.8751 20.2981 20.2983L21.3588 21.359C22.1071 20.6106 22.4392 19.6617 22.5969 18.4893C22.7516 17.3384 22.75 15.8647 22.75 14.0002H21.25ZM2.75 10.0002C2.75 8.09342 2.75159 6.73876 2.88976 5.71109C3.02502 4.705 3.27869 4.12536 3.7019 3.70215L2.64124 2.64149C1.89288 3.38985 1.56076 4.3388 1.40313 5.51122C1.24841 6.66207 1.25 8.13583 1.25 10.0002H2.75ZM10.0298 1.25024C8.15538 1.25024 6.67442 1.24866 5.51887 1.40332C4.34232 1.56078 3.39019 1.89254 2.64124 2.64149L3.7019 3.70215C4.12453 3.27952 4.70596 3.02549 5.71785 2.89006C6.75075 2.75182 8.11311 2.75024 10.0298 2.75024V1.25024Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M13 2.50024V5.00024C13 7.35727 13 8.53578 13.7322 9.26801C14.4645 10.0002 15.643 10.0002 18 10.0002H22" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.5" : "1"}><path fillRule="evenodd" clipRule="evenodd" d="M14 22.0002H10C6.22876 22.0002 4.34315 22.0002 3.17157 20.8287C2 19.6571 2 17.7715 2 14.0002V10.0002C2 6.22901 2 4.34339 3.17157 3.17182C4.34315 2.00024 6.23869 2.00024 10.0298 2.00024C10.6358 2.00024 11.1214 2.00024 11.53 2.01691C11.5166 2.09684 11.5095 2.17837 11.5092 2.26081L11.5 5.09521C11.4999 6.19232 11.4998 7.16189 11.6049 7.9434C11.7188 8.79052 11.9803 9.63751 12.6716 10.3288C13.3628 11.02 14.2098 11.2816 15.0569 11.3954C15.8385 11.5005 16.808 11.5004 17.9051 11.5004L18 11.5004H21.9574C22 12.0346 22 12.6903 22 13.5631V14.0002C22 17.7715 22 19.6571 20.8284 20.8287C19.6569 22.0002 17.7712 22.0002 14 22.0002Z" fill="currentColor" /></g><path d="M11.5092 2.26034L11.5 5.09474C11.4999 6.19184 11.4998 7.16142 11.6049 7.94293C11.7188 8.79005 11.9803 9.63704 12.6716 10.3283C13.3629 11.0196 14.2098 11.2811 15.057 11.395C15.8385 11.5 16.808 11.5 17.9051 11.4999L21.9574 11.4999C21.9698 11.6554 21.9786 11.8213 21.9848 11.9998H22C22 11.7323 22 11.5985 21.9901 11.4411C21.9335 10.5465 21.5617 9.52149 21.0315 8.79877C20.9382 8.67155 20.8743 8.59517 20.7467 8.44243C19.9542 7.49383 18.911 6.31217 18 5.49978C17.1892 4.7767 16.0787 3.98561 15.1101 3.33874C14.2781 2.78299 13.862 2.50511 13.2915 2.29858C13.1403 2.24383 12.9408 2.18335 12.7846 2.1449C12.4006 2.05038 12.0268 2.0175 11.5 2.0061L11.5092 2.26034Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M14 22.0002H10C6.22876 22.0002 4.34315 22.0002 3.17157 20.8287C2 19.6571 2 17.7715 2 14.0002V10.0002C2 6.22901 2 4.34339 3.17157 3.17182C4.34315 2.00024 6.23869 2.00024 10.0298 2.00024C10.6358 2.00024 11.1214 2.00024 11.53 2.01691C11.5166 2.09684 11.5095 2.17837 11.5092 2.26081L11.5 5.09521C11.4999 6.19232 11.4998 7.16189 11.6049 7.9434C11.7188 8.79052 11.9803 9.63751 12.6716 10.3288C13.3628 11.02 14.2098 11.2816 15.0569 11.3954C15.8385 11.5005 16.808 11.5004 17.9051 11.5004L18 11.5004H21.9574C22 12.0346 22 12.6903 22 13.5631V14.0002C22 17.7715 22 19.6571 20.8284 20.8287C19.6569 22.0002 17.7712 22.0002 14 22.0002Z" fill="currentColor" /><path d="M19.3517 7.6169L15.3929 4.054C14.2651 3.03892 13.7012 2.53139 13.0092 2.26587L13 5.00035C13 7.35737 13 8.53588 13.7322 9.26812C14.4645 10.0004 15.643 10.0004 18 10.0004H21.5801C21.2175 9.29613 20.5684 8.71189 19.3517 7.6169Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconFile;