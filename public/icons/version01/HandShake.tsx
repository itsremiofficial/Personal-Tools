import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconHandShake: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M8.7838 22.0001C7.0986 21.248 5.70665 20.076 4.79175 18.5071" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M14.8252 2.18607C16.5021 1.70894 18.2333 2.16317 19.4417 3.39736" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M4.0106 8.36667L3.63846 7.71551L4.0106 8.36667ZM6.50218 8.86756L7.15007 8.48974L6.50218 8.86756ZM3.2028 10.7532L2.55491 11.131H2.55491L3.2028 10.7532ZM7.69685 3.37265L8.34474 2.99484V2.99484L7.69685 3.37265ZM8.53873 4.81636L7.89085 5.19417L8.53873 4.81636ZM10.4165 9.52529C10.6252 9.88311 11.0844 10.004 11.4422 9.79537C11.8 9.58671 11.9209 9.12749 11.7123 8.76967L10.4165 9.52529ZM7.53806 12.1328C7.74672 12.4906 8.20594 12.6115 8.56376 12.4029C8.92158 12.1942 9.0425 11.735 8.83384 11.3772L7.53806 12.1328ZM4.39747 5.25829L3.74958 5.6361L4.39747 5.25829ZM11.8381 2.93072L12.486 2.55291V2.55291L11.8381 2.93072ZM14.3638 7.26184L15.0117 6.88403L14.3638 7.26184ZM16.0475 10.1493L16.4197 10.8004C16.5934 10.7012 16.7202 10.5366 16.772 10.3434C16.8238 10.1502 16.7962 9.94425 16.6954 9.77144L16.0475 10.1493ZM17.6632 5.37621L17.0153 5.75402L17.6632 5.37621ZM20.1888 9.70732L20.8367 9.32951V9.32951L20.1888 9.70732ZM6.99128 17.2499L7.63917 16.8721L6.99128 17.2499ZM16.9576 19.2534L16.5854 18.6023L16.9576 19.2534ZM13.784 15.3001C13.9927 15.6579 14.4519 15.7789 14.8097 15.5702C15.1676 15.3615 15.2885 14.9023 15.0798 14.5445L13.784 15.3001ZM4.38275 9.01783C5.01642 8.65567 5.64023 8.87829 5.85429 9.24537L7.15007 8.48974C6.4342 7.26215 4.82698 7.03625 3.63846 7.71551L4.38275 9.01783ZM3.63846 7.71551C2.44761 8.39609 1.83532 9.89702 2.55491 11.131L3.85068 10.3754C3.64035 10.0147 3.75139 9.37865 4.38275 9.01783L3.63846 7.71551ZM7.04896 3.75046L7.89085 5.19417L9.18662 4.43855L8.34474 2.99484L7.04896 3.75046ZM7.89085 5.19417L10.4165 9.52529L11.7123 8.76967L9.18662 4.43855L7.89085 5.19417ZM8.83384 11.3772L7.15007 8.48974L5.85429 9.24537L7.53806 12.1328L8.83384 11.3772ZM7.15007 8.48974L5.04535 4.88048L3.74958 5.6361L5.85429 9.24537L7.15007 8.48974ZM5.57742 3.52292C6.21109 3.16077 6.8349 3.38339 7.04896 3.75046L8.34474 2.99484C7.62887 1.76725 6.02165 1.54135 4.83313 2.22061L5.57742 3.52292ZM4.83313 2.22061C3.64228 2.90119 3.02999 4.40212 3.74958 5.6361L5.04535 4.88048C4.83502 4.51979 4.94606 3.88375 5.57742 3.52292L4.83313 2.22061ZM11.1902 3.30853L13.7159 7.63965L15.0117 6.88403L12.486 2.55291L11.1902 3.30853ZM13.7159 7.63965L15.3997 10.5271L16.6954 9.77144L15.0117 6.88403L13.7159 7.63965ZM9.71869 3.08099C10.3524 2.71884 10.9762 2.94146 11.1902 3.30853L12.486 2.55291C11.7701 1.32532 10.1629 1.09942 8.9744 1.77868L9.71869 3.08099ZM8.9744 1.77868C7.78355 2.45926 7.17126 3.96019 7.89085 5.19417L9.18662 4.43855C8.97629 4.07786 9.08733 3.44182 9.71869 3.08099L8.9744 1.77868ZM17.0153 5.75402L19.5409 10.0851L20.8367 9.32951L18.311 4.99839L17.0153 5.75402ZM15.5437 5.52648C16.1774 5.16432 16.8012 5.38694 17.0153 5.75402L18.311 4.99839C17.5952 3.7708 15.988 3.5449 14.7994 4.22416L15.5437 5.52648ZM14.7994 4.22416C13.6086 4.90474 12.9963 6.40567 13.7159 7.63965L15.0117 6.88403C14.8013 6.52334 14.9124 5.8873 15.5437 5.52648L14.7994 4.22416ZM2.55491 11.131L6.34339 17.6277L7.63917 16.8721L3.85068 10.3754L2.55491 11.131ZM16.5854 18.6023C13.2185 20.5265 9.24811 19.6311 7.63917 16.8721L6.34339 17.6277C8.45414 21.2473 13.4079 22.1459 17.3297 19.9046L16.5854 18.6023ZM19.5409 10.0851C21.1461 12.8378 19.9501 16.6793 16.5854 18.6023L17.3297 19.9046C21.2539 17.6619 22.9512 12.9555 20.8367 9.32951L19.5409 10.0851ZM15.0798 14.5445C14.4045 13.3865 14.8772 11.6819 16.4197 10.8004L15.6754 9.4981C13.5735 10.6994 12.5995 13.2688 13.784 15.3001L15.0798 14.5445Z" fill="currentColor" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11.1902 3.30852C10.9762 2.94145 10.3524 2.71883 9.7187 3.08098C9.08735 3.44181 8.9763 4.07785 9.18664 4.43854L11.7123 8.76966C11.921 9.12748 11.8 9.5867 11.4422 9.79536C11.0844 10.004 10.6252 9.8831 10.4165 9.52528L7.04897 3.75045C6.83492 3.38338 6.21111 3.16076 5.57743 3.52291C4.94608 3.88374 4.83503 4.51978 5.04537 4.88047L8.83385 11.3771C9.04251 11.735 8.92159 12.1942 8.56377 12.4028C8.20596 12.6115 7.74673 12.4906 7.53807 12.1328L5.8543 9.24536C5.64025 8.87828 5.01644 8.65566 4.38276 9.01782C3.75141 9.37864 3.64036 10.0147 3.8507 10.3754L7.63918 16.872C9.24812 19.6311 13.2185 20.5265 16.5855 18.6023C19.9501 16.6793 21.1462 12.8378 19.5409 10.0851L17.0153 5.754C16.8012 5.38693 16.1774 5.16431 15.5437 5.52647C14.9124 5.88729 14.8013 6.52333 15.0117 6.88402L16.6954 9.77143C16.7962 9.94424 16.8238 10.1502 16.772 10.3434C16.7202 10.5366 16.5934 10.7011 16.4197 10.8004C14.8772 11.6819 14.4045 13.3865 15.0798 14.5445C15.2885 14.9023 15.1676 15.3615 14.8098 15.5702C14.4519 15.7788 13.9927 15.6579 13.7841 15.3001C12.8713 13.7349 13.2401 11.8503 14.419 10.5182C14.7486 10.1458 14.8615 9.60409 14.6109 9.17451L11.1902 3.30852Z" fill="currentColor" /><g opacity={duotone ? "0.5" : "1"}><path fillRule="evenodd" clipRule="evenodd" d="M4.41382 17.8592C4.77163 17.6505 5.23086 17.7714 5.43951 18.1292C6.26638 19.5472 7.53047 20.6195 9.08935 21.3152C9.4676 21.484 9.63738 21.9275 9.46856 22.3058C9.29974 22.684 8.85625 22.8538 8.478 22.685C6.66649 21.8765 5.14669 20.6048 4.14374 18.8849C3.93508 18.527 4.056 18.0678 4.41382 17.8592Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M18.9058 3.92206C17.8919 2.88659 16.4459 2.50464 15.0304 2.90742C14.632 3.02078 14.2171 2.78971 14.1038 2.39131C13.9904 1.99291 14.2215 1.57805 14.6199 1.46468C16.5581 0.913194 18.5745 1.43972 19.9776 2.87262C20.2674 3.16858 20.2624 3.64343 19.9664 3.93322C19.6704 4.22302 19.1956 4.21802 18.9058 3.92206Z" fill="currentColor" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.41389 17.8592C4.77171 17.6505 5.23093 17.7714 5.43959 18.1293C6.26646 19.5472 7.53055 20.6195 9.08943 21.3152C9.46768 21.4841 9.63745 21.9276 9.46864 22.3058C9.29982 22.6841 8.85633 22.8538 8.47808 22.685C6.66657 21.8765 5.14677 20.6048 4.14382 18.8849C3.93516 18.5271 4.05607 18.0678 4.41389 17.8592Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M18.9059 3.92209C17.892 2.88662 16.446 2.50467 15.0305 2.90745C14.6321 3.02081 14.2172 2.78974 14.1038 2.39134C13.9905 1.99294 14.2216 1.57808 14.62 1.46472C16.5581 0.913225 18.5746 1.43975 19.9776 2.87265C20.2674 3.16861 20.2624 3.64346 19.9665 3.93325C19.6705 4.22305 19.1957 4.21805 18.9059 3.92209Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M11.1902 3.30854C10.9762 2.94146 10.3524 2.71885 9.7187 3.081C9.08735 3.44183 8.9763 4.07787 9.18664 4.43856L11.7123 8.76968C11.921 9.12749 11.8 9.58671 11.4422 9.79537C11.0844 10.004 10.6252 9.88312 10.4165 9.5253L7.04897 3.75047C6.83492 3.3834 6.21111 3.16078 5.57743 3.52293C4.94608 3.88376 4.83503 4.5198 5.04537 4.88049L8.83385 11.3772C9.04251 11.735 8.92159 12.1942 8.56377 12.4029C8.20596 12.6115 7.74673 12.4906 7.53807 12.1328L5.8543 9.24537C5.64025 8.8783 5.01644 8.65568 4.38276 9.01783C3.75141 9.37866 3.64036 10.0147 3.8507 10.3754L7.63918 16.8721C9.24812 19.6312 13.2185 20.5265 16.5855 18.6023C19.9501 16.6793 21.1462 12.8378 19.5409 10.0851L17.0153 5.75402C16.8012 5.38695 16.1774 5.16433 15.5437 5.52648C14.9124 5.88731 14.8013 6.52335 15.0117 6.88404L16.6954 9.77145C16.7962 9.94426 16.8238 10.1502 16.772 10.3434C16.7202 10.5366 16.5934 10.7012 16.4197 10.8004C14.8772 11.6819 14.4045 13.3865 15.0798 14.5445C15.2885 14.9023 15.1676 15.3615 14.8098 15.5702C14.4519 15.7789 13.9927 15.6579 13.7841 15.3001C12.8713 13.7349 13.2401 11.8503 14.419 10.5182C14.7486 10.1458 14.8615 9.60411 14.6109 9.17453L11.1902 3.30854Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHandShake as IconComponentType).keywords = [
  "hand",
  "shake",
  "manus",
  "paw",
  "hired hand",
  "mitt",
  "mauler",
  "hook",
  "reach",
  "handwriting",
  "script",
  "shake off",
  "shake up",
  "judder",
  "wag",
  "waggle",
  "didder",
  "tremble",
  "stir",
  "shiver"
];

export default IconHandShake as IconComponentType;