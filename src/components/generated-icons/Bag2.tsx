import { FC } from 'react';
import { IconProps } from "@/types";

const IconBag2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.0008 22H15.0008C19.0208 22 19.7408 20.39 19.9508 18.43L20.7008 12.43C20.9708 9.99 20.2708 8 16.0008 8H8.0008C3.7308 8 3.0308 9.99 3.3008 12.43L4.0508 18.43C4.2608 20.39 4.9808 22 9.0008 22Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.4945 12H15.5035" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.49451 12H8.50349" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.1894 8.8599C15.7994 8.8599 15.4894 8.5499 15.4894 8.1599V6.8799C15.4894 5.8999 15.0694 4.9599 14.3494 4.2999C13.6094 3.6299 12.6594 3.3199 11.6594 3.4099C9.97937 3.5699 8.50938 5.2799 8.50938 7.0599V7.9599C8.50938 8.3499 8.19937 8.6599 7.80937 8.6599C7.41937 8.6599 7.10938 8.3499 7.10938 7.9599V7.0599C7.10938 4.5599 9.12938 2.2499 11.5194 2.0199C12.9094 1.8899 14.2494 2.3299 15.2794 3.2699C16.2994 4.1899 16.8794 5.5099 16.8794 6.8799V8.1599C16.8794 8.5499 16.5694 8.8599 16.1894 8.8599Z" fill="currentColor" /><path d="M19.9597 8.96008C19.1197 8.03008 17.7397 7.58008 15.7197 7.58008H8.27975C6.25975 7.58008 4.87975 8.03008 4.03975 8.96008C3.06975 10.0401 3.09975 11.4801 3.20975 12.4801L3.90975 18.0501C4.11975 20.0001 4.90975 22.0001 9.20975 22.0001H14.7897C19.0897 22.0001 19.8797 20.0001 20.0897 18.0601L20.7897 12.4701C20.8997 11.4801 20.9197 10.0401 19.9597 8.96008ZM8.41975 13.1501H8.40975C7.85975 13.1501 7.40975 12.7001 7.40975 12.1501C7.40975 11.6001 7.85975 11.1501 8.40975 11.1501C8.96975 11.1501 9.41975 11.6001 9.41975 12.1501C9.41975 12.7001 8.96975 13.1501 8.41975 13.1501ZM15.4197 13.1501H15.4097C14.8597 13.1501 14.4097 12.7001 14.4097 12.1501C14.4097 11.6001 14.8597 11.1501 15.4097 11.1501C15.9697 11.1501 16.4197 11.6001 16.4197 12.1501C16.4197 12.7001 15.9697 13.1501 15.4197 13.1501Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconBag2;