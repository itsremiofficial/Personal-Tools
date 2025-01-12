import { FC } from 'react';

const IconDumbbellSmall: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 9.00049L15.5 15.0005C15.5 15.4655 15.5 15.698 15.5511 15.8887C15.6898 16.4064 16.0941 16.8107 16.6118 16.9494C16.8025 17.0005 17.035 17.0005 17.5 17.0005C17.965 17.0005 18.1975 17.0005 18.3882 16.9494C18.9059 16.8107 19.3102 16.4064 19.4489 15.8887C19.5 15.698 19.5 15.4655 19.5 15.0005V9.00049C19.5 8.5355 19.5 8.30301 19.4489 8.11226C19.3102 7.59462 18.9059 7.1903 18.3882 7.0516C18.1975 7.00049 17.965 7.00049 17.5 7.00049C17.035 7.00049 16.8025 7.00049 16.6118 7.0516C16.0941 7.1903 15.6898 7.59462 15.5511 8.11226C15.5 8.30301 15.5 8.5355 15.5 9.00049Z" stroke="currentColor" strokeWidth={width} /><path d="M4.5 9.00049L4.5 15.0005C4.5 15.4655 4.5 15.698 4.55111 15.8887C4.68981 16.4064 5.09413 16.8107 5.61177 16.9494C5.80252 17.0005 6.03501 17.0005 6.5 17.0005C6.96499 17.0005 7.19748 17.0005 7.38823 16.9494C7.90587 16.8107 8.31019 16.4064 8.44889 15.8887C8.5 15.698 8.5 15.4655 8.5 15.0005V9.00049C8.5 8.5355 8.5 8.30301 8.44889 8.11226C8.31019 7.59462 7.90587 7.1903 7.38823 7.0516C7.19748 7.00049 6.96499 7.00049 6.5 7.00049C6.03501 7.00049 5.80252 7.00049 5.61177 7.0516C5.09413 7.1903 4.68981 7.59462 4.55111 8.11226C4.5 8.30301 4.5 8.5355 4.5 9.00049Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M5 10.0005H4C2.89543 10.0005 2 10.8959 2 12.0005C2 13.1051 2.89543 14.0005 4 14.0005H5M9 12.0005H15M19 14.0005H20C21.1046 14.0005 22 13.1051 22 12.0005C22 10.8959 21.1046 10.0005 20 10.0005H19" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 15.0005V9.00049C19 8.5355 19 8.30301 18.9489 8.11226C18.8102 7.59462 18.4059 7.1903 17.8882 7.0516C17.6975 7.00049 17.465 7.00049 17 7.00049C16.535 7.00049 16.3025 7.00049 16.1118 7.0516C15.5941 7.1903 15.1898 7.59462 15.0511 8.11226C15 8.30301 15 8.5355 15 9.00049V11.2505V12.7505V15.0005C15 15.4655 15 15.698 15.0511 15.8887C15.1898 16.4064 15.5941 16.8107 16.1118 16.9494C16.3025 17.0005 16.535 17.0005 17 17.0005C17.465 17.0005 17.6975 17.0005 17.8882 16.9494C18.4059 16.8107 18.8102 16.4064 18.9489 15.8887C19 15.698 19 15.4655 19 15.0005Z" fill="currentColor" /><path d="M5 9.00049V15.0005C5 15.4655 5 15.698 5.05111 15.8887C5.18981 16.4064 5.59413 16.8107 6.11177 16.9494C6.30252 17.0005 6.53501 17.0005 7 17.0005C7.46499 17.0005 7.69748 17.0005 7.88823 16.9494C8.40587 16.8107 8.81019 16.4064 8.94889 15.8887C9 15.698 9 15.4655 9 15.0005V12.7505V11.2505V9.00049C9 8.5355 9 8.30301 8.94889 8.11226C8.81019 7.59462 8.40587 7.1903 7.88823 7.0516C7.69748 7.00049 7.46499 7.00049 7 7.00049C6.53501 7.00049 6.30252 7.00049 6.11177 7.0516C5.59413 7.1903 5.18981 7.59462 5.05111 8.11226C5 8.30301 5 8.5355 5 9.00049Z" fill="currentColor" /><g opacity={duotone ? "0.5" : "1"}><path d="M15 12.7505H9V11.2505H15V12.7505Z" fill="currentColor" /></g><g opacity={duotone ? "0.5" : "1"}><path d="M3.50013 12C3.50013 11.068 4.13757 10.285 5.00024 10.063L5.00024 13.937C4.13757 13.715 3.50013 12.932 3.50013 12Z" fill="currentColor" /><path d="M20.4999 12C20.4999 12.9319 19.8625 13.715 18.9999 13.937V10.063C19.8625 10.285 20.4999 11.0681 20.4999 12Z" fill="currentColor" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12.0005C2 11.0685 2.63744 10.2855 3.50011 10.0635L3.50011 13.9375C2.63744 13.7155 2 12.9324 2 12.0005Z" fill="currentColor" /><path d="M22 12.0005C22 12.9324 21.3626 13.7155 20.4999 13.9375V10.0635C21.3626 10.2855 22 11.0685 22 12.0005Z" fill="currentColor" /><path d="M19 9.00049V15.0005C19 15.4655 19 15.698 18.9489 15.8887C18.8102 16.4064 18.4059 16.8107 17.8882 16.9494C17.6975 17.0005 17.465 17.0005 17 17.0005C16.535 17.0005 16.3025 17.0005 16.1118 16.9494C15.5941 16.8107 15.1898 16.4064 15.0511 15.8887C15 15.698 15 15.4655 15 15.0005V12.7505H9V15.0005C9 15.4655 9 15.698 8.94889 15.8887C8.81019 16.4064 8.40587 16.8107 7.88823 16.9494C7.69748 17.0005 7.46499 17.0005 7 17.0005C6.53501 17.0005 6.30252 17.0005 6.11177 16.9494C5.59413 16.8107 5.18981 16.4064 5.05111 15.8887C5 15.698 5 15.4655 5 15.0005L5 9.00049C5 8.5355 5 8.30301 5.05111 8.11226C5.18981 7.59462 5.59413 7.1903 6.11177 7.0516C6.30252 7.00049 6.53501 7.00049 7 7.00049C7.46499 7.00049 7.69748 7.00049 7.88823 7.0516C8.40587 7.1903 8.81019 7.59462 8.94889 8.11226C9 8.30301 9 8.5355 9 9.00049V11.2505H15V9.00049C15 8.5355 15 8.30301 15.0511 8.11226C15.1898 7.59462 15.5941 7.1903 16.1118 7.0516C16.3025 7.00049 16.535 7.00049 17 7.00049C17.465 7.00049 17.6975 7.00049 17.8882 7.0516C18.4059 7.1903 18.8102 7.59462 18.9489 8.11226C19 8.30301 19 8.5355 19 9.00049Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDumbbellSmall as IconComponent).keywords = [
  "dumbbell",
  "small",
  "dope",
  "boob",
  "booby",
  "dummy",
  "pinhead",
  "jerk",
  "jackass",
  "arsehole",
  "sucker",
  "undersize",
  "small-scale",
  "undersized",
  "lowercase",
  "puny",
  "lesser",
  "petty",
  "diminutive",
  "inferior"
];

export default IconDumbbellSmall as IconComponent;