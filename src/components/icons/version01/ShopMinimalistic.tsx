import { FC } from "react";

const IconShopMinimalistic: FC<IconProps> = ({
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
            d="M21 22.0005H3"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M19 22.0005V15.0005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M5 22.0005V15.0005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M16.5278 2.00049H7.47214C6.26932 2.00049 5.66791 2.00049 5.18461 2.29919C4.7013 2.59788 4.43234 3.1358 3.89443 4.21163L2.49081 7.75978C2.16652 8.57954 1.88279 9.54574 2.42867 10.238C2.79489 10.7024 3.36257 11.0005 3.99991 11.0005C5.10448 11.0005 5.99991 10.1051 5.99991 9.00049C5.99991 10.1051 6.89534 11.0005 7.99991 11.0005C9.10448 11.0005 9.99991 10.1051 9.99991 9.00049C9.99991 10.1051 10.8953 11.0005 11.9999 11.0005C13.1045 11.0005 13.9999 10.1051 13.9999 9.00049C13.9999 10.1051 14.8953 11.0005 15.9999 11.0005C17.1045 11.0005 17.9999 10.1051 17.9999 9.00049C17.9999 10.1051 18.8953 11.0005 19.9999 11.0005C20.6373 11.0005 21.205 10.7024 21.5712 10.238C22.1171 9.54574 21.8334 8.57954 21.5091 7.75978L20.1055 4.21163C19.5676 3.1358 19.2986 2.59789 18.8153 2.29919C18.332 2.00049 17.7306 2.00049 16.5278 2.00049Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinejoin="round"
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
            d="M19 14.2505C19.4142 14.2505 19.75 14.5863 19.75 15.0005V21.2505H21C21.4142 21.2505 21.75 21.5863 21.75 22.0005C21.75 22.4147 21.4142 22.7505 21 22.7505H3C2.58579 22.7505 2.25 22.4147 2.25 22.0005C2.25 21.5863 2.58579 21.2505 3 21.2505H4.25V15.0005C4.25 14.5863 4.58579 14.2505 5 14.2505C5.41421 14.2505 5.75 14.5863 5.75 15.0005V21.2505H18.25V15.0005C18.25 14.5863 18.5858 14.2505 19 14.2505Z"
            fill="currentColor"
          />
          <path
            d="M16.5278 2.00049H7.47214C6.26932 2.00049 5.66791 2.00049 5.18461 2.29919C4.7013 2.59788 4.43234 3.1358 3.89443 4.21163L2.49081 7.75978C2.16652 8.57954 1.88279 9.54574 2.42867 10.238C2.79489 10.7024 3.36257 11.0005 3.99991 11.0005C5.10448 11.0005 5.99991 10.1051 5.99991 9.00049C5.99991 10.1051 6.89534 11.0005 7.99991 11.0005C9.10448 11.0005 9.99991 10.1051 9.99991 9.00049C9.99991 10.1051 10.8953 11.0005 11.9999 11.0005C13.1045 11.0005 13.9999 10.1051 13.9999 9.00049C13.9999 10.1051 14.8953 11.0005 15.9999 11.0005C17.1045 11.0005 17.9999 10.1051 17.9999 9.00049C17.9999 10.1051 18.8953 11.0005 19.9999 11.0005C20.6373 11.0005 21.205 10.7024 21.5712 10.238C22.1171 9.54574 21.8334 8.57954 21.5091 7.75978L20.1055 4.21163C19.5676 3.1358 19.2986 2.59789 18.8153 2.29919C18.332 2.00049 17.7306 2.00049 16.5278 2.00049Z"
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
            d="M19 14.2505C19.4142 14.2505 19.75 14.5863 19.75 15.0005V21.2505H21C21.4142 21.2505 21.75 21.5863 21.75 22.0005C21.75 22.4147 21.4142 22.7505 21 22.7505H3C2.58579 22.7505 2.25 22.4147 2.25 22.0005C2.25 21.5863 2.58579 21.2505 3 21.2505H4.25V15.0005C4.25 14.5863 4.58579 14.2505 5 14.2505C5.41421 14.2505 5.75 14.5863 5.75 15.0005V21.2505H18.25V15.0005C18.25 14.5863 18.5858 14.2505 19 14.2505Z"
            fill="currentColor"
          />
          <path
            d="M16.5278 2.00049H7.47214C6.26932 2.00049 5.66791 2.00049 5.18461 2.29919C4.7013 2.59788 4.43234 3.1358 3.89443 4.21163L2.49081 7.75978C2.16652 8.57954 1.88279 9.54574 2.42867 10.238C2.79489 10.7024 3.36257 11.0005 3.99991 11.0005C5.10448 11.0005 5.99991 10.1051 5.99991 9.00049C5.99991 10.1051 6.89534 11.0005 7.99991 11.0005C9.10448 11.0005 9.99991 10.1051 9.99991 9.00049C9.99991 10.1051 10.8953 11.0005 11.9999 11.0005C13.1045 11.0005 13.9999 10.1051 13.9999 9.00049C13.9999 10.1051 14.8953 11.0005 15.9999 11.0005C17.1045 11.0005 17.9999 10.1051 17.9999 9.00049C17.9999 10.1051 18.8953 11.0005 19.9999 11.0005C20.6373 11.0005 21.205 10.7024 21.5712 10.238C22.1171 9.54574 21.8334 8.57954 21.5091 7.75978L20.1055 4.21163C19.5676 3.1358 19.2986 2.59789 18.8153 2.29919C18.332 2.00049 17.7306 2.00049 16.5278 2.00049Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconShopMinimalistic as IconComponent).keywords = [
  "shop",
  "minimalistic",
  "workshop",
  "store",
  "browse",
  "sponsor",
  "give away",
  "patronize",
  "snitch",
  "tell on",
  "betray",
  "modularistic",
  "brutalistic",
  "localistic",
  "reductionist",
  "exhibitional",
  "monogynous",
  "simplificational",
  "reductionistic",
  "automatistic",
];

export default IconShopMinimalistic as IconComponent;
