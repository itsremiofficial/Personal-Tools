import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconTicket2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.5799 14.6925C19.5799 15.9825 20.6399 17.0325 21.9299 17.0325C21.9299 20.7825 20.9899 21.7225 17.2399 21.7225H7.85992C4.10992 21.7225 3.16992 20.7825 3.16992 17.0325V16.5725C4.45992 16.5725 5.51992 15.5125 5.51992 14.2225C5.51992 12.9325 4.45992 11.8725 3.16992 11.8725V11.4125C3.17992 7.66253 4.10992 6.72253 7.85992 6.72253H17.2299C20.9799 6.72253 21.9199 7.66253 21.9199 11.4125V12.3525C20.6299 12.3525 19.5799 13.3925 19.5799 14.6925Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16.881 6.7225H7.79102L10.721 3.7925C13.111 1.4025 14.311 1.4025 16.701 3.7925L17.301 4.3925C16.671 5.0225 16.521 5.9525 16.881 6.7225Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10.5488 6.72266L10.5488 21.7227" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="5 5" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.51 13.17C21.9 13.17 22.21 12.85 22.21 12.45V11.57C22.21 7.63995 21.01 6.44995 17.09 6.44995H10.79V8.87995C11.18 8.87995 11.5 9.19995 11.5 9.58995V12.27C11.5 12.66 11.18 12.98 10.79 12.98V15.49C11.18 15.49 11.5 15.81 11.5 16.2V18.88C11.5 19.27 11.18 19.59 10.79 19.59V22H17.09C21.01 22 22.21 20.8 22.21 16.88C22.21 16.49 21.9 16.17 21.51 16.17C20.67 16.17 20 15.5 20 14.67C20 13.84 20.67 13.17 21.51 13.17Z" fill="currentColor" /><path d="M8.23965 6.46C8.24965 6.46 8.24965 6.46 8.23965 6.46H8.24965H17.0796C17.1496 6.46 17.2196 6.46 17.2796 6.46C17.2696 6.44 17.2696 6.43 17.2696 6.41C17.2396 6.06 17.3796 5.72 17.6396 5.46C17.7696 5.33 17.8496 5.15 17.8496 4.96C17.8496 4.77 17.7696 4.59 17.6396 4.46L17.0896 3.9C16.1096 2.91 15.0296 2 13.7696 2C12.5196 2 11.4296 2.91 10.4496 3.9L7.88965 6.46C7.99965 6.46 8.11965 6.46 8.23965 6.46Z" fill="currentColor" /><path d="M10.0799 9.58996V12.27C10.0799 12.66 10.3999 12.98 10.7899 12.98V15.49C10.3999 15.49 10.0799 15.81 10.0799 16.2V18.88C10.0799 19.27 10.3999 19.59 10.7899 19.59V22H8.24988C4.32988 22 3.12988 20.8 3.12988 16.88V16.45C3.12988 16.05 3.43988 15.74 3.82988 15.74C4.66988 15.74 5.33988 15.06 5.33988 14.23C5.33988 13.4 4.66988 12.72 3.82988 12.72C3.43988 12.72 3.12988 12.41 3.12988 12.01V11.58C3.12988 7.64996 4.32988 6.45996 8.24988 6.45996H10.7799V8.88996C10.3999 8.88996 10.0799 9.20996 10.0799 9.58996Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.8616 4.96C17.8616 4.97 17.8616 4.97 17.8616 4.98C17.6116 4.97 17.3616 4.96 17.0916 4.96H9.3916L10.4616 3.9C11.4416 2.91 12.5216 2 13.7716 2C15.0316 2 16.1116 2.91 17.0916 3.9L17.6516 4.46C17.7916 4.59 17.8616 4.77 17.8616 4.96Z" fill="currentColor" /><path d="M21.5118 13.17C21.9018 13.17 22.2118 12.85 22.2118 12.45V11.57C22.2118 7.63995 21.0118 6.44995 17.0918 6.44995H10.7918H8.25184C4.33184 6.44995 3.13184 7.64995 3.13184 11.57V12C3.13184 12.4 3.44184 12.71 3.83184 12.71C4.67184 12.71 5.34184 13.39 5.34184 14.22C5.34184 15.05 4.67184 15.74 3.83184 15.74C3.44184 15.74 3.13184 16.05 3.13184 16.45V16.88C3.13184 20.81 4.33184 22 8.25184 22H10.7818H17.0818C21.0018 22 22.2018 20.8 22.2018 16.88C22.2018 16.49 21.8918 16.17 21.5018 16.17C20.6618 16.17 19.9918 15.5 19.9918 14.67C20.0018 13.84 20.6718 13.17 21.5118 13.17ZM11.4918 18.86C11.4918 19.25 11.1718 19.57 10.7818 19.57C10.3918 19.57 10.0718 19.25 10.0718 18.86V16.18C10.0718 15.79 10.3918 15.47 10.7818 15.47C11.1718 15.47 11.4918 15.79 11.4918 16.18V18.86ZM11.4918 12.27C11.4918 12.66 11.1718 12.98 10.7818 12.98C10.3918 12.98 10.0718 12.66 10.0718 12.27V9.58995C10.0718 9.19995 10.3918 8.87995 10.7818 8.87995C11.1718 8.87995 11.4918 9.19995 11.4918 9.58995V12.27Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconTicket2;