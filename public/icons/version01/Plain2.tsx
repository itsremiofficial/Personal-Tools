import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconPlain2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.4975 18.4853L20.6281 9.09397C21.8764 5.34898 22.5006 3.47649 21.5122 2.48806C20.5237 1.49964 18.6511 2.1238 14.906 3.37213L5.57477 6.48243C3.49295 7.17634 2.45203 7.5233 2.13608 8.28661C2.06182 8.46602 2.01692 8.6562 2.00311 8.84987C1.94433 9.6739 2.72018 10.4497 4.27188 12.0014L4.55451 12.284C4.80921 12.5387 4.93655 12.666 5.03282 12.8078C5.22269 13.0873 5.33046 13.4145 5.34393 13.7522C5.35076 13.9234 5.32403 14.1015 5.27057 14.4577C5.07488 15.7615 4.97703 16.4133 5.0923 16.915C5.32205 17.9148 6.09599 18.6997 7.09257 18.9435C7.59255 19.0658 8.24576 18.9772 9.5522 18.7999L9.62363 18.7902C9.99191 18.7402 10.1761 18.7152 10.3529 18.7259C10.6738 18.7453 10.9838 18.8498 11.251 19.0288C11.3981 19.1273 11.5295 19.2587 11.7923 19.5215L12.0436 19.7728C13.5539 21.283 14.309 22.0381 15.1101 21.9988C15.3309 21.9879 15.5479 21.9367 15.7503 21.8477C16.4844 21.5246 16.8221 20.5115 17.4975 18.4853Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M6 18.0002L21 3.00024" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M5.79624 18.204L21.5122 2.48806C20.5237 1.49964 18.6511 2.1238 14.906 3.37213L5.57477 6.48243C3.49295 7.17634 2.45203 7.5233 2.13608 8.28661C2.06182 8.46602 2.01692 8.6562 2.00311 8.84987C1.94433 9.6739 2.72018 10.4497 4.27188 12.0014L4.55451 12.284C4.80921 12.5387 4.93655 12.666 5.03282 12.8078C5.22269 13.0873 5.33046 13.4145 5.34393 13.7522C5.35076 13.9234 5.32403 14.1015 5.27057 14.4577C5.07488 15.7615 4.97703 16.4133 5.0923 16.915C5.20622 17.4107 5.45393 17.8537 5.79624 18.204Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M17.4976 18.4858L20.6282 9.09444C21.8766 5.34945 22.5008 3.47695 21.5123 2.48853L5.79639 18.2044C6.14444 18.5606 6.59028 18.8211 7.09271 18.944C7.59269 19.0663 8.24591 18.9777 9.55235 18.8004L9.62378 18.7907C9.99205 18.7407 10.1762 18.7157 10.353 18.7264C10.674 18.7457 10.984 18.8503 11.2511 19.0292C11.3983 19.1278 11.5297 19.2592 11.7925 19.522L12.0437 19.7732C13.554 21.2835 14.3092 22.0386 15.1102 21.9992C15.3311 21.9884 15.548 21.9372 15.7504 21.8481C16.4845 21.5251 16.8222 20.512 17.4976 18.4858Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.4975 18.4853L20.6281 9.09398C21.419 6.72127 21.9594 5.1002 21.9978 3.97939C22.0108 3.60185 21.5845 3.47644 21.3173 3.74356L6.85855 18.2024C6.62519 18.4357 6.6807 18.8288 6.99826 18.9187C7.02946 18.9275 7.0609 18.9358 7.09257 18.9435C7.59254 19.0659 8.24578 18.9772 9.5522 18.7999L9.62363 18.7902C9.99191 18.7402 10.1761 18.7152 10.3529 18.7259C10.6738 18.7453 10.9838 18.8498 11.251 19.0288C11.3981 19.1273 11.5295 19.2588 11.7923 19.5215L12.0436 19.7728C13.5539 21.283 14.309 22.0381 15.1101 21.9988C15.3309 21.9879 15.5479 21.9367 15.7503 21.8477C16.4844 21.5246 16.8221 20.5115 17.4975 18.4853Z" fill="currentColor" /><path d="M14.906 3.37214L5.57477 6.48243C3.49295 7.17634 2.45203 7.5233 2.13608 8.28662C2.06182 8.46602 2.01692 8.6562 2.00311 8.84988C1.94433 9.6739 2.72018 10.4497 4.27188 12.0014L4.55451 12.284C4.80921 12.5387 4.93655 12.666 5.03282 12.8078C5.22269 13.0873 5.33046 13.4145 5.34393 13.7522C5.35076 13.9234 5.32403 14.1015 5.27057 14.4577C5.07488 15.7615 4.97703 16.4133 5.0923 16.915C5.09632 16.9324 5.1005 16.9499 5.10484 16.9672C5.18629 17.2922 5.58551 17.3541 5.82242 17.1172L20.2567 2.68291C20.5238 2.41579 20.3984 1.9895 20.0209 2.00244C18.9 2.04086 17.2788 2.58122 14.906 3.37214Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconPlain2;