import { FC } from 'react';

const IconPulse2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 15.0002H5C5.63383 15.0002 5.95074 15.0002 6.23374 15.1215C6.51673 15.2428 6.73529 15.4723 7.17241 15.9313L8.31402 17.13C8.69807 17.5332 8.8901 17.7348 9.12399 17.7191C9.35788 17.7035 9.52124 17.478 9.84796 17.027L13.4781 12.0163C13.8177 11.5476 13.9875 11.3132 14.2282 11.3022C14.4688 11.2911 14.6594 11.5089 15.0405 11.9445L16.8179 13.9758C17.2591 14.48 17.4797 14.7321 17.7751 14.8662C18.0705 15.0002 18.4056 15.0002 19.0756 15.0002H22" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M2 12.0002C2 7.2862 2 4.92918 3.46447 3.46471C4.92893 2.00024 7.28595 2.00024 12 2.00024C16.714 2.00024 19.0711 2.00024 20.5355 3.46471C22 4.92918 22 7.2862 22 12.0002C22 16.7143 22 19.0713 20.5355 20.5358C19.0711 22.0002 16.714 22.0002 12 22.0002C7.28595 22.0002 4.92893 22.0002 3.46447 20.5358C2 19.0713 2 16.7143 2 12.0002Z" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M3.46447 3.46471C2 4.92918 2 7.2862 2 12.0002C2 12.8187 2 13.5662 2.00767 14.2502H5L5.10773 14.2501C5.63376 14.2493 6.10075 14.2486 6.52918 14.4322C6.9576 14.6158 7.27913 14.9545 7.64131 15.3359L7.71552 15.414L8.85712 16.6127C8.9656 16.7266 9.14832 16.7144 9.24061 16.587L12.8944 11.5438C13.0432 11.3381 13.1985 11.1236 13.3518 10.9655C13.5272 10.7846 13.7992 10.5711 14.1937 10.5529C14.5882 10.5348 14.8787 10.7225 15.0699 10.8865C15.2371 11.0299 15.4114 11.2292 15.5785 11.4204L17.3823 13.4819C17.868 14.037 17.9718 14.1318 18.085 14.1832C18.1982 14.2346 18.3379 14.2502 19.0756 14.2502H21.9923C22 13.5662 22 12.8187 22 12.0002C22 7.2862 22 4.92918 20.5355 3.46471C19.0711 2.00024 16.714 2.00024 12 2.00024C7.28595 2.00024 4.92893 2.00024 3.46447 3.46471Z" fill="currentColor" /><path d="M2.00769 14.2503C2.04417 17.5059 2.2543 19.3256 3.46449 20.5358C4.92896 22.0003 7.28598 22.0003 12 22.0003C16.7141 22.0003 19.0711 22.0003 20.5356 20.5358C21.7457 19.3256 21.9559 17.5059 21.9924 14.2503H19.0756C18.3379 14.2503 18.1983 14.2346 18.0851 14.1832C17.9718 14.1319 17.8681 14.0371 17.3823 13.4819L15.5785 11.4204C15.4114 11.2293 15.2371 11.0299 15.0699 10.8866C14.8787 10.7225 14.5883 10.5348 14.1938 10.553C13.7992 10.5711 13.5273 10.7847 13.3519 10.9655C13.1986 11.1236 13.0433 11.3381 12.8944 11.5438L9.24063 16.587C9.14835 16.7144 8.96562 16.7266 8.85714 16.6127L7.71554 15.4141L7.64133 15.336C7.27915 14.9545 6.95762 14.6158 6.5292 14.4322C6.10078 14.2486 5.63379 14.2493 5.10775 14.2502L5.00003 14.2503H2.00769Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.46447 3.46471C2 4.92918 2 7.2862 2 12.0002C2 12.8187 2 13.5662 2.00767 14.2502H5L5.10773 14.2501C5.63376 14.2493 6.10075 14.2486 6.52918 14.4322C6.9576 14.6158 7.27913 14.9545 7.64131 15.3359L7.71552 15.414L8.85712 16.6127C8.93865 16.6983 9.00536 16.7683 9.06418 16.828C9.11449 16.761 9.17125 16.6827 9.24061 16.587L12.8944 11.5438C13.0432 11.3381 13.1985 11.1236 13.3518 10.9655C13.5272 10.7846 13.7992 10.5711 14.1937 10.5529C14.5882 10.5348 14.8787 10.7225 15.0699 10.8865C15.2371 11.0299 15.4114 11.2292 15.5785 11.4204L17.3823 13.4819C17.868 14.037 17.9718 14.1318 18.085 14.1832C18.1982 14.2346 18.3379 14.2502 19.0756 14.2502H21.9923C22 13.5662 22 12.8187 22 12.0002C22 7.2862 22 4.92918 20.5355 3.46471C19.0711 2.00024 16.714 2.00024 12 2.00024C7.28595 2.00024 4.92893 2.00024 3.46447 3.46471Z" fill="currentColor" /><path d="M21.9563 15.7502H19.0756L18.9615 15.7504C18.4059 15.7513 17.9125 15.7521 17.4652 15.5492C17.0179 15.3462 16.6936 14.9743 16.3285 14.5556L16.2534 14.4696L14.4761 12.4384C14.395 12.3457 14.3284 12.2697 14.2697 12.2049C14.2171 12.2748 14.1578 12.3566 14.0855 12.4563L10.4324 17.4987C10.2894 17.6962 10.1391 17.9037 9.99032 18.0577C9.8191 18.2347 9.55618 18.4418 9.17422 18.4675C8.79226 18.4931 8.50402 18.323 8.31067 18.1704C8.1426 18.0378 7.96597 17.8522 7.79786 17.6755L6.62931 16.4485C6.14838 15.9435 6.04684 15.8574 5.9383 15.8109C5.82976 15.7644 5.69734 15.7502 5 15.7502H2.0437C2.1409 18.0906 2.45425 19.5256 3.46447 20.5358C4.92893 22.0002 7.28595 22.0002 12 22.0002C16.714 22.0002 19.0711 22.0002 20.5355 20.5358C21.5458 19.5256 21.8591 18.0906 21.9563 15.7502Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPulse2 as IconComponent).keywords = [
  "pulse",
  "2",
  "heartbeat",
  "pulsation",
  "heart rate",
  "pulsate",
  "throb",
  "beat",
  "impulse",
  "oximetry",
  "oximeter",
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

export default IconPulse2 as IconComponent;