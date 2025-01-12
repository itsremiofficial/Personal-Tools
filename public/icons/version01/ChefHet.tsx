import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconChefHet: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 18.0001H19.75H19ZM5 14.5841H5.75C5.75 14.286 5.57345 14.0162 5.30028 13.8968L5 14.5841ZM19 14.5841L18.6997 13.8968C18.4265 14.0162 18.25 14.286 18.25 14.5841H19ZM15.75 7.00012C15.75 7.41434 16.0858 7.75012 16.5 7.75012C16.9142 7.75012 17.25 7.41434 17.25 7.00012H15.75ZM6.75 7.00012C6.75 7.41434 7.08579 7.75012 7.5 7.75012C7.91421 7.75012 8.25 7.41434 8.25 7.00012H6.75ZM7 4.25012C3.82436 4.25012 1.25 6.82448 1.25 10.0001H2.75C2.75 7.65291 4.65279 5.75012 7 5.75012V4.25012ZM17 5.75012C19.3472 5.75012 21.25 7.65291 21.25 10.0001H22.75C22.75 6.82448 20.1756 4.25012 17 4.25012V5.75012ZM15 21.2501H9V22.7501H15V21.2501ZM9 21.2501C8.03599 21.2501 7.38843 21.2485 6.90539 21.1836C6.44393 21.1215 6.24643 21.0143 6.11612 20.884L5.05546 21.9447C5.51093 22.4001 6.07773 22.5858 6.70552 22.6702C7.31174 22.7517 8.07839 22.7501 9 22.7501V21.2501ZM4.25 18.0001C4.25 18.9217 4.24841 19.6884 4.32991 20.2946C4.41432 20.9224 4.59999 21.4892 5.05546 21.9447L6.11612 20.884C5.9858 20.7537 5.87858 20.5562 5.81654 20.0947C5.75159 19.6117 5.75 18.9641 5.75 18.0001H4.25ZM18.25 18.0001C18.25 18.9641 18.2484 19.6117 18.1835 20.0947C18.1214 20.5562 18.0142 20.7537 17.8839 20.884L18.9445 21.9447C19.4 21.4892 19.5857 20.9224 19.6701 20.2946C19.7516 19.6884 19.75 18.9217 19.75 18.0001H18.25ZM15 22.7501C15.9216 22.7501 16.6883 22.7517 17.2945 22.6702C17.9223 22.5858 18.4891 22.4001 18.9445 21.9447L17.8839 20.884C17.7536 21.0143 17.5561 21.1215 17.0946 21.1836C16.6116 21.2485 15.964 21.2501 15 21.2501V22.7501ZM7 5.75012C7.2137 5.75012 7.42326 5.76583 7.6277 5.79605L7.84703 4.31217C7.57021 4.27126 7.28734 4.25012 7 4.25012V5.75012ZM12 1.25012C9.68949 1.25012 7.72942 2.74222 7.02709 4.81325L8.44763 5.29498C8.94981 3.81414 10.3516 2.75012 12 2.75012V1.25012ZM7.02709 4.81325C6.84722 5.34364 6.75 5.9113 6.75 6.50012H8.25C8.25 6.07727 8.3197 5.67224 8.44763 5.29498L7.02709 4.81325ZM17 4.25012C16.7127 4.25012 16.4298 4.27126 16.153 4.31217L16.3723 5.79605C16.5767 5.76583 16.7863 5.75012 17 5.75012V4.25012ZM12 2.75012C13.6484 2.75012 15.0502 3.81414 15.5524 5.29498L16.9729 4.81325C16.2706 2.74222 14.3105 1.25012 12 1.25012V2.75012ZM15.5524 5.29498C15.6803 5.67224 15.75 6.07727 15.75 6.50012H17.25C17.25 5.9113 17.1528 5.34364 16.9729 4.81325L15.5524 5.29498ZM5.75 18.0001V14.5841H4.25V18.0001H5.75ZM5.30028 13.8968C3.79769 13.2403 2.75 11.7417 2.75 10.0001H1.25C1.25 12.3592 2.6705 14.3847 4.69972 15.2713L5.30028 13.8968ZM18.25 14.5841L18.25 18.0001H19.75L19.75 14.5841H18.25ZM21.25 10.0001C21.25 11.7417 20.2023 13.2403 18.6997 13.8968L19.3003 15.2713C21.3295 14.3847 22.75 12.3592 22.75 10.0001H21.25ZM15.75 6.50012V7.00012H17.25V6.50012H15.75ZM6.75 6.50012V7.00012H8.25V6.50012H6.75Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M5 18.0001H19" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.9983 18.0001H5.00168C5.01187 19.3971 5.08342 20.912 5.58577 21.4143C6.17156 22.0001 7.11437 22.0001 8.99999 22.0001H15C16.8856 22.0001 17.8284 22.0001 18.4142 21.4143C18.9166 20.912 18.9881 19.3971 18.9983 18.0001Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M7 5.00012C4.23858 5.00012 2 7.2387 2 10.0001C2 12.0504 3.2341 13.8125 5 14.5841V18.0001H19L19 14.5841C20.7659 13.8125 22 12.0504 22 10.0001C22 7.2387 19.7614 5.00012 17 5.00012C16.7495 5.00012 16.5033 5.01855 16.2626 5.05411C15.6604 3.27818 13.9794 2.00012 12 2.00012C10.0206 2.00012 8.33961 3.27818 7.73736 5.05411C7.49673 5.01855 7.25052 5.00012 7 5.00012Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.00012C4.23858 5.00012 2 7.2387 2 10.0001C2 12.0504 3.2341 13.8125 5 14.5841V17.2501H19L19 14.5841C20.7659 13.8125 22 12.0504 22 10.0001C22 7.2387 19.7614 5.00012 17 5.00012C16.7495 5.00012 16.5033 5.01855 16.2626 5.05411C15.6604 3.27818 13.9794 2.00012 12 2.00012C10.0206 2.00012 8.33961 3.27818 7.73736 5.05411C7.49673 5.01855 7.25052 5.00012 7 5.00012Z" fill="currentColor" /><path d="M18.9983 18.7501H5.00169C5.01188 20.1471 5.08343 20.912 5.58579 21.4143C6.17157 22.0001 7.11438 22.0001 9 22.0001H15C16.8856 22.0001 17.8284 22.0001 18.4142 21.4143C18.9166 20.912 18.9881 20.1471 18.9983 18.7501Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconChefHet;