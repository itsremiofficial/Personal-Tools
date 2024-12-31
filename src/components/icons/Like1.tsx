import { FC } from 'react';
import { IconProps } from "../../types";

const IconLikeDislike: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.91992 20.2799L6.68993 21.6499C6.91993 21.8799 7.42992 21.9898 7.77992 21.9898H9.94992C10.6399 21.9898 11.3799 21.4799 11.5499 20.7899L12.9199 16.6198C13.2099 15.8198 12.6899 15.1299 11.8299 15.1299H9.53992C9.19992 15.1299 8.90992 14.8398 8.96992 14.4398L9.25993 12.6098C9.36993 12.0998 9.02992 11.5198 8.51992 11.3498C8.05992 11.1798 7.48993 11.4099 7.25993 11.7499L4.91992 15.2398" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" /><path d="M2 20.2799V14.6799C2 13.8799 2.34 13.5898 3.14 13.5898H3.71C4.51 13.5898 4.85 13.8799 4.85 14.6799V20.2799C4.85 21.0799 4.51 21.3699 3.71 21.3699H3.14C2.34 21.3699 2 21.0899 2 20.2799Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M19.0808 3.71973L17.3108 2.34973C17.0808 2.11973 16.5708 2.00977 16.2208 2.00977H14.0508C13.3608 2.00977 12.6208 2.51972 12.4508 3.20972L11.0808 7.37976C10.7908 8.17976 11.3108 8.86975 12.1708 8.86975H14.4608C14.8008 8.86975 15.0908 9.15981 15.0308 9.55981L14.7408 11.3898C14.6308 11.8998 14.9708 12.4798 15.4808 12.6498C15.9408 12.8198 16.5108 12.5898 16.7408 12.2498L19.0808 8.75977" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" /><path d="M22.0004 3.71985V9.31982C22.0004 10.1198 21.6604 10.4099 20.8604 10.4099H20.2904C19.4904 10.4099 19.1504 10.1198 19.1504 9.31982V3.71985C19.1504 2.91985 19.4904 2.62988 20.2904 2.62988H20.8604C21.6604 2.62988 22.0004 2.90985 22.0004 3.71985Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M18 18.86H17.24C16.44 18.86 15.68 19.17 15.12 19.73L13.41 21.42C12.63 22.19 11.36 22.19 10.58 21.42L8.87 19.73C8.31 19.17 7.54 18.86 6.75 18.86H6C4.34 18.86 3 17.53 3 15.89V4.98001C3 3.34001 4.34 2.01001 6 2.01001H18C19.66 2.01001 21 3.34001 21 4.98001V15.89C21 17.52 19.66 18.86 18 18.86Z" fill="currentColor" /><path d="M12.28 14.96C12.13 15.01 11.88 15.01 11.72 14.96C10.42 14.51 7.5 12.66 7.5 9.51001C7.5 8.12001 8.62 7 10 7C10.82 7 11.54 7.39 12 8C12.46 7.39 13.18 7 14 7C15.38 7 16.5 8.12001 16.5 9.51001C16.49 12.66 13.58 14.51 12.28 14.96Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconLikeDislike;