import { FC } from 'react';

const IconConvert3dCube: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22.6709 15C22.6709 18.87 19.5409 22 15.6709 22L16.7209 20.25" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2.6709 9C2.6709 5.13 5.8009 2 9.6709 2L8.6209 3.75" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M14.3711 4.4502L18.3511 6.75018L22.2911 4.46021" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M18.3511 10.8203V6.74023" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M17.411 2.21L15.011 3.53996C14.471 3.83996 14.021 4.59995 14.021 5.21995V7.75999C14.021 8.37999 14.461 9.13998 15.011 9.43998L17.411 10.77C17.921 11.06 18.761 11.06 19.281 10.77L21.681 9.43998C22.221 9.13998 22.671 8.37999 22.671 7.75999V5.21995C22.671 4.59995 22.231 3.83996 21.681 3.53996L19.281 2.21C18.771 1.93 17.931 1.93 17.411 2.21Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M3.021 15.4502L6.991 17.7502L10.941 15.4602" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M6.99121 21.8203V17.7402" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M6.0609 13.21L3.6609 14.54C3.1209 14.84 2.6709 15.5999 2.6709 16.2199V18.76C2.6709 19.38 3.1109 20.14 3.6609 20.44L6.0609 21.77C6.5709 22.06 7.41089 22.06 7.93089 21.77L10.3309 20.44C10.8709 20.14 11.3209 19.38 11.3209 18.76V16.2199C11.3209 15.5999 10.8809 14.84 10.3309 14.54L7.93089 13.21C7.41089 12.93 6.5709 12.93 6.0609 13.21Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M15.6701 22.75C15.4001 22.75 15.1501 22.6 15.0201 22.37C14.8901 22.14 14.8901 21.85 15.0301 21.62L16.0801 19.87C16.2901 19.51 16.7501 19.4 17.1101 19.61C17.4701 19.82 17.5801 20.28 17.3701 20.64L17.1001 21.09C19.8601 20.44 21.9301 17.96 21.9301 15C21.9301 14.59 22.2701 14.25 22.6801 14.25C23.0901 14.25 23.4301 14.59 23.4301 15C23.4201 19.27 19.9401 22.75 15.6701 22.75Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M2.66992 9.75C2.25992 9.75 1.91992 9.41 1.91992 9C1.91992 4.73 5.39992 1.25 9.66992 1.25C9.93992 1.25 10.1899 1.4 10.3199 1.63C10.4499 1.86 10.4499 2.15 10.3099 2.38L9.25992 4.13C9.04992 4.49001 8.58992 4.60001 8.22992 4.39001C7.86992 4.18001 7.75992 3.71999 7.96992 3.35999L8.23993 2.90997C5.47993 3.55997 3.40993 6.04 3.40993 9C3.41993 9.41 3.07992 9.75 2.66992 9.75Z" fill="currentColor" /><path d="M11.3404 13.8499L8.20036 12.1599C7.87036 11.9799 7.47037 11.9799 7.14037 12.1599L4.00037 13.8499C3.77037 13.9699 3.63037 14.2199 3.63037 14.4899C3.63037 14.7599 3.77037 15.0099 4.00037 15.1299L7.14037 16.8199C7.31037 16.9099 7.49036 16.9499 7.67036 16.9499C7.85036 16.9499 8.03036 16.9099 8.20036 16.8199L11.3404 15.1299C11.5704 15.0099 11.7104 14.7599 11.7104 14.4899C11.7104 14.2199 11.5604 13.9799 11.3404 13.8499Z" fill="currentColor" /><path d="M6.62015 17.4101L3.70015 15.9502C3.48015 15.8402 3.22015 15.8501 3.00015 15.9801C2.79015 16.1101 2.66016 16.3402 2.66016 16.5902V19.3501C2.66016 19.8301 2.92014 20.2601 3.35014 20.4701L6.27016 21.9301C6.37016 21.9801 6.48015 22.0101 6.59015 22.0101C6.72015 22.0101 6.85015 21.9702 6.97015 21.9002C7.18015 21.7702 7.31015 21.5401 7.31015 21.2901V18.5302C7.32015 18.0502 7.05015 17.6201 6.62015 17.4101Z" fill="currentColor" /><path d="M12.33 15.9801C12.12 15.8501 11.86 15.8402 11.63 15.9502L8.71001 17.4101C8.28001 17.6201 8.02002 18.0502 8.02002 18.5302V21.2901C8.02002 21.5401 8.15002 21.7702 8.36002 21.9002C8.48002 21.9702 8.61002 22.0101 8.74002 22.0101C8.85002 22.0101 8.96001 21.9801 9.06001 21.9301L11.98 20.4701C12.41 20.2601 12.67 19.8301 12.67 19.3501V16.5902C12.67 16.3402 12.54 16.1101 12.33 15.9801Z" fill="currentColor" /><path d="M21.3404 3.82989L18.2004 2.13988C17.8704 1.95988 17.4704 1.95988 17.1404 2.13988L14.0004 3.82989C13.7704 3.94989 13.6304 4.19984 13.6304 4.46984C13.6304 4.73984 13.7704 4.98985 14.0004 5.10985L17.1404 6.79986C17.3104 6.88986 17.4904 6.92986 17.6704 6.92986C17.8504 6.92986 18.0304 6.88986 18.2004 6.79986L21.3404 5.10985C21.5704 4.98985 21.7104 4.73984 21.7104 4.46984C21.7104 4.18984 21.5604 3.94989 21.3404 3.82989Z" fill="currentColor" /><path d="M16.6201 7.37987L13.7001 5.91985C13.4801 5.80985 13.2202 5.81988 13.0002 5.94988C12.7902 6.07988 12.6602 6.30987 12.6602 6.55987V9.31987C12.6602 9.79987 12.9201 10.2299 13.3501 10.4399L16.2702 11.8999C16.3702 11.9499 16.4801 11.9798 16.5901 11.9798C16.7201 11.9798 16.8502 11.9399 16.9702 11.8699C17.1802 11.7399 17.3102 11.5099 17.3102 11.2599V8.49987C17.3202 8.01987 17.0501 7.58987 16.6201 7.37987Z" fill="currentColor" /><path d="M22.33 5.94988C22.12 5.81988 21.86 5.80985 21.63 5.91985L18.71 7.37987C18.28 7.58987 18.02 8.01987 18.02 8.49987V11.2599C18.02 11.5099 18.15 11.7399 18.36 11.8699C18.48 11.9399 18.61 11.9798 18.74 11.9798C18.85 11.9798 18.96 11.9499 19.06 11.8999L21.98 10.4399C22.41 10.2299 22.67 9.79987 22.67 9.31987V6.55987C22.67 6.30987 22.54 6.07988 22.33 5.94988Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.6711 22.75C15.4011 22.75 15.1511 22.6 15.0211 22.37C14.8911 22.14 14.8911 21.85 15.0311 21.62L16.0811 19.87C16.2911 19.51 16.7511 19.4 17.1111 19.61C17.4711 19.82 17.5811 20.28 17.3711 20.64L17.1011 21.09C19.8611 20.44 21.9311 17.96 21.9311 15C21.9311 14.59 22.2711 14.25 22.6811 14.25C23.0911 14.25 23.4311 14.59 23.4311 15C23.4211 19.27 19.9411 22.75 15.6711 22.75Z" fill="currentColor" /><path d="M2.6709 9.75C2.2609 9.75 1.9209 9.41 1.9209 9C1.9209 4.73 5.4009 1.25 9.6709 1.25C9.9409 1.25 10.1909 1.4 10.3209 1.63C10.4509 1.86 10.4509 2.15 10.3109 2.38L9.2609 4.14C9.0509 4.49 8.5909 4.61 8.2309 4.39C7.8809 4.18 7.7609 3.72 7.9809 3.36L8.2509 2.91C5.4809 3.56 3.4209 6.04 3.4209 9C3.4209 9.41 3.0809 9.75 2.6709 9.75Z" fill="currentColor" /><path d="M11.3409 13.8499L8.20086 12.1599C7.87086 11.9799 7.47086 11.9799 7.14086 12.1599L4.00086 13.8499C3.77086 13.9699 3.63086 14.2199 3.63086 14.4899C3.63086 14.7599 3.77086 15.0099 4.00086 15.1299L7.14086 16.8199C7.31086 16.9099 7.49086 16.9499 7.67086 16.9499C7.85086 16.9499 8.03086 16.9099 8.20086 16.8199L11.3409 15.1299C11.5709 15.0099 11.7109 14.7599 11.7109 14.4899C11.7109 14.2199 11.5609 13.9799 11.3409 13.8499Z" fill="currentColor" /><path d="M6.6209 17.4101L3.7009 15.9501C3.4809 15.8401 3.2209 15.8501 3.0009 15.9801C2.8009 16.1101 2.6709 16.3401 2.6709 16.5901V19.3501C2.6709 19.8301 2.9309 20.2601 3.3609 20.4701L6.2809 21.9301C6.3809 21.9701 6.4909 22.0001 6.6009 22.0001C6.7309 22.0001 6.8609 21.9601 6.9809 21.8901C7.1909 21.7601 7.3209 21.5301 7.3209 21.2801V18.5201C7.3209 18.0501 7.0509 17.6201 6.6209 17.4101Z" fill="currentColor" /><path d="M12.331 15.9801C12.121 15.8501 11.861 15.8401 11.631 15.9501L8.711 17.4101C8.281 17.6201 8.021 18.0501 8.021 18.5301V21.2901C8.021 21.5401 8.151 21.7701 8.361 21.9001C8.481 21.9601 8.611 22.0001 8.741 22.0001C8.851 22.0001 8.961 21.9701 9.061 21.9201L11.981 20.4601C12.411 20.2501 12.671 19.8201 12.671 19.3401V16.5801C12.671 16.3401 12.541 16.1101 12.331 15.9801Z" fill="currentColor" /><path d="M21.3409 3.82988L18.2009 2.13988C17.8709 1.95988 17.4709 1.95988 17.1409 2.13988L14.0009 3.82988C13.7709 3.94988 13.6309 4.19988 13.6309 4.46988C13.6309 4.73988 13.7709 4.98988 14.0009 5.10988L17.1409 6.79988C17.3109 6.88988 17.4909 6.92988 17.6709 6.92988C17.8509 6.92988 18.0309 6.88988 18.2009 6.79988L21.3409 5.10988C21.5709 4.98988 21.7109 4.73988 21.7109 4.46988C21.7109 4.18988 21.5609 3.94988 21.3409 3.82988Z" fill="currentColor" /><path d="M16.6209 7.37986L13.7009 5.91986C13.4809 5.80986 13.2209 5.81986 13.0009 5.94986C12.8009 6.07986 12.6709 6.30986 12.6709 6.55986V9.31986C12.6709 9.79986 12.9309 10.2299 13.3609 10.4399L16.2809 11.8999C16.3809 11.9499 16.4909 11.9799 16.6009 11.9799C16.7309 11.9799 16.8609 11.9399 16.9809 11.8699C17.1909 11.7399 17.3209 11.5099 17.3209 11.2599V8.49986C17.3209 8.01986 17.0509 7.58986 16.6209 7.37986Z" fill="currentColor" /><path d="M22.331 5.94986C22.121 5.81986 21.861 5.80986 21.631 5.91986L18.711 7.37986C18.281 7.58986 18.021 8.01986 18.021 8.49986V11.2599C18.021 11.5099 18.151 11.7399 18.361 11.8699C18.481 11.9399 18.611 11.9799 18.741 11.9799C18.851 11.9799 18.961 11.9499 19.061 11.8999L21.981 10.4399C22.411 10.2199 22.671 9.78986 22.671 9.31986V6.55986C22.671 6.30986 22.541 6.07986 22.331 5.94986Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconConvert3dCube as IconComponent).keywords = [
  "convert",
  "3d",
  "cube",
  "change over",
  "change",
  "exchange",
  "turn",
  "win over",
  "convince",
  "commute",
  "transformation",
  "alter",
  "3-d",
  "three-d",
  "postage",
  "qsar",
  "abit",
  "abstinent",
  "amityville",
  "arist",
  "barque",
  "block",
  "dice",
  "regular hexahedron",
  "square block",
  "third power",
  "cubic",
  "metre",
  "piece",
  "boss"
];

export default IconConvert3dCube as IconComponent;