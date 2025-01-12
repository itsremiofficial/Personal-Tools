import { FC } from 'react';

const IconGalleryDownload: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M2 12.4999L3.75159 10.9673C4.66286 10.1699 6.03628 10.2156 6.89249 11.0719L11.1822 15.3616C11.8694 16.0488 12.9512 16.1425 13.7464 15.5837L14.0446 15.3741C15.1888 14.57 16.7369 14.6631 17.7765 15.5987L21 18.4999" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M17 11V2M17 11L20 8M17 11L14 8" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M21.9998 12.6978C21.9983 14.1674 21.9871 15.4165 21.9036 16.4414C21.8067 17.6308 21.6081 18.6246 21.1636 19.45C20.9676 19.814 20.7267 20.1401 20.4334 20.4334C19.601 21.2657 18.5405 21.6428 17.1966 21.8235C15.8835 22 14.2007 22 12.0534 22H11.9466C9.79929 22 8.11646 22 6.80345 21.8235C5.45951 21.6428 4.39902 21.2657 3.56664 20.4334C2.82871 19.6954 2.44763 18.777 2.24498 17.6376C2.04591 16.5184 2.00949 15.1259 2.00192 13.3967C2 12.9569 2 12.4917 2 12.0009V11.9466C1.99999 9.79929 1.99998 8.11646 2.17651 6.80345C2.3572 5.45951 2.73426 4.39902 3.56664 3.56664C4.39902 2.73426 5.45951 2.3572 6.80345 2.17651C7.97111 2.01952 9.47346 2.00215 11.302 2.00024C11.6873 1.99983 12 2.31236 12 2.69767C12 3.08299 11.6872 3.3952 11.3019 3.39561C9.44749 3.39757 8.06751 3.41446 6.98937 3.55941C5.80016 3.7193 5.08321 4.02339 4.5533 4.5533C4.02339 5.08321 3.7193 5.80016 3.55941 6.98937C3.39683 8.19866 3.39535 9.7877 3.39535 12C3.39535 12.2702 3.39535 12.5314 3.39567 12.7844L4.32696 11.9696C5.17465 11.2278 6.45225 11.2704 7.24872 12.0668L11.2392 16.0573C11.8785 16.6966 12.8848 16.7837 13.6245 16.2639L13.9019 16.0689C14.9663 15.3209 16.4064 15.4076 17.3734 16.2779L20.0064 18.6476C20.2714 18.091 20.4288 17.3597 20.5128 16.3281C20.592 15.3561 20.6029 14.1755 20.6044 12.6979C20.6048 12.3126 20.917 12 21.3023 12C21.6876 12 22.0002 12.3125 21.9998 12.6978Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M17.5 2C15.3787 2 14.318 2 13.659 2.65901C13 3.31802 13 4.37868 13 6.5C13 8.62132 13 9.68198 13.659 10.341C14.318 11 15.3787 11 17.5 11C19.6213 11 20.682 11 21.341 10.341C22 9.68198 22 8.62132 22 6.5C22 4.37868 22 3.31802 21.341 2.65901C20.682 2 19.6213 2 17.5 2ZM19.5303 7.53033L18.0303 9.03033C17.7374 9.32322 17.2626 9.32322 16.9697 9.03033L15.4697 7.53033C15.1768 7.23744 15.1768 6.76256 15.4697 6.46967C15.7626 6.17678 16.2374 6.17678 16.5303 6.46967L16.75 6.68934V4.5C16.75 4.08579 17.0858 3.75 17.5 3.75C17.9142 3.75 18.25 4.08579 18.25 4.5V6.68934L18.4697 6.46967C18.7626 6.17678 19.2374 6.17678 19.5303 6.46967C19.8232 6.76256 19.8232 7.23744 19.5303 7.53033Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.9998 12.6978C21.9983 14.1674 21.9871 15.4165 21.9036 16.4414C21.8067 17.6308 21.6081 18.6246 21.1636 19.45C20.9676 19.814 20.7267 20.1401 20.4334 20.4334C19.601 21.2657 18.5405 21.6428 17.1966 21.8235C15.8835 22 14.2007 22 12.0534 22H11.9466C9.79929 22 8.11646 22 6.80345 21.8235C5.45951 21.6428 4.39902 21.2657 3.56664 20.4334C2.82871 19.6954 2.44763 18.777 2.24498 17.6376C2.04591 16.5184 2.00949 15.1259 2.00192 13.3967C2 12.9569 2 12.4917 2 12.0009V11.9466C1.99999 9.79929 1.99998 8.11646 2.17651 6.80345C2.3572 5.45951 2.73426 4.39902 3.56664 3.56664C4.39902 2.73426 5.45951 2.3572 6.80345 2.17651C7.97111 2.01952 9.47346 2.00215 11.302 2.00024C11.6873 1.99983 12 2.31236 12 2.69767C12 3.08299 11.6872 3.3952 11.3019 3.39561C9.44749 3.39757 8.06751 3.41446 6.98937 3.55941C5.80016 3.7193 5.08321 4.02339 4.5533 4.5533C4.02339 5.08321 3.7193 5.80016 3.55941 6.98937C3.39683 8.19866 3.39535 9.7877 3.39535 12C3.39535 12.2702 3.39535 12.5314 3.39567 12.7844L4.32696 11.9696C5.17465 11.2278 6.45225 11.2704 7.24872 12.0668L11.2392 16.0573C11.8785 16.6966 12.8848 16.7837 13.6245 16.2639L13.9019 16.0689C14.9663 15.3209 16.4064 15.4076 17.3734 16.2779L20.0064 18.6476C20.2714 18.091 20.4288 17.3597 20.5128 16.3281C20.592 15.3561 20.6029 14.1755 20.6044 12.6979C20.6048 12.3126 20.917 12 21.3023 12C21.6876 12 22.0002 12.3125 21.9998 12.6978Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M17.5 2C15.3787 2 14.318 2 13.659 2.65901C13 3.31802 13 4.37868 13 6.5C13 8.62132 13 9.68198 13.659 10.341C14.318 11 15.3787 11 17.5 11C19.6213 11 20.682 11 21.341 10.341C22 9.68198 22 8.62132 22 6.5C22 4.37868 22 3.31802 21.341 2.65901C20.682 2 19.6213 2 17.5 2ZM19.5303 7.53033L18.0303 9.03033C17.7374 9.32322 17.2626 9.32322 16.9697 9.03033L15.4697 7.53033C15.1768 7.23744 15.1768 6.76256 15.4697 6.46967C15.7626 6.17678 16.2374 6.17678 16.5303 6.46967L16.75 6.68934V4.5C16.75 4.08579 17.0858 3.75 17.5 3.75C17.9142 3.75 18.25 4.08579 18.25 4.5V6.68934L18.4697 6.46967C18.7626 6.17678 19.2374 6.17678 19.5303 6.46967C19.8232 6.76256 19.8232 7.23744 19.5303 7.53033Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconGalleryDownload as IconComponent).keywords = [
  "gallery",
  "download",
  "art gallery",
  "heading",
  "verandah",
  "veranda",
  "drift",
  "picture gallery",
  "museum",
  "beaux-arts",
  "art",
  "uploaded",
  "uploading",
  "upload",
  "downlink",
  "softcopy",
  "printable",
  "refresh",
  "transfer",
  "discovery"
];

export default IconGalleryDownload as IconComponent;