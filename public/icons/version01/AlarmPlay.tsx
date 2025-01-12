import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconAlarmPlay: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity={duotone ? "0.5" : "1"} cx="12" cy="13.0005" r="9" stroke="currentColor" strokeWidth={width} /><path d="M13.8876 10.9353C14.9625 11.8122 15.5 12.2506 15.5 13.0005C15.5 13.7504 14.9625 14.1888 13.8876 15.0657C13.5909 15.3078 13.2966 15.5357 13.0261 15.7256C12.7888 15.8922 12.5201 16.0645 12.2419 16.2337C11.1695 16.8858 10.6333 17.2119 10.1524 16.8509C9.6715 16.4899 9.62779 15.7341 9.54038 14.2226C9.51566 13.7952 9.5 13.3761 9.5 13.0005C9.5 12.6248 9.51566 12.2058 9.54038 11.7783C9.62779 10.2668 9.6715 9.5111 10.1524 9.15009C10.6333 8.78908 11.1695 9.11514 12.2419 9.76728C12.5201 9.93646 12.7888 10.1088 13.0261 10.2754C13.2966 10.4653 13.5909 10.6932 13.8876 10.9353Z" stroke="currentColor" strokeWidth={width} /><path d="M3.5 4.50049L7.50002 2.00049" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M20.5 4.50049L16.5 2.00049" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.5" : "1"}><path d="M12 22.0005C16.9706 22.0005 21 17.9711 21 13.0005C21 8.02993 16.9706 4.00049 12 4.00049C7.02944 4.00049 3 8.02993 3 13.0005C3 17.9711 7.02944 22.0005 12 22.0005Z" fill="currentColor" /></g><path d="M13.0261 10.2754C12.7888 10.1088 12.5201 9.93646 12.2419 9.76728L12.2419 9.76728C11.1695 9.11514 10.6333 8.78908 10.1524 9.15009C9.6715 9.5111 9.62779 10.2668 9.54038 11.7783C9.51566 12.2058 9.5 12.6248 9.5 13.0005C9.5 13.3761 9.51566 13.7952 9.54038 14.2226C9.62779 15.7341 9.6715 16.4899 10.1524 16.8509C10.6333 17.2119 11.1695 16.8858 12.2419 16.2337C12.5201 16.0645 12.7888 15.8922 13.0261 15.7256C13.2966 15.5357 13.5909 15.3078 13.8876 15.0657C14.9625 14.1888 15.5 13.7504 15.5 13.0005C15.5 12.2506 14.9625 11.8122 13.8876 10.9353C13.5909 10.6932 13.2966 10.4653 13.0261 10.2754Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M8.2405 2.34034C8.45409 2.6789 8.3502 3.12489 8.00844 3.33648L4.11657 5.74611C3.77481 5.9577 3.32461 5.85478 3.11102 5.51623C2.89742 5.17767 3.00131 4.73169 3.34307 4.52009L7.23494 2.11046C7.5767 1.89887 8.0269 2.00179 8.2405 2.34034Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M15.7595 2.34034C15.9731 2.00179 16.4233 1.89887 16.7651 2.11047L20.6569 4.52009C20.9987 4.73169 21.1026 5.17767 20.889 5.51623C20.6754 5.85478 20.2252 5.9577 19.8834 5.74611L15.9916 3.33648C15.6498 3.12488 15.5459 2.6789 15.7595 2.34034Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 22.0006C16.9706 22.0006 21 17.9712 21 13.0006C21 8.03003 16.9706 4.00059 12 4.00059C7.02945 4.00059 3.00001 8.03003 3.00001 13.0006C3.00001 17.9712 7.02945 22.0006 12 22.0006ZM13.0261 10.2755C12.7889 10.1089 12.5201 9.93656 12.2419 9.76738C11.1695 9.11525 10.6333 8.78918 10.1524 9.15019C9.67151 9.5112 9.6278 10.2669 9.54039 11.7784C9.51567 12.2059 9.50001 12.6249 9.50001 13.0006C9.50001 13.3762 9.51567 13.7953 9.54039 14.2227C9.6278 15.7342 9.67151 16.49 10.1524 16.851C10.6333 17.212 11.1695 16.8859 12.2419 16.2338C12.5201 16.0646 12.7889 15.8923 13.0261 15.7257C13.2966 15.5358 13.5909 15.3079 13.8876 15.0658C14.9625 14.1889 15.5 13.7505 15.5 13.0006C15.5 12.2507 14.9625 11.8123 13.8876 10.9354C13.5909 10.6933 13.2966 10.4654 13.0261 10.2755Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M8.13603 1.60309C8.35556 1.95434 8.24878 2.41706 7.89753 2.63659L3.89751 5.13659C3.54625 5.35612 3.08354 5.24934 2.86401 4.89809C2.64448 4.54683 2.75126 4.08412 3.10251 3.86459L7.10253 1.36459C7.45379 1.14506 7.9165 1.25184 8.13603 1.60309ZM15.864 1.60309C16.0835 1.25184 16.5463 1.14506 16.8975 1.36459L20.8975 3.86459C21.2488 4.08412 21.3555 4.54684 21.136 4.89809C20.9165 5.24934 20.4538 5.35612 20.1025 5.13659L16.1025 2.63659C15.7513 2.41705 15.6445 1.95434 15.864 1.60309Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconAlarmPlay;