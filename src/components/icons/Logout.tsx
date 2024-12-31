import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconLogout: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.90039 7.56023C9.21039 3.96023 11.0604 2.49023 15.1104 2.49023H15.2404C19.7104 2.49023 21.5004 4.28023 21.5004 8.75023V15.2702C21.5004 19.7402 19.7104 21.5302 15.2404 21.5302H15.1104C11.0904 21.5302 9.24039 20.0802 8.91039 16.5402" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M14.9991 12H3.61914" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.85 8.65039L2.5 12.0004L5.85 15.3504" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M9 7.2V16.79C9 20 11 22 14.2 22H16.79C19.99 22 21.99 20 21.99 16.8V7.2C22 4 20 2 16.8 2H14.2C11 2 9 4 9 7.2Z" fill="currentColor" /><path d="M5.56945 8.12002L2.21945 11.47C1.92945 11.76 1.92945 12.24 2.21945 12.53L5.56945 15.88C5.85945 16.17 6.33945 16.17 6.62945 15.88C6.91945 15.59 6.91945 15.11 6.62945 14.82L4.55945 12.75H15.2495C15.6595 12.75 15.9995 12.41 15.9995 12C15.9995 11.59 15.6595 11.25 15.2495 11.25H4.55945L6.62945 9.18002C6.77945 9.03002 6.84945 8.84002 6.84945 8.65002C6.84945 8.46002 6.77945 8.26002 6.62945 8.12002C6.33945 7.82002 5.86945 7.82002 5.56945 8.12002Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconLogout as IconComponentType).keywords = [
  "logout",
  "logoff",
  "output",
  "closure",
  "off",
  "unplug",
  "disconnect",
  "teardown",
  "disconnection",
  "disengagement"
];

export default IconLogout as IconComponentType;