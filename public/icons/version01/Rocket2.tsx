import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconRocket2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 5.36519L22.75 5.36519V5.36519H22ZM9.45454 13.3029L9.98375 12.7714L9.45454 13.3029ZM9.45454 8.54376L9.98375 9.07521L9.45454 8.54376ZM15.4286 14.4926L14.8994 13.9612L15.4286 14.4926ZM10.6493 14.4926L10.1201 15.0241L10.6493 14.4926ZM20.5153 9.42733L21.0445 9.95878L20.5153 9.42733ZM22 5.85801L21.25 5.85801V5.85801H22ZM14.5413 3.47846L14.0121 2.94701V2.94701L14.5413 3.47846ZM13.4904 16.0931L13.2315 15.3892L13.4904 16.0931ZM7.86224 10.4352L8.55797 10.7153L7.86224 10.4352ZM19.9861 8.89589L14.8994 13.9612L15.9578 15.0241L21.0445 9.95878L19.9861 8.89589ZM11.1786 13.9612L9.98375 12.7714L8.92533 13.8343L10.1201 15.0241L11.1786 13.9612ZM9.98375 9.07521L15.0705 4.00991L14.0121 2.94701L8.92533 8.01231L9.98375 9.07521ZM18.1257 2.75H18.6206V1.25H18.1257V2.75ZM21.25 5.36519L21.25 5.85801L22.75 5.85802L22.75 5.36519L21.25 5.36519ZM18.6206 2.75C19.4382 2.75 19.9764 2.75158 20.3751 2.80497C20.7527 2.85552 20.8911 2.93987 20.9759 3.02427L22.0343 1.96137C21.6242 1.55295 21.1169 1.3909 20.5742 1.31824C20.0527 1.24842 19.396 1.25 18.6206 1.25V2.75ZM22.75 5.36519C22.75 4.5933 22.7516 3.93861 22.6814 3.41858C22.6082 2.87664 22.4449 2.37023 22.0343 1.96137L20.9759 3.02427C21.0602 3.10823 21.1443 3.24483 21.1949 3.61928C21.2484 4.01563 21.25 4.55072 21.25 5.36519H22.75ZM9.98375 12.7714C9.40547 12.1956 9.0264 11.8158 8.7826 11.4976C8.55196 11.1966 8.51483 11.0409 8.51483 10.9233H7.01483C7.01483 11.5027 7.25932 11.9759 7.59192 12.4099C7.91136 12.8269 8.37714 13.2884 8.92533 13.8343L9.98375 12.7714ZM10.1201 15.0241C10.6684 15.57 11.1318 16.0338 11.5504 16.3518C11.9864 16.683 12.4601 16.9252 13.039 16.9252V15.4252C12.918 15.4252 12.7601 15.387 12.4578 15.1574C12.1382 14.9145 11.7568 14.537 11.1786 13.9612L10.1201 15.0241ZM21.0445 9.95878C21.7335 9.27266 22.2359 8.79124 22.4996 8.15734L21.1146 7.58125C20.9924 7.87498 20.7622 8.12304 19.9861 8.89589L21.0445 9.95878ZM21.25 5.85801C21.25 6.95105 21.2366 7.28785 21.1146 7.58125L22.4996 8.15734C22.7634 7.5231 22.75 6.82826 22.75 5.85801H21.25ZM15.0705 4.00991C15.8462 3.23743 16.0958 3.00759 16.3919 2.88546L15.8199 1.49878C15.1845 1.76089 14.7014 2.26053 14.0121 2.94701L15.0705 4.00991ZM18.1257 1.25C17.1507 1.25 16.455 1.23682 15.8199 1.49878L16.3919 2.88546C16.6883 2.76318 17.0287 2.75 18.1257 2.75V1.25ZM14.8994 13.9612C14.4536 14.4051 14.1217 14.735 13.8373 14.9802C13.5518 15.2266 13.3677 15.3391 13.2315 15.3892L13.7494 16.797C14.138 16.654 14.4842 16.4032 14.8171 16.1161C15.1512 15.8279 15.526 15.4541 15.9578 15.0241L14.8994 13.9612ZM13.2315 15.3892C13.1613 15.415 13.1008 15.4252 13.039 15.4252V16.9252C13.2864 16.9252 13.5219 16.8806 13.7494 16.797L13.2315 15.3892ZM8.92533 8.01231C8.50382 8.43205 8.13646 8.79732 7.85068 9.12306C7.56626 9.44725 7.31651 9.78252 7.16652 10.1551L8.55797 10.7153C8.61351 10.5773 8.7319 10.3931 8.97825 10.1123C9.22324 9.83306 9.54927 9.50786 9.98375 9.07521L8.92533 8.01231ZM7.16652 10.1551C7.06826 10.3991 7.01483 10.6534 7.01483 10.9233H8.51483C8.51483 10.8585 8.52635 10.7938 8.55797 10.7153L7.16652 10.1551Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M7.70886 10.282L8.23887 9.75134L8.23807 9.75054L7.70886 10.282ZM11.4377 6.79417C11.7861 7.01815 12.2501 6.91727 12.4741 6.56884C12.6981 6.2204 12.5972 5.75637 12.2488 5.53239L11.4377 6.79417ZM11.2958 5.81139L10.8902 6.44228L10.8902 6.44228L11.2958 5.81139ZM9.06024 4.66568L9.16976 3.92372L9.06024 4.66568ZM4.79597 7.23376L5.32517 7.76522H5.32517L4.79597 7.23376ZM7.50536 4.86415L7.79249 5.55701L7.50536 4.86415ZM5.35102 8.4527L5.62702 7.75533L5.62702 7.75533L5.35102 8.4527ZM5.45822 8.49554L5.17282 9.18911L5.45822 8.49554ZM6.87303 9.44968L7.40224 8.91823H7.40224L6.87303 9.44968ZM6.79108 9.36862L6.26913 9.9072L6.79108 9.36862ZM5.0216 8.32233L4.74561 9.0197L4.74561 9.0197L5.0216 8.32233ZM13.735 16.3374L13.205 16.868C13.2166 16.8796 13.2286 16.8908 13.2409 16.9016L13.735 16.3374ZM18.4484 11.7059C18.223 11.3584 17.7586 11.2593 17.4111 11.4846C17.0635 11.7099 16.9644 12.1743 17.1897 12.5219L18.4484 11.7059ZM18.1724 12.659L17.5431 13.067V13.067L18.1724 12.659ZM19.323 14.8852L20.0648 14.7748L19.323 14.8852ZM16.744 19.1315L17.2732 19.6629L17.2732 19.6629L16.744 19.1315ZM19.1237 16.4335L19.8157 16.7227L19.1237 16.4335ZM15.6917 19.0091L16.3882 18.7311L15.6917 19.0091ZM15.2791 18.0603L14.6217 18.4213L15.2791 18.0603ZM14.1899 16.7358L14.7191 16.2043L14.7021 16.1873L14.684 16.1715L14.1899 16.7358ZM14.9015 17.4886L15.4915 17.0257L14.9015 17.4886ZM16.6709 19.2043L16.1417 18.6728L16.1417 18.6729L16.6709 19.2043ZM14.0204 15.5624C13.7273 15.2697 13.2524 15.27 12.9597 15.563C12.667 15.8561 12.6673 16.331 12.9604 16.6237L14.0204 15.5624ZM7.33218 10.9658C7.62525 11.2585 8.10013 11.2582 8.39284 10.9651C8.68556 10.6721 8.68527 10.1972 8.3922 9.90448L7.33218 10.9658ZM12.2488 5.53239L11.7014 5.18049L10.8902 6.44228L11.4377 6.79417L12.2488 5.53239ZM11.7014 5.18049C11.162 4.83377 10.722 4.55029 10.3423 4.34596C9.95322 4.13655 9.58257 3.98465 9.16976 3.92372L8.95073 5.40764C9.1263 5.43355 9.32436 5.50155 9.63143 5.66681C9.94793 5.83715 10.3315 6.0831 10.8902 6.44228L11.7014 5.18049ZM5.32517 7.76522C5.81542 7.27705 6.33923 6.75566 6.80949 6.32718C7.04443 6.11312 7.25705 5.93051 7.43833 5.79096C7.63121 5.64247 7.74622 5.57619 7.79249 5.55701L7.21823 4.17129C6.98214 4.26913 6.73911 4.43624 6.52332 4.60236C6.29593 4.77741 6.04924 4.99062 5.79924 5.2184C5.29965 5.6736 4.75113 6.22 4.26677 6.70231L5.32517 7.76522ZM9.16976 3.92372C8.5128 3.82675 7.83793 3.91448 7.21823 4.17129L7.79249 5.55701C8.16883 5.40105 8.56995 5.35144 8.95073 5.40764L9.16976 3.92372ZM4.74561 9.0197L5.07503 9.15007L5.62702 7.75533L5.2976 7.62496L4.74561 9.0197ZM6.34382 9.98112L7.17965 10.8134L8.23807 9.75054L7.40224 8.91823L6.34382 9.98112ZM5.07503 9.15007C5.13063 9.17208 5.15208 9.18058 5.17282 9.18911L5.74363 7.80197C5.71136 7.78869 5.67901 7.77591 5.62702 7.75533L5.07503 9.15007ZM7.40224 8.91823C7.36266 8.87881 7.33806 8.8543 7.31302 8.83003L6.26913 9.9072C6.2852 9.92277 6.30154 9.93902 6.34382 9.98112L7.40224 8.91823ZM5.17282 9.18911C5.58092 9.35705 5.95297 9.60081 6.26913 9.9072L7.31302 8.83003C6.86006 8.39106 6.3274 8.04219 5.74363 7.80197L5.17282 9.18911ZM4.26677 6.70231C3.54282 7.42319 3.79893 8.64504 4.74561 9.0197L5.2976 7.62496C5.35173 7.64638 5.36997 7.72061 5.32517 7.76522L4.26677 6.70231ZM17.1897 12.5219L17.5431 13.067L18.8017 12.2511L18.4484 11.7059L17.1897 12.5219ZM16.2148 18.6L16.1417 18.6728L17.2001 19.7357L17.2732 19.6629L16.2148 18.6ZM17.5431 13.067C17.9038 13.6235 18.1507 14.0053 18.3217 14.3202C18.4875 14.6258 18.5553 14.8222 18.5811 14.9956L20.0648 14.7748C20.0034 14.3623 19.8504 13.9923 19.64 13.6047C19.4347 13.2264 19.1499 12.7881 18.8017 12.2511L17.5431 13.067ZM17.2732 19.6629C17.7576 19.1806 18.3063 18.6344 18.7634 18.1369C18.9922 17.888 19.2063 17.6423 19.3822 17.4158C19.5489 17.2009 19.7171 16.9586 19.8157 16.7227L18.4317 16.1443C18.4127 16.1896 18.3465 16.3038 18.1973 16.4959C18.0572 16.6764 17.8739 16.888 17.6589 17.122C17.2286 17.5903 16.705 18.1119 16.2148 18.6L17.2732 19.6629ZM18.5811 14.9956C18.6373 15.373 18.5878 15.7707 18.4317 16.1443L19.8157 16.7227C20.074 16.1044 20.1624 15.4308 20.0648 14.7748L18.5811 14.9956ZM14.684 16.1715L14.2291 15.7732L13.2409 16.9016L13.6958 17.3L14.684 16.1715ZM16.3882 18.7311C16.2023 18.2652 16.0876 17.9744 15.9365 17.6993L14.6217 18.4213C14.7185 18.5975 14.7962 18.7887 14.9951 19.2871L16.3882 18.7311ZM13.6607 17.2672C14.0415 17.6464 14.1872 17.7933 14.3115 17.9516L15.4915 17.0257C15.2977 16.7787 15.0751 16.5588 14.7191 16.2043L13.6607 17.2672ZM15.9365 17.6993C15.8068 17.4631 15.658 17.2378 15.4915 17.0257L14.3115 17.9516C14.4275 18.0996 14.5313 18.2567 14.6217 18.4213L15.9365 17.6993ZM16.1417 18.6729C16.182 18.6327 16.236 18.6237 16.2733 18.6312C16.311 18.6387 16.3638 18.6699 16.3882 18.7311L14.9951 19.2871C15.3559 20.1912 16.5258 20.4072 17.2001 19.7357L16.1417 18.6729ZM14.265 15.8067L14.0204 15.5624L12.9604 16.6237L13.205 16.868L14.265 15.8067ZM7.17886 10.8126L7.33218 10.9658L8.3922 9.90448L8.23887 9.75134L7.17886 10.8126Z" fill="currentColor" /><path d="M5.5482 13L3.85646 14.6897C3.43177 15.1139 2.74321 15.1139 2.31852 14.6897C1.89383 14.2655 1.89383 13.5778 2.31852 13.1536L2.47231 13M11.0757 18.5696L9.38395 20.2593C8.95926 20.6835 8.95926 21.3712 9.38395 21.7954C9.80864 22.2195 10.4972 22.2195 10.9219 21.7954L11.0757 21.6418M6.93603 17.1588L5.22645 18.8308" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M10.6329 17.1857C10.9258 16.8928 10.9258 16.418 10.6329 16.1251C10.34 15.8322 9.86514 15.8322 9.57224 16.1251L10.6329 17.1857ZM7.46982 18.2275C7.17692 18.5204 7.17692 18.9953 7.46982 19.2881C7.76271 19.581 8.23758 19.581 8.53048 19.2881L7.46982 18.2275ZM7.85719 14.4134C8.15009 14.1205 8.15009 13.6456 7.85719 13.3527C7.5643 13.0598 7.08943 13.0598 6.79653 13.3527L7.85719 14.4134ZM4.67963 15.4696C4.38674 15.7625 4.38674 16.2374 4.67963 16.5303C4.97252 16.8232 5.4474 16.8232 5.74029 16.5303L4.67963 15.4696ZM9.57224 16.1251L7.46982 18.2275L8.53048 19.2881L10.6329 17.1857L9.57224 16.1251ZM6.79653 13.3527L4.67963 15.4696L5.74029 16.5303L7.85719 14.4134L6.79653 13.3527Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M12.3732 12.6445C12.6667 12.3523 12.6677 11.8774 12.3754 11.5839C12.0831 11.2904 11.6083 11.2894 11.3148 11.5816L12.3732 12.6445ZM10.581 14.4292L12.3732 12.6445L11.3148 11.5816L9.52255 13.3663L10.581 14.4292ZM17.2888 8.01231C16.9216 8.378 16.3248 8.378 15.9576 8.01231L14.8992 9.0752C15.8517 10.0237 17.3947 10.0237 18.3472 9.0752L17.2888 8.01231ZM15.9576 8.01231C15.5921 7.64836 15.5921 7.0596 15.9576 6.69566L14.8992 5.63276C13.9449 6.583 13.9449 8.12496 14.8992 9.0752L15.9576 8.01231ZM15.9576 6.69566C16.3248 6.32996 16.9216 6.32996 17.2888 6.69566L18.3472 5.63276C17.3947 4.68426 15.8517 4.68426 14.8992 5.63276L15.9576 6.69566ZM17.2888 6.69566C17.6543 7.0596 17.6543 7.64836 17.2888 8.01231L18.3472 9.0752C19.3015 8.12496 19.3015 6.583 18.3472 5.63276L17.2888 6.69566Z" fill="currentColor" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M15.5023 14.3674L20.5319 9.35289C21.2563 8.63072 21.6185 8.26963 21.8092 7.81046C22 7.3513 22 6.84065 22 5.81937V5.33146C22 3.76099 22 2.97576 21.5106 2.48788C21.0213 2 20.2337 2 18.6585 2H18.1691C17.1447 2 16.6325 2 16.172 2.19019C15.7114 2.38039 15.3493 2.74147 14.6249 3.46364L9.59522 8.47817C8.74882 9.32202 8.224 9.84526 8.02078 10.3506C7.95657 10.5103 7.92446 10.6682 7.92446 10.8339C7.92446 11.5238 8.48138 12.0791 9.59522 13.1896L9.74492 13.3388L11.4985 11.5591C11.7486 11.3053 12.1571 11.3022 12.4109 11.5523C12.6647 11.8024 12.6678 12.2109 12.4177 12.4647L10.6587 14.2499L10.7766 14.3674C11.8905 15.4779 12.4474 16.0331 13.1394 16.0331C13.2924 16.0331 13.4387 16.006 13.5858 15.9518C14.1048 15.7607 14.6345 15.2325 15.5023 14.3674ZM17.8652 8.47854C17.2127 9.12904 16.1548 9.12904 15.5024 8.47854C14.8499 7.82803 14.8499 6.77335 15.5024 6.12284C16.1548 5.47233 17.2127 5.47233 17.8652 6.12284C18.5177 6.77335 18.5177 7.82803 17.8652 8.47854Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M2.77409 12.4814C3.07033 12.778 3.07004 13.2586 2.77343 13.5548L2.61779 13.7103C2.48483 13.8431 2.48483 14.058 2.61779 14.1908C2.75125 14.3241 2.96801 14.3241 3.10147 14.1908L4.8136 12.4807C5.1102 12.1845 5.59079 12.1848 5.88704 12.4814C6.18328 12.778 6.18298 13.2586 5.88638 13.5548L4.17426 15.2648C3.4481 15.9901 2.27116 15.9901 1.545 15.2648C0.818334 14.5391 0.818333 13.362 1.545 12.6362L1.70065 12.4807C1.99725 12.1845 2.47784 12.1848 2.77409 12.4814ZM7.29719 16.696C7.5903 16.9957 7.58495 17.4762 7.28525 17.7693L5.55508 19.4614C5.25538 19.7545 4.77481 19.7491 4.48171 19.4494C4.1886 19.1497 4.19395 18.6692 4.49365 18.3761L6.22382 16.684C6.52352 16.3909 7.00409 16.3963 7.29719 16.696ZM11.4811 18.118C11.7774 18.4146 11.7771 18.8952 11.4805 19.1915L9.76834 20.9015C9.63539 21.0343 9.63539 21.2492 9.76834 21.382C9.9018 21.5153 10.1186 21.5153 10.252 21.382L10.4077 21.2265C10.7043 20.9303 11.1849 20.9306 11.4811 21.2272C11.7774 21.5238 11.7771 22.0044 11.4805 22.3006L11.3248 22.4561C10.5987 23.1813 9.42171 23.1813 8.69556 22.4561C7.96889 21.7303 7.96889 20.5532 8.69556 19.8274L10.4077 18.1174C10.7043 17.8211 11.1849 17.8214 11.4811 18.118Z" fill="currentColor" /><g opacity={duotone ? "0.5" : "1"}><path d="M10.8466 5.40925L8.65886 7.59037C8.25673 7.99126 7.88786 8.35901 7.59655 8.69145C7.40947 8.90494 7.22253 9.13861 7.06417 9.39679L7.04285 9.37554C7.00239 9.3352 6.98214 9.31501 6.96182 9.29529C6.58157 8.92635 6.13429 8.63301 5.64391 8.43097C5.61771 8.42018 5.59111 8.40964 5.53792 8.38856L5.21219 8.25949C4.77092 8.08464 4.65332 7.51659 4.98909 7.18184C5.95273 6.22112 7.10972 5.06765 7.66809 4.83597C8.16053 4.63166 8.69248 4.56368 9.20554 4.6395C9.67562 4.70897 10.1203 4.95043 10.8466 5.40925Z" fill="currentColor" /><path d="M14.5821 16.8934C14.7583 17.0723 14.8754 17.1987 14.9813 17.3337C15.1209 17.5119 15.2458 17.7012 15.3546 17.8996C15.4772 18.123 15.5723 18.3616 15.7626 18.8389C15.9174 19.2274 16.432 19.3301 16.7308 19.0322L16.8031 18.9601C17.7667 17.9993 18.9237 16.8458 19.1561 16.2891C19.361 15.7982 19.4292 15.2678 19.3531 14.7563C19.2835 14.2877 19.0413 13.8444 18.5812 13.1205L16.3862 15.3089C15.975 15.7189 15.5979 16.0949 15.2569 16.3894C15.0525 16.5659 14.8289 16.7423 14.5821 16.8934Z" fill="currentColor" /></g><g opacity={duotone ? "0.5" : "1"}><path d="M7.6867 14.5633C7.98312 14.2669 7.98312 13.7863 7.6867 13.4899C7.39028 13.1935 6.90968 13.1935 6.61326 13.4899L4.47085 15.6323C4.17443 15.9287 4.17443 16.4093 4.47085 16.7057C4.76727 17.0021 5.24787 17.0021 5.54429 16.7057L7.6867 14.5633Z" fill="currentColor" /><path d="M10.4959 17.369C10.7923 17.0726 10.7923 16.592 10.4959 16.2956C10.1994 15.9992 9.71884 15.9992 9.42241 16.2956L7.29465 18.4233C6.99823 18.7198 6.99823 19.2003 7.29465 19.4968C7.59108 19.7932 8.07167 19.7932 8.36809 19.4968L10.4959 17.369Z" fill="currentColor" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2.77409 12.4814C3.07033 12.778 3.07004 13.2586 2.77343 13.5548L2.61779 13.7103C2.48483 13.8431 2.48483 14.058 2.61779 14.1908C2.75125 14.3241 2.96801 14.3241 3.10147 14.1908L4.8136 12.4807C5.1102 12.1845 5.59079 12.1848 5.88704 12.4814C6.18328 12.778 6.18298 13.2586 5.88638 13.5548L4.17426 15.2648C3.4481 15.9901 2.27116 15.9901 1.545 15.2648C0.818334 14.5391 0.818333 13.362 1.545 12.6362L1.70065 12.4807C1.99725 12.1845 2.47784 12.1848 2.77409 12.4814ZM7.68665 13.4896C7.98307 13.7861 7.98307 14.2667 7.68665 14.5631L5.54424 16.7055C5.24782 17.0019 4.76723 17.0019 4.4708 16.7055C4.17438 16.409 4.17438 15.9285 4.4708 15.632L6.61321 13.4896C6.90963 13.1932 7.39023 13.1932 7.68665 13.4896ZM10.4958 16.2953C10.7922 16.5918 10.7922 17.0724 10.4958 17.3688L8.36805 19.4965C8.07162 19.7929 7.59103 19.7929 7.29461 19.4965C6.99818 19.2001 6.99818 18.7195 7.29461 18.4231L9.42237 16.2953C9.71879 15.9989 10.1994 15.9989 10.4958 16.2953ZM7.29719 16.696C7.5903 16.9957 7.58495 17.4762 7.28525 17.7693L5.55508 19.4614C5.25538 19.7545 4.77481 19.7491 4.48171 19.4494C4.1886 19.1497 4.19395 18.6692 4.49365 18.3761L6.22382 16.684C6.52352 16.3909 7.00409 16.3963 7.29719 16.696ZM11.4811 18.118C11.7774 18.4146 11.7771 18.8952 11.4805 19.1915L9.76834 20.9015C9.63539 21.0343 9.63539 21.2492 9.76834 21.382C9.9018 21.5153 10.1186 21.5153 10.252 21.382L10.4077 21.2265C10.7043 20.9303 11.1849 20.9306 11.4811 21.2272C11.7774 21.5238 11.7771 22.0044 11.4805 22.3006L11.3248 22.4561C10.5987 23.1813 9.42171 23.1813 8.69556 22.4561C7.96889 21.7303 7.96889 20.5532 8.69556 19.8274L10.4077 18.1174C10.7043 17.8211 11.1849 17.8214 11.4811 18.118Z" fill="currentColor" /><path d="M10.8463 5.40912L8.65863 7.59023C8.2565 7.99113 7.88763 8.35888 7.59632 8.69132C7.40925 8.90481 7.2223 9.13847 7.06394 9.39666L7.04262 9.37541C7.00216 9.33507 6.98191 9.31487 6.96159 9.29516C6.58134 8.92621 6.13406 8.63287 5.64368 8.43084C5.61748 8.42004 5.59088 8.4095 5.53769 8.38842L5.21196 8.25936C4.77069 8.08451 4.65309 7.51645 4.98886 7.1817C5.9525 6.22099 7.10949 5.06751 7.66786 4.83584C8.1603 4.63152 8.69225 4.56354 9.20531 4.63936C9.67539 4.70883 10.1201 4.9503 10.8463 5.40912Z" fill="currentColor" /><path d="M14.5818 16.8932C14.7581 17.0722 14.8752 17.1985 14.981 17.3336C15.1207 17.5118 15.2456 17.7011 15.3544 17.8995C15.4769 18.1229 15.5721 18.3615 15.7623 18.8388C15.9172 19.2273 16.4317 19.33 16.7306 19.032L16.8029 18.9599C17.7665 17.9992 18.9235 16.8457 19.1558 16.289C19.3608 15.7981 19.429 15.2677 19.3529 14.7562C19.2832 14.2876 19.0411 13.8443 18.581 13.1204L16.386 15.3088C15.9748 15.7188 15.5977 16.0948 15.2567 16.3893C15.0523 16.5658 14.8287 16.7422 14.5818 16.8932Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M15.5023 14.3674L20.5319 9.35289C21.2563 8.63072 21.6185 8.26963 21.8092 7.81046C22 7.3513 22 6.84065 22 5.81937V5.33146C22 3.76099 22 2.97576 21.5106 2.48788C21.0213 2 20.2337 2 18.6585 2H18.1691C17.1447 2 16.6325 2 16.172 2.19019C15.7114 2.38039 15.3493 2.74147 14.6249 3.46364L9.59522 8.47817C8.74882 9.32202 8.224 9.84526 8.02078 10.3506C7.95657 10.5103 7.92446 10.6682 7.92446 10.8339C7.92446 11.5238 8.48138 12.0791 9.59522 13.1896L9.74492 13.3388L11.4985 11.5591C11.7486 11.3053 12.1571 11.3022 12.4109 11.5523C12.6647 11.8024 12.6678 12.2109 12.4177 12.4647L10.6587 14.2499L10.7766 14.3674C11.8905 15.4779 12.4474 16.0331 13.1394 16.0331C13.2924 16.0331 13.4387 16.006 13.5858 15.9518C14.1048 15.7607 14.6345 15.2325 15.5023 14.3674ZM17.8652 8.47854C17.2127 9.12904 16.1548 9.12904 15.5024 8.47854C14.8499 7.82803 14.8499 6.77335 15.5024 6.12284C16.1548 5.47233 17.2127 5.47233 17.8652 6.12284C18.5177 6.77335 18.5177 7.82803 17.8652 8.47854Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRocket2 as IconComponentType).keywords = [
  "rocket",
  "2",
  "rocket engine",
  "skyrocket",
  "rocket salad",
  "roquette",
  "arugula",
  "eruca sativa",
  "eruca vesicaria sativa",
  "garden rocket",
  "propellant",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out"
];

export default IconRocket2 as IconComponentType;