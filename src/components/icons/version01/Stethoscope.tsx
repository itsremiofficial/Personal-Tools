import { FC } from 'react';

const IconStethoscope: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M9 14.2356V17.0003C9 19.7617 11.2386 22.0003 14 22.0003H14.8824C16.7691 22.0003 18.3595 20.7313 18.8465 19.0003" stroke="currentColor" strokeWidth={width} /><path d="M5.42857 3.00024H5.3369C5.02404 3.00024 4.86761 3.00024 4.73574 3.01191C3.28763 3.13996 2.13972 4.28787 2.01166 5.73599C2 5.86786 2 6.02429 2 6.33714V7.23554C2 11.1015 5.13401 14.2355 9 14.2355C12.7082 14.2355 15.7143 11.2294 15.7143 7.52125V6.33714C15.7143 6.02429 15.7143 5.86786 15.7026 5.73599C15.5746 4.28787 14.4267 3.13996 12.9785 3.01191C12.8467 3.00024 12.6902 3.00024 12.3774 3.00024H12.2857" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><circle cx="19" cy="16.0002" r="3" stroke="currentColor" strokeWidth={width} /><path d="M12 2.00024V4.00024" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M6 2.00024V4.00024" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="19" cy="16.0002" r="3" fill="currentColor" /><path d="M12 1.25024C12.4142 1.25024 12.75 1.58603 12.75 2.00024V2.25168C12.8612 2.25336 12.9561 2.25699 13.0446 2.26482C14.8548 2.42489 16.2896 3.85978 16.4497 5.66992C16.4643 5.83537 16.4643 6.02282 16.4643 6.29812L16.4643 7.52125C16.4643 11.6437 13.1224 14.9855 9.00001 14.9855C4.7198 14.9855 1.25001 11.5157 1.25001 7.23554L1.25 6.29816C1.24997 6.02283 1.24995 5.83538 1.26458 5.66992C1.42465 3.85978 2.85954 2.42489 4.66969 2.26482C4.82536 2.25105 5.00051 2.25026 5.25001 2.25024V2.00024C5.25001 1.58603 5.58579 1.25024 6.00001 1.25024C6.41422 1.25024 6.75001 1.58603 6.75001 2.00024V4.00024C6.75001 4.41446 6.41422 4.75024 6.00001 4.75024C5.58579 4.75024 5.25001 4.41446 5.25001 4.00024V3.75027C4.9866 3.75045 4.88393 3.75173 4.80181 3.75899C3.71573 3.85503 2.85479 4.71596 2.75875 5.80205C2.75074 5.89264 2.75001 6.00826 2.75001 6.33714V7.23554C2.75001 10.6873 5.54823 13.4855 9.00001 13.4855C12.294 13.4855 14.9643 10.8152 14.9643 7.52125V6.33714C14.9643 6.00826 14.9636 5.89265 14.9555 5.80205C14.8595 4.71596 13.9986 3.85503 12.9125 3.75899C12.8702 3.75525 12.8224 3.75309 12.75 3.75186V4.00024C12.75 4.41446 12.4142 4.75024 12 4.75024C11.5858 4.75024 11.25 4.41446 11.25 4.00024V2.00024C11.25 1.58603 11.5858 1.25024 12 1.25024Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M8.25 14.9497V17.0003C8.25 20.176 10.8244 22.7503 14 22.7503H14.8824C16.6952 22.7503 18.2756 21.7589 19.1126 20.2923C19.3594 19.8597 19.4822 19.3966 19.542 18.9514C19.3662 18.9835 19.1851 19.0003 19 19.0003C18.6649 19.0003 18.3426 18.9453 18.0417 18.844C17.9986 19.111 17.926 19.3451 17.8098 19.5488C17.2289 20.5668 16.135 21.2503 14.8824 21.2503H14C11.6528 21.2503 9.75 19.3475 9.75 17.0003V14.9484C9.50334 14.973 9.25314 14.9856 9.00001 14.9856C8.74699 14.9856 8.4968 14.9734 8.25 14.9497Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 1.25024C12.4142 1.25024 12.75 1.58603 12.75 2.00024V2.25168C12.8612 2.25336 12.9561 2.25699 13.0446 2.26482C14.8548 2.42489 16.2896 3.85978 16.4497 5.66992C16.4643 5.83537 16.4643 6.02281 16.4643 6.2981L16.4643 7.52125C16.4643 11.3905 13.5202 14.5722 9.75001 14.9483V17.0003C9.75001 19.3475 11.6528 21.2503 14 21.2503H14.8824C16.2803 21.2503 17.4809 20.3984 17.9902 19.1825C18.03 19.0875 18.0578 18.9791 18.075 18.8549C16.8708 18.465 16 17.3343 16 16.0002C16 14.3434 17.3432 13.0002 19 13.0002C20.6569 13.0002 22 14.3434 22 16.0002C22 17.4605 20.9567 18.6771 19.5748 18.9452C19.5472 19.2087 19.4887 19.4874 19.3738 19.762C18.6391 21.5159 16.9058 22.7503 14.8824 22.7503H14C10.8244 22.7503 8.25001 20.1759 8.25001 17.0003V14.9497C4.3217 14.5725 1.25001 11.2627 1.25001 7.23554L1.25 6.29816C1.24997 6.02283 1.24995 5.83538 1.26458 5.66992C1.42465 3.85978 2.85954 2.42489 4.66969 2.26482C4.82536 2.25105 5.00051 2.25026 5.25001 2.25024V2.00024C5.25001 1.58603 5.58579 1.25024 6.00001 1.25024C6.41422 1.25024 6.75001 1.58603 6.75001 2.00024V4.00024C6.75001 4.41446 6.41422 4.75024 6.00001 4.75024C5.58579 4.75024 5.25001 4.41446 5.25001 4.00024V3.75027C4.9866 3.75045 4.88393 3.75173 4.80181 3.75899C3.71573 3.85503 2.85479 4.71596 2.75875 5.80205C2.75074 5.89264 2.75001 6.00826 2.75001 6.33714V7.23554C2.75001 10.6873 5.54823 13.4855 9.00001 13.4855C12.294 13.4855 14.9643 10.8152 14.9643 7.52125V6.33714C14.9643 6.00826 14.9636 5.89265 14.9555 5.80205C14.8595 4.71596 13.9986 3.85503 12.9125 3.75899C12.8702 3.75525 12.8224 3.75309 12.75 3.75186V4.00024C12.75 4.41446 12.4142 4.75024 12 4.75024C11.5858 4.75024 11.25 4.41446 11.25 4.00024V2.00024C11.25 1.58603 11.5858 1.25024 12 1.25024Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconStethoscope as IconComponent).keywords = [
  "stethoscope",
  "precordial",
  "binaural",
  "otoscope",
  "auscultation",
  "littman",
  "cardiograph",
  "auscultate",
  "cardiogram",
  "electrocardiograph"
];

export default IconStethoscope as IconComponent;