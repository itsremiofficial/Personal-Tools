import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconBatteryDisable: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.34" : "1"} d="M20.5 9.5C22 9.5 22 10 22 11V13C22 14 22 14.5 20.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M4 21.5L16 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7 5C3 5 2 6 2 10V14C2 17.4 2.72 18.63 5.39 18.92" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M13 19.0001C17 19.0001 18 18.0001 18 14.0001V10.0001C18 6.61008 17.28 5.37008 14.63 5.08008" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.4192 8.99998C20.2792 8.98998 20.0992 8.97998 19.8992 8.97998C19.5092 8.97998 19.1992 9.28998 19.1992 9.67998V14.33C19.1992 14.72 19.5092 15.03 19.8992 15.03C20.0992 15.03 20.2692 15.02 20.4392 15.01C21.9992 14.83 21.9992 13.73 21.9992 12.93V11.07C21.9992 10.27 21.9992 9.16998 20.4192 8.99998Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M14.5 4.87004L5.52 19.09C2.87 18.71 2 17.27 2 13.86V10.14C2 6.04004 3.25 4.79004 7.35 4.79004H12.93C13.51 4.79004 14.03 4.81004 14.5 4.87004Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M18.2792 10.1401V13.8601C18.2792 16.8101 15.8792 19.2101 12.9292 19.2101H7.44922L16.2292 5.31006C17.7492 6.00006 18.2792 7.46006 18.2792 10.1401Z" fill="currentColor" /><path d="M4.00088 22.2501C3.86088 22.2501 3.72088 22.2101 3.60088 22.1301C3.25088 21.9101 3.14088 21.4501 3.37088 21.1001L15.3709 2.10012C15.5909 1.75012 16.0609 1.65012 16.4009 1.87012C16.7509 2.09012 16.8609 2.55012 16.6309 2.90012L4.63088 21.9001C4.49088 22.1301 4.25088 22.2501 4.00088 22.2501Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBatteryDisable as IconComponentType).keywords = [
  "battery",
  "disable",
  "bombardment",
  "stamp battery",
  "barrage",
  "shelling",
  "assault and battery",
  "assault",
  "barrage fire",
  "electric battery",
  "alternator",
  "incapacitate",
  "handicap",
  "disenable",
  "invalid",
  "maim",
  "idle",
  "inactivity",
  "inactivate",
  "quiesce"
];

export default IconBatteryDisable as IconComponentType;