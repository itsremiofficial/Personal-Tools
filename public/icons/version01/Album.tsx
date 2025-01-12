import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconAlbum: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.90565 13.793C2.48385 10.6294 2.27294 9.04765 3.16932 8.02383C4.0657 7 5.66147 7 8.85302 7H15.1468C18.3384 7 19.9341 7 20.8305 8.02383C21.7269 9.04765 21.516 10.6294 21.0942 13.793L20.6942 16.793C20.3634 19.2739 20.198 20.5143 19.3495 21.2572C18.5011 22 17.2497 22 14.7468 22H9.25302C6.75018 22 5.49877 22 4.6503 21.2572C3.80183 20.5143 3.63644 19.2739 3.30565 16.793L2.90565 13.793Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M19.562 7C19.7906 5.69523 18.7866 4.5 17.4619 4.5H6.53812C5.21347 4.5 4.20946 5.69523 4.43809 7M17.5 4.5C17.5284 4.24092 17.5426 4.11135 17.5428 4.00435C17.5451 2.98072 16.774 2.12064 15.7562 2.01142C15.6498 2 15.5195 2 15.2589 2H8.74109C8.48044 2 8.35012 2 8.24372 2.01142C7.22594 2.12064 6.45491 2.98072 6.45713 4.00434C6.45736 4.11135 6.47155 4.2409 6.49993 4.5" stroke="currentColor" strokeWidth={width} /><circle opacity={duotone ? "0.5" : "1"} cx="16.5" cy="11.5" r="1.5" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M19.9999 20L17.1157 17.8514C16.1856 17.1586 14.8004 17.0896 13.7766 17.6851L13.5098 17.8403C12.7984 18.2542 11.8304 18.1848 11.2156 17.6758L7.37738 14.4989C6.6113 13.8648 5.38245 13.8309 4.5671 14.4214L3.24316 15.3803" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2905 11.9686C17.2905 12.7073 16.6984 13.3062 15.9679 13.3062C15.2374 13.3062 14.6453 12.7073 14.6453 11.9686C14.6453 11.23 15.2374 10.6311 15.9679 10.6311C16.6984 10.6311 17.2905 11.23 17.2905 11.9686Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M18.1316 7.40799C17.2832 7.28732 16.1897 7.28733 14.8267 7.28735H9.17326C7.81031 7.28733 6.7168 7.28732 5.86839 7.40799C4.99062 7.53283 4.25955 7.80072 3.71603 8.42851C3.17252 9.05629 3.00655 9.82451 3.00019 10.7209C2.99404 11.5872 3.13858 12.6834 3.31873 14.0496L3.68419 16.8214C3.825 17.8894 3.93897 18.7539 4.11616 19.4309C4.3006 20.1355 4.57289 20.7197 5.08383 21.172C5.59477 21.6244 6.20337 21.8201 6.91841 21.9119C7.60534 22 8.46777 22 9.53332 22H14.4667C15.5322 22 16.3947 22 17.0816 21.9119C17.7966 21.8201 18.4052 21.6244 18.9162 21.172C19.4271 20.7197 19.6994 20.1355 19.8838 19.4309C20.061 18.7539 20.175 17.8894 20.3158 16.8213L20.6813 14.0496C20.8614 12.6834 21.006 11.5872 20.9998 10.7209C20.9934 9.82451 20.8275 9.05629 20.284 8.42851C19.7404 7.80072 19.0094 7.53283 18.1316 7.40799ZM6.05259 8.73246C5.32568 8.83585 4.95802 9.02442 4.71116 9.30956C4.4643 9.59469 4.32805 9.98815 4.32278 10.7305C4.31738 11.4918 4.44802 12.4944 4.63662 13.9249L4.68663 14.3042L5.05822 14.032C6.0171 13.3297 7.43388 13.3642 8.34576 14.1275L11.7301 16.9603C12.0499 17.228 12.6011 17.2781 12.9989 17.0441L13.2341 16.9057C14.3594 16.2437 15.8676 16.3135 16.9059 17.0958L18.7378 18.4758C18.8281 17.9802 18.909 17.3709 19.0107 16.5999L19.3634 13.9249C19.552 12.4945 19.6826 11.4918 19.6772 10.7305C19.6719 9.98815 19.5357 9.59469 19.2888 9.30956C19.042 9.02442 18.6743 8.83585 17.9474 8.73246C17.2019 8.62643 16.2018 8.62487 14.7748 8.62487H9.22521C7.79821 8.62487 6.7981 8.62643 6.05259 8.73246Z" fill="currentColor" /><g opacity={duotone ? "0.7" : "1"}><path d="M6.87957 4.5C5.62801 4.5 4.60177 5.33974 4.2593 6.45377C4.25216 6.477 4.24531 6.50034 4.23877 6.5238C4.5971 6.40323 4.97003 6.32446 5.34755 6.27068C6.31989 6.13218 7.54869 6.13225 8.97612 6.13234L9.08272 6.13234L15.179 6.13234C16.6064 6.13225 17.8352 6.13218 18.8076 6.27068C19.1851 6.32446 19.558 6.40323 19.9164 6.5238C19.9098 6.50034 19.903 6.477 19.8958 6.45377C19.5534 5.33974 18.5271 4.5 17.2756 4.5H6.87957Z" fill="currentColor" /></g><g opacity={duotone ? "0.4" : "1"}><path d="M8.85899 2.00001H15.1411C15.3503 1.99995 15.5107 1.99991 15.651 2.01515C16.648 2.12351 17.4641 2.78957 17.8101 3.68676H6.18994C6.53601 2.78957 7.35208 2.12351 8.34912 2.01515C8.48935 1.99991 8.64976 1.99995 8.85899 2.00001Z" fill="currentColor" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2905 11.9687C17.2905 12.7073 16.6984 13.3062 15.9679 13.3062C15.2374 13.3062 14.6453 12.7073 14.6453 11.9687C14.6453 11.23 15.2374 10.6311 15.9679 10.6311C16.6984 10.6311 17.2905 11.23 17.2905 11.9687Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M18.1316 7.40799C17.2832 7.28732 16.1897 7.28734 14.8267 7.28736H9.17326C7.81031 7.28734 6.7168 7.28732 5.86839 7.40799C4.99062 7.53283 4.25955 7.80072 3.71603 8.42851C3.17252 9.05629 3.00655 9.82451 3.00019 10.7209C2.99404 11.5872 3.13858 12.6834 3.31873 14.0496L3.68419 16.8214C3.825 17.8895 3.93897 18.7539 4.11616 19.4309C4.3006 20.1355 4.57289 20.7197 5.08383 21.172C5.59477 21.6244 6.20337 21.8201 6.91841 21.9119C7.60534 22 8.46777 22 9.53332 22H14.4667C15.5322 22 16.3947 22 17.0816 21.9119C17.7966 21.8201 18.4052 21.6244 18.9162 21.172C19.4271 20.7197 19.6994 20.1355 19.8838 19.4309C20.061 18.7539 20.175 17.8894 20.3158 16.8213L20.6813 14.0496C20.8614 12.6834 21.006 11.5872 20.9998 10.7209C20.9934 9.82451 20.8275 9.05629 20.284 8.42851C19.7404 7.80072 19.0094 7.53283 18.1316 7.40799ZM6.05259 8.73247C5.32568 8.83586 4.95802 9.02442 4.71116 9.30956C4.4643 9.5947 4.32805 9.98816 4.32278 10.7305C4.31738 11.4918 4.44802 12.4945 4.63662 13.9249L4.68663 14.3042L5.05822 14.032C6.0171 13.3297 7.43388 13.3643 8.34576 14.1275L11.7301 16.9603C12.0499 17.228 12.6011 17.2781 12.9989 17.0441L13.2341 16.9057C14.3594 16.2437 15.8676 16.3135 16.9059 17.0958L18.7378 18.4758C18.8281 17.9802 18.909 17.3709 19.0107 16.5999L19.3634 13.9249C19.552 12.4945 19.6826 11.4918 19.6772 10.7305C19.6719 9.98816 19.5357 9.5947 19.2888 9.30956C19.042 9.02442 18.6743 8.83586 17.9474 8.73247C17.2019 8.62643 16.2018 8.62487 14.7748 8.62487H9.22521C7.79821 8.62487 6.7981 8.62643 6.05259 8.73247Z" fill="currentColor" /><path d="M8.85886 2.00001H15.141C15.3502 1.99995 15.5106 1.99991 15.6508 2.01515C16.6479 2.12351 17.4639 2.78957 17.81 3.68676H6.18981C6.53588 2.78957 7.35195 2.12351 8.34899 2.01515C8.48922 1.99991 8.64963 1.99995 8.85886 2.00001Z" fill="currentColor" /><path d="M6.87943 4.5C5.62786 4.5 4.60163 5.33974 4.25915 6.45377C4.25201 6.477 4.24517 6.50034 4.23862 6.5238C4.59696 6.40323 4.96989 6.32446 5.34741 6.27068C6.31974 6.13218 7.54855 6.13225 8.97598 6.13234L9.08258 6.13234L15.1789 6.13234C16.6063 6.13225 17.8351 6.13218 18.8074 6.27068C19.185 6.32446 19.5579 6.40323 19.9162 6.5238C19.9097 6.50034 19.9028 6.477 19.8957 6.45377C19.5532 5.33974 18.527 4.5 17.2754 4.5H6.87943Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconAlbum;