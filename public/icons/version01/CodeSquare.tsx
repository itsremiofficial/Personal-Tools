import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconCodeSquare: FC<IconProps> = ({
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
            d="M15.5 9.00037L15.6716 9.17194C17.0049 10.5053 17.6716 11.1719 17.6716 12.0004C17.6716 12.8288 17.0049 13.4955 15.6716 14.8288L15.5 15.0004"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M13.2941 7.17078L12 12.0004L10.7059 16.83"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M8.5 9.00037L8.32843 9.17194C6.9951 10.5053 6.32843 11.1719 6.32843 12.0004C6.32843 12.8288 6.9951 13.4955 8.32843 14.8288L8.5 15.0004"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M2 12.0004C2 7.28632 2 4.9293 3.46447 3.46483C4.92893 2.00037 7.28595 2.00037 12 2.00037C16.714 2.00037 19.0711 2.00037 20.5355 3.46483C22 4.9293 22 7.28632 22 12.0004C22 16.7144 22 19.0714 20.5355 20.5359C19.0711 22.0004 16.714 22.0004 12 22.0004C7.28595 22.0004 4.92893 22.0004 3.46447 20.5359C2 19.0714 2 16.7144 2 12.0004Z"
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
            d="M2 12.0004C2 7.28632 2 4.9293 3.46447 3.46483C4.92893 2.00037 7.28595 2.00037 12 2.00037C16.714 2.00037 19.0711 2.00037 20.5355 3.46483C22 4.9293 22 7.28632 22 12.0004C22 16.7144 22 19.0714 20.5355 20.5359C19.0711 22.0004 16.714 22.0004 12 22.0004C7.28595 22.0004 4.92893 22.0004 3.46447 20.5359C2 19.0714 2 16.7144 2 12.0004Z"
            fill="currentColor"
          />
          <path
            d="M13.4881 6.44627C13.8882 6.55348 14.1256 6.96473 14.0184 7.36483L11.4302 17.0241C11.323 17.4242 10.9117 17.6616 10.5116 17.5544C10.1115 17.4472 9.8741 17.036 9.98131 16.6359L12.5695 6.9766C12.6767 6.5765 13.088 6.33907 13.4881 6.44627Z"
            fill="currentColor"
          />
          <path
            d="M14.9697 8.47004C15.2626 8.17715 15.7374 8.17715 16.0303 8.47004L16.2387 8.67838C16.874 9.31366 17.4038 9.84345 17.7678 10.3206C18.1521 10.8242 18.4216 11.3562 18.4216 12.0004C18.4216 12.6445 18.1521 13.1766 17.7678 13.6802C17.4038 14.1573 16.874 14.687 16.2387 15.3223L16.0303 15.5307C15.7374 15.8236 15.2626 15.8236 14.9697 15.5307C14.6768 15.2378 14.6768 14.7629 14.9697 14.47L15.1412 14.2985C15.8229 13.6168 16.2797 13.1578 16.5753 12.7703C16.8577 12.4001 16.9216 12.1847 16.9216 12.0004C16.9216 11.8161 16.8577 11.6006 16.5753 11.2304C16.2797 10.843 15.8229 10.3839 15.1412 9.70227L14.9697 9.5307C14.6768 9.23781 14.6768 8.76293 14.9697 8.47004Z"
            fill="currentColor"
          />
          <path
            d="M7.96986 8.47004C8.26275 8.17715 8.73762 8.17715 9.03052 8.47004C9.32341 8.76293 9.32341 9.23781 9.03052 9.5307L8.85894 9.70227C8.17729 10.3839 7.72052 10.843 7.42488 11.2304C7.14245 11.6006 7.07861 11.8161 7.07861 12.0004C7.07861 12.1847 7.14245 12.4001 7.42488 12.7703C7.72052 13.1578 8.17729 13.6168 8.85894 14.2985L9.03052 14.47C9.32341 14.7629 9.32341 15.2378 9.03052 15.5307C8.73762 15.8236 8.26275 15.8236 7.96986 15.5307L7.76151 15.3224C7.12617 14.6871 6.59638 14.1573 6.23235 13.6802C5.84811 13.1766 5.57861 12.6445 5.57861 12.0004C5.57861 11.3562 5.84811 10.8242 6.23235 10.3206C6.59638 9.84344 7.12617 9.31368 7.76151 8.67838L7.96986 8.47004Z"
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
            d="M3.46447 3.46483C2 4.9293 2 7.28632 2 12.0004C2 16.7144 2 19.0714 3.46447 20.5359C4.92893 22.0004 7.28595 22.0004 12 22.0004C16.714 22.0004 19.0711 22.0004 20.5355 20.5359C22 19.0714 22 16.7144 22 12.0004C22 7.28632 22 4.9293 20.5355 3.46483C19.0711 2.00037 16.714 2.00037 12 2.00037C7.28595 2.00037 4.92893 2.00037 3.46447 3.46483ZM13.4881 6.44627C13.8882 6.55348 14.1256 6.96473 14.0184 7.36483L11.4302 17.0241C11.323 17.4242 10.9117 17.6616 10.5116 17.5544C10.1115 17.4472 9.8741 17.036 9.98131 16.6359L12.5695 6.9766C12.6767 6.5765 13.088 6.33907 13.4881 6.44627ZM14.9697 8.47004C15.2626 8.17715 15.7374 8.17715 16.0303 8.47004L16.2387 8.67838C16.874 9.31366 17.4038 9.84345 17.7678 10.3206C18.1521 10.8242 18.4216 11.3562 18.4216 12.0004C18.4216 12.6445 18.1521 13.1766 17.7678 13.6802C17.4038 14.1573 16.874 14.687 16.2387 15.3223L16.0303 15.5307C15.7374 15.8236 15.2626 15.8236 14.9697 15.5307C14.6768 15.2378 14.6768 14.7629 14.9697 14.47L15.1412 14.2985C15.8229 13.6168 16.2797 13.1578 16.5753 12.7703C16.8577 12.4001 16.9216 12.1847 16.9216 12.0004C16.9216 11.8161 16.8577 11.6006 16.5753 11.2304C16.2797 10.843 15.8229 10.3839 15.1412 9.70227L14.9697 9.5307C14.6768 9.23781 14.6768 8.76293 14.9697 8.47004ZM7.96986 8.47004C8.26275 8.17715 8.73762 8.17715 9.03052 8.47004C9.32341 8.76293 9.32341 9.23781 9.03052 9.5307L8.85894 9.70227C8.17729 10.3839 7.72052 10.843 7.42488 11.2304C7.14245 11.6006 7.07861 11.8161 7.07861 12.0004C7.07861 12.1847 7.14245 12.4001 7.42488 12.7703C7.72052 13.1578 8.17729 13.6168 8.85894 14.2985L9.03052 14.47C9.32341 14.7629 9.32341 15.2378 9.03052 15.5307C8.73762 15.8236 8.26275 15.8236 7.96986 15.5307L7.76151 15.3224C7.12617 14.6871 6.59638 14.1573 6.23235 13.6802C5.84811 13.1766 5.57861 12.6445 5.57861 12.0004C5.57861 11.3562 5.84811 10.8242 6.23235 10.3206C6.59638 9.84344 7.12617 9.31368 7.76151 8.67838L7.96986 8.47004Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCodeSquare as IconComponentType).keywords = [
  "code",
  "square",
  "encode",
  "cypher",
  "encipher",
  "cipher",
  "encrypt",
  "computer code",
  "codification",
  "inscribe",
  "write in code",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest",
];

export default IconCodeSquare as IconComponentType;
