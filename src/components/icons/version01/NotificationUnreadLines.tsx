import { FC } from 'react';

const IconNotificationUnreadLines: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M22 10.5004V12.0004C22 16.7144 22 19.0714 20.5355 20.5359C19.0711 22.0004 16.714 22.0004 12 22.0004C7.28595 22.0004 4.92893 22.0004 3.46447 20.5359C2 19.0714 2 16.7144 2 12.0004C2 7.28632 2 4.9293 3.46447 3.46483C4.92893 2.00037 7.28595 2.00037 12 2.00037H13.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><circle cx="19" cy="5.00037" r="3" stroke="currentColor" strokeWidth={width} /><path d="M7 14.0004H16" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M7 17.5004H13" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M22 12.0004C22 16.7144 22 19.0714 20.5355 20.5359C19.0711 22.0004 16.714 22.0004 12 22.0004C7.28595 22.0004 4.92893 22.0004 3.46447 20.5359C2 19.0714 2 16.7144 2 12.0004C2 7.28632 2 4.9293 3.46447 3.46483C4.92893 2.00037 7.28595 2.00037 12 2.00037C16.714 2.00037 19.0711 2.00037 20.5355 3.46483C22 4.9293 22 7.28632 22 12.0004Z" fill="currentColor" /><path d="M7 16.7504C6.58579 16.7504 6.25 17.0862 6.25 17.5004C6.25 17.9146 6.58579 18.2504 7 18.2504H13C13.4142 18.2504 13.75 17.9146 13.75 17.5004C13.75 17.0862 13.4142 16.7504 13 16.7504H7Z" fill="currentColor" /><path d="M7 13.2504C6.58579 13.2504 6.25 13.5862 6.25 14.0004C6.25 14.4146 6.58579 14.7504 7 14.7504H16C16.4142 14.7504 16.75 14.4146 16.75 14.0004C16.75 13.5862 16.4142 13.2504 16 13.2504H7Z" fill="currentColor" /><path d="M22 5.00037C22 6.65722 20.6569 8.00037 19 8.00037C17.3431 8.00037 16 6.65722 16 5.00037C16 3.34351 17.3431 2.00037 19 2.00037C20.6569 2.00037 22 3.34351 22 5.00037Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 5.00037C22 6.65722 20.6569 8.00037 19 8.00037C17.3431 8.00037 16 6.65722 16 5.00037C16 3.34351 17.3431 2.00037 19 2.00037C20.6569 2.00037 22 3.34351 22 5.00037Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M6.25 14.0004C6.25 13.5862 6.58579 13.2504 7 13.2504H16C16.4142 13.2504 16.75 13.5862 16.75 14.0004C16.75 14.4146 16.4142 14.7504 16 14.7504H7C6.58579 14.7504 6.25 14.4146 6.25 14.0004Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M3.46447 20.5359C4.92893 22.0004 7.28595 22.0004 12 22.0004C16.714 22.0004 19.0711 22.0004 20.5355 20.5359C22 19.0714 22 16.7144 22 12.0004C22 10.6016 22 9.41036 21.9617 8.38838C21.1703 9.08079 20.1342 9.50037 19 9.50037C16.5147 9.50037 14.5 7.48565 14.5 5.00037C14.5 3.8662 14.9196 2.83004 15.612 2.03863C14.59 2.00037 13.3988 2.00037 12 2.00037C7.28595 2.00037 4.92893 2.00037 3.46447 3.46483C2 4.9293 2 7.28632 2 12.0004C2 16.7144 2 19.0714 3.46447 20.5359ZM6.25 17.5004C6.25 17.0862 6.58579 16.7504 7 16.7504H13C13.4142 16.7504 13.75 17.0862 13.75 17.5004C13.75 17.9146 13.4142 18.2504 13 18.2504H7C6.58579 18.2504 6.25 17.9146 6.25 17.5004Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconNotificationUnreadLines as IconComponent).keywords = [
  "notification",
  "unread",
  "lines",
  "apprisal",
  "notice",
  "telling",
  "presentment",
  "notifying",
  "notifier",
  "notify",
  "denunciation",
  "announcement",
  "uninformed",
  "unused",
  "unutilized",
  "unspent",
  "unencumbered",
  "unwatched",
  "unplayed",
  "unsent",
  "unreviewed",
  "outline",
  "dividing line",
  "agate line",
  "delineate",
  "telephone line",
  "draw",
  "transmission line",
  "credit line",
  "phone line"
];

export default IconNotificationUnreadLines as IconComponent;