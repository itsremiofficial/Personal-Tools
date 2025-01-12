import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconLightbulbBolt: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 9.5C4.5 5.35786 7.85786 2 12 2C16.1421 2 19.5 5.35786 19.5 9.5C19.5 11.7206 18.5349 13.7159 17.0012 15.0892C15.8805 16.0927 15.3201 16.5945 15.1692 16.7807C14.6824 17.3815 14.6609 17.4296 14.5381 18.193C14.5 18.4297 14.5 18.7865 14.5 19.5C14.5 20.4346 14.5 20.9019 14.299 21.25C14.1674 21.478 13.978 21.6674 13.75 21.799C13.4019 22 12.9346 22 12 22C11.0654 22 10.5981 22 10.25 21.799C10.022 21.6674 9.83261 21.478 9.70096 21.25C9.5 20.9019 9.5 20.4346 9.5 19.5C9.5 18.7865 9.5 18.4297 9.46192 18.193C9.3391 17.4296 9.31762 17.3815 8.83082 16.7807C8.67987 16.5945 8.11945 16.0927 6.99876 15.0892C5.4651 13.7159 4.5 11.7206 4.5 9.5Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M14.5 19.5H9.5" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M12.7856 8.5L10.6427 11.5H13.6427L11.4999 14.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M4 9.67442C4 5.43595 7.35786 2 11.5 2C15.6421 2 19 5.43595 19 9.67442C19 11.9468 18.034 13.9892 16.5014 15.3934C15.9906 15.8614 15.6122 16.2082 15.344 16.4598C15.2099 16.5855 15.1074 16.6838 15.0317 16.7592C14.994 16.7968 14.9651 16.8266 14.9436 16.8496C14.933 16.861 14.925 16.8699 14.9192 16.8766C14.9133 16.8834 14.9108 16.8864 14.9108 16.8864C14.6743 17.1851 14.6231 17.2622 14.5926 17.332C14.5621 17.4018 14.5402 17.4922 14.4805 17.8717C14.457 18.0216 14.4545 18.2782 14.4545 18.9767V19.0067C14.4546 19.4158 14.4546 19.7687 14.4289 20.0583C14.4018 20.3645 14.3418 20.6677 14.1805 20.9535C14.001 21.2717 13.7428 21.5359 13.4318 21.7196C13.1525 21.8846 12.8562 21.946 12.557 21.9738C12.274 22 11.9292 22 11.5294 22H11.5293H11.4707H11.4706C11.0708 22 10.726 22 10.443 21.9738C10.1438 21.946 9.84747 21.8846 9.56818 21.7196C9.25723 21.5359 8.99902 21.2717 8.81949 20.9535C8.65825 20.6677 8.5982 20.3645 8.57107 20.0583C8.54543 19.7687 8.54544 19.4158 8.54545 19.0067L8.54545 18.9767C8.54545 18.2782 8.54305 18.0216 8.51949 17.8717C8.45982 17.4922 8.43787 17.4018 8.40739 17.332C8.3769 17.2622 8.32571 17.1851 8.0892 16.8864C8.0892 16.8864 8.08649 16.8831 8.0808 16.8766C8.07499 16.8699 8.06699 16.861 8.05635 16.8496C8.03486 16.8266 8.00601 16.7968 7.9683 16.7592C7.89262 16.6838 7.7901 16.5855 7.65601 16.4598C7.38782 16.2082 7.0094 15.8614 6.49859 15.3934C4.96602 13.9892 4 11.9468 4 9.67442Z" fill="currentColor" /><path d="M13.0852 19.6748H9.91512C9.91809 19.7718 9.92257 19.8565 9.92933 19.9327C9.94788 20.1422 9.97917 20.2182 10.0006 20.2562C10.0605 20.3623 10.1465 20.4504 10.2502 20.5116C10.2873 20.5335 10.3616 20.5656 10.5663 20.5845C10.7804 20.6044 11.0628 20.6051 11.5002 20.6051C11.9376 20.6051 12.22 20.6044 12.4341 20.5845C12.6387 20.5656 12.713 20.5335 12.7502 20.5116C12.8538 20.4504 12.9399 20.3623 12.9997 20.2562C13.0212 20.2182 13.0525 20.1422 13.071 19.9327C13.0778 19.8565 13.0823 19.7718 13.0852 19.6748Z" fill="currentColor" /><path d="M12.6106 8.17688C12.9171 8.40084 12.988 8.83658 12.7692 9.15012L11.5912 10.8376H12.9936C13.249 10.8376 13.483 10.9837 13.5998 11.2161C13.7167 11.4484 13.6968 11.7282 13.5484 11.9408L11.6003 14.7315C11.3815 15.0451 10.9556 15.1177 10.6492 14.8937C10.3428 14.6698 10.2718 14.234 10.4907 13.9205L11.6687 12.233H10.2663C10.0109 12.233 9.77691 12.0869 9.66004 11.8545C9.54318 11.6222 9.56303 11.3424 9.71148 11.1298L11.6595 8.33909C11.8784 8.02555 12.3042 7.95292 12.6106 8.17688Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11.5 2C7.35786 2 4 5.43595 4 9.67442C4 11.9468 4.96602 13.9892 6.49859 15.3934C7.0094 15.8614 7.38782 16.2082 7.65601 16.4598C7.7901 16.5855 7.89262 16.6838 7.9683 16.7592C8.00601 16.7968 8.03486 16.8266 8.05635 16.8496C8.06699 16.861 8.07499 16.8699 8.0808 16.8766C8.08649 16.8831 8.0892 16.8864 8.0892 16.8864C8.32571 17.1851 8.3769 17.2622 8.40739 17.332C8.43787 17.4018 8.45982 17.4922 8.51949 17.8717C8.54305 18.0216 8.54545 18.2782 8.54545 18.9767L8.54545 19.0067C8.54544 19.4158 8.54543 19.7687 8.57107 20.0583C8.5982 20.3645 8.65825 20.6677 8.81949 20.9535C8.99902 21.2717 9.25723 21.5359 9.56818 21.7196C9.84747 21.8846 10.1438 21.946 10.443 21.9738C10.726 22 11.0709 22 11.4707 22H11.5293C11.9291 22 12.274 22 12.557 21.9738C12.8562 21.946 13.1525 21.8846 13.4318 21.7196C13.7428 21.5359 14.001 21.2717 14.1805 20.9535C14.3418 20.6677 14.4018 20.3645 14.4289 20.0583C14.4546 19.7687 14.4546 19.4158 14.4545 19.0067V18.9767C14.4545 18.2782 14.457 18.0216 14.4805 17.8717C14.5402 17.4922 14.5621 17.4018 14.5926 17.332C14.6231 17.2622 14.6743 17.1851 14.9108 16.8864C14.9108 16.8864 14.9133 16.8834 14.9192 16.8766C14.925 16.8699 14.933 16.861 14.9436 16.8496C14.9651 16.8266 14.994 16.7968 15.0317 16.7592C15.1074 16.6838 15.2099 16.5855 15.344 16.4598C15.6122 16.2082 15.9906 15.8614 16.5014 15.3934C18.034 13.9892 19 11.9468 19 9.67442C19 5.43595 15.6421 2 11.5 2ZM13.0851 19.6744H9.91494C9.91791 19.7714 9.92239 19.8561 9.92914 19.9323C9.94769 20.1418 9.97899 20.2178 10.0004 20.2558C10.0603 20.3619 10.1463 20.4499 10.25 20.5112C10.2871 20.5331 10.3615 20.5651 10.5661 20.5841C10.7802 20.604 11.0626 20.6047 11.5 20.6047C11.9374 20.6047 12.2198 20.604 12.4339 20.5841C12.6385 20.5651 12.7129 20.5331 12.75 20.5112C12.8537 20.4499 12.9397 20.3619 12.9996 20.2558C13.021 20.2178 13.0523 20.1418 13.0709 19.9323C13.0776 19.8561 13.0821 19.7714 13.0851 19.6744ZM12.6105 8.17647C12.9169 8.40042 12.9879 8.83616 12.769 9.1497L11.591 10.8372H12.9934C13.2488 10.8372 13.4828 10.9833 13.5996 11.2156C13.7165 11.448 13.6966 11.7277 13.5482 11.9404L11.6001 14.7311C11.3813 15.0446 10.9555 15.1173 10.649 14.8933C10.3426 14.6693 10.2716 14.2336 10.4905 13.9201L11.6685 12.2326H10.2661C10.0107 12.2326 9.77673 12.0865 9.65986 11.8541C9.54299 11.6218 9.56284 11.342 9.71129 11.1294L11.6593 8.33867C11.8782 8.02513 12.304 7.95251 12.6105 8.17647Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconLightbulbBolt;