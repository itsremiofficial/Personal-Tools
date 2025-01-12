import { FC } from 'react';

const IconSuspension: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 6.50049V4.50049C8 4.03583 8 3.80351 7.96157 3.61031C7.80376 2.81693 7.18356 2.19673 6.39018 2.03892C6.19698 2.00049 5.96466 2.00049 5.5 2.00049C5.03534 2.00049 4.80302 2.00049 4.60982 2.03892C3.81644 2.19673 3.19624 2.81693 3.03843 3.61031C3 3.80351 3 4.03583 3 4.50049V6.50049C3 6.96514 3 7.19747 3.03843 7.39067C3.19624 8.18405 3.81644 8.80425 4.60982 8.96206C4.80302 9.00049 5.03534 9.00049 5.5 9.00049C5.96466 9.00049 6.19698 9.00049 6.39018 8.96206C7.18356 8.80425 7.80376 8.18405 7.96157 7.39067C8 7.19747 8 6.96514 8 6.50049Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M21 6.50049V4.50049C21 4.03583 21 3.80351 20.9616 3.61031C20.8038 2.81693 20.1836 2.19673 19.3902 2.03892C19.197 2.00049 18.9647 2.00049 18.5 2.00049C18.0353 2.00049 17.803 2.00049 17.6098 2.03892C16.8164 2.19673 16.1962 2.81693 16.0384 3.61031C16 3.80351 16 4.03583 16 4.50049V6.50049C16 6.96514 16 7.19747 16.0384 7.39067C16.1962 8.18405 16.8164 8.80425 17.6098 8.96206C17.803 9.00049 18.0353 9.00049 18.5 9.00049C18.9647 9.00049 19.197 9.00049 19.3902 8.96206C20.1836 8.80425 20.8038 8.18405 20.9616 7.39067C21 7.19747 21 6.96514 21 6.50049Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M8 19.5005V17.5005C8 17.0358 8 16.8035 7.96157 16.6103C7.80376 15.8169 7.18356 15.1967 6.39018 15.0389C6.19698 15.0005 5.96466 15.0005 5.5 15.0005C5.03534 15.0005 4.80302 15.0005 4.60982 15.0389C3.81644 15.1967 3.19624 15.8169 3.03843 16.6103C3 16.8035 3 17.0358 3 17.5005V19.5005C3 19.9651 3 20.1975 3.03843 20.3907C3.19624 21.1841 3.81644 21.8042 4.60982 21.9621C4.80302 22.0005 5.03534 22.0005 5.5 22.0005C5.96466 22.0005 6.19698 22.0005 6.39018 21.9621C7.18356 21.8042 7.80376 21.1841 7.96157 20.3907C8 20.1975 8 19.9651 8 19.5005Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M21 19.5005V17.5005C21 17.0358 21 16.8035 20.9616 16.6103C20.8038 15.8169 20.1836 15.1967 19.3902 15.0389C19.197 15.0005 18.9647 15.0005 18.5 15.0005C18.0353 15.0005 17.803 15.0005 17.6098 15.0389C16.8164 15.1967 16.1962 15.8169 16.0384 16.6103C16 16.8035 16 17.0358 16 17.5005V19.5005C16 19.9651 16 20.1975 16.0384 20.3907C16.1962 21.1841 16.8164 21.8042 17.6098 21.9621C17.803 22.0005 18.0353 22.0005 18.5 22.0005C18.9647 22.0005 19.197 22.0005 19.3902 21.9621C20.1836 21.8042 20.8038 21.1841 20.9616 20.3907C21 20.1975 21 19.9651 21 19.5005Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M16 18.5005H8M16 5.50049H8M12 18.5005V5.50049" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M12.75 17.7505V6.25049H16V4.75049H8V6.25049H11.25V17.7505H8V19.2505H16V17.7505H12.75Z" fill="currentColor" /><path d="M8 6.50049V4.50049C8 4.03583 8 3.80351 7.96157 3.61031C7.80376 2.81693 7.18356 2.19673 6.39018 2.03892C6.19698 2.00049 5.96466 2.00049 5.5 2.00049C5.03534 2.00049 4.80302 2.00049 4.60982 2.03892C3.81644 2.19673 3.19624 2.81693 3.03843 3.61031C3 3.80351 3 4.03583 3 4.50049V6.50049C3 6.96514 3 7.19747 3.03843 7.39067C3.19624 8.18405 3.81644 8.80425 4.60982 8.96206C4.80302 9.00049 5.03534 9.00049 5.5 9.00049C5.96466 9.00049 6.19698 9.00049 6.39018 8.96206C7.18356 8.80425 7.80376 8.18405 7.96157 7.39067C8 7.19747 8 6.96514 8 6.50049Z" fill="currentColor" /><path d="M21 6.50049V4.50049C21 4.03583 21 3.80351 20.9616 3.61031C20.8038 2.81693 20.1836 2.19673 19.3902 2.03892C19.197 2.00049 18.9647 2.00049 18.5 2.00049C18.0353 2.00049 17.803 2.00049 17.6098 2.03892C16.8164 2.19673 16.1962 2.81693 16.0384 3.61031C16 3.80351 16 4.03583 16 4.50049V6.50049C16 6.96514 16 7.19747 16.0384 7.39067C16.1962 8.18405 16.8164 8.80425 17.6098 8.96206C17.803 9.00049 18.0353 9.00049 18.5 9.00049C18.9647 9.00049 19.197 9.00049 19.3902 8.96206C20.1836 8.80425 20.8038 8.18405 20.9616 7.39067C21 7.19747 21 6.96514 21 6.50049Z" fill="currentColor" /><path d="M8 19.5005V17.5005C8 17.0358 8 16.8035 7.96157 16.6103C7.80376 15.8169 7.18356 15.1967 6.39018 15.0389C6.19698 15.0005 5.96466 15.0005 5.5 15.0005C5.03534 15.0005 4.80302 15.0005 4.60982 15.0389C3.81644 15.1967 3.19624 15.8169 3.03843 16.6103C3 16.8035 3 17.0358 3 17.5005V19.5005C3 19.9651 3 20.1975 3.03843 20.3907C3.19624 21.1841 3.81644 21.8042 4.60982 21.9621C4.80302 22.0005 5.03534 22.0005 5.5 22.0005C5.96466 22.0005 6.19698 22.0005 6.39018 21.9621C7.18356 21.8042 7.80376 21.1841 7.96157 20.3907C8 20.1975 8 19.9651 8 19.5005Z" fill="currentColor" /><path d="M21 19.5005V17.5005C21 17.0358 21 16.8035 20.9616 16.6103C20.8038 15.8169 20.1836 15.1967 19.3902 15.0389C19.197 15.0005 18.9647 15.0005 18.5 15.0005C18.0353 15.0005 17.803 15.0005 17.6098 15.0389C16.8164 15.1967 16.1962 15.8169 16.0384 16.6103C16 16.8035 16 17.0358 16 17.5005V19.5005C16 19.9651 16 20.1975 16.0384 20.3907C16.1962 21.1841 16.8164 21.8042 17.6098 21.9621C17.803 22.0005 18.0353 22.0005 18.5 22.0005C18.9647 22.0005 19.197 22.0005 19.3902 21.9621C20.1836 21.8042 20.8038 21.1841 20.9616 20.3907C21 20.1975 21 19.9651 21 19.5005Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 6.50049V4.50049C3 4.03583 3 3.80351 3.03843 3.61031C3.19624 2.81693 3.81644 2.19673 4.60982 2.03892C4.80302 2.00049 5.03534 2.00049 5.5 2.00049C5.96466 2.00049 6.19698 2.00049 6.39018 2.03892C7.18356 2.19673 7.80376 2.81693 7.96157 3.61031C8 3.80351 8 4.03583 8 4.50049V4.75049H16V4.50049C16 4.03583 16 3.80351 16.0384 3.61031C16.1962 2.81693 16.8164 2.19673 17.6098 2.03892C17.803 2.00049 18.0353 2.00049 18.5 2.00049C18.9647 2.00049 19.197 2.00049 19.3902 2.03892C20.1836 2.19673 20.8038 2.81693 20.9616 3.61031C21 3.80351 21 4.03583 21 4.50049V6.50049C21 6.96514 21 7.19747 20.9616 7.39067C20.8038 8.18405 20.1836 8.80425 19.3902 8.96206C19.197 9.00049 18.9647 9.00049 18.5 9.00049C18.0353 9.00049 17.803 9.00049 17.6098 8.96206C16.8164 8.80425 16.1962 8.18405 16.0384 7.39067C16 7.19747 16 6.96514 16 6.50049V6.25049H12.75V17.7505H16V17.5005C16 17.0358 16 16.8035 16.0384 16.6103C16.1962 15.8169 16.8164 15.1967 17.6098 15.0389C17.803 15.0005 18.0353 15.0005 18.5 15.0005C18.9647 15.0005 19.197 15.0005 19.3902 15.0389C20.1836 15.1967 20.8038 15.8169 20.9616 16.6103C21 16.8035 21 17.0358 21 17.5005V19.5005C21 19.9651 21 20.1975 20.9616 20.3907C20.8038 21.184 20.1836 21.8042 19.3902 21.9621C19.197 22.0005 18.9647 22.0005 18.5 22.0005C18.0353 22.0005 17.803 22.0005 17.6098 21.9621C16.8164 21.8042 16.1962 21.184 16.0384 20.3907C16 20.1975 16 19.9651 16 19.5005V19.2505H8V19.5005C8 19.9651 8 20.1975 7.96157 20.3907C7.80376 21.184 7.18356 21.8042 6.39018 21.9621C6.19698 22.0005 5.96466 22.0005 5.5 22.0005C5.03534 22.0005 4.80302 22.0005 4.60982 21.9621C3.81644 21.8042 3.19624 21.184 3.03843 20.3907C3 20.1975 3 19.9651 3 19.5005V17.5005C3 17.0358 3 16.8035 3.03843 16.6103C3.19624 15.8169 3.81644 15.1967 4.60982 15.0389C4.80302 15.0005 5.03534 15.0005 5.5 15.0005C5.96466 15.0005 6.19698 15.0005 6.39018 15.0389C7.18356 15.1967 7.80376 15.8169 7.96157 16.6103C8 16.8035 8 17.0358 8 17.5005V17.7505H11.25V6.25049H8V6.50049C8 6.96514 8 7.19747 7.96157 7.39067C7.80376 8.18405 7.18356 8.80425 6.39018 8.96206C6.19698 9.00049 5.96466 9.00049 5.5 9.00049C5.03534 9.00049 4.80302 9.00049 4.60982 8.96206C3.81644 8.80425 3.19624 8.18405 3.03843 7.39067C3 7.19747 3 6.96514 3 6.50049Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSuspension as IconComponent).keywords = [
  "suspension",
  "hiatus",
  "pause",
  "reprieve",
  "interruption",
  "respite",
  "abatement",
  "break",
  "dangling",
  "hanging"
];

export default IconSuspension as IconComponent;