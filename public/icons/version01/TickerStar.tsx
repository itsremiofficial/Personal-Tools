import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconTickerStar: FC<IconProps> = ({
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
            opacity={duotone ? "0.5" : "1"}
            d="M14.0037 4.00049H9.9963C6.21809 4.00049 4.32899 4.00049 3.15525 5.17206C2.27661 6.04907 2.0557 7.32621 2.00016 9.49493C1.99304 9.77297 2.22121 9.99516 2.49076 10.0657C3.35074 10.2906 3.98521 11.0716 3.98521 12.0005C3.98521 12.9294 3.35074 13.7104 2.49076 13.9353C2.22121 14.0058 1.99304 14.228 2.00016 14.5061C2.0557 16.6748 2.27661 17.9519 3.15525 18.8289C4.32899 20.0005 6.21809 20.0005 9.9963 20.0005H14.0037C17.7819 20.0005 19.671 20.0005 20.8448 18.8289C21.7234 17.9519 21.9443 16.6748 21.9998 14.5061C22.007 14.228 21.7788 14.0058 21.5092 13.9353C20.6493 13.7104 20.0148 12.9294 20.0148 12.0005C20.0148 11.0716 20.6493 10.2906 21.5092 10.0657C21.7788 9.99516 22.007 9.77297 21.9998 9.49493C21.9443 7.32621 21.7234 6.04907 20.8448 5.17206C19.671 4.00049 17.7819 4.00049 14.0037 4.00049Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M11.1459 10.023C11.5259 9.34133 11.7159 9.00049 12 9.00049C12.2841 9.00049 12.4741 9.34133 12.8541 10.023L12.9524 10.1994C13.0603 10.3931 13.1143 10.4899 13.1985 10.5538C13.2827 10.6177 13.3875 10.6415 13.5972 10.6889L13.7881 10.7321C14.526 10.8991 14.895 10.9825 14.9828 11.2648C15.0706 11.5471 14.819 11.8412 14.316 12.4295L14.1858 12.5817C14.0429 12.7488 13.9714 12.8324 13.9392 12.9358C13.9071 13.0392 13.9179 13.1507 13.9395 13.3738L13.9592 13.5768C14.0352 14.3617 14.0733 14.7541 13.8435 14.9286C13.6136 15.103 13.2682 14.944 12.5773 14.6258L12.3986 14.5435C12.2022 14.4531 12.1041 14.4079 12 14.4079C11.8959 14.4079 11.7978 14.4531 11.6014 14.5435L11.4227 14.6258C10.7318 14.944 10.3864 15.103 10.1565 14.9286C9.92674 14.7541 9.96476 14.3617 10.0408 13.5768L10.0605 13.3738C10.0821 13.1507 10.0929 13.0392 10.0608 12.9358C10.0286 12.8324 9.95713 12.7488 9.81418 12.5817L9.68403 12.4295C9.18097 11.8412 8.92945 11.5471 9.01723 11.2648C9.10501 10.9825 9.47396 10.8991 10.2119 10.7321L10.4028 10.6889C10.6125 10.6415 10.7173 10.6177 10.8015 10.5538C10.8857 10.4899 10.9397 10.3931 11.0476 10.1994L11.1459 10.023Z"
            stroke="currentColor"
            strokeWidth={width}
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
            d="M14.0037 4.00049H9.9963C6.21809 4.00049 4.32899 4.00049 3.15525 5.17206C2.27661 6.04907 2.0557 7.32621 2.00016 9.49493C1.99304 9.77297 2.22121 9.99516 2.49076 10.0657C3.35074 10.2906 3.98521 11.0716 3.98521 12.0005C3.98521 12.9294 3.35074 13.7104 2.49076 13.9353C2.22121 14.0058 1.99304 14.228 2.00016 14.5061C2.0557 16.6748 2.27661 17.9519 3.15525 18.8289C4.32899 20.0005 6.21809 20.0005 9.9963 20.0005H14.0037C17.7819 20.0005 19.671 20.0005 20.8448 18.8289C21.7234 17.9519 21.9443 16.6748 21.9998 14.5061C22.007 14.228 21.7788 14.0058 21.5092 13.9353C20.6493 13.7104 20.0148 12.9294 20.0148 12.0005C20.0148 11.0716 20.6493 10.2906 21.5092 10.0657C21.7788 9.99516 22.007 9.77297 21.9998 9.49493C21.9443 7.32621 21.7234 6.04907 20.8448 5.17206C19.671 4.00049 17.7819 4.00049 14.0037 4.00049Z"
            fill="currentColor"
          />
          <path
            d="M12.9543 10.1994L12.8558 10.023C12.4751 9.34133 12.2848 9.00049 12.0002 9.00049C11.7156 9.00049 11.5252 9.34133 11.1445 10.023L11.1445 10.023L11.0461 10.1994C10.9379 10.3931 10.8838 10.4899 10.7994 10.5538C10.7151 10.6177 10.6101 10.6415 10.4 10.6889L10.2087 10.7321C9.46946 10.8991 9.09983 10.9825 9.01189 11.2648C8.92395 11.5471 9.17594 11.8412 9.67992 12.4295L9.81031 12.5817C9.95353 12.7488 10.0251 12.8324 10.0573 12.9358C10.0896 13.0392 10.0787 13.1507 10.0571 13.3738L10.0374 13.5768C9.96118 14.3617 9.92308 14.7541 10.1533 14.9286C10.3835 15.103 10.7296 14.944 11.4218 14.6258L11.6009 14.5435C11.7976 14.4531 11.8959 14.4079 12.0002 14.4079C12.1044 14.4079 12.2028 14.4531 12.3995 14.5435L12.5785 14.6258L12.5785 14.6258C13.2707 14.944 13.6168 15.103 13.847 14.9286C14.0773 14.7541 14.0392 14.3617 13.963 13.5768V13.5768L13.9433 13.3738V13.3737C13.9216 13.1507 13.9108 13.0392 13.943 12.9358C13.9752 12.8324 14.0468 12.7488 14.19 12.5817L14.3204 12.4295C14.8244 11.8412 15.0764 11.5471 14.9885 11.2648C14.9005 10.9825 14.5309 10.8991 13.7916 10.7321L13.6004 10.6889C13.3903 10.6415 13.2852 10.6177 13.2009 10.5538C13.1166 10.4899 13.0625 10.3931 12.9543 10.1994Z"
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
            d="M9.9963 4.00049H14.0037C17.7819 4.00049 19.671 4.00049 20.8448 5.17206C21.7234 6.04907 21.9443 7.32621 21.9998 9.49493C22.007 9.77297 21.7788 9.99516 21.5092 10.0657C20.6493 10.2906 20.0148 11.0716 20.0148 12.0005C20.0148 12.9294 20.6493 13.7104 21.5092 13.9353C21.7788 14.0058 22.007 14.228 21.9998 14.5061C21.9443 16.6748 21.7234 17.9519 20.8448 18.8289C19.671 20.0005 17.7819 20.0005 14.0037 20.0005H9.9963C6.21809 20.0005 4.32899 20.0005 3.15525 18.8289C2.27661 17.9519 2.0557 16.6748 2.00016 14.5061C1.99304 14.228 2.22121 14.0058 2.49076 13.9353C3.35074 13.7104 3.98521 12.9294 3.98521 12.0005C3.98521 11.0716 3.35074 10.2906 2.49076 10.0657C2.22121 9.99516 1.99304 9.77297 2.00016 9.49493C2.0557 7.32621 2.27661 6.04907 3.15525 5.17206C4.32899 4.00049 6.21809 4.00049 9.9963 4.00049ZM12.9541 10.1994L12.8556 10.023C12.4749 9.34133 12.2846 9.00049 12 9.00049C11.7154 9.00049 11.5251 9.34133 11.1444 10.023L11.0459 10.1994C10.9377 10.3931 10.8836 10.4899 10.7993 10.5538C10.7149 10.6177 10.6099 10.6415 10.3998 10.6889L10.2086 10.7321C9.46929 10.8991 9.09965 10.9825 9.01171 11.2648C8.92377 11.5471 9.17576 11.8412 9.67975 12.4295L9.81013 12.5817C9.95335 12.7488 10.025 12.8324 10.0572 12.9358C10.0894 13.0392 10.0786 13.1507 10.0569 13.3738L10.0372 13.5768C9.961 14.3617 9.9229 14.7541 10.1531 14.9286C10.3834 15.103 10.7295 14.944 11.4216 14.6258L11.6007 14.5435C11.7974 14.4531 11.8958 14.4079 12 14.4079C12.1042 14.4079 12.2026 14.4531 12.3993 14.5435L12.5784 14.6258C13.2705 14.944 13.6166 15.103 13.8469 14.9286C14.0771 14.7541 14.039 14.3617 13.9628 13.5768L13.9431 13.3738C13.9214 13.1507 13.9106 13.0392 13.9428 12.9358C13.975 12.8324 14.0466 12.7488 14.1899 12.5817L14.3203 12.4295C14.8242 11.8412 15.0762 11.5471 14.9883 11.2648C14.9003 10.9825 14.5307 10.8991 13.7914 10.7321L13.6002 10.6889C13.3901 10.6415 13.2851 10.6177 13.2007 10.5538C13.1164 10.4899 13.0623 10.3931 12.9541 10.1994Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTickerStar as IconComponentType).keywords = [
  "ticker",
  "star",
  "stock ticker",
  "watch",
  "pump",
  "heart",
  "indicator",
  "symbol",
  "code",
  "gauge",
  "coeur",
  "stellar",
  "asterisk",
  "lead",
  "leading",
  "maven",
  "sensation",
  "principal",
  "whizz",
  "headliner",
];

export default IconTickerStar as IconComponentType;