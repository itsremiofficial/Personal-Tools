import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconSlashSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.2939 7.17078L11.9998 12.0004L10.7058 16.83" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M2 12.0004C2 7.28632 2 4.9293 3.46447 3.46483C4.92893 2.00037 7.28595 2.00037 12 2.00037C16.714 2.00037 19.0711 2.00037 20.5355 3.46483C22 4.9293 22 7.28632 22 12.0004C22 16.7144 22 19.0714 20.5355 20.5359C19.0711 22.0004 16.714 22.0004 12 22.0004C7.28595 22.0004 4.92893 22.0004 3.46447 20.5359C2 19.0714 2 16.7144 2 12.0004Z" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M2 12.0004C2 7.28632 2 4.9293 3.46447 3.46483C4.92893 2.00037 7.28595 2.00037 12 2.00037C16.714 2.00037 19.0711 2.00037 20.5355 3.46483C22 4.9293 22 7.28632 22 12.0004C22 16.7144 22 19.0714 20.5355 20.5359C19.0711 22.0004 16.714 22.0004 12 22.0004C7.28595 22.0004 4.92893 22.0004 3.46447 20.5359C2 19.0714 2 16.7144 2 12.0004Z" fill="currentColor" /><path d="M14.0184 7.36495C14.1256 6.96486 13.8882 6.5536 13.4881 6.4464C13.088 6.33919 12.6767 6.57663 12.5695 6.97673L9.98131 16.636C9.8741 17.0361 10.1115 17.4473 10.5116 17.5545C10.9117 17.6617 11.323 17.4243 11.4302 17.0242L14.0184 7.36495Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.46447 3.46483C2 4.9293 2 7.28632 2 12.0004C2 16.7144 2 19.0714 3.46447 20.5359C4.92893 22.0004 7.28595 22.0004 12 22.0004C16.714 22.0004 19.0711 22.0004 20.5355 20.5359C22 19.0714 22 16.7144 22 12.0004C22 7.28632 22 4.9293 20.5355 3.46483C19.0711 2.00037 16.714 2.00037 12 2.00037C7.28595 2.00037 4.92893 2.00037 3.46447 3.46483ZM14.0184 7.36487C14.1257 6.96477 13.8882 6.55352 13.4881 6.44631C13.088 6.33911 12.6768 6.57654 12.5696 6.97664L9.98137 16.6359C9.87416 17.036 10.1116 17.4473 10.5117 17.5545C10.9118 17.6617 11.323 17.4242 11.4303 17.0241L14.0184 7.36487Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconSlashSquare;