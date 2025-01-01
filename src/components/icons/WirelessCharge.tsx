import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconWirelessCharge: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0646 17.9999C16.4827 18.0355 20.0354 14.4828 19.9997 10.0647C19.9641 5.64655 16.3536 2.03604 11.9354 2.00039C7.51731 1.96474 3.96461 5.51744 4.00027 9.93557C4.03592 14.3537 7.64642 17.9642 12.0646 17.9999Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M12.8569 7.00012L9.99972 10.0001H13.9997L11.1426 13.0001" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.5" : "1"} d="M11.25 22.0001C11.25 22.4143 11.5858 22.7501 12 22.7501C12.4142 22.7501 12.75 22.4143 12.75 22.0001H11.25ZM11.1173 20.924L10.8303 21.6169L10.8303 21.6169L11.1173 20.924ZM10.5761 20.3828L9.88321 20.6698H9.88321L10.5761 20.3828ZM13.4239 20.3828L14.1168 20.6698L14.1168 20.6698L13.4239 20.3828ZM12.8827 20.924L13.1697 21.6169L13.1697 21.6169L12.8827 20.924ZM11.25 21.0001V22.0001H12.75V21.0001H11.25ZM12.75 18.0001V19.5001H14.25V18.0001H12.75ZM11.25 19.5001V18.0001H9.75V19.5001H11.25ZM12 20.2501C11.7568 20.2501 11.6119 20.2497 11.5039 20.2423C11.4026 20.2354 11.3896 20.225 11.4043 20.2311L10.8303 21.6169C11.0288 21.6991 11.2241 21.7267 11.4018 21.7389C11.5727 21.7505 11.7773 21.7501 12 21.7501V20.2501ZM9.75 19.5001C9.75 19.7228 9.74959 19.9274 9.76125 20.0983C9.77338 20.276 9.80099 20.4713 9.88321 20.6698L11.269 20.0958C11.2751 20.1105 11.2647 20.0975 11.2578 19.9962C11.2504 19.8882 11.25 19.7434 11.25 19.5001H9.75ZM11.4043 20.2311C11.3431 20.2057 11.2944 20.157 11.269 20.0958L9.88321 20.6698C10.0608 21.0986 10.4015 21.4393 10.8303 21.6169L11.4043 20.2311ZM12.75 19.5001C12.75 19.7434 12.7496 19.8882 12.7422 19.9962C12.7353 20.0975 12.7249 20.1105 12.731 20.0958L14.1168 20.6698C14.199 20.4713 14.2266 20.276 14.2387 20.0983C14.2504 19.9274 14.25 19.7228 14.25 19.5001H12.75ZM12 21.7501C12.2227 21.7501 12.4273 21.7505 12.5982 21.7389C12.7759 21.7267 12.9712 21.6991 13.1697 21.6169L12.5957 20.2311C12.6104 20.225 12.5974 20.2354 12.4961 20.2423C12.3881 20.2497 12.2432 20.2501 12 20.2501V21.7501ZM12.731 20.0958C12.7056 20.157 12.6569 20.2057 12.5957 20.2311L13.1697 21.6169C13.5985 21.4393 13.9392 21.0986 14.1168 20.6698L12.731 20.0958Z" fill="currentColor" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.1173 20.9243C11.1584 20.9414 11.2019 20.9546 11.25 20.9648V22.0001C11.25 22.4143 11.5858 22.7501 12 22.7501C12.4142 22.7501 12.75 22.4143 12.75 22.0001V20.9648C12.7981 20.9546 12.8416 20.9414 12.8827 20.9243C13.1277 20.8228 13.3224 20.6282 13.4239 20.3831C13.5 20.1994 13.5 19.9664 13.5 19.5005V18.8966C13.0303 18.9686 12.5481 19.0041 12.0565 19.0002C11.526 18.9959 11.0059 18.9458 10.5 18.8536V19.5005C10.5 19.9664 10.5 20.1994 10.5761 20.3831C10.6776 20.6282 10.8723 20.8228 11.1173 20.9243Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M20.9997 10.0727C21.0398 15.0431 17.043 19.0399 12.0726 18.9998C7.10223 18.9597 3.04041 14.8979 3.0003 9.9275C2.96019 4.9571 6.95698 0.960312 11.9274 1.00042C16.8978 1.04053 20.9596 5.10235 20.9997 10.0727Z" fill="currentColor" /><path d="M13.3744 6.45702C13.6743 6.74268 13.6859 7.21742 13.4003 7.51736L11.75 9.25012H14C14.3 9.25012 14.5712 9.42892 14.6894 9.70468C14.8076 9.98045 14.75 10.3001 14.5431 10.5174L11.686 13.5174C11.4003 13.8173 10.9256 13.8289 10.6256 13.5432C10.3257 13.2576 10.3141 12.7828 10.5998 12.4829L12.25 10.7501H10C9.7 10.7501 9.42884 10.5713 9.31066 10.2956C9.19248 10.0198 9.25 9.70014 9.45691 9.48288L12.3141 6.48288C12.5997 6.18293 13.0745 6.17136 13.3744 6.45702Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12.0646 17.9999C16.4827 18.0355 20.0354 14.4828 19.9997 10.0647C19.9641 5.64655 16.3536 2.03604 11.9354 2.00039C7.51731 1.96474 3.96461 5.51744 4.00027 9.93557C4.03592 14.3537 7.64642 17.9642 12.0646 17.9999ZM13.3739 6.45702C13.6739 6.74268 13.6854 7.21742 13.3998 7.51736L11.7495 9.25012H13.9995C14.2996 9.25012 14.5707 9.42892 14.6889 9.70468C14.8071 9.98045 14.7495 10.3001 14.5426 10.5174L11.6855 13.5174C11.3998 13.8173 10.9251 13.8289 10.6251 13.5432C10.3252 13.2576 10.3136 12.7828 10.5993 12.4829L12.2495 10.7501H9.99953C9.69951 10.7501 9.42836 10.5713 9.31017 10.2956C9.19199 10.0198 9.24952 9.70014 9.45643 9.48288L12.3136 6.48288C12.5992 6.18293 13.074 6.17136 13.3739 6.45702Z" fill="currentColor" /><path d="M11.1173 20.9243C11.1584 20.9414 11.2019 20.9546 11.25 20.9648V22.0001C11.25 22.4143 11.5858 22.7501 12 22.7501C12.4142 22.7501 12.75 22.4143 12.75 22.0001V20.9648C12.7981 20.9546 12.8416 20.9414 12.8827 20.9243C13.1277 20.8228 13.3224 20.6282 13.4239 20.3831C13.5 20.1994 13.5 19.9664 13.5 19.5005V18.8966C13.0303 18.9686 12.5481 19.0041 12.0565 19.0002C11.526 18.9959 11.0059 18.9458 10.5 18.8536V19.5005C10.5 19.9664 10.5 20.1994 10.5761 20.3831C10.6776 20.6282 10.8723 20.8228 11.1173 20.9243Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconWirelessCharge as IconComponentType).keywords = [
  "wireless",
  "charge",
  "radio",
  "radiocommunication",
  "tuner",
  "radio receiver",
  "radio set",
  "receiving set",
  "wirelessly",
  "cordless",
  "unwired",
  "consign",
  "commission",
  "mission",
  "appoint",
  "billing",
  "guardianship",
  "tutelage",
  "institutionalize",
  "send"
];

export default IconWirelessCharge as IconComponentType;