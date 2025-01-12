import { FC } from 'react';

const IconBath: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 13.0828C3 13.006 3 12.9676 3.00211 12.9352C3.0347 12.4341 3.43395 12.0348 3.93511 12.0022C3.96752 12.0001 4.00591 12.0001 4.08268 12.0001H19.9173C19.9941 12.0001 20.0325 12.0001 20.0649 12.0022C20.5661 12.0348 20.9653 12.4341 20.9979 12.9352C21 12.9676 21 13.006 21 13.0828C21 13.4785 21 13.6763 20.9859 13.8978C20.7773 17.1856 17.983 20.0868 14.7053 20.4188C14.4845 20.4411 14.3558 20.446 14.0982 20.4556C13.364 20.4832 12.6493 20.5001 12 20.5001C11.3507 20.5001 10.636 20.4832 9.90183 20.4556C9.64425 20.446 9.51545 20.4411 9.29467 20.4188C6.01705 20.0868 3.22272 17.1856 3.01406 13.8978C3 13.6763 3 13.4785 3 13.0828Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M6 20.0001L5 22.0001" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M18 20.0001L19 22.0001" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M2 12.0001H22" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M3 13.0001V4.38529C3 3.068 4.06787 2.00012 5.38516 2.00012C6.36047 2.00012 7.23752 2.59391 7.59973 3.49946L8 4.38529" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M7.97894 4.44732L8.30722 5.12166L7.97894 4.44732ZM6.3622 6.1925L7.05709 6.47469L6.3622 6.1925ZM10.5771 4.37801L10.2824 5.06771L10.5771 4.37801ZM6.34567 8.74174L5.64789 9.01669C5.7223 9.20553 5.87006 9.35614 6.05744 9.43414C6.24482 9.51215 6.45581 9.51088 6.64223 9.43062L6.34567 8.74174ZM12.3064 6.17566L12.603 6.86454C12.9751 6.70435 13.1527 6.27762 13.0042 5.90071L12.3064 6.17566ZM7.04346 8.46679C6.80176 7.85339 6.78647 7.1411 7.05709 6.47469L5.66731 5.91032C5.24701 6.94533 5.26967 8.05683 5.64789 9.01669L7.04346 8.46679ZM12.0099 5.48678L6.04912 8.05286L6.64223 9.43062L12.603 6.86454L12.0099 5.48678ZM10.2824 5.06771C10.904 5.33325 11.3671 5.83759 11.6086 6.45061L13.0042 5.90071C12.6259 4.94047 11.8871 4.12207 10.8717 3.68831L10.2824 5.06771ZM7.05709 6.47469C7.31127 5.84878 7.76836 5.38398 8.30722 5.12166L7.65066 3.77297C6.78346 4.19514 6.06261 4.93689 5.66731 5.91032L7.05709 6.47469ZM8.30722 5.12166C8.91461 4.82597 9.62514 4.7869 10.2824 5.06771L10.8717 3.68831C9.79395 3.22786 8.62883 3.29679 7.65066 3.77298L8.30722 5.12166Z" fill="currentColor" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2 11.0001H1.75C1.33579 11.0001 1 11.3359 1 11.7501C1 12.1643 1.33579 12.5001 1.75 12.5001H2V12.7501L2.00008 12.7615L2.00001 12.8169L2.00001 12.8547C2 13.23 2 13.45 2.01557 13.6953C2.15751 15.9317 3.36604 17.9969 5.11758 19.3473C5.27527 19.4728 6.0307 19.9349 6.3887 20.1503C7.19042 20.556 8.0623 20.8231 8.96911 20.915C9.21355 20.9397 9.36275 20.9453 9.61687 20.9549L9.62369 20.9551C10.3639 20.9829 11.0885 21.0001 11.75 21.0001C12.4115 21.0001 13.1361 20.9829 13.8763 20.9551L13.883 20.9549C14.1372 20.9453 14.2865 20.9397 14.5309 20.915C15.4378 20.8231 16.3098 20.556 17.1116 20.1501C17.45 19.951 18.178 19.5115 18.3827 19.3471C20.1341 17.9968 21.3425 15.9316 21.4845 13.6953C21.5 13.45 21.5 13.23 21.5 12.8548L21.5 12.8169C21.5 12.7568 21.5001 12.6943 21.4963 12.6366C21.4933 12.5906 21.4886 12.5451 21.4821 12.5001H21.75C22.1642 12.5001 22.5 12.1643 22.5 11.7501C22.5 11.3359 22.1642 11.0001 21.75 11.0001H3.5H2Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M5.11758 19.3473C5.10383 19.3689 5.09106 19.3915 5.07934 19.4149L4.07934 21.4149C3.8941 21.7854 4.04427 22.2359 4.41475 22.4211C4.78524 22.6064 5.23574 22.4562 5.42098 22.0857L6.3887 20.1503C6.0307 19.9349 5.27527 19.4728 5.11758 19.3473Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M17.1113 20.1501L18.0791 22.0856C18.2643 22.4561 18.7149 22.6063 19.0853 22.421C19.4558 22.2358 19.606 21.7853 19.4207 21.4148L18.4207 19.4148C18.409 19.3913 18.3962 19.3687 18.3824 19.347C18.1778 19.5115 17.4498 19.9509 17.1113 20.1501Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M3.5 4.13529C3.5 3.23221 4.23209 2.50012 5.13516 2.50012C5.80379 2.50012 6.40505 2.9072 6.65338 3.528L6.79665 3.88619L8.15623 3.24626L8.04609 2.97092C7.56997 1.78062 6.41715 1.00012 5.13516 1.00012C3.40366 1.00012 2 2.40378 2 4.13529V11.0001H3.5V4.13529Z" fill="currentColor" /><path d="M6.7965 3.88615C6.20198 4.31936 5.71627 4.92343 5.41707 5.66021C4.99676 6.69522 5.01943 7.80672 5.39765 8.76659C5.47205 8.95542 5.61982 9.10604 5.80719 9.18404C5.99457 9.26204 6.20556 9.26077 6.39199 9.18052L12.3527 6.61444C12.7248 6.45425 12.9025 6.02752 12.754 5.65061C12.3756 4.69037 11.6368 3.87197 10.6215 3.43821C9.81017 3.0916 8.94936 3.04497 8.15607 3.24621L6.7965 3.88615Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 4.13529C3.5 3.23221 4.23209 2.50012 5.13516 2.50012C5.80379 2.50012 6.40505 2.9072 6.65338 3.528L6.79665 3.88619C6.20214 4.31941 5.71643 4.92347 5.41723 5.66026C4.99692 6.69527 5.01959 7.80677 5.3978 8.76663C5.47221 8.95547 5.61997 9.10608 5.80735 9.18409C5.99473 9.26209 6.20572 9.26082 6.39215 9.18056L12.3529 6.61448C12.725 6.45429 12.9026 6.02757 12.7541 5.65066C12.3758 4.69041 11.637 3.87201 10.6217 3.43826C9.81033 3.09165 8.94952 3.04501 8.15623 3.24626L8.04609 2.97092C7.56997 1.78062 6.41715 1.00012 5.13516 1.00012C3.40366 1.00012 2 2.40378 2 4.13529V11.0001H1.75C1.33579 11.0001 1 11.3359 1 11.7501C1 12.1643 1.33579 12.5001 1.75 12.5001H2V12.7501C2 12.7539 2.00003 12.7577 2.00008 12.7615C1.99999 12.78 2 12.7986 2.00001 12.8169L2.00001 12.8547C2 13.23 2 13.45 2.01557 13.6953C2.15751 15.9317 3.36604 17.9969 5.11758 19.3473C5.10383 19.3689 5.09106 19.3915 5.07934 19.4149L4.07934 21.4149C3.8941 21.7854 4.04427 22.2359 4.41475 22.4211C4.78524 22.6063 5.23574 22.4562 5.42098 22.0857L6.3887 20.1503C7.19042 20.556 8.0623 20.8231 8.96911 20.915C9.21355 20.9397 9.36275 20.9453 9.61687 20.9549L9.62369 20.9551C10.3639 20.9829 11.0885 21.0001 11.75 21.0001C12.4115 21.0001 13.1361 20.9829 13.8763 20.9551L13.883 20.9549C14.1372 20.9453 14.2865 20.9397 14.5309 20.915C15.4378 20.8231 16.3098 20.556 17.1116 20.1501L18.0793 22.0857C18.2646 22.4562 18.7151 22.6063 19.0856 22.4211C19.4561 22.2359 19.6062 21.7854 19.421 21.4149L18.421 19.4149C18.4092 19.3914 18.3964 19.3688 18.3827 19.3471C20.1341 17.9968 21.3425 15.9316 21.4845 13.6953C21.5 13.45 21.5 13.23 21.5 12.8548L21.5 12.8169C21.5 12.7568 21.5001 12.6943 21.4963 12.6366C21.4933 12.5906 21.4886 12.5451 21.4821 12.5001H21.75C22.1642 12.5001 22.5 12.1643 22.5 11.7501C22.5 11.3359 22.1642 11.0001 21.75 11.0001H3.5V4.13529Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBath as IconComponent).keywords = [
  "bath",
  "bathtub",
  "tub",
  "bathroom",
  "bathwater",
  "balneary",
  "hamam",
  "bathhouse",
  "wash",
  "washing"
];

export default IconBath as IconComponent;