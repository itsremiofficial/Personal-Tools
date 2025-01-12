import { FC } from 'react';

const IconPaperclipRounded2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.9502 11.0089L10.0104 13.9353C8.38687 15.5515 8.38687 18.1719 10.0104 19.7881C11.634 21.4043 14.2664 21.4043 15.8899 19.7881L19.5646 16.1301C22.8118 12.8977 22.8118 7.65695 19.5646 4.42455C16.3175 1.19214 11.0528 1.19214 7.80563 4.42455L4.13095 8.08253C1.28968 10.9109 1.28968 15.4965 4.13095 18.3249" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M3.46447 3.46471C4.92893 2.00024 7.28595 2.00024 12 2.00024C16.714 2.00024 19.0711 2.00024 20.5355 3.46471C22 4.92918 22 7.2862 22 12.0002C22 16.7143 22 19.0713 20.5355 20.5358C19.0711 22.0002 16.714 22.0002 12 22.0002C7.28595 22.0002 4.92893 22.0002 3.46447 20.5358C2 19.0713 2 16.7143 2 12.0002C2 7.2862 2 4.92918 3.46447 3.46471Z" fill="currentColor" /><path d="M8.96383 6.86289C11.2024 4.7127 14.8198 4.7127 17.0583 6.86289C19.3139 9.02942 19.3139 12.5551 17.0583 14.7216L14.8535 16.8394C13.5891 18.0539 11.5511 18.0539 10.2867 16.8394C9.0053 15.6085 9.0053 13.6 10.2867 12.3691L12.0506 10.6749C12.3493 10.388 12.8241 10.3975 13.111 10.6962C13.398 10.995 13.3884 11.4698 13.0897 11.7567L11.3258 13.4509C10.6589 14.0915 10.6589 15.117 11.3258 15.7576C12.0097 16.4145 13.1305 16.4145 13.8144 15.7576L16.0192 13.6398C17.6603 12.0635 17.6603 9.52093 16.0192 7.94468C14.3612 6.3521 11.661 6.3521 10.0029 7.94468L7.79812 10.0625C6.40063 11.4048 6.40063 13.5681 7.79812 14.9105C8.09685 15.1974 8.1064 15.6722 7.81947 15.9709C7.53253 16.2696 7.05775 16.2792 6.75902 15.9923C4.74699 14.0597 4.74699 10.9133 6.75902 8.98067L8.96383 6.86289Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 2.00024C7.28595 2.00024 4.92893 2.00024 3.46447 3.46471C2 4.92918 2 7.2862 2 12.0002C2 16.7143 2 19.0713 3.46447 20.5358C4.92893 22.0002 7.28595 22.0002 12 22.0002C16.714 22.0002 19.0711 22.0002 20.5355 20.5358C22 19.0713 22 16.7143 22 12.0002C22 7.2862 22 4.92918 20.5355 3.46471C19.0711 2.00024 16.714 2.00024 12 2.00024ZM8.96383 6.86289C11.2024 4.7127 14.8198 4.7127 17.0583 6.86289C19.3139 9.02942 19.3139 12.5551 17.0583 14.7216L14.8535 16.8394C13.5891 18.0539 11.5511 18.0539 10.2867 16.8394C9.0053 15.6085 9.0053 13.6 10.2867 12.3691L12.0506 10.6749C12.3493 10.388 12.8241 10.3975 13.111 10.6962C13.398 10.995 13.3884 11.4698 13.0897 11.7567L11.3258 13.4509C10.6589 14.0915 10.6589 15.117 11.3258 15.7576C12.0097 16.4145 13.1305 16.4145 13.8144 15.7576L16.0192 13.6398C17.6603 12.0635 17.6603 9.52093 16.0192 7.94468C14.3612 6.3521 11.661 6.3521 10.0029 7.94468L7.79812 10.0625C6.40063 11.4048 6.40063 13.5681 7.79812 14.9105C8.09685 15.1974 8.1064 15.6722 7.81947 15.9709C7.53253 16.2696 7.05775 16.2792 6.75902 15.9923C4.74699 14.0597 4.74699 10.9133 6.75902 8.98067L8.96383 6.86289Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPaperclipRounded2 as IconComponent).keywords = [
  "paperclip",
  "rounded",
  "2",
  "gem clip",
  "clip",
  "crisis",
  "video",
  "trombone",
  "thumbtack",
  "clothespin",
  "screwdriver",
  "ribbon",
  "ringed",
  "ring-shaped",
  "annulate",
  "annular",
  "circular",
  "rotund",
  "bowfront",
  "prolate",
  "domed",
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

export default IconPaperclipRounded2 as IconComponent;