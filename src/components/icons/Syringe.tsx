import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconSyringe: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.18177 10.5457L6.7121 11.076L6.18177 10.5457ZM13.4545 17.8184L13.9848 18.3488L13.4545 17.8184ZM17.7373 9.01035L17.207 9.54068L17.7373 9.01035ZM19.0238 10.5694L19.7286 10.3129L19.0238 10.5694ZM17.7373 13.5356L17.207 13.0053L17.7373 13.5356ZM19.0238 11.9765L19.7286 12.233L19.0238 11.9765ZM14.9898 6.26287L15.5202 5.73254L14.9898 6.26287ZM13.4308 4.97635L13.1743 5.68112L13.4308 4.97635ZM10.4646 6.26287L10.9949 6.7932V6.7932L10.4646 6.26287ZM12.0237 4.97635L12.2802 5.68112L12.0237 4.97635ZM19.4696 7.43967C19.7625 7.73256 20.2374 7.73256 20.5303 7.43967C20.8232 7.14677 20.8232 6.6719 20.5303 6.37901L19.4696 7.43967ZM17.6212 3.46991C17.3283 3.17702 16.8534 3.17702 16.5605 3.46991C16.2676 3.76281 16.2676 4.23768 16.5605 4.53057L17.6212 3.46991ZM14.4595 6.7932L17.207 9.54068L18.2677 8.48002L15.5202 5.73254L14.4595 6.7932ZM17.207 13.0053L12.9242 17.2881L13.9848 18.3488L18.2677 14.0659L17.207 13.0053ZM6.7121 11.076L10.9949 6.7932L9.93427 5.73254L5.65144 10.0154L6.7121 11.076ZM6.7121 17.2881C4.99668 15.5727 4.99668 12.7914 6.7121 11.076L5.65144 10.0154C3.35024 12.3166 3.35024 16.0476 5.65144 18.3488L6.7121 17.2881ZM12.9242 17.2881C11.2087 19.0035 8.42751 19.0035 6.7121 17.2881L5.65144 18.3488C7.95264 20.65 11.6836 20.65 13.9848 18.3488L12.9242 17.2881ZM17.207 9.54068C17.5919 9.92561 17.8507 10.1851 18.0359 10.4006C18.2159 10.6101 18.2849 10.7321 18.3191 10.8259L19.7286 10.3129C19.6068 9.97817 19.4094 9.69752 19.1736 9.42305C18.9429 9.15452 18.6364 8.84878 18.2677 8.48002L17.207 9.54068ZM18.2677 14.0659C18.6364 13.6972 18.9429 13.3914 19.1736 13.1229C19.4094 12.8484 19.6068 12.5678 19.7286 12.233L18.3191 11.72C18.2849 11.8138 18.2159 11.9358 18.0359 12.1453C17.8507 12.3608 17.5919 12.6203 17.207 13.0053L18.2677 14.0659ZM18.3191 10.8259C18.4242 11.1147 18.4242 11.4312 18.3191 11.72L19.7286 12.233C19.9543 11.6129 19.9543 10.9331 19.7286 10.3129L18.3191 10.8259ZM15.5202 5.73254C15.1514 5.36378 14.8457 5.05733 14.5771 4.8266C14.3027 4.59077 14.022 4.39342 13.6873 4.27158L13.1743 5.68112C13.268 5.71526 13.3901 5.78431 13.5996 5.96433C13.8151 6.14944 14.0746 6.40827 14.4595 6.7932L15.5202 5.73254ZM10.9949 6.7932C11.3799 6.40827 11.6394 6.14945 11.8548 5.96433C12.0644 5.78431 12.1864 5.71526 12.2802 5.68112L11.7672 4.27158C11.4324 4.39342 11.1518 4.59077 10.8773 4.8266C10.6088 5.05733 10.303 5.36378 9.93427 5.73254L10.9949 6.7932ZM13.6873 4.27158C13.0671 4.04587 12.3873 4.04587 11.7672 4.27158L12.2802 5.68112C12.5689 5.57602 12.8855 5.57602 13.1743 5.68112L13.6873 4.27158ZM18.0151 5.98512L19.4696 7.43967L20.5303 6.37901L19.0757 4.92446L18.0151 5.98512ZM19.0757 4.92446L17.6212 3.46991L16.5605 4.53057L18.0151 5.98512L19.0757 4.92446Z" fill="currentColor" /><path d="M17.091 14.1822L9.81824 6.90942" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M6.18182 17.8186L4 20.0004" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M15.8332 7.10632C15.5403 7.39922 15.5403 7.87409 15.8332 8.16698C16.1261 8.45988 16.601 8.45988 16.8939 8.16698L15.8332 7.10632ZM19.0757 5.98516C19.3686 5.69227 19.3686 5.2174 19.0757 4.9245C18.7828 4.63161 18.3079 4.63161 18.015 4.9245L19.0757 5.98516ZM16.8939 8.16698L19.0757 5.98516L18.015 4.9245L15.8332 7.10632L16.8939 8.16698Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M14.3787 16.8942C14.6716 17.1871 15.1464 17.1871 15.4393 16.8942C15.7322 16.6013 15.7322 16.1264 15.4393 15.8336L14.3787 16.8942ZM12.554 12.9482C12.2611 12.6553 11.7862 12.6553 11.4933 12.9482C11.2004 13.2411 11.2004 13.716 11.4933 14.0088L12.554 12.9482ZM12.7423 18.5306C13.0352 18.8235 13.5101 18.8235 13.803 18.5306C14.0959 18.2377 14.0959 17.7628 13.803 17.4699L12.7423 18.5306ZM12.157 15.824C11.8641 15.5311 11.3893 15.5311 11.0964 15.824C10.8035 16.1169 10.8035 16.5917 11.0964 16.8846L12.157 15.824ZM15.4393 15.8336L12.554 12.9482L11.4933 14.0088L14.3787 16.8942L15.4393 15.8336ZM13.803 17.4699L12.157 15.824L11.0964 16.8846L12.7423 18.5306L13.803 17.4699Z" fill="currentColor" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.5" : "1"}><path d="M17.8044 9.11023L14.8901 6.19587C14.0906 5.39639 13.6908 4.99665 13.2363 4.8312C12.7542 4.65575 12.2258 4.65575 11.7437 4.8312C11.2891 4.99665 10.8894 5.39639 10.0899 6.19587L5.54694 10.7388C3.41664 12.8691 3.41664 16.323 5.54694 18.4533C7.67724 20.5836 11.1311 20.5836 13.2614 18.4533L17.8044 13.9104C18.6039 13.1109 19.0036 12.7111 19.1691 12.2566C19.3445 11.7745 19.3445 11.2461 19.1691 10.764C19.0036 10.3095 18.6039 9.9097 17.8044 9.11023Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M16.5561 3.23326C16.8667 2.92257 17.3705 2.92257 17.6811 3.23326L20.7669 6.31906C21.0776 6.62974 21.0776 7.13346 20.7669 7.44414C20.4563 7.75483 19.9525 7.75483 19.6418 7.44414L16.5561 4.35835C16.2454 4.04766 16.2454 3.54394 16.5561 3.23326Z" fill="currentColor" /></g><path d="M17.7292 13.9855L10.0147 6.271L8.88965 7.39608L16.6041 15.1106L17.7292 13.9855Z" fill="currentColor" /><path d="M5.02573 17.8499C5.18255 18.0604 5.35652 18.2621 5.54763 18.4532C5.73867 18.6443 5.94037 18.8182 6.15079 18.975L4.35812 20.7675C4.04745 21.0782 3.54373 21.0783 3.23303 20.7676C2.92234 20.4569 2.92232 19.9532 3.23299 19.6425L5.02573 17.8499Z" fill="currentColor" /><path d="M16.9093 8.21517L15.7842 7.09008L17.5359 5.33838L18.661 6.46347L16.9093 8.21517Z" fill="currentColor" /><path d="M15.3671 16.3481C15.3671 16.3481 15.3671 16.3481 15.3671 16.3481L12.3065 13.2875C11.9958 12.9768 11.4921 12.9768 11.1814 13.2875C10.8707 13.5981 10.8707 14.1019 11.1814 14.4125L14.242 17.4732C14.242 17.4732 14.242 17.4732 14.242 17.4732L15.3671 16.3481Z" fill="currentColor" /><path d="M13.6314 18.0839C13.6314 18.0838 13.6314 18.0839 13.6314 18.0839L11.8854 16.3379C11.5748 16.0273 11.071 16.0273 10.7604 16.3379C10.4497 16.6486 10.4497 17.1523 10.7604 17.463L12.4323 19.135C12.7251 18.9392 13.0032 18.7121 13.2617 18.4535L13.6314 18.0839Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.7819 3.22619C17.4807 2.92493 16.9922 2.92493 16.691 3.22619C16.3897 3.52745 16.3897 4.0159 16.691 4.31716L17.6415 5.26767L15.9427 6.96646L15.0752 6.09895C14.3 5.32372 13.9124 4.9361 13.4717 4.77567C13.0042 4.60554 12.4918 4.60554 12.0244 4.77567C11.5836 4.9361 11.196 5.32372 10.4208 6.09895L10.3013 6.2185L17.7817 13.699L17.9012 13.5795C18.6764 12.8043 19.064 12.4166 19.2244 11.9759C19.3945 11.5084 19.3945 10.996 19.2244 10.5286C19.064 10.0878 18.6764 9.70017 17.9012 8.92494L17.0337 8.05743L18.7324 6.35864L19.6831 7.30938C19.9844 7.61064 20.4728 7.61064 20.7741 7.30938C21.0753 7.00812 21.0753 6.51967 20.7741 6.21841L17.7819 3.22619Z" fill="currentColor" /><path d="M6.01572 10.5042L9.21036 7.30943L16.6907 14.79L15.5376 15.9431L12.5698 12.9753C12.2686 12.674 11.7801 12.674 11.4789 12.9753C11.1776 13.2766 11.1776 13.765 11.4789 14.0663L14.4466 17.0341L13.8545 17.6262L12.1616 15.9333C11.8603 15.632 11.3719 15.632 11.0706 15.9333C10.7694 16.2345 10.7694 16.723 11.0706 17.0243L12.6919 18.6455C10.8462 19.8797 8.39556 19.8281 6.60052 18.4906L4.31688 20.7743C4.01563 21.0756 3.5272 21.0756 3.22594 20.7743C2.92469 20.473 2.92469 19.9846 3.22594 19.6833L5.50962 17.3996C3.9667 15.3284 4.1354 12.3845 6.01572 10.5042Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSyringe as IconComponentType).keywords = [
  "syringe",
  "tube",
  "nail",
  "squirt",
  "needle",
  "gun",
  "syring",
  "hypodermic",
  "pipette",
  "hypodermics"
];

export default IconSyringe as IconComponentType;