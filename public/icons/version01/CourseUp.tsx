import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconCourseUp: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M22 7L14.6203 14.3347C13.6227 15.3263 13.1238 15.822 12.5051 15.822C11.8864 15.8219 11.3876 15.326 10.3902 14.3342L10.1509 14.0962C9.15254 13.1035 8.65338 12.6071 8.03422 12.6074C7.41506 12.6076 6.91626 13.1043 5.91867 14.0977L2 18" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M22.0001 12.5458V7H16.418" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M15.668 7C15.668 6.58579 16.0038 6.25 16.418 6.25H22.0001C22.4143 6.25 22.7501 6.58579 22.7501 7V12.5458C22.7501 12.96 22.4143 13.2958 22.0001 13.2958C21.5859 13.2958 21.2501 12.96 21.2501 12.5458V7.75H16.418C16.0038 7.75 15.668 7.41421 15.668 7Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M20.1873 7.75L14.0916 13.8027C13.5778 14.3134 13.2447 14.6423 12.9673 14.8527C12.7073 15.0499 12.5857 15.072 12.5052 15.072C12.4247 15.072 12.3031 15.0499 12.0431 14.8526C11.7658 14.6421 11.4327 14.3132 10.919 13.8024L10.6448 13.5296C10.1755 13.063 9.77105 12.6607 9.40375 12.382C9.01003 12.0832 8.57254 11.8572 8.03395 11.8574C7.49535 11.8576 7.05802 12.0839 6.66452 12.383C6.29742 12.662 5.89326 13.0645 5.42433 13.5315L1.47078 17.4686C1.17728 17.7608 1.17628 18.2357 1.46856 18.5292C1.76084 18.8227 2.23571 18.8237 2.52922 18.5314L6.44789 14.6292C6.96167 14.1175 7.29478 13.7881 7.57219 13.5772C7.83228 13.3795 7.95393 13.3574 8.03449 13.3574C8.11506 13.3573 8.23672 13.3794 8.49695 13.5769C8.77452 13.7875 9.10787 14.1167 9.62203 14.628L9.89627 14.9007C10.3651 15.367 10.7692 15.7688 11.1362 16.0474C11.5297 16.346 11.9668 16.5719 12.505 16.572C13.0432 16.572 13.4804 16.3462 13.8739 16.0477C14.241 15.7692 14.6452 15.3674 15.1142 14.9013L21.2501 8.80858V7.75H20.1873Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M15.6679 7C15.6679 6.58579 16.0036 6.25 16.4179 6.25H22C22.4142 6.25 22.75 6.58579 22.75 7V12.5458C22.75 12.96 22.4142 13.2958 22 13.2958C21.5858 13.2958 21.25 12.96 21.25 12.5458V8.80286L15.1142 14.9013C14.6452 15.3674 14.241 15.7692 13.8739 16.0477C13.4804 16.3462 13.0432 16.572 12.505 16.572C11.9668 16.5719 11.5297 16.346 11.1362 16.0474C10.7692 15.7688 10.3651 15.367 9.89629 14.9007L9.62203 14.628C9.10787 14.1167 8.77452 13.7875 8.49695 13.5769C8.23672 13.3794 8.11506 13.3573 8.03449 13.3574C7.95393 13.3574 7.83228 13.3795 7.57219 13.5772C7.29478 13.7881 6.96167 14.1175 6.44789 14.6292L2.52922 18.5314C2.23571 18.8237 1.76084 18.8227 1.46856 18.5292C1.17628 18.2357 1.17728 17.7608 1.47078 17.4686L5.42433 13.5315C5.89326 13.0645 6.29742 12.662 6.66452 12.383C7.05802 12.0839 7.49535 11.8576 8.03395 11.8574C8.57254 11.8572 9.01003 12.0832 9.40375 12.382C9.77105 12.6607 10.1755 13.063 10.6448 13.5296L10.919 13.8024C11.4327 14.3132 11.7658 14.6421 12.0431 14.8526C12.3031 15.0499 12.4247 15.072 12.5052 15.072C12.5857 15.072 12.7073 15.0499 12.9673 14.8527C13.2447 14.6423 13.5778 14.3134 14.0916 13.8027L20.1815 7.75H16.4179C16.0036 7.75 15.6679 7.41421 15.6679 7Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconCourseUp;