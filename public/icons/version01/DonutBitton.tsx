import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconDonutBitton: FC<IconProps> = ({
  className,
  fill = false,
  duotone = true,
  width = "1.5",
}) => {
  return (
    <>
      {!fill ? (
        <svg
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12.0001"
            r="3"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M14.5 7.00012L16 5.00012"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M19 7.00012L20 6.00012"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M12 5.00012L11 4.00012"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M10.5 7.00012L9.13397 7.36615"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M7 5.00012L6 4.00012"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M6.79245 9.14398L6.20722 7.85653"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M12.5 22.0001L12.5343 22.7493C12.811 22.7367 13.0582 22.5725 13.1772 22.3224C13.2963 22.0722 13.2677 21.7769 13.103 21.5542L12.5 22.0001ZM12.944 19.6277L13.3899 20.2308L12.944 19.6277ZM19.4787 14.7951L19.0327 14.192L19.4787 14.7951ZM14.6191 18.8553L15.2221 18.4094L15.2221 18.4094L14.6191 18.8553ZM15.3194 16.0054L15.7654 16.6084L15.3194 16.0054ZM18.2495 16.1705L18.8525 15.7245L18.8525 15.7245L18.2495 16.1705ZM21.6265 14.7169L21.14 15.2877C21.3346 15.4535 21.6002 15.5088 21.8447 15.4345C22.0893 15.3601 22.2792 15.1663 22.3484 14.9202L21.6265 14.7169ZM18.584 16.6228L17.9809 17.0687C18.1107 17.2442 18.3106 17.3545 18.5283 17.3707C18.746 17.3869 18.9599 17.3075 19.1143 17.1531L18.584 16.6228ZM18.6854 16.5213L19.2157 17.0517C19.3871 16.8803 19.4651 16.6366 19.4251 16.3975L18.6854 16.5213ZM14.6191 19.2911L14.3938 20.0065C14.6605 20.0905 14.9517 20.0192 15.1494 19.8215L14.6191 19.2911ZM14.8044 19.1059L15.3347 19.6362C15.5973 19.3736 15.6282 18.9585 15.4074 18.6599L14.8044 19.1059ZM12 21.2501C6.89137 21.2501 2.75 17.1088 2.75 12.0001H1.25C1.25 17.9372 6.06294 22.7501 12 22.7501V21.2501ZM2.75 12.0001C2.75 6.89149 6.89137 2.75012 12 2.75012V1.25012C6.06294 1.25012 1.25 6.06306 1.25 12.0001H2.75ZM12 2.75012C17.1086 2.75012 21.25 6.89149 21.25 12.0001H22.75C22.75 6.06306 17.9371 1.25012 12 1.25012V2.75012ZM13.103 21.5542C12.8699 21.239 12.9028 20.591 13.3899 20.2308L12.498 19.0247C11.3811 19.8507 11.1449 21.4291 11.897 22.4461L13.103 21.5542ZM15.2221 18.4094C14.9266 18.0098 14.9862 17.1846 15.7654 16.6084L14.8735 15.4024C13.6476 16.3089 13.0801 18.0357 14.0161 19.3013L15.2221 18.4094ZM15.7654 16.6084C16.5445 16.0322 17.351 16.2169 17.6465 16.6165L18.8525 15.7245C17.9165 14.4589 16.0993 14.4958 14.8735 15.4024L15.7654 16.6084ZM19.9246 15.3981C20.4213 15.0307 20.9259 15.1052 21.14 15.2877L22.1131 14.1461C21.2462 13.4073 19.9508 13.5131 19.0327 14.192L19.9246 15.3981ZM21.25 12.0001C21.25 12.8724 21.1295 13.7152 20.9046 14.5136L22.3484 14.9202C22.6102 13.9909 22.75 13.0112 22.75 12.0001H21.25ZM12.4657 21.2509C12.332 21.257 12.2017 21.2501 12 21.2501V22.7501C12.1103 22.7501 12.3595 22.7573 12.5343 22.7493L12.4657 21.2509ZM17.6465 16.6164L17.9809 17.0687L19.187 16.1768L18.8525 15.7245L17.6465 16.6164ZM19.4251 16.3975C19.3792 16.123 19.5124 15.7029 19.9246 15.3981L19.0327 14.192C18.2419 14.7769 17.7921 15.7278 17.9457 16.6451L19.4251 16.3975ZM19.1143 17.1531L19.2157 17.0517L18.1551 15.991L18.0536 16.0924L19.1143 17.1531ZM13.3899 20.2308C13.747 19.9666 14.1352 19.9251 14.3938 20.0065L14.8444 18.5758C14.0774 18.3342 13.1961 18.5085 12.498 19.0247L13.3899 20.2308ZM14.0161 19.3013L14.2014 19.5518L15.4074 18.6599L15.2221 18.4094L14.0161 19.3013ZM15.1494 19.8215L15.3347 19.6362L14.274 18.5755L14.0888 18.7608L15.1494 19.8215Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M2 13.0001C2 13.0001 4.20085 15.0001 6 15.0001C7.21199 15.0001 8.60628 14.0925 9.38725 13.5001"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M16 15.5001C15.5 15.0001 14.4713 14.6391 14 14.2238"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M16.6497 8.97673L16.7161 10.3894"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M20.6777 10.0851L18.9996 11.563"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M5.66477 12.6413L6.5 11.5001"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M3.68293 10.35L3.60427 8.93793"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
        </svg>
      ) : duotone ? (
        <svg
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M12 2.00012C6.47715 2.00012 2 6.47727 2 12.0001C2 12.3541 2.01839 12.7037 2.05426 13.0481C2.40307 13.3525 4.367 15.0001 6 15.0001C7.21199 15.0001 8.60628 14.0925 9.38725 13.5001L9.39619 13.4912C9.14413 13.0519 9 12.5429 9 12.0001C9 10.3433 10.3431 9.00012 12 9.00012C13.6569 9.00012 15 10.3433 15 12.0001C15 12.8852 14.6167 13.6808 14.007 14.2299C14.4774 14.6426 15.0911 15.0001 15.8053 15.0001C17.4948 15.0001 17.4948 13.0001 19.1842 13.0001C20.2618 13.0001 21.1102 13.8137 21.5835 14.4031L21.6758 14.5354C21.8874 13.7257 22 12.8761 22 12.0001C22 6.47727 17.5228 2.00012 12 2.00012Z"
            fill="currentColor"
          />
          <path
            d="M19.5276 5.41729C19.5076 5.4336 19.4881 5.4511 19.4694 5.46979L18.4694 6.46979C18.1765 6.76269 18.1765 7.23756 18.4694 7.53045C18.7623 7.82335 19.2372 7.82335 19.5301 7.53045L20.4345 6.62606C20.1625 6.20007 19.8591 5.79606 19.5276 5.41729Z"
            fill="currentColor"
          />
          <path
            d="M5.41692 4.47224C5.43323 4.49232 5.45073 4.51176 5.46943 4.53045L6.46943 5.53045C6.76232 5.82335 7.2372 5.82335 7.53009 5.53045C7.82298 5.23756 7.82298 4.76269 7.53009 4.46979L6.6257 3.5654C6.19971 3.83738 5.7957 4.14075 5.41692 4.47224Z"
            fill="currentColor"
          />
          <path
            d="M10.4694 4.53045C10.1765 4.23756 10.1765 3.76269 10.4694 3.46979C10.7623 3.1769 11.2372 3.1769 11.5301 3.46979L12.5301 4.46979C12.823 4.76269 12.823 5.23756 12.5301 5.53045C12.2372 5.82335 11.7623 5.82335 11.4694 5.53045L10.4694 4.53045Z"
            fill="currentColor"
          />
          <path
            d="M16.5998 5.45012C16.8483 5.11875 16.7811 4.64865 16.4498 4.40012C16.1184 4.15159 15.6483 4.21875 15.3998 4.55012L13.8998 6.55012C13.6512 6.88149 13.7184 7.35159 14.0498 7.60012C14.3811 7.84865 14.8512 7.78149 15.0998 7.45012L16.5998 5.45012Z"
            fill="currentColor"
          />
          <path
            d="M8.40929 7.56026C8.5165 7.96036 8.92775 8.1978 9.32785 8.09059L10.6939 7.72457C11.094 7.61736 11.3314 7.20611 11.2242 6.80601C11.117 6.40591 10.7057 6.16847 10.3056 6.27568L8.93962 6.6417C8.53952 6.74891 8.30208 7.16016 8.40929 7.56026Z"
            fill="currentColor"
          />
          <path
            d="M17.4651 10.3542C17.4845 10.7679 17.1649 11.1191 16.7511 11.1386C16.3373 11.158 15.9862 10.8383 15.9667 10.4246L15.9003 9.01194C15.8809 8.59818 16.2005 8.247 16.6143 8.22755C17.028 8.20811 17.3792 8.52776 17.3987 8.94152L17.4651 10.3542Z"
            fill="currentColor"
          />
          <path
            d="M18.4366 12.0587C18.7103 12.3695 19.1842 12.3996 19.4951 12.1258L21.1732 10.648C21.484 10.3742 21.5141 9.9003 21.2403 9.58945C20.9666 9.2786 20.4926 9.24854 20.1818 9.5223L18.5037 11.0001C18.1929 11.2739 18.1628 11.7478 18.4366 12.0587Z"
            fill="currentColor"
          />
          <path
            d="M5.52421 8.16689C5.3528 7.78981 5.51953 7.34517 5.89662 7.17376C6.2737 7.00235 6.71834 7.16909 6.88975 7.54617L7.47497 8.83361C7.64638 9.2107 7.47965 9.65534 7.10257 9.82675C6.72548 9.99815 6.28084 9.83142 6.10943 9.45434L5.52421 8.16689Z"
            fill="currentColor"
          />
          <path
            d="M6.94271 10.8951C7.27696 11.1398 7.34962 11.6091 7.10498 11.9433L6.26975 13.0845C6.02511 13.4188 5.55583 13.4914 5.22158 13.2468C4.88732 13.0022 4.81467 12.5329 5.0593 12.1986L5.89454 11.0574C6.13917 10.7232 6.60845 10.6505 6.94271 10.8951Z"
            fill="currentColor"
          />
          <path
            d="M2.85519 8.97941C2.83215 8.56583 3.14874 8.21189 3.56231 8.18885C3.97588 8.16581 4.32982 8.4824 4.35286 8.89597L4.43153 10.308C4.45457 10.7216 4.13798 11.0755 3.7244 11.0986C3.31083 11.1216 2.95689 10.805 2.93385 10.3914L2.85519 8.97941Z"
            fill="currentColor"
          />
          <path
            d="M5.99994 15.0001C7.21193 15.0001 8.60622 14.0925 9.38719 13.5001L9.39613 13.4912C9.91356 14.3928 10.8858 15.0001 11.9999 15.0001C12.7717 15.0001 13.4754 14.7087 14.007 14.2299C14.4774 14.6426 15.091 15.0001 15.8053 15.0001C16.65 15.0001 17.0724 14.5001 17.4947 14.0001C17.9171 13.5001 18.3395 13.0001 19.1842 13.0001C20.2617 13.0001 21.1102 13.8137 21.5834 14.4031L21.6757 14.5354C21.6599 14.5961 21.6435 14.6565 21.6265 14.7168C21.086 14.2561 20.1861 14.2718 19.4787 14.795C18.8772 15.2398 18.5857 15.9253 18.6854 16.5212L18.584 16.6227L18.2495 16.1704C17.6338 15.3378 16.322 15.2639 15.3195 16.0053C14.317 16.7467 14.0034 18.0226 14.6191 18.8552L14.8044 19.1058L14.6191 19.291C14.1063 19.1296 13.4716 19.2375 12.944 19.6276C12.1467 20.2173 12.0091 21.3208 12.4914 21.9882C12.3286 21.996 12.1648 22 12 22C6.83109 22 2.57808 18.0784 2.0542 13.0481C2.40301 13.3525 4.36694 15.0001 5.99994 15.0001Z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.2803 21.5539C12.0886 20.909 12.303 20.1021 12.9444 19.6277C13.4368 19.2636 14.0224 19.1453 14.5152 19.2624C14.58 19.2778 14.6491 19.2616 14.6961 19.2146C14.7586 19.1521 14.766 19.0533 14.7134 18.9822L14.6196 18.8553C14.0081 18.0284 14.3131 16.7642 15.2994 16.0207C15.1559 15.923 14.9975 15.818 14.8289 15.7076L14.6506 15.5912C14.4368 15.4519 14.2126 15.3057 14.0103 15.1666C13.4294 15.5361 12.7399 15.7501 12.0005 15.7501C10.9074 15.7501 9.92351 15.2824 9.23808 14.5362C8.83106 14.7573 8.35478 14.9797 7.86375 15.1711C7.06293 15.4832 6.12858 15.7501 5.33228 15.7501C4.30133 15.7501 3.23794 15.3037 2.41274 14.851C3.64009 18.9849 7.46817 22.0001 12.0005 22.0001C12.2138 22.0001 12.3411 21.7584 12.2803 21.5539Z"
            fill="currentColor"
          />
          <path
            d="M9.75049 12.0001C9.75049 10.7575 10.7578 9.75012 12.0005 9.75012C13.2431 9.75012 14.2505 10.7575 14.2505 12.0001C14.2505 12.6272 13.994 13.1944 13.5801 13.6024C13.5287 13.6372 13.4808 13.6791 13.4378 13.7279L13.4275 13.7398C13.0392 14.0587 12.5422 14.2501 12.0005 14.2501C10.7578 14.2501 9.75049 13.2428 9.75049 12.0001Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.4792 14.7951C20.1866 14.2719 21.0865 14.2562 21.627 14.7169C21.8703 13.853 22.0005 12.9418 22.0005 12.0001C22.0005 10.022 21.4261 8.17798 20.4351 6.62582L19.5304 7.53045C19.2375 7.82335 18.7626 7.82335 18.4698 7.53045C18.1769 7.23756 18.1769 6.76269 18.4698 6.46979L19.4698 5.46979C19.4885 5.45102 19.508 5.43346 19.5282 5.4171C17.6952 3.32278 15.0023 2.00012 12.0005 2.00012C10.0223 2.00012 8.17835 2.57449 6.62618 3.56556L7.53041 4.46979C7.82331 4.76269 7.82331 5.23756 7.53041 5.53045C7.23752 5.82335 6.76265 5.82335 6.46975 5.53045L5.46975 4.53045C5.45112 4.51182 5.43368 4.49245 5.41742 4.47244C3.32312 6.30543 2.00049 8.99832 2.00049 12.0001C2.00049 12.2845 2.01236 12.5661 2.03563 12.8444C2.25198 12.9979 2.51964 13.1771 2.81955 13.3558C3.63825 13.8434 4.57246 14.2501 5.33228 14.2501C5.8485 14.2501 6.57537 14.0633 7.3191 13.7735C7.73954 13.6096 8.13487 13.425 8.46368 13.2496C8.32561 12.8588 8.25049 12.4382 8.25049 12.0001C8.25049 9.92905 9.92942 8.25012 12.0005 8.25012C14.0716 8.25012 15.7505 9.92905 15.7505 12.0001C15.7505 12.7773 15.5141 13.4992 15.1093 14.0979C15.2235 14.1735 15.3483 14.2551 15.4814 14.3421L15.6505 14.4527C16.1277 14.7651 16.7133 15.1522 17.0308 15.4698C17.0439 15.4829 17.0564 15.4963 17.0683 15.5101C17.5434 15.5688 17.9691 15.7907 18.25 16.1705L18.5254 16.5429C18.5565 16.5849 18.6177 16.5895 18.6547 16.5525C18.6743 16.5329 18.683 16.5052 18.6793 16.4777C18.6005 15.8922 18.8922 15.2291 19.4792 14.7951ZM16.4501 4.40012C16.7815 4.64865 16.8486 5.11875 16.6001 5.45012L15.1001 7.45012C14.8516 7.78149 14.3815 7.84865 14.0501 7.60012C13.7187 7.35159 13.6516 6.88149 13.9001 6.55012L15.4001 4.55012C15.6486 4.21875 16.1187 4.15159 16.4501 4.40012ZM10.4698 3.46979C10.1769 3.76269 10.1769 4.23756 10.4698 4.53045L11.4698 5.53045C11.7626 5.82335 12.2375 5.82335 12.5304 5.53045C12.8233 5.23756 12.8233 4.76269 12.5304 4.46979L11.5304 3.46979C11.2375 3.1769 10.7626 3.1769 10.4698 3.46979ZM8.40961 7.56026C8.51682 7.96036 8.92807 8.1978 9.32817 8.09059L10.6942 7.72457C11.0943 7.61736 11.3317 7.20611 11.2245 6.80601C11.1173 6.40591 10.7061 6.16847 10.306 6.27568L8.93994 6.6417C8.53984 6.74891 8.30241 7.16016 8.40961 7.56026ZM5.89694 7.17376C5.51986 7.34517 5.35313 7.78981 5.52453 8.16689L6.10976 9.45434C6.28117 9.83142 6.72581 9.99815 7.10289 9.82675C7.47998 9.65534 7.64671 9.2107 7.4753 8.83361L6.89007 7.54617C6.71867 7.16909 6.27403 7.00235 5.89694 7.17376ZM16.7514 11.1386C17.1652 11.1191 17.4848 10.7679 17.4654 10.3542L17.399 8.94152C17.3795 8.52776 17.0284 8.20811 16.6146 8.22755C16.2008 8.247 15.8812 8.59818 15.9006 9.01194L15.967 10.4246C15.9865 10.8383 16.3377 11.158 16.7514 11.1386ZM18.4369 12.0587C18.7106 12.3695 19.1846 12.3996 19.4954 12.1258L21.1735 10.648C21.4843 10.3742 21.5144 9.9003 21.2406 9.58945C20.9669 9.2786 20.493 9.24854 20.1821 9.5223L18.504 11.0001C18.1932 11.2739 18.1631 11.7478 18.4369 12.0587ZM6.94303 10.8949C7.27729 11.1395 7.34994 11.6088 7.10531 11.9431L6.27007 13.0843C6.02544 13.4185 5.55616 13.4912 5.2219 13.2466C4.88765 13.0019 4.81499 12.5326 5.05963 12.1984L5.89486 11.0572C6.13949 10.7229 6.60878 10.6503 6.94303 10.8949ZM3.56263 8.18909C3.14906 8.21213 2.83247 8.56608 2.85551 8.97965L2.93417 10.3917C2.95721 10.8052 3.31116 11.1218 3.72473 11.0988C4.1383 11.0758 4.45489 10.7218 4.43185 10.3082L4.35319 8.89622C4.33015 8.48264 3.97621 8.16605 3.56263 8.18909Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDonutBitton as IconComponentType).keywords = [
  "donut",
  "bitton",
  "doughnut",
  "sinker",
  "jelly",
  "bagel",
  "pillow",
  "cushion",
  "slap",
  "doughnuts",
  "cruller",
  "jackson",
  "jarrell",
  "mitton",
  "tippett",
  "shockley",
  "sorensen",
  "grimshaw",
  "litton",
  "blanck",
];

export default IconDonutBitton as IconComponentType;
