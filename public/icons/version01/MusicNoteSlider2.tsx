import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMusicNoteSlider2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 8C5 5.17157 5 3.75736 5.87868 2.87868C6.75736 2 8.17157 2 11 2H13C15.8284 2 17.2426 2 18.1213 2.87868C19 3.75736 19 5.17157 19 8V16C19 18.8284 19 20.2426 18.1213 21.1213C17.2426 22 15.8284 22 13 22H11C8.17157 22 6.75736 22 5.87868 21.1213C5 20.2426 5 18.8284 5 16V8Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M19 19.5C19.4645 19.5 19.6968 19.5 19.8911 19.4692C20.9608 19.2998 21.7998 18.4608 21.9692 17.3911C22 17.1968 22 16.9645 22 16.5V7.5C22 7.0355 22 6.80325 21.9692 6.60891C21.7998 5.53918 20.9608 4.70021 19.8911 4.53078C19.6968 4.5 19.4645 4.5 19 4.5" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M5 19.5C4.5355 19.5 4.30325 19.5 4.10891 19.4692C3.03918 19.2998 2.20021 18.4608 2.03078 17.3911C2 17.1968 2 16.9645 2 16.5V7.5C2 7.0355 2 6.80325 2.03078 6.60891C2.20021 5.53918 3.03918 4.70021 4.10891 4.53078C4.30325 4.5 4.5355 4.5 5 4.5" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M12.7416 8.62911L12.4062 7.95829L12.4062 7.95829L12.7416 8.62911ZM14.0584 7.97075L13.7229 7.29993V7.29993L14.0584 7.97075ZM13.9416 11.0291L13.6062 10.3583L13.6062 10.3583L13.9416 11.0291ZM12.0598 10.7225L12.7649 10.467V10.467L12.0598 10.7225ZM13.1159 11.3752L13.029 10.6302H13.029L13.1159 11.3752ZM15.9822 9.5699L16.7188 9.7109V9.7109L15.9822 9.5699ZM15.6074 10.1763L16.0629 10.7721L16.0629 10.7721L15.6074 10.1763ZM14.8841 7.6247L14.971 8.36965L14.8841 7.6247ZM15.9402 8.2774L15.2351 8.53282V8.53282L15.9402 8.2774ZM12.3926 8.82356L12.8482 9.41937L12.8482 9.41937L12.3926 8.82356ZM12.0178 9.42997L11.2812 9.28897V9.28897L12.0178 9.42997ZM11.25 14.9999C11.25 15.6903 10.6904 16.2499 10 16.2499V17.7499C11.5188 17.7499 12.75 16.5187 12.75 14.9999H11.25ZM10 16.2499C9.30964 16.2499 8.75 15.6903 8.75 14.9999H7.25C7.25 16.5187 8.48122 17.7499 10 17.7499V16.2499ZM8.75 14.9999C8.75 14.3096 9.30964 13.7499 10 13.7499V12.2499C8.48122 12.2499 7.25 13.4811 7.25 14.9999H8.75ZM10 13.7499C10.6904 13.7499 11.25 14.3096 11.25 14.9999H12.75C12.75 13.4811 11.5188 12.2499 10 12.2499V13.7499ZM12.75 14.9999V9.99993H11.25V14.9999H12.75ZM13.0771 9.29993L14.3938 8.64157L13.7229 7.29993L12.4062 7.95829L13.0771 9.29993ZM14.9229 9.69993L13.6062 10.3583L14.2771 11.6999L15.5938 11.0416L14.9229 9.69993ZM11.25 9.82911C11.25 10.0637 11.2498 10.269 11.2585 10.4354C11.2672 10.5997 11.2866 10.7901 11.3546 10.9779L12.7649 10.467C12.7732 10.4898 12.7627 10.4763 12.7564 10.3566C12.7502 10.2389 12.75 10.0801 12.75 9.82911H11.25ZM13.6062 10.3583C13.3817 10.4705 13.2396 10.5413 13.1316 10.5884C13.0217 10.6363 13.0049 10.633 13.029 10.6302L13.2028 12.1201C13.4012 12.097 13.5801 12.0292 13.731 11.9635C13.8837 11.8969 14.0673 11.8048 14.2771 11.6999L13.6062 10.3583ZM11.3546 10.9779C11.6311 11.7412 12.3963 12.2142 13.2028 12.1201L13.029 10.6302C12.9138 10.6437 12.8044 10.5761 12.7649 10.467L11.3546 10.9779ZM15.25 9.17075C15.25 9.27788 15.2499 9.33897 15.2482 9.38522C15.2468 9.42675 15.2446 9.43389 15.2455 9.4289L16.7188 9.7109C16.7532 9.5312 16.75 9.34441 16.75 9.17075H15.25ZM15.5938 11.0416C15.7491 10.9639 15.9176 10.8832 16.0629 10.7721L15.1518 9.5805C15.1559 9.57741 15.1505 9.58255 15.114 9.60245C15.0734 9.62461 15.0188 9.65202 14.9229 9.69993L15.5938 11.0416ZM15.2455 9.4289C15.234 9.48923 15.2006 9.54319 15.1518 9.5805L16.0629 10.7721C16.4045 10.5109 16.638 10.1332 16.7188 9.7109L15.2455 9.4289ZM14.3938 8.64157C14.6183 8.52932 14.7604 8.45852 14.8684 8.41144C14.9783 8.36355 14.9951 8.36684 14.971 8.36965L14.7972 6.87975C14.5988 6.9029 14.4199 6.97064 14.269 7.03641C14.1163 7.10298 13.9327 7.19504 13.7229 7.29993L14.3938 8.64157ZM16.75 9.17075C16.75 8.93621 16.7502 8.73085 16.7415 8.56448C16.7328 8.40012 16.7134 8.20979 16.6454 8.02197L15.2351 8.53282C15.2268 8.51004 15.2373 8.52361 15.2436 8.64329C15.2498 8.76095 15.25 8.91975 15.25 9.17075H16.75ZM14.971 8.36965C15.0862 8.35621 15.1956 8.42377 15.2351 8.53282L16.6454 8.02197C16.3689 7.25862 15.6037 6.78569 14.7972 6.87975L14.971 8.36965ZM12.4062 7.95829C12.2509 8.03595 12.0824 8.11663 11.9371 8.22776L12.8482 9.41937C12.8441 9.42245 12.8495 9.41731 12.886 9.39742C12.9266 9.37526 12.9812 9.34784 13.0771 9.29993L12.4062 7.95829ZM12.75 9.82911C12.75 9.72198 12.7501 9.6609 12.7518 9.61464C12.7532 9.57311 12.7554 9.56598 12.7545 9.57097L11.2812 9.28897C11.2468 9.46867 11.25 9.65545 11.25 9.82911H12.75ZM11.9371 8.22776C11.5955 8.48892 11.362 8.86667 11.2812 9.28897L12.7545 9.57097C12.766 9.51064 12.7994 9.45667 12.8482 9.41937L11.9371 8.22776Z" fill="currentColor" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.8684 8.41172C14.9382 8.38128 14.9705 8.37152 14.9785 8.36917C15.0884 8.35966 15.1917 8.42348 15.2324 8.52605C15.2338 8.5343 15.2395 8.5675 15.2435 8.64357C15.2497 8.76123 15.25 8.92003 15.25 9.17103C15.25 9.27816 15.2499 9.33925 15.2482 9.3855C15.2472 9.41444 15.2458 9.42668 15.2454 9.42975C15.2338 9.48965 15.2007 9.54324 15.1523 9.58042C15.1497 9.58215 15.1394 9.58885 15.114 9.60273C15.0733 9.62489 15.0187 9.6523 14.9229 9.70021L13.6062 10.3586C13.3817 10.4708 13.2396 10.5416 13.1316 10.5887C13.0617 10.6191 13.0295 10.6289 13.0214 10.6313C12.9115 10.6408 12.8082 10.5769 12.7676 10.4744C12.7661 10.4661 12.7604 10.4329 12.7564 10.3569C12.7502 10.2392 12.75 10.0804 12.75 9.82939C12.75 9.72226 12.7501 9.66118 12.7517 9.61492C12.7528 9.58596 12.7541 9.57373 12.7545 9.57067C12.7662 9.51077 12.7993 9.45718 12.8477 9.42001C12.8502 9.41827 12.8605 9.41157 12.886 9.39769C12.9266 9.37554 12.9812 9.34812 13.077 9.30021L14.3937 8.64185C14.6182 8.5296 14.7604 8.4588 14.8684 8.41172Z" fill="currentColor" /><path d="M9.99997 13.75C10.6903 13.75 11.25 14.3097 11.25 15C11.25 15.6904 10.6903 16.25 9.99997 16.25C9.30962 16.25 8.74997 15.6904 8.74997 15C8.74997 14.3097 9.30962 13.75 9.99997 13.75Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M7.23596 2.87868C6.41858 3.75736 6.41858 5.17157 6.41858 8V16C6.41858 18.8284 6.41858 20.2426 7.23596 21.1213C8.05333 22 9.36888 22 12 22C14.6311 22 15.9466 22 16.764 21.1213C17.5814 20.2426 17.5814 18.8284 17.5814 16V8C17.5814 5.17158 17.5814 3.75736 16.764 2.87868C15.9466 2 14.6311 2 12 2C9.36888 2 8.05333 2 7.23596 2.87868ZM16.6454 8.02225C16.3689 7.25889 15.6036 6.78596 14.7972 6.88003C14.5988 6.90318 14.4199 6.97092 14.269 7.03669C14.1203 7.10149 13.9425 7.19042 13.7397 7.29184L12.3697 7.97679C12.2248 8.04899 12.0711 8.12557 11.937 8.22804C11.5955 8.48919 11.362 8.86695 11.2812 9.28925C11.2495 9.45495 11.2497 9.62668 11.2499 9.78859L11.25 9.8481C11.25 9.86538 11.25 9.88251 11.2499 9.89946C11.2499 9.93367 11.2499 9.96721 11.25 10V12.5499C10.8749 12.3582 10.4501 12.25 9.99997 12.25C8.48119 12.25 7.24997 13.4813 7.24997 15C7.24997 16.5188 8.48119 17.75 9.99997 17.75C11.5188 17.75 12.75 16.5188 12.75 15V12.1144C12.8973 12.1357 13.0493 12.1383 13.2027 12.1204C13.4012 12.0972 13.5801 12.0295 13.7309 11.9637C13.8796 11.8989 14.0575 11.81 14.2603 11.7086L15.6303 11.0236C15.7752 10.9514 15.9289 10.8749 16.0629 10.7724C16.4045 10.5112 16.6379 10.1335 16.7188 9.71117C16.7505 9.54547 16.7502 9.37374 16.75 9.21184L16.75 9.15231C16.75 8.92555 16.75 8.72669 16.7415 8.56475C16.7328 8.4004 16.7134 8.21007 16.6454 8.02225Z" fill="currentColor" /><g opacity={duotone ? "0.5" : "1"}><path d="M6.72413 3.76172H5.26784C5.11295 3.76713 4.96866 3.77512 4.83435 3.78692C4.40341 3.82477 4.01421 3.9055 3.65073 4.10459C3.08186 4.41618 2.61937 4.91337 2.32952 5.5249C2.14431 5.91564 2.06921 6.33404 2.034 6.7973C1.99999 7.24486 1.99999 7.79557 2 8.46895V15.5318C1.99999 16.2052 1.99999 16.7559 2.034 17.2034C2.06921 17.6667 2.14431 18.0851 2.32952 18.4758C2.61937 19.0874 3.08186 19.5845 3.65073 19.8961C4.01421 20.0952 4.40341 20.176 4.83435 20.2138C4.96866 20.2256 5.11295 20.2336 5.26784 20.239H6.72438C6.41895 19.3408 6.41895 18.0372 6.41895 16V8C6.41895 5.96331 6.41895 4.6599 6.72413 3.76172Z" fill="currentColor" /><path d="M17.2763 20.239C17.5817 19.3408 17.5817 18.0372 17.5817 16V8C17.5817 5.96331 17.5817 4.65991 17.2766 3.76172H18.7322C18.887 3.76713 19.0313 3.77512 19.1656 3.78692C19.5966 3.82477 19.9858 3.9055 20.3493 4.10459C20.9181 4.41618 21.3806 4.91337 21.6705 5.5249C21.8557 5.91564 21.9308 6.33404 21.966 6.7973C22 7.24484 22 7.79553 22 8.46887V15.5318C22 16.2051 22 16.7559 21.966 17.2034C21.9308 17.6667 21.8557 18.0851 21.6705 18.4758C21.3806 19.0874 20.9181 19.5845 20.3493 19.8961C19.9858 20.0952 19.5966 20.176 19.1656 20.2138C19.0313 20.2256 18.887 20.2336 18.7322 20.239H17.2763Z" fill="currentColor" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6.41861 8C6.41861 5.17157 6.41861 3.75736 7.23598 2.87868C8.05336 2 9.36891 2 12 2C14.6311 2 15.9466 2 16.764 2.87868C17.5814 3.75736 17.5814 5.17157 17.5814 8V16C17.5814 18.8284 17.5814 20.2426 16.764 21.1213C15.9466 22 14.6311 22 12 22C9.36891 22 8.05336 22 7.23598 21.1213C6.41861 20.2426 6.41861 18.8284 6.41861 16V8ZM5.02325 7.90125L5.02326 8L5.02325 16.0987C5.0232 17.0815 5.02316 17.9638 5.06946 18.7277C5.08581 18.9974 5.10793 19.2523 5.13787 19.4917C5.15132 19.5992 5.16661 19.7062 5.18411 19.8126C5.21968 20.0288 5.05257 20.2326 4.83435 20.2134C4.40341 20.1756 4.01421 20.0949 3.65073 19.8958C3.08186 19.5842 2.61937 19.087 2.32952 18.4755C2.14431 18.0847 2.06921 17.6663 2.034 17.2031C1.99999 16.7555 1.99999 16.2048 2 15.5314V8.46859C1.99999 7.79521 1.99999 7.2445 2.034 6.79693C2.06921 6.33367 2.14431 5.91527 2.32952 5.52453C2.61937 4.913 3.08186 4.41582 3.65073 4.10423C4.01421 3.90514 4.40341 3.8244 4.83435 3.78655C5.05257 3.76739 5.21968 3.97125 5.18411 4.1874C5.16661 4.29376 5.15132 4.40079 5.13787 4.50831C5.10793 4.74771 5.08581 5.00264 5.06946 5.27233C5.02316 6.03622 5.0232 6.91847 5.02325 7.90124V7.90125ZM18.9767 7.90126V16.0987C18.9768 17.0815 18.9768 17.9638 18.9305 18.7277C18.9142 18.9974 18.8921 19.2523 18.8621 19.4917C18.8487 19.5992 18.8334 19.7062 18.8159 19.8126C18.7803 20.0288 18.9474 20.2326 19.1656 20.2134C19.5966 20.1756 19.9858 20.0949 20.3493 19.8958C20.9181 19.5842 21.3806 19.087 21.6705 18.4755C21.8557 18.0847 21.9308 17.6663 21.966 17.2031C22 16.7555 22 16.2048 22 15.5315V15.5314V8.46859V8.4685C22 7.79516 22 7.24448 21.966 6.79693C21.9308 6.33367 21.8557 5.91527 21.6705 5.52453C21.3806 4.913 20.9181 4.41582 20.3493 4.10423C19.9858 3.90514 19.5966 3.8244 19.1656 3.78655C18.9474 3.76739 18.7803 3.97125 18.8159 4.1874C18.8334 4.29376 18.8487 4.40079 18.8621 4.50831C18.8921 4.74771 18.9142 5.00264 18.9305 5.27233C18.9768 6.03623 18.9768 6.91849 18.9767 7.90126ZM14.8684 8.41172C14.9383 8.38128 14.9705 8.37152 14.9785 8.36917C15.0885 8.35966 15.1917 8.42348 15.2324 8.52605C15.2339 8.5343 15.2396 8.5675 15.2436 8.64357C15.2498 8.76123 15.25 8.92003 15.25 9.17103C15.25 9.27816 15.2499 9.33925 15.2482 9.3855C15.2472 9.41444 15.2458 9.42668 15.2454 9.42975C15.2338 9.48965 15.2007 9.54324 15.1523 9.58042C15.1498 9.58215 15.1394 9.58885 15.114 9.60273C15.0734 9.62489 15.0188 9.6523 14.9229 9.70021L13.6062 10.3586C13.3817 10.4708 13.2396 10.5416 13.1316 10.5887C13.0617 10.6191 13.0295 10.6289 13.0215 10.6313C12.9115 10.6408 12.8083 10.5769 12.7676 10.4744C12.7661 10.4661 12.7604 10.4329 12.7564 10.3569C12.7502 10.2392 12.75 10.0804 12.75 9.82939C12.75 9.72226 12.7501 9.66118 12.7518 9.61492C12.7528 9.58596 12.7542 9.57373 12.7546 9.57067C12.7662 9.51077 12.7993 9.45718 12.8477 9.42001C12.8502 9.41827 12.8606 9.41157 12.886 9.39769C12.9266 9.37554 12.9812 9.34812 13.0771 9.30021L14.3938 8.64185C14.6183 8.5296 14.7604 8.4588 14.8684 8.41172ZM16.6454 8.02225C16.3689 7.25889 15.6037 6.78596 14.7972 6.88003C14.5988 6.90318 14.4199 6.97092 14.269 7.03669C14.1204 7.10149 13.9425 7.19042 13.7397 7.29184L12.4062 7.95857L12.3697 7.97679L12.3697 7.97679C12.2248 8.04899 12.0711 8.12557 11.9371 8.22804C11.5955 8.48919 11.362 8.86695 11.2812 9.28925C11.2495 9.45495 11.2497 9.62667 11.25 9.78857V9.78859L11.25 9.82939V9.8481C11.25 9.86533 11.25 9.8824 11.25 9.8993C11.25 9.93357 11.2499 9.96716 11.25 10V12.5499C10.875 12.3582 10.4501 12.25 10 12.25C8.48122 12.25 7.25 13.4813 7.25 15C7.25 16.5188 8.48122 17.75 10 17.75C11.5188 17.75 12.75 16.5188 12.75 15V12.1144C12.8974 12.1357 13.0493 12.1383 13.2028 12.1204C13.4012 12.0972 13.5801 12.0295 13.731 11.9637C13.8796 11.8989 14.0575 11.81 14.2603 11.7086L15.5938 11.0419L15.6303 11.0236C15.7752 10.9514 15.9289 10.8749 16.0629 10.7724C16.4045 10.5112 16.638 10.1335 16.7188 9.71117C16.7505 9.54547 16.7503 9.37374 16.75 9.21184L16.75 9.17103V9.15231C16.75 8.92555 16.75 8.72669 16.7415 8.56475C16.7328 8.4004 16.7134 8.21007 16.6454 8.02225ZM10 13.75C10.6904 13.75 11.25 14.3097 11.25 15C11.25 15.6904 10.6904 16.25 10 16.25C9.30964 16.25 8.75 15.6904 8.75 15C8.75 14.3097 9.30964 13.75 10 13.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMusicNoteSlider2 as IconComponentType).keywords = [
  "music",
  "note",
  "slider",
  "2",
  "sheet music",
  "euphony",
  "medicine",
  "melody",
  "symphony",
  "orchestra",
  "musician",
  "song",
  "singing",
  "annotation",
  "notation",
  "mention",
  "remark",
  "notice",
  "observe",
  "take note",
  "distinction",
  "bank note",
  "luger",
  "pseudemys scripta",
  "yellow-bellied terrapin",
  "bushing",
  "skid",
  "glider",
  "scroll",
  "scrollbar",
  "track",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out"
];

export default IconMusicNoteSlider2 as IconComponentType;