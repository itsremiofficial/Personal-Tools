import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconMaskSad: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M21 12V6.71888C21 4.52896 21 3.434 20.2927 2.83487C19.5855 2.23574 18.5045 2.41591 16.3424 2.77626L15.288 2.95199C13.6477 3.22537 12.8276 3.36205 12 3.36205C11.1724 3.36205 10.3523 3.22537 8.71202 2.95199L7.6576 2.77626C5.49553 2.41591 4.4145 2.23574 3.70725 2.83487C3 3.434 3 4.52896 3 6.71888V12C3 17.4903 7.23896 20.1547 9.89856 21.286C10.62 21.5929 10.9807 21.7464 12 21.7464C13.0193 21.7464 13.38 21.5929 14.1014 21.286C16.761 20.1547 21 17.4903 21 12Z" stroke="currentColor" strokeWidth={width} /><path d="M6.5 9C6.79112 8.4174 7.57665 8 8.5 8C9.42335 8 10.2089 8.4174 10.5 9" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M13.5 9C13.7911 8.4174 14.5766 8 15.5 8C16.4234 8 17.2089 8.4174 17.5 9" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M8.5 15C8.5 15 9.55 14 12 14C14.45 14 15.5 15 15.5 15" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M21 6.20766V11.4061C21 16.8106 16.761 19.4332 14.1014 20.5469C13.38 20.849 13.0193 21 12 21C10.9807 21 10.62 20.849 9.89856 20.5469C7.23896 19.4332 3 16.8106 3 11.4061V6.20766C3 4.05201 3 2.97418 3.70725 2.38442C4.4145 1.79467 5.49553 1.97202 7.6576 2.32673L8.71202 2.49971C10.3523 2.76881 11.1724 2.90336 12 2.90336C12.8276 2.90336 13.6477 2.76881 15.288 2.49971L16.3424 2.32673C18.5045 1.97202 19.5855 1.79467 20.2927 2.38442C21 2.97418 21 4.05201 21 6.20766Z" fill="currentColor" /><path d="M7.17107 8.78309C7.29454 8.53986 7.75695 8.207 8.50016 8.207C9.24338 8.207 9.70579 8.53986 9.82926 8.78309C10.0144 9.14782 10.4649 9.29574 10.8354 9.11349C11.2059 8.93123 11.3562 8.48781 11.1711 8.12308C10.7123 7.21935 9.60365 6.73047 8.50016 6.73047C7.39668 6.73047 6.28804 7.21935 5.82926 8.12308C5.64411 8.48781 5.79439 8.93123 6.16492 9.11349C6.53544 9.29574 6.98591 9.14782 7.17107 8.78309Z" fill="currentColor" /><path d="M15.5002 8.207C14.7569 8.207 14.2945 8.53986 14.1711 8.78309C13.9859 9.14782 13.5354 9.29574 13.1649 9.11349C12.7944 8.93123 12.6441 8.48781 12.8293 8.12308C13.288 7.21935 14.3967 6.73047 15.5002 6.73047C16.6037 6.73047 17.7123 7.21935 18.1711 8.12308C18.3562 8.48781 18.2059 8.93123 17.8354 9.11349C17.4649 9.29574 17.0144 9.14782 16.8293 8.78309C16.7058 8.53986 16.2434 8.207 15.5002 8.207Z" fill="currentColor" /><path d="M7.99594 13.8125C7.696 14.0937 7.67123 14.5731 7.9569 14.8683C8.2402 15.1612 8.70946 15.1748 9.00977 14.9007L9.01531 14.896L9.02419 14.8888C9.02939 14.8846 9.03592 14.8795 9.04379 14.8734C9.06315 14.8586 9.09073 14.8384 9.12649 14.8143C9.22721 14.7463 9.39425 14.6462 9.63305 14.5429C10.1081 14.3373 10.8804 14.1131 12 14.1131C13.1196 14.1131 13.8919 14.3373 14.367 14.5429C14.6058 14.6462 14.7728 14.7463 14.8735 14.8143C14.9239 14.8483 14.9578 14.8743 14.9758 14.8888L14.9862 14.8973L14.9909 14.9014C15.2913 15.1748 15.76 15.1609 16.0431 14.8683C16.3288 14.5731 16.3172 14.1058 16.0172 13.8246L16.016 13.8234L16.0146 13.8221L16.0115 13.8192L16.0041 13.8125L15.9842 13.7949C15.9688 13.7815 15.9489 13.7647 15.9244 13.745C15.8754 13.7056 15.8081 13.6548 15.7218 13.5965C15.5491 13.4799 15.3005 13.3339 14.9706 13.1912C14.3081 12.9045 13.3304 12.6366 12 12.6366C10.6696 12.6366 9.69192 12.9045 9.02945 13.1912C8.6995 13.3339 8.45092 13.4799 8.2782 13.5965C8.19189 13.6548 8.1246 13.7056 8.07562 13.745C8.05113 13.7647 8.03121 13.7815 8.01576 13.7949L7.99594 13.8125Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M21 11.4061V6.20766C21 4.05201 21 2.97418 20.2927 2.38442C19.5855 1.79467 18.5045 1.97202 16.3424 2.32673L15.288 2.49971C13.6477 2.76881 12.8276 2.90336 12 2.90336C11.1724 2.90336 10.3523 2.76881 8.71202 2.49971L7.6576 2.32673C5.49553 1.97202 4.4145 1.79467 3.70725 2.38442C3 2.97418 3 4.05201 3 6.20766V11.4061C3 16.8106 7.23896 19.4332 9.89856 20.5469C10.62 20.849 10.9807 21 12 21C13.0193 21 13.38 20.849 14.1014 20.5469C16.761 19.4332 21 16.8106 21 11.4061ZM7.99594 13.8125C7.696 14.0937 7.67123 14.5731 7.9569 14.8683C8.2402 15.1612 8.70946 15.1748 9.00977 14.9007L9.01531 14.896L9.02419 14.8888C9.02939 14.8846 9.03592 14.8795 9.04379 14.8734C9.06315 14.8586 9.09073 14.8384 9.12649 14.8143C9.22721 14.7463 9.39425 14.6462 9.63305 14.5429C10.1081 14.3373 10.8804 14.1131 12 14.1131C13.1196 14.1131 13.8919 14.3373 14.367 14.5429C14.6058 14.6462 14.7728 14.7463 14.8735 14.8143C14.9239 14.8483 14.9578 14.8743 14.9758 14.8888L14.9862 14.8973L14.9909 14.9014C15.2913 15.1748 15.76 15.1609 16.0431 14.8683C16.3288 14.5731 16.3172 14.1058 16.0172 13.8246L16.016 13.8234L16.0146 13.8221L16.0115 13.8192L16.0041 13.8125L15.9842 13.7949C15.9688 13.7815 15.9489 13.7647 15.9244 13.745C15.8754 13.7056 15.8081 13.6548 15.7218 13.5965C15.5491 13.4799 15.3005 13.3339 14.9706 13.1912C14.3081 12.9045 13.3304 12.6366 12 12.6366C10.6696 12.6366 9.69192 12.9045 9.02945 13.1912C8.6995 13.3339 8.45092 13.4799 8.2782 13.5965C8.19189 13.6548 8.1246 13.7056 8.07562 13.745C8.05113 13.7647 8.03121 13.7815 8.01576 13.7949L7.99594 13.8125ZM8.50016 8.20699C7.75695 8.20699 7.29454 8.53985 7.17107 8.78308C6.98591 9.14781 6.53544 9.29574 6.16492 9.11348C5.79439 8.93122 5.64411 8.4878 5.82926 8.12307C6.28804 7.21934 7.39668 6.73046 8.50016 6.73046C9.60365 6.73046 10.7123 7.21934 11.1711 8.12307C11.3562 8.4878 11.2059 8.93122 10.8354 9.11348C10.4649 9.29574 10.0144 9.14781 9.82926 8.78308C9.70579 8.53985 9.24338 8.20699 8.50016 8.20699ZM15.5002 8.20699C14.7569 8.20699 14.2945 8.53985 14.1711 8.78308C13.9859 9.14781 13.5354 9.29574 13.1649 9.11348C12.7944 8.93122 12.6441 8.4878 12.8293 8.12307C13.288 7.21934 14.3967 6.73046 15.5002 6.73046C16.6037 6.73046 17.7123 7.21934 18.1711 8.12307C18.3562 8.4878 18.2059 8.93122 17.8354 9.11348C17.4649 9.29574 17.0144 9.14781 16.8293 8.78308C16.7058 8.53985 16.2434 8.20699 15.5002 8.20699Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMaskSad;