import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconRunningRound: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18.5" cy="4.50049" r="2.5" stroke="currentColor" strokeWidth={width} /><path d="M14.4 22.0006V21.1955C14.4 21.1177 14.4 21.0788 14.3996 21.0419C14.377 18.9025 13.3773 16.891 11.6857 15.5811C11.6565 15.5585 11.6255 15.535 11.5635 15.488C11.5235 15.4578 11.5035 15.4426 11.4877 15.4301C10.5309 14.6745 10.467 13.2461 11.3524 12.408C11.367 12.3942 11.3857 12.3772 11.4227 12.3436L12.4628 11.3981C14.0898 9.91895 13.5945 7.24518 11.5457 6.44693C10.8122 6.16117 9.99522 6.17914 9.27504 6.49686L8.75335 6.72702C8.21393 6.965 7.94422 7.08399 7.68074 7.21477C7.24267 7.43221 6.81722 7.6742 6.40642 7.93959C6.15935 8.0992 5.91922 8.2702 5.43897 8.6122L4 9.63692" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M9 17.0005L8.74064 17.3117C7.32089 19.0154 5.21773 20.0005 3 20.0005" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M16 12.0005C17.3131 12.3288 18.6869 12.3288 20 12.0005" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.0001 4.50049C21.0001 5.8812 19.8808 7.00049 18.5001 7.00049C17.1193 7.00049 16.0001 5.8812 16.0001 4.50049C16.0001 3.11978 17.1193 2.00049 18.5001 2.00049C19.8808 2.00049 21.0001 3.11978 21.0001 4.50049Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M8.97237 5.81061C9.87492 5.41242 10.8988 5.38991 11.818 5.74803C14.3857 6.74842 15.0063 10.0993 12.9673 11.9529L11.9273 12.8984C11.8874 12.9347 11.8757 12.9454 11.868 12.9526C11.3146 13.4764 11.3546 14.3692 11.9526 14.8415C11.9609 14.848 11.9736 14.8577 12.0164 14.8902L12.0199 14.8927C12.0785 14.9371 12.1125 14.9629 12.145 14.9881C14.0178 16.4383 15.1246 18.6653 15.1496 21.0339C15.1501 21.0749 15.1501 21.1175 15.1501 21.1907V22.0005C15.1501 22.4147 14.8143 22.7505 14.4001 22.7505C13.9858 22.7505 13.6501 22.4147 13.6501 22.0005V21.1954C13.6501 21.116 13.6501 21.0818 13.6497 21.0497C13.6295 19.1396 12.7369 17.3436 11.2266 16.1741C11.2012 16.1544 11.1739 16.1337 11.1106 16.0858L11.1042 16.0809C11.0708 16.0556 11.0448 16.0359 11.0229 16.0187C9.70738 14.9797 9.61944 13.0156 10.8369 11.8632C10.8572 11.8441 10.8812 11.8222 10.9125 11.7938L11.9583 10.843C13.1733 9.73848 12.8035 7.7418 11.2735 7.14569C10.7258 6.9323 10.1156 6.94572 9.57783 7.18298L9.05613 7.41314C8.51089 7.65369 8.25908 7.76497 8.01426 7.8865C7.60146 8.09139 7.20056 8.31942 6.81346 8.5695C6.58387 8.71781 6.35952 8.87737 5.87408 9.22306L4.43511 10.2478C4.09771 10.4881 3.62941 10.4093 3.38913 10.0719C3.14886 9.7345 3.2276 9.2662 3.56501 9.02593L5.02098 7.98909C5.48519 7.65852 5.73812 7.47841 5.9995 7.30954C6.43401 7.02885 6.884 6.7729 7.34735 6.54291C7.62609 6.40455 7.91018 6.27922 8.43157 6.04919L8.97237 5.81061Z" fill="currentColor" /><g opacity={duotone ? "0.5" : "1"}><path d="M15.2724 11.8188C15.3729 11.4169 15.7801 11.1726 16.1819 11.2731C17.3756 11.5715 18.6244 11.5715 19.8181 11.2731C20.2199 11.1726 20.6271 11.4169 20.7276 11.8188C20.8281 12.2206 20.5837 12.6278 20.1819 12.7283C18.7493 13.0864 17.2507 13.0864 15.8181 12.7283C15.4163 12.6278 15.1719 12.2206 15.2724 11.8188Z" fill="currentColor" /><path d="M9.48014 16.4245C9.79835 16.6897 9.84134 17.1626 9.57617 17.4808L9.31681 17.792C7.75456 19.6667 5.44032 20.7507 3 20.7507C2.58579 20.7507 2.25 20.4149 2.25 20.0007C2.25 19.5865 2.58579 19.2507 3 19.2507C4.99515 19.2507 6.88722 18.3645 8.16448 16.8318L8.42383 16.5205C8.68901 16.2023 9.16193 16.1593 9.48014 16.4245Z" fill="currentColor" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 4.50049C21 5.8812 19.8807 7.00049 18.5 7.00049C17.1193 7.00049 16 5.8812 16 4.50049C16 3.11978 17.1193 2.00049 18.5 2.00049C19.8807 2.00049 21 3.11978 21 4.50049Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M8.97231 5.81061C9.87486 5.41242 10.8988 5.38991 11.818 5.74803C14.3856 6.74842 15.0063 10.0993 12.9673 11.9529L11.9272 12.8984C11.8873 12.9347 11.8756 12.9454 11.868 12.9526C11.3146 13.4764 11.3545 14.3692 11.9525 14.8415C11.9608 14.848 11.9735 14.8577 12.0164 14.8902L12.0198 14.8927C12.0784 14.9371 12.1124 14.9629 12.1449 14.9881C14.0177 16.4383 15.1245 18.6653 15.1496 21.0339C15.15 21.0749 15.15 21.1175 15.15 21.1907V22.0005C15.15 22.4147 14.8142 22.7505 14.4 22.7505C13.9858 22.7505 13.65 22.4147 13.65 22.0005V21.1954C13.65 21.116 13.65 21.0818 13.6497 21.0497C13.6295 19.1396 12.7369 17.3436 11.2265 16.1741C11.2012 16.1544 11.1739 16.1337 11.1106 16.0858L11.1042 16.0809C11.0707 16.0556 11.0447 16.0359 11.0229 16.0187C9.70732 14.9797 9.61938 13.0156 10.8368 11.8632C10.8571 11.8441 10.8811 11.8222 10.9125 11.7938L11.9583 10.843C13.1733 9.73848 12.8034 7.7418 11.2734 7.14569C10.7257 6.9323 10.1156 6.94572 9.57777 7.18298L9.05608 7.41314C8.51083 7.65369 8.25902 7.76497 8.0142 7.8865C7.6014 8.09139 7.2005 8.31942 6.8134 8.5695C6.58381 8.71781 6.35946 8.87737 5.87402 9.22306L4.43505 10.2478C4.09765 10.4881 3.62935 10.4093 3.38908 10.0719C3.1488 9.7345 3.22754 9.2662 3.56495 9.02593L5.02092 7.98909C5.48513 7.65852 5.73806 7.47841 5.99945 7.30954C6.43395 7.02885 6.88394 6.7729 7.34729 6.54291C7.62603 6.40455 7.91012 6.27922 8.43151 6.04919L8.97231 5.81061ZM15.2724 11.8186C15.3729 11.4167 15.7801 11.1724 16.1819 11.2729C17.3756 11.5713 18.6244 11.5713 19.8181 11.2729C20.2199 11.1724 20.6271 11.4167 20.7276 11.8186C20.8281 12.2204 20.5837 12.6276 20.1819 12.7281C18.7493 13.0862 17.2507 13.0862 15.8181 12.7281C15.4163 12.6276 15.1719 12.2204 15.2724 11.8186ZM9.48014 16.4243C9.79835 16.6895 9.84134 17.1624 9.57617 17.4806L9.31681 17.7919C7.75456 19.6666 5.44032 20.7505 3 20.7505C2.58579 20.7505 2.25 20.4147 2.25 20.0005C2.25 19.5863 2.58579 19.2505 3 19.2505C4.99515 19.2505 6.88722 18.3643 8.16448 16.8316L8.42383 16.5204C8.68901 16.2021 9.16193 16.1591 9.48014 16.4243Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconRunningRound;