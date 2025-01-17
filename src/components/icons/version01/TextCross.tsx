import { FC } from "react";

const IconTextCross: FC<IconProps> = ({
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
            d="M12 3.00049H8C6.11438 3.00049 5.17157 3.00049 4.58579 3.58627C4 4.17206 4 5.11487 4 7.00049V7.95049M12 3.00049H16C17.8856 3.00049 18.8284 3.00049 19.4142 3.58627C20 4.17206 20 5.11487 20 7.00049V7.95049M12 3.00049V15.0005V21.0005M7 21.0005H17"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 12.0005H20"
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
            d="M16.0658 2.00049C16.9523 2.00044 17.7161 2.0004 18.3278 2.08263C18.9833 2.17077 19.6117 2.36951 20.1213 2.87917C20.631 3.38883 20.8297 4.01719 20.9179 4.6727C21.0001 5.28437 21.0001 6.04819 21 6.93469L21 7.95049C21 8.50278 20.5523 8.95049 20 8.95049C19.4477 8.95049 19 8.50278 19 7.95049V7.00049C19 6.02942 18.9979 5.4017 18.9357 4.9392C18.8774 4.50546 18.7832 4.36951 18.7071 4.29339C18.631 4.21726 18.495 4.12311 18.0613 4.0648C17.5988 4.00262 16.9711 4.00049 16 4.00049H13V9.00049V20.0005H17C17.5523 20.0005 18 20.4482 18 21.0005C18 21.5528 17.5523 22.0005 17 22.0005H12.0034L12 22.0005L11.9966 22.0005H7C6.44772 22.0005 6 21.5528 6 21.0005C6 20.4482 6.44772 20.0005 7 20.0005H11V9.00049V4.00049H8C7.02893 4.00049 6.40122 4.00262 5.93871 4.0648C5.50497 4.12311 5.36902 4.21726 5.2929 4.29339C5.21677 4.36951 5.12263 4.50546 5.06431 4.9392C5.00213 5.4017 5 6.02942 5 7.00049V7.95049C5 8.50278 4.55229 8.95049 4 8.95049C3.44772 8.95049 3 8.50278 3 7.95049L3 6.93466C2.99995 6.04818 2.99991 5.28436 3.08215 4.6727C3.17028 4.01719 3.36902 3.38883 3.87868 2.87917C4.38835 2.36951 5.0167 2.17077 5.67221 2.08263C6.28387 2.0004 7.04769 2.00044 7.93417 2.00049H16.0658Z"
            fill="currentColor"
          />
          <path
            d="M4 11.0005C3.44772 11.0005 3 11.4482 3 12.0005C3 12.5528 3.44772 13.0005 4 13.0005H20C20.5523 13.0005 21 12.5528 21 12.0005C21 11.4482 20.5523 11.0005 20 11.0005H4Z"
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
            d="M7.93417 2.00049H16.0658C16.9523 2.00044 17.7161 2.0004 18.3278 2.08263C18.9833 2.17077 19.6117 2.36951 20.1213 2.87917C20.631 3.38883 20.8297 4.01719 20.9179 4.6727C21.0001 5.28437 21.0001 6.04819 21 6.93469L21 7.95049C21 8.50278 20.5523 8.95049 20 8.95049C19.4477 8.95049 19 8.50278 19 7.95049V7.00049C19 6.02942 18.9979 5.4017 18.9357 4.9392C18.8774 4.50546 18.7832 4.36951 18.7071 4.29339C18.631 4.21726 18.495 4.12311 18.0613 4.0648C17.5988 4.00262 16.9711 4.00049 16 4.00049H13V9.00049C13 9.55278 12.5523 10.0005 12 10.0005C11.4477 10.0005 11 9.55278 11 9.00049V4.00049H8C7.02893 4.00049 6.40122 4.00262 5.93871 4.0648C5.50497 4.12311 5.36902 4.21726 5.2929 4.29339C5.21677 4.36951 5.12263 4.50546 5.06431 4.9392C5.00213 5.4017 5 6.02942 5 7.00049V7.95049C5 8.50278 4.55229 8.95049 4 8.95049C3.44772 8.95049 3 8.50278 3 7.95049L3 6.93466C2.99995 6.04818 2.99991 5.28436 3.08215 4.6727C3.17028 4.01719 3.36902 3.38883 3.87868 2.87917C4.38835 2.36951 5.0167 2.17077 5.67221 2.08263C6.28387 2.0004 7.04769 2.00044 7.93417 2.00049Z"
            fill="currentColor"
          />
          <path
            d="M12 14.0005C12.5523 14.0005 13 14.4482 13 15.0005V20.0005H17C17.5523 20.0005 18 20.4482 18 21.0005C18 21.5528 17.5523 22.0005 17 22.0005H12.0034L12 22.0005L11.9966 22.0005H7C6.44772 22.0005 6 21.5528 6 21.0005C6 20.4482 6.44772 20.0005 7 20.0005H11V15.0005C11 14.4482 11.4477 14.0005 12 14.0005Z"
            fill="currentColor"
          />
          <path
            d="M4 11.0005C3.44772 11.0005 3 11.4482 3 12.0005C3 12.5528 3.44772 13.0005 4 13.0005H20C20.5523 13.0005 21 12.5528 21 12.0005C21 11.4482 20.5523 11.0005 20 11.0005H4Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTextCross as IconComponent).keywords = [
  "text",
  "cross",
  "schoolbook",
  "textbook",
  "school text",
  "text edition",
  "textual matter",
  "writing",
  "letter",
  "paragraph",
  "manuscript",
  "foil",
  "crisscross",
  "intersect",
  "transverse",
  "transversal",
  "crosswise",
  "mark",
  "cut across",
  "hybridization",
];

export default IconTextCross as IconComponent;
