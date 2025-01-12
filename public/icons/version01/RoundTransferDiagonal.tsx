import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconRoundTransferDiagonal: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity={duotone ? "0.5" : "1"} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={width} /><path d="M6.5 4L13.8784 12V7.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M17.3784 19.8784L9.87842 12V16.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M2 12C2 17.5228 6.47715 22 12 22C13.8526 22 15.5875 21.4962 17.0752 20.6182C17.0775 20.6169 17.0797 20.6156 17.0819 20.6143C17.5169 20.3571 17.9308 20.0679 18.3202 19.7499C20.5661 17.9162 22 15.1255 22 12C22 6.47715 17.5228 2 12 2C10.1443 2 8.40658 2.50549 6.91715 3.38628C6.88285 3.40657 6.84867 3.42705 6.81464 3.44773C6.41584 3.69005 6.03533 3.95947 5.67568 4.25345C3.43217 6.08725 2 8.87638 2 12Z" fill="currentColor" /><path d="M13.1285 7.50055V10.0881L6.91725 3.38672C6.48105 3.64467 6.06613 3.93482 5.67578 4.25389L13.3285 12.5104C13.5382 12.7367 13.8651 12.8114 14.1524 12.6988C14.4396 12.5861 14.6285 12.3091 14.6285 12.0005V7.50055C14.6285 7.08633 14.2928 6.75055 13.8785 6.75055C13.4643 6.75055 13.1285 7.08633 13.1285 7.50055Z" fill="currentColor" /><path d="M10.4208 11.4823C10.2091 11.2607 9.88389 11.1902 9.59944 11.3043C9.31499 11.4183 9.12854 11.6939 9.12854 12.0004V16.5004C9.12854 16.9146 9.46432 17.2504 9.87854 17.2504C10.2928 17.2504 10.6285 16.9146 10.6285 16.5004V13.8711L17.0753 20.6187C17.5128 20.3605 17.9289 20.0699 18.3203 19.7503L10.4208 11.4823Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 8.87638 3.43217 6.08725 5.67568 4.25345L13.3284 12.5099C13.5381 12.7362 13.865 12.811 14.1523 12.6983C14.4395 12.5857 14.6284 12.3086 14.6284 12.0001V7.50011C14.6284 7.0859 14.2926 6.75011 13.8784 6.75011C13.4642 6.75011 13.1284 7.0859 13.1284 7.50011V10.0876L6.91715 3.38628C8.40658 2.50549 10.1443 2 12 2C17.5228 2 22 6.47715 22 12C22 15.1255 20.5661 17.9162 18.3202 19.7499L10.4207 11.4818C10.209 11.2603 9.88379 11.1898 9.59934 11.3038C9.31488 11.4179 9.12843 11.6935 9.12843 12V16.5C9.12843 16.9142 9.46422 17.25 9.87843 17.25C10.2926 17.25 10.6284 16.9142 10.6284 16.5V13.8706L17.0752 20.6182C15.5875 21.4962 13.8526 22 12 22Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconRoundTransferDiagonal;