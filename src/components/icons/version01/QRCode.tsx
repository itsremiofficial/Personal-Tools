import { FC } from "react";

const IconQRCode: FC<IconProps> = ({
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
            d="M2 16.9005C2 15.5911 2 14.9364 2.29472 14.4555C2.45963 14.1864 2.68589 13.9601 2.955 13.7952C3.43594 13.5005 4.09063 13.5005 5.4 13.5005H6.5C8.38562 13.5005 9.32843 13.5005 9.91421 14.0863C10.5 14.6721 10.5 15.6149 10.5 17.5005V18.6005C10.5 19.9099 10.5 20.5645 10.2053 21.0455C10.0404 21.3146 9.81411 21.5409 9.545 21.7058C9.06406 22.0005 8.40937 22.0005 7.1 22.0005C5.13594 22.0005 4.15391 22.0005 3.4325 21.5584C3.02884 21.311 2.68945 20.9717 2.44208 20.568C2 19.8466 2 18.8645 2 16.9005Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M13.5 5.40049C13.5 4.09112 13.5 3.43643 13.7947 2.95549C13.9596 2.68638 14.1859 2.46012 14.455 2.29521C14.9359 2.00049 15.5906 2.00049 16.9 2.00049C18.8641 2.00049 19.8461 2.00049 20.5675 2.44257C20.9712 2.68993 21.3106 3.02933 21.5579 3.43299C22 4.1544 22 5.13643 22 7.10049C22 8.40986 22 9.06455 21.7053 9.54549C21.5404 9.8146 21.3141 10.0409 21.045 10.2058C20.5641 10.5005 19.9094 10.5005 18.6 10.5005H17.5C15.6144 10.5005 14.6716 10.5005 14.0858 9.9147C13.5 9.32892 13.5 8.38611 13.5 6.50049V5.40049Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M16.5 6.25049C16.5 5.73508 16.5 5.47738 16.6291 5.29542C16.6747 5.23121 16.7307 5.17515 16.7949 5.1296C16.9769 5.00049 17.2346 5.00049 17.75 5.00049C18.2654 5.00049 18.5231 5.00049 18.7051 5.1296C18.7693 5.17515 18.8253 5.23121 18.8709 5.29542C19 5.47738 19 5.73508 19 6.25049C19 6.7659 19 7.0236 18.8709 7.20556C18.8253 7.26976 18.7693 7.32582 18.7051 7.37138C18.5231 7.50049 18.2654 7.50049 17.75 7.50049C17.2346 7.50049 16.9769 7.50049 16.7949 7.37138C16.7307 7.32582 16.6747 7.26976 16.6291 7.20556C16.5 7.0236 16.5 6.7659 16.5 6.25049Z"
            fill="currentColor"
          />
          <path
            d="M19 13.5005H17C15.5955 13.5005 14.8933 13.5005 14.3889 13.8375C14.1705 13.9835 13.983 14.171 13.8371 14.3893C13.5 14.8938 13.5 15.596 13.5 17.0005"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M12.75 22.0005C12.75 22.4147 13.0858 22.7505 13.5 22.7505C13.9142 22.7505 14.25 22.4147 14.25 22.0005H12.75ZM12.75 19.0005V22.0005H14.25V19.0005H12.75Z"
            fill="currentColor"
          />
          <path
            d="M17 22.0005H19C19.9319 22.0005 20.3978 22.0005 20.7654 21.8482C21.2554 21.6453 21.6448 21.2559 21.8478 20.7659C22 20.3983 22 19.9324 22 19.0005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M22.75 13.5005C22.75 13.0863 22.4142 12.7505 22 12.7505C21.5858 12.7505 21.25 13.0863 21.25 13.5005H22.75ZM22.75 17.0005V13.5005H21.25V17.0005H22.75Z"
            fill="currentColor"
          />
          <path
            d="M2 7.10049C2 5.13643 2 4.1544 2.44208 3.43299C2.68945 3.02933 3.02884 2.68993 3.4325 2.44257C4.15391 2.00049 5.13594 2.00049 7.1 2.00049C8.40937 2.00049 9.06406 2.00049 9.545 2.29521C9.81411 2.46012 10.0404 2.68638 10.2053 2.95549C10.5 3.43643 10.5 4.09112 10.5 5.40049V6.50049C10.5 8.38611 10.5 9.32892 9.91421 9.9147C9.32843 10.5005 8.38562 10.5005 6.5 10.5005H5.4C4.09063 10.5005 3.43594 10.5005 2.955 10.2058C2.68589 10.0409 2.45963 9.8146 2.29472 9.54549C2 9.06455 2 8.40986 2 7.10049Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M5 6.25049C5 5.73508 5 5.47738 5.12911 5.29542C5.17466 5.23121 5.23072 5.17515 5.29493 5.1296C5.47689 5.00049 5.73459 5.00049 6.25 5.00049C6.76541 5.00049 7.02311 5.00049 7.20507 5.1296C7.26928 5.17515 7.32534 5.23121 7.37089 5.29542C7.5 5.47738 7.5 5.73508 7.5 6.25049C7.5 6.7659 7.5 7.0236 7.37089 7.20556C7.32534 7.26976 7.26928 7.32582 7.20507 7.37138C7.02311 7.50049 6.76541 7.50049 6.25 7.50049C5.73459 7.50049 5.47689 7.50049 5.29493 7.37138C5.23072 7.32582 5.17466 7.26976 5.12911 7.20556C5 7.0236 5 6.7659 5 6.25049Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M5 17.7505C5 17.2351 5 16.9774 5.12911 16.7954C5.17466 16.7312 5.23072 16.6752 5.29493 16.6296C5.47689 16.5005 5.73459 16.5005 6.25 16.5005C6.76541 16.5005 7.02311 16.5005 7.20507 16.6296C7.26928 16.6752 7.32534 16.7312 7.37089 16.7954C7.5 16.9774 7.5 17.2351 7.5 17.7505C7.5 18.2659 7.5 18.5236 7.37089 18.7056C7.32534 18.7698 7.26928 18.8258 7.20507 18.8714C7.02311 19.0005 6.76541 19.0005 6.25 19.0005C5.73459 19.0005 5.47689 19.0005 5.29493 18.8714C5.23072 18.8258 5.17466 18.7698 5.12911 18.7056C5 18.5236 5 18.2659 5 17.7505Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M16 17.7505C16 17.0483 16 16.6971 16.1685 16.4449C16.2415 16.3357 16.3352 16.242 16.4444 16.169C16.6967 16.0005 17.0478 16.0005 17.75 16.0005C18.4522 16.0005 18.8033 16.0005 19.0556 16.169C19.1648 16.242 19.2585 16.3357 19.3315 16.4449C19.5 16.6971 19.5 17.0483 19.5 17.7505C19.5 18.4527 19.5 18.8038 19.3315 19.0561C19.2585 19.1652 19.1648 19.259 19.0556 19.332C18.8033 19.5005 18.4522 19.5005 17.75 19.5005C17.0478 19.5005 16.6967 19.5005 16.4444 19.332C16.3352 19.259 16.2415 19.1652 16.1685 19.0561C16 18.8038 16 18.4527 16 17.7505Z"
            fill="currentColor"
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
          <g opacity={duotone ? "0.5" : "1"}>
            <path
              d="M10.5531 13.4474C10.1294 13.0237 9.60212 12.851 9.01812 12.7725C8.46484 12.6981 7.76789 12.6981 6.93209 12.6982L5.82717 12.6982C5.24648 12.6981 4.76184 12.6981 4.36823 12.7356C3.95674 12.7747 3.57325 12.8596 3.22152 13.0751C2.87731 13.2861 2.5879 13.5755 2.37697 13.9197C2.16142 14.2714 2.07653 14.6549 2.0374 15.0664C1.99998 15.46 1.99999 15.9447 2 16.5254V16.5937C1.99999 17.4774 1.99999 18.1902 2.05454 18.764C2.1108 19.3557 2.22996 19.8712 2.51405 20.3348C2.80168 20.8042 3.19632 21.1988 3.6657 21.4864C4.12929 21.7705 4.64482 21.8897 5.23653 21.9459C5.8103 22.0005 6.52304 22.0005 7.40683 22.0005H7.47507C8.05577 22.0005 8.54048 22.0005 8.9341 21.9631C9.34559 21.924 9.72907 21.8391 10.0808 21.6235C10.425 21.4126 10.7144 21.1232 10.9254 20.779C11.1409 20.4272 11.2258 20.0438 11.2649 19.6323C11.3024 19.2386 11.3023 18.754 11.3023 18.1733L11.3023 17.0684C11.3024 16.2326 11.3024 15.5356 11.228 14.9824C11.1495 14.3984 10.9768 13.8711 10.5531 13.4474Z"
              fill="currentColor"
            />
            <path
              d="M8.9341 2.03789C9.34559 2.07702 9.72907 2.16191 10.0808 2.37746C10.425 2.58839 10.7144 2.87779 10.9254 3.22201C11.1409 3.57374 11.2258 3.95722 11.2649 4.36872C11.3024 4.76232 11.3023 5.24707 11.3023 5.82775L11.3023 6.93261C11.3024 7.76839 11.3024 8.46533 11.228 9.01861C11.1495 9.6026 10.9768 10.1299 10.5531 10.5536C10.1294 10.9772 9.60212 11.15 9.01812 11.2285C8.46484 11.3029 7.76787 11.3028 6.93209 11.3028L5.82711 11.3028C5.24643 11.3028 4.76183 11.3028 4.36823 11.2654C3.95674 11.2263 3.57325 11.1414 3.22152 10.9258C2.87731 10.7149 2.5879 10.4255 2.37697 10.0813C2.16142 9.72956 2.07653 9.34608 2.0374 8.93458C1.99998 8.54096 1.99999 8.05628 2 7.47555V7.40728C1.99999 6.52351 1.99999 5.81078 2.05454 5.23702C2.1108 4.64531 2.22996 4.12978 2.51405 3.66619C2.80168 3.19681 3.19632 2.80217 3.6657 2.51454C4.12929 2.23045 4.64482 2.11129 5.23653 2.05503C5.81029 2.00047 6.52307 2.00048 7.40684 2.00049H7.4751C8.05583 2.00048 8.54047 2.00047 8.9341 2.03789Z"
              fill="currentColor"
            />
            <path
              d="M16.5932 2.00049H16.5249C15.9442 2.00048 15.4595 2.00047 15.0659 2.03789C14.6544 2.07702 14.2709 2.16191 13.9192 2.37746C13.575 2.58839 13.2856 2.87779 13.0746 3.22201C12.8591 3.57374 12.7742 3.95722 12.7351 4.36872C12.6976 4.76234 12.6977 5.24703 12.6977 5.82774L12.6977 6.93258C12.6976 7.76838 12.6976 8.46532 12.772 9.01861C12.8505 9.6026 13.0232 10.1299 13.4469 10.5536C13.8706 10.9772 14.3979 11.15 14.9819 11.2285C15.5352 11.3029 16.2321 11.3028 17.0679 11.3028L18.1728 11.3028C18.7535 11.3028 19.2382 11.3028 19.6318 11.2654C20.0433 11.2263 20.4267 11.1414 20.7785 10.9258C21.1227 10.7149 21.4121 10.4255 21.623 10.0813C21.8386 9.72956 21.9235 9.34608 21.9626 8.93458C22 8.54097 22 8.05636 22 7.47566V7.40732C22 6.52353 22 5.81078 21.9455 5.23702C21.8892 4.64531 21.77 4.12978 21.486 3.66619C21.1983 3.19681 20.8037 2.80217 20.3343 2.51454C19.8707 2.23045 19.3552 2.11129 18.7635 2.05503C18.1897 2.00047 17.477 2.00048 16.5932 2.00049Z"
              fill="currentColor"
            />
          </g>
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.0926 21.3029C14.0926 21.6882 13.7803 22.0006 13.3949 22.0006C13.0096 22.0006 12.6973 21.6882 12.6973 21.3029V18.5122H14.0926V21.3029Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M21.3022 12.6982C20.9169 12.6982 20.6045 13.0106 20.6045 13.3959V16.6517H21.9998V13.3959C21.9998 13.0106 21.6875 12.6982 21.3022 12.6982Z"
            fill="currentColor"
          />
          <path
            d="M16.0761 16.6178C16 16.8016 16 17.0345 16 17.5005C16 17.9664 16 18.1994 16.0761 18.3832C16.1776 18.6282 16.3723 18.8229 16.6173 18.9244C16.8011 19.0005 17.0341 19.0005 17.5 19.0005C17.9659 19.0005 18.1989 19.0005 18.3827 18.9244C18.6277 18.8229 18.8224 18.6282 18.9239 18.3832C19 18.1994 19 17.9664 19 17.5005C19 17.0345 19 16.8016 18.9239 16.6178C18.8224 16.3728 18.6277 16.1781 18.3827 16.0766C18.1989 16.0005 17.9659 16.0005 17.5 16.0005C17.0341 16.0005 16.8011 16.0005 16.6173 16.0766C16.3723 16.1781 16.1776 16.3728 16.0761 16.6178Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.7" : "1"}
            d="M21.9996 18.5357V18.5122H20.6042C20.6042 18.9552 20.6039 19.2525 20.5882 19.4827C20.5729 19.7066 20.5455 19.8157 20.5157 19.8874C20.3977 20.1723 20.1714 20.3987 19.8864 20.5167C19.8147 20.5464 19.7056 20.5739 19.4817 20.5891C19.2515 20.6049 18.9542 20.6052 18.5112 20.6052H16.6508V22.0006H18.5347C18.9482 22.0006 19.2933 22.0006 19.5767 21.9813C19.8717 21.9611 20.1503 21.9177 20.4204 21.8059C21.0472 21.5462 21.5452 21.0482 21.8049 20.4214C21.9168 20.1513 21.9601 19.8726 21.9803 19.5777C21.9996 19.2943 21.9996 18.9491 21.9996 18.5357Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.6" : "1"}
            d="M12.6973 16.6161V16.6517H14.0926C14.0926 15.984 14.0935 15.5357 14.1282 15.1939C14.1618 14.8638 14.2212 14.7113 14.2886 14.6104C14.3734 14.4834 14.4824 14.3744 14.6094 14.2896C14.7103 14.2221 14.8628 14.1628 15.1929 14.1292C15.5347 14.0944 15.983 14.0936 16.6508 14.0936H18.5112V12.6982H16.6151C15.9922 12.6982 15.4725 12.6982 15.0517 12.741C14.6113 12.7858 14.2025 12.8832 13.8342 13.1294C13.5549 13.316 13.315 13.5558 13.1284 13.8352C12.8823 14.2035 12.7848 14.6122 12.74 15.0527C12.6972 15.4734 12.6973 15.9932 12.6973 16.6161Z"
            fill="currentColor"
          />
          <path
            d="M5.50861 18.6908C5.72696 18.8457 6.03621 18.8457 6.65469 18.8457C7.27318 18.8457 7.58243 18.8457 7.80078 18.6908C7.87782 18.6361 7.9451 18.5688 7.99976 18.4918C8.15469 18.2734 8.15469 17.9642 8.15469 17.3457C8.15469 16.7272 8.15469 16.418 7.99976 16.1996C7.9451 16.1226 7.87782 16.0553 7.80078 16.0006C7.58243 15.8457 7.27316 15.8457 6.65468 15.8457C6.0362 15.8457 5.72696 15.8457 5.50861 16.0006C5.43156 16.0553 5.36429 16.1226 5.30962 16.1996C5.15469 16.418 5.15469 16.7272 5.15469 17.3457C5.15469 17.9642 5.15469 18.2734 5.30962 18.4918C5.36429 18.5688 5.43156 18.6361 5.50861 18.6908Z"
            fill="currentColor"
          />
          <path
            d="M6.65454 8.15527C6.03605 8.15527 5.72681 8.15527 5.50846 8.00034C5.43141 7.94568 5.36414 7.8784 5.30947 7.80136C5.15454 7.58301 5.15454 7.27376 5.15454 6.65527C5.15454 6.03678 5.15454 5.72754 5.30947 5.50919C5.36414 5.43214 5.43141 5.36487 5.50846 5.3102C5.72681 5.15527 6.03605 5.15527 6.65454 5.15527C7.27303 5.15527 7.58227 5.15527 7.80063 5.3102C7.87767 5.36487 7.94494 5.43214 7.99961 5.50919C8.15454 5.72754 8.15454 6.03678 8.15454 6.65527C8.15454 7.27376 8.15454 7.58301 7.99961 7.80136C7.94494 7.8784 7.87767 7.94568 7.80063 8.00034C7.58227 8.15527 7.27303 8.15527 6.65454 8.15527Z"
            fill="currentColor"
          />
          <path
            d="M16.1994 8.00073C16.4178 8.15566 16.727 8.15566 17.3455 8.15566C17.964 8.15566 18.2733 8.15566 18.4916 8.00073C18.5687 7.94606 18.6359 7.87879 18.6906 7.80175C18.8455 7.58339 18.8455 7.27415 18.8455 6.65566C18.8455 6.03717 18.8455 5.72793 18.6906 5.50958C18.6359 5.43253 18.5687 5.36526 18.4916 5.31059C18.2733 5.15566 17.964 5.15566 17.3455 5.15566C16.727 5.15566 16.4178 5.15566 16.1994 5.31059C16.1224 5.36526 16.0551 5.43253 16.0004 5.50958C15.8455 5.72793 15.8455 6.0372 15.8455 6.65568C15.8455 7.27415 15.8455 7.5834 16.0004 7.80175C16.0551 7.87879 16.1224 7.94606 16.1994 8.00073Z"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.5249 2.00049H16.5932C17.477 2.00048 18.1897 2.00047 18.7635 2.05503C19.3552 2.11129 19.8707 2.23045 20.3343 2.51454C20.8037 2.80217 21.1983 3.19681 21.486 3.66619C21.77 4.12978 21.8892 4.64531 21.9455 5.23702C22 5.81078 22 6.52353 22 7.40732V7.47566C22 8.05636 22 8.54097 21.9626 8.93458C21.9235 9.34608 21.8386 9.72956 21.623 10.0813C21.4121 10.4255 21.1227 10.7149 20.7785 10.9258C20.4267 11.1414 20.0433 11.2263 19.6318 11.2654C19.2382 11.3028 18.7535 11.3028 18.1728 11.3028L17.0679 11.3028C16.2321 11.3028 15.5352 11.3029 14.9819 11.2285C14.3979 11.15 13.8706 10.9772 13.4469 10.5536C13.0232 10.1299 12.8505 9.6026 12.772 9.01861C12.6976 8.46532 12.6976 7.76838 12.6977 6.93258L12.6977 5.82774C12.6977 5.24703 12.6976 4.76234 12.7351 4.36872C12.7742 3.95722 12.8591 3.57374 13.0746 3.22201C13.2856 2.87779 13.575 2.58839 13.9192 2.37746C14.2709 2.16191 14.6544 2.07702 15.0659 2.03789C15.4595 2.00047 15.9442 2.00048 16.5249 2.00049ZM17.3488 7.81444C16.8694 7.81444 16.6297 7.81444 16.4604 7.69434C16.4007 7.65196 16.3485 7.59981 16.3061 7.54009C16.186 7.37083 16.186 7.1311 16.186 6.65166C16.186 6.17222 16.186 5.93248 16.3061 5.76321C16.3485 5.70349 16.4007 5.65134 16.4604 5.60896C16.6297 5.48886 16.8694 5.48886 17.3488 5.48886C17.8283 5.48886 18.068 5.48886 18.2373 5.60896C18.297 5.65134 18.3491 5.70349 18.3915 5.76321C18.5116 5.93248 18.5116 6.1722 18.5116 6.65165C18.5116 7.1311 18.5116 7.37082 18.3915 7.54009C18.3491 7.59981 18.297 7.65196 18.2373 7.69434C18.068 7.81444 17.8283 7.81444 17.3488 7.81444Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.0808 2.37746C9.72907 2.16191 9.34559 2.07702 8.9341 2.03789C8.54047 2.00047 8.05583 2.00048 7.4751 2.00049H7.40684C6.52307 2.00048 5.81029 2.00047 5.23653 2.05503C4.64482 2.11129 4.12929 2.23045 3.6657 2.51454C3.19632 2.80217 2.80168 3.19681 2.51405 3.66619C2.22996 4.12978 2.1108 4.64531 2.05454 5.23702C1.99999 5.81078 1.99999 6.52351 2 7.40728V7.47555C1.99999 8.05628 1.99998 8.54096 2.0374 8.93458C2.07653 9.34608 2.16142 9.72956 2.37697 10.0813C2.5879 10.4255 2.87731 10.7149 3.22152 10.9258C3.57325 11.1414 3.95674 11.2263 4.36823 11.2654C4.76183 11.3028 5.24643 11.3028 5.82711 11.3028L6.93209 11.3028C7.76787 11.3028 8.46484 11.3029 9.01812 11.2285C9.60212 11.15 10.1294 10.9772 10.5531 10.5536C10.9768 10.1299 11.1495 9.6026 11.228 9.01861C11.3024 8.46533 11.3024 7.76839 11.3023 6.93261L11.3023 5.82775C11.3023 5.24707 11.3024 4.76232 11.2649 4.36872C11.2258 3.95722 11.1409 3.57374 10.9254 3.22201C10.7144 2.87779 10.425 2.58839 10.0808 2.37746ZM5.76273 7.69434C5.93199 7.81444 6.17171 7.81444 6.65116 7.81444C7.13061 7.81444 7.37034 7.81444 7.5396 7.69434C7.59933 7.65196 7.65148 7.59981 7.69385 7.54009C7.81395 7.37082 7.81395 7.1311 7.81395 6.65165C7.81395 6.1722 7.81395 5.93248 7.69385 5.76321C7.65148 5.70349 7.59933 5.65134 7.5396 5.60896C7.37034 5.48886 7.13061 5.48886 6.65116 5.48886C6.17171 5.48886 5.93199 5.48886 5.76273 5.60896C5.703 5.65134 5.65085 5.70349 5.60847 5.76321C5.48837 5.93248 5.48837 6.1722 5.48837 6.65165C5.48837 7.1311 5.48837 7.37082 5.60847 7.54009C5.65085 7.59981 5.703 7.65196 5.76273 7.69434Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.01812 12.7725C9.60212 12.851 10.1294 13.0237 10.5531 13.4474C10.9768 13.8711 11.1495 14.3984 11.228 14.9824C11.3024 15.5356 11.3024 16.2326 11.3023 17.0684L11.3023 18.1733C11.3023 18.754 11.3024 19.2386 11.2649 19.6323C11.2258 20.0438 11.1409 20.4272 10.9254 20.779C10.7144 21.1232 10.425 21.4126 10.0808 21.6235C9.72907 21.8391 9.34559 21.924 8.9341 21.9631C8.54048 22.0005 8.05577 22.0005 7.47507 22.0005H7.40683C6.52304 22.0005 5.8103 22.0005 5.23653 21.9459C4.64482 21.8897 4.12929 21.7705 3.6657 21.4864C3.19632 21.1988 2.80168 20.8042 2.51405 20.3348C2.22996 19.8712 2.1108 19.3557 2.05454 18.764C1.99999 18.1902 1.99999 17.4774 2 16.5937V16.5254C1.99999 15.9447 1.99998 15.46 2.0374 15.0664C2.07653 14.6549 2.16142 14.2714 2.37697 13.9197C2.5879 13.5755 2.87731 13.2861 3.22152 13.0751C3.57325 12.8596 3.95674 12.7747 4.36823 12.7356C4.76184 12.6981 5.24648 12.6981 5.82717 12.6982L6.93209 12.6982C7.76789 12.6981 8.46484 12.6981 9.01812 12.7725ZM6.65116 18.5121C6.17171 18.5121 5.93199 18.5121 5.76273 18.392C5.703 18.3496 5.65085 18.2975 5.60847 18.2378C5.48837 18.0685 5.48837 17.8288 5.48837 17.3493C5.48837 16.8699 5.48837 16.6302 5.60847 16.4609C5.65085 16.4012 5.703 16.349 5.76273 16.3066C5.93199 16.1865 6.17171 16.1865 6.65115 16.1865C7.13059 16.1865 7.37034 16.1865 7.5396 16.3066C7.59933 16.349 7.65148 16.4012 7.69385 16.4609C7.81395 16.6302 7.81395 16.8699 7.81395 17.3493C7.81395 17.8288 7.81395 18.0685 7.69385 18.2378C7.65148 18.2975 7.59933 18.3496 7.5396 18.392C7.37034 18.5121 7.13061 18.5121 6.65116 18.5121Z"
            fill="currentColor"
          />
          <path
            d="M12.6977 16.616V16.6516H14.093C14.093 15.9839 14.0939 15.5356 14.1286 15.1938C14.1622 14.8637 14.2216 14.7112 14.289 14.6103C14.3738 14.4833 14.4828 14.3743 14.6098 14.2895C14.7107 14.2221 14.8632 14.1627 15.1933 14.1291C15.5351 14.0944 15.9834 14.0935 16.6512 14.0935H18.5116V12.6982H16.6155C15.9926 12.6981 15.4729 12.6981 15.0521 12.7409C14.6117 12.7857 14.203 12.8831 13.8346 13.1293C13.5553 13.3159 13.3154 13.5558 13.1288 13.8351C12.8827 14.2034 12.7853 14.6122 12.7404 15.0526C12.6976 15.4734 12.6977 15.9931 12.6977 16.616Z"
            fill="currentColor"
          />
          <path
            d="M22 18.5356V18.5121H20.6046C20.6046 18.9551 20.6043 19.2524 20.5886 19.4826C20.5733 19.7065 20.5459 19.8156 20.5161 19.8873C20.3981 20.1722 20.1718 20.3986 19.8868 20.5166C19.8151 20.5464 19.706 20.5738 19.4821 20.5891C19.2519 20.6048 18.9546 20.6051 18.5116 20.6051H16.6512V22.0005H18.5351C18.9486 22.0005 19.2937 22.0005 19.5771 21.9812C19.8721 21.961 20.1507 21.9177 20.4208 21.8058C21.0476 21.5461 21.5456 21.0481 21.8053 20.4213C21.9172 20.1512 21.9606 19.8725 21.9807 19.5776C22 19.2942 22 18.9491 22 18.5356Z"
            fill="currentColor"
          />
          <path
            d="M14.093 21.3028C14.093 21.6881 13.7807 22.0005 13.3953 22.0005C13.01 22.0005 12.6977 21.6881 12.6977 21.3028V18.5121H14.093V21.3028Z"
            fill="currentColor"
          />
          <path
            d="M21.3023 12.6982C20.917 12.6982 20.6046 13.0105 20.6046 13.3958V16.6516H22V13.3958C22 13.0105 21.6876 12.6982 21.3023 12.6982Z"
            fill="currentColor"
          />
          <path
            d="M16.0761 16.6178C16 16.8016 16 17.0345 16 17.5005C16 17.9664 16 18.1994 16.0761 18.3832C16.1776 18.6282 16.3723 18.8229 16.6173 18.9244C16.8011 19.0005 17.0341 19.0005 17.5 19.0005C17.9659 19.0005 18.1989 19.0005 18.3827 18.9244C18.6277 18.8229 18.8224 18.6282 18.9239 18.3832C19 18.1994 19 17.9664 19 17.5005C19 17.0345 19 16.8016 18.9239 16.6178C18.8224 16.3728 18.6277 16.1781 18.3827 16.0766C18.1989 16.0005 17.9659 16.0005 17.5 16.0005C17.0341 16.0005 16.8011 16.0005 16.6173 16.0766C16.3723 16.1781 16.1776 16.3728 16.0761 16.6178Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconQRCode as IconComponent).keywords = [
  "code",
  "encode",
  "cypher",
  "encipher",
  "cipher",
  "encrypt",
  "computer code",
  "codification",
  "inscribe",
  "write in code",
];

export default IconQRCode as IconComponent;