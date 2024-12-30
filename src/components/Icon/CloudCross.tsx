import { FC } from 'react';
import { IconProps } from "../../types";

const IconCloudCross: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.6097 19.9999C17.9497 20.0099 19.2397 19.5099 20.2297 18.6099C23.4997 15.7499 21.7497 10.0099 17.4397 9.46995C15.8997 0.129949 2.42973 3.66995 5.61973 12.5599" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.27938 12.9698C6.74938 12.6998 6.15938 12.5598 5.56938 12.5698C0.909376 12.8998 0.919376 19.6798 5.56938 20.0098" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.8203 9.88998C16.3403 9.62998 16.9003 9.48998 17.4803 9.47998" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M12.3905 18.5898L9.56055 21.4098" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.3905 21.4098L9.56055 18.5898" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.4798 10.6901L2.00977 15.7201C2.11977 14.1301 3.10977 12.4601 5.10977 11.9701C4.51977 9.6401 5.01977 7.4501 6.53977 5.8601C8.26977 4.0501 11.0298 3.3301 13.4098 4.0701C15.5998 4.7401 17.1398 6.5401 17.6898 9.0401C18.7798 9.2901 19.7498 9.8601 20.4798 10.6901Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M20.17 18.7399C19.13 19.6899 17.77 20.2199 16.35 20.2199H5.97C3.23 20.0199 2 17.9099 2 16.0299C2 15.9299 2 15.8299 2.01 15.7199L20.48 10.6899C21.05 11.2999 21.48 12.0499 21.74 12.9099C22.4 15.0799 21.8 17.3099 20.17 18.7399Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconCloudCross;