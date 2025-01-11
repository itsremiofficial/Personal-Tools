import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconPhoneCalling: FC<IconProps> = ({
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
            d="M13.5 2.00012C13.5 2.00012 15.8335 2.21225 18.8033 5.1821C21.7731 8.15195 21.9853 10.4854 21.9853 10.4854"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M14.207 5.53564C14.207 5.53564 15.197 5.81849 16.6819 7.30341C18.1668 8.78834 18.4497 9.77829 18.4497 9.77829"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M15.1007 15.0272L14.5569 14.5107L15.1007 15.0272ZM15.5562 14.5477L16.1 15.0642H16.1L15.5562 14.5477ZM17.9728 14.2123L17.5987 14.8623H17.5987L17.9728 14.2123ZM19.8833 15.312L19.5092 15.962L19.8833 15.312ZM20.4217 18.7584L20.9655 19.2749L20.4217 18.7584ZM19.0011 20.254L18.4573 19.7375L19.0011 20.254ZM17.6763 20.9631L17.7499 21.7095L17.6763 20.9631ZM7.81536 16.4752L8.35915 15.9587L7.81536 16.4752ZM3.00289 6.96594L2.25397 7.00613L2.25397 7.00613L3.00289 6.96594ZM9.47752 8.50311L10.0213 9.01963H10.0213L9.47752 8.50311ZM9.63424 5.6931L10.2466 5.26012L9.63424 5.6931ZM8.37326 3.90961L7.76086 4.3426V4.3426L8.37326 3.90961ZM5.26145 3.60864L5.80524 4.12516L5.26145 3.60864ZM3.69185 5.26114L3.14806 4.74462L3.14806 4.74462L3.69185 5.26114ZM11.0631 13.0559L11.6069 12.5394L11.0631 13.0559ZM15.6445 15.5437L16.1 15.0642L15.0124 14.0312L14.5569 14.5107L15.6445 15.5437ZM17.5987 14.8623L19.5092 15.962L20.2575 14.662L18.347 13.5623L17.5987 14.8623ZM19.8779 18.2419L18.4573 19.7375L19.5449 20.7705L20.9655 19.2749L19.8779 18.2419ZM17.6026 20.2167C16.1676 20.3584 12.4233 20.2375 8.35915 15.9587L7.27157 16.9917C11.7009 21.655 15.9261 21.8895 17.7499 21.7095L17.6026 20.2167ZM8.35915 15.9587C4.48303 11.8778 3.83285 8.43556 3.75181 6.92574L2.25397 7.00613C2.35322 8.85536 3.1384 12.6403 7.27157 16.9917L8.35915 15.9587ZM9.7345 9.32159L10.0213 9.01963L8.93372 7.9866L8.64691 8.28856L9.7345 9.32159ZM10.2466 5.26012L8.98565 3.47663L7.76086 4.3426L9.02185 6.12608L10.2466 5.26012ZM4.71766 3.09213L3.14806 4.74462L4.23564 5.77765L5.80524 4.12516L4.71766 3.09213ZM9.1907 8.80507C8.64691 8.28856 8.64622 8.28929 8.64552 8.29002C8.64528 8.29028 8.64458 8.29102 8.64411 8.29152C8.64316 8.29254 8.64219 8.29357 8.64121 8.29463C8.63924 8.29675 8.6372 8.29896 8.6351 8.30127C8.63091 8.30588 8.62646 8.31087 8.62178 8.31625C8.61243 8.32701 8.60215 8.33931 8.59116 8.3532C8.56918 8.38098 8.54431 8.41512 8.51822 8.45588C8.46591 8.53764 8.40917 8.64531 8.36112 8.78033C8.26342 9.0549 8.21018 9.4185 8.27671 9.87257C8.40742 10.7647 8.99198 11.9644 10.5193 13.5724L11.6069 12.5394C10.1793 11.0363 9.82761 10.1106 9.76086 9.65511C9.72866 9.43536 9.76138 9.31957 9.77432 9.28321C9.78159 9.26277 9.78635 9.25709 9.78169 9.26437C9.77944 9.26789 9.77494 9.27451 9.76738 9.28407C9.76359 9.28885 9.75904 9.29437 9.7536 9.30063C9.75088 9.30375 9.74793 9.30706 9.74476 9.31056C9.74317 9.31231 9.74152 9.3141 9.73981 9.31594C9.73896 9.31686 9.73809 9.31779 9.7372 9.31873C9.73676 9.3192 9.73608 9.31992 9.73586 9.32015C9.73518 9.32087 9.7345 9.32159 9.1907 8.80507ZM10.5193 13.5724C12.0422 15.1757 13.1923 15.806 14.0698 15.9485C14.5201 16.0216 14.8846 15.9632 15.1606 15.8544C15.2955 15.8012 15.4022 15.7387 15.4823 15.6819C15.5223 15.6535 15.5556 15.6266 15.5824 15.6031C15.5959 15.5913 15.6077 15.5803 15.618 15.5703C15.6232 15.5654 15.628 15.5606 15.6324 15.5562C15.6346 15.554 15.6367 15.5518 15.6387 15.5497C15.6397 15.5487 15.6407 15.5477 15.6417 15.5467C15.6422 15.5462 15.6429 15.5454 15.6431 15.5452C15.6438 15.5444 15.6445 15.5437 15.1007 15.0272C14.5569 14.5107 14.5576 14.51 14.5583 14.5093C14.5585 14.509 14.5592 14.5083 14.5596 14.5078C14.5605 14.5069 14.5614 14.506 14.5623 14.5051C14.5641 14.5033 14.5658 14.5015 14.5674 14.4998C14.5708 14.4965 14.574 14.4933 14.577 14.4904C14.583 14.4846 14.5885 14.4796 14.5933 14.4754C14.6028 14.467 14.6099 14.4616 14.6145 14.4584C14.6239 14.4517 14.6229 14.454 14.6102 14.459C14.5909 14.4666 14.5 14.4987 14.3103 14.4679C13.9077 14.4025 13.0391 14.0472 11.6069 12.5394L10.5193 13.5724ZM8.98565 3.47663C7.97206 2.04305 5.94384 1.80119 4.71766 3.09213L5.80524 4.12516C6.32808 3.57471 7.24851 3.61795 7.76086 4.3426L8.98565 3.47663ZM3.75181 6.92574C3.73038 6.52644 3.90425 6.12654 4.23564 5.77765L3.14806 4.74462C2.61221 5.30877 2.20493 6.09246 2.25397 7.00613L3.75181 6.92574ZM18.4573 19.7375C18.1783 20.0313 17.8864 20.1887 17.6026 20.2167L17.7499 21.7095C18.497 21.6357 19.1016 21.2373 19.5449 20.7705L18.4573 19.7375ZM10.0213 9.01963C10.9889 8.00095 11.0574 6.40678 10.2466 5.26012L9.02185 6.12608C9.44399 6.72315 9.37926 7.51753 8.93372 7.9866L10.0213 9.01963ZM19.5092 15.962C20.33 16.4345 20.4907 17.5968 19.8779 18.2419L20.9655 19.2749C22.2704 17.901 21.8904 15.6019 20.2575 14.662L19.5092 15.962ZM16.1 15.0642C16.4854 14.6584 17.086 14.5672 17.5987 14.8623L18.347 13.5623C17.2485 12.93 15.8861 13.1113 15.0124 14.0312L16.1 15.0642Z"
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
            opacity={duotone ? "0.5" : "1"}
            d="M15.5562 14.5477L15.1007 15.0272C15.1007 15.0272 14.0181 16.167 11.0631 13.0559C8.10812 9.94484 9.1907 8.80507 9.1907 8.80507L9.47752 8.50311C10.1841 7.75924 10.2507 6.56497 9.63424 5.6931L8.37326 3.90961C7.61028 2.8305 6.13596 2.68795 5.26145 3.60864L3.69185 5.26114C3.25823 5.71766 2.96765 6.30945 3.00289 6.96594C3.09304 8.64546 3.81071 12.259 7.81536 16.4752C12.0621 20.9462 16.0468 21.1239 17.6763 20.9631C18.1917 20.9122 18.6399 20.6343 19.0011 20.254L20.4217 18.7584C21.3806 17.7489 21.1102 16.0182 19.8833 15.312L17.9728 14.2123C17.1672 13.7486 16.1858 13.8848 15.5562 14.5477Z"
            fill="currentColor"
          />
          <path
            d="M13.2595 1.88008C13.3257 1.47119 13.7122 1.19381 14.1211 1.26001C14.1464 1.26485 14.2279 1.28007 14.2705 1.28958C14.3559 1.30858 14.4749 1.33784 14.6233 1.38106C14.9201 1.46751 15.3347 1.60991 15.8323 1.83805C16.8286 2.2948 18.1544 3.09381 19.5302 4.46961C20.906 5.84541 21.705 7.17122 22.1617 8.1675C22.3899 8.66511 22.5323 9.07972 22.6187 9.3765C22.6619 9.5249 22.6912 9.64393 22.7102 9.72926C22.7197 9.77193 22.7267 9.80619 22.7315 9.8315L22.7373 9.86269C22.8034 10.2716 22.5286 10.6741 22.1197 10.7403C21.712 10.8063 21.3279 10.5303 21.2601 10.1233C21.258 10.1124 21.2522 10.083 21.2461 10.0553C21.2337 9.99994 21.2124 9.91212 21.1786 9.79597C21.1109 9.56363 20.9934 9.2183 20.7982 8.79262C20.4084 7.94232 19.7074 6.76813 18.4695 5.53027C17.2317 4.2924 16.0575 3.59141 15.2072 3.20158C14.7815 3.00642 14.4362 2.88889 14.2038 2.82122C14.0877 2.78739 13.9417 2.75387 13.8863 2.74154C13.4793 2.67372 13.1935 2.2878 13.2595 1.88008Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.4857 5.32954C13.5995 4.93126 14.0146 4.70065 14.4129 4.81444L14.2069 5.53558C14.4129 4.81444 14.4129 4.81444 14.4129 4.81444L14.4144 4.81485L14.4159 4.81529L14.4192 4.81627L14.427 4.81858L14.4468 4.82475C14.4618 4.82957 14.4807 4.83585 14.5031 4.84381C14.548 4.85975 14.6074 4.88242 14.6802 4.91362C14.8259 4.97605 15.0249 5.07248 15.2695 5.21719C15.7589 5.50687 16.4271 5.98805 17.2121 6.77302C17.9971 7.55799 18.4782 8.22618 18.7679 8.71564C18.9126 8.96015 19.009 9.15922 19.0715 9.3049C19.1027 9.37771 19.1254 9.43707 19.1413 9.48198C19.1493 9.50443 19.1555 9.52326 19.1604 9.53834L19.1665 9.55812L19.1688 9.56587L19.1698 9.56921L19.1702 9.57074C19.1702 9.57074 19.1707 9.57218 18.4495 9.77822L19.1707 9.57218C19.2845 9.97046 19.0538 10.3856 18.6556 10.4994C18.2607 10.6122 17.8492 10.3864 17.7313 9.99437L17.7276 9.98359C17.7223 9.96856 17.7113 9.93898 17.6928 9.89578C17.6558 9.80944 17.5887 9.66821 17.4771 9.47962C17.2541 9.10288 16.8514 8.53363 16.1514 7.83368C15.4515 7.13373 14.8822 6.73102 14.5055 6.50805C14.3169 6.39644 14.1757 6.32934 14.0893 6.29234C14.0461 6.27382 14.0165 6.26279 14.0015 6.25746L13.9907 6.25376C13.5987 6.13588 13.3729 5.72443 13.4857 5.32954Z"
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
            d="M15.5562 14.5477L15.1007 15.0272C15.1007 15.0272 14.0181 16.167 11.0631 13.0559C8.10812 9.94484 9.1907 8.80507 9.1907 8.80507L9.47752 8.50311C10.1841 7.75924 10.2507 6.56497 9.63424 5.6931L8.37326 3.90961C7.61028 2.8305 6.13596 2.68795 5.26145 3.60864L3.69185 5.26114C3.25823 5.71766 2.96765 6.30945 3.00289 6.96594C3.09304 8.64546 3.81071 12.259 7.81536 16.4752C12.0621 20.9462 16.0468 21.1239 17.6763 20.9631C18.1917 20.9122 18.6399 20.6343 19.0011 20.254L20.4217 18.7584C21.3806 17.7489 21.1102 16.0182 19.8833 15.312L17.9728 14.2123C17.1672 13.7486 16.1858 13.8848 15.5562 14.5477Z"
            fill="currentColor"
          />
          <path
            d="M13.2595 1.88008C13.3257 1.47119 13.7122 1.19381 14.1211 1.26001C14.1464 1.26485 14.2279 1.28007 14.2705 1.28958C14.3559 1.30858 14.4749 1.33784 14.6233 1.38106C14.9201 1.46751 15.3347 1.60991 15.8323 1.83805C16.8286 2.2948 18.1544 3.09381 19.5302 4.46961C20.906 5.84541 21.705 7.17122 22.1617 8.1675C22.3899 8.66511 22.5323 9.07972 22.6187 9.3765C22.6619 9.5249 22.6912 9.64393 22.7102 9.72926C22.7197 9.77193 22.7267 9.80619 22.7315 9.8315L22.7373 9.86269C22.8034 10.2716 22.5286 10.6741 22.1197 10.7403C21.712 10.8063 21.3279 10.5303 21.2601 10.1233C21.258 10.1124 21.2522 10.083 21.2461 10.0553C21.2337 9.99994 21.2124 9.91212 21.1786 9.79597C21.1109 9.56363 20.9934 9.2183 20.7982 8.79262C20.4084 7.94232 19.7074 6.76813 18.4695 5.53027C17.2317 4.2924 16.0575 3.59141 15.2072 3.20158C14.7815 3.00642 14.4362 2.88889 14.2038 2.82122C14.0877 2.78739 13.9417 2.75387 13.8863 2.74154C13.4793 2.67372 13.1935 2.2878 13.2595 1.88008Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.4857 5.32954C13.5995 4.93126 14.0146 4.70065 14.4129 4.81444L14.2069 5.53558C14.4129 4.81444 14.4129 4.81444 14.4129 4.81444L14.4144 4.81485L14.4159 4.81529L14.4192 4.81627L14.427 4.81858L14.4468 4.82475C14.4618 4.82957 14.4807 4.83585 14.5031 4.84381C14.548 4.85975 14.6074 4.88242 14.6802 4.91362C14.8259 4.97605 15.0249 5.07248 15.2695 5.21719C15.7589 5.50687 16.4271 5.98805 17.2121 6.77302C17.9971 7.55799 18.4782 8.22618 18.7679 8.71564C18.9126 8.96015 19.009 9.15922 19.0715 9.3049C19.1027 9.37771 19.1254 9.43707 19.1413 9.48198C19.1493 9.50443 19.1555 9.52326 19.1604 9.53834L19.1665 9.55812L19.1688 9.56587L19.1698 9.56921L19.1702 9.57074C19.1702 9.57074 19.1707 9.57218 18.4495 9.77822L19.1707 9.57218C19.2845 9.97046 19.0538 10.3856 18.6556 10.4994C18.2607 10.6122 17.8492 10.3864 17.7313 9.99437L17.7276 9.98359C17.7223 9.96856 17.7113 9.93898 17.6928 9.89578C17.6558 9.80944 17.5887 9.66821 17.4771 9.47962C17.2541 9.10288 16.8514 8.53363 16.1514 7.83368C15.4515 7.13373 14.8822 6.73102 14.5055 6.50805C14.3169 6.39644 14.1757 6.32934 14.0893 6.29234C14.0461 6.27382 14.0165 6.26279 14.0015 6.25746L13.9907 6.25376C13.5987 6.13588 13.3729 5.72443 13.4857 5.32954Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPhoneCalling as IconComponentType).keywords = [
  "phone",
  "calling",
  "telephone",
  "call",
  "earphone",
  "earpiece",
  "headphone",
  "call up",
  "ring",
  "sound",
  "speech sound",
  "vocation",
  "career",
  "invocation",
  "preacher",
  "dawa",
  "convocation",
  "convening",
  "summon",
  "so-called",
];

export default IconPhoneCalling as IconComponentType;