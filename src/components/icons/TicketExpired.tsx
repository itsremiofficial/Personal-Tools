import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconTicketExpired: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.9023 19.8701H17.3723C21.0723 19.8701 21.9923 18.9501 21.9923 15.2501C20.7123 15.2501 19.6823 14.2101 19.6823 12.9401C19.6823 11.6601 20.7123 10.6201 21.9923 10.6201V9.70008C21.9923 6.00008 21.0723 5.08008 17.3723 5.08008H10.9923V11.8701" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10.9936 16.87V19.87H8.22356C6.74356 19.87 5.87357 18.86 4.91357 16.54L4.73356 16.09C5.94356 15.61 6.53357 14.21 6.02357 13C5.53357 11.79 4.14357 11.21 2.92357 11.71L2.75357 11.28C1.31356 7.76 1.81357 6.53 5.33357 5.08L7.97357 4L10.9936 11.32V13.87" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.16219 19.8701H7.99219" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.8503 12.9402C19.8503 13.7402 20.5003 14.4002 21.3003 14.4002C21.6803 14.4002 22.0003 14.7102 22.0003 15.0902C22.0003 18.9302 20.8403 20.0902 17.0003 20.0902H11.7503V18.5002C11.7503 18.1102 11.4503 17.7902 11.0703 17.7602V14.9102C11.4503 14.8802 11.7503 14.5602 11.7503 14.1702V9.83018C11.7503 9.44018 11.4503 9.12018 11.0703 9.09018V4.93018H17.0003C20.8403 4.93018 22.0003 6.09018 22.0003 9.93018V10.7802C22.0003 11.1702 21.6803 11.4802 21.3003 11.4802C20.5003 11.4802 19.8503 12.1302 19.8503 12.9402Z" fill="currentColor" /><path d="M11.0701 9.08981C10.6601 9.08981 10.2501 9.41981 10.2501 9.82981V14.1698C10.2501 14.5798 10.5901 14.9198 11.0001 14.9198C11.0201 14.9198 11.0501 14.9198 11.0701 14.9098V17.7598C11.0501 17.7498 11.0201 17.7498 11.0001 17.7498C10.5901 17.7498 10.2501 18.0898 10.2501 18.4998V20.0898H8.49009C6.61009 20.0898 5.64009 18.6798 4.76009 16.5498L4.59009 16.1298C4.45009 15.7698 4.62009 15.3598 4.98009 15.2198C5.35009 15.0798 5.64009 14.7898 5.79009 14.4098C5.95009 14.0398 5.95009 13.6298 5.80009 13.2598C5.48009 12.4898 4.60009 12.1198 3.82009 12.4298C3.65009 12.5098 3.45009 12.5098 3.28009 12.4298C3.11009 12.3598 2.98009 12.2198 2.90009 12.0398L2.75009 11.6398C1.26009 8.01981 1.91009 6.46981 5.53009 4.96981L7.98009 3.95981C8.34009 3.80981 8.75009 3.97981 8.89009 4.33981L11.0701 9.08981Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTicketExpired as IconComponentType).keywords = [
  "ticket",
  "expired",
  "fine",
  "coupon",
  "itinerary",
  "passport",
  "place",
  "engineer",
  "flag",
  "airfare",
  "travel",
  "invalid",
  "terminated",
  "lapsed",
  "closed",
  "obsolete",
  "overdue",
  "deceased",
  "expiration",
  "expiry"
];

export default IconTicketExpired as IconComponentType;