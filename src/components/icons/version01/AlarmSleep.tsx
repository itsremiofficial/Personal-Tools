import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconAlarmSleep: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity={duotone ? "0.5" : "1"} cx="12" cy="13.0005" r="9" stroke="currentColor" strokeWidth={width} /><path d="M3.5 4.50049L7.50002 2.00049" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M20.5 4.50049L16.5 2.00049" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M9 10.0005H15L9 16.0005H15" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M12 22.0005C16.9706 22.0005 21 17.9711 21 13.0005C21 8.02993 16.9706 4.00049 12 4.00049C7.02944 4.00049 3 8.02993 3 13.0005C3 17.9711 7.02944 22.0005 12 22.0005Z" fill="currentColor" /><path d="M9.00002 10.7505C8.58581 10.7505 8.25002 10.4147 8.25002 10.0005C8.25002 9.58627 8.58581 9.25049 9.00002 9.25049H15C15.3034 9.25049 15.5768 9.43322 15.6929 9.71348C15.809 9.99373 15.7449 10.3163 15.5304 10.5308L10.8107 15.2505H15C15.4142 15.2505 15.75 15.5863 15.75 16.0005C15.75 16.4147 15.4142 16.7505 15 16.7505H9.00002C8.69668 16.7505 8.4232 16.5678 8.30711 16.2875C8.19103 16.0072 8.25519 15.6847 8.46969 15.4702L13.1894 10.7505H9.00002Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M8.2405 2.34034C8.45409 2.6789 8.3502 3.12489 8.00844 3.33648L4.11657 5.74611C3.77481 5.9577 3.32461 5.85478 3.11102 5.51623C2.89742 5.17767 3.00131 4.73169 3.34307 4.52009L7.23494 2.11046C7.5767 1.89887 8.0269 2.00179 8.2405 2.34034Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M15.7595 2.34034C15.9731 2.00179 16.4233 1.89887 16.7651 2.11047L20.6569 4.52009C20.9987 4.73169 21.1026 5.17767 20.889 5.51623C20.6754 5.85478 20.2252 5.9577 19.8834 5.74611L15.9916 3.33648C15.6498 3.12488 15.5459 2.6789 15.7595 2.34034Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8.13602 1.60309C8.35555 1.95434 8.24877 2.41706 7.89751 2.63659L3.89749 5.13659C3.54624 5.35612 3.08353 5.24934 2.86399 4.89809C2.64446 4.54683 2.75124 4.08412 3.1025 3.86459L7.10252 1.36459C7.45377 1.14506 7.91649 1.25184 8.13602 1.60309ZM15.864 1.60309C16.0835 1.25184 16.5462 1.14506 16.8975 1.36459L20.8975 3.86459C21.2487 4.08412 21.3555 4.54684 21.136 4.89809C20.9165 5.24934 20.4537 5.35612 20.1025 5.13659L16.1025 2.63659C15.7512 2.41705 15.6445 1.95434 15.864 1.60309Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12 22.0006C16.9706 22.0006 21 17.9712 21 13.0006C21 8.03003 16.9706 4.00059 12 4.00059C7.02943 4.00059 2.99999 8.03003 2.99999 13.0006C2.99999 17.9712 7.02943 22.0006 12 22.0006ZM8.99999 10.7506C8.58578 10.7506 8.24999 10.4148 8.24999 10.0006C8.24999 9.58638 8.58578 9.25059 8.99999 9.25059H15C15.3033 9.25059 15.5768 9.43332 15.6929 9.71358C15.809 9.99383 15.7448 10.3164 15.5303 10.5309L10.8107 15.2506H15C15.4142 15.2506 15.75 15.5864 15.75 16.0006C15.75 16.4148 15.4142 16.7506 15 16.7506H8.99999C8.69665 16.7506 8.42317 16.5679 8.30708 16.2876C8.191 16.0073 8.25517 15.6848 8.46966 15.4703L13.1893 10.7506H8.99999Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconAlarmSleep as IconComponentType).keywords = [
  "alarm",
  "sleep",
  "alarum",
  "alarm system",
  "alert",
  "consternation",
  "alarm clock",
  "horrify",
  "appall",
  "dismay",
  "appal",
  "nap",
  "slumber",
  "rest",
  "quietus",
  "kip",
  "eternal sleep",
  "eternal rest",
  "snooze",
  "doze"
];

export default IconAlarmSleep as IconComponentType;