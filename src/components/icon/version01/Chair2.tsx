import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconChair2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 15.5001C6 14.9478 6.44772 14.5001 7 14.5001H17C17.5523 14.5001 18 14.9478 18 15.5001C18 16.6047 17.1046 17.5001 16 17.5001H8C6.89543 17.5001 6 16.6047 6 15.5001Z" stroke="currentColor" strokeWidth={width} /><path d="M6.628 6.76593C6.86937 4.75454 6.99006 3.74884 7.57174 3.06174C7.75634 2.84368 7.97115 2.6531 8.20965 2.4958C8.96117 2.00012 9.97408 2.00012 11.9999 2.00012C14.0257 2.00012 15.0386 2.00012 15.7902 2.4958C16.0287 2.6531 16.2435 2.84368 16.4281 3.06174C17.0097 3.74884 17.1304 4.75454 17.3718 6.76593L17.4627 7.52354C17.7132 9.61099 17.8385 10.6547 17.2416 11.3274C16.6448 12.0001 15.5936 12.0001 13.4912 12.0001H10.5086C8.40618 12.0001 7.35497 12.0001 6.75816 11.3274C6.16135 10.6547 6.2866 9.61099 6.53709 7.52354L6.628 6.76593Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M12 12.0001V14.0001" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M12 22.0001V20.0001M12 20.0001V17.5001M12 20.0001L12.4661 20.1166C13.4214 20.3555 14.1886 21.0659 14.5 22.0001M12 20.0001L11.5339 20.1166C10.5786 20.3555 9.81142 21.0659 9.5 22.0001M6 16.0001L5.13484 13.4046C5.06173 13.1853 5.02518 13.0757 4.95424 12.9226C4.8833 12.7696 4.85413 12.7216 4.79579 12.6257C4.33942 11.8753 3.7325 11.5001 2 11.5001M18 16.0001L18.8652 13.4046C18.9383 13.1853 18.9748 13.0757 19.0458 12.9226C19.1167 12.7696 19.1459 12.7216 19.2042 12.6257C19.6606 11.8753 20.2675 11.5001 22 11.5001" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.25 15.5001C5.25 14.5336 6.0335 13.7501 7 13.7501H17C17.9665 13.7501 18.75 14.5336 18.75 15.5001C18.75 17.0189 17.5188 18.2501 16 18.2501H8C6.48122 18.2501 5.25 17.0189 5.25 15.5001Z" fill="currentColor" /><path d="M6.628 6.76593C6.86937 4.75454 6.99006 3.74884 7.57174 3.06174C7.75634 2.84368 7.97115 2.6531 8.20965 2.4958C8.96117 2.00012 9.97408 2.00012 11.9999 2.00012C14.0257 2.00012 15.0386 2.00012 15.7902 2.4958C16.0287 2.6531 16.2435 2.84368 16.4281 3.06174C17.0097 3.74884 17.1304 4.75454 17.3718 6.76593L17.4627 7.52354C17.7132 9.61099 17.8385 10.6547 17.2416 11.3274C16.6448 12.0001 15.5936 12.0001 13.4912 12.0001H10.5086C8.40618 12.0001 7.35497 12.0001 6.75816 11.3274C6.16135 10.6547 6.2866 9.61099 6.53709 7.52354L6.628 6.76593Z" fill="currentColor" /><g opacity={duotone ? "0.5" : "1"}><path d="M2 10.7501C1.58579 10.7501 1.25 11.0859 1.25 11.5001C1.25 11.9143 1.58579 12.2501 2 12.2501C2.82738 12.2501 3.28947 12.3423 3.57378 12.4677C3.82305 12.5777 3.98353 12.7335 4.15499 13.0154C4.18539 13.0654 4.19799 13.0864 4.21147 13.1112C4.22448 13.1351 4.24208 13.1697 4.2738 13.2381C4.32447 13.3474 4.34889 13.4185 4.42333 13.6418L5.28849 16.2373C5.32093 16.3346 5.37138 16.4209 5.43491 16.4935C5.3155 16.1854 5.25 15.8504 5.25 15.5001C5.25 14.8546 5.59952 14.2907 6.11965 13.9874L5.84069 13.1505C5.77196 12.9442 5.72347 12.7987 5.63468 12.6072C5.5488 12.4219 5.50507 12.3486 5.43659 12.236C5.15168 11.7675 4.78052 11.3606 4.17911 11.0953C3.61274 10.8455 2.90513 10.7501 2 10.7501Z" fill="currentColor" /><path d="M12.75 13.7501H11.25V12.0001H12.75V13.7501Z" fill="currentColor" /><path d="M18.5651 16.4935C18.6845 16.1854 18.75 15.8504 18.75 15.5001C18.75 14.8546 18.4005 14.2907 17.8804 13.9874L18.1593 13.1505C18.228 12.9443 18.2765 12.7987 18.3653 12.6072C18.4512 12.4219 18.4949 12.3486 18.5634 12.236C18.8483 11.7675 19.2195 11.3606 19.8209 11.0953C20.3873 10.8455 21.0949 10.7501 22 10.7501C22.4142 10.7501 22.75 11.0859 22.75 11.5001C22.75 11.9143 22.4142 12.2501 22 12.2501C21.1726 12.2501 20.7105 12.3423 20.4262 12.4677C20.177 12.5777 20.0165 12.7335 19.845 13.0154C19.8146 13.0654 19.802 13.0864 19.7885 13.1112C19.7755 13.1351 19.7579 13.1697 19.7262 13.2381C19.6755 13.3474 19.6511 13.4185 19.5767 13.6418L18.7115 16.2373C18.6791 16.3346 18.6286 16.4209 18.5651 16.4935Z" fill="currentColor" /><path d="M11.25 18.2501H12.75V19.4161C13.9066 19.7412 14.8302 20.6189 15.2115 21.763C15.3425 22.1559 15.1301 22.5806 14.7372 22.7116C14.3442 22.8426 13.9195 22.6303 13.7885 22.2373C13.6115 21.7062 13.2354 21.273 12.75 21.0207V22.0001C12.75 22.4143 12.4142 22.7501 12 22.7501C11.5858 22.7501 11.25 22.4143 11.25 22.0001V21.0207C10.7646 21.273 10.3885 21.7062 10.2115 22.2373C10.0805 22.6302 9.65579 22.8426 9.26283 22.7116C8.86987 22.5806 8.6575 22.1559 8.78849 21.763C9.16984 20.6189 10.0934 19.7412 11.25 19.4161V18.2501Z" fill="currentColor" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.57198 3.06174C6.9903 3.74884 6.86962 4.75454 6.62825 6.76593L6.53734 7.52354C6.28684 9.61099 6.1616 10.6547 6.7584 11.3274C7.35521 12.0001 8.40642 12.0001 10.5088 12.0001H11.25V13.7501H7C6.67904 13.7501 6.37825 13.8365 6.11965 13.9874L5.84069 13.1505C5.77196 12.9442 5.72347 12.7987 5.63468 12.6072C5.5488 12.4219 5.50507 12.3486 5.43659 12.236C5.15168 11.7675 4.78052 11.3606 4.17911 11.0953C3.61274 10.8455 2.90513 10.7501 2 10.7501C1.58579 10.7501 1.25 11.0859 1.25 11.5001C1.25 11.9143 1.58579 12.2501 2 12.2501C2.82738 12.2501 3.28947 12.3423 3.57378 12.4677C3.82305 12.5777 3.98353 12.7335 4.15499 13.0154C4.18539 13.0654 4.19799 13.0864 4.21147 13.1112C4.22448 13.1351 4.24208 13.1697 4.2738 13.2381C4.32447 13.3474 4.34889 13.4185 4.42333 13.6418L5.28849 16.2373C5.32093 16.3346 5.37138 16.4209 5.43491 16.4935C5.83324 17.5214 6.83152 18.2501 8 18.2501H11.25V19.4161C10.0934 19.7412 9.16984 20.6189 8.78849 21.763C8.6575 22.1559 8.86987 22.5806 9.26283 22.7116C9.65579 22.8426 10.0805 22.6302 10.2115 22.2373C10.3885 21.7062 10.7646 21.273 11.25 21.0207V22.0001C11.25 22.4143 11.5858 22.7501 12 22.7501C12.4142 22.7501 12.75 22.4143 12.75 22.0001V21.0207C13.2354 21.273 13.6115 21.7062 13.7885 22.2373C13.9195 22.6303 14.3442 22.8426 14.7372 22.7116C15.1301 22.5806 15.3425 22.1559 15.2115 21.763C14.8302 20.6189 13.9066 19.7412 12.75 19.4161V18.2501H16C17.1685 18.2501 18.1668 17.5214 18.5651 16.4935C18.6286 16.4208 18.6791 16.3346 18.7115 16.2373L19.5767 13.6418C19.6511 13.4185 19.6755 13.3474 19.7262 13.2381C19.7579 13.1697 19.7755 13.1351 19.7885 13.1112C19.802 13.0864 19.8146 13.0654 19.845 13.0154C20.0165 12.7335 20.177 12.5777 20.4262 12.4677C20.7105 12.3423 21.1726 12.2501 22 12.2501C22.4142 12.2501 22.75 11.9143 22.75 11.5001C22.75 11.0859 22.4142 10.7501 22 10.7501C21.0949 10.7501 20.3873 10.8455 19.8209 11.0953C19.2195 11.3606 18.8483 11.7675 18.5634 12.236C18.4949 12.3486 18.4512 12.4219 18.3653 12.6072C18.2765 12.7987 18.228 12.9443 18.1593 13.1505L17.8804 13.9874C17.6217 13.8365 17.321 13.7501 17 13.7501H12.75V12.0001H13.4914C15.5939 12.0001 16.6451 12.0001 17.2419 11.3274C17.8387 10.6547 17.7134 9.61099 17.463 7.52354L17.372 6.76593C17.1307 4.75454 17.01 3.74884 16.4283 3.06174C16.2437 2.84368 16.0289 2.6531 15.7904 2.4958C15.0389 2.00012 14.026 2.00012 12.0001 2.00012C9.97432 2.00012 8.96141 2.00012 8.2099 2.4958C7.97139 2.6531 7.75659 2.84368 7.57198 3.06174Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconChair2 as IconComponentType).keywords = [
  "chair",
  "2",
  "electric chair",
  "hot seat",
  "chairwoman",
  "chairman",
  "preside",
  "professorship",
  "chairperson",
  "president",
  "moderate",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out"
];

export default IconChair2 as IconComponentType;