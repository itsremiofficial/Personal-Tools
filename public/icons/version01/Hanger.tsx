import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconHanger: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.53589 6.90909C9.53589 5.85473 10.4868 5 11.6599 5C12.8329 5 13.7839 5.85473 13.7839 6.90909C13.7839 7.40532 13.6046 7.85733 13.2925 8.19682C12.6948 8.84706 11.8015 9.50197 11.8015 10.3455V10.6299M11.8015 10.6299C12.533 10.6214 13.2674 10.8246 13.8845 11.2406L21.317 16.2509C22.6234 17.1315 21.9305 19 20.2975 19H3.70254C2.08721 19 1.38322 17.1648 2.65531 16.27L9.751 11.2787C10.3534 10.855 11.076 10.6383 11.8015 10.6299Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11.7928 9.87995C12.6665 9.86979 13.5522 10.112 14.3038 10.6187L21.7363 15.629C22.6859 16.2692 22.9431 17.3256 22.6127 18.2165C22.2877 19.0928 21.4221 19.75 20.2975 19.75H3.70256C2.58989 19.75 1.72803 19.1049 1.39591 18.2392C1.0583 17.3591 1.29682 16.3086 2.22382 15.6565L9.31952 10.6653C10.0541 10.1486 10.9263 9.89002 11.7928 9.87995ZM13.4653 11.8624C12.9827 11.5371 12.3996 11.373 11.8102 11.3798C11.2258 11.3866 10.6528 11.5614 10.1825 11.8922L3.08683 16.8834C2.74174 17.1262 2.69621 17.4407 2.79641 17.7019C2.90209 17.9774 3.19989 18.25 3.70256 18.25H20.2975C20.8059 18.25 21.1032 17.9729 21.2063 17.6949C21.304 17.4314 21.2546 17.1133 20.8978 16.8728L13.4653 11.8624Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M10.2856 6.90909C10.2856 6.34219 10.8236 5.75 11.6596 5.75C12.4957 5.75 13.0336 6.34219 13.0336 6.90909C13.0336 7.22136 12.9223 7.49112 12.7401 7.68925C12.6272 7.81206 12.5028 7.93485 12.3609 8.07483L12.2797 8.15509C12.1111 8.32181 11.9231 8.51074 11.7513 8.71278C11.4859 9.02484 11.1983 9.43662 11.0929 9.94276C11.3247 9.9037 11.5588 9.88291 11.7925 9.88019C12.0918 9.87671 12.3925 9.90285 12.6888 9.95908C12.7395 9.87811 12.8066 9.78729 12.8939 9.68456C13.0201 9.53616 13.1675 9.38672 13.3346 9.22141L13.4085 9.14851C13.5495 9.00943 13.7044 8.85667 13.8444 8.7044C14.2865 8.22354 14.5336 7.58928 14.5336 6.90909C14.5336 5.36727 13.1697 4.25 11.6596 4.25C10.1496 4.25 8.78564 5.36727 8.78564 6.90909C8.78564 7.3233 9.12143 7.65909 9.53564 7.65909C9.94986 7.65909 10.2856 7.3233 10.2856 6.90909Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11.6599 5.75C10.8238 5.75 10.2859 6.34219 10.2859 6.90909C10.2859 7.3233 9.95012 7.65909 9.5359 7.65909C9.12169 7.65909 8.7859 7.3233 8.7859 6.90909C8.7859 5.36727 10.1499 4.25 11.6599 4.25C13.1699 4.25 14.5339 5.36727 14.5339 6.90909C14.5339 7.58928 14.2867 8.22354 13.8447 8.7044C13.7047 8.85669 13.5498 9.00942 13.4087 9.14851C13.3836 9.17327 13.3589 9.1976 13.3349 9.22141C13.1678 9.38672 13.0204 9.53616 12.8942 9.68456C12.8069 9.78721 12.7398 9.87796 12.6892 9.95888C13.2576 10.0668 13.8097 10.2856 14.3038 10.6187L21.7363 15.629C22.6859 16.2692 22.9431 17.3256 22.6127 18.2165C22.2877 19.0928 21.4221 19.75 20.2975 19.75H3.70256C2.58989 19.75 1.72803 19.1049 1.39591 18.2392C1.0583 17.3591 1.29682 16.3086 2.22382 15.6566L9.31952 10.6653C9.85599 10.2879 10.4658 10.0483 11.0933 9.94251C11.1987 9.43649 11.4862 9.02479 11.7515 8.71278C11.9234 8.51074 12.1114 8.32181 12.2799 8.15509C12.3076 8.12767 12.3347 8.10096 12.3612 8.07485C12.503 7.93486 12.6275 7.81207 12.7404 7.68925C12.9225 7.49112 13.0339 7.22136 13.0339 6.90909C13.0339 6.34219 12.496 5.75 11.6599 5.75ZM13.4653 11.8624C12.9827 11.5371 12.3996 11.373 11.8102 11.3799C11.2258 11.3866 10.6528 11.5614 10.1825 11.8922L3.08683 16.8834C2.74174 17.1262 2.69621 17.4407 2.79641 17.7019C2.90209 17.9775 3.19989 18.25 3.70256 18.25H20.2975C20.8059 18.25 21.1032 17.9729 21.2063 17.6949C21.304 17.4314 21.2546 17.1133 20.8978 16.8728L13.4653 11.8624Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconHanger;