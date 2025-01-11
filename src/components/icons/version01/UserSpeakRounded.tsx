import { FC } from "react";

const IconUserSpeakRounded: FC<IconProps> = ({
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
            cx="10"
            cy="6.00049"
            r="4"
            stroke="currentColor"
            strokeWidth={width}
          />
          <ellipse
            opacity={duotone ? "0.5" : "1"}
            cx="10"
            cy="17.0005"
            rx="7"
            ry="4"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M19 2.00049C19 2.00049 21 3.20049 21 6.00049C21 8.80049 19 10.0005 19 10.0005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M17 4.00049C17 4.00049 18 4.60049 18 6.00049C18 7.40049 17 8.00049 17 8.00049"
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
          <circle cx="10" cy="6.75049" r="4" fill="currentColor" />
          <ellipse
            opacity={duotone ? "0.5" : "1"}
            cx="10"
            cy="17.7505"
            rx="7"
            ry="4"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.357 2.36473C18.5702 2.00954 19.0309 1.89437 19.386 2.10748L19.0002 2.7506C19.386 2.10748 19.3857 2.10728 19.386 2.10748L19.3874 2.10832L19.389 2.10927L19.3927 2.11152L19.4023 2.11744C19.4096 2.12201 19.4189 2.12785 19.4299 2.13497C19.4519 2.1492 19.481 2.16858 19.5162 2.19321C19.5865 2.24243 19.6815 2.31293 19.7928 2.40569C20.0149 2.59077 20.3054 2.86727 20.5946 3.24332C21.1775 4.00105 21.7502 5.15795 21.7502 6.7506C21.7502 8.34326 21.1775 9.50015 20.5946 10.2579C20.3054 10.6339 20.0149 10.9104 19.7928 11.0955C19.6815 11.1883 19.5865 11.2588 19.5162 11.308C19.481 11.3326 19.4519 11.352 19.4299 11.3662C19.4189 11.3734 19.4096 11.3792 19.4023 11.3838L19.3927 11.3897L19.389 11.3919L19.3874 11.3929C19.3871 11.3931 19.386 11.3937 19.0002 10.7506L19.386 11.3937C19.0309 11.6068 18.5702 11.4917 18.357 11.1365C18.1448 10.7828 18.2581 10.3245 18.6098 10.1102L18.6154 10.1067C18.6227 10.1019 18.6365 10.0928 18.656 10.0791C18.6951 10.0518 18.7563 10.0067 18.8325 9.94319C18.9854 9.81577 19.195 9.61727 19.4057 9.34332C19.8228 8.80105 20.2502 7.95795 20.2502 6.7506C20.2502 5.54326 19.8228 4.70015 19.4057 4.15788C19.195 3.88393 18.9854 3.68543 18.8325 3.55802C18.7563 3.49452 18.6951 3.4494 18.656 3.42206C18.6365 3.40841 18.6227 3.39927 18.6154 3.39455L18.6098 3.39102C18.2581 3.17674 18.1448 2.71842 18.357 2.36473Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.3293 4.41519C16.5146 4.04471 16.9651 3.89454 17.3356 4.07978L17.0002 4.7506C17.3356 4.07978 17.3352 4.07958 17.3356 4.07978L17.3372 4.08059L17.3389 4.08146L17.3426 4.08336L17.3512 4.08781L17.3728 4.09942C17.3891 4.10838 17.4091 4.11983 17.4324 4.13392C17.4787 4.16208 17.5383 4.20106 17.6064 4.25216C17.7423 4.35411 17.9153 4.50639 18.0858 4.71958C18.4345 5.15548 18.7502 5.81841 18.7502 6.7506C18.7502 7.68279 18.4345 8.34573 18.0858 8.78162C17.9153 8.99481 17.7423 9.14709 17.6064 9.24904C17.5383 9.30014 17.4787 9.33912 17.4324 9.36728C17.4091 9.38138 17.3891 9.39283 17.3728 9.40178L17.3512 9.41339L17.3426 9.41784L17.3389 9.41974L17.3372 9.42061C17.3368 9.42081 17.3356 9.42142 17.0064 8.76314L17.3356 9.42142C16.9651 9.60666 16.5146 9.4565 16.3293 9.08601C16.1464 8.72014 16.2906 8.27623 16.651 8.08682C16.6518 8.08639 16.6527 8.08582 16.6539 8.0851C16.6622 8.08005 16.6808 8.06825 16.7064 8.04904C16.758 8.01036 16.8351 7.94389 16.9145 7.84458C17.0658 7.65548 17.2502 7.31841 17.2502 6.7506C17.2502 6.18279 17.0658 5.84573 16.9145 5.65662C16.8351 5.55731 16.758 5.49084 16.7064 5.45216C16.6808 5.43295 16.6622 5.42115 16.6539 5.41611C16.6527 5.41539 16.6518 5.41481 16.651 5.41438C16.2906 5.22497 16.1464 4.78106 16.3293 4.41519Z"
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
          <circle cx="10" cy="6.75049" r="4" fill="currentColor" />
          <ellipse cx="10" cy="17.7505" rx="7" ry="4" fill="currentColor" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.357 2.36473C18.5702 2.00954 19.0309 1.89437 19.386 2.10748L19.0002 2.7506C19.386 2.10748 19.3857 2.10728 19.386 2.10748L19.3874 2.10832L19.389 2.10927L19.3927 2.11152L19.4023 2.11744C19.4096 2.12201 19.4189 2.12785 19.4299 2.13497C19.4519 2.1492 19.481 2.16858 19.5162 2.19321C19.5865 2.24243 19.6815 2.31293 19.7928 2.40569C20.0149 2.59077 20.3054 2.86727 20.5946 3.24332C21.1775 4.00105 21.7502 5.15795 21.7502 6.7506C21.7502 8.34326 21.1775 9.50015 20.5946 10.2579C20.3054 10.6339 20.0149 10.9104 19.7928 11.0955C19.6815 11.1883 19.5865 11.2588 19.5162 11.308C19.481 11.3326 19.4519 11.352 19.4299 11.3662C19.4189 11.3734 19.4096 11.3792 19.4023 11.3838L19.3927 11.3897L19.389 11.3919L19.3874 11.3929C19.3871 11.3931 19.386 11.3937 19.0002 10.7506L19.386 11.3937C19.0309 11.6068 18.5702 11.4917 18.357 11.1365C18.1448 10.7828 18.2581 10.3245 18.6098 10.1102L18.6154 10.1067C18.6227 10.1019 18.6365 10.0928 18.656 10.0791C18.6951 10.0518 18.7563 10.0067 18.8325 9.94319C18.9854 9.81577 19.195 9.61727 19.4057 9.34332C19.8228 8.80105 20.2502 7.95795 20.2502 6.7506C20.2502 5.54326 19.8228 4.70015 19.4057 4.15788C19.195 3.88393 18.9854 3.68543 18.8325 3.55802C18.7563 3.49452 18.6951 3.4494 18.656 3.42206C18.6365 3.40841 18.6227 3.39927 18.6154 3.39455L18.6098 3.39102C18.2581 3.17674 18.1448 2.71842 18.357 2.36473Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.3293 4.41519C16.5146 4.04471 16.9651 3.89454 17.3356 4.07978L17.0002 4.7506C17.3356 4.07978 17.3352 4.07958 17.3356 4.07978L17.3372 4.08059L17.3389 4.08146L17.3426 4.08336L17.3512 4.08781L17.3728 4.09942C17.3891 4.10838 17.4091 4.11983 17.4324 4.13392C17.4787 4.16208 17.5383 4.20106 17.6064 4.25216C17.7423 4.35411 17.9153 4.50639 18.0858 4.71958C18.4345 5.15548 18.7502 5.81841 18.7502 6.7506C18.7502 7.68279 18.4345 8.34573 18.0858 8.78162C17.9153 8.99481 17.7423 9.14709 17.6064 9.24904C17.5383 9.30014 17.4787 9.33912 17.4324 9.36728C17.4091 9.38138 17.3891 9.39283 17.3728 9.40178L17.3512 9.41339L17.3426 9.41784L17.3389 9.41974L17.3372 9.42061C17.3368 9.42081 17.3356 9.42142 17.0064 8.76314L17.3356 9.42142C16.9651 9.60666 16.5146 9.4565 16.3293 9.08601C16.1464 8.72014 16.2906 8.27623 16.651 8.08682C16.6518 8.08639 16.6527 8.08582 16.6539 8.0851C16.6622 8.08005 16.6808 8.06825 16.7064 8.04904C16.758 8.01036 16.8351 7.94389 16.9145 7.84458C17.0658 7.65548 17.2502 7.31841 17.2502 6.7506C17.2502 6.18279 17.0658 5.84573 16.9145 5.65662C16.8351 5.55731 16.758 5.49084 16.7064 5.45216C16.6808 5.43295 16.6622 5.42115 16.6539 5.41611C16.6527 5.41539 16.6518 5.41481 16.651 5.41438C16.2906 5.22497 16.1464 4.78106 16.3293 4.41519Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconUserSpeakRounded as IconComponent).keywords = [
  "user",
  "speak",
  "rounded",
  "exploiter",
  "enjoyer",
  "drug user",
  "substance abuser",
  "customer",
  "client",
  "employer",
  "consumer",
  "employee",
  "verbalize",
  "talk",
  "address",
  "utter",
  "mouth",
  "articulate",
  "speaker",
  "say",
  "conversation",
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

export default IconUserSpeakRounded as IconComponent;