import { FC } from 'react';

const IconSortByTime: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M10 7.00024L2 7.00024" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M8 12.0002H2" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M10 17.0002H2" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><circle cx="17" cy="12.0002" r="5" stroke="currentColor" strokeWidth={width} /><path d="M17 10.0002V11.8464L18 13.0002" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M17 17.0002C19.7614 17.0002 22 14.7617 22 12.0002C22 9.23882 19.7614 7.00024 17 7.00024C14.2386 7.00024 12 9.23882 12 12.0002C12 14.7617 14.2386 17.0002 17 17.0002ZM17.75 10.0002C17.75 9.58603 17.4142 9.25024 17 9.25024C16.5858 9.25024 16.25 9.58603 16.25 10.0002V11.8464C16.25 12.0268 16.3151 12.2012 16.4332 12.3376L17.4332 13.4914C17.7045 13.8045 18.1782 13.8383 18.4912 13.567C18.8042 13.2957 18.838 12.8221 18.5668 12.509L17.75 11.5666V10.0002Z" fill="currentColor" /><g opacity={duotone ? "0.5" : "1"}><path fillRule="evenodd" clipRule="evenodd" d="M1.25 7.00024C1.25 6.58603 1.58579 6.25024 2 6.25024H10C10.4142 6.25024 10.75 6.58603 10.75 7.00024C10.75 7.41446 10.4142 7.75024 10 7.75024H2C1.58579 7.75024 1.25 7.41446 1.25 7.00024ZM1.25 12.0002C1.25 11.586 1.58579 11.2502 2 11.2502H8C8.41421 11.2502 8.75 11.586 8.75 12.0002C8.75 12.4145 8.41421 12.7502 8 12.7502H2C1.58579 12.7502 1.25 12.4145 1.25 12.0002ZM1.25 17.0002C1.25 16.586 1.58579 16.2502 2 16.2502H10C10.4142 16.2502 10.75 16.586 10.75 17.0002C10.75 17.4145 10.4142 17.7502 10 17.7502H2C1.58579 17.7502 1.25 17.4145 1.25 17.0002Z" fill="currentColor" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1.25 7.00024C1.25 6.58603 1.58579 6.25024 2 6.25024H10C10.4142 6.25024 10.75 6.58603 10.75 7.00024C10.75 7.41446 10.4142 7.75024 10 7.75024H2C1.58579 7.75024 1.25 7.41446 1.25 7.00024ZM1.25 12.0002C1.25 11.586 1.58579 11.2502 2 11.2502H8C8.41421 11.2502 8.75 11.586 8.75 12.0002C8.75 12.4145 8.41421 12.7502 8 12.7502H2C1.58579 12.7502 1.25 12.4145 1.25 12.0002ZM1.25 17.0002C1.25 16.586 1.58579 16.2502 2 16.2502H10C10.4142 16.2502 10.75 16.586 10.75 17.0002C10.75 17.4145 10.4142 17.7502 10 17.7502H2C1.58579 17.7502 1.25 17.4145 1.25 17.0002Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M17 17.0002C19.7614 17.0002 22 14.7617 22 12.0002C22 9.23882 19.7614 7.00024 17 7.00024C14.2386 7.00024 12 9.23882 12 12.0002C12 14.7617 14.2386 17.0002 17 17.0002ZM17.75 10.0002C17.75 9.58603 17.4142 9.25024 17 9.25024C16.5858 9.25024 16.25 9.58603 16.25 10.0002V11.8464C16.25 12.0268 16.3151 12.2012 16.4332 12.3376L17.4332 13.4914C17.7045 13.8045 18.1782 13.8383 18.4912 13.567C18.8042 13.2957 18.838 12.8221 18.5668 12.509L17.75 11.5666V10.0002Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSortByTime as IconComponent).keywords = [
  "sort",
  "by",
  "time",
  "classify",
  "assort",
  "class",
  "form",
  "kind",
  "sort out",
  "variety",
  "separate",
  "screen",
  "win by a nose",
  "saved by the bell",
  "lead by the nose",
  "pull oneself up by one's bootstraps",
  "by a landslide",
  "set by the ears",
  "have someone by the short and curlies",
  "trial by fire",
  "by the way",
  "fourth dimension",
  "clock",
  "meter",
  "clip",
  "sentence",
  "clock time",
  "prison term",
  "space-time",
  "momentum"
];

export default IconSortByTime as IconComponent;