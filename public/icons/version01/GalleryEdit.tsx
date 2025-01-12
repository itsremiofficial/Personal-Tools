import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconGalleryEdit: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M2 12.5001L3.75159 10.9675C4.66286 10.1702 6.03628 10.2159 6.89249 11.0721L11.1822 15.3618C11.8694 16.0491 12.9512 16.1428 13.7464 15.5839L14.0446 15.3744C15.1888 14.5702 16.7369 14.6634 17.7765 15.599L21 18.5001" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M18.562 2.9354L18.9791 2.5183C19.6702 1.82723 20.7906 1.82723 21.4817 2.5183C22.1728 3.20937 22.1728 4.32981 21.4817 5.02087L21.0646 5.43797M18.562 2.9354C18.562 2.9354 18.6142 3.82172 19.3962 4.60378C20.1783 5.38583 21.0646 5.43797 21.0646 5.43797M18.562 2.9354L14.7275 6.76995C14.4677 7.02968 14.3379 7.15954 14.2262 7.30273C14.0945 7.47163 13.9815 7.65439 13.8894 7.84776C13.8112 8.01169 13.7532 8.18591 13.637 8.53437L13.2651 9.65M21.0646 5.43797L17.23 9.27253C16.9703 9.53225 16.8405 9.66211 16.6973 9.7738C16.5284 9.90554 16.3456 10.0185 16.1522 10.1106C15.9883 10.1888 15.8141 10.2468 15.4656 10.363L14.35 10.7349M14.35 10.7349L13.6281 10.9755C13.4567 11.0327 13.2676 10.988 13.1398 10.8602C13.012 10.7324 12.9673 10.5433 13.0245 10.3719L13.2651 9.65M14.35 10.7349L13.2651 9.65" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M21.9998 12.6978C21.9983 14.1674 21.9871 15.4165 21.9036 16.4414C21.8067 17.6308 21.6081 18.6246 21.1636 19.45C20.9676 19.814 20.7267 20.1401 20.4334 20.4334C19.601 21.2657 18.5405 21.6428 17.1966 21.8235C15.8835 22 14.2007 22 12.0534 22H11.9466C9.79929 22 8.11646 22 6.80345 21.8235C5.45951 21.6428 4.39902 21.2657 3.56664 20.4334C2.82871 19.6954 2.44763 18.777 2.24498 17.6376C2.04591 16.5184 2.00949 15.1259 2.00192 13.3967C2 12.9569 2 12.4917 2 12.0009V11.9466C1.99999 9.79929 1.99998 8.11646 2.17651 6.80345C2.3572 5.45951 2.73426 4.39902 3.56664 3.56664C4.39902 2.73426 5.45951 2.3572 6.80345 2.17651C7.97111 2.01952 9.47346 2.00215 11.302 2.00024C11.6873 1.99983 12 2.31236 12 2.69767C12 3.08299 11.6872 3.3952 11.3019 3.39561C9.44749 3.39757 8.06751 3.41446 6.98937 3.55941C5.80016 3.7193 5.08321 4.02339 4.5533 4.5533C4.02339 5.08321 3.7193 5.80016 3.55941 6.98937C3.39683 8.19866 3.39535 9.7877 3.39535 12C3.39535 12.2702 3.39535 12.5314 3.39567 12.7844L4.32696 11.9696C5.17465 11.2278 6.45225 11.2704 7.24872 12.0668L11.2392 16.0573C11.8785 16.6966 12.8848 16.7837 13.6245 16.2639L13.9019 16.0689C14.9663 15.3209 16.4064 15.4076 17.3734 16.2779L20.0064 18.6476C20.2714 18.091 20.4288 17.3597 20.5128 16.3281C20.592 15.3561 20.6029 14.1755 20.6044 12.6979C20.6048 12.3126 20.917 12 21.3023 12C21.6876 12 22.0002 12.3125 21.9998 12.6978Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M17.5 11C15.3787 11 14.318 11 13.659 10.341C13 9.68198 13 8.62132 13 6.5C13 4.37868 13 3.31802 13.659 2.65901C14.318 2 15.3787 2 17.5 2C19.6213 2 20.682 2 21.341 2.65901C22 3.31802 22 4.37868 22 6.5C22 8.62132 22 9.68198 21.341 10.341C20.682 11 19.6213 11 17.5 11ZM19.7121 4.28794C20.096 4.67187 20.096 5.29434 19.7121 5.67826L19.6542 5.7361C19.5984 5.7919 19.5205 5.81718 19.4428 5.80324C19.3939 5.79447 19.3225 5.77822 19.2372 5.74864C19.0668 5.68949 18.843 5.5778 18.6326 5.36742C18.4222 5.15704 18.3105 4.93324 18.2514 4.76276C18.2218 4.67751 18.2055 4.60607 18.1968 4.55721C18.1828 4.47953 18.2081 4.40158 18.2639 4.34578L18.3217 4.28794C18.7057 3.90402 19.3281 3.90402 19.7121 4.28794ZM17.35 8.0403C17.2057 8.18459 17.1336 8.25673 17.054 8.31878C16.9602 8.39197 16.8587 8.45472 16.7512 8.50591C16.6602 8.54932 16.5634 8.58158 16.3698 8.64611L15.349 8.98639C15.2537 9.01814 15.1487 8.99335 15.0777 8.92234C15.0067 8.85134 14.9819 8.74631 15.0136 8.65104L15.3539 7.63021C15.4184 7.43662 15.4507 7.33983 15.4941 7.24876C15.5453 7.14133 15.608 7.0398 15.6812 6.94596C15.7433 6.86642 15.8154 6.79427 15.9597 6.65L17.7585 4.85116C17.802 4.80767 17.8769 4.82757 17.8971 4.88568C17.9707 5.09801 18.109 5.37421 18.3674 5.63258C18.6258 5.89095 18.902 6.02926 19.1143 6.10292C19.1724 6.12308 19.1923 6.19799 19.1488 6.24148L17.35 8.0403Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.9998 12.6978C21.9983 14.1674 21.9871 15.4165 21.9036 16.4414C21.8067 17.6308 21.6081 18.6246 21.1636 19.45C20.9676 19.814 20.7267 20.1401 20.4334 20.4334C19.601 21.2657 18.5405 21.6428 17.1966 21.8235C15.8835 22 14.2007 22 12.0534 22H11.9466C9.79929 22 8.11646 22 6.80345 21.8235C5.45951 21.6428 4.39902 21.2657 3.56664 20.4334C2.82871 19.6954 2.44763 18.777 2.24498 17.6376C2.04591 16.5184 2.00949 15.1259 2.00192 13.3967C2 12.9569 2 12.4917 2 12.0009V11.9466C1.99999 9.79929 1.99998 8.11646 2.17651 6.80345C2.3572 5.45951 2.73426 4.39902 3.56664 3.56664C4.39902 2.73426 5.45951 2.3572 6.80345 2.17651C7.97111 2.01952 9.47346 2.00215 11.302 2.00024C11.6873 1.99983 12 2.31236 12 2.69767C12 3.08299 11.6872 3.3952 11.3019 3.39561C9.44749 3.39757 8.06751 3.41446 6.98937 3.55941C5.80016 3.7193 5.08321 4.02339 4.5533 4.5533C4.02339 5.08321 3.7193 5.80016 3.55941 6.98937C3.39683 8.19866 3.39535 9.7877 3.39535 12C3.39535 12.2702 3.39535 12.5314 3.39567 12.7844L4.32696 11.9696C5.17465 11.2278 6.45225 11.2704 7.24872 12.0668L11.2392 16.0573C11.8785 16.6966 12.8848 16.7837 13.6245 16.2639L13.9019 16.0689C14.9663 15.3209 16.4064 15.4076 17.3734 16.2779L20.0064 18.6476C20.2714 18.091 20.4288 17.3597 20.5128 16.3281C20.592 15.3561 20.6029 14.1755 20.6044 12.6979C20.6048 12.3126 20.917 12 21.3023 12C21.6876 12 22.0002 12.3125 21.9998 12.6978Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M17.5 11C15.3787 11 14.318 11 13.659 10.341C13 9.68198 13 8.62132 13 6.5C13 4.37868 13 3.31802 13.659 2.65901C14.318 2 15.3787 2 17.5 2C19.6213 2 20.682 2 21.341 2.65901C22 3.31802 22 4.37868 22 6.5C22 8.62132 22 9.68198 21.341 10.341C20.682 11 19.6213 11 17.5 11ZM19.7121 4.28794C20.096 4.67187 20.096 5.29434 19.7121 5.67826L19.6542 5.7361C19.5984 5.7919 19.5205 5.81718 19.4428 5.80324C19.3939 5.79447 19.3225 5.77822 19.2372 5.74864C19.0668 5.68949 18.843 5.5778 18.6326 5.36742C18.4222 5.15704 18.3105 4.93324 18.2514 4.76276C18.2218 4.67751 18.2055 4.60607 18.1968 4.55721C18.1828 4.47953 18.2081 4.40158 18.2639 4.34578L18.3217 4.28794C18.7057 3.90402 19.3281 3.90402 19.7121 4.28794ZM17.35 8.0403C17.2057 8.18459 17.1336 8.25673 17.054 8.31878C16.9602 8.39197 16.8587 8.45472 16.7512 8.50591C16.6602 8.54932 16.5634 8.58158 16.3698 8.64611L15.349 8.98639C15.2537 9.01814 15.1487 8.99335 15.0777 8.92234C15.0067 8.85134 14.9819 8.74631 15.0136 8.65104L15.3539 7.63021C15.4184 7.43662 15.4507 7.33983 15.4941 7.24876C15.5453 7.14133 15.608 7.0398 15.6812 6.94596C15.7433 6.86642 15.8154 6.79427 15.9597 6.65L17.7585 4.85116C17.802 4.80767 17.8769 4.82757 17.8971 4.88568C17.9707 5.09801 18.109 5.37421 18.3674 5.63258C18.6258 5.89095 18.902 6.02926 19.1143 6.10292C19.1724 6.12308 19.1923 6.19799 19.1488 6.24148L17.35 8.0403Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconGalleryEdit;