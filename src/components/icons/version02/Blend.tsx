import { FC } from 'react';

const IconBlend: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22.6396 12C22.6396 15.31 19.9496 18 16.6396 18C15.0996 18 13.6996 17.42 12.6396 16.46C13.8696 15.37 14.6396 13.77 14.6396 12C14.6396 10.23 13.8696 8.63 12.6396 7.54C13.6996 6.58 15.0996 6 16.6396 6C19.9496 6 22.6396 8.69 22.6396 12Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M14.6396 12C14.6396 13.77 13.8696 15.37 12.6396 16.46C11.5796 17.42 10.1796 18 8.63965 18C5.32965 18 2.63965 15.31 2.63965 12C2.63965 8.69 5.32965 6 8.63965 6C10.1796 6 11.5796 6.58 12.6396 7.54C13.8696 8.63 14.6396 10.23 14.6396 12Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6396 12C22.6396 15.31 19.9496 18 16.6396 18C15.0996 18 13.6996 17.42 12.6396 16.46C13.8696 15.37 14.6396 13.77 14.6396 12C14.6396 10.23 13.8696 8.63 12.6396 7.54C13.6996 6.58 15.0996 6 16.6396 6C19.9496 6 22.6396 8.69 22.6396 12Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M14.6396 12C14.6396 13.77 13.8696 15.37 12.6396 16.46C11.5796 17.42 10.1796 18 8.63965 18C5.32965 18 2.63965 15.31 2.63965 12C2.63965 8.69 5.32965 6 8.63965 6C10.1796 6 11.5796 6.58 12.6396 7.54C13.8696 8.63 14.6396 10.23 14.6396 12Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6396 12C22.6396 15.31 19.9496 18 16.6396 18C15.8951 18 15.1789 17.8643 14.5208 17.6141C14.2021 17.4929 14.1426 17.0851 14.3645 16.8262C15.5065 15.4938 16.1396 13.786 16.1396 12C16.1396 10.2082 15.5008 8.49432 14.3675 7.17467C14.1449 6.91543 14.2038 6.50621 14.5233 6.38494C15.1808 6.13537 15.8961 6 16.6396 6C19.9496 6 22.6396 8.69 22.6396 12Z" fill="currentColor" /><path d="M14.6396 12C14.6396 13.77 13.8696 15.37 12.6396 16.46C11.5796 17.42 10.1796 18 8.63965 18C5.32965 18 2.63965 15.31 2.63965 12C2.63965 8.69 5.32965 6 8.63965 6C10.1796 6 11.5796 6.58 12.6396 7.54C13.8696 8.63 14.6396 10.23 14.6396 12Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBlend as IconComponent).keywords = [
  "blend",
  "intermingle",
  "immix",
  "intermix",
  "mix",
  "commingle",
  "immingle",
  "blend in",
  "conflate",
  "meld"
];

export default IconBlend as IconComponent;