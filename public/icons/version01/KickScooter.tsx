import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconKickScooter: FC<IconProps> = ({
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
            d="M14.381 17.6475V18.3975C14.7952 18.3975 15.131 18.0618 15.131 17.6475H14.381ZM19.6191 12.4711V13.2211C19.8398 13.2211 20.0493 13.1239 20.1918 12.9553C20.3343 12.7868 20.3954 12.564 20.3587 12.3464L19.6191 12.4711ZM18.615 6.51712L17.8754 6.64185L18.615 6.51712ZM14.381 3.25049C13.9668 3.25049 13.631 3.58627 13.631 4.00049C13.631 4.4147 13.9668 4.75049 14.381 4.75049V3.25049ZM18.163 4.84052L17.5408 5.25923V5.25923L18.163 4.84052ZM17.3566 4.16539L17.6606 3.47975V3.47975L17.3566 4.16539ZM15.131 17.6475C15.131 15.2112 17.132 13.2211 19.6191 13.2211V11.7211C16.3204 11.7211 13.631 14.3661 13.631 17.6475H15.131ZM14.381 16.8975H6.76196V18.3975H14.381V16.8975ZM20.3587 12.3464L19.3545 6.3924L17.8754 6.64185L18.8795 12.5958L20.3587 12.3464ZM15.6088 3.25049H14.381V4.75049H15.6088V3.25049ZM19.3545 6.3924C19.281 5.95659 19.2194 5.5883 19.145 5.28859C19.0683 4.97948 18.9661 4.69051 18.7853 4.42181L17.5408 5.25923C17.5857 5.32599 17.6341 5.42828 17.6892 5.65008C17.7466 5.88129 17.7981 6.18357 17.8754 6.64185L19.3545 6.3924ZM15.6088 4.75049C16.0786 4.75049 16.3899 4.75097 16.6313 4.76901C16.8635 4.78637 16.9762 4.81714 17.0526 4.85103L17.6606 3.47975C17.365 3.34874 17.0625 3.29706 16.7431 3.27319C16.4329 3.25 16.0563 3.25049 15.6088 3.25049V4.75049ZM18.7853 4.42181C18.5069 4.00815 18.1167 3.68196 17.6606 3.47975L17.0526 4.85103C17.2522 4.93953 17.4212 5.08145 17.5408 5.25923L18.7853 4.42181Z"
            fill="currentColor"
          />
          <path
            d="M6.0119 17.6476C6.0119 18.5246 5.2901 19.2506 4.38095 19.2506V20.7506C6.10174 20.7506 7.5119 19.3697 7.5119 17.6476H6.0119ZM4.38095 19.2506C3.47181 19.2506 2.75 18.5246 2.75 17.6476H1.25C1.25 19.3697 2.66017 20.7506 4.38095 20.7506V19.2506ZM2.75 17.6476C2.75 16.7707 3.47181 16.0447 4.38095 16.0447V14.5447C2.66017 14.5447 1.25 15.9256 1.25 17.6476H2.75ZM4.38095 16.0447C5.2901 16.0447 6.0119 16.7707 6.0119 17.6476H7.5119C7.5119 15.9256 6.10174 14.5447 4.38095 14.5447V16.0447Z"
            fill="currentColor"
          />
          <path
            d="M21.2499 17.6476C21.2499 18.5246 20.5281 19.2506 19.619 19.2506V20.7506C21.3398 20.7506 22.7499 19.3697 22.7499 17.6476H21.2499ZM19.619 19.2506C18.7098 19.2506 17.988 18.5246 17.988 17.6476H16.488C16.488 19.3697 17.8982 20.7506 19.619 20.7506V19.2506ZM17.988 17.6476C17.988 16.7707 18.7098 16.0447 19.619 16.0447V14.5447C17.8982 14.5447 16.488 15.9256 16.488 17.6476H17.988ZM19.619 16.0447C20.5281 16.0447 21.2499 16.7707 21.2499 17.6476H22.7499C22.7499 15.9256 21.3398 14.5447 19.619 14.5447V16.0447Z"
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
          <path
            d="M16.6312 4.76902C16.3898 4.75097 16.0785 4.75049 15.6088 4.75049H14.381C13.9667 4.75049 13.631 4.4147 13.631 4.00049C13.631 3.58628 13.9667 3.25049 14.381 3.25049H15.6357H15.6357C16.0714 3.25048 16.4391 3.25047 16.743 3.27319C17.0624 3.29706 17.365 3.34874 17.6605 3.47975C18.1166 3.68196 18.5069 4.00815 18.7852 4.42181C18.966 4.69051 19.0682 4.97948 19.1449 5.2886C19.2178 5.58206 19.2784 5.94128 19.3499 6.36526L19.3499 6.36532L20.3586 12.3464C20.3953 12.564 20.3343 12.7868 20.1918 12.9553C20.0493 13.1239 19.8398 13.2211 19.619 13.2211C17.1319 13.2211 15.131 15.2112 15.131 17.6475C15.131 18.0618 14.7952 18.3975 14.381 18.3975H7.42003C7.08088 19.7536 5.84304 20.7505 4.38095 20.7505C2.66017 20.7505 1.25 19.3696 1.25 17.6475C1.25 15.9255 2.66017 14.5446 4.38095 14.5446C5.84304 14.5446 7.08088 15.5415 7.42003 16.8975H13.6784C14.0147 14.2584 16.1026 12.1678 18.7426 11.7842L17.8754 6.64185C17.7981 6.18357 17.7466 5.88129 17.6892 5.65008C17.6341 5.42828 17.5857 5.32599 17.5407 5.25923C17.4211 5.08145 17.2522 4.93953 17.0526 4.85103C16.9761 4.81714 16.8634 4.78637 16.6312 4.76902Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.488 17.6476C16.488 15.9256 17.8982 14.5447 19.619 14.5447C21.3398 14.5447 22.7499 15.9256 22.7499 17.6476C22.7499 19.3697 21.3398 20.7506 19.619 20.7506C17.8982 20.7506 16.488 19.3697 16.488 17.6476Z"
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
            d="M16.6312 4.76902C16.3898 4.75097 16.0785 4.75049 15.6088 4.75049H14.381C13.9667 4.75049 13.631 4.4147 13.631 4.00049C13.631 3.58628 13.9667 3.25049 14.381 3.25049L15.6357 3.25049C16.0714 3.25048 16.4391 3.25047 16.743 3.27319C17.0624 3.29706 17.365 3.34874 17.6605 3.47975C18.1166 3.68196 18.5069 4.00815 18.7852 4.42181C18.966 4.69051 19.0682 4.97948 19.1449 5.2886C19.2178 5.58207 19.2784 5.94131 19.3499 6.36532L20.3586 12.3464C20.3953 12.564 20.3343 12.7868 20.1918 12.9553C20.0493 13.1239 19.8398 13.2211 19.619 13.2211C17.1319 13.2211 15.131 15.2112 15.131 17.6475C15.131 18.0618 14.7952 18.3975 14.381 18.3975H7.42003C7.08088 19.7536 5.84304 20.7505 4.38095 20.7505C2.66017 20.7505 1.25 19.3696 1.25 17.6475C1.25 15.9255 2.66017 14.5446 4.38095 14.5446C5.84304 14.5446 7.08088 15.5415 7.42003 16.8975H13.6784C14.0147 14.2584 16.1026 12.1678 18.7426 11.7842L17.8754 6.64185C17.7981 6.18357 17.7466 5.88129 17.6892 5.65008C17.6341 5.42828 17.5857 5.32599 17.5407 5.25923C17.4211 5.08145 17.2522 4.93953 17.0526 4.85103C16.9761 4.81714 16.8634 4.78637 16.6312 4.76902ZM16.4881 17.6475C16.4881 15.9255 17.8983 14.5446 19.619 14.5446C21.3398 14.5446 22.75 15.9255 22.75 17.6475C22.75 19.3696 21.3398 20.7505 19.619 20.7505C17.8983 20.7505 16.4881 19.3696 16.4881 17.6475Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconKickScooter as IconComponentType).keywords = [
  "kick",
  "scooter",
  "bang",
  "recoil",
  "squawk",
  "thrill",
  "boot",
  "kick back",
  "plain",
  "complain",
  "gripe",
  "motor scooter",
  "scoter",
  "motorcycle",
  "sidecar",
  "motorbike",
  "bike",
  "wagon",
  "moped",
  "tricycle",
];

export default IconKickScooter as IconComponentType;