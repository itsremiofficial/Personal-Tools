import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconPhoneCallingRounded: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 2.00012C14 2.00012 16.2 2.20012 19 5.00012C21.8 7.80012 22 10.0001 22 10.0001" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M14.207 5.53577C14.207 5.53577 15.197 5.81861 16.6819 7.30353C18.1668 8.78846 18.4497 9.77841 18.4497 9.77841" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M10.0376 5.31629L10.6866 6.47922C11.2723 7.5287 11.0372 8.90544 10.1147 9.82792C10.1147 9.82792 10.1147 9.82792 10.1147 9.82793C10.1146 9.82804 8.99588 10.947 11.0245 12.9756C13.0525 15.0036 14.1714 13.8862 14.1722 13.8854C14.1722 13.8854 14.1722 13.8854 14.1722 13.8854C15.0947 12.9629 16.4714 12.7278 17.5209 13.3135L18.6838 13.9625C20.2686 14.8469 20.4557 17.0694 19.0628 18.4623C18.2258 19.2993 17.2004 19.9506 16.0669 19.9936C14.1588 20.0659 10.9183 19.583 7.6677 16.3324C4.41713 13.0818 3.93421 9.84135 4.00655 7.93321C4.04952 6.79972 4.7008 5.77436 5.53781 4.93735C6.93076 3.5444 9.15317 3.73156 10.0376 5.31629Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M10.0376 5.31629L10.6866 6.47922C11.2723 7.5287 11.0372 8.90544 10.1147 9.82792C10.1147 9.82792 10.1147 9.82792 10.1147 9.82793C10.1146 9.82804 8.99588 10.947 11.0245 12.9756C13.0525 15.0036 14.1714 13.8862 14.1722 13.8854C14.1722 13.8854 14.1722 13.8854 14.1722 13.8854C15.0947 12.9629 16.4714 12.7278 17.5209 13.3135L18.6838 13.9625C20.2686 14.8469 20.4557 17.0694 19.0628 18.4623C18.2258 19.2993 17.2004 19.9506 16.0669 19.9936C14.1588 20.0659 10.9183 19.583 7.6677 16.3324C4.41713 13.0818 3.93421 9.84135 4.00655 7.93321C4.04952 6.79972 4.7008 5.77436 5.53781 4.93735C6.93076 3.5444 9.15317 3.73156 10.0376 5.31629Z" fill="currentColor" /><path d="M13.2595 1.8802C13.3257 1.47131 13.7122 1.19393 14.1211 1.26013C14.1464 1.26498 14.2279 1.2802 14.2705 1.2897C14.3559 1.3087 14.4749 1.33796 14.6233 1.38119C14.9201 1.46763 15.3347 1.61003 15.8323 1.83817C16.8286 2.29492 18.1544 3.09393 19.5302 4.46973C20.906 5.84553 21.705 7.17134 22.1617 8.16762C22.3899 8.66524 22.5323 9.07984 22.6187 9.37662C22.6619 9.52502 22.6912 9.64405 22.7102 9.72938C22.7197 9.77205 22.7267 9.80631 22.7315 9.83162L22.7373 9.86281C22.8034 10.2717 22.5286 10.6742 22.1197 10.7404C21.712 10.8064 21.3279 10.5304 21.2601 10.1234C21.258 10.1125 21.2522 10.0831 21.2461 10.0555C21.2337 10.0001 21.2124 9.91224 21.1786 9.79609C21.1109 9.56376 20.9934 9.21842 20.7982 8.79274C20.4084 7.94244 19.7074 6.76825 18.4695 5.53039C17.2317 4.29253 16.0575 3.59153 15.2072 3.2017C14.7815 3.00655 14.4362 2.88901 14.2038 2.82134C14.0877 2.78751 13.9417 2.754 13.8863 2.74166C13.4793 2.67384 13.1935 2.28792 13.2595 1.8802Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M13.4857 5.32966C13.5995 4.93139 14.0146 4.70077 14.4129 4.81456L14.2069 5.5357C14.4129 4.81456 14.4129 4.81456 14.4129 4.81456L14.4144 4.81497L14.4159 4.81542L14.4192 4.81639L14.427 4.8187L14.4468 4.82487C14.4618 4.82969 14.4807 4.83597 14.5031 4.84394C14.548 4.85987 14.6074 4.88254 14.6802 4.91374C14.8259 4.97618 15.0249 5.0726 15.2695 5.21731C15.7589 5.50699 16.4271 5.98817 17.2121 6.77314C17.9971 7.55811 18.4782 8.2263 18.7679 8.71576C18.9126 8.96027 19.009 9.15934 19.0715 9.30502C19.1027 9.37783 19.1254 9.43719 19.1413 9.4821C19.1493 9.50455 19.1555 9.52338 19.1604 9.53846L19.1665 9.55824L19.1688 9.566L19.1698 9.56933L19.1702 9.57086C19.1702 9.57086 19.1707 9.5723 18.4495 9.77834L19.1707 9.5723C19.2845 9.97058 19.0538 10.3857 18.6556 10.4995C18.2607 10.6123 17.8492 10.3866 17.7313 9.99449L17.7276 9.98371C17.7223 9.96869 17.7113 9.9391 17.6928 9.8959C17.6558 9.80957 17.5887 9.66834 17.4771 9.47974C17.2541 9.103 16.8514 8.53375 16.1514 7.8338C15.4515 7.13385 14.8822 6.73114 14.5055 6.50817C14.3169 6.39656 14.1757 6.32946 14.0893 6.29246C14.0461 6.27394 14.0165 6.26291 14.0015 6.25758L13.9907 6.25388C13.5987 6.136 13.3729 5.72456 13.4857 5.32966Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.0376 5.31629L10.6866 6.47922C11.2723 7.5287 11.0372 8.90544 10.1147 9.82792C10.1147 9.82792 10.1147 9.82792 10.1147 9.82793C10.1146 9.82804 8.99588 10.947 11.0245 12.9756C13.0525 15.0036 14.1714 13.8862 14.1722 13.8854C14.1722 13.8854 14.1722 13.8854 14.1722 13.8854C15.0947 12.9629 16.4714 12.7278 17.5209 13.3135L18.6838 13.9625C20.2686 14.8469 20.4557 17.0694 19.0628 18.4623C18.2258 19.2993 17.2004 19.9506 16.0669 19.9936C14.1588 20.0659 10.9183 19.583 7.6677 16.3324C4.41713 13.0818 3.93421 9.84135 4.00655 7.93321C4.04952 6.79972 4.7008 5.77436 5.53781 4.93735C6.93076 3.5444 9.15317 3.73156 10.0376 5.31629Z" fill="currentColor" /><path d="M13.2595 1.8802C13.3257 1.47131 13.7122 1.19393 14.1211 1.26013C14.1464 1.26498 14.2279 1.2802 14.2705 1.2897C14.3559 1.3087 14.4749 1.33796 14.6233 1.38119C14.9201 1.46763 15.3347 1.61003 15.8323 1.83817C16.8286 2.29492 18.1544 3.09393 19.5302 4.46973C20.906 5.84553 21.705 7.17134 22.1617 8.16762C22.3899 8.66524 22.5323 9.07984 22.6187 9.37662C22.6619 9.52502 22.6912 9.64405 22.7102 9.72938C22.7197 9.77205 22.7267 9.80631 22.7315 9.83162L22.7373 9.86281C22.8034 10.2717 22.5286 10.6742 22.1197 10.7404C21.712 10.8064 21.3279 10.5304 21.2601 10.1234C21.258 10.1125 21.2522 10.0831 21.2461 10.0555C21.2337 10.0001 21.2124 9.91224 21.1786 9.79609C21.1109 9.56376 20.9934 9.21842 20.7982 8.79274C20.4084 7.94244 19.7074 6.76825 18.4695 5.53039C17.2317 4.29253 16.0575 3.59153 15.2072 3.2017C14.7815 3.00655 14.4362 2.88901 14.2038 2.82134C14.0877 2.78751 13.9417 2.754 13.8863 2.74166C13.4793 2.67384 13.1935 2.28792 13.2595 1.8802Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M13.4857 5.32966C13.5995 4.93139 14.0146 4.70077 14.4129 4.81456L14.2069 5.5357C14.4129 4.81456 14.4129 4.81456 14.4129 4.81456L14.4144 4.81497L14.4159 4.81542L14.4192 4.81639L14.427 4.8187L14.4468 4.82487C14.4618 4.82969 14.4807 4.83597 14.5031 4.84394C14.548 4.85987 14.6074 4.88254 14.6802 4.91374C14.8259 4.97618 15.0249 5.0726 15.2695 5.21731C15.7589 5.50699 16.4271 5.98817 17.2121 6.77314C17.9971 7.55811 18.4782 8.2263 18.7679 8.71576C18.9126 8.96027 19.009 9.15934 19.0715 9.30502C19.1027 9.37783 19.1254 9.43719 19.1413 9.4821C19.1493 9.50455 19.1555 9.52338 19.1604 9.53846L19.1665 9.55824L19.1688 9.566L19.1698 9.56933L19.1702 9.57086C19.1702 9.57086 19.1707 9.5723 18.4495 9.77834L19.1707 9.5723C19.2845 9.97058 19.0538 10.3857 18.6556 10.4995C18.2607 10.6123 17.8492 10.3866 17.7313 9.99449L17.7276 9.98371C17.7223 9.96869 17.7113 9.9391 17.6928 9.8959C17.6558 9.80957 17.5887 9.66834 17.4771 9.47974C17.2541 9.103 16.8514 8.53375 16.1514 7.8338C15.4515 7.13385 14.8822 6.73114 14.5055 6.50817C14.3169 6.39656 14.1757 6.32946 14.0893 6.29246C14.0461 6.27394 14.0165 6.26291 14.0015 6.25758L13.9907 6.25388C13.5987 6.136 13.3729 5.72456 13.4857 5.32966Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPhoneCallingRounded as IconComponentType).keywords = [
  "phone",
  "calling",
  "rounded",
  "telephone",
  "call",
  "earphone",
  "earpiece",
  "headphone",
  "call up",
  "ring",
  "sound",
  "speech sound",
  "vocation",
  "career",
  "invocation",
  "preacher",
  "dawa",
  "convocation",
  "convening",
  "summon",
  "so-called",
  "ringed",
  "ring-shaped",
  "annulate",
  "annular",
  "circular",
  "rotund",
  "bowfront",
  "prolate",
  "domed"
];

export default IconPhoneCallingRounded as IconComponentType;