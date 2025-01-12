import { FC } from 'react';

const IconFolderFavouriteStar: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M11.1459 11.0226C11.5259 10.341 11.7159 10.0001 12 10.0001C12.2841 10.0001 12.4741 10.341 12.8541 11.0226L12.9524 11.199C13.0603 11.3927 13.1143 11.4896 13.1985 11.5535C13.2827 11.6174 13.3875 11.6411 13.5972 11.6885L13.7881 11.7317C14.526 11.8987 14.895 11.9822 14.9828 12.2644C15.0706 12.5467 14.819 12.8408 14.316 13.4291L14.1858 13.5813C14.0429 13.7485 13.9714 13.832 13.9392 13.9354C13.9071 14.0388 13.9179 14.1504 13.9395 14.3734L13.9592 14.5764C14.0352 15.3613 14.0733 15.7537 13.8435 15.9282C13.6136 16.1026 13.2682 15.9436 12.5773 15.6255L12.3986 15.5432C12.2022 15.4528 12.1041 15.4076 12 15.4076C11.8959 15.4076 11.7978 15.4528 11.6014 15.5432L11.4227 15.6255C10.7318 15.9436 10.3864 16.1026 10.1565 15.9282C9.92674 15.7537 9.96476 15.3613 10.0408 14.5764L10.0605 14.3734C10.0821 14.1504 10.0929 14.0388 10.0608 13.9354C10.0286 13.832 9.95713 13.7485 9.81418 13.5813L9.68403 13.4291C9.18097 12.8408 8.92945 12.5467 9.01723 12.2644C9.10501 11.9822 9.47396 11.8987 10.2119 11.7317L10.4028 11.6885C10.6125 11.6411 10.7173 11.6174 10.8015 11.5535C10.8857 11.4896 10.9397 11.3927 11.0476 11.199L11.1459 11.0226Z" stroke="currentColor" strokeWidth={width} /><path d="M2 6.94987C2 6.06734 2 5.62607 2.06935 5.25851C2.37464 3.64043 3.64031 2.37476 5.25839 2.06947C5.62595 2.00012 6.06722 2.00012 6.94975 2.00012C7.33642 2.00012 7.52976 2.00012 7.71557 2.0175C8.51665 2.09241 9.27652 2.40716 9.89594 2.92064C10.0396 3.03974 10.1763 3.17645 10.4497 3.44987L11 4.00012C11.8158 4.8159 12.2237 5.22379 12.7121 5.49555C12.9804 5.64483 13.2651 5.76273 13.5604 5.8469C14.0979 6.00012 14.6747 6.00012 15.8284 6.00012H16.2021C18.8345 6.00012 20.1506 6.00012 21.0062 6.76959C21.0849 6.84037 21.1598 6.91526 21.2305 6.99395C22 7.84947 22 9.16566 22 11.798V14.0001C22 17.7714 22 19.657 20.8284 20.8285C19.6569 22.0001 17.7712 22.0001 14 22.0001H10C6.22876 22.0001 4.34315 22.0001 3.17157 20.8285C2 19.657 2 17.7714 2 14.0001V6.94987Z" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M22 14.0001V11.798C22 9.16566 22 7.84947 21.2305 6.99395C21.1598 6.91526 21.0849 6.84037 21.0062 6.76959C20.1506 6.00012 18.8345 6.00012 16.2021 6.00012H15.8284C14.6747 6.00012 14.0979 6.00012 13.5604 5.8469C13.2651 5.76273 12.9804 5.64483 12.7121 5.49555C12.2237 5.22379 11.8158 4.8159 11 4.00012L10.4497 3.44987C10.1763 3.17645 10.0396 3.03974 9.89594 2.92064C9.27652 2.40716 8.51665 2.09241 7.71557 2.0175C7.52976 2.00012 7.33642 2.00012 6.94975 2.00012C6.06722 2.00012 5.62595 2.00012 5.25839 2.06947C3.64031 2.37476 2.37464 3.64043 2.06935 5.25851C2 5.62607 2 6.06734 2 6.94987V14.0001C2 17.7714 2 19.657 3.17157 20.8285C4.34315 22.0001 6.22876 22.0001 10 22.0001H14C17.7712 22.0001 19.6569 22.0001 20.8284 20.8285C22 19.657 22 17.7714 22 14.0001Z" fill="currentColor" /><path d="M12.9524 11.199L12.8541 11.0226C12.4741 10.341 12.2841 10.0001 12 10.0001C11.7159 10.0001 11.5259 10.341 11.1459 11.0226L11.0476 11.199L11.0476 11.199C10.9397 11.3927 10.8857 11.4896 10.8015 11.5535C10.7173 11.6174 10.6125 11.6411 10.4028 11.6885L10.2119 11.7317C9.47396 11.8987 9.10501 11.9822 9.01723 12.2644C8.92945 12.5467 9.18097 12.8408 9.68403 13.4291L9.81418 13.5813C9.95713 13.7485 10.0286 13.832 10.0608 13.9354C10.0929 14.0388 10.0821 14.1504 10.0605 14.3734L10.0408 14.5764C9.96476 15.3613 9.92674 15.7537 10.1565 15.9282C10.3864 16.1026 10.7318 15.9436 11.4227 15.6255L11.6014 15.5432C11.7978 15.4528 11.8959 15.4076 12 15.4076C12.1041 15.4076 12.2022 15.4528 12.3986 15.5432L12.5773 15.6255L12.5773 15.6255C13.2682 15.9436 13.6136 16.1026 13.8435 15.9282C14.0733 15.7537 14.0352 15.3613 13.9592 14.5764L13.9395 14.3734C13.9179 14.1504 13.9071 14.0388 13.9392 13.9354C13.9714 13.832 14.0429 13.7485 14.1858 13.5813L14.316 13.4291C14.819 12.8408 15.0706 12.5467 14.9828 12.2644C14.895 11.9822 14.526 11.8987 13.7881 11.7317L13.5972 11.6885C13.3875 11.6411 13.2827 11.6174 13.1985 11.5535C13.1143 11.4896 13.0603 11.3927 12.9524 11.199L12.9524 11.199Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2.06935 5.25851C2 5.62607 2 6.06734 2 6.94987V14.0001C2 17.7714 2 19.657 3.17157 20.8285C4.34315 22.0001 6.22876 22.0001 10 22.0001H14C17.7712 22.0001 19.6569 22.0001 20.8284 20.8285C22 19.657 22 17.7714 22 14.0001V11.798C22 9.16566 22 7.84947 21.2305 6.99395C21.1598 6.91526 21.0849 6.84037 21.0062 6.76959C20.1506 6.00012 18.8345 6.00012 16.2021 6.00012H15.8284C14.6747 6.00012 14.0979 6.00012 13.5604 5.8469C13.2651 5.76273 12.9804 5.64483 12.7121 5.49555C12.2237 5.22379 11.8158 4.8159 11 4.00012L10.4497 3.44987C10.1763 3.17645 10.0396 3.03974 9.89594 2.92064C9.27652 2.40716 8.51665 2.09241 7.71557 2.0175C7.52976 2.00012 7.33642 2.00012 6.94975 2.00012C6.06722 2.00012 5.62595 2.00012 5.25839 2.06947C3.64031 2.37476 2.37464 3.64043 2.06935 5.25851ZM12.9524 11.199L12.8541 11.0226C12.4741 10.341 12.2841 10.0001 12 10.0001C11.7159 10.0001 11.5259 10.341 11.1459 11.0226L11.0476 11.199C10.9397 11.3927 10.8857 11.4896 10.8015 11.5535C10.7173 11.6174 10.6125 11.6411 10.4028 11.6885L10.2119 11.7317C9.47396 11.8987 9.10501 11.9822 9.01723 12.2644C8.92945 12.5467 9.18097 12.8408 9.68403 13.4291L9.81418 13.5813C9.95713 13.7485 10.0286 13.832 10.0608 13.9354C10.0929 14.0388 10.0821 14.1504 10.0605 14.3734L10.0408 14.5764C9.96476 15.3613 9.92674 15.7537 10.1565 15.9282C10.3864 16.1026 10.7318 15.9436 11.4227 15.6255L11.6014 15.5432C11.7978 15.4528 11.8959 15.4076 12 15.4076C12.1041 15.4076 12.2022 15.4528 12.3986 15.5432L12.5773 15.6255C13.2682 15.9436 13.6136 16.1026 13.8435 15.9282C14.0733 15.7537 14.0352 15.3613 13.9592 14.5764L13.9395 14.3734C13.9179 14.1504 13.9071 14.0388 13.9392 13.9354C13.9714 13.832 14.0429 13.7485 14.1858 13.5813L14.316 13.4291C14.819 12.8408 15.0706 12.5467 14.9828 12.2644C14.895 11.9822 14.526 11.8987 13.7881 11.7317L13.5972 11.6885C13.3875 11.6411 13.2827 11.6174 13.1985 11.5535C13.1143 11.4896 13.0603 11.3927 12.9524 11.199Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFolderFavouriteStar as IconComponent).keywords = [
  "folder",
  "favourite",
  "star",
  "booklet",
  "pamphlet",
  "brochure",
  "leaflet",
  "toolkit",
  "pack",
  "package",
  "kit",
  "shirt",
  "preferred",
  "favored",
  "favorite",
  "popular",
  "loved",
  "deary",
  "darling",
  "dearie",
  "front-runner",
  "stellar",
  "asterisk",
  "lead",
  "leading",
  "maven",
  "sensation",
  "principal",
  "whizz",
  "headliner"
];

export default IconFolderFavouriteStar as IconComponent;