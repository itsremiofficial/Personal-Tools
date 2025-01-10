import { FC } from "react";

const IconLinkRoundAngle: FC<IconProps> = ({
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
            d="M12.7917 15.7996L14.2223 14.3681C16.5926 11.9964 16.5926 8.15103 14.2223 5.77929C11.8521 3.40755 8.0091 3.40755 5.63885 5.77929L2.77769 8.64223C0.407436 11.014 0.407436 14.8593 2.77769 17.231C3.87688 18.3309 5.29279 18.9207 6.73165 19.0005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M11.2083 8.20141L9.77769 9.63287C7.40744 12.0046 7.40744 15.85 9.77769 18.2217C12.1479 20.5934 15.9909 20.5934 18.3612 18.2217L21.2223 15.3588C23.5926 12.987 23.5926 9.14167 21.2223 6.76994C20.1231 5.67006 18.7072 5.08024 17.2683 5.00049"
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
            d="M2.27732 7.93461C-0.358717 10.5706 -0.358717 14.8445 2.27732 17.4805C3.49943 18.7027 5.07536 19.3586 6.6749 19.4472C7.08848 19.4701 7.44233 19.1534 7.46524 18.7398C7.48815 18.3262 7.17145 17.9724 6.75787 17.9495C5.51259 17.8805 4.28911 17.371 3.33798 16.4199C1.28773 14.3696 1.28773 11.0455 3.33798 8.99527L6.16641 6.16684C8.21666 4.11659 11.5408 4.11659 13.591 6.16684C15.6413 8.21709 15.6413 11.5412 13.591 13.5915L12.1768 15.0057C11.8839 15.2986 11.8839 15.7734 12.1768 16.0663C12.4697 16.3592 12.9446 16.3592 13.2375 16.0663L14.6517 14.6521C17.2877 12.0161 17.2877 7.74222 14.6517 5.10618C12.0157 2.47014 7.74179 2.47014 5.10575 5.10618L2.27732 7.93461Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M10.409 17.8341C8.35877 15.7839 8.35877 12.4598 10.409 10.4095L11.8232 8.9953C12.1161 8.7024 12.1161 8.22753 11.8232 7.93464C11.5303 7.64174 11.0555 7.64174 10.7626 7.93464L9.34837 9.34885C6.71233 11.9849 6.71233 16.2588 9.34837 18.8948C11.9844 21.5308 16.2583 21.5308 18.8943 18.8948L21.7227 16.0664C24.3588 13.4303 24.3588 9.15646 21.7227 6.52042C20.5006 5.29832 18.9247 4.64239 17.3252 4.55378C16.9116 4.53087 16.5577 4.84757 16.5348 5.26115C16.5119 5.67473 16.8286 6.02857 17.2422 6.05148C18.4875 6.12047 19.7109 6.62995 20.6621 7.58108C22.7123 9.63133 22.7123 12.9555 20.6621 15.0057L17.8336 17.8341C15.7834 19.8844 12.4593 19.8844 10.409 17.8341Z"
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
            d="M6.16934 6.30945C8.24667 4.23083 11.6145 4.23083 13.6918 6.30945C15.7694 8.38833 15.7694 11.7591 13.6918 13.8379L12.2612 15.2694C11.9684 15.5624 11.9686 16.0373 12.2616 16.3301C12.5545 16.6229 13.0294 16.6227 13.3222 16.3297L14.7528 14.8983C17.4157 12.2337 17.4157 7.91372 14.7528 5.24913C12.0896 2.58428 7.77154 2.58428 5.10835 5.24913L2.2472 8.11206C-0.415733 10.7767 -0.415733 15.0966 2.2472 17.7612C3.48184 18.9966 5.07401 19.6598 6.69015 19.7493C7.10372 19.7723 7.45758 19.4556 7.48051 19.042C7.50343 18.6284 7.18674 18.2746 6.77316 18.2516C5.51156 18.1817 4.27192 17.6652 3.30819 16.7009C1.2306 14.622 1.2306 11.2513 3.30819 9.17239L6.16934 6.30945Z"
            fill="currentColor"
          />
          <path
            d="M17.3099 4.25164C16.8963 4.22871 16.5424 4.5454 16.5195 4.95898C16.4966 5.37256 16.8133 5.72641 17.2268 5.74934C18.4884 5.81927 19.7281 6.33576 20.6918 7.3001C22.7694 9.37898 22.7694 12.7497 20.6918 14.8286L17.8307 17.6915C15.7533 19.7701 12.3855 19.7701 10.3082 17.6915C8.2306 15.6126 8.2306 12.2419 10.3082 10.163L11.7388 8.73157C12.0316 8.43859 12.0314 7.96371 11.7384 7.67091C11.4454 7.37811 10.9706 7.37826 10.6778 7.67124L9.2472 9.10271C6.58427 11.7673 6.58427 16.0873 9.2472 18.7519C11.9104 21.4167 16.2285 21.4167 18.8916 18.7519L21.7528 15.8889C24.4157 13.2243 24.4157 8.90436 21.7528 6.23977C20.5182 5.00436 18.926 4.34122 17.3099 4.25164Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconLinkRoundAngle as IconComponent).keywords = [
  "link",
  "round",
  "angle",
  "linkup",
  "connection",
  "nexus",
  "connexion",
  "connectedness",
  "connect",
  "tie-in",
  "unite",
  "associate",
  "orbicular",
  "rotund",
  "orbiculate",
  "discoidal",
  "disklike",
  "discoid",
  "ringlike",
  "globular",
  "globose",
  "weight",
  "slant",
  "tilt",
  "lean",
  "tip",
  "fish",
  "side",
  "prism",
  "dimension",
];

export default IconLinkRoundAngle as IconComponent;
