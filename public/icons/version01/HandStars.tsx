import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconHandStars: FC<IconProps> = ({
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
            d="M10.8613 3.36347C11.3679 2.45457 11.6213 2.00012 12 2.00012C12.3787 2.00012 12.6321 2.45457 13.1387 3.36347L13.2698 3.59862C13.4138 3.8569 13.4858 3.98604 13.598 4.07124C13.7103 4.15645 13.8501 4.18808 14.1296 4.25134L14.3842 4.30893C15.3681 4.53154 15.86 4.64285 15.977 5.01921C16.0941 5.39558 15.7587 5.78775 15.088 6.57209L14.9144 6.77501C14.7238 6.9979 14.6285 7.10934 14.5857 7.24721C14.5428 7.38508 14.5572 7.53377 14.586 7.83114L14.6122 8.10188C14.7136 9.14836 14.7644 9.6716 14.4579 9.90421C14.1515 10.1368 13.6909 9.92474 12.7697 9.50059L12.5314 9.39086C12.2696 9.27033 12.1387 9.21006 12 9.21006C11.8613 9.21006 11.7304 9.27033 11.4686 9.39086L11.2303 9.50059C10.3091 9.92474 9.84847 10.1368 9.54206 9.90421C9.23565 9.6716 9.28635 9.14836 9.38776 8.10188L9.41399 7.83114C9.44281 7.53377 9.45722 7.38508 9.41435 7.24721C9.37147 7.10934 9.27617 6.9979 9.08557 6.77501L8.91204 6.57209C8.2413 5.78775 7.90593 5.39558 8.02297 5.01921C8.14001 4.64285 8.63194 4.53154 9.61581 4.30893L9.87035 4.25134C10.1499 4.18808 10.2897 4.15645 10.402 4.07124C10.5142 3.98604 10.5862 3.8569 10.7302 3.59862L10.8613 3.36347Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M19.4306 7.6818C19.684 7.22735 19.8106 7.00012 20 7.00012C20.1894 7.00012 20.316 7.22735 20.5694 7.6818L20.6349 7.79937C20.7069 7.92851 20.7429 7.99308 20.799 8.03568C20.8551 8.07829 20.925 8.0941 21.0648 8.12573L21.1921 8.15453C21.684 8.26583 21.93 8.32149 21.9885 8.50967C22.047 8.69785 21.8794 8.89394 21.544 9.28611L21.4572 9.38757C21.3619 9.49901 21.3143 9.55473 21.2928 9.62367C21.2714 9.6926 21.2786 9.76694 21.293 9.91563L21.3061 10.051C21.3568 10.5742 21.3822 10.8359 21.229 10.9522C21.0758 11.0685 20.8455 10.9624 20.3849 10.7504L20.2657 10.6955C20.1348 10.6352 20.0694 10.6051 20 10.6051C19.9306 10.6051 19.8652 10.6352 19.7343 10.6955L19.6151 10.7504C19.1545 10.9624 18.9242 11.0685 18.771 10.9522C18.6178 10.8359 18.6432 10.5742 18.6939 10.051L18.707 9.91563C18.7214 9.76694 18.7286 9.6926 18.7072 9.62367C18.6857 9.55473 18.6381 9.49901 18.5428 9.38757L18.456 9.28611C18.1206 8.89394 17.953 8.69785 18.0115 8.50967C18.07 8.32149 18.316 8.26583 18.8079 8.15453L18.9352 8.12573C19.075 8.0941 19.1449 8.07829 19.201 8.03568C19.2571 7.99308 19.2931 7.92851 19.3651 7.79937L19.4306 7.6818Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M3.43063 7.6818C3.68396 7.22735 3.81063 7.00012 4 7.00012C4.18937 7.00012 4.31604 7.22735 4.56937 7.6818L4.63491 7.79937C4.7069 7.92851 4.74289 7.99308 4.79901 8.03568C4.85513 8.07829 4.92503 8.0941 5.06482 8.12573L5.19209 8.15453C5.68403 8.26583 5.93 8.32149 5.98852 8.50967C6.04704 8.69785 5.87935 8.89394 5.54398 9.28611L5.45722 9.38757C5.36191 9.49901 5.31426 9.55473 5.29283 9.62367C5.27139 9.6926 5.27859 9.76694 5.293 9.91563L5.30612 10.051C5.35682 10.5742 5.38218 10.8359 5.22897 10.9522C5.07576 11.0685 4.84547 10.9624 4.38487 10.7504L4.2657 10.6955C4.13481 10.6352 4.06937 10.6051 4 10.6051C3.93063 10.6051 3.86519 10.6352 3.7343 10.6955L3.61513 10.7504C3.15454 10.9624 2.92424 11.0685 2.77103 10.9522C2.61782 10.8359 2.64318 10.5742 2.69388 10.051L2.707 9.91563C2.72141 9.76694 2.72861 9.6926 2.70717 9.62367C2.68574 9.55473 2.63809 9.49901 2.54278 9.38757L2.45602 9.28611C2.12065 8.89394 1.95296 8.69785 2.01148 8.50967C2.07 8.32149 2.31597 8.26583 2.80791 8.15453L2.93518 8.12573C3.07497 8.0941 3.14487 8.07829 3.20099 8.03568C3.25711 7.99308 3.29311 7.92851 3.36509 7.79937L3.43063 7.6818Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M4 21.3885H6.25993C7.27079 21.3885 8.29253 21.4938 9.27633 21.6965C11.0166 22.055 12.8488 22.0985 14.6069 21.8139C15.4738 21.6736 16.326 21.459 17.0975 21.0867C17.7939 20.7505 18.6469 20.2767 19.2199 19.746C19.7921 19.2161 20.388 18.3488 20.8109 17.6709C21.1736 17.0895 20.9982 16.3763 20.4245 15.9432C19.7873 15.462 18.8417 15.4621 18.2046 15.9434L16.3974 17.3086C15.697 17.8376 14.932 18.3247 14.0206 18.47C13.911 18.4875 13.7962 18.5034 13.6764 18.5173M13.6764 18.5173C13.6403 18.5215 13.6038 18.5255 13.5668 18.5293M13.6764 18.5173C13.8222 18.4861 13.9669 18.3962 14.1028 18.2776C14.746 17.7162 14.7866 16.7701 14.2285 16.1432C14.0991 15.9978 13.9475 15.8765 13.7791 15.776C10.9817 14.1076 6.62942 15.3783 4 17.243M13.6764 18.5173C13.6399 18.5251 13.6033 18.5293 13.5668 18.5293M13.5668 18.5293C13.0434 18.583 12.4312 18.5969 11.7518 18.5328"
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
            d="M6.25993 21.3885H6C5.05719 21.3885 4.58579 21.3885 4.29289 21.0956C4 20.8027 4 20.3313 4 19.3885V18.2766C4 17.7581 4 17.4988 4.13318 17.2673C4.26636 17.0358 4.46727 16.9189 4.8691 16.6852C7.51457 15.1466 11.2715 14.2804 13.7791 15.776C13.9475 15.8765 14.0991 15.9978 14.2285 16.1432C14.7866 16.7701 14.746 17.7162 14.1028 18.2776C13.9669 18.3962 13.8222 18.4861 13.6764 18.5173C13.7962 18.5034 13.911 18.4875 14.0206 18.47C14.932 18.3247 15.697 17.8376 16.3974 17.3086L18.2046 15.9434C18.8417 15.4621 19.7873 15.462 20.4245 15.9432C20.9982 16.3763 21.1736 17.0895 20.8109 17.6709C20.388 18.3488 19.7921 19.2161 19.2199 19.746C18.6469 20.2767 17.7939 20.7505 17.0975 21.0867C16.326 21.459 15.4738 21.6736 14.6069 21.8139C12.8488 22.0985 11.0166 22.055 9.27633 21.6965C8.29253 21.4938 7.27079 21.3885 6.25993 21.3885Z"
            fill="currentColor"
          />
          <path
            d="M10.8613 3.36347C11.3679 2.45457 11.6213 2.00012 12 2.00012C12.3787 2.00012 12.6321 2.45457 13.1387 3.36347L13.2698 3.59862C13.4138 3.8569 13.4858 3.98604 13.598 4.07124C13.7103 4.15645 13.8501 4.18808 14.1296 4.25134L14.3842 4.30893C15.3681 4.53154 15.86 4.64285 15.977 5.01921C16.0941 5.39558 15.7587 5.78775 15.088 6.57209L14.9144 6.77501C14.7238 6.9979 14.6285 7.10934 14.5857 7.24721C14.5428 7.38508 14.5572 7.53377 14.586 7.83114L14.6122 8.10188C14.7136 9.14836 14.7644 9.6716 14.4579 9.90421C14.1515 10.1368 13.6909 9.92474 12.7697 9.50059L12.5314 9.39086C12.2696 9.27033 12.1387 9.21006 12 9.21006C11.8613 9.21006 11.7304 9.27033 11.4686 9.39086L11.2303 9.50059C10.3091 9.92474 9.84847 10.1368 9.54206 9.90421C9.23565 9.6716 9.28635 9.14836 9.38776 8.10188L9.41399 7.83114C9.44281 7.53377 9.45722 7.38508 9.41435 7.24721C9.37147 7.10934 9.27617 6.9979 9.08557 6.77501L8.91204 6.57209C8.2413 5.78775 7.90593 5.39558 8.02297 5.01921C8.14001 4.64285 8.63194 4.53154 9.61581 4.30893L9.87035 4.25134C10.1499 4.18808 10.2897 4.15645 10.402 4.07124C10.5142 3.98604 10.5862 3.8569 10.7302 3.59862L10.8613 3.36347Z"
            fill="currentColor"
          />
          <path
            d="M19.4306 7.6818C19.684 7.22735 19.8106 7.00012 20 7.00012C20.1894 7.00012 20.316 7.22735 20.5694 7.6818L20.6349 7.79937C20.7069 7.92851 20.7429 7.99308 20.799 8.03568C20.8551 8.07829 20.925 8.0941 21.0648 8.12573L21.1921 8.15453C21.684 8.26583 21.93 8.32149 21.9885 8.50967C22.047 8.69785 21.8794 8.89394 21.544 9.28611L21.4572 9.38757C21.3619 9.49901 21.3143 9.55473 21.2928 9.62367C21.2714 9.6926 21.2786 9.76694 21.293 9.91563L21.3061 10.051C21.3568 10.5742 21.3822 10.8359 21.229 10.9522C21.0758 11.0685 20.8455 10.9624 20.3849 10.7504L20.2657 10.6955C20.1348 10.6352 20.0694 10.6051 20 10.6051C19.9306 10.6051 19.8652 10.6352 19.7343 10.6955L19.6151 10.7504C19.1545 10.9624 18.9242 11.0685 18.771 10.9522C18.6178 10.8359 18.6432 10.5742 18.6939 10.051L18.707 9.91563C18.7214 9.76694 18.7286 9.6926 18.7072 9.62367C18.6857 9.55473 18.6381 9.49901 18.5428 9.38757L18.456 9.28611C18.1207 8.89394 17.953 8.69785 18.0115 8.50967C18.07 8.32149 18.316 8.26583 18.8079 8.15453L18.9352 8.12573C19.075 8.0941 19.1449 8.07829 19.201 8.03568C19.2571 7.99308 19.2931 7.92851 19.3651 7.79937L19.4306 7.6818Z"
            fill="currentColor"
          />
          <path
            d="M3.43063 7.6818C3.68396 7.22735 3.81063 7.00012 4 7.00012C4.18937 7.00012 4.31604 7.22735 4.56937 7.6818L4.63491 7.79937C4.7069 7.92851 4.74289 7.99308 4.79901 8.03568C4.85513 8.07829 4.92503 8.0941 5.06482 8.12573L5.19209 8.15453C5.68403 8.26583 5.93 8.32149 5.98852 8.50967C6.04704 8.69785 5.87935 8.89394 5.54398 9.28611L5.45722 9.38757C5.36191 9.49901 5.31426 9.55473 5.29283 9.62367C5.27139 9.6926 5.27859 9.76694 5.293 9.91563L5.30612 10.051C5.35682 10.5742 5.38218 10.8359 5.22897 10.9522C5.07576 11.0685 4.84547 10.9624 4.38487 10.7504L4.2657 10.6955C4.13481 10.6352 4.06937 10.6051 4 10.6051C3.93063 10.6051 3.86519 10.6352 3.7343 10.6955L3.61513 10.7504C3.15454 10.9624 2.92424 11.0685 2.77103 10.9522C2.61782 10.8359 2.64318 10.5742 2.69388 10.051L2.707 9.91563C2.72141 9.76694 2.72861 9.6926 2.70717 9.62367C2.68574 9.55473 2.63809 9.49901 2.54278 9.38757L2.45602 9.28611C2.12065 8.89394 1.95296 8.69785 2.01148 8.50967C2.07 8.32149 2.31597 8.26583 2.80791 8.15453L2.93518 8.12573C3.07497 8.0941 3.14487 8.07829 3.20099 8.03568C3.25711 7.99308 3.29311 7.92851 3.36509 7.79937L3.43063 7.6818Z"
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
            d="M6.25993 21.3885H6C5.05719 21.3885 4.58579 21.3885 4.29289 21.0956C4 20.8027 4 20.3313 4 19.3885V18.2766C4 17.7581 4 17.4988 4.13318 17.2673C4.26636 17.0358 4.46727 16.9189 4.8691 16.6852C7.51457 15.1466 11.2715 14.2804 13.7791 15.776C13.9475 15.8765 14.0991 15.9978 14.2285 16.1432C14.7866 16.7701 14.746 17.7162 14.1028 18.2776C13.9669 18.3962 13.8222 18.4861 13.6764 18.5173C13.7962 18.5034 13.911 18.4875 14.0206 18.47C14.932 18.3247 15.697 17.8376 16.3974 17.3086L18.2046 15.9434C18.8417 15.4621 19.7873 15.462 20.4245 15.9432C20.9982 16.3763 21.1736 17.0895 20.8109 17.6709C20.388 18.3488 19.7921 19.2161 19.2199 19.746C18.6469 20.2767 17.7939 20.7505 17.0975 21.0867C16.326 21.459 15.4738 21.6736 14.6069 21.8139C12.8488 22.0985 11.0166 22.055 9.27633 21.6965C8.29253 21.4938 7.27079 21.3885 6.25993 21.3885Z"
            fill="currentColor"
          />
          <path
            d="M10.8613 3.36347C11.3679 2.45457 11.6213 2.00012 12 2.00012C12.3787 2.00012 12.6321 2.45457 13.1387 3.36347L13.2698 3.59862C13.4138 3.8569 13.4858 3.98604 13.598 4.07124C13.7103 4.15645 13.8501 4.18808 14.1296 4.25134L14.3842 4.30893C15.3681 4.53154 15.86 4.64285 15.977 5.01921C16.0941 5.39558 15.7587 5.78775 15.088 6.57209L14.9144 6.77501C14.7238 6.9979 14.6285 7.10934 14.5857 7.24721C14.5428 7.38508 14.5572 7.53377 14.586 7.83114L14.6122 8.10188C14.7136 9.14836 14.7644 9.6716 14.4579 9.90421C14.1515 10.1368 13.6909 9.92474 12.7697 9.50059L12.5314 9.39086C12.2696 9.27033 12.1387 9.21006 12 9.21006C11.8613 9.21006 11.7304 9.27033 11.4686 9.39086L11.2303 9.50059C10.3091 9.92474 9.84847 10.1368 9.54206 9.90421C9.23565 9.6716 9.28635 9.14836 9.38776 8.10188L9.41399 7.83114C9.44281 7.53377 9.45722 7.38508 9.41435 7.24721C9.37147 7.10934 9.27617 6.9979 9.08557 6.77501L8.91204 6.57209C8.2413 5.78775 7.90593 5.39558 8.02297 5.01921C8.14001 4.64285 8.63194 4.53154 9.61581 4.30893L9.87035 4.25134C10.1499 4.18808 10.2897 4.15645 10.402 4.07124C10.5142 3.98604 10.5862 3.8569 10.7302 3.59862L10.8613 3.36347Z"
            fill="currentColor"
          />
          <path
            d="M19.4306 7.6818C19.684 7.22735 19.8106 7.00012 20 7.00012C20.1894 7.00012 20.316 7.22735 20.5694 7.6818L20.6349 7.79937C20.7069 7.92851 20.7429 7.99308 20.799 8.03568C20.8551 8.07829 20.925 8.0941 21.0648 8.12573L21.1921 8.15453C21.684 8.26583 21.93 8.32149 21.9885 8.50967C22.047 8.69785 21.8794 8.89394 21.544 9.28611L21.4572 9.38757C21.3619 9.49901 21.3143 9.55473 21.2928 9.62367C21.2714 9.6926 21.2786 9.76694 21.293 9.91563L21.3061 10.051C21.3568 10.5742 21.3822 10.8359 21.229 10.9522C21.0758 11.0685 20.8455 10.9624 20.3849 10.7504L20.2657 10.6955C20.1348 10.6352 20.0694 10.6051 20 10.6051C19.9306 10.6051 19.8652 10.6352 19.7343 10.6955L19.6151 10.7504C19.1545 10.9624 18.9242 11.0685 18.771 10.9522C18.6178 10.8359 18.6432 10.5742 18.6939 10.051L18.707 9.91563C18.7214 9.76694 18.7286 9.6926 18.7072 9.62367C18.6857 9.55473 18.6381 9.49901 18.5428 9.38757L18.456 9.28611C18.1207 8.89394 17.953 8.69785 18.0115 8.50967C18.07 8.32149 18.316 8.26583 18.8079 8.15453L18.9352 8.12573C19.075 8.0941 19.1449 8.07829 19.201 8.03568C19.2571 7.99308 19.2931 7.92851 19.3651 7.79937L19.4306 7.6818Z"
            fill="currentColor"
          />
          <path
            d="M3.43063 7.6818C3.68396 7.22735 3.81063 7.00012 4 7.00012C4.18937 7.00012 4.31604 7.22735 4.56937 7.6818L4.63491 7.79937C4.7069 7.92851 4.74289 7.99308 4.79901 8.03568C4.85513 8.07829 4.92503 8.0941 5.06482 8.12573L5.19209 8.15453C5.68403 8.26583 5.93 8.32149 5.98852 8.50967C6.04704 8.69785 5.87935 8.89394 5.54398 9.28611L5.45722 9.38757C5.36191 9.49901 5.31426 9.55473 5.29283 9.62367C5.27139 9.6926 5.27859 9.76694 5.293 9.91563L5.30612 10.051C5.35682 10.5742 5.38218 10.8359 5.22897 10.9522C5.07576 11.0685 4.84547 10.9624 4.38487 10.7504L4.2657 10.6955C4.13481 10.6352 4.06937 10.6051 4 10.6051C3.93063 10.6051 3.86519 10.6352 3.7343 10.6955L3.61513 10.7504C3.15454 10.9624 2.92424 11.0685 2.77103 10.9522C2.61782 10.8359 2.64318 10.5742 2.69388 10.051L2.707 9.91563C2.72141 9.76694 2.72861 9.6926 2.70717 9.62367C2.68574 9.55473 2.63809 9.49901 2.54278 9.38757L2.45602 9.28611C2.12065 8.89394 1.95296 8.69785 2.01148 8.50967C2.07 8.32149 2.31597 8.26583 2.80791 8.15453L2.93518 8.12573C3.07497 8.0941 3.14487 8.07829 3.20099 8.03568C3.25711 7.99308 3.29311 7.92851 3.36509 7.79937L3.43063 7.6818Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHandStars as IconComponentType).keywords = [
  "hand",
  "stars",
  "manus",
  "paw",
  "hired hand",
  "mitt",
  "mauler",
  "hook",
  "reach",
  "handwriting",
  "script",
  "stellar",
  "asterisk",
  "lead",
  "leading",
  "maven",
  "sensation",
  "principal",
  "whizz",
  "headliner",
];

export default IconHandStars as IconComponentType;
