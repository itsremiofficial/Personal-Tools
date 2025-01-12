import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconLightbulb: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 9.5C4.5 5.35786 7.85786 2 12 2C16.1421 2 19.5 5.35786 19.5 9.5C19.5 11.7206 18.5349 13.7159 17.0012 15.0892C15.8805 16.0927 15.3201 16.5945 15.1692 16.7807C14.6824 17.3815 14.6609 17.4296 14.5381 18.193C14.5 18.4297 14.5 18.7865 14.5 19.5C14.5 20.4346 14.5 20.9019 14.299 21.25C14.1674 21.478 13.978 21.6674 13.75 21.799C13.4019 22 12.9346 22 12 22C11.0654 22 10.5981 22 10.25 21.799C10.022 21.6674 9.83261 21.478 9.70096 21.25C9.5 20.9019 9.5 20.4346 9.5 19.5C9.5 18.7865 9.5 18.4297 9.46192 18.193C9.3391 17.4296 9.31762 17.3815 8.83082 16.7807C8.67987 16.5945 8.11945 16.0927 6.99876 15.0892C5.4651 13.7159 4.5 11.7206 4.5 9.5Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M14.5 19.5H9.5" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M12 17V15M12 15C12.7403 15 13.3866 14.5978 13.7324 14M12 15C11.2597 15 10.6134 14.5978 10.2676 14" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M4 9.67442C4 5.43595 7.35786 2 11.5 2C15.6421 2 19 5.43595 19 9.67442C19 11.9468 18.034 13.9892 16.5014 15.3934C15.9906 15.8614 15.6122 16.2082 15.344 16.4598C15.2099 16.5855 15.1074 16.6838 15.0317 16.7592C14.994 16.7968 14.9651 16.8266 14.9436 16.8496C14.933 16.861 14.925 16.8699 14.9192 16.8766L14.914 16.8826L14.9108 16.8864C14.6743 17.1851 14.6231 17.2622 14.5926 17.332C14.5621 17.4018 14.5402 17.4922 14.4805 17.8717C14.457 18.0216 14.4545 18.2782 14.4545 18.9767V19.0067C14.4546 19.4158 14.4546 19.7687 14.4289 20.0583C14.4018 20.3645 14.3418 20.6677 14.1805 20.9535C14.001 21.2717 13.7428 21.5359 13.4318 21.7196C13.1525 21.8846 12.8562 21.946 12.557 21.9738C12.274 22 11.9292 22 11.5294 22H11.5293H11.4707H11.4706C11.0708 22 10.726 22 10.443 21.9738C10.1438 21.946 9.84747 21.8846 9.56818 21.7196C9.25723 21.5359 8.99902 21.2717 8.81949 20.9535C8.65825 20.6677 8.5982 20.3645 8.57107 20.0583C8.54543 19.7687 8.54544 19.4158 8.54545 19.0067L8.54545 18.9767C8.54545 18.2782 8.54305 18.0216 8.51949 17.8717C8.45982 17.4922 8.43787 17.4018 8.40739 17.332C8.3769 17.2622 8.32571 17.1851 8.0892 16.8864L8.08591 16.8825L8.0808 16.8766C8.07499 16.8699 8.06699 16.861 8.05635 16.8496C8.03486 16.8266 8.00601 16.7968 7.9683 16.7592C7.89262 16.6838 7.7901 16.5855 7.65601 16.4598C7.38782 16.2082 7.0094 15.8614 6.49859 15.3934C4.96602 13.9892 4 11.9468 4 9.67442Z" fill="currentColor" /><path d="M10.2983 13.6246C10.0908 13.266 9.63205 13.1435 9.27351 13.3509C8.91496 13.5583 8.79244 14.0171 8.99985 14.3757C9.35312 14.9864 9.93605 15.4498 10.6315 15.6465V17.0001C10.6315 17.4143 10.9673 17.7501 11.3815 17.7501C11.7957 17.7501 12.1315 17.4143 12.1315 17.0001V15.6466C12.8269 15.4498 13.4099 14.9864 13.7631 14.3757C13.9705 14.0171 13.848 13.5583 13.4895 13.3509C13.1309 13.1435 12.6721 13.266 12.4647 13.6246C12.2475 14.0002 11.8432 14.2501 11.3815 14.2501C10.9197 14.2501 10.5155 14.0002 10.2983 13.6246Z" fill="currentColor" /><path d="M9.9147 19.6745H13.0848C13.0819 19.7715 13.0774 19.8562 13.0706 19.9325C13.0521 20.1419 13.0208 20.2179 12.9993 20.2559C12.9395 20.362 12.8534 20.4501 12.7498 20.5113C12.7126 20.5333 12.6383 20.5653 12.4336 20.5843C12.2196 20.6041 11.9371 20.6048 11.4998 20.6048C11.0624 20.6048 10.7799 20.6041 10.5659 20.5843C10.3612 20.5653 10.2869 20.5333 10.2498 20.5113C10.1461 20.4501 10.06 20.362 10.0002 20.2559C9.97875 20.2179 9.94745 20.1419 9.9289 19.9325C9.92215 19.8562 9.91767 19.7715 9.9147 19.6745Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11.5 2C7.35786 2 4 5.43595 4 9.67442C4 11.9468 4.96602 13.9892 6.49859 15.3934C7.0094 15.8614 7.38782 16.2082 7.65601 16.4598C7.7901 16.5855 7.89262 16.6838 7.9683 16.7592C8.00601 16.7968 8.03486 16.8266 8.05635 16.8496C8.06699 16.861 8.07499 16.8699 8.0808 16.8766C8.08649 16.8831 8.0892 16.8864 8.0892 16.8864C8.32571 17.1851 8.3769 17.2622 8.40739 17.332C8.43787 17.4018 8.45982 17.4922 8.51949 17.8717C8.54305 18.0216 8.54545 18.2782 8.54545 18.9767L8.54545 19.0067C8.54544 19.4158 8.54543 19.7687 8.57107 20.0583C8.5982 20.3645 8.65825 20.6677 8.81949 20.9535C8.99902 21.2717 9.25723 21.5359 9.56818 21.7196C9.84747 21.8846 10.1438 21.946 10.443 21.9738C10.726 22 11.0709 22 11.4707 22H11.5293C11.9291 22 12.274 22 12.557 21.9738C12.8562 21.946 13.1525 21.8846 13.4318 21.7196C13.7428 21.5359 14.001 21.2717 14.1805 20.9535C14.3418 20.6677 14.4018 20.3645 14.4289 20.0583C14.4546 19.7687 14.4546 19.4158 14.4545 19.0067V18.9767C14.4545 18.2782 14.457 18.0216 14.4805 17.8717C14.5402 17.4922 14.5621 17.4018 14.5926 17.332C14.6231 17.2622 14.6743 17.1851 14.9108 16.8864C14.9108 16.8864 14.9118 16.8852 14.914 16.8826C14.914 16.8826 14.917 16.8791 14.9192 16.8766C14.925 16.8699 14.933 16.861 14.9436 16.8496C14.9651 16.8266 14.994 16.7968 15.0317 16.7592C15.1074 16.6838 15.2099 16.5855 15.344 16.4598C15.6122 16.2082 15.9906 15.8614 16.5014 15.3934C18.034 13.9892 19 11.9468 19 9.67442C19 5.43595 15.6421 2 11.5 2ZM13.0709 19.9323C13.0776 19.8561 13.0821 19.7714 13.0851 19.6744H9.91494C9.91791 19.7714 9.92239 19.8561 9.92914 19.9323C9.9477 20.1418 9.97899 20.2178 10.0004 20.2558C10.0603 20.3619 10.1463 20.4499 10.25 20.5112C10.2871 20.5331 10.3615 20.5651 10.5661 20.5841C10.7802 20.604 11.0626 20.6047 11.5 20.6047C11.9374 20.6047 12.2198 20.604 12.4339 20.5841C12.6385 20.5651 12.7129 20.5331 12.75 20.5112C12.8537 20.4499 12.9397 20.3619 12.9996 20.2558C13.021 20.2178 13.0523 20.1418 13.0709 19.9323Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M9.27375 13.3508C9.63229 13.1434 10.0911 13.2659 10.2985 13.6245C10.5158 14 10.92 14.25 11.3817 14.25C11.8435 14.25 12.2477 14 12.465 13.6245C12.6724 13.2659 13.1312 13.1434 13.4897 13.3508C13.8483 13.5582 13.9708 14.017 13.7634 14.3755C13.4101 14.9862 12.8271 15.4496 12.1317 15.6464V17C12.1317 17.4142 11.7959 17.75 11.3817 17.75C10.9675 17.75 10.6317 17.4142 10.6317 17V15.6464C9.93629 15.4496 9.35336 14.9862 9.00009 14.3755C8.79268 14.017 8.9152 13.5582 9.27375 13.3508Z" fill="none" /></svg> 
      )}
    </>
  );
};

export default IconLightbulb;