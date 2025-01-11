import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconMagniferRounded: FC<IconProps> = ({
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
            opacity={duotone ? "0.5" : "1"}
            cx="11"
            cy="11.0005"
            r="9"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M21.812 20.9753C21.7493 21.0699 21.636 21.1833 21.4094 21.4099C21.1828 21.6365 21.0695 21.7498 20.9748 21.8125C20.4202 22.1798 19.6699 21.9905 19.3559 21.4041C19.3023 21.304 19.2563 21.1505 19.1643 20.8435C19.0638 20.508 19.0136 20.3403 19.0038 20.2223C18.9466 19.5273 19.5268 18.9471 20.2218 19.0043C20.3398 19.0141 20.5075 19.0643 20.843 19.1648C21.15 19.2568 21.3035 19.3028 21.4036 19.3564C21.99 19.6704 22.1793 20.4207 21.812 20.9753Z"
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
            d="M20.1278 11.1434C20.1278 16.1929 16.0697 20.2863 11.0639 20.2863C6.05804 20.2863 2 16.1929 2 11.1434C2 6.0939 6.05804 2.00049 11.0639 2.00049C16.0697 2.00049 20.1278 6.0939 20.1278 11.1434Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.8196 19.7006C17.7303 18.6064 18.6359 17.6929 19.7206 17.783C19.9087 17.7986 20.1339 17.867 20.3632 17.9367C20.3853 17.9435 20.4074 17.9502 20.4295 17.9569C20.4495 17.9629 20.4695 17.9689 20.4895 17.975C20.7003 18.0383 20.9099 18.1013 21.0693 18.1874C21.9846 18.6818 22.28 19.8631 21.7068 20.7363C21.6069 20.8884 21.452 21.0441 21.2963 21.2007C21.2815 21.2156 21.2668 21.2305 21.252 21.2454C21.2373 21.2602 21.2225 21.2752 21.2078 21.2901C21.0525 21.4471 20.8981 21.6034 20.7473 21.7041C19.8817 22.2823 18.7106 21.9843 18.2205 21.0611C18.1351 20.9002 18.0727 20.6888 18.0099 20.4762C18.0039 20.4561 17.9979 20.4359 17.9919 20.4157C17.9853 20.3934 17.9786 20.3711 17.972 20.3488C17.9029 20.1175 17.835 19.8903 17.8196 19.7006Z"
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
            d="M17.8194 19.7011C17.7302 18.6069 18.6357 17.6934 19.7205 17.7835C19.9086 17.7991 20.1337 17.8675 20.363 17.9372C20.3851 17.944 20.4073 17.9507 20.4294 17.9574C20.4494 17.9634 20.4694 17.9694 20.4894 17.9754C20.7001 18.0388 20.9097 18.1018 21.0692 18.1879C21.9844 18.6823 22.2799 19.8636 21.7067 20.7368C21.6068 20.8888 21.4519 21.0446 21.2962 21.2012C21.2814 21.2161 21.2666 21.231 21.2519 21.2458C21.2371 21.2607 21.2224 21.2756 21.2076 21.2906C21.0524 21.4476 20.898 21.6039 20.7472 21.7046C19.8816 22.2828 18.7105 21.9848 18.2204 21.0615C18.135 20.9007 18.0725 20.6893 18.0097 20.4767C18.0038 20.4566 17.9978 20.4364 17.9918 20.4162C17.9852 20.3939 17.9785 20.3715 17.9719 20.3493C17.9028 20.118 17.8349 19.8908 17.8194 19.7011Z"
            fill="currentColor"
          />
          <path
            d="M20.1278 11.1434C20.1278 16.1929 16.0697 20.2863 11.0639 20.2863C6.05804 20.2863 2 16.1929 2 11.1434C2 6.0939 6.05804 2.00049 11.0639 2.00049C16.0697 2.00049 20.1278 6.0939 20.1278 11.1434Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMagniferRounded as IconComponentType).keywords = [
  "magnifer",
  "rounded",
  "ringed",
  "ring-shaped",
  "annulate",
  "annular",
  "circular",
  "rotund",
  "bowfront",
  "prolate",
  "domed",
];

export default IconMagniferRounded as IconComponentType;