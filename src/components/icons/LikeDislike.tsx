import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconLikeDislike: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.91992 20.2799L6.68993 21.6499C6.91993 21.8799 7.42992 21.9898 7.77992 21.9898H9.94992C10.6399 21.9898 11.3799 21.4799 11.5499 20.7899L12.9199 16.6198C13.2099 15.8198 12.6899 15.1299 11.8299 15.1299H9.53992C9.19992 15.1299 8.90992 14.8398 8.96992 14.4398L9.25993 12.6098C9.36993 12.0998 9.02992 11.5198 8.51992 11.3498C8.05992 11.1798 7.48993 11.4099 7.25993 11.7499L4.91992 15.2398" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" /><path d="M2 20.2799V14.6799C2 13.8799 2.34 13.5898 3.14 13.5898H3.71C4.51 13.5898 4.85 13.8799 4.85 14.6799V20.2799C4.85 21.0799 4.51 21.3699 3.71 21.3699H3.14C2.34 21.3699 2 21.0899 2 20.2799Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M19.0808 3.71973L17.3108 2.34973C17.0808 2.11973 16.5708 2.00977 16.2208 2.00977H14.0508C13.3608 2.00977 12.6208 2.51972 12.4508 3.20972L11.0808 7.37976C10.7908 8.17976 11.3108 8.86975 12.1708 8.86975H14.4608C14.8008 8.86975 15.0908 9.15981 15.0308 9.55981L14.7408 11.3898C14.6308 11.8998 14.9708 12.4798 15.4808 12.6498C15.9408 12.8198 16.5108 12.5898 16.7408 12.2498L19.0808 8.75977" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" /><path d="M22.0004 3.71985V9.31982C22.0004 10.1198 21.6604 10.4099 20.8604 10.4099H20.2904C19.4904 10.4099 19.1504 10.1198 19.1504 9.31982V3.71985C19.1504 2.91985 19.4904 2.62988 20.2904 2.62988H20.8604C21.6604 2.62988 22.0004 2.90985 22.0004 3.71985Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M13.1502 15.3699C12.9302 15.0499 12.5401 14.8699 12.0901 14.8699H9.76015C9.61015 14.8699 9.46016 14.8099 9.37016 14.6899C9.27016 14.5699 9.23015 14.4199 9.25015 14.2499L9.54015 12.3899C9.66015 11.8399 9.29015 11.2099 8.74015 11.0199C8.22015 10.8299 7.62016 11.0899 7.37016 11.4599L4.98016 15.0099L4.91016 15.1299V20.1499L5.00015 20.2398L6.80016 21.6299C7.04016 21.8699 7.58015 21.9999 7.96015 21.9999H10.1702C10.9302 21.9999 11.6902 21.4298 11.8702 20.7298L13.2701 16.4798C13.4101 16.0698 13.3702 15.6799 13.1502 15.3699Z" fill="currentColor" /><path d="M3.82 13.2998H3.24C2.36 13.2998 2 13.6398 2 14.4798V20.1898C2 21.0298 2.36 21.3698 3.24 21.3698H3.82C4.7 21.3698 5.06 21.0298 5.06 20.1898V14.4798C5.06 13.6398 4.7 13.2998 3.82 13.2998Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M11.1997 8.59998C11.4197 8.91998 11.8097 9.09998 12.2597 9.09998H14.5897C14.7397 9.09998 14.8897 9.16003 14.9797 9.28003C15.0797 9.40003 15.1197 9.54997 15.0997 9.71997L14.8097 11.58C14.6897 12.13 15.0597 12.76 15.6097 12.95C16.1297 13.14 16.7297 12.88 16.9797 12.51L19.3697 8.96002L19.4397 8.84003V3.82001L19.3497 3.72998L17.5497 2.34003C17.3097 2.10003 16.7697 1.96997 16.3897 1.96997H14.1797C13.4197 1.96997 12.6597 2.53999 12.4797 3.23999L11.0797 7.48999C10.9397 7.88999 10.9797 8.28998 11.1997 8.59998Z" fill="currentColor" /><path d="M20.5291 10.6701H21.1091C21.9891 10.6701 22.3491 10.3301 22.3491 9.49011V3.78015C22.3491 2.94015 21.9891 2.6001 21.1091 2.6001H20.5291C19.6491 2.6001 19.2891 2.94015 19.2891 3.78015V9.49011C19.2891 10.3301 19.6491 10.6701 20.5291 10.6701Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconLikeDislike as IconComponentType).keywords = [
  "like",
  "dislike",
  "wish",
  "ish",
  "like-minded",
  "suchlike",
  "corresponding",
  "similar",
  "alike",
  "equal",
  "comparable",
  "disfavour",
  "disfavor",
  "disapproval",
  "aversion",
  "displeasure",
  "distaste",
  "antipathy",
  "unpleasantness",
  "abhor"
];

export default IconLikeDislike as IconComponentType;