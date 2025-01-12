import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconTextItalic: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 22.0005H15M9 2.00049H21" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.5" : "1"} d="M9 22.0005L15 2.00049" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M9 1.00051H14.9768C14.992 1.00016 15.0072 1.00016 15.0225 1.00051H21C21.5523 1.00051 22 1.44822 22 2.00051C22 2.55279 21.5523 3.00051 21 3.00051H15.744H13.656H9C8.44772 3.00051 8 2.55279 8 2.00051C8 1.44822 8.44772 1.00051 9 1.00051ZM8.25597 21.0005H3C2.44772 21.0005 2 21.4482 2 22.0005C2 22.5528 2.44772 23.0005 3 23.0005H8.97753C8.99281 23.0009 9.00805 23.0009 9.02325 23.0005H15C15.5523 23.0005 16 22.5528 16 22.0005C16 21.4482 15.5523 21.0005 15 21.0005H10.344H8.25597Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M13.6559 3.00049L8.25586 21.0005H10.3439L15.7439 3.00049H13.6559Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M14.9768 1.00051H9C8.44772 1.00051 8 1.44822 8 2.00051C8 2.55279 8.44772 3.00051 9 3.00051H13.656L8.25597 21.0005H3C2.44772 21.0005 2 21.4482 2 22.0005C2 22.5528 2.44772 23.0005 3 23.0005H8.97753C8.99281 23.0009 9.00805 23.0009 9.02325 23.0005H15C15.5523 23.0005 16 22.5528 16 22.0005C16 21.4482 15.5523 21.0005 15 21.0005H10.344L15.744 3.00051H21C21.5523 3.00051 22 2.55279 22 2.00051C22 1.44822 21.5523 1.00051 21 1.00051H15.0225C15.0072 1.00016 14.992 1.00016 14.9768 1.00051Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconTextItalic;