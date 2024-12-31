import { FC } from 'react';
import { IconProps } from "../../types";

const IconHashtagDown: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 13V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M19 16V22L21 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M19 22L17 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><g opacity={duotone ? "0.4" : "1"}><path d="M9.95039 6.25977L8.90039 15.7298" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M13.1105 6.25977L12.0605 15.7298" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.5293 9.41992H15.9993" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 12.5801H15.47" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8.38971 2.16992V8.61993H1.92969V7.93994C1.92969 4.32994 4.0797 2.17993 7.6897 2.17993H8.38971V2.16992Z" fill="currentColor" /><path d="M21.7698 7.93018C21.7698 8.31018 21.4598 8.61017 21.0898 8.61017H15.3398V2.16016H16.0099C19.1899 2.17016 21.7698 4.75018 21.7698 7.93018Z" fill="currentColor" /><path d="M8.38947 15.5503V21.3103C8.38947 21.6903 8.07944 21.9903 7.70944 21.9903H7.69946C4.51946 21.9903 1.93945 19.4103 1.93945 16.2303V15.5503H8.38947Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M8.39944 8.61035H1.93945V15.5504H8.39944V8.61035Z" fill="currentColor" /><path d="M15.3306 8.61035V14.8704C15.3306 15.2504 15.0206 15.5504 14.6506 15.5504H8.39062V8.61035H15.3306Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M15.3306 2.16992H8.39062V8.61993H15.3306V2.16992Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M19.7998 20.7L17.8998 22.6099C17.3798 23.1299 16.5198 23.1299 15.9798 22.6099L14.3998 21.02C13.8798 20.49 13.8798 19.6399 14.3998 19.0999L16.3098 17.21L19.7998 20.7Z" fill="currentColor" /><path d="M22.6105 17.9L19.8005 20.7L16.3105 17.21L19.1105 14.39C19.6405 13.87 20.5005 13.87 21.0305 14.39L22.6105 15.98C23.1305 16.51 23.1305 17.38 22.6105 17.9Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconHashtagDown;