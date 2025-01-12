import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconSettingsMinimalistic: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M7.84308 3.8026C9.8718 2.60119 10.8862 2.00049 12 2.00049C13.1138 2.00049 14.1282 2.60119 16.1569 3.8026L16.8431 4.20895C18.8718 5.41035 19.8862 6.01106 20.4431 7.00049C21 7.98992 21 9.19133 21 11.5941V12.4068C21 14.8096 21 16.0111 20.4431 17.0005C19.8862 17.9899 18.8718 18.5906 16.8431 19.792L16.1569 20.1984C14.1282 21.3998 13.1138 22.0005 12 22.0005C10.8862 22.0005 9.8718 21.3998 7.84308 20.1984L7.15692 19.792C5.1282 18.5906 4.11384 17.9899 3.55692 17.0005C3 16.0111 3 14.8096 3 12.4068V11.5941C3 9.19133 3 7.98992 3.55692 7.00049C4.11384 6.01106 5.1282 5.41035 7.15692 4.20895L7.84308 3.8026Z" stroke="currentColor" strokeWidth={width} /><circle cx="12" cy="12.0005" r="3" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} fillRule="evenodd" clipRule="evenodd" d="M12.4277 2.00049C11.3139 2.00049 10.2995 2.60119 8.27081 3.8026L7.58466 4.20895C5.55594 5.41035 4.54158 6.01106 3.98466 7.00049C3.42773 7.98992 3.42773 9.19133 3.42773 11.5941V12.4068C3.42773 14.8096 3.42773 16.0111 3.98466 17.0005C4.54158 17.9899 5.55594 18.5906 7.58466 19.792L8.27081 20.1984C10.2995 21.3998 11.3139 22.0005 12.4277 22.0005C13.5416 22.0005 14.5559 21.3998 16.5847 20.1984L17.2708 19.792C19.2995 18.5906 20.3139 17.9899 20.8708 17.0005C21.4277 16.0111 21.4277 14.8096 21.4277 12.4068V11.5941C21.4277 9.19133 21.4277 7.98992 20.8708 7.00049C20.3139 6.01106 19.2995 5.41035 17.2708 4.20895L16.5847 3.8026C14.5559 2.60119 13.5416 2.00049 12.4277 2.00049Z" fill="currentColor" /><path d="M12.4277 8.25049C10.3567 8.25049 8.67773 9.92942 8.67773 12.0005C8.67773 14.0716 10.3567 15.7505 12.4277 15.7505C14.4988 15.7505 16.1777 14.0716 16.1777 12.0005C16.1777 9.92942 14.4988 8.25049 12.4277 8.25049Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12.4277 2.00049C11.3139 2.00049 10.2995 2.60119 8.27081 3.8026L7.58466 4.20895C5.55594 5.41035 4.54158 6.01106 3.98466 7.00049C3.42773 7.98992 3.42773 9.19133 3.42773 11.5941V12.4068C3.42773 14.8096 3.42773 16.0111 3.98466 17.0005C4.54158 17.9899 5.55594 18.5906 7.58466 19.792L8.27081 20.1984C10.2995 21.3998 11.3139 22.0005 12.4277 22.0005C13.5416 22.0005 14.5559 21.3998 16.5847 20.1984L17.2708 19.792C19.2995 18.5906 20.3139 17.9899 20.8708 17.0005C21.4277 16.0111 21.4277 14.8096 21.4277 12.4068V11.5941C21.4277 9.19133 21.4277 7.98992 20.8708 7.00049C20.3139 6.01106 19.2995 5.41035 17.2708 4.20895L16.5847 3.8026C14.5559 2.60119 13.5416 2.00049 12.4277 2.00049ZM8.67773 12.0005C8.67773 9.92942 10.3567 8.25049 12.4277 8.25049C14.4988 8.25049 16.1777 9.92942 16.1777 12.0005C16.1777 14.0716 14.4988 15.7505 12.4277 15.7505C10.3567 15.7505 8.67773 14.0716 8.67773 12.0005Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconSettingsMinimalistic;