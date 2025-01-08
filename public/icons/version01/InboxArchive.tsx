import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconInboxArchive: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12.0002C2 7.2862 2 4.92918 3.46447 3.46471C4.92893 2.00024 7.28595 2.00024 12 2.00024C16.714 2.00024 19.0711 2.00024 20.5355 3.46471C22 4.92918 22 7.2862 22 12.0002C22 16.7143 22 19.0713 20.5355 20.5358C19.0711 22.0002 16.714 22.0002 12 22.0002C7.28595 22.0002 4.92893 22.0002 3.46447 20.5358C2 19.0713 2 16.7143 2 12.0002Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M4 14.2502C3.58579 14.2502 3.25 14.586 3.25 15.0002C3.25 15.4145 3.58579 15.7502 4 15.7502V14.2502ZM20 15.7502C20.4142 15.7502 20.75 15.4145 20.75 15.0002C20.75 14.586 20.4142 14.2502 20 14.2502V15.7502ZM14.5987 16.4015L14.0684 15.8712H14.0684L14.5987 16.4015ZM14.8284 16.1718L14.2981 15.6415V15.6415L14.8284 16.1718ZM9.15 16.2502L8.59805 16.758H8.59805L9.15 16.2502ZM9.18546 16.2888L9.73741 15.781H9.73741L9.18546 16.2888ZM10.2809 17.2879L9.94463 17.9583H9.94463L10.2809 17.2879ZM10.4692 17.3706L10.7348 16.6692H10.7348L10.4692 17.3706ZM13.5262 17.3084L13.2057 16.6304H13.2057L13.5262 17.3084ZM13.3458 17.3832L13.5987 18.0893L13.5987 18.0893L13.3458 17.3832ZM16.0631 15.1525L15.776 14.4596H15.776L16.0631 15.1525ZM7.87676 15.148L8.15966 14.4534L8.15966 14.4534L7.87676 15.148ZM7.97471 15.191L7.65508 15.8694L7.65508 15.8694L7.97471 15.191ZM4.25 15.0002C4.25 15.4145 4.58579 15.7502 5 15.7502C5.41421 15.7502 5.75 15.4145 5.75 15.0002H4.25ZM18.25 15.0002C18.25 15.4145 18.5858 15.7502 19 15.7502C19.4142 15.7502 19.75 15.4145 19.75 15.0002H18.25ZM4 15.7502H6.30147V14.2502H4V15.7502ZM17.6569 15.7502H20V14.2502H17.6569V15.7502ZM15.1291 16.9318L15.3588 16.7021L14.2981 15.6415L14.0684 15.8712L15.1291 16.9318ZM8.59805 16.758L8.63351 16.7966L9.73741 15.781L9.70195 15.7425L8.59805 16.758ZM8.63351 16.7966C9.10743 17.3117 9.46605 17.7183 9.94463 17.9583L10.6172 16.6176C10.4413 16.5293 10.2877 16.3792 9.73741 15.781L8.63351 16.7966ZM11.9462 16.7502C11.1333 16.7502 10.9189 16.7389 10.7348 16.6692L10.2035 18.0719C10.7042 18.2616 11.2462 18.2502 11.9462 18.2502V16.7502ZM9.94463 17.9583C10.0289 18.0006 10.1153 18.0385 10.2035 18.0719L10.7348 16.6692C10.6948 16.654 10.6555 16.6368 10.6172 16.6176L9.94463 17.9583ZM14.0684 15.8712C13.5252 16.4144 13.3746 16.5506 13.2057 16.6304L13.8467 17.9865C14.3058 17.7695 14.6609 17.4 15.1291 16.9318L14.0684 15.8712ZM11.9462 18.2502C12.6083 18.2502 13.1206 18.2605 13.5987 18.0893L13.093 16.6771C12.9171 16.74 12.7143 16.7502 11.9462 16.7502V18.2502ZM13.2057 16.6304C13.1689 16.6478 13.1313 16.6633 13.093 16.6771L13.5987 18.0893C13.683 18.0591 13.7658 18.0248 13.8467 17.9865L13.2057 16.6304ZM17.6569 14.2502C16.9005 14.2502 16.3135 14.237 15.776 14.4596L16.3501 15.8454C16.5477 15.7635 16.7782 15.7502 17.6569 15.7502V14.2502ZM15.3588 16.7021C15.9801 16.0808 16.1524 15.9273 16.3501 15.8454L15.776 14.4596C15.2386 14.6822 14.8329 15.1067 14.2981 15.6415L15.3588 16.7021ZM6.30147 15.7502C7.17044 15.7502 7.39887 15.7632 7.59386 15.8426L8.15966 14.4534C7.62918 14.2373 7.04924 14.2502 6.30147 14.2502V15.7502ZM9.70195 15.7425C9.19566 15.1921 8.81252 14.7566 8.29435 14.5125L7.65508 15.8694C7.84554 15.9592 8.00971 16.1185 8.59805 16.758L9.70195 15.7425ZM7.59386 15.8426C7.6145 15.851 7.63491 15.8599 7.65508 15.8694L8.29435 14.5125C8.24999 14.4916 8.20508 14.4719 8.15966 14.4534L7.59386 15.8426ZM6.5 12.7502H17.5V11.2502H6.5V12.7502ZM17.5 12.7502C17.9142 12.7502 18.25 13.086 18.25 13.5002H19.75C19.75 12.2576 18.7426 11.2502 17.5 11.2502V12.7502ZM5.75 13.5002C5.75 13.086 6.08579 12.7502 6.5 12.7502V11.2502C5.25736 11.2502 4.25 12.2576 4.25 13.5002H5.75ZM6.5 9.75024H17.5V8.25024H6.5V9.75024ZM17.5 9.75024C17.9142 9.75024 18.25 10.086 18.25 10.5002H19.75C19.75 9.2576 18.7426 8.25024 17.5 8.25024V9.75024ZM5.75 10.5002C5.75 10.086 6.08579 9.75024 6.5 9.75024V8.25024C5.25736 8.25024 4.25 9.2576 4.25 10.5002H5.75ZM5.75 10.5002V7.50024H4.25V10.5002H5.75ZM6.5 6.75024H17.5V5.25024H6.5V6.75024ZM18.25 7.50024V10.5002H19.75V7.50024H18.25ZM17.5 6.75024C17.9142 6.75024 18.25 7.08603 18.25 7.50024H19.75C19.75 6.2576 18.7426 5.25024 17.5 5.25024V6.75024ZM5.75 7.50024C5.75 7.08603 6.08579 6.75024 6.5 6.75024V5.25024C5.25736 5.25024 4.25 6.2576 4.25 7.50024H5.75ZM5.75 15.0002V13.5002H4.25V15.0002H5.75ZM18.25 13.5002V15.0002H19.75V13.5002H18.25ZM5.75 13.5002V10.5002H4.25V13.5002H5.75ZM18.25 10.5002V13.5002H19.75V10.5002H18.25Z" fill="currentColor" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M3.46447 20.5358C4.92893 22.0002 7.28595 22.0002 12 22.0002C16.714 22.0002 19.0711 22.0002 20.5355 20.5358C22 19.0713 22 16.7143 22 12.0002C22 7.2862 22 4.92918 20.5355 3.46471C19.0711 2.00024 16.714 2.00024 12 2.00024C7.28595 2.00024 4.92893 2.00024 3.46447 3.46471C2 4.92918 2 7.2862 2 12.0002C2 16.7143 2 19.0713 3.46447 20.5358Z" fill="currentColor" /><path d="M5 8.50006V7.50024C5 6.67182 5.67157 6.00024 6.5 6.00024H17.5C18.3284 6.00024 19 6.67182 19 7.50024V8.50006C18.5822 8.18622 18.0628 8.00024 17.5 8.00024H6.5C5.9372 8.00024 5.41783 8.18622 5 8.50006Z" fill="currentColor" /><path d="M5 11.5001V10.5002C5 9.67182 5.67157 9.00024 6.5 9.00024H17.5C18.3284 9.00024 19 9.67182 19 10.5002V11.5001C18.5822 11.1862 18.0628 11.0002 17.5 11.0002H6.5C5.9372 11.0002 5.41783 11.1862 5 11.5001Z" fill="currentColor" /><path d="M20.75 15.0002C20.75 14.586 20.4142 14.2502 20 14.2502H18.9793V13.2506C18.8604 12.541 18.2434 12.0002 17.5 12.0002H6.5C5.75663 12.0002 5.13956 12.541 5.02068 13.2506V14.2502H4C3.58579 14.2502 3.25 14.586 3.25 15.0002C3.25 15.4145 3.58579 15.7502 4 15.7502H6.30147C7.17044 15.7502 7.39887 15.7632 7.59386 15.8426C7.6145 15.851 7.63492 15.8599 7.65508 15.8694C7.84554 15.9592 8.00971 16.1185 8.59805 16.758L8.63351 16.7966L8.70937 16.8791C9.14654 17.3552 9.49191 17.7312 9.94463 17.9583C10.0289 18.0006 10.1153 18.0385 10.2035 18.0719C10.6771 18.2513 11.1877 18.2509 11.834 18.2503L11.9462 18.2502L12.052 18.2503C12.6634 18.2508 13.1464 18.2512 13.5987 18.0893C13.683 18.0591 13.7658 18.0248 13.8467 17.9865C14.2811 17.7812 14.6223 17.4394 15.0543 17.0067L15.1291 16.9318L15.3588 16.7021C15.9801 16.0808 16.1524 15.9273 16.3501 15.8454C16.5477 15.7635 16.7782 15.7502 17.6569 15.7502H20C20.4142 15.7502 20.75 15.4145 20.75 15.0002Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2 12.0002C2 7.2862 2 4.92918 3.46447 3.46471C4.92893 2.00024 7.28595 2.00024 12 2.00024C16.714 2.00024 19.0711 2.00024 20.5355 3.46471C22 4.92918 22 7.2862 22 12.0002C22 16.7143 22 19.0713 20.5355 20.5358C19.0711 22.0002 16.714 22.0002 12 22.0002C7.28595 22.0002 4.92893 22.0002 3.46447 20.5358C2 19.0713 2 16.7143 2 12.0002ZM5 8.50006V7.50024C5 6.67182 5.67157 6.00024 6.5 6.00024H17.5C18.3284 6.00024 19 6.67182 19 7.50024V8.50006C18.5822 8.18622 18.0628 8.00024 17.5 8.00024H6.5C5.9372 8.00024 5.41783 8.18622 5 8.50006ZM5 10.5002V11.5001C5.41783 11.1862 5.9372 11.0002 6.5 11.0002H17.5C18.0628 11.0002 18.5822 11.1862 19 11.5001V10.5002C19 9.67182 18.3284 9.00024 17.5 9.00024H6.5C5.67157 9.00024 5 9.67182 5 10.5002ZM20 14.2504C20.4142 14.2504 20.75 14.5862 20.75 15.0004C20.75 15.4146 20.4142 15.7504 20 15.7504H17.6569C16.7782 15.7504 16.5477 15.7637 16.3501 15.8455C16.1524 15.9274 15.9801 16.081 15.3588 16.7023L15.0543 17.0069C14.6223 17.4396 14.2811 17.7814 13.8467 17.9867C13.7658 18.0249 13.683 18.0592 13.5987 18.0894C13.1464 18.2514 12.6634 18.251 12.052 18.2505L11.9462 18.2504L11.834 18.2505C11.1877 18.251 10.6771 18.2515 10.2035 18.0721C10.1153 18.0387 10.0289 18.0008 9.94463 17.9585C9.49191 17.7314 9.14654 17.3553 8.70937 16.8793L8.59805 16.7582C8.00971 16.1187 7.84554 15.9593 7.65508 15.8696C7.63492 15.8601 7.6145 15.8511 7.59386 15.8427C7.39887 15.7633 7.17044 15.7504 6.30147 15.7504H4C3.58579 15.7504 3.25 15.4146 3.25 15.0004C3.25 14.5862 3.58579 14.2504 4 14.2504L5.02051 14.2504V13.2506C5.13939 12.541 5.75646 12.0002 6.49983 12.0002H17.4998C18.2432 12.0002 18.8603 12.541 18.9791 13.2506V14.2504L20 14.2504Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconInboxArchive as IconComponentType).keywords = [
  "inbox",
  "archive",
  "mailbox",
  "letterbox",
  "email",
  "binder",
  "workbook",
  "cassette",
  "compartment",
  "rack",
  "lockbox",
  "file away",
  "archival",
  "file",
  "record-keeping",
  "registry",
  "record",
  "photo",
  "filer",
  "filename"
];

export default IconInboxArchive as IconComponentType;