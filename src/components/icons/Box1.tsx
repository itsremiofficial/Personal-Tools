import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconBox1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M3.16992 7.44043L11.9999 12.5504L20.7699 7.47043" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 21.61V12.54" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M9.93062 2.47979L4.59063 5.43979C3.38063 6.10979 2.39062 7.78979 2.39062 9.16979V14.8198C2.39062 16.1998 3.38063 17.8798 4.59063 18.5498L9.93062 21.5198C11.0706 22.1498 12.9406 22.1498 14.0806 21.5198L19.4206 18.5498C20.6306 17.8798 21.6206 16.1998 21.6206 14.8198V9.16979C21.6206 7.78979 20.6306 6.10979 19.4206 5.43979L14.0806 2.46979C12.9306 1.83979 11.0706 1.83979 9.93062 2.47979Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.0409 7.19L12.0009 12.42L2.96094 7.19C3.36094 6.45 3.94094 5.8 4.59094 5.44L9.93094 2.48C11.0709 1.84 12.9309 1.84 14.0709 2.48L19.4109 5.44C20.0609 5.8 20.6409 6.45 21.0409 7.19Z" fill="currentColor" /><path opacity={duotone ? "0.6" : "1"} d="M12.0006 12.4199V21.9999C11.2506 21.9999 10.5006 21.8399 9.93062 21.5199L4.59063 18.5599C3.38063 17.8899 2.39062 16.2099 2.39062 14.8299V9.16994C2.39062 8.52994 2.61062 7.82994 2.96062 7.18994L12.0006 12.4199Z" fill="currentColor" /><path d="M21.61 9.16994V14.8299C21.61 16.2099 20.62 17.8899 19.41 18.5599L14.07 21.5199C13.5 21.8399 12.75 21.9999 12 21.9999V12.4199L21.04 7.18994C21.39 7.82994 21.61 8.52994 21.61 9.16994Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBox1 as IconComponentType).keywords = [
  "box",
  "1",
  "package",
  "loge",
  "corner",
  "box seat",
  "boxwood",
  "bin",
  "chest",
  "toolbox",
  "shoebox",
  "wash out",
  "cut up",
  "pull out",
  "pull in",
  "pull up",
  "pull over",
  "work out",
  "ride down",
  "rush hour"
];

export default IconBox1 as IconComponentType;