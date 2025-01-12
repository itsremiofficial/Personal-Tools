import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconSledgehammer: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.61282 4.60379C9.34868 2.86793 10.2166 2 11.2951 2C12.3737 2 13.2416 2.86793 14.9774 4.60379L19.3962 9.02256C21.1321 10.7584 22 11.6263 22 12.7049C22 13.7834 21.1321 14.6513 19.3962 16.3872C17.6604 18.123 16.7924 18.991 15.7139 18.991C14.6354 18.991 13.7675 18.123 12.0316 16.3872L7.61282 11.9684C5.87696 10.2326 5.00903 9.36462 5.00903 8.2861C5.00903 7.20757 5.87696 6.33965 7.61282 4.60379Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M11.2951 15.6509L5.77166 21.1744C5.42921 21.5168 5.25799 21.6881 5.07987 21.7909C4.5965 22.07 4.00097 22.07 3.5176 21.7909C3.33948 21.6881 3.16825 21.5168 2.82581 21.1744C2.48337 20.8319 2.31214 20.6607 2.2093 20.4826C1.93023 19.9992 1.93023 19.4037 2.2093 18.9203C2.31214 18.7422 2.48337 18.571 2.82581 18.2285L8.34928 12.7051" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M18.6597 8.28589L19.0279 7.91766C19.3704 7.57521 19.5416 7.40399 19.6445 7.22587C19.9235 6.7425 19.9235 6.14696 19.6445 5.66359C19.5416 5.48547 19.3704 5.31425 19.0279 4.97181C18.6855 4.62936 18.5143 4.45814 18.3362 4.3553C17.8528 4.07623 17.2573 4.07623 16.7739 4.3553C16.5958 4.45814 16.4245 4.62936 16.0821 4.97181L15.7139 5.34004" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.60379 4.60379C9.33965 2.86793 10.2076 2 11.2861 2C12.3646 2 13.2326 2.86793 14.9684 4.60379L19.3872 9.02256C21.123 10.7584 21.991 11.6263 21.991 12.7049C21.991 13.7834 21.123 14.6513 19.3872 16.3872C17.6513 18.123 16.7834 18.991 15.7049 18.991C14.6263 18.991 13.7584 18.123 12.0226 16.3872L7.60379 11.9684C5.86793 10.2326 5 9.36462 5 8.2861C5 7.20757 5.86793 6.33965 7.60379 4.60379Z" fill="currentColor" /><g opacity={duotone ? "0.5" : "1"}><path d="M8.34466 12.7093L2.82581 18.2281C2.48337 18.5706 2.31214 18.7418 2.2093 18.9199C1.93023 19.4033 1.93023 19.9988 2.2093 20.4822C2.31214 20.6603 2.48336 20.8315 2.82578 21.1739C3.16823 21.5164 3.33948 21.6876 3.5176 21.7905C4.00097 22.0696 4.5965 22.0696 5.07987 21.7905C5.25799 21.6876 5.42921 21.5164 5.77166 21.174L11.2905 15.6551L8.34466 12.7093Z" fill="currentColor" /><path d="M18.6551 8.29051L19.028 7.91766C19.3704 7.57521 19.5416 7.40399 19.6445 7.22587C19.9236 6.7425 19.9236 6.14696 19.6445 5.66359C19.5416 5.48547 19.3704 5.31425 19.028 4.97181C18.6855 4.62936 18.5143 4.45814 18.3362 4.3553C17.8528 4.07623 17.2573 4.07623 16.7739 4.3553C16.5958 4.45814 16.4246 4.62936 16.0821 4.97181L15.7093 5.34466L18.6551 8.29051Z" fill="currentColor" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.60379 4.60379C9.33965 2.86793 10.2076 2 11.2861 2C12.3646 2 13.2326 2.86793 14.9684 4.60379L19.3872 9.02256C21.123 10.7584 21.991 11.6263 21.991 12.7049C21.991 13.7834 21.123 14.6513 19.3872 16.3872C17.6513 18.123 16.7834 18.991 15.7049 18.991C14.6263 18.991 13.7584 18.123 12.0226 16.3872L7.60379 11.9684C5.86793 10.2326 5 9.36462 5 8.2861C5 7.20757 5.86793 6.33965 7.60379 4.60379Z" fill="currentColor" /><path d="M7.284 13.7699L2.82581 18.2281C2.48337 18.5706 2.31214 18.7418 2.2093 18.9199C1.93023 19.4033 1.93023 19.9988 2.2093 20.4822C2.31214 20.6603 2.48336 20.8315 2.82578 21.1739C3.16823 21.5164 3.33948 21.6876 3.5176 21.7905C4.00097 22.0696 4.5965 22.0696 5.07987 21.7905C5.25799 21.6876 5.42921 21.5164 5.77166 21.174L10.2298 16.7158L7.284 13.7699Z" fill="currentColor" /><path d="M8.34466 12.7093L8.34905 12.7049L11.2949 15.6507L11.2905 15.6551L8.34466 12.7093Z" fill="currentColor" /><path d="M19.6686 7.18261C19.9233 6.7073 19.9153 6.13264 19.6445 5.66359C19.5416 5.48547 19.3704 5.31425 19.028 4.97181C18.6855 4.62936 18.5143 4.45814 18.3362 4.3553C17.8671 4.0845 17.2925 4.07647 16.8172 4.33123L19.6686 7.18261Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconSledgehammer;