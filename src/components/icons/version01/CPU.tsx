import { FC } from 'react';

const IconCPU: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M7 10C7 8.58579 7 7.87868 7.43934 7.43934C7.87868 7 8.58579 7 10 7H14C15.4142 7 16.1213 7 16.5607 7.43934C17 7.87868 17 8.58579 17 10V14C17 15.4142 17 16.1213 16.5607 16.5607C16.1213 17 15.4142 17 14 17H10C8.58579 17 7.87868 17 7.43934 16.5607C7 16.1213 7 15.4142 7 14V10Z" stroke="currentColor" strokeWidth={width} /><path d="M4 12C4 8.22876 4 6.34315 5.17157 5.17157C6.34315 4 8.22876 4 12 4C15.7712 4 17.6569 4 18.8284 5.17157C20 6.34315 20 8.22876 20 12C20 15.7712 20 17.6569 18.8284 18.8284C17.6569 20 15.7712 20 12 20C8.22876 20 6.34315 20 5.17157 18.8284C4 17.6569 4 15.7712 4 12Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M4 12H2" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M22 12H20" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M4 9H2" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M22 9H20" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M4 15H2" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M22 15H20" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M12 20L12 22" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M12 2L12 4" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M9 20L9 22" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M9 2L9 4" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M15 20L15 22" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M15 2L15 4" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 3C12.3853 3 12.6977 3.31236 12.6977 3.69767V6.48884C13.2084 6.48991 13.6717 6.49342 14.0932 6.50495L14.093 6.48837V3.69767C14.093 3.31236 14.4054 3 14.7907 3C15.176 3 15.4884 3.31236 15.4884 3.69767V6.48837C15.4884 6.52487 15.4856 6.56072 15.4802 6.5957C16.4162 6.71067 17.0648 6.94879 17.558 7.44198C18.0512 7.93517 18.2893 8.58381 18.4043 9.51984C18.4393 9.51443 18.4751 9.51163 18.5116 9.51163H21.3023C21.6876 9.51163 22 9.82399 22 10.2093C22 10.5946 21.6876 10.907 21.3023 10.907H18.5116L18.495 10.9068C18.5066 11.3283 18.5106 11.7916 18.5116 12.3023H21.3023C21.6876 12.3023 22 12.6147 22 13C22 13.3853 21.6876 13.6977 21.3023 13.6977L18.5112 13.6977C18.5101 14.2084 18.5066 14.6717 18.495 15.0932L18.5116 15.093H21.3023C21.6876 15.093 22 15.4054 22 15.7907C22 16.176 21.6876 16.4884 21.3023 16.4884H18.5116C18.4751 16.4884 18.4393 16.4856 18.4043 16.4802C18.2893 17.4162 18.0512 18.0648 17.558 18.558C17.0648 19.0512 16.4162 19.2893 15.4802 19.4043C15.4856 19.4393 15.4884 19.4751 15.4884 19.5116V22.3023C15.4884 22.6876 15.176 23 14.7907 23C14.4054 23 14.093 22.6876 14.093 22.3023V19.5116L14.0932 19.495C13.6717 19.5066 13.2084 19.5106 12.6977 19.5116V22.3023C12.6977 22.6876 12.3853 23 12 23C11.6147 23 11.3023 22.6876 11.3023 22.3023L11.3023 19.5112C10.7916 19.5101 10.3283 19.5066 9.90678 19.495L9.90698 19.5116V22.3023C9.90698 22.6876 9.59462 23 9.2093 23C8.82399 23 8.51163 22.6876 8.51163 22.3023V19.5116C8.51163 19.4751 8.51443 19.4393 8.51984 19.4043C7.58381 19.2893 6.93517 19.0512 6.44198 18.558C5.94879 18.0648 5.71067 17.4162 5.5957 16.4802C5.56071 16.4856 5.52487 16.4884 5.48837 16.4884H2.69767C2.31236 16.4884 2 16.176 2 15.7907C2 15.4054 2.31236 15.093 2.69767 15.093H5.48837L5.50495 15.0932C5.49342 14.6717 5.48944 14.2084 5.48837 13.6977H2.69767C2.31236 13.6977 2 13.3853 2 13C2 12.6147 2.31236 12.3023 2.69767 12.3023L5.48884 12.3023C5.48991 11.7916 5.49342 11.3283 5.50495 10.9068L5.48837 10.907H2.69767C2.31236 10.907 2 10.5946 2 10.2093C2 9.82399 2.31236 9.51163 2.69767 9.51163H5.48837C5.52487 9.51163 5.56071 9.51443 5.5957 9.51984C5.71067 8.58381 5.94879 7.93517 6.44198 7.44198C6.93517 6.94879 7.58381 6.71067 8.51984 6.5957C8.51443 6.56072 8.51163 6.52487 8.51163 6.48837V3.69767C8.51163 3.31236 8.82399 3 9.2093 3C9.59462 3 9.90698 3.31236 9.90698 3.69767V6.48837L9.90678 6.50495C10.3283 6.49342 10.7916 6.48944 11.3023 6.48837V3.69767C11.3023 3.31236 11.6147 3 12 3ZM11.0238 8.5814C10.4054 8.58136 9.87247 8.58133 9.44573 8.63871C8.98839 8.70019 8.55001 8.83885 8.19443 9.19443C7.83885 9.55001 7.70019 9.98839 7.63871 10.4457C7.58133 10.8725 7.58136 11.4054 7.5814 12.0238V13.9762C7.58136 14.5946 7.58133 15.1275 7.63871 15.5543C7.70019 16.0116 7.83885 16.45 8.19443 16.8056C8.55001 17.1612 8.98839 17.2998 9.44573 17.3613C9.87247 17.4187 10.4054 17.4186 11.0238 17.4186H12.9762C13.5946 17.4186 14.1275 17.4187 14.5543 17.3613C15.0116 17.2998 15.45 17.1612 15.8056 16.8056C16.1612 16.45 16.2998 16.0116 16.3613 15.5543C16.4187 15.1275 16.4186 14.5946 16.4186 13.9762V12.0238C16.4186 11.4054 16.4187 10.8725 16.3613 10.4457C16.2998 9.98839 16.1612 9.55001 15.8056 9.19443C15.45 8.83885 15.0116 8.70019 14.5543 8.63871C14.1275 8.58133 13.5947 8.58136 12.9762 8.5814H11.0238Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M9.18091 10.1809C9.23402 10.1278 9.32886 10.0621 9.63147 10.0214C9.95415 9.97804 10.3921 9.97656 11.0696 9.97656H12.9301C13.6075 9.97656 14.0455 9.97804 14.3682 10.0214C14.6708 10.0621 14.7656 10.1278 14.8187 10.1809C14.8718 10.234 14.9375 10.3289 14.9782 10.6315C15.0216 10.9542 15.0231 11.3921 15.0231 12.0696V13.9301C15.0231 14.6075 15.0216 15.0455 14.9782 15.3682C14.9375 15.6708 14.8718 15.7656 14.8187 15.8187C14.7656 15.8718 14.6708 15.9375 14.3682 15.9782C14.0455 16.0216 13.6075 16.0231 12.9301 16.0231H11.0696C10.3921 16.0231 9.95415 16.0216 9.63147 15.9782C9.32886 15.9375 9.23402 15.8718 9.18091 15.8187C9.1278 15.7656 9.06211 15.6708 9.02143 15.3682C8.97804 15.0455 8.97656 14.6075 8.97656 13.9301V12.0696C8.97656 11.3921 8.97804 10.9542 9.02143 10.6315C9.06211 10.3289 9.1278 10.234 9.18091 10.1809Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.18109 10.1811C9.2342 10.128 9.32905 10.0623 9.63166 10.0216C9.95434 9.97823 10.3923 9.97675 11.0698 9.97675H12.9302C13.6077 9.97675 14.0457 9.97823 14.3684 10.0216C14.671 10.0623 14.7658 10.128 14.8189 10.1811C14.872 10.2342 14.9377 10.329 14.9784 10.6317C15.0218 10.9543 15.0233 11.3923 15.0233 12.0698V13.9302C15.0233 14.6077 15.0218 15.0457 14.9784 15.3684C14.9377 15.671 14.872 15.7658 14.8189 15.8189C14.7658 15.872 14.671 15.9377 14.3684 15.9784C14.0457 16.0218 13.6077 16.0233 12.9302 16.0233H11.0698C10.3923 16.0233 9.95434 16.0218 9.63166 15.9784C9.32905 15.9377 9.2342 15.872 9.18109 15.8189C9.12798 15.7658 9.0623 15.671 9.02161 15.3684C8.97823 15.0457 8.97675 14.6077 8.97675 13.9302V12.0698C8.97675 11.3923 8.97823 10.9543 9.02161 10.6317C9.0623 10.329 9.12798 10.2342 9.18109 10.1811Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12 3C12.3853 3 12.6977 3.31236 12.6977 3.69767V6.48884C13.2084 6.48991 13.6717 6.49342 14.0932 6.50495L14.093 6.48837V3.69767C14.093 3.31236 14.4054 3 14.7907 3C15.176 3 15.4884 3.31236 15.4884 3.69767V6.48837C15.4884 6.52487 15.4856 6.56071 15.4802 6.5957C16.4162 6.71067 17.0648 6.94879 17.558 7.44198C18.0512 7.93517 18.2893 8.58381 18.4043 9.51984C18.4393 9.51443 18.4751 9.51163 18.5116 9.51163H21.3023C21.6876 9.51163 22 9.82399 22 10.2093C22 10.5946 21.6876 10.907 21.3023 10.907H18.5116L18.495 10.9068C18.5066 11.3283 18.5106 11.7916 18.5116 12.3023H21.3023C21.6876 12.3023 22 12.6147 22 13C22 13.3853 21.6876 13.6977 21.3023 13.6977L18.5112 13.6977C18.5101 14.2084 18.5066 14.6717 18.495 15.0932L18.5116 15.093H21.3023C21.6876 15.093 22 15.4054 22 15.7907C22 16.176 21.6876 16.4884 21.3023 16.4884H18.5116C18.4751 16.4884 18.4393 16.4856 18.4043 16.4802C18.2893 17.4162 18.0512 18.0648 17.558 18.558C17.0648 19.0512 16.4162 19.2893 15.4802 19.4043C15.4856 19.4393 15.4884 19.4751 15.4884 19.5116V22.3023C15.4884 22.6876 15.176 23 14.7907 23C14.4054 23 14.093 22.6876 14.093 22.3023V19.5116L14.0932 19.495C13.6717 19.5066 13.2084 19.5106 12.6977 19.5116V22.3023C12.6977 22.6876 12.3853 23 12 23C11.6147 23 11.3023 22.6876 11.3023 22.3023L11.3023 19.5112C10.7916 19.5101 10.3283 19.5066 9.90678 19.495L9.90698 19.5116V22.3023C9.90698 22.6876 9.59462 23 9.2093 23C8.82399 23 8.51163 22.6876 8.51163 22.3023V19.5116C8.51163 19.4751 8.51443 19.4393 8.51984 19.4043C7.58381 19.2893 6.93517 19.0512 6.44198 18.558C5.94879 18.0648 5.71067 17.4162 5.5957 16.4802C5.56071 16.4856 5.52487 16.4884 5.48837 16.4884H2.69767C2.31236 16.4884 2 16.176 2 15.7907C2 15.4054 2.31236 15.093 2.69767 15.093H5.48837L5.50495 15.0932C5.49342 14.6717 5.48944 14.2084 5.48837 13.6977H2.69767C2.31236 13.6977 2 13.3853 2 13C2 12.6147 2.31236 12.3023 2.69767 12.3023L5.48884 12.3023C5.48991 11.7916 5.49342 11.3283 5.50495 10.9068L5.48837 10.907H2.69767C2.31236 10.907 2 10.5946 2 10.2093C2 9.82399 2.31236 9.51163 2.69767 9.51163H5.48837C5.52487 9.51163 5.56071 9.51443 5.5957 9.51984C5.71067 8.58381 5.94879 7.93517 6.44198 7.44198C6.93517 6.94879 7.58381 6.71067 8.51984 6.5957C8.51443 6.56071 8.51163 6.52487 8.51163 6.48837V3.69767C8.51163 3.31236 8.82399 3 9.2093 3C9.59462 3 9.90698 3.31236 9.90698 3.69767V6.48837L9.90678 6.50495C10.3283 6.49342 10.7916 6.48944 11.3023 6.48837V3.69767C11.3023 3.31236 11.6147 3 12 3ZM11.0238 8.5814C10.4054 8.58136 9.87247 8.58133 9.44573 8.63871C8.98839 8.70019 8.55001 8.83885 8.19443 9.19443C7.83885 9.55001 7.70019 9.98839 7.63871 10.4457C7.58133 10.8725 7.58136 11.4054 7.5814 12.0238V13.9762C7.58136 14.5946 7.58133 15.1275 7.63871 15.5543C7.70019 16.0116 7.83885 16.45 8.19443 16.8056C8.55001 17.1612 8.98839 17.2998 9.44573 17.3613C9.87247 17.4187 10.4054 17.4186 11.0238 17.4186H12.9762C13.5946 17.4186 14.1275 17.4187 14.5543 17.3613C15.0116 17.2998 15.45 17.1612 15.8056 16.8056C16.1612 16.45 16.2998 16.0116 16.3613 15.5543C16.4187 15.1275 16.4186 14.5946 16.4186 13.9762V12.0238C16.4186 11.4054 16.4187 10.8725 16.3613 10.4457C16.2998 9.98839 16.1612 9.55001 15.8056 9.19443C15.45 8.83885 15.0116 8.70019 14.5543 8.63871C14.1275 8.58133 13.5947 8.58136 12.9762 8.5814H11.0238Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCPU as IconComponent).keywords = [];

export default IconCPU as IconComponent;