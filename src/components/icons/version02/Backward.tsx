import { FC } from 'react';

const IconBackward: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22.6702 8.34V15.66C22.6702 17.16 21.0402 18.1 19.7402 17.35L16.5702 15.53L13.4002 13.7C13.2002 13.58 13.0402 13.45 12.9102 13.29V10.73C13.0402 10.57 13.2002 10.44 13.4002 10.32L16.5702 8.48999L19.7402 6.67002C21.0402 5.90002 22.6702 6.84 22.6702 8.34Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M12.91 8.34V15.66C12.91 17.16 11.28 18.1 9.98004 17.35L6.81005 15.53L3.64004 13.7C2.34004 12.95 2.34004 11.08 3.64004 10.32L6.81005 8.48999L9.98004 6.67002C11.28 5.90002 12.91 6.84 12.91 8.34Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22.6702 8.33998V15.66C22.6702 17.16 21.0402 18.1 19.7402 17.35L16.5702 15.52L13.4002 13.69L12.9102 13.41V10.59L13.4002 10.31L16.5702 8.48L19.7402 6.64998C21.0402 5.89998 22.6702 6.83998 22.6702 8.33998Z" fill="currentColor" /><path d="M12.9103 8.33998V15.66C12.9103 17.16 11.2804 18.1 9.99036 17.35L6.81036 15.52L3.64035 13.69C2.35035 12.94 2.35035 11.06 3.64035 10.31L6.81036 8.48L9.99036 6.64998C11.2804 5.89998 12.9103 6.83998 12.9103 8.33998Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6702 8.34V15.66C22.6702 17.16 21.0402 18.1 19.7402 17.35L16.5702 15.52L13.4002 13.69L12.9102 13.41V10.59L13.4002 10.31L16.5702 8.48L19.7402 6.65C21.0402 5.9 22.6702 6.84 22.6702 8.34Z" fill="currentColor" /><path d="M12.9104 8.34V15.66C12.9104 17.16 11.2804 18.1 9.99035 17.35L6.81035 15.52L3.64035 13.69C2.35035 12.94 2.35035 11.06 3.64035 10.31L6.81035 8.48L9.99035 6.65C11.2804 5.9 12.9104 6.84 12.9104 8.34Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBackward as IconComponent).keywords = [
  "backward",
  "rearward",
  "back",
  "rearwards",
  "retral",
  "reversed",
  "reverse",
  "retrograde",
  "inverse",
  "reversive"
];

export default IconBackward as IconComponent;