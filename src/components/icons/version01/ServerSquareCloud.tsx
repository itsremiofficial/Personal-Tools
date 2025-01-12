import { FC } from 'react';

const IconServerSquareCloud: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M13 21.7501C13.4142 21.7501 13.75 21.4143 13.75 21.0001C13.75 20.5859 13.4142 20.2501 13 20.2501V21.7501ZM3.17157 19.8285L3.7019 19.2982H3.7019L3.17157 19.8285ZM20.8284 4.17169L20.2981 4.70202V4.70203L20.8284 4.17169ZM21.25 13.0001C21.25 13.4143 21.5858 13.7501 22 13.7501C22.4142 13.7501 22.75 13.4143 22.75 13.0001H21.25ZM10 3.75012H14V2.25012H10V3.75012ZM2.75 13.0001V12.0001H1.25V13.0001H2.75ZM2.75 12.0001V11.0001H1.25V12.0001H2.75ZM13 20.2501H10V21.7501H13V20.2501ZM21.25 11.0001V12.0001H22.75V11.0001H21.25ZM1.25 13.0001C1.25 14.8645 1.24841 16.3383 1.40313 17.4891C1.56076 18.6616 1.89288 19.6105 2.64124 20.3589L3.7019 19.2982C3.27869 18.875 3.02502 18.2954 2.88976 17.2893C2.75159 16.2616 2.75 14.9069 2.75 13.0001H1.25ZM10 20.2501C8.09318 20.2501 6.73851 20.2485 5.71085 20.1104C4.70476 19.9751 4.12511 19.7214 3.7019 19.2982L2.64124 20.3589C3.38961 21.1072 4.33855 21.4394 5.51098 21.597C6.66182 21.7517 8.13558 21.7501 10 21.7501V20.2501ZM14 3.75012C15.9068 3.75012 17.2615 3.75171 18.2892 3.88988C19.2952 4.02515 19.8749 4.27882 20.2981 4.70202L21.3588 3.64137C20.6104 2.893 19.6614 2.56088 18.489 2.40326C17.3382 2.24853 15.8644 2.25012 14 2.25012V3.75012ZM22.75 11.0001C22.75 9.13571 22.7516 7.66195 22.5969 6.5111C22.4392 5.33868 22.1071 4.38973 21.3588 3.64136L20.2981 4.70203C20.7213 5.12524 20.975 5.70488 21.1102 6.71097C21.2484 7.73864 21.25 9.0933 21.25 11.0001H22.75ZM10 2.25012C8.13558 2.25012 6.66182 2.24853 5.51098 2.40326C4.33856 2.56088 3.38961 2.893 2.64124 3.64136L3.7019 4.70203C4.12511 4.27882 4.70476 4.02515 5.71085 3.88988C6.73851 3.75171 8.09318 3.75012 10 3.75012V2.25012ZM2.75 11.0001C2.75 9.0933 2.75159 7.73863 2.88976 6.71097C3.02502 5.70488 3.27869 5.12523 3.7019 4.70203L2.64124 3.64136C1.89288 4.38973 1.56076 5.33868 1.40313 6.5111C1.24841 7.66195 1.25 9.13571 1.25 11.0001H2.75ZM2 12.7501H22V11.2501H2V12.7501ZM21.25 12.0001V13.0001H22.75V12.0001H21.25Z" fill="currentColor" /><path d="M13.5 7.50012L18 7.50012" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M6 17.5001L6 15.5001" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M6 8.50012L6 6.50012" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M9 17.5001L9 15.5001" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M9 8.50012L9 6.50012" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M19.3333 16.8853C19.5419 16.8073 19.7662 16.7648 20 16.7648C20.2291 16.7648 20.4493 16.8056 20.6543 16.8807M16.7907 17.8534C16.6966 17.8339 16.5994 17.8237 16.5 17.8237C15.6716 17.8237 15 18.5347 15 19.4119C15 20.289 15.6716 21.0001 16.5 21.0001H20C21.1046 21.0001 22 20.052 22 18.8825C22 17.9555 21.4375 17.1677 20.6543 16.8807M16.7907 17.8534C16.7105 17.6243 16.6667 17.3764 16.6667 17.1178C16.6667 15.9482 17.5621 15.0001 18.6667 15.0001C19.6956 15.0001 20.543 15.8228 20.6543 16.8807M16.7907 17.8534C16.9882 17.8945 17.1718 17.9766 17.3333 18.0911" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.5" : "1"}><path d="M10 21.0001C6.22876 21.0001 4.34315 21.0001 3.17157 19.8285C2 18.657 2 16.7714 2 13.0001V12.7501H22V13.0001C22 14.1196 22 15.0728 21.9694 15.8906L21.955 15.8806C21.4762 14.5284 20.2273 13.5001 18.6667 13.5001C17.1549 13.5001 15.9395 14.4602 15.4282 15.7501H13.5C13.0858 15.7501 12.75 16.0859 12.75 16.5001C12.75 16.9143 13.0858 17.2501 13.5 17.2501H14.3571C13.8191 17.82 13.5 18.5959 13.5 19.4119C13.5 19.9793 13.6543 20.5273 13.9292 21.0001H10Z" fill="currentColor" /><path d="M10 3.00012H14C17.7712 3.00012 19.6569 3.00012 20.8284 4.17169C22 5.34327 22 7.22889 22 11.0001V11.2501H2V11.0001C2 7.22889 2 5.34327 3.17157 4.17169C4.34315 3.00012 6.22876 3.00012 10 3.00012Z" fill="currentColor" /></g><path fillRule="evenodd" clipRule="evenodd" d="M20.6543 16.8807C20.543 15.8228 19.6956 15.0001 18.6667 15.0001C17.8216 15.0001 17.0989 15.5551 16.806 16.3396C16.7161 16.5805 16.6667 16.843 16.6667 17.1178C16.6667 17.3764 16.7105 17.6243 16.7907 17.8534C16.6966 17.8339 16.5994 17.8237 16.5 17.8237C16.0601 17.8237 15.6644 18.0241 15.3901 18.3435C15.1477 18.6256 15 19.0005 15 19.4119C15 20.289 15.6716 21.0001 16.5 21.0001H20C21.1046 21.0001 22 20.052 22 18.8825C22 17.9555 21.4375 17.1677 20.6543 16.8807Z" fill="currentColor" /><path d="M20.6543 16.8807C20.543 15.8228 19.6956 15.0001 18.6667 15.0001C17.8216 15.0001 17.0989 15.5551 16.806 16.3396C16.7161 16.5805 16.6667 16.843 16.6667 17.1178C16.6667 17.3764 16.7105 17.6243 16.7907 17.8534C16.6966 17.8339 16.5994 17.8237 16.5 17.8237C16.0601 17.8237 15.6644 18.0241 15.3901 18.3435C15.1477 18.6256 15 19.0005 15 19.4119C15 20.289 15.6716 21.0001 16.5 21.0001H20C21.1046 21.0001 22 20.052 22 18.8825C22 17.9555 21.4375 17.1677 20.6543 16.8807Z" fill="currentColor" /><path d="M12.75 7.50012C12.75 7.08591 13.0858 6.75012 13.5 6.75012H18C18.4142 6.75012 18.75 7.08591 18.75 7.50012C18.75 7.91434 18.4142 8.25012 18 8.25012H13.5C13.0858 8.25012 12.75 7.91434 12.75 7.50012Z" fill="currentColor" /><path d="M6 18.2501C5.58579 18.2501 5.25 17.9143 5.25 17.5001V15.5001C5.25 15.0859 5.58579 14.7501 6 14.7501C6.41421 14.7501 6.75 15.0859 6.75 15.5001V17.5001C6.75 17.9143 6.41421 18.2501 6 18.2501Z" fill="currentColor" /><path d="M6 9.25012C5.58579 9.25012 5.25 8.91434 5.25 8.50012V6.50012C5.25 6.08591 5.58579 5.75012 6 5.75012C6.41421 5.75012 6.75 6.08591 6.75 6.50012V8.50012C6.75 8.91434 6.41421 9.25012 6 9.25012Z" fill="currentColor" /><path d="M9 18.2501C8.58579 18.2501 8.25 17.9143 8.25 17.5001V15.5001C8.25 15.0859 8.58579 14.7501 9 14.7501C9.41421 14.7501 9.75 15.0859 9.75 15.5001V17.5001C9.75 17.9143 9.41421 18.2501 9 18.2501Z" fill="currentColor" /><path d="M9 9.25012C8.58579 9.25012 8.25 8.91434 8.25 8.50012V6.50012C8.25 6.08591 8.58579 5.75012 9 5.75012C9.41421 5.75012 9.75 6.08591 9.75 6.50012V8.50012C9.75 8.91434 9.41421 9.25012 9 9.25012Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M22 12.7501H2V11.2501H22V12.7501Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.17157 19.8285C4.34315 21.0001 6.22876 21.0001 10 21.0001H13.9292C13.6543 20.5273 13.5 19.9793 13.5 19.4119C13.5 18.5959 13.8191 17.82 14.3571 17.2501H13.5C13.0858 17.2501 12.75 16.9143 12.75 16.5001C12.75 16.0859 13.0858 15.7501 13.5 15.7501H15.4282C15.9395 14.4602 17.1549 13.5001 18.6667 13.5001C20.2273 13.5001 21.4762 14.5284 21.955 15.8806L21.9694 15.8906C22 15.0728 22 14.1196 22 13.0001V12.7501H2V13.0001C2 16.7714 2 18.657 3.17157 19.8285ZM6 18.2501C5.58579 18.2501 5.25 17.9143 5.25 17.5001L5.25 15.5001C5.25 15.0859 5.58579 14.7501 6 14.7501C6.41421 14.7501 6.75 15.0859 6.75 15.5001V17.5001C6.75 17.9143 6.41421 18.2501 6 18.2501ZM9 18.2501C8.58579 18.2501 8.25 17.9143 8.25 17.5001V15.5001C8.25 15.0859 8.58579 14.7501 9 14.7501C9.41421 14.7501 9.75 15.0859 9.75 15.5001V17.5001C9.75 17.9143 9.41421 18.2501 9 18.2501Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M3.17157 4.17169C2 5.34327 2 7.22889 2 11.0001V11.2501H22V11.0001C22 7.22889 22 5.34327 20.8284 4.17169C19.6569 3.00012 17.7712 3.00012 14 3.00012H10C6.22876 3.00012 4.34315 3.00012 3.17157 4.17169ZM9 9.25012C8.58579 9.25012 8.25 8.91434 8.25 8.50012V6.50012C8.25 6.08591 8.58579 5.75012 9 5.75012C9.41421 5.75012 9.75 6.08591 9.75 6.50012V8.50012C9.75 8.91434 9.41421 9.25012 9 9.25012ZM5.25 8.50012C5.25 8.91434 5.58579 9.25012 6 9.25012C6.41421 9.25012 6.75 8.91434 6.75 8.50012V6.50012C6.75 6.08591 6.41421 5.75012 6 5.75012C5.58579 5.75012 5.25 6.08591 5.25 6.50012L5.25 8.50012ZM12.75 7.50012C12.75 7.08591 13.0858 6.75012 13.5 6.75012H18C18.4142 6.75012 18.75 7.08591 18.75 7.50012C18.75 7.91434 18.4142 8.25012 18 8.25012H13.5C13.0858 8.25012 12.75 7.91434 12.75 7.50012Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M20.6543 16.8807C20.543 15.8228 19.6956 15.0001 18.6667 15.0001C17.8216 15.0001 17.0989 15.5551 16.806 16.3396C16.7161 16.5805 16.6667 16.843 16.6667 17.1178C16.6667 17.3764 16.7105 17.6243 16.7907 17.8534C16.6966 17.8339 16.5994 17.8237 16.5 17.8237C16.0601 17.8237 15.6644 18.0241 15.3901 18.3435C15.1477 18.6256 15 19.0005 15 19.4119C15 20.289 15.6716 21.0001 16.5 21.0001H20C21.1046 21.0001 22 20.052 22 18.8825C22 17.9555 21.4375 17.1677 20.6543 16.8807Z" fill="currentColor" /><path d="M20.6543 16.8807C20.543 15.8228 19.6956 15.0001 18.6667 15.0001C17.8216 15.0001 17.0989 15.5551 16.806 16.3396C16.7161 16.5805 16.6667 16.843 16.6667 17.1178C16.6667 17.3764 16.7105 17.6243 16.7907 17.8534C16.6966 17.8339 16.5994 17.8237 16.5 17.8237C16.0601 17.8237 15.6644 18.0241 15.3901 18.3435C15.1477 18.6256 15 19.0005 15 19.4119C15 20.289 15.6716 21.0001 16.5 21.0001H20C21.1046 21.0001 22 20.052 22 18.8825C22 17.9555 21.4375 17.1677 20.6543 16.8807Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconServerSquareCloud as IconComponent).keywords = [
  "server",
  "square",
  "cloud",
  "host",
  "waiter",
  "server-side",
  "servlet",
  "mainframe",
  "tftp",
  "browser",
  "listserv",
  "serv",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest",
  "fog",
  "mist",
  "befog",
  "haze over",
  "becloud",
  "dapple",
  "mottle",
  "sully",
  "defile"
];

export default IconServerSquareCloud as IconComponent;