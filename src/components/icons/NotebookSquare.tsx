import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconNotebookSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_1_9074)"><path d="M16.5568 6.02219L16.52 5.27309L16.5568 6.02219ZM14.7 6.27128L14.4997 5.54853V5.54853L14.7 6.27128ZM12.5219 7.2709L12.1463 6.62174V6.62174L12.5219 7.2709ZM7.48717 6.0614L7.4324 6.80939L7.48717 6.0614ZM9 6.27128L8.82199 6.99984L9 6.27128ZM11.4646 7.29367L11.116 7.95774L11.4646 7.29367ZM12.5074 15.7228L12.857 16.3863L12.5074 15.7228ZM15 14.6857L14.822 13.9571L15 14.6857ZM16.4901 14.4775L16.5459 15.2254H16.5459L16.4901 14.4775ZM11.4926 15.7228L11.143 16.3863L11.4926 15.7228ZM9 14.6857L9.17801 13.9571L9 14.6857ZM7.50991 14.4775L7.45414 15.2254H7.45414L7.50991 14.4775ZM6.75 12.9113V7.49698H5.25V12.9113H6.75ZM18.75 12.9113V7.45203H17.25V12.9113H18.75ZM16.52 5.27309C15.8904 5.30401 15.1227 5.37583 14.4997 5.54853L14.9003 6.99402C15.3582 6.86712 15.9907 6.8009 16.5935 6.77129L16.52 5.27309ZM14.4997 5.54853C13.6675 5.77921 12.7018 6.30033 12.1463 6.62174L12.8975 7.92007C13.4487 7.60119 14.2696 7.16887 14.9003 6.99402L14.4997 5.54853ZM7.4324 6.80939C7.9319 6.84597 8.43898 6.90626 8.82199 6.99984L9.17801 5.54271C8.67286 5.41928 8.06744 5.35188 7.54194 5.3134L7.4324 6.80939ZM8.82199 6.99984C9.54804 7.17724 10.5035 7.63622 11.116 7.95774L11.8132 6.62959C11.1985 6.30695 10.0998 5.76792 9.17801 5.54271L8.82199 6.99984ZM12.857 16.3863C13.4666 16.0652 14.4402 15.5945 15.178 15.4142L14.822 13.9571C13.8867 14.1856 12.7683 14.7376 12.1578 15.0592L12.857 16.3863ZM15.178 15.4142C15.5551 15.3221 16.0529 15.2622 16.5459 15.2254L16.4343 13.7296C15.9149 13.7683 15.3199 13.8354 14.822 13.9571L15.178 15.4142ZM11.8422 15.0592C11.2317 14.7376 10.1133 14.1856 9.17801 13.9571L8.82199 15.4142C9.55979 15.5945 10.5334 16.0652 11.143 16.3863L11.8422 15.0592ZM9.17801 13.9571C8.68009 13.8354 8.08508 13.7683 7.56568 13.7296L7.45414 15.2254C7.94707 15.2622 8.44487 15.3221 8.82199 15.4142L9.17801 13.9571ZM17.25 12.9113C17.25 13.3162 16.9097 13.6941 16.4343 13.7296L16.5459 15.2254C17.7316 15.137 18.75 14.1721 18.75 12.9113H17.25ZM18.75 7.45203C18.75 6.25744 17.7923 5.2106 16.52 5.27309L16.5935 6.77129C16.9314 6.75469 17.25 7.0344 17.25 7.45203H18.75ZM5.25 12.9113C5.25 14.1721 6.26836 15.137 7.45414 15.2254L7.56568 13.7296C7.09031 13.6941 6.75 13.3162 6.75 12.9113H5.25ZM12.1578 15.0592C12.0598 15.1109 11.9402 15.1109 11.8422 15.0592L11.143 16.3863C11.6786 16.6685 12.3214 16.6685 12.857 16.3863L12.1578 15.0592ZM12.1463 6.62174C12.0434 6.68126 11.9157 6.68339 11.8132 6.62959L11.116 7.95774C11.6772 8.25229 12.3517 8.2359 12.8975 7.92007L12.1463 6.62174ZM6.75 7.49698C6.75 7.07023 7.08277 6.78379 7.4324 6.80939L7.54194 5.3134C6.248 5.21865 5.25 6.27576 5.25 7.49698H6.75Z" fill="currentColor" /><path d="M12 7.58594V16.0003" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M2 9.00049C2 5.22925 2 3.34363 3.17157 2.17206C4.34315 1.00049 6.22876 1.00049 10 1.00049H14C17.7712 1.00049 19.6569 1.00049 20.8284 2.17206C22 3.34363 22 5.22925 22 9.00049V13.0005C22 16.7717 22 18.6573 20.8284 19.8289C19.6569 21.0005 17.7712 21.0005 14 21.0005H10C6.22876 21.0005 4.34315 21.0005 3.17157 19.8289C2 18.6573 2 16.7717 2 13.0005V9.00049Z" stroke="currentColor" strokeWidth={width} /></g><defs><clipPath ><rect width="24" height="24" fill="none" transform="translate(0 0.000488281)" /></clipPath></defs></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M2 9.00049C2 5.22925 2 3.34363 3.17157 2.17206C4.34315 1.00049 6.22876 1.00049 10 1.00049H14C17.7712 1.00049 19.6569 1.00049 20.8284 2.17206C22 3.34363 22 5.22925 22 9.00049V13.0005C22 16.7717 22 18.6573 20.8284 19.8289C19.6569 21.0005 17.7712 21.0005 14 21.0005H10C6.22876 21.0005 4.34315 21.0005 3.17157 19.8289C2 18.6573 2 16.7717 2 13.0005V9.00049Z" fill="currentColor" /><path d="M6 12.9113V7.49698C6 6.673 6.66539 6.00122 7.48717 6.0614C7.99967 6.09892 8.55592 6.16277 9 6.27128C9.8239 6.47258 10.851 6.97159 11.4646 7.29367C11.4763 7.29982 11.4881 7.30574 11.5 7.31143V15.7267C11.4975 15.7254 11.495 15.7241 11.4926 15.7228C10.8826 15.4014 9.83655 14.8901 9 14.6857C8.56248 14.5788 8.01608 14.5152 7.50991 14.4775C6.67934 14.4155 6 13.7442 6 12.9113Z" fill="currentColor" /><path d="M12.5 15.7267C12.5025 15.7254 12.505 15.7241 12.5074 15.7228C13.1174 15.4014 14.1634 14.8901 15 14.6857C15.4375 14.5788 15.9839 14.5152 16.4901 14.4775C17.3207 14.4155 18 13.7442 18 12.9113V7.45203C18 6.64592 17.3619 5.98265 16.5568 6.02219C15.9405 6.05245 15.2404 6.12147 14.7 6.27128C13.9685 6.47404 13.0752 6.95076 12.5219 7.2709C12.5147 7.27511 12.5073 7.27923 12.5 7.28326V15.7267Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.17157 2.17206C2 3.34363 2 5.22925 2 9.00049V13.0005C2 16.7717 2 18.6573 3.17157 19.8289C4.34315 21.0005 6.22876 21.0005 10 21.0005H14C17.7712 21.0005 19.6569 21.0005 20.8284 19.8289C22 18.6573 22 16.7717 22 13.0005V9.00049C22 5.22925 22 3.34363 20.8284 2.17206C19.6569 1.00049 17.7712 1.00049 14 1.00049H10C6.22876 1.00049 4.34315 1.00049 3.17157 2.17206ZM12.5074 15.7228L12.5 15.7267V7.28326L12.5219 7.2709C13.0752 6.95076 13.9685 6.47404 14.7 6.27128C15.2404 6.12147 15.9405 6.05245 16.5568 6.02219C17.3619 5.98265 18 6.64592 18 7.45203V12.9113C18 13.7442 17.3207 14.4155 16.4901 14.4775C15.9839 14.5152 15.4375 14.5788 15 14.6857C14.1634 14.8901 13.1174 15.4014 12.5074 15.7228ZM6 7.49698V12.9113C6 13.7442 6.67934 14.4155 7.50991 14.4775C8.01608 14.5152 8.56248 14.5788 9 14.6857C9.83655 14.8901 10.8826 15.4014 11.4926 15.7228L11.5 15.7267V7.31143C11.4881 7.30574 11.4763 7.29982 11.4646 7.29367C10.851 6.97159 9.8239 6.47258 9 6.27128C8.55592 6.16277 7.99967 6.09892 7.48717 6.0614C6.66539 6.00122 6 6.673 6 7.49698Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconNotebookSquare as IconComponentType).keywords = [
  "notebook",
  "square",
  "notebook computer",
  "scrapbook",
  "booklet",
  "binder",
  "book",
  "notepad",
  "journal",
  "diary",
  "scratchpad",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest"
];

export default IconNotebookSquare as IconComponentType;