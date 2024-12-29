import { FC } from "react";
import { IconProps } from "../types";

const Logo: FC<IconProps> = ({
  className,
  fill = false,
  duotone = true,
  width = "1.5",
}) => {
  return !fill ? (
    <svg
      width="68"
      height="53"
      viewBox="0 0 68 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M67.6164 33.4332H63.1864V52.0832H67.6164V33.4332Z"
        fill="currentColor"
      />
      <path
        d="M67.6164 29.2782C67.6164 28.0549 66.6247 27.0632 65.4014 27.0632C64.1781 27.0632 63.1864 28.0549 63.1864 29.2782C63.1864 30.5015 64.1781 31.4932 65.4014 31.4932C66.6247 31.4932 67.6164 30.5015 67.6164 29.2782Z"
        fill="#F96666"
      />
      <path
        d="M4.75642 41.2532L12.3864 36.8632L18.6464 33.2532C19.5864 32.7032 20.5964 32.4232 21.6764 32.4232H21.9664C24.4764 32.4232 26.6664 33.2832 28.5164 34.9932C30.3964 36.6832 31.4764 38.7632 31.7464 41.2532H31.7864L39.3764 36.8632L45.6364 33.2532C46.6064 32.7032 47.6264 32.4232 48.7064 32.4232H48.9964C51.6764 32.4232 53.9864 33.3932 55.9164 35.3232C57.8464 37.2332 58.8164 39.5332 58.8164 42.2432V52.0632H54.3864V42.2432C54.3864 41.2732 54.1364 40.3732 53.6364 39.5532C53.1664 38.7232 52.5164 38.0732 51.6864 37.6032C50.8564 37.1032 49.9564 36.8532 48.9964 36.8532H42.9464C41.8364 36.8532 40.8164 37.1332 39.8764 37.6832L34.8564 40.5432C34.3564 40.8432 33.9164 41.1932 33.5264 41.5832C33.1664 41.9432 32.8464 42.3532 32.5764 42.8232C32.3264 43.2632 32.1364 43.7532 31.9964 44.2732C31.8564 44.7732 31.7864 45.2932 31.7864 45.8432V52.0632H27.3564V42.2432C27.3564 40.7532 26.8164 39.4832 25.7364 38.4332C24.6864 37.3832 23.4264 36.8532 21.9664 36.8532H15.9164C14.8064 36.8532 13.7864 37.1332 12.8464 37.6832L7.82642 40.5432C6.85642 41.1232 6.09642 41.8832 5.54642 42.8232C5.01642 43.7332 4.75642 44.7432 4.75642 45.8532V52.0732H0.326416V32.4232H4.75642V41.2532Z"
        fill="currentColor"
      />
      <path
        d="M67.6164 13.2933L63.5164 15.6933L57.2564 19.3033C56.2864 19.8533 55.2664 20.1333 54.1864 20.1333H37.8964C36.1264 20.1333 34.4864 19.6933 32.9664 18.8033C31.4764 17.9233 30.2864 16.7333 29.4064 15.2433C28.5264 13.7233 28.0764 12.0833 28.0764 10.3133C28.0764 7.60329 29.0264 5.29329 30.9364 3.39329C32.8664 1.46329 35.1964 0.493286 37.8964 0.493286H67.6164V4.39329L66.7464 4.93329L64.2564 6.34329L57.9964 9.99329C57.0564 10.5233 56.0364 10.7833 54.9264 10.7833H32.5464C32.6564 12.1633 33.2264 13.3433 34.2464 14.3033C35.2964 15.2433 36.5164 15.7133 37.8964 15.7133H59.9464C61.0564 15.7133 62.0764 15.4333 63.0164 14.8833L67.6164 12.2333V13.3133V13.2933ZM37.8964 4.92329C36.5164 4.92329 35.2964 5.40329 34.2464 6.37329C33.2264 7.31329 32.6564 8.46329 32.5464 9.81329H54.6764C55.7564 9.81329 56.7764 9.55329 57.7464 9.02329L60.7764 7.24329L64.8364 4.92329H37.8964Z"
        fill="currentColor"
      />
      <path
        d="M4.75642 9.31328L12.3864 4.92328L18.6464 1.31328C19.5864 0.763276 20.6064 0.483276 21.7164 0.483276H25.6564V4.91328H15.9064C14.7964 4.91328 13.7764 5.19328 12.8364 5.74328L7.81642 8.60328C6.84642 9.18328 6.08642 9.94328 5.53642 10.8833C5.00642 11.7933 4.74642 12.8033 4.74642 13.9133V20.1333H0.326416V0.483276H4.75642V9.31328Z"
        fill="currentColor"
      />
    </svg>
  ) : (
    <svg
      width="140"
      height="25"
      viewBox="0 0 140 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M67.29 17.8L63.19 20.2L56.93 23.81C55.96 24.36 54.94 24.64 53.86 24.64H37.57C35.8 24.64 34.16 24.2 32.64 23.31C31.15 22.43 29.96 21.24 29.08 19.75C28.2 18.23 27.75 16.59 27.75 14.82C27.75 12.11 28.7 9.8 30.61 7.9C32.54 5.97 34.87 5 37.57 5H67.29V8.9L66.42 9.44L63.93 10.85L57.67 14.5C56.73 15.03 55.71 15.29 54.6 15.29H32.22C32.33 16.67 32.9 17.85 33.92 18.81C34.97 19.75 36.19 20.22 37.57 20.22H59.62C60.73 20.22 61.75 19.94 62.69 19.39L67.29 16.74V17.82V17.8ZM37.57 9.43C36.19 9.43 34.97 9.91 33.92 10.88C32.9 11.82 32.33 12.97 32.22 14.32H54.35C55.43 14.32 56.45 14.06 57.42 13.53L60.45 11.75L64.51 9.43H37.57Z"
        fill="currentColor"
      />
      <path
        d="M4.43 13.83L12.06 9.44L18.32 5.83C19.26 5.28 20.28 5 21.39 5H25.33V9.43H15.58C14.47 9.43 13.45 9.71 12.51 10.26L7.49 13.12C6.52 13.7 5.76 14.46 5.21 15.4C4.68 16.31 4.42 17.32 4.42 18.43V24.65H0V5H4.43V13.83Z"
        fill="currentColor"
      />
      <path d="M139.29 6H134.86V24.65H139.29V6Z" fill="currentColor" />
      <path
        d="M139.29 2.215C139.29 0.991689 138.298 0 137.075 0C135.852 0 134.86 0.991689 134.86 2.215C134.86 3.43831 135.852 4.43 137.075 4.43C138.298 4.43 139.29 3.43831 139.29 2.215Z"
        fill="#F96666"
      />
      <path
        d="M76.43 13.83L84.06 9.44L90.32 5.83C91.26 5.28 92.27 5 93.35 5H93.64C96.15 5 98.34 5.86 100.19 7.57C102.07 9.26 103.15 11.34 103.42 13.83H103.46L111.05 9.44L117.31 5.83C118.28 5.28 119.3 5 120.38 5H120.67C123.35 5 125.66 5.97 127.59 7.9C129.52 9.81 130.49 12.11 130.49 14.82V24.64H126.06V14.82C126.06 13.85 125.81 12.95 125.31 12.13C124.84 11.3 124.19 10.65 123.36 10.18C122.53 9.68 121.63 9.43 120.67 9.43H114.62C113.51 9.43 112.49 9.71 111.55 10.26L106.53 13.12C106.03 13.42 105.59 13.77 105.2 14.16C104.84 14.52 104.52 14.93 104.25 15.4C104 15.84 103.81 16.33 103.67 16.85C103.53 17.35 103.46 17.87 103.46 18.42V24.64H99.03V14.82C99.03 13.33 98.49 12.06 97.41 11.01C96.36 9.96 95.1 9.43 93.64 9.43H87.59C86.48 9.43 85.46 9.71 84.52 10.26L79.5 13.12C78.53 13.7 77.77 14.46 77.22 15.4C76.69 16.31 76.43 17.32 76.43 18.43V24.65H72V5H76.43V13.83Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Logo;
