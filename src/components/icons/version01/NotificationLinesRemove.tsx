import { FC } from 'react';

const IconNotificationLinesRemove: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M22 10.5004V12.0004C22 16.7144 22 19.0714 20.5355 20.5359C19.0711 22.0004 16.714 22.0004 12 22.0004C7.28595 22.0004 4.92893 22.0004 3.46447 20.5359C2 19.0714 2 16.7144 2 12.0004C2 7.28632 2 4.9293 3.46447 3.46483C4.92893 2.00037 7.28595 2.00037 12 2.00037H13.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M7 14.0004H16" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M7 17.5004H13" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M22 2.00037L17 7.00035M17 2.00035L22 7.00033" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 13.2504C6.58579 13.2504 6.25 13.5862 6.25 14.0004C6.25 14.4146 6.58579 14.7504 7 14.7504H11C11.4142 14.7504 11.75 14.4146 11.75 14.0004C11.75 13.5862 11.4142 13.2504 11 13.2504H7Z" fill="currentColor" /><path d="M7 16.7504C6.58579 16.7504 6.25 17.0862 6.25 17.5004C6.25 17.9146 6.58579 18.2504 7 18.2504H13C13.4142 18.2504 13.75 17.9146 13.75 17.5004C13.75 17.0862 13.4142 16.7504 13 16.7504H7Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M17.5 11.0004C15.3787 11.0004 14.318 11.0004 13.659 10.3414C13 9.68235 13 8.62169 13 6.50037C13 4.37905 13 3.31839 13.659 2.65938C14.318 2.00037 15.3787 2.00037 17.5 2.00037C19.6213 2.00037 20.682 2.00037 21.341 2.65938C22 3.31839 22 4.37905 22 6.50037C22 8.62169 22 9.68235 21.341 10.3414C20.682 11.0004 19.6213 11.0004 17.5 11.0004ZM14.9697 3.97004C15.2626 3.67714 15.7374 3.67714 16.0303 3.97004L17.5 5.43971L18.9697 3.97004C19.2626 3.67714 19.7374 3.67714 20.0303 3.97004C20.3232 4.26293 20.3232 4.7378 20.0303 5.0307L18.5607 6.50037L20.0303 7.97004C20.3232 8.26293 20.3232 8.7378 20.0303 9.0307C19.7374 9.32359 19.2626 9.32359 18.9697 9.0307L17.5 7.56103L16.0303 9.0307C15.7374 9.32359 15.2626 9.32359 14.9697 9.0307C14.6768 8.7378 14.6768 8.26293 14.9697 7.97004L16.4393 6.50037L14.9697 5.0307C14.6768 4.7378 14.6768 4.26293 14.9697 3.97004Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M20.5355 20.5359C22 19.0714 22 16.7144 22 12.0004C22 10.6423 22 9.47992 21.965 8.47811C21.9069 9.3624 21.7523 9.93009 21.341 10.3414C20.682 11.0004 19.6213 11.0004 17.5 11.0004C15.3787 11.0004 14.318 11.0004 13.659 10.3414C13 9.68235 13 8.62169 13 6.50037C13 4.37905 13 3.31839 13.659 2.65938C14.0703 2.24811 14.638 2.0935 15.5223 2.03538C14.5204 2.00037 13.358 2.00037 12 2.00037C7.28595 2.00037 4.92893 2.00037 3.46447 3.46483C2 4.9293 2 7.28632 2 12.0004C2 16.7144 2 19.0714 3.46447 20.5359C4.92893 22.0004 7.28595 22.0004 12 22.0004C16.714 22.0004 19.0711 22.0004 20.5355 20.5359Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 22.0004C7.28595 22.0004 4.92893 22.0004 3.46447 20.5359C2 19.0714 2 16.7144 2 12.0004C2 7.28632 2 4.9293 3.46447 3.46483C4.92893 2.00037 7.28595 2.00037 12 2.00037L12.2578 2.00038C11.8534 2.56687 11.6799 3.20576 11.5958 3.83163C11.4998 4.54519 11.4999 5.42677 11.5 6.40795V6.59278C11.4999 7.57397 11.4998 8.45554 11.5958 9.1691C11.7005 9.94814 11.9437 10.7474 12.5983 11.402C13.253 12.0567 14.0522 12.2999 14.8313 12.4046C15.5448 12.5005 16.4264 12.5005 17.4076 12.5004H17.5924C18.5736 12.5005 19.4552 12.5005 20.1687 12.4046C20.7946 12.3205 21.4335 12.147 22 11.7425L22 12.0004C22 16.7144 22 19.0714 20.5355 20.5359C19.0711 22.0004 16.714 22.0004 12 22.0004ZM6.25 14.0004C6.25 13.5862 6.58579 13.2504 7 13.2504H11C11.4142 13.2504 11.75 13.5862 11.75 14.0004C11.75 14.4146 11.4142 14.7504 11 14.7504H7C6.58579 14.7504 6.25 14.4146 6.25 14.0004ZM6.25 17.5004C6.25 17.0862 6.58579 16.7504 7 16.7504H13C13.4142 16.7504 13.75 17.0862 13.75 17.5004C13.75 17.9146 13.4142 18.2504 13 18.2504H7C6.58579 18.2504 6.25 17.9146 6.25 17.5004Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M17.5 11.0004C15.3787 11.0004 14.318 11.0004 13.659 10.3414C13 9.68235 13 8.62169 13 6.50037C13 4.37905 13 3.31839 13.659 2.65938C14.318 2.00037 15.3787 2.00037 17.5 2.00037C19.6213 2.00037 20.682 2.00037 21.341 2.65938C22 3.31839 22 4.37905 22 6.50037C22 8.62169 22 9.68235 21.341 10.3414C20.682 11.0004 19.6213 11.0004 17.5 11.0004ZM14.9697 3.97004C15.2626 3.67714 15.7374 3.67714 16.0303 3.97004L17.5 5.43971L18.9697 3.97004C19.2626 3.67714 19.7374 3.67714 20.0303 3.97004C20.3232 4.26293 20.3232 4.7378 20.0303 5.0307L18.5607 6.50037L20.0303 7.97004C20.3232 8.26293 20.3232 8.7378 20.0303 9.0307C19.7374 9.32359 19.2626 9.32359 18.9697 9.0307L17.5 7.56103L16.0303 9.0307C15.7374 9.32359 15.2626 9.32359 14.9697 9.0307C14.6768 8.7378 14.6768 8.26293 14.9697 7.97004L16.4393 6.50037L14.9697 5.0307C14.6768 4.7378 14.6768 4.26293 14.9697 3.97004Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconNotificationLinesRemove as IconComponent).keywords = [
  "notification",
  "lines",
  "remove",
  "apprisal",
  "notice",
  "telling",
  "presentment",
  "notifying",
  "notifier",
  "notify",
  "denunciation",
  "announcement",
  "outline",
  "dividing line",
  "agate line",
  "delineate",
  "telephone line",
  "draw",
  "transmission line",
  "credit line",
  "phone line",
  "take out",
  "get rid of",
  "take away",
  "move out",
  "bump off",
  "slay",
  "murder",
  "take",
  "transfer"
];

export default IconNotificationLinesRemove as IconComponent;