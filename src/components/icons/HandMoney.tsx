import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconHandMoney: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.4142 10.4143C18 9.82855 18 8.88574 18 7.00012C18 5.1145 18 4.17169 17.4142 3.58591M17.4142 10.4143C16.8284 11.0001 15.8856 11.0001 14 11.0001H10C8.11438 11.0001 7.17157 11.0001 6.58579 10.4143M17.4142 10.4143C17.4142 10.4143 17.4142 10.4143 17.4142 10.4143ZM17.4142 3.58591C16.8284 3.00012 15.8856 3.00012 14 3.00012L10 3.00012C8.11438 3.00012 7.17157 3.00012 6.58579 3.58591M17.4142 3.58591C17.4142 3.58591 17.4142 3.58591 17.4142 3.58591ZM6.58579 3.58591C6 4.1717 6 5.1145 6 7.00012C6 8.88574 6 9.82855 6.58579 10.4143M6.58579 3.58591C6.58579 3.58591 6.58579 3.58591 6.58579 3.58591ZM6.58579 10.4143C6.58579 10.4143 6.58579 10.4143 6.58579 10.4143Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M13 7.00012C13 7.55241 12.5523 8.00012 12 8.00012C11.4477 8.00012 11 7.55241 11 7.00012C11 6.44784 11.4477 6.00012 12 6.00012C12.5523 6.00012 13 6.44784 13 7.00012Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M18 6.00012C16.3431 6.00012 15 4.65698 15 3.00012" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M18 8.00012C16.3431 8.00012 15 9.34327 15 11.0001" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M6 6.00012C7.65685 6.00012 9 4.65698 9 3.00012" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M6 8.00012C7.65685 8.00012 9 9.34327 9 11.0001" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M4 21.3885H6.25993C7.27079 21.3885 8.29253 21.4938 9.27633 21.6965C11.0166 22.055 12.8488 22.0985 14.6069 21.8139C15.4738 21.6736 16.326 21.459 17.0975 21.0867C17.7939 20.7505 18.6469 20.2767 19.2199 19.746C19.7921 19.2161 20.388 18.3488 20.8109 17.6709C21.1736 17.0895 20.9982 16.3763 20.4245 15.9432C19.7873 15.462 18.8417 15.4621 18.2046 15.9434L16.3974 17.3086C15.697 17.8376 14.932 18.3247 14.0206 18.47C13.911 18.4875 13.7962 18.5034 13.6764 18.5173M13.6764 18.5173C13.6403 18.5215 13.6038 18.5255 13.5668 18.5293M13.6764 18.5173C13.8222 18.4861 13.9669 18.3962 14.1028 18.2776C14.746 17.7162 14.7866 16.7701 14.2285 16.1432C14.0991 15.9978 13.9475 15.8765 13.7791 15.776C10.9817 14.1076 6.62942 15.3783 4 17.243M13.6764 18.5173C13.6399 18.5251 13.6033 18.5293 13.5668 18.5293M13.5668 18.5293C13.0434 18.583 12.4312 18.5969 11.7518 18.5328" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M6.25993 21.3885H6C5.05719 21.3885 4.58579 21.3885 4.29289 21.0956C4 20.8027 4 20.3313 4 19.3885V18.2766C4 17.7581 4 17.4988 4.13318 17.2673C4.26636 17.0358 4.46727 16.9189 4.8691 16.6852C7.51457 15.1466 11.2715 14.2804 13.7791 15.776C13.9475 15.8765 14.0991 15.9978 14.2285 16.1432C14.7866 16.7701 14.746 17.7162 14.1028 18.2776C13.9669 18.3962 13.8222 18.4861 13.6764 18.5173C13.7962 18.5034 13.911 18.4875 14.0206 18.47C14.932 18.3247 15.697 17.8376 16.3974 17.3086L18.2046 15.9434C18.8417 15.4621 19.7873 15.462 20.4245 15.9432C20.9982 16.3763 21.1736 17.0895 20.8109 17.6709C20.388 18.3488 19.7921 19.2161 19.2199 19.746C18.6469 20.2767 17.7939 20.7505 17.0975 21.0867C16.326 21.459 15.4738 21.6736 14.6069 21.8139C12.8488 22.0985 11.0166 22.055 9.27633 21.6965C8.29253 21.4938 7.27079 21.3885 6.25993 21.3885Z" fill="currentColor" /><path d="M6.58579 2.58591C6.21901 2.95268 6.08188 3.45942 6.03061 4.24992C7.24895 4.23367 8.23355 3.24908 8.2498 2.03074C7.4593 2.08201 6.95256 2.21913 6.58579 2.58591Z" fill="currentColor" /><path d="M17.4142 2.58591C17.0474 2.21913 16.5407 2.082 15.7502 2.03073C15.7664 3.24908 16.751 4.23367 17.9694 4.24992C17.9181 3.45942 17.781 2.95268 17.4142 2.58591Z" fill="currentColor" /><path d="M17.4142 9.41434C17.0474 9.78111 16.5407 9.91824 15.7502 9.96951C15.7665 8.75116 16.751 7.76657 17.9694 7.75033C17.9181 8.54082 17.781 9.04756 17.4142 9.41434Z" fill="currentColor" /><path d="M6.58579 9.41434C6.95256 9.78111 7.4593 9.91824 8.2498 9.96951C8.23355 8.75117 7.24895 7.76657 6.03061 7.75033C6.08188 8.54082 6.21901 9.04756 6.58579 9.41434Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M6 5.75012C8.07107 5.75012 9.75 4.07119 9.75 2.00012H14.25C14.25 4.07119 15.9289 5.75012 18 5.75012V6.25012C15.9289 6.25012 14.25 7.92905 14.25 10.0001H9.75C9.75 7.92905 8.07107 6.25012 6 6.25012V5.75012ZM12 7.00012C12.5523 7.00012 13 6.55241 13 6.00012C13 5.44784 12.5523 5.00012 12 5.00012C11.4477 5.00012 11 5.44784 11 6.00012C11 6.55241 11.4477 7.00012 12 7.00012Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.25993 21.3885H6C5.05719 21.3885 4.58579 21.3885 4.29289 21.0956C4 20.8027 4 20.3313 4 19.3885V18.2766C4 17.7581 4 17.4988 4.13318 17.2673C4.26636 17.0358 4.46727 16.9189 4.8691 16.6852C7.51457 15.1466 11.2715 14.2804 13.7791 15.776C13.9475 15.8765 14.0991 15.9978 14.2285 16.1432C14.7866 16.7701 14.746 17.7162 14.1028 18.2776C13.9669 18.3962 13.8222 18.4861 13.6764 18.5173C13.7962 18.5034 13.911 18.4875 14.0206 18.47C14.932 18.3247 15.697 17.8376 16.3974 17.3086L18.2046 15.9434C18.8417 15.4621 19.7873 15.462 20.4245 15.9432C20.9982 16.3763 21.1736 17.0895 20.8109 17.6709C20.388 18.3488 19.7921 19.2161 19.2199 19.746C18.6469 20.2767 17.7939 20.7505 17.0975 21.0867C16.326 21.459 15.4738 21.6736 14.6069 21.8139C12.8488 22.0985 11.0166 22.055 9.27633 21.6965C8.29253 21.4938 7.27079 21.3885 6.25993 21.3885Z" fill="currentColor" /><path d="M6.58579 2.58591C6.21901 2.95268 6.08188 3.45942 6.03061 4.24992C7.24895 4.23367 8.23355 3.24908 8.2498 2.03074C7.4593 2.08201 6.95256 2.21913 6.58579 2.58591Z" fill="currentColor" /><path d="M17.4142 2.58591C17.0474 2.21913 16.5407 2.082 15.7502 2.03073C15.7664 3.24908 16.751 4.23367 17.9694 4.24992C17.9181 3.45942 17.781 2.95268 17.4142 2.58591Z" fill="currentColor" /><path d="M17.4142 9.41434C17.0474 9.78111 16.5407 9.91824 15.7502 9.96951C15.7665 8.75116 16.751 7.76657 17.9694 7.75033C17.9181 8.54082 17.781 9.04756 17.4142 9.41434Z" fill="currentColor" /><path d="M6.58579 9.41434C6.95256 9.78111 7.4593 9.91824 8.2498 9.96951C8.23355 8.75117 7.24895 7.76657 6.03061 7.75033C6.08188 8.54082 6.21901 9.04756 6.58579 9.41434Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M6 5.75012C8.07107 5.75012 9.75 4.07119 9.75 2.00012H14.25C14.25 4.07119 15.9289 5.75012 18 5.75012V6.25012C15.9289 6.25012 14.25 7.92905 14.25 10.0001H9.75C9.75 7.92905 8.07107 6.25012 6 6.25012V5.75012ZM12 7.00012C12.5523 7.00012 13 6.55241 13 6.00012C13 5.44784 12.5523 5.00012 12 5.00012C11.4477 5.00012 11 5.44784 11 6.00012C11 6.55241 11.4477 7.00012 12 7.00012Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHandMoney as IconComponentType).keywords = [
  "hand",
  "money",
  "manus",
  "paw",
  "hired hand",
  "mitt",
  "mauler",
  "hook",
  "reach",
  "handwriting",
  "script",
  "rich",
  "monied",
  "wealthy",
  "affluent",
  "loaded",
  "flush",
  "muni",
  "finance",
  "financing"
];

export default IconHandMoney as IconComponentType;