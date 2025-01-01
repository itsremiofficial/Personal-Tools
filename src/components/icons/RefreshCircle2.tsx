import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconRefreshCircle2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity={duotone ? "0.5" : "1"} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={width} /><path d="M15.9775 8.71452L15.5355 8.2621C13.5829 6.26318 10.4171 6.26318 8.46447 8.2621C6.51184 10.261 6.51184 13.5019 8.46447 15.5008C10.4171 17.4997 13.5829 17.4997 15.5355 15.5008C16.671 14.3384 17.1462 12.7559 16.9611 11.242M15.9775 8.71452H13.3258M15.9775 8.71452V6" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity={duotone ? "0.5" : "1"} cx="12" cy="12" r="10" fill="currentColor" /><path d="M16.4017 6.28616C16.4017 5.98121 16.217 5.70662 15.9346 5.59158C15.6522 5.47653 15.3283 5.54393 15.1152 5.76208L14.3647 6.53037C12.244 5.55465 9.66551 5.95905 7.92796 7.7378C5.69068 10.0281 5.69068 13.7344 7.92796 16.0247C10.1748 18.3248 13.8252 18.3248 16.072 16.0247C17.3754 14.6904 17.9168 12.8779 17.7055 11.1507C17.6552 10.7396 17.2812 10.447 16.87 10.4973C16.4589 10.5476 16.1663 10.9217 16.2166 11.3328C16.3757 12.6335 15.9667 13.9859 14.999 14.9765C13.3407 16.6742 10.6593 16.6742 9.00097 14.9765C7.33301 13.269 7.33301 10.4935 9.00097 8.78596C10.1467 7.61303 11.7795 7.25143 13.225 7.69705L12.4635 8.47659C12.2527 8.69245 12.1917 9.01364 12.3088 9.29174C12.4259 9.56984 12.6983 9.75067 13 9.75067H15.6517C16.0659 9.75067 16.4017 9.41489 16.4017 9.00067V6.28616Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM15.9346 5.59158C16.217 5.70662 16.4017 5.98121 16.4017 6.28616V9.00067C16.4017 9.41489 16.0659 9.75067 15.6517 9.75067H13C12.6983 9.75067 12.4259 9.56984 12.3088 9.29174C12.1917 9.01364 12.2527 8.69245 12.4635 8.47659L13.225 7.69705C11.7795 7.25143 10.1467 7.61303 9.00097 8.78596C7.33301 10.4935 7.33301 13.269 9.00097 14.9765C10.6593 16.6742 13.3407 16.6742 14.999 14.9765C15.6769 14.2826 16.0805 13.4112 16.2069 12.5045C16.2651 12.0865 16.5972 11.7349 17.0192 11.7349C17.4246 11.7349 17.7609 12.0595 17.7217 12.463C17.5957 13.7606 17.0471 15.0265 16.072 16.0247C13.8252 18.3248 10.1748 18.3248 7.92796 16.0247C5.69068 13.7344 5.69068 10.0281 7.92796 7.7378C9.66551 5.95905 12.244 5.55465 14.3647 6.53037L15.1152 5.76208C15.3283 5.54393 15.6522 5.47653 15.9346 5.59158Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRefreshCircle2 as IconComponentType).keywords = [
  "refresh",
  "circle",
  "2",
  "refreshen",
  "freshen",
  "review",
  "freshen up",
  "brush up",
  "refresher",
  "refreshment",
  "rejuvenate",
  "revive",
  "round",
  "rotary",
  "environ",
  "roundabout",
  "circulate",
  "circuit",
  "encircle",
  "surround",
  "dress circle",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out"
];

export default IconRefreshCircle2 as IconComponentType;