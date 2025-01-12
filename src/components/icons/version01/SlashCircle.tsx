import { FC } from 'react';

const IconSlashCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.2939 7.17078L11.9998 12.0004L10.7058 16.83" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><circle opacity={duotone ? "0.5" : "1"} cx="12" cy="12.0004" r="10" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M22 12.0004C22 17.5232 17.5228 22.0004 12 22.0004C6.47715 22.0004 2 17.5232 2 12.0004C2 6.47752 6.47715 2.00037 12 2.00037C17.5228 2.00037 22 6.47752 22 12.0004Z" fill="currentColor" /><path d="M14.0189 7.36495C14.1261 6.96486 13.8886 6.5536 13.4885 6.4464C13.0884 6.33919 12.6772 6.57663 12.57 6.97673L9.9818 16.636C9.87459 17.0361 10.112 17.4473 10.5121 17.5545C10.9122 17.6617 11.3235 17.4243 11.4307 17.0242L14.0189 7.36495Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 22.0004C17.5228 22.0004 22 17.5232 22 12.0004C22 6.47752 17.5228 2.00037 12 2.00037C6.47715 2.00037 2 6.47752 2 12.0004C2 17.5232 6.47715 22.0004 12 22.0004ZM14.0184 7.36487C14.1257 6.96477 13.8882 6.55352 13.4881 6.44631C13.088 6.33911 12.6768 6.57654 12.5696 6.97664L9.98137 16.6359C9.87416 17.036 10.1116 17.4473 10.5117 17.5545C10.9118 17.6617 11.323 17.4242 11.4303 17.0241L14.0184 7.36487Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSlashCircle as IconComponent).keywords = [
  "slash",
  "circle",
  "flog",
  "gash",
  "lash",
  "cut",
  "slice",
  "whip",
  "thrash",
  "trounce",
  "thrash about",
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

export default IconSlashCircle as IconComponent;