import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconPulse: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 15.0003H6.39445C7.1804 15.0003 7.57337 15.0003 7.90501 15.1778C8.23665 15.3553 8.45463 15.6822 8.8906 16.3362L9.05039 16.5759C9.47306 17.2099 9.68439 17.5269 9.97087 17.5098C10.2573 17.4928 10.4297 17.153 10.7743 16.4735L12.7404 12.5968C13.0987 11.8902 13.2779 11.5368 13.5711 11.5251C13.8642 11.5133 14.0711 11.8511 14.485 12.5268L15.1222 13.5672C15.5512 14.2675 15.7656 14.6176 16.1072 14.8089C16.4487 15.0003 16.8593 15.0003 17.6805 15.0003H19" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M2 12.0002C2 7.2862 2 4.92918 3.46447 3.46471C4.92893 2.00024 7.28595 2.00024 12 2.00024C16.714 2.00024 19.0711 2.00024 20.5355 3.46471C22 4.92918 22 7.2862 22 12.0002C22 16.7143 22 19.0713 20.5355 20.5358C19.0711 22.0002 16.714 22.0002 12 22.0002C7.28595 22.0002 4.92893 22.0002 3.46447 20.5358C2 19.0713 2 16.7143 2 12.0002Z" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M2 12.0002C2 7.2862 2 4.92918 3.46447 3.46471C4.92893 2.00024 7.28595 2.00024 12 2.00024C16.714 2.00024 19.0711 2.00024 20.5355 3.46471C22 4.92918 22 7.2862 22 12.0002C22 16.7143 22 19.0713 20.5355 20.5358C19.0711 22.0002 16.714 22.0002 12 22.0002C7.28595 22.0002 4.92893 22.0002 3.46447 20.5358C2 19.0713 2 16.7143 2 12.0002Z" fill="currentColor" /><path d="M15.0994 12.0938C14.9145 11.7919 14.7343 11.4975 14.558 11.2868C14.3708 11.0631 14.0427 10.7555 13.541 10.7756C13.0392 10.7957 12.7369 11.1287 12.5682 11.3666C12.4094 11.5908 12.2533 11.8987 12.0933 12.2144L12.0933 12.2144L10.1054 16.1342C10.0303 16.2822 9.96781 16.4054 9.91157 16.5113C9.84318 16.4128 9.76649 16.2979 9.67443 16.1598L9.49755 15.8944C9.2942 15.5894 9.11407 15.3192 8.9414 15.1061C8.75414 14.8749 8.54321 14.6686 8.2589 14.5164C7.9746 14.3643 7.6859 14.3032 7.38972 14.2756C7.11663 14.2502 6.79189 14.2502 6.42526 14.2502L5 14.2502C4.58579 14.2502 4.25 14.586 4.25 15.0002C4.25 15.4144 4.58579 15.7502 5 15.7502H6.39445C6.80113 15.7502 7.0553 15.7509 7.25047 15.7691C7.43017 15.7859 7.50379 15.8136 7.55112 15.8389C7.59845 15.8643 7.66234 15.9101 7.77596 16.0504C7.89936 16.2027 8.04097 16.4137 8.26656 16.7521L8.4526 17.0312C8.64087 17.3138 8.8261 17.5918 9.00554 17.7901C9.1984 18.0033 9.52819 18.2874 10.0153 18.2584C10.5025 18.2295 10.7963 17.9083 10.9626 17.6738C11.1173 17.4557 11.2683 17.1577 11.4218 16.8548L13.4092 12.9359C13.4876 12.7814 13.553 12.6525 13.6119 12.5417C13.6794 12.6475 13.7549 12.7707 13.8454 12.9184L14.4994 13.9862C14.6995 14.3129 14.8766 14.602 15.0485 14.8302C15.2348 15.0775 15.4477 15.2991 15.7406 15.4632C16.0336 15.6273 16.3337 15.6931 16.642 15.7228C16.9263 15.7502 17.2653 15.7502 17.6485 15.7502L19 15.7502C19.4142 15.7502 19.75 15.4144 19.75 15.0002C19.75 14.586 19.4142 14.2502 19 14.2502H17.6805C17.2557 14.2502 16.9897 14.2494 16.786 14.2297C16.5983 14.2116 16.5223 14.1817 16.4737 14.1545C16.4251 14.1273 16.36 14.0781 16.2465 13.9275C16.1233 13.764 15.9837 13.5377 15.7618 13.1754L15.0994 12.0938Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.46447 3.46471C2 4.92918 2 7.2862 2 12.0002C2 16.7143 2 19.0713 3.46447 20.5358C4.92893 22.0002 7.28595 22.0002 12 22.0002C16.714 22.0002 19.0711 22.0002 20.5355 20.5358C22 19.0713 22 16.7143 22 12.0002C22 7.2862 22 4.92918 20.5355 3.46471C19.0711 2.00024 16.714 2.00024 12 2.00024C7.28595 2.00024 4.92893 2.00024 3.46447 3.46471ZM15.0994 12.0938C14.9145 11.7919 14.7343 11.4975 14.558 11.2867C14.3708 11.0631 14.0427 10.7554 13.541 10.7756C13.0392 10.7957 12.7369 11.1286 12.5682 11.3666C12.4094 11.5908 12.2533 11.8986 12.0933 12.2144L10.1054 16.1341C10.0303 16.2821 9.96781 16.4054 9.91157 16.5113C9.84318 16.4128 9.76649 16.2978 9.67443 16.1597L9.49755 15.8944C9.2942 15.5893 9.11407 15.3191 8.9414 15.106C8.75414 14.8749 8.54321 14.6685 8.2589 14.5164C7.9746 14.3642 7.6859 14.3032 7.38972 14.2756C7.11663 14.2501 6.79189 14.2501 6.42526 14.2502L5 14.2502C4.58579 14.2502 4.25 14.5859 4.25 15.0002C4.25 15.4144 4.58579 15.7502 5 15.7502H6.39445C6.80113 15.7502 7.0553 15.7509 7.25047 15.7691C7.43017 15.7859 7.50379 15.8136 7.55112 15.8389C7.59845 15.8642 7.66234 15.9101 7.77596 16.0503C7.89936 16.2026 8.04097 16.4137 8.26656 16.7521L8.4526 17.0312C8.64087 17.3137 8.8261 17.5917 9.00554 17.79C9.1984 18.0032 9.52819 18.2873 10.0153 18.2584C10.5025 18.2295 10.7963 17.9083 10.9626 17.6738C11.1173 17.4556 11.2683 17.1577 11.4218 16.8548L13.4092 12.9359C13.4876 12.7814 13.553 12.6525 13.6119 12.5417C13.6794 12.6474 13.7549 12.7707 13.8454 12.9184L14.4994 13.9861C14.6995 14.3129 14.8766 14.602 15.0485 14.8301C15.2348 15.0775 15.4477 15.299 15.7406 15.4632C16.0336 15.6273 16.3337 15.693 16.642 15.7228C16.9263 15.7502 17.2653 15.7502 17.6485 15.7502L19 15.7502C19.4142 15.7502 19.75 15.4144 19.75 15.0002C19.75 14.5859 19.4142 14.2502 19 14.2502H17.6805C17.2557 14.2502 16.9897 14.2494 16.786 14.2297C16.5983 14.2116 16.5223 14.1817 16.4737 14.1545C16.4251 14.1273 16.36 14.0781 16.2465 13.9275C16.1233 13.764 15.9837 13.5376 15.7618 13.1754L15.0994 12.0938Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconPulse;