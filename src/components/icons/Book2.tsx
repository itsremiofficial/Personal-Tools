import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconBook2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 8.00061C4 5.17218 4 3.75797 4.87868 2.87929C5.75736 2.00061 7.17157 2.00061 10 2.00061H14C16.8284 2.00061 18.2426 2.00061 19.1213 2.87929C20 3.75797 20 5.17218 20 8.00061V16.0006C20 18.829 20 20.2433 19.1213 21.1219C18.2426 22.0006 16.8284 22.0006 14 22.0006H10C7.17157 22.0006 5.75736 22.0006 4.87868 21.1219C4 20.2433 4 18.829 4 16.0006V8.00061Z" stroke="currentColor" strokeWidth={width} /><path d="M19.8978 16.0006H7.89778C6.96781 16.0006 6.50282 16.0006 6.12132 16.1028C5.08604 16.3802 4.2774 17.1889 4 18.2242" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M8 7.00061H16" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M8 10.5006H13" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M19.5 19.0006H8" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M4.72718 2.73381C5.03258 2.42584 5.46135 2.22505 6.27103 2.11527C7.10452 2.00226 8.2092 2.00049 9.7931 2.00049H14.2069C15.7908 2.00049 16.8955 2.00226 17.729 2.11527C18.5387 2.22505 18.9674 2.42584 19.2728 2.73381C19.5782 3.04178 19.7773 3.47417 19.8862 4.29069C19.9982 5.13122 20 6.24522 20 7.8425L20 18.0005H7.42598C6.34236 18.0005 5.96352 18.0062 5.67321 18.0686C5.15982 18.179 4.71351 18.4156 4.38811 18.7352C4.27837 18.843 4.22351 18.8968 4.09696 19.2402C4.02435 19.4372 4 19.5691 4 19.7008V7.8425C4 6.24522 4.00176 5.13122 4.11382 4.29069C4.22268 3.47417 4.42179 3.04178 4.72718 2.73381Z" fill="currentColor" /><path d="M20 18.0005H7.42598C6.34236 18.0005 5.96352 18.0062 5.67321 18.0686C5.15982 18.179 4.71351 18.4156 4.38811 18.7352C4.27837 18.843 4.22351 18.8968 4.09696 19.2402C3.97041 19.5836 3.99045 19.7293 4.03053 20.0205C4.03761 20.0719 4.04522 20.1221 4.05343 20.171C4.16271 20.8233 4.36259 21.1687 4.66916 21.4147C4.97573 21.6607 5.40616 21.8211 6.21896 21.9088C7.05566 21.9991 8.1646 22.0005 9.75461 22.0005H14.1854C15.7754 22.0005 16.8844 21.9991 17.7211 21.9088C18.5339 21.8211 18.9643 21.6607 19.2709 21.4147C19.4705 21.2545 19.6249 21.0522 19.7385 20.7505H8C7.58579 20.7505 7.25 20.4147 7.25 20.0005C7.25 19.5863 7.58579 19.2505 8 19.2505H19.9754C19.9926 18.8873 19.9982 18.4746 20 18.0005Z" fill="currentColor" /><path d="M7.25 7.00049C7.25 6.58627 7.58579 6.25049 8 6.25049H16C16.4142 6.25049 16.75 6.58627 16.75 7.00049C16.75 7.4147 16.4142 7.75049 16 7.75049H8C7.58579 7.75049 7.25 7.4147 7.25 7.00049Z" fill="currentColor" /><path d="M8 9.75049C7.58579 9.75049 7.25 10.0863 7.25 10.5005C7.25 10.9147 7.58579 11.2505 8 11.2505H13C13.4142 11.2505 13.75 10.9147 13.75 10.5005C13.75 10.0863 13.4142 9.75049 13 9.75049H8Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.72718 2.71293C5.03258 2.41373 5.46135 2.21865 6.27103 2.112C7.10452 2.00221 8.2092 2.00049 9.7931 2.00049H14.2069C15.7908 2.00049 16.8955 2.00221 17.729 2.112C18.5387 2.21865 18.9674 2.41373 19.2728 2.71293C19.5782 3.01213 19.7773 3.43221 19.8862 4.22548C19.9982 5.04208 20 6.12436 20 7.67616V15.514L7.34563 15.514C6.44305 15.5137 5.82716 15.5135 5.29899 15.6521C4.82674 15.7761 4.38867 15.9786 4 16.2447V7.67616C4 6.12436 4.00176 5.04208 4.11382 4.22548C4.22268 3.43221 4.42179 3.01213 4.72718 2.71293ZM7.58621 5.78427C7.12914 5.78427 6.75862 6.14728 6.75862 6.59508C6.75862 7.04288 7.12914 7.40589 7.58621 7.40589H16.4138C16.8709 7.40589 17.2414 7.04288 17.2414 6.59508C17.2414 6.14728 16.8709 5.78427 16.4138 5.78427H7.58621ZM6.75862 10.3789C6.75862 9.93107 7.12914 9.56806 7.58621 9.56806H13.1034C13.5605 9.56806 13.931 9.93107 13.931 10.3789C13.931 10.8267 13.5605 11.1897 13.1034 11.1897H7.58621C7.12914 11.1897 6.75862 10.8267 6.75862 10.3789Z" fill="currentColor" /><path d="M7.47341 17.1356C6.39395 17.1356 6.01657 17.1426 5.72738 17.2185C4.93365 17.4269 4.30088 18.0049 4.02952 18.7563C4.0463 19.1387 4.07259 19.4751 4.11382 19.7755C4.22268 20.5688 4.42179 20.9888 4.72718 21.288C5.03258 21.5872 5.46135 21.7823 6.27103 21.889C7.10452 21.9988 8.2092 22.0005 9.7931 22.0005H14.2069C15.7908 22.0005 16.8955 21.9988 17.729 21.889C18.5387 21.7823 18.9674 21.5872 19.2728 21.288C19.4894 21.0758 19.6526 20.8028 19.768 20.3789H7.58621C7.12914 20.3789 6.75862 20.0159 6.75862 19.5681C6.75862 19.1203 7.12914 18.7572 7.58621 18.7572H19.9704C19.9909 18.2913 19.9972 17.7569 19.9991 17.1356H7.47341Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBook2 as IconComponentType).keywords = [
  "book",
  "2",
  "daybook",
  "record",
  "script",
  "playscript",
  "ledger",
  "account book",
  "volume",
  "reserve",
  "hold",
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

export default IconBook2 as IconComponentType;