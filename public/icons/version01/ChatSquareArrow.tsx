import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconChatSquareArrow: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M12.978 21.456L13.6213 21.8416L12.978 21.456ZM13.4659 20.6419L12.8226 20.2564L13.4659 20.6419ZM10.5341 20.6419L9.89077 21.0275H9.89077L10.5341 20.6419ZM11.022 21.456L11.6653 21.0705L11.022 21.456ZM3.34254 16.59L4.03418 16.2999L4.03418 16.2999L3.34254 16.59ZM8.21062 19.326L8.19786 20.0759L8.21062 19.326ZM5.77792 18.9953L5.49394 19.6895L5.49394 19.6895L5.77792 18.9953ZM20.6575 16.59L21.3491 16.88V16.88L20.6575 16.59ZM15.7893 19.326L15.7766 18.5761L15.7893 19.326ZM18.2221 18.9953L18.5061 19.6895L18.5061 19.6895L18.2221 18.9953ZM5.14876 4.87731L4.76041 4.23568V4.23568L5.14876 4.87731ZM3.66312 6.34462L3.02582 5.94921H3.02582L3.66312 6.34462ZM9.66251 19.5201L10.0361 18.8698L10.0361 18.8698L9.66251 19.5201ZM9.3023 4.97332C9.71651 4.97206 10.0513 4.63524 10.05 4.22103C10.0487 3.80682 9.71191 3.47206 9.2977 3.47333L9.3023 4.97332ZM21.7365 14.4649C21.7476 14.0508 21.4209 13.7061 21.0068 13.6951C20.5928 13.684 20.2481 14.0106 20.237 14.4247L21.7365 14.4649ZM13.6213 21.8416L14.1092 21.0275L12.8226 20.2564L12.3347 21.0705L13.6213 21.8416ZM9.89077 21.0275L10.3787 21.8416L11.6653 21.0705L11.1774 20.2564L9.89077 21.0275ZM12.3347 21.0705C12.2671 21.1833 12.1458 21.2502 12 21.2502C11.8541 21.2502 11.7329 21.1833 11.6653 21.0705L10.3787 21.8416C11.1047 23.0531 12.8952 23.0531 13.6213 21.8416L12.3347 21.0705ZM3.75 12.6669V11.778H2.25V12.6669H3.75ZM2.25 12.6669C2.25 13.6919 2.24958 14.4988 2.2946 15.1504C2.3401 15.809 2.43455 16.3641 2.6509 16.88L4.03418 16.2999C3.908 15.999 3.83117 15.6281 3.79103 15.047C3.75042 14.4591 3.75 13.7127 3.75 12.6669H2.25ZM8.22338 18.5761C7.09333 18.5569 6.51282 18.4856 6.06191 18.3011L5.49394 19.6895C6.23158 19.9912 7.06826 20.0567 8.19786 20.0759L8.22338 18.5761ZM2.6509 16.88C3.18531 18.1543 4.20905 19.1638 5.49394 19.6895L6.06191 18.3011C5.14155 17.9246 4.41322 17.2037 4.03418 16.2999L2.6509 16.88ZM15.8021 20.0759C16.9317 20.0567 17.7684 19.9912 18.5061 19.6895L17.9381 18.3011C17.4872 18.4856 16.9067 18.5569 15.7766 18.5761L15.8021 20.0759ZM19.9658 16.2999C19.5868 17.2037 18.8585 17.9246 17.9381 18.3011L18.5061 19.6895C19.791 19.1638 20.8147 18.1543 21.3491 16.88L19.9658 16.2999ZM3.75 11.778C3.75 10.3084 3.75081 9.25957 3.82944 8.44281C3.90695 7.63762 4.05466 7.13613 4.30042 6.74004L3.02582 5.94921C2.60846 6.62188 2.42461 7.38221 2.33634 8.29907C2.24919 9.20438 2.25 10.3378 2.25 11.778H3.75ZM4.76041 4.23568C4.05426 4.66308 3.45964 5.25002 3.02582 5.94921L4.30042 6.74004C4.6087 6.24316 5.03225 5.8245 5.5371 5.51895L4.76041 4.23568ZM11.1774 20.2564C10.9955 19.9528 10.8327 19.6797 10.6738 19.4644C10.5054 19.2362 10.3094 19.0268 10.0361 18.8698L9.28893 20.1705C9.3196 20.1881 9.37008 20.2239 9.46688 20.355C9.57318 20.4991 9.69425 20.6996 9.89077 21.0275L11.1774 20.2564ZM8.19786 20.0759C8.59427 20.0827 8.841 20.0876 9.02805 20.1081C9.20155 20.127 9.26024 20.154 9.28893 20.1705L10.0361 18.8698C9.76085 18.7117 9.47626 18.6481 9.19112 18.6169C8.91953 18.5872 8.59228 18.5824 8.22338 18.5761L8.19786 20.0759ZM14.1092 21.0275C14.3057 20.6996 14.4268 20.4991 14.5331 20.355C14.6299 20.2239 14.6804 20.1881 14.711 20.1705L13.9639 18.8698C13.6906 19.0268 13.4945 19.2362 13.3261 19.4644C13.1672 19.6797 13.0045 19.9528 12.8226 20.2564L14.1092 21.0275ZM15.7766 18.5761C15.4077 18.5824 15.0804 18.5872 14.8088 18.6169C14.5237 18.6481 14.2391 18.7117 13.9639 18.8698L14.711 20.1705C14.7397 20.154 14.7984 20.127 14.9719 20.1081C15.159 20.0876 15.4057 20.0827 15.8021 20.0759L15.7766 18.5761ZM9.2977 3.47333C7.0617 3.48018 5.93013 3.52772 4.76041 4.23568L5.5371 5.51895C6.29497 5.06025 6.99727 4.98039 9.3023 4.97332L9.2977 3.47333ZM20.237 14.4247C20.2114 15.3807 20.1349 15.8967 19.9658 16.2999L21.3491 16.88C21.6333 16.2024 21.7102 15.4459 21.7365 14.4649L20.237 14.4247Z" fill="currentColor" /><path d="M12 4.22249L11.473 3.68887C11.3303 3.82978 11.25 4.02196 11.25 4.22249C11.25 4.42301 11.3303 4.61519 11.473 4.7561L12 4.22249ZM20.25 11.778C20.25 12.1922 20.5858 12.528 21 12.528C21.4142 12.528 21.75 12.1922 21.75 11.778H20.25ZM18.8512 4.87732L18.4629 5.51896L18.8512 4.87732ZM20.3369 6.34463L20.9742 5.94922V5.94922L20.3369 6.34463ZM14.777 2.53386C15.0717 2.24279 15.0747 1.76792 14.7836 1.47322C14.4925 1.17851 14.0177 1.17556 13.723 1.46663L14.777 2.53386ZM13.723 6.97834C14.0177 7.26941 14.4925 7.26646 14.7836 6.97176C15.0747 6.67705 15.0717 6.20219 14.777 5.91112L13.723 6.97834ZM12 4.97249C13.4807 4.97249 14.8952 4.97282 16.074 5.05259C16.6621 5.0924 17.1733 5.15094 17.5922 5.23429C18.0215 5.3197 18.3018 5.42143 18.4629 5.51896L19.2396 4.23569C18.8597 4.00575 18.3813 3.86189 17.8849 3.76312C17.378 3.66228 16.7964 3.59805 16.1753 3.55602C14.9354 3.47211 13.4654 3.47249 12 3.47249V4.97249ZM21.75 11.778C21.75 10.3378 21.7508 9.20439 21.6637 8.29908C21.5754 7.38222 21.3915 6.62189 20.9742 5.94922L19.6996 6.74005C19.9453 7.13614 20.093 7.63763 20.1706 8.44282C20.2492 9.25958 20.25 10.3084 20.25 11.778H21.75ZM18.4629 5.51896C18.9677 5.82451 19.3913 6.24317 19.6996 6.74005L20.9742 5.94922C20.5404 5.25003 19.9457 4.66309 19.2396 4.23569L18.4629 5.51896ZM12.527 4.7561L14.777 2.53386L13.723 1.46663L11.473 3.68887L12.527 4.7561ZM11.473 4.7561L13.723 6.97834L14.777 5.91112L12.527 3.68887L11.473 4.7561Z" fill="currentColor" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_1_13123)"><path opacity={duotone ? "0.5" : "1"} d="M12.9839 22.4939L13.521 21.5872C13.9375 20.8838 14.1458 20.5322 14.4804 20.3377C14.815 20.1433 15.2362 20.136 16.0786 20.1215C17.3224 20.1001 18.1024 20.0239 18.7566 19.7531C19.9704 19.2507 20.9348 18.287 21.4375 17.0741C21.6226 16.6275 21.7169 16.1223 21.7648 15.4508C21.7903 15.0951 21.803 14.9172 21.708 14.7749C21.6131 14.6325 21.4329 14.5721 21.0723 14.4513C19.5606 13.9447 16.0584 12.6558 14.1 11C11.8925 9.1337 9.91782 5.33966 9.21118 3.88541C9.0707 3.59632 9.00047 3.45177 8.87715 3.37549C8.75383 3.29921 8.59743 3.30086 8.28463 3.30416C6.25036 3.32565 5.32915 3.43826 4.36538 4.02846C3.69883 4.43664 3.13843 4.99667 2.72997 5.66276C2 6.85315 2 8.47359 2 11.7145V12.7045C2 15.0111 2 16.1644 2.37707 17.0741C2.87984 18.287 3.84419 19.2507 5.05797 19.7531C5.71215 20.0239 6.49219 20.1001 7.73591 20.1215C8.57837 20.136 8.9996 20.1433 9.33417 20.3377C9.66874 20.5322 9.87702 20.8838 10.2936 21.5872L10.8307 22.4939C11.3094 23.3021 12.5052 23.3021 12.9839 22.4939Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M14.8719 0.239472C15.2073 0.555664 15.2039 1.06515 14.8643 1.37744L13.7622 2.3909C14.721 2.39993 15.6433 2.42168 16.4756 2.47412C17.1913 2.51922 17.8616 2.58814 18.4457 2.69633C19.0178 2.8023 19.569 2.95665 20.0069 3.20336C20.8206 3.66191 21.5058 4.29165 22.0058 5.04181C22.4867 5.76352 22.6986 6.57928 22.8003 7.563C22.8998 8.52542 22.8998 9.72816 22.8998 11.2532V11.2956C22.8998 11.74 22.5128 12.1002 22.0355 12.1002C21.5582 12.1002 21.1712 11.74 21.1712 11.2956C21.1712 9.71885 21.1703 8.59352 21.0797 7.71722C20.9904 6.85332 20.8201 6.31527 20.5369 5.8903C20.1817 5.3572 19.6936 4.90801 19.1118 4.58018C18.9261 4.47554 18.6031 4.3664 18.1084 4.27475C17.6257 4.18533 17.0367 4.12252 16.3589 4.07981C15.5758 4.03047 14.7025 4.00946 13.7763 4.00051L14.8643 5.00093C15.2039 5.31322 15.2073 5.82271 14.8719 6.1389C14.5364 6.45509 13.9892 6.45825 13.6496 6.14596L11.0568 3.7617C10.8923 3.61052 10.7998 3.40433 10.7998 3.18918C10.7998 2.97404 10.8923 2.76785 11.0568 2.61667L13.6496 0.232409C13.9892 -0.0798818 14.5364 -0.0767194 14.8719 0.239472Z" fill="currentColor" /></g><defs><clipPath ><rect width="24" height="24" fill="none" transform="translate(0 0.000244141)" /></clipPath></defs></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9853 21.4492L12.4736 20.6249C12.8523 19.9855 13.0417 19.6658 13.3458 19.489C13.65 19.3123 14.0329 19.3057 14.7988 19.2925C15.9294 19.273 16.6386 19.2038 17.2333 18.9576C18.3367 18.5009 19.2134 17.6248 19.6705 16.5221C19.8323 16.1317 19.9177 15.6919 19.9628 15.1159C19.9905 14.7622 20.0044 14.5853 19.9097 14.442C19.8151 14.2987 19.634 14.2376 19.2718 14.1153C17.8637 13.64 14.7522 12.4816 13 11.0002C11.0199 9.32618 9.24591 5.94608 8.58192 4.58638C8.44025 4.29628 8.36941 4.15123 8.24608 4.0752C8.12274 3.99917 7.96642 4.00099 7.65377 4.00465C5.84588 4.02578 5.01704 4.13168 4.15034 4.66244C3.54439 5.03351 3.03493 5.54263 2.66361 6.14816C2 7.23034 2 8.70347 2 11.6497V12.5498C2 14.6466 2 15.6951 2.34279 16.5221C2.79985 17.6248 3.67653 18.5009 4.77997 18.9576C5.37469 19.2038 6.08381 19.273 7.21446 19.2925C7.98034 19.3057 8.36327 19.3123 8.66743 19.489C8.97158 19.6658 9.16093 19.9855 9.53964 20.6249L10.0279 21.4492C10.4631 22.1839 11.5502 22.1839 11.9853 21.4492Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M13.7019 1.21772C14.0068 1.50517 14.0037 1.96834 13.695 2.25224L12.693 3.17357C13.5647 3.18177 14.4032 3.20155 15.1598 3.24923C15.8105 3.29023 16.4199 3.35288 16.9508 3.45123C17.4709 3.54757 17.972 3.68789 18.37 3.91216C19.1098 4.32903 19.7328 4.90152 20.1872 5.58349C20.6245 6.23959 20.8171 6.98119 20.9095 7.87548C21 8.75041 21 9.84381 21 11.2302V11.2687C21 11.6727 20.6482 12.0002 20.2143 12.0002C19.7803 12.0002 19.4286 11.6727 19.4286 11.2687C19.4286 9.83534 19.4277 8.81231 19.3454 8.01567C19.2641 7.23031 19.1094 6.74117 18.8519 6.35484C18.529 5.8702 18.0853 5.46185 17.5564 5.16382C17.3876 5.06869 17.0939 4.96947 16.6442 4.88616C16.2053 4.80487 15.6699 4.74777 15.0537 4.70894C14.3418 4.66409 13.5479 4.64498 12.7059 4.63685L13.695 5.54632C14.0037 5.83022 14.0068 6.29339 13.7019 6.58084C13.3969 6.86829 12.8995 6.87116 12.5907 6.58726L10.2336 4.41975C10.0841 4.28231 10 4.09487 10 3.89928C10 3.70369 10.0841 3.51625 10.2336 3.37881L12.5907 1.2113C12.8995 0.927402 13.3969 0.930277 13.7019 1.21772Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconChatSquareArrow as IconComponentType).keywords = [
  "chat",
  "square",
  "arrow",
  "confabulate",
  "confab",
  "confabulation",
  "chitchat",
  "natter",
  "gossip",
  "visit",
  "chatter",
  "claver",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest",
  "pointer",
  "archer",
  "archery",
  "dart",
  "arrowhead",
  "bolt",
  "spike",
  "rope",
  "roof"
];

export default IconChatSquareArrow as IconComponentType;