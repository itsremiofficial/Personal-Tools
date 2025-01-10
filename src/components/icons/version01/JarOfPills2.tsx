import { FC } from "react";

const IconJarOfPills2: FC<IconProps> = ({
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
            d="M4 3.50024C4 3.0343 4 2.80133 4.07612 2.61756C4.17761 2.37253 4.37229 2.17786 4.61732 2.07636C4.80109 2.00024 5.03406 2.00024 5.5 2.00024H14.5C14.9659 2.00024 15.1989 2.00024 15.3827 2.07636C15.6277 2.17786 15.8224 2.37253 15.9239 2.61756C16 2.80133 16 3.0343 16 3.50024C16 3.96619 16 4.19916 15.9239 4.38293C15.8224 4.62796 15.6277 4.82263 15.3827 4.92412C15.1989 5.00024 14.9659 5.00024 14.5 5.00024H5.5C5.03406 5.00024 4.80109 5.00024 4.61732 4.92412C4.37229 4.82263 4.17761 4.62796 4.07612 4.38293C4 4.19916 4 3.96619 4 3.50024Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M2.5 18.0002H10.5"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M2.5 10.0002H17.5"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M10.5 22.0002H6.95693C6.38582 22.0002 6.10026 22.0002 5.82957 21.9631C5.02661 21.8529 4.27608 21.5013 3.67738 20.9551C3.47554 20.7709 3.29272 20.5515 2.92711 20.1128C2.32806 19.3939 2 18.4878 2 17.552V10.9227C2 9.70761 2.55236 8.55836 3.50122 7.79927L5.90434 5.87677C6.44688 5.44274 6.71814 5.22573 7.03955 5.11299C7.36095 5.00024 7.70834 5.00024 8.40312 5.00024H11.6427C12.3438 5.00024 12.6943 5.00024 13.0182 5.11491C13.3421 5.22957 13.6146 5.45014 14.1595 5.89126L16.5168 7.79955C17.455 8.55901 18 9.7015 18 10.9085V12.5002"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M10 12.0002V16.0002M8 14.0002L12 14.0002"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M14.7726 16.7729C14.7726 16.7729 15.7648 16.9836 16.8908 18.1096C18.0169 19.2356 18.2274 20.2276 18.2274 20.2276M19.2638 15.7365C20.2178 16.6905 20.2487 18.2063 19.3329 19.1221L17.1218 21.3331C16.206 22.2489 14.6902 22.218 13.7362 21.264C12.7822 20.31 12.7513 18.7942 13.6671 17.8784L15.8782 15.6674C16.794 14.7516 18.3098 14.7825 19.2638 15.7365Z"
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
            d="M6 3.50024C6 3.0343 6 2.80133 6.07612 2.61756C6.17761 2.37253 6.37229 2.17786 6.61732 2.07636C6.80109 2.00024 7.03406 2.00024 7.5 2.00024H16.5C16.9659 2.00024 17.1989 2.00024 17.3827 2.07636C17.6277 2.17786 17.8224 2.37253 17.9239 2.61756C18 2.80133 18 3.0343 18 3.50024C18 3.96619 18 4.19916 17.9239 4.38293C17.8224 4.62796 17.6277 4.82263 17.3827 4.92412C17.1989 5.00024 16.9659 5.00024 16.5 5.00024H7.5C7.03406 5.00024 6.80109 5.00024 6.61732 4.92412C6.37229 4.82263 6.17761 4.62796 6.07612 4.38293C6 4.19916 6 3.96619 6 3.50024Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 11.2502C12.4142 11.2502 12.75 11.586 12.75 12.0002V13.2502H14C14.4142 13.2502 14.75 13.586 14.75 14.0002C14.75 14.4145 14.4142 14.7502 14 14.7502H12.75V16.0002C12.75 16.4145 12.4142 16.7502 12 16.7502C11.5858 16.7502 11.25 16.4145 11.25 16.0002V14.7502H10C9.58579 14.7502 9.25 14.4145 9.25 14.0002C9.25 13.586 9.58579 13.2502 10 13.2502H11.25V12.0002C11.25 11.586 11.5858 11.2502 12 11.2502Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M15.8782 15.6674L13.6671 17.8784C12.7513 18.7942 12.7822 20.31 13.7362 21.264C14.6902 22.218 16.206 22.2489 17.1218 21.3331L19.3329 19.1221C20.2487 18.2063 20.2178 16.6905 19.2638 15.7365C18.3098 14.7825 16.794 14.7516 15.8782 15.6674Z"
            fill="currentColor"
          />
          <path
            d="M9.00021 5.00024L5.50143 7.79927C4.79757 8.36236 4.31189 9.14014 4.108 10.0002H19.8958C19.6956 9.14206 19.2152 8.36474 18.517 7.79955L16.1597 5.89126L15.0184 5.00024H9.00021Z"
            fill="currentColor"
          />
          <path
            d="M4.92732 20.1128C4.42455 19.5094 4.11265 18.7742 4.02539 18.0002H11.8042C11.2442 19.3098 11.4686 20.8611 12.3847 22.0002H8.95713C8.38603 22.0002 8.10047 22.0002 7.82977 21.9631C7.02682 21.8529 6.27629 21.5013 5.67759 20.9551C5.47575 20.7709 5.29293 20.5515 4.92732 20.1128Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M4 17.552V10.9227C4 10.609 4.03683 10.2996 4.10779 10.0002H19.8955C19.9643 10.2952 20 10.5998 20 10.9085V14.3845C18.4889 13.1696 16.2529 13.1715 14.8177 14.6067L12.6067 16.8177C12.2534 17.1709 11.987 17.5727 11.8042 18.0002H4.02518C4.00847 17.852 4 17.7024 4 17.552Z"
            fill="currentColor"
          />
          <path
            d="M18.8208 19.6342C18.7777 19.5246 18.7225 19.3977 18.6525 19.2569C18.4263 18.802 18.0462 18.2046 17.4208 17.5793C16.7955 16.954 16.198 16.5738 15.7432 16.3475C15.6025 16.2776 15.4758 16.2224 15.3663 16.1793L14.1401 17.4054L14.6094 17.5051L14.6207 17.508C14.636 17.5122 14.6646 17.5204 14.705 17.5341C14.7858 17.5613 14.9133 17.6101 15.0751 17.6905C15.3978 17.8511 15.8595 18.1393 16.3602 18.64C16.8608 19.1406 17.149 19.6022 17.3095 19.9249C17.3899 20.0867 17.4386 20.2142 17.4659 20.2949C17.4795 20.3353 17.4878 20.3639 17.4919 20.3792L17.4948 20.3904L17.5946 20.8604L18.8208 19.6342Z"
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
            d="M16.3663 16.1793L16.8782 15.6674C17.794 14.7516 19.3098 14.7825 20.2638 15.7365C21.2178 16.6905 21.2487 18.2063 20.3329 19.1221L19.821 19.634C19.7778 19.5245 19.7227 19.3976 19.6527 19.2569C19.4264 18.802 19.0463 18.2046 18.421 17.5793C17.7957 16.954 17.1982 16.5738 16.7434 16.3475C16.6026 16.2775 16.4758 16.2224 16.3663 16.1793Z"
            fill="currentColor"
          />
          <path
            d="M15.1401 17.4054L14.6671 17.8784C13.7513 18.7942 13.7822 20.31 14.7362 21.264C15.6902 22.218 17.206 22.2489 18.1218 21.3331L18.5947 20.8603L18.495 20.3904L18.4921 20.3792C18.4879 20.3639 18.4797 20.3353 18.4661 20.2949C18.4388 20.2142 18.3901 20.0867 18.3097 19.9249C18.1492 19.6022 17.861 19.1406 17.3603 18.64C16.8597 18.1393 16.398 17.8511 16.0753 17.6905C15.9135 17.6101 15.7859 17.5613 15.7052 17.5341C15.6648 17.5204 15.6362 17.5122 15.6209 17.508L15.6096 17.5051L15.1401 17.4054Z"
            fill="currentColor"
          />
          <path
            d="M6.07612 2.61756C6 2.80133 6 3.0343 6 3.50024C6 3.96619 6 4.19916 6.07612 4.38293C6.17761 4.62796 6.37229 4.82263 6.61732 4.92412C6.80109 5.00024 7.03406 5.00024 7.5 5.00024H9H15H16.5C16.9659 5.00024 17.1989 5.00024 17.3827 4.92412C17.6277 4.82263 17.8224 4.62796 17.9239 4.38293C18 4.19916 18 3.96619 18 3.50024C18 3.0343 18 2.80133 17.9239 2.61756C17.8224 2.37253 17.6277 2.17786 17.3827 2.07636C17.1989 2.00024 16.9659 2.00024 16.5 2.00024H7.5C7.03406 2.00024 6.80109 2.00024 6.61732 2.07636C6.37229 2.17786 6.17761 2.37253 6.07612 2.61756Z"
            fill="currentColor"
          />
          <path
            d="M7.74997 6.00024L5.50122 7.7992C5.00902 8.19297 4.62351 8.69171 4.36644 9.25018H19.6401C19.3862 8.6929 19.0046 8.19441 18.5168 7.79949L16.2942 6.00024H7.74997Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 10.9085C20 10.8556 19.999 10.8028 19.9969 10.7502H4.00371C4.00124 10.8075 4 10.865 4 10.9227V17.2502H13.234C13.3452 17.0996 13.4694 16.955 13.6067 16.8177L15.8177 14.6067C16.9608 13.4636 18.6118 13.2297 20 13.7957V10.9085ZM12.75 13.2502V12.0002C12.75 11.586 12.4142 11.2502 12 11.2502C11.5858 11.2502 11.25 11.586 11.25 12.0002V13.2502H10C9.58579 13.2502 9.25 13.586 9.25 14.0002C9.25 14.4144 9.58579 14.7502 10 14.7502H11.25V16.0002C11.25 16.4144 11.5858 16.7502 12 16.7502C12.4142 16.7502 12.75 16.4144 12.75 16.0002V14.7502H14C14.4142 14.7502 14.75 14.4144 14.75 14.0002C14.75 13.586 14.4142 13.2502 14 13.2502H12.75Z"
            fill="currentColor"
          />
          <path
            d="M12.5729 18.7502C12.3513 19.8714 12.6386 21.0724 13.3846 22.0002H8.95693C8.38582 22.0002 8.10026 22.0002 7.82957 21.963C7.02661 21.8528 6.27608 21.5013 5.67738 20.955C5.47554 20.7708 5.29272 20.5514 4.92711 20.1127C4.5902 19.7084 4.33901 19.2449 4.18368 18.7502H12.5729Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconJarOfPills2 as IconComponent).keywords = [
  "jar",
  "of",
  "pills",
  "2",
  "collide",
  "clash",
  "jounce",
  "jolt",
  "shake up",
  "bump around",
  "flagon",
  "jug",
  "bottle",
  "bsf",
  "fos",
  "fso",
  "office",
  "osb",
  "tso",
  "tsos",
  "cup of tea",
  "flight of fancy",
  "tablet",
  "lozenge",
  "anovulatory drug",
  "birth control pill",
  "contraceptive pill",
  "oral contraceptive",
  "oral contraceptive pill",
  "antibilious",
  "aspirins",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out",
];

export default IconJarOfPills2 as IconComponent;
