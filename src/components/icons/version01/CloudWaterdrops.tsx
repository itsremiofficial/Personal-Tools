import { FC } from 'react';

const IconCloudWaterdrops: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M14.381 8.02721C14.9767 7.81911 15.6178 7.70588 16.2857 7.70588C16.9404 7.70588 17.5693 7.81468 18.1551 8.01498M7.11616 10.6089C6.8475 10.5567 6.56983 10.5294 6.28571 10.5294C3.91878 10.5294 2 12.4256 2 14.7647C2 16.6611 3.26124 18.2664 5 18.8061M7.11616 10.6089C6.88706 9.9978 6.7619 9.33687 6.7619 8.64706C6.7619 5.52827 9.32028 3 12.4762 3C15.4159 3 17.8371 5.19371 18.1551 8.01498M7.11616 10.6089C7.68059 10.7184 8.20528 10.9374 8.66667 11.2426M18.1551 8.01498C20.393 8.78024 22 10.8811 22 13.3529C22 15.6958 20.5562 17.7055 18.5 18.5604" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M11 20.3333C11 21.2538 10.3284 22 9.5 22C8.67157 22 8 21.2538 8 20.3333C8 19.8285 8.45122 19.1755 8.85871 18.6888C9.19832 18.2831 9.80168 18.2831 10.1413 18.6888C10.5488 19.1755 11 19.8285 11 20.3333Z" stroke="currentColor" strokeWidth={width} /><path d="M16 20.3333C16 21.2538 15.3284 22 14.5 22C13.6716 22 13 21.2538 13 20.3333C13 19.8285 13.4512 19.1755 13.8587 18.6888C14.1983 18.2831 14.8017 18.2831 15.1413 18.6888C15.5488 19.1755 16 19.8285 16 20.3333Z" stroke="currentColor" strokeWidth={width} /><path d="M13.5 15.3333C13.5 16.2538 12.8284 17 12 17C11.1716 17 10.5 16.2538 10.5 15.3333C10.5 14.8285 10.9512 14.1755 11.3587 13.6888C11.6983 13.2831 12.3017 13.2831 12.6413 13.6888C13.0488 14.1755 13.5 14.8285 13.5 15.3333Z" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M16.2857 19C19.4416 19 22 16.4717 22 13.3529C22 10.8811 20.393 8.78024 18.1551 8.01498C17.8371 5.19371 15.4159 3 12.4762 3C9.32028 3 6.7619 5.52827 6.7619 8.64706C6.7619 9.33687 6.88706 9.9978 7.11616 10.6089C6.8475 10.5567 6.56983 10.5294 6.28571 10.5294C3.91878 10.5294 2 12.4256 2 14.7647C2 17.1038 3.91878 19 6.28571 19H16.2857Z" fill="currentColor" /><path d="M11 20.3336C11 21.2541 10.3284 22.0002 9.5 22.0002C8.67157 22.0002 8 21.2541 8 20.3336C8 19.8287 8.45122 19.1758 8.85871 18.689C9.19832 18.2833 9.80168 18.2833 10.1413 18.689C10.5488 19.1758 11 19.8287 11 20.3336Z" fill="currentColor" /><path d="M16 20.3336C16 21.2541 15.3284 22.0002 14.5 22.0002C13.6716 22.0002 13 21.2541 13 20.3336C13 19.8287 13.4512 19.1758 13.8587 18.689C14.1983 18.2833 14.8017 18.2833 15.1413 18.689C15.5488 19.1758 16 19.8287 16 20.3336Z" fill="currentColor" /><path d="M13.5 15.3336C13.5 16.2541 12.8284 17.0002 12 17.0002C11.1716 17.0002 10.5 16.2541 10.5 15.3336C10.5 14.8287 10.9512 14.1758 11.3587 13.689C11.6983 13.2833 12.3017 13.2833 12.6413 13.689C13.0488 14.1758 13.5 14.8287 13.5 15.3336Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 20.3336C11 21.2541 10.3284 22.0002 9.5 22.0002C8.67157 22.0002 8 21.2541 8 20.3336C8 19.8287 8.45122 19.1758 8.85871 18.689C9.19832 18.2833 9.80168 18.2833 10.1413 18.689C10.5488 19.1758 11 19.8287 11 20.3336Z" fill="currentColor" /><path d="M16 20.3336C16 21.2541 15.3284 22.0002 14.5 22.0002C13.6716 22.0002 13 21.2541 13 20.3336C13 19.8287 13.4512 19.1758 13.8587 18.689C14.1983 18.2833 14.8017 18.2833 15.1413 18.689C15.5488 19.1758 16 19.8287 16 20.3336Z" fill="currentColor" /><path d="M13.5 15.3336C13.5 16.2541 12.8284 17.0002 12 17.0002C11.1716 17.0002 10.5 16.2541 10.5 15.3336C10.5 14.8287 10.9512 14.1758 11.3587 13.689C11.6983 13.2833 12.3017 13.2833 12.6413 13.689C13.0488 14.1758 13.5 14.8287 13.5 15.3336Z" fill="currentColor" /><path d="M6.84604 19C6.88935 18.9129 6.93271 18.833 6.97346 18.7616C7.19853 18.3668 7.47468 18.0055 7.70855 17.7261C8.152 17.1964 8.76609 16.9169 9.38968 16.8874C9.13761 16.4125 9 15.8745 9 15.3336C9 14.6862 9.2695 14.1193 9.47346 13.7616C9.69853 13.3668 9.97468 13.0055 10.2085 12.7261C11.1477 11.6043 12.8523 11.6043 13.7915 12.7261C14.0253 13.0055 14.3015 13.3668 14.5265 13.7616C14.7305 14.1193 15 14.6862 15 15.3336C15 15.8745 14.8624 16.4125 14.6103 16.8874C15.2339 16.9169 15.848 17.1964 16.2915 17.7261C16.5253 18.0055 16.8015 18.3668 17.0265 18.7616C17.0577 18.8162 17.0904 18.8758 17.1234 18.9397C19.8822 18.5392 22 16.1905 22 13.3529C22 10.8811 20.393 8.78024 18.1551 8.01498C17.8371 5.19371 15.4159 3 12.4762 3C9.32028 3 6.7619 5.52827 6.7619 8.64706C6.7619 9.33687 6.88706 9.9978 7.11616 10.6089C6.8475 10.5567 6.56983 10.5294 6.28571 10.5294C3.91878 10.5294 2 12.4256 2 14.7647C2 17.1038 3.91878 19 6.28571 19H6.84604Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCloudWaterdrops as IconComponent).keywords = [
  "cloud",
  "waterdrops",
  "fog",
  "mist",
  "befog",
  "haze over",
  "becloud",
  "dapple",
  "mottle",
  "sully",
  "defile",
  "raindrops",
  "droplets",
  "raindrop",
  "droplet",
  "waterfalls",
  "waterfall",
  "rivulets",
  "drizzles",
  "waters"
];

export default IconCloudWaterdrops as IconComponent;