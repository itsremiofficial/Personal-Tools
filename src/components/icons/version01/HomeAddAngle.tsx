import { FC } from 'react';

const IconHomeAddAngle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M2.36407 12.9581C1.98463 10.3211 1.79491 9.00253 2.33537 7.87519C2.87583 6.74785 4.02619 6.06258 6.32691 4.69205L7.71175 3.86711C9.80104 2.62253 10.8457 2.00024 12 2.00024C13.1543 2.00024 14.199 2.62253 16.2882 3.86711L17.6731 4.69205C19.9738 6.06258 21.1242 6.74785 21.6646 7.87519C22.2051 9.00253 22.0154 10.3211 21.6359 12.9581L21.3572 14.8955C20.8697 18.2829 20.626 19.9766 19.451 20.9884C18.2759 22.0002 16.5526 22.0002 13.1061 22.0002H10.8939C7.44737 22.0002 5.72409 22.0002 4.54903 20.9884C3.37396 19.9766 3.13025 18.2829 2.64284 14.8955L2.36407 12.9581Z" stroke="currentColor" strokeWidth={width} /><path d="M15 13L12 13M12 13L9 13M12 13L12 10M12 13L12 16" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M13.1061 22H10.8939C7.44737 22 5.72409 22 4.54903 20.9882C3.37396 19.9764 3.13025 18.2827 2.64284 14.8952L2.36407 12.9579C1.98463 10.3208 1.79491 9.00229 2.33537 7.87495C2.87583 6.7476 4.02619 6.06234 6.32691 4.69181L7.71175 3.86687C9.80104 2.62229 10.8457 2 12 2C13.1543 2 14.199 2.62229 16.2882 3.86687L17.6731 4.69181C19.9738 6.06234 21.1242 6.7476 21.6646 7.87495C22.2051 9.00229 22.0154 10.3208 21.6359 12.9579L21.3572 14.8952C20.8697 18.2827 20.626 19.9764 19.451 20.9882C18.2759 22 16.5526 22 13.1061 22Z" fill="currentColor" /><path d="M12 9.25C12.4142 9.25 12.75 9.58579 12.75 10V12.25L15 12.25C15.4142 12.25 15.75 12.5858 15.75 13C15.75 13.4142 15.4142 13.75 15 13.75L12.75 13.75V16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16V13.75H9C8.58579 13.75 8.25 13.4142 8.25 13C8.25 12.5858 8.58579 12.25 9 12.25H11.25V10C11.25 9.58579 11.5858 9.25 12 9.25Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2.33537 7.87495C1.79491 9.00229 1.98463 10.3208 2.36407 12.9579L2.64284 14.8952C3.13025 18.2827 3.37396 19.9764 4.54903 20.9882C5.72409 22 7.44737 22 10.8939 22H13.1061C16.5526 22 18.2759 22 19.451 20.9882C20.626 19.9764 20.8697 18.2827 21.3572 14.8952L21.6359 12.9579C22.0154 10.3208 22.2051 9.00229 21.6646 7.87495C21.1242 6.7476 19.9738 6.06234 17.6731 4.69181L16.2882 3.86687C14.199 2.62229 13.1543 2 12 2C10.8457 2 9.80104 2.62229 7.71175 3.86687L6.32691 4.69181C4.02619 6.06234 2.87583 6.7476 2.33537 7.87495ZM12.0001 9.24979C12.4143 9.24979 12.7501 9.58558 12.7501 9.99979V12.2498L15.0001 12.2498C15.4143 12.2498 15.7501 12.5856 15.7501 12.9998C15.7501 13.414 15.4143 13.7498 15.0001 13.7498L12.7501 13.7498V15.9998C12.7501 16.414 12.4143 16.7498 12.0001 16.7498C11.5859 16.7498 11.2501 16.414 11.2501 15.9998V13.7498H9.0001C8.58589 13.7498 8.2501 13.414 8.2501 12.9998C8.2501 12.5856 8.58589 12.2498 9.0001 12.2498H11.2501V9.99979C11.2501 9.58558 11.5859 9.24979 12.0001 9.24979Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHomeAddAngle as IconComponent).keywords = [
  "home",
  "add",
  "angle",
  "domicile",
  "habitation",
  "domestic",
  "dwelling",
  "nursing home",
  "rest home",
  "house",
  "dwelling house",
  "household",
  "total",
  "sum up",
  "tot up",
  "add up",
  "sum",
  "summate",
  "impart",
  "contribute",
  "supply",
  "weight",
  "slant",
  "tilt",
  "lean",
  "tip",
  "fish",
  "side",
  "prism",
  "dimension"
];

export default IconHomeAddAngle as IconComponent;