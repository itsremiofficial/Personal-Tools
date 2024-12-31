import { FC } from 'react';
import { IconProps } from "@/types";

const IconHome: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.0693 2.81984L3.13929 8.36983C2.35929 8.98983 1.85929 10.2999 2.02929 11.2799L3.35929 19.2398C3.59929 20.6598 4.95928 21.8098 6.39928 21.8098H17.5993C19.0293 21.8098 20.3993 20.6498 20.6393 19.2398L21.9693 11.2799C22.1293 10.2999 21.6293 8.98983 20.8593 8.36983L13.9293 2.82985C12.8593 1.96985 11.1293 1.96984 10.0693 2.81984Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12 15.5C13.3807 15.5 14.5 14.3807 14.5 13C14.5 11.6193 13.3807 10.5 12 10.5C10.6193 10.5 9.5 11.6193 9.5 13C9.5 14.3807 10.6193 15.5 12 15.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M10.0693 2.8201L3.13929 8.37009C2.35929 8.99009 1.85929 10.3001 2.02929 11.2801L3.35929 19.2401C3.59929 20.6601 4.95928 21.8101 6.39928 21.8101H17.5993C19.0293 21.8101 20.3993 20.6501 20.6393 19.2401L21.9693 11.2801C22.1293 10.3001 21.6293 8.99009 20.8593 8.37009L13.9293 2.83008C12.8593 1.97008 11.1293 1.9701 10.0693 2.8201Z" fill="currentColor" /><path d="M12 15.5C13.3807 15.5 14.5 14.3807 14.5 13C14.5 11.6193 13.3807 10.5 12 10.5C10.6193 10.5 9.5 11.6193 9.5 13C9.5 14.3807 10.6193 15.5 12 15.5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconHome;