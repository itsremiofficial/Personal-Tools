import { FC } from 'react';
import { IconProps } from "../../types";

const IconBucketSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M8.93931 16.9304L6.1093 14.1003C5.1693 13.1603 5.1693 12.2103 6.1093 11.2703L10.8293 6.55029L16.0193 11.7403C16.2793 12.0003 16.2793 12.4204 16.0193 12.6804L11.7693 16.9304C10.8293 17.8704 9.87931 17.8704 8.93931 16.9304Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.87891 5.6001L10.8289 6.5401" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.43945 12.6399L16.1295 12.1699" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.3002 14.8101C17.3002 14.8101 15.9902 16.23 15.9902 17.1C15.9902 17.82 16.5802 18.41 17.3002 18.41C18.0202 18.41 18.6102 17.82 18.6102 17.1C18.6002 16.23 17.3002 14.8101 17.3002 14.8101Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15.5194 2.9C14.9194 2.3 14.0494 2 12.9294 2H7.34938C5.09938 2 3.85938 3.24 3.85938 5.49C3.85938 6.61 4.15938 7.48 4.75938 8.08C5.35938 8.68 6.22937 8.98 7.34938 8.98H12.9294C15.1794 8.98 16.4194 7.74 16.4194 5.49C16.4194 4.37 16.1194 3.5 15.5194 2.9Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M10.6001 15.02H9.67008C8.72008 15.02 7.58008 15.38 7.58008 17.11V19.9C7.58008 21.63 8.72008 21.99 9.67008 21.99H10.6001C11.5501 21.99 12.6901 21.63 12.6901 19.9V17.11C12.7001 15.39 11.5601 15.02 10.6001 15.02Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M16.6492 4.79004H16.3692C16.3992 5.01004 16.4192 5.24004 16.4192 5.49004C16.4192 5.74004 16.3992 5.97004 16.3692 6.19004H16.6492C18.7392 6.19004 18.7392 6.47004 18.7392 8.28004V10.14C18.7392 11.95 18.7392 12.23 16.6492 12.23H12.9292C9.93922 12.23 9.50922 13.65 9.44922 15.03C9.51922 15.03 9.59922 15.02 9.66922 15.02H10.5992C10.6792 15.02 10.7592 15.03 10.8492 15.03C10.8992 14.02 11.1892 13.62 12.9292 13.62H16.6492C19.8992 13.62 20.1392 12.3 20.1392 10.13V8.28004C20.1392 6.11004 19.8992 4.79004 16.6492 4.79004Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconBucketSquare;