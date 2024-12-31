import { FC } from 'react';
import { IconProps } from "../../types";

const IconMiniMusicSqaure: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 10V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M15.2701 21.9996C16.0654 21.9996 16.7101 21.3549 16.7101 20.5596C16.7101 19.7643 16.0654 19.1196 15.2701 19.1196C14.4748 19.1196 13.8301 19.7643 13.8301 20.5596C13.8301 21.3549 14.4748 21.9996 15.2701 21.9996Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M21.9992 19.5998V13.9599C21.9992 12.7599 21.2492 12.5898 20.4792 12.7998L17.5892 13.5899C17.0692 13.7299 16.6992 14.1498 16.6992 14.7498V15.7598V16.4398V20.5698" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M20.5611 21.0397C21.3564 21.0397 22.0011 20.395 22.0011 19.5997C22.0011 18.8044 21.3564 18.1597 20.5611 18.1597C19.7658 18.1597 19.1211 18.8044 19.1211 19.5997C19.1211 20.395 19.7658 21.0397 20.5611 21.0397Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.7109 16.4297L22.0009 14.9897" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M14.8387 10.9001L20.4987 7.11007C21.0687 6.73007 21.2187 5.9501 20.8387 5.3901L19.0187 2.68008C18.6387 2.11008 17.8587 1.96009 17.2987 2.34009L11.6387 6.13009L14.8387 10.9001Z" fill="currentColor" /><path d="M14.5197 10.4201L12.7597 11.6001L10.0897 13.3901L9.73969 13.6201L9.57969 13.3801L7.33968 10.0401L7.17969 9.80008L11.9597 6.6001L14.5197 10.4201Z" fill="currentColor" /><path d="M5.63912 16.02L9.58912 13.38L7.34912 10.04L3.39912 12.68C2.93912 12.99 2.81912 13.61 3.12912 14.07L4.25912 15.75C4.55912 16.21 5.17912 16.33 5.63912 16.02Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M16.5594 21.8101C16.4594 21.8501 16.3494 21.8801 16.2494 21.8801C15.9594 21.8801 15.6894 21.7101 15.5594 21.4301L11.8294 13.1901L8.04941 21.4401C7.91941 21.7101 7.64941 21.8801 7.35941 21.8801C7.25941 21.8801 7.14941 21.8501 7.04941 21.8101C6.67941 21.6301 6.50941 21.1901 6.67941 20.8101L10.0894 13.3901L12.7594 11.6001L16.9294 20.8201C17.0994 21.1901 16.9294 21.6401 16.5594 21.8101Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMiniMusicSqaure;