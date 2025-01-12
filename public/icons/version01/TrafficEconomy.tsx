import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconTrafficEconomy: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M22 12C22 13.9778 21.4135 15.9112 20.3147 17.5557C19.2159 19.2002 17.6541 20.4819 15.8268 21.2388C13.9996 21.9957 11.9889 22.1937 10.0491 21.8079C8.10929 21.422 6.32746 20.4696 4.92893 19.0711C3.53041 17.6725 2.578 15.8907 2.19215 13.9509C1.80629 12.0111 2.00433 10.0004 2.7612 8.17317C3.51808 6.3459 4.79981 4.78412 6.4443 3.6853C8.08879 2.58649 10.0222 2 12 2" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M14.5 2.31494C18.014 3.21939 20.7805 5.98588 21.685 9.4999" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22Z" fill="currentColor" /><path d="M10.6831 18.6203C11.9925 18.8808 13.3497 18.7471 14.5831 18.2362C15.8165 17.7253 16.8707 16.8601 17.6124 15.7501C18.3541 14.6401 18.75 13.335 18.75 12C18.75 11.5858 18.4142 11.25 18 11.25C17.5858 11.25 17.25 11.5858 17.25 12C17.25 13.0384 16.9421 14.0534 16.3652 14.9167C15.7883 15.7801 14.9684 16.453 14.0091 16.8504C13.0498 17.2477 11.9942 17.3517 10.9758 17.1491C9.95738 16.9465 9.02192 16.4465 8.28769 15.7123C7.55347 14.9781 7.05345 14.0426 6.85088 13.0242C6.64831 12.0058 6.75228 10.9502 7.14964 9.99091C7.547 9.0316 8.2199 8.21166 9.08326 7.63478C9.94662 7.05791 10.9617 6.75 12 6.75C12.4142 6.75 12.75 6.41421 12.75 6C12.75 5.58579 12.4142 5.25 12 5.25C10.665 5.25 9.35994 5.64588 8.2499 6.38758C7.13987 7.12928 6.27471 8.18349 5.76382 9.41689C5.25292 10.6503 5.11925 12.0075 5.3797 13.3169C5.64015 14.6262 6.28303 15.829 7.22703 16.773C8.17104 17.717 9.37377 18.3599 10.6831 18.6203Z" fill="currentColor" /><path d="M13.3109 6.04536C13.4741 5.66466 13.915 5.48837 14.2957 5.65159C16.1129 6.4307 17.5693 7.88713 18.3484 9.70428C18.5116 10.085 18.3353 10.5259 17.9546 10.6891C17.5739 10.8524 17.133 10.6761 16.9698 10.2954C16.3424 8.83208 15.1679 7.65761 13.7046 7.03022C13.3239 6.867 13.1476 6.42606 13.3109 6.04536Z" fill="currentColor" /><path d="M12 9.74995C12.4142 9.74995 12.75 10.0857 12.75 10.4999V11.25H13.5C13.9142 11.25 14.25 11.5857 14.25 12C14.25 12.4142 13.9142 12.75 13.5 12.75H12.75V13.4999C12.75 13.9142 12.4142 14.2499 12 14.2499C11.5858 14.2499 11.25 13.9142 11.25 13.4999V12.75H10.5C10.0858 12.75 9.75 12.4142 9.75 12C9.75 11.5857 10.0858 11.25 10.5 11.25H11.25V10.4999C11.25 10.0857 11.5858 9.74995 12 9.74995Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355ZM14.5831 18.2362C13.3497 18.7471 11.9925 18.8808 10.6831 18.6203C9.37377 18.3599 8.17103 17.717 7.22703 16.773C6.28303 15.829 5.64015 14.6262 5.3797 13.3169C5.11925 12.0075 5.25292 10.6503 5.76381 9.41689C6.2747 8.18349 7.13987 7.12928 8.2499 6.38758C9.35993 5.64588 10.665 5.25 12 5.25C12.4142 5.25 12.75 5.58579 12.75 6C12.75 6.41421 12.4142 6.75 12 6.75C10.9616 6.75 9.94662 7.05791 9.08326 7.63479C8.2199 8.21166 7.54699 9.0316 7.14963 9.99091C6.75227 10.9502 6.64831 12.0058 6.85088 13.0242C7.05345 14.0426 7.55346 14.9781 8.28769 15.7123C9.02192 16.4465 9.95738 16.9466 10.9758 17.1491C11.9942 17.3517 13.0498 17.2477 14.0091 16.8504C14.9684 16.453 15.7883 15.7801 16.3652 14.9167C16.9421 14.0534 17.25 13.0384 17.25 12C17.25 11.5858 17.5858 11.25 18 11.25C18.4142 11.25 18.75 11.5858 18.75 12C18.75 13.335 18.3541 14.6401 17.6124 15.7501C16.8707 16.8601 15.8165 17.7253 14.5831 18.2362ZM14.2957 5.65159C13.915 5.48837 13.4741 5.66467 13.3109 6.04536C13.1476 6.42606 13.3239 6.867 13.7046 7.03022C15.1679 7.65761 16.3424 8.83208 16.9698 10.2954C17.133 10.6761 17.5739 10.8524 17.9546 10.6891C18.3353 10.5259 18.5116 10.085 18.3484 9.70428C17.5693 7.88714 16.1129 6.4307 14.2957 5.65159ZM12 9.74995C12.4142 9.74995 12.75 10.0857 12.75 10.5V11.25H13.5C13.9142 11.25 14.25 11.5857 14.25 12C14.25 12.4142 13.9142 12.75 13.5 12.75H12.75V13.5C12.75 13.9142 12.4142 14.25 12 14.25C11.5858 14.25 11.25 13.9142 11.25 13.5V12.75H10.5C10.0858 12.75 9.75 12.4142 9.75 12C9.75 11.5857 10.0858 11.25 10.5 11.25H11.25V10.5C11.25 10.0857 11.5858 9.74995 12 9.74995Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconTrafficEconomy;