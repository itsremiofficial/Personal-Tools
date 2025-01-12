import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconNotificationUnread: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M22 10.5004V12.0004C22 16.7144 22 19.0714 20.5355 20.5359C19.0711 22.0004 16.714 22.0004 12 22.0004C7.28595 22.0004 4.92893 22.0004 3.46447 20.5359C2 19.0714 2 16.7144 2 12.0004C2 7.28632 2 4.9293 3.46447 3.46483C4.92893 2.00037 7.28595 2.00037 12 2.00037H13.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><circle cx="19" cy="5.00037" r="3" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M22 12.0004C22 16.7144 22 19.0714 20.5355 20.5359C19.0711 22.0004 16.714 22.0004 12 22.0004C7.28595 22.0004 4.92893 22.0004 3.46447 20.5359C2 19.0714 2 16.7144 2 12.0004C2 7.28632 2 4.9293 3.46447 3.46483C4.92893 2.00037 7.28595 2.00037 12 2.00037C16.714 2.00037 19.0711 2.00037 20.5355 3.46483C22 4.9293 22 7.28632 22 12.0004Z" fill="currentColor" /><path d="M22 5.00037C22 6.65722 20.6569 8.00037 19 8.00037C17.3431 8.00037 16 6.65722 16 5.00037C16 3.34351 17.3431 2.00037 19 2.00037C20.6569 2.00037 22 3.34351 22 5.00037Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22.0004C7.28595 22.0004 4.92893 22.0004 3.46447 20.5359C2 19.0714 2 16.7144 2 12.0004C2 7.28632 2 4.9293 3.46447 3.46483C4.92893 2.00037 7.28595 2.00037 12 2.00037C13.3988 2.00037 14.59 2.00037 15.612 2.03863C14.9196 2.83004 14.5 3.8662 14.5 5.00037C14.5 7.48565 16.5147 9.50037 19 9.50037C20.1342 9.50037 21.1703 9.08079 21.9617 8.38838C22 9.41036 22 10.6016 22 12.0004C22 16.7144 22 19.0714 20.5355 20.5359C19.0711 22.0004 16.714 22.0004 12 22.0004Z" fill="currentColor" /><path d="M22 5.00037C22 6.65722 20.6569 8.00037 19 8.00037C17.3431 8.00037 16 6.65722 16 5.00037C16 3.34351 17.3431 2.00037 19 2.00037C20.6569 2.00037 22 3.34351 22 5.00037Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconNotificationUnread;