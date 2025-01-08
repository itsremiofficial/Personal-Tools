import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconDisplay: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 9C2 6.17157 2 4.75736 2.87868 3.87868C3.75736 3 5.17157 3 8 3H16C18.8284 3 20.2426 3 21.1213 3.87868C22 4.75736 22 6.17157 22 9V10C22 12.8284 22 14.2426 21.1213 15.1213C20.2426 16 18.8284 16 16 16H8C5.17157 16 3.75736 16 2.87868 15.1213C2 14.2426 2 12.8284 2 10V9Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M12 19V16.5M12 19L18 21M12 19L6 21" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2.87868 3.84352C2 4.68705 2 6.04468 2 8.75994V9.71993C2 12.4352 2 13.7928 2.87868 14.6363C3.75736 15.4799 5.17157 15.4799 8 15.4799H11.25H12.75H16C18.8284 15.4799 20.2426 15.4799 21.1213 14.6363C22 13.7928 22 12.4352 22 9.71993V8.75994C22 6.04468 22 4.68705 21.1213 3.84352C20.2426 3 18.8284 3 16 3H8C5.17157 3 3.75736 3 2.87868 3.84352Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M18.2374 19.5964L12.7502 17.8405V15.4795H11.2502V17.8405L5.76303 19.5964C5.37008 19.7221 5.15771 20.1299 5.28869 20.5071C5.41968 20.8844 5.84442 21.0882 6.23737 20.9625L12.0002 19.1184L17.763 20.9625C18.156 21.0882 18.5807 20.8844 18.7117 20.5071C18.8427 20.1299 18.6303 19.7221 18.2374 19.5964Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 8.75994C2 6.04468 2 4.68705 2.87868 3.84352C3.75736 3 5.17157 3 8 3H16C18.8284 3 20.2426 3 21.1213 3.84352C22 4.68705 22 6.04468 22 8.75994V9.71993C22 12.4352 22 13.7928 21.1213 14.6363C20.2426 15.4799 18.8284 15.4799 16 15.4799H12.75V17.8409L18.2372 19.5968C18.6301 19.7225 18.8425 20.1303 18.7115 20.5075C18.5805 20.8847 18.1558 21.0886 17.7628 20.9629L12 19.1188L6.23717 20.9629C5.84421 21.0886 5.41947 20.8847 5.28849 20.5075C5.1575 20.1303 5.36987 19.7225 5.76283 19.5968L11.25 17.8409V15.4799H8C5.17157 15.4799 3.75736 15.4799 2.87868 14.6363C2 13.7928 2 12.4352 2 9.71993V8.75994Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDisplay as IconComponentType).keywords = [
  "display",
  "exhibit",
  "showing",
  "show",
  "presentation",
  "expose",
  "reveal",
  "showcase",
  "showcasing",
  "exhibition"
];

export default IconDisplay as IconComponentType;