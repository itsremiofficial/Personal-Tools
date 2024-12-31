import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconAttachCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.2009 11.8002L10.7908 13.2102C10.0108 13.9902 10.0108 15.2602 10.7908 16.0402C11.5708 16.8202 12.8408 16.8202 13.6208 16.0402L15.8409 13.8202C17.4009 12.2602 17.4009 9.73023 15.8409 8.16023C14.2809 6.60023 11.7508 6.60023 10.1808 8.16023L7.76086 10.5802C6.42086 11.9202 6.42086 14.0902 7.76086 15.4302" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" /><path d="M12.1998 17.3799C11.4998 17.3799 10.7898 17.1099 10.2598 16.5799C9.73977 16.0599 9.44977 15.3699 9.44977 14.6399C9.44977 13.9099 9.73977 13.2099 10.2598 12.6999L11.6697 11.2899C11.9597 10.9999 12.4397 10.9999 12.7297 11.2899C13.0197 11.5799 13.0197 12.0599 12.7297 12.3499L11.3198 13.7599C11.0798 13.9999 10.9498 14.3099 10.9498 14.6399C10.9498 14.9699 11.0798 15.2899 11.3198 15.5199C11.8098 16.0099 12.5998 16.0099 13.0898 15.5199L15.3098 13.2999C16.5798 12.0299 16.5798 9.96994 15.3098 8.69994C14.0398 7.42994 11.9798 7.42994 10.7098 8.69994L8.28973 11.1199C7.77973 11.6299 7.49976 12.2999 7.49976 13.0099C7.49976 13.7199 7.77973 14.3999 8.28973 14.8999C8.57973 15.1899 8.57973 15.6699 8.28973 15.9599C7.99973 16.2499 7.51974 16.2499 7.22974 15.9599C6.43974 15.1699 6.00977 14.1199 6.00977 12.9999C6.00977 11.8799 6.43974 10.8299 7.22974 10.0399L9.64978 7.61992C11.4998 5.76992 14.5198 5.76992 16.3698 7.61992C18.2198 9.46992 18.2198 12.4899 16.3698 14.3399L14.1498 16.5599C13.6098 17.1099 12.9098 17.3799 12.1998 17.3799Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconAttachCircle as IconComponentType).keywords = [
  "attach",
  "circle",
  "seize",
  "confiscate",
  "sequester",
  "impound",
  "tether",
  "enclose",
  "bind",
  "append",
  "fasten",
  "round",
  "rotary",
  "environ",
  "roundabout",
  "circulate",
  "circuit",
  "encircle",
  "surround",
  "dress circle"
];

export default IconAttachCircle as IconComponentType;