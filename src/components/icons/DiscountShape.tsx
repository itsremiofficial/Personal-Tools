import { FC } from 'react';
import { IconProps } from "../../types";

const IconDiscountShape: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.99085 14.6599L2.47086 13.1399C1.85086 12.5199 1.85086 11.4999 2.47086 10.8799L3.99085 9.3599C4.25085 9.0999 4.46085 8.58989 4.46085 8.22989V6.07987C4.46085 5.19987 5.18086 4.47989 6.06086 4.47989H8.21085C8.57085 4.47989 9.08085 4.26992 9.34085 4.00992L10.8608 2.4899C11.4808 1.8699 12.5009 1.8699 13.1209 2.4899L14.6409 4.00992C14.9009 4.26992 15.4108 4.47989 15.7708 4.47989H17.9209C18.8009 4.47989 19.5208 5.19987 19.5208 6.07987V8.22989C19.5208 8.58989 19.7308 9.0999 19.9908 9.3599L21.5109 10.8799C22.1309 11.4999 22.1309 12.5199 21.5109 13.1399L19.9908 14.6599C19.7308 14.9199 19.5208 15.43 19.5208 15.79V17.9399C19.5208 18.8199 18.8009 19.54 17.9209 19.54H15.7708C15.4108 19.54 14.9009 19.7499 14.6409 20.0099L13.1209 21.5299C12.5009 22.1499 11.4808 22.1499 10.8608 21.5299L9.34085 20.0099C9.08085 19.7499 8.57085 19.54 8.21085 19.54H6.06086C5.18086 19.54 4.46085 18.8199 4.46085 17.9399V15.79C4.46085 15.42 4.25085 14.9099 3.99085 14.6599Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9 15L15 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M14.4945 14.5H14.5035" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.49451 9.5H9.50349" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z" fill="currentColor" /><path d="M20.34 12.72H17.03C16.1 12.72 15.27 13.24 14.85 14.06L14.05 15.64C13.86 16.02 13.48 16.25 13.06 16.25H9.95C9.66 16.25 9.23 16.19 8.96 15.63L8.17 14.06C7.75 13.23 6.92 12.71 5.99 12.71H2.66C2.3 12.72 2 13.02 2 13.38V16.47C2 19.94 4.07 22 7.53 22H15.49C18.75 22 20.76 20.21 21 17.04V13.38C21 13.02 20.7 12.72 20.34 12.72Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M19 9.5C16.52 9.5 14.5 7.48 14.5 5C14.5 4.28 14.69 3.61 14.99 3H7.52C4.07 3 2 5.06 2 8.52V16.47C2 19.94 4.07 22 7.52 22H15.47C18.93 22 20.99 19.94 20.99 16.48V9.01C20.39 9.31 19.72 9.5 19 9.5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconDiscountShape;