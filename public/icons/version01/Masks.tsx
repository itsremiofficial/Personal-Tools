import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconMasks: FC<IconProps> = ({
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
          <path
            d="M16.7582 12.6766L15.9131 9.37926C15.4725 7.66038 15.2522 6.80094 14.677 6.36888C14.4841 6.22403 14.268 6.11656 14.0388 6.05159C13.3551 5.85777 12.5782 6.22163 11.0242 6.94934C9.87347 7.48822 9.29811 7.75765 8.69774 7.94822C8.48901 8.01448 8.27824 8.07352 8.06578 8.12524C7.4547 8.27402 6.82756 8.34142 5.57328 8.47622C3.87945 8.65827 3.03253 8.74929 2.53319 9.27447C2.36579 9.45054 2.22999 9.6566 2.13226 9.88284C1.84073 10.5577 2.06102 11.4171 2.50159 13.136L3.34673 16.4334C4.34019 20.3093 7.64328 21.5286 9.86292 21.9058C10.5401 22.0208 10.8787 22.0784 11.907 21.7903C12.9353 21.5023 13.201 21.2755 13.7324 20.8219C15.4742 19.335 17.7517 16.5526 16.7582 12.6766Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M16.5 17.221C18.2412 16.4706 19.9791 15.0638 20.6533 12.4334L21.4984 9.13602C21.939 7.41713 22.1593 6.55769 21.8678 5.88284C21.77 5.6566 21.6342 5.45054 21.4668 5.27447C20.9675 4.74929 20.1206 4.65827 18.4267 4.47622C17.1725 4.34142 16.5453 4.27402 15.9342 4.12524C15.7218 4.07352 15.511 4.01448 15.3023 3.94822C14.7019 3.75765 14.1266 3.48822 12.9758 2.94934C11.4219 2.22163 10.6449 1.85777 9.96126 2.05159C9.73208 2.11656 9.51592 2.22403 9.32307 2.36888C8.74783 2.80094 8.52754 3.66038 8.08698 5.37926L7.38745 8.10846"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M5.25882 13.2955C5.31893 12.6763 5.77997 12.1206 6.44889 11.9414C7.11781 11.7621 7.79491 12.0128 8.1566 12.5191"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M19.1797 8.93565C19.1195 8.3164 18.6585 7.76073 17.9896 7.5815C17.3207 7.40226 16.6436 7.65296 16.2819 8.1592"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M11.0547 11.7423C11.1148 11.123 11.5759 10.5674 12.2448 10.3881C12.9137 10.2089 13.5908 10.4596 13.9525 10.9658"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M11.0963 7.04199C10.8555 7.37902 10.3871 7.45703 10.05 7.21623C9.71299 6.97543 9.63498 6.50701 9.87578 6.16998L11.0963 7.04199ZM11.9996 6.75273C11.6209 6.65125 11.2692 6.79999 11.0963 7.04199L9.87578 6.16998C10.4263 5.39951 11.4287 5.04684 12.3879 5.30384L11.9996 6.75273ZM12.4781 7.06556C12.3675 6.9229 12.2041 6.80751 11.9996 6.75273L12.3879 5.30384C12.9124 5.4444 13.3545 5.74788 13.6635 6.14641L12.4781 7.06556Z"
            fill="currentColor"
          />
          <path
            d="M13.2007 16.231C13.2007 16.231 12.1758 15.4703 10.3884 15.9492C8.60094 16.4282 8.09372 17.5994 8.09372 17.5994"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.9131 9.37926L16.7582 12.6766C17.7517 16.5526 15.4742 19.335 13.7324 20.8219C13.201 21.2755 12.9353 21.5023 11.907 21.7903C10.8787 22.0784 10.5401 22.0208 9.86292 21.9058C7.64328 21.5286 4.34019 20.3093 3.34673 16.4334L2.50159 13.136C2.06102 11.4171 1.84073 10.5577 2.13226 9.88284C2.22999 9.6566 2.36579 9.45054 2.53319 9.27447C3.03253 8.74929 3.87944 8.65827 5.57328 8.47622C6.82756 8.34142 7.45471 8.27402 8.06578 8.12524C8.27824 8.07352 8.48901 8.01448 8.69774 7.94822C9.29811 7.75765 9.87347 7.48822 11.0242 6.94934C12.5782 6.22163 13.3551 5.85777 14.0388 6.05159C14.268 6.11656 14.4841 6.22403 14.677 6.36888C15.2522 6.80094 15.4725 7.66038 15.9131 9.37926ZM6.00531 13.368C6.03405 13.072 6.2643 12.7673 6.643 12.6658C7.02171 12.5643 7.37345 12.7131 7.54635 12.9551C7.78715 13.2921 8.25557 13.3701 8.5926 13.1293C8.92963 12.8885 9.00764 12.4201 8.76684 12.0831C8.21636 11.3126 7.2139 10.9599 6.25477 11.2169C5.29565 11.4739 4.60382 12.2806 4.51233 13.223C4.47231 13.6353 4.77408 14.002 5.18635 14.042C5.59863 14.082 5.96529 13.7803 6.00531 13.368ZM12.4389 11.1126C12.0602 11.2141 11.8299 11.5187 11.8012 11.8148C11.7612 12.227 11.3945 12.5288 10.9823 12.4888C10.57 12.4488 10.2682 12.0821 10.3082 11.6698C10.3997 10.7273 11.0915 9.92069 12.0507 9.66369C13.0098 9.4067 14.0123 9.75936 14.5627 10.5298C14.8035 10.8669 14.7255 11.3353 14.3885 11.5761C14.0515 11.8169 13.583 11.7389 13.3422 11.4018C13.1693 11.1598 12.8176 11.0111 12.4389 11.1126ZM13.2012 16.231L13.6482 15.6287C13.9808 15.8756 14.0503 16.3453 13.8034 16.6779C13.5588 17.0075 13.0954 17.0788 12.7634 16.84L12.7537 16.8337C12.7394 16.8247 12.7113 16.8077 12.6699 16.7864C12.587 16.7438 12.4521 16.6841 12.2687 16.6343C11.9071 16.536 11.3392 16.4711 10.583 16.6737C9.82678 16.8763 9.36744 17.2165 9.10341 17.4824C8.96952 17.6172 8.8825 17.7364 8.83206 17.8148C8.80687 17.8539 8.79097 17.8826 8.78307 17.8976L8.7778 17.9079C8.60966 18.2807 8.17273 18.4507 7.79614 18.2876C7.41605 18.123 7.24136 17.6814 7.40598 17.3013L8.09421 17.5994C7.40598 17.3013 7.40581 17.3017 7.40598 17.3013L7.40667 17.2997L7.40741 17.298L7.40905 17.2943L7.41298 17.2855L7.42353 17.2629C7.43177 17.2457 7.44249 17.2241 7.45591 17.1986C7.48274 17.1477 7.52043 17.0811 7.57071 17.003C7.67124 16.8468 7.82274 16.6433 8.03909 16.4254C8.47553 15.9859 9.16352 15.5011 10.1948 15.2248C11.226 14.9485 12.0642 15.0244 12.6619 15.1867C12.9582 15.2672 13.1912 15.3677 13.3563 15.4527C13.439 15.4953 13.5049 15.534 13.5536 15.5647C13.5779 15.5801 13.598 15.5934 13.6138 15.6043L13.6342 15.6186L13.642 15.6242L13.6453 15.6266L13.6468 15.6277L13.6482 15.6287C13.6485 15.629 13.6482 15.6287 13.2012 16.231Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.6" : "1"}
            d="M20.6525 12.4334L21.4976 9.13602C21.9382 7.41716 22.1585 6.55769 21.8669 5.88284C21.7692 5.6566 21.6334 5.45054 21.466 5.27447C20.9667 4.74929 20.1197 4.65827 18.4259 4.47622C17.1716 4.34142 16.5445 4.27402 15.9334 4.12524C15.721 4.07352 15.5102 4.01448 15.3015 3.94822C14.7011 3.75765 14.1257 3.48822 12.975 2.94934C11.421 2.22163 10.644 1.85777 9.96042 2.05159C9.73124 2.11656 9.51508 2.22403 9.32224 2.36888C8.747 2.80094 8.52671 3.66038 8.08614 5.37926L7.38662 8.10846L7.34204 8.2657C7.60675 8.22507 7.83734 8.18083 8.06568 8.12524C8.27814 8.07352 8.48891 8.01448 8.69764 7.94822C9.29801 7.75765 9.87336 7.48822 11.0241 6.94935C12.578 6.22163 13.355 5.85777 14.0387 6.05159C14.2678 6.11656 14.484 6.22403 14.6769 6.36888C15.2521 6.80094 15.4724 7.66038 15.913 9.37926L16.7581 12.6766C17.203 14.4124 16.9919 15.9289 16.4667 17.208L16.4992 17.221C18.2403 16.4706 19.9783 15.0638 20.6525 12.4334Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.6" : "1"}
            d="M15.7286 8.66554C15.7633 8.70346 15.8025 8.73836 15.8461 8.76946C16.1831 9.01026 16.6515 8.93224 16.8923 8.59521C17.0652 8.35322 17.417 8.20448 17.7957 8.30596C18.1744 8.40743 18.4046 8.71211 18.4334 9.00814C18.4734 9.42041 18.84 9.72218 19.2523 9.68216C19.6646 9.64214 19.9664 9.27548 19.9263 8.8632C19.8349 7.92071 19.143 7.11407 18.1839 6.85707C17.2248 6.60007 16.2223 6.95274 15.6718 7.72321C15.609 7.81119 15.5678 7.90813 15.5474 8.00764C15.6059 8.20709 15.6654 8.42576 15.7286 8.66554Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.6" : "1"}
            d="M10.2402 7.31496C10.4702 7.20876 10.7282 7.08797 11.0242 6.94935C12.2202 6.38926 12.956 6.0447 13.5432 6.00406C13.2441 5.67583 12.8474 5.42715 12.3872 5.30385C11.4281 5.04685 10.4256 5.39951 9.87516 6.16998C9.63436 6.50701 9.71238 6.97544 10.0494 7.21623C10.1095 7.25916 10.1738 7.29196 10.2402 7.31496Z"
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
            d="M21.5366 9.13602L20.6914 12.4334C20.2619 14.1092 19.3848 15.2884 18.3546 16.1176C18.5739 14.974 18.569 13.7001 18.2112 12.3042L17.3472 8.93331C17.296 8.73345 17.2459 8.53801 17.1966 8.34978C17.3679 8.27209 17.5772 8.24746 17.7955 8.30594C18.1742 8.40742 18.4044 8.7121 18.4332 9.00812C18.4732 9.42039 18.8398 9.72217 19.2521 9.68214C19.6644 9.64212 19.9662 9.27546 19.9261 8.86319C19.8347 7.9207 19.1428 7.11405 18.1837 6.85705C17.7011 6.72773 17.2074 6.75278 16.766 6.90777L16.7494 6.86317C16.5249 6.26679 16.1968 5.63442 15.5778 5.16951C15.2393 4.91528 14.8568 4.7244 14.4479 4.60846C13.6893 4.39339 12.9853 4.53161 12.3843 4.73161C11.8259 4.9174 11.1749 5.22232 10.4597 5.55734L10.388 5.59092C9.20344 6.14565 8.72944 6.3644 8.2439 6.51852C8.09652 6.5653 7.94799 6.6078 7.79848 6.64598L8.12513 5.37926C8.5657 3.66038 8.78598 2.80094 9.36122 2.36888C9.55407 2.22403 9.77023 2.11656 9.99941 2.05159C10.683 1.85777 11.46 2.22163 13.014 2.94934C14.1647 3.48822 14.7401 3.75765 15.3404 3.94822C15.5492 4.01448 15.7599 4.07352 15.9724 4.12524C16.5835 4.27402 17.2106 4.34142 18.4649 4.47622C20.1587 4.65827 21.0057 4.74929 21.505 5.27447C21.6724 5.45054 21.8082 5.6566 21.9059 5.88284C22.1974 6.55769 21.9772 7.41713 21.5366 9.13602Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.7582 12.6766L15.9131 9.37926C15.4725 7.66038 15.2522 6.80094 14.677 6.36888C14.4841 6.22403 14.268 6.11656 14.0388 6.05158C13.3551 5.85777 12.5782 6.22163 11.0242 6.94934C9.87347 7.48821 9.29811 7.75765 8.69774 7.94822C8.48901 8.01448 8.27824 8.07352 8.06578 8.12524C7.45471 8.27401 6.82757 8.34142 5.5733 8.47622C3.87946 8.65827 3.03253 8.74929 2.53319 9.27447C2.36579 9.45054 2.22999 9.6566 2.13226 9.88284C1.84073 10.5577 2.06102 11.4171 2.50159 13.136L3.34673 16.4334C4.34019 20.3093 7.64328 21.5286 9.86292 21.9058C10.5401 22.0208 10.8787 22.0784 11.907 21.7903C12.9353 21.5023 13.201 21.2755 13.7324 20.8219C15.4742 19.335 17.7517 16.5526 16.7582 12.6766ZM6.00531 13.368C6.03405 13.072 6.2643 12.7673 6.643 12.6658C7.02171 12.5643 7.37345 12.7131 7.54635 12.9551C7.78715 13.2921 8.25557 13.3701 8.5926 13.1293C8.92963 12.8885 9.00764 12.4201 8.76684 12.0831C8.21636 11.3126 7.2139 10.9599 6.25477 11.2169C5.29565 11.4739 4.60382 12.2806 4.51233 13.223C4.47231 13.6353 4.77408 14.002 5.18635 14.042C5.59863 14.082 5.96529 13.7803 6.00531 13.368ZM11.8012 11.8148C11.8299 11.5187 12.0602 11.2141 12.4389 11.1126C12.8176 11.0111 13.1693 11.1598 13.3422 11.4018C13.583 11.7389 14.0515 11.8169 14.3885 11.5761C14.7255 11.3353 14.8035 10.8669 14.5627 10.5298C14.0123 9.75936 13.0098 9.4067 12.0507 9.66369C11.0915 9.92069 10.3997 10.7273 10.3082 11.6698C10.2682 12.0821 10.57 12.4488 10.9823 12.4888C11.3945 12.5288 11.7612 12.227 11.8012 11.8148ZM13.6472 15.6287C13.9798 15.8756 14.0493 16.3453 13.8024 16.6779C13.5579 17.0075 13.0945 17.0788 12.7625 16.84L12.7527 16.8337C12.7384 16.8247 12.7103 16.8077 12.6689 16.7864C12.586 16.7438 12.4511 16.6841 12.2677 16.6343C11.9061 16.536 11.3382 16.4711 10.582 16.6737C9.82581 16.8763 9.36646 17.2165 9.10243 17.4824C8.96854 17.6172 8.88152 17.7364 8.83109 17.8148C8.80589 17.8539 8.78999 17.8826 8.78209 17.8976L8.77682 17.9079C8.60869 18.2807 8.17175 18.4507 7.79517 18.2876C7.41507 18.123 7.24039 17.6814 7.405 17.3013L8.09323 17.5994C7.405 17.3013 7.40569 17.2997 7.40569 17.2997L7.40643 17.298L7.40807 17.2943L7.41201 17.2855L7.42255 17.2629C7.43079 17.2457 7.44152 17.2241 7.45494 17.1986C7.48176 17.1477 7.51945 17.0811 7.56974 17.003C7.67026 16.8468 7.82176 16.6433 8.03811 16.4254C8.47455 15.9859 9.16254 15.5011 10.1938 15.2248C11.225 14.9485 12.0632 15.0244 12.6609 15.1867C12.9572 15.2672 13.1902 15.3677 13.3554 15.4527C13.438 15.4953 13.5039 15.534 13.5526 15.5647C13.5769 15.5801 13.597 15.5934 13.6128 15.6043L13.6332 15.6186L13.641 15.6242L13.6443 15.6266L13.6458 15.6277L13.6472 15.6287Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMasks as IconComponentType).keywords = [
  "masks",
  "cloak",
  "masquerade",
  "masque",
  "block out",
  "dissemble",
  "belies",
  "cloaks",
  "conceals",
  "disguises",
];

export default IconMasks as IconComponentType;
