import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconRepeateMusic: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.0002 3L16.4402 5.34003L8.49023 5.32001C4.92023 5.32001 1.99023 8.25003 1.99023 11.84C1.99023 13.63 2.72022 15.26 3.90022 16.44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.0005 21.0001L7.56055 18.66L15.5105 18.6801C19.0805 18.6801 22.0105 15.75 22.0105 12.16C22.0105 10.37 21.2806 8.74006 20.1006 7.56006" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9 12H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M3.66 16.9314C3.47 16.9314 3.28 16.8614 3.13 16.7114C1.76 15.3314 1 13.5114 1 11.5814C1 7.57141 4.25 4.31139 8.25 4.31139L14.32 4.33141L13.23 3.29137C12.93 3.00137 12.92 2.53137 13.21 2.23137C13.5 1.93137 13.97 1.92141 14.27 2.21141L16.71 4.55138C16.93 4.76138 17 5.09139 16.89 5.37139C16.78 5.65139 16.5 5.84142 16.19 5.84142L8.24001 5.8214C5.07001 5.8214 2.49001 8.41142 2.49001 11.5914C2.49001 13.1214 3.08999 14.5714 4.17999 15.6614C4.46999 15.9514 4.46999 16.4314 4.17999 16.7214C4.03999 16.8614 3.85 16.9314 3.66 16.9314Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M9.7499 21.5014C9.5599 21.5014 9.3799 21.4314 9.2299 21.2914L6.7899 18.9514C6.5699 18.7414 6.4999 18.4114 6.6099 18.1314C6.7199 17.8514 6.9999 17.6614 7.3099 17.6614L15.2599 17.6814C18.4299 17.6814 21.0099 15.0914 21.0099 11.9114C21.0099 10.3814 20.4099 8.93146 19.3199 7.84146C19.0299 7.55146 19.0299 7.07146 19.3199 6.78146C19.6099 6.49146 20.0899 6.49146 20.3799 6.78146C21.7499 8.16146 22.5099 9.98141 22.5099 11.9114C22.5099 15.9214 19.2599 19.1814 15.2599 19.1814L9.1899 19.1614L10.2799 20.2014C10.5799 20.4914 10.5899 20.9614 10.2999 21.2614C10.1399 21.4214 9.9499 21.5014 9.7499 21.5014Z" fill="currentColor" /><path d="M9 15.5H15C16.93 15.5 18.5 13.92 18.5 12C18.5 10.08 16.93 8.5 15 8.5H9C7.07 8.5 5.5 10.08 5.5 12C5.5 13.92 7.07 15.5 9 15.5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRepeateMusic as IconComponentType).keywords = [
  "repeate",
  "music",
  "sheet music",
  "euphony",
  "medicine",
  "melody",
  "symphony",
  "orchestra",
  "musician",
  "song",
  "singing"
];

export default IconRepeateMusic as IconComponentType;