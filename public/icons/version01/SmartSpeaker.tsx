import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconSmartSpeaker: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.50716 14.6152C3.38437 15.3799 5.82534 17.2501 12 17.2501V15.7501C6.19299 15.7501 4.10087 14.0146 3.49284 13.4845L2.50716 14.6152ZM12 17.2501C15.1504 17.2501 17.325 16.7703 18.823 16.1839C20.3317 15.5932 21.1221 14.9065 21.5075 14.5524L20.4925 13.4479C20.195 13.7213 19.5596 14.2846 18.2762 14.7871C16.9821 15.2937 14.9981 15.7501 12 15.7501V17.2501Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M15.5 16.0001C14.9178 14.2523 13.8467 13.5001 12 13.5001C10.1533 13.5001 9.08225 14.2523 8.5 16.0001" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M8 4.41159C7.67967 4.68701 7.5 5.0848 7.5 5.41159C7.5 6.56505 9.23858 7.41159 12 7.41159C14.7614 7.41159 16.5 6.56505 16.5 5.41159C16.5 5.0848 16.3203 4.77555 16 4.50012" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M3.32102 6.6583C3.56225 4.55379 5.15124 2.85188 7.23935 2.46152L7.4544 2.42132C10.4585 1.85972 13.541 1.85972 16.5451 2.42132L16.8681 2.48169C18.8934 2.86032 20.4367 4.50777 20.6774 6.54822C21.0957 10.0926 21.1072 13.673 20.712 17.22L20.6948 17.374C20.4473 19.5952 18.7041 21.3571 16.48 21.6343L15.5738 21.7473C15.079 21.8089 14.8316 21.8398 14.5845 21.8656C12.866 22.045 11.1335 22.045 9.41505 21.8656C9.16792 21.8398 8.92051 21.8089 8.42569 21.7473L7.41019 21.6207C5.24868 21.3513 3.55266 19.6424 3.30532 17.4845C2.89823 13.933 2.89823 10.3468 3.30532 6.79528L3.32102 6.6583Z" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.46142 15.6262C10.2165 15.7047 11.0596 15.7503 12.0001 15.7503C12.9436 15.7503 13.7867 15.7051 14.5394 15.6273C14.3253 15.2009 14.0738 14.9081 13.7895 14.7058C13.3846 14.4178 12.8244 14.2501 12.0001 14.2501C11.1758 14.2501 10.6156 14.4178 10.2107 14.7058C9.92674 14.9079 9.67539 15.2004 9.46142 15.6262Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M3.32102 6.6583C3.56225 4.55379 5.15124 2.85188 7.23935 2.46152L7.4544 2.42132C10.4585 1.85972 13.541 1.85972 16.5451 2.42132L16.8681 2.48169C18.8934 2.86032 20.4367 4.50777 20.6774 6.54821C20.9299 8.68769 21.0342 10.8403 20.9902 12.9907L20.4926 13.448C20.195 13.7215 19.5597 14.2848 18.2763 14.7872C17.694 15.0152 16.972 15.233 16.0807 15.4036C15.76 14.597 15.305 13.9432 14.6591 13.4836C13.9212 12.9586 13.0225 12.7501 12.0001 12.7501C10.9777 12.7501 10.0791 12.9586 9.34116 13.4836C8.6958 13.9428 8.24108 14.5958 7.92034 15.4015C5.1302 14.8665 3.92931 13.8651 3.49291 13.4846L3.00908 13.0629C2.96793 10.9711 3.06668 8.87722 3.30532 6.79528L3.32102 6.6583ZM8.48897 4.97995C8.80305 4.7099 8.83874 4.23637 8.56869 3.92229C8.29863 3.60822 7.8251 3.57253 7.51103 3.84258C7.04402 4.24412 6.75 4.84204 6.75 5.41127C6.75 6.42495 7.51705 7.12184 8.40313 7.52615C9.31388 7.9417 10.5556 8.16127 12 8.16127C13.4444 8.16127 14.6861 7.9417 15.5969 7.52615C16.483 7.12184 17.25 6.42495 17.25 5.41127C17.25 4.78775 16.9047 4.28861 16.489 3.93112C16.1749 3.66106 15.7014 3.69675 15.4313 4.01083C15.1613 4.32491 15.1969 4.79844 15.511 5.06849C15.7359 5.26186 15.75 5.38122 15.75 5.41127C15.75 5.55105 15.6478 5.85416 14.9742 6.16149C14.3253 6.45757 13.317 6.66127 12 6.66127C10.683 6.66127 9.6747 6.45757 9.0258 6.16149C8.35224 5.85416 8.25 5.55105 8.25 5.41127C8.25 5.37952 8.26057 5.31005 8.30437 5.21998C8.34679 5.13273 8.4102 5.04769 8.48897 4.97995Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M18.8227 16.1838C19.7765 15.8104 20.4432 15.3987 20.9019 15.0568C20.8552 15.7788 20.7918 16.5 20.7115 17.2198L20.6944 17.3739C20.4469 19.595 18.7037 21.357 16.4796 21.6342L15.5734 21.7471C15.0786 21.8088 14.8312 21.8396 14.584 21.8654C12.8656 22.0448 11.1331 22.0448 9.41464 21.8654C9.16751 21.8396 8.9201 21.8088 8.42528 21.7471L7.40978 21.6205C5.24827 21.3511 3.55225 19.6422 3.30491 17.4844C3.21322 16.6845 3.14218 15.8828 3.0918 15.0802C4.30981 15.9556 6.86258 17.2501 11.9997 17.2501C15.1501 17.2501 17.3246 16.7703 18.8227 16.1838Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M7.23935 2.46152C5.15124 2.85188 3.56225 4.55379 3.32102 6.6583L3.30532 6.79528C3.06668 8.87722 2.96793 10.9711 3.00908 13.0629L3.49291 13.4846C3.92931 13.8651 5.1302 14.8665 7.92034 15.4015C8.24108 14.5958 8.6958 13.9428 9.34116 13.4836C10.0791 12.9586 10.9777 12.7501 12.0001 12.7501C13.0225 12.7501 13.9212 12.9586 14.6591 13.4836C15.305 13.9432 15.76 14.597 16.0807 15.4036C16.972 15.233 17.694 15.0152 18.2763 14.7872C19.5597 14.2848 20.195 13.7215 20.4926 13.448L20.9902 12.9907C21.0342 10.8403 20.9299 8.68769 20.6774 6.54821C20.4367 4.50777 18.8934 2.86032 16.8681 2.48169L16.5451 2.42132C13.541 1.85972 10.4585 1.85972 7.4544 2.42132L7.23935 2.46152ZM8.48897 4.97995C8.80305 4.7099 8.83874 4.23637 8.56869 3.92229C8.29863 3.60822 7.8251 3.57253 7.51103 3.84258C7.04402 4.24412 6.75 4.84204 6.75 5.41127C6.75 6.42495 7.51705 7.12184 8.40313 7.52615C9.31388 7.9417 10.5556 8.16127 12 8.16127C13.4444 8.16127 14.6861 7.9417 15.5969 7.52615C16.483 7.12184 17.25 6.42495 17.25 5.41127C17.25 4.78775 16.9047 4.28861 16.489 3.93112C16.1749 3.66106 15.7014 3.69675 15.4313 4.01083C15.1613 4.32491 15.1969 4.79844 15.511 5.06849C15.7359 5.26186 15.75 5.38122 15.75 5.41127C15.75 5.55105 15.6478 5.85416 14.9742 6.16149C14.3253 6.45757 13.317 6.66127 12 6.66127C10.683 6.66127 9.6747 6.45757 9.0258 6.16149C8.35224 5.85416 8.25 5.55105 8.25 5.41127C8.25 5.37952 8.26057 5.31005 8.30437 5.21998C8.34679 5.13273 8.4102 5.04769 8.48897 4.97995Z" fill="currentColor" /><path d="M12.0001 15.7503C11.0596 15.7503 10.2165 15.7047 9.46142 15.6262C9.67539 15.2004 9.92674 14.9079 10.2107 14.7058C10.6156 14.4178 11.1758 14.2501 12.0001 14.2501C12.8244 14.2501 13.3846 14.4178 13.7895 14.7058C14.0738 14.9081 14.3253 15.2009 14.5394 15.6273C13.7867 15.7051 12.9436 15.7503 12.0001 15.7503Z" fill="currentColor" /><path d="M20.9023 15.0569C20.4436 15.3988 19.7769 15.8106 18.8231 16.184C17.325 16.7705 15.1505 17.2503 12.0001 17.2503C6.86299 17.2503 4.31022 15.9558 3.09221 15.0804C3.14259 15.883 3.21363 16.6846 3.30532 17.4845C3.55266 19.6424 5.24868 21.3513 7.41019 21.6207L8.42569 21.7473C8.92051 21.8089 9.16792 21.8398 9.41505 21.8656C11.1335 22.045 12.866 22.045 14.5845 21.8656C14.8316 21.8398 15.079 21.8089 15.5738 21.7473L16.48 21.6343C18.7041 21.3571 20.4473 19.5952 20.6948 17.374L20.712 17.22C20.7922 16.5002 20.8556 15.7789 20.9023 15.0569Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconSmartSpeaker;