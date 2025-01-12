import { FC } from 'react';

const IconLinkMinimalistic2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M14.1625 18.4881L13.4417 19.2089C11.053 21.5976 7.18019 21.5976 4.79151 19.2089C2.40283 16.8202 2.40283 12.9474 4.79151 10.5587L5.51236 9.83789" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M9.8374 14.163L14.1625 9.83789" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M9.8374 5.51285L10.5583 4.792C12.9469 2.40332 16.8198 2.40332 19.2084 4.792C21.5971 7.18068 21.5971 11.0535 19.2084 13.4422L18.4876 14.163" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.5" : "1"}><path d="M19.7388 4.26167C17.0572 1.58009 12.7095 1.58009 10.0279 4.26167L9.30707 4.98252C9.01418 5.27541 9.01418 5.75029 9.30707 6.04318C9.59997 6.33607 10.0748 6.33607 10.3677 6.04318L11.0886 5.32233C13.1844 3.22654 16.5823 3.22654 18.6781 5.32233C20.7739 7.41812 20.7739 10.8161 18.6781 12.9119L17.9573 13.6327C17.6644 13.9256 17.6644 14.4005 17.9573 14.6934C18.2502 14.9863 18.725 14.9863 19.0179 14.6934L19.7388 13.9725C22.4203 11.2909 22.4203 6.94325 19.7388 4.26167Z" fill="currentColor" /><path d="M6.04269 9.30756C6.33558 9.60045 6.33558 10.0753 6.04269 10.3682L5.32184 11.0891C3.22605 13.1849 3.22605 16.5828 5.32184 18.6786C7.41763 20.7744 10.8156 20.7744 12.9114 18.6786L13.6322 17.9577C13.9251 17.6649 14.4 17.6649 14.6929 17.9577C14.9858 18.2506 14.9858 18.7255 14.6929 19.0184L13.972 19.7393C11.2905 22.4208 6.94276 22.4208 4.26118 19.7393C1.57961 17.0577 1.57961 12.71 4.26118 10.0284L4.98203 9.30756C5.27492 9.01467 5.7498 9.01467 6.04269 9.30756Z" fill="currentColor" /></g><path d="M14.6933 9.30756C14.9862 9.60045 14.9862 10.0753 14.6933 10.3682L10.3682 14.6933C10.0753 14.9862 9.60045 14.9862 9.30756 14.6933C9.01467 14.4004 9.01467 13.9255 9.30756 13.6327L13.6327 9.30756C13.9255 9.01467 14.4004 9.01467 14.6933 9.30756Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.7388 4.26167C17.0572 1.58009 12.7095 1.58009 10.0279 4.26167L9.30707 4.98252C9.01418 5.27541 9.01418 5.75029 9.30707 6.04318C9.59997 6.33607 10.0748 6.33607 10.3677 6.04318L11.0886 5.32233C13.1844 3.22654 16.5823 3.22654 18.6781 5.32233C20.7739 7.41812 20.7739 10.8161 18.6781 12.9119L17.9573 13.6327C17.6644 13.9256 17.6644 14.4005 17.9573 14.6934C18.2502 14.9863 18.725 14.9863 19.0179 14.6934L19.7388 13.9725C22.4203 11.2909 22.4203 6.94325 19.7388 4.26167Z" fill="currentColor" /><path d="M6.04269 9.30756C6.33558 9.60045 6.33558 10.0753 6.04269 10.3682L5.32184 11.0891C3.22605 13.1849 3.22605 16.5828 5.32184 18.6786C7.41763 20.7744 10.8156 20.7744 12.9114 18.6786L13.6322 17.9577C13.9251 17.6649 14.4 17.6649 14.6929 17.9577C14.9858 18.2506 14.9858 18.7255 14.6929 19.0184L13.972 19.7393C11.2905 22.4208 6.94276 22.4208 4.26118 19.7393C1.57961 17.0577 1.57961 12.71 4.26118 10.0284L4.98203 9.30756C5.27492 9.01467 5.7498 9.01467 6.04269 9.30756Z" fill="currentColor" /><path d="M14.6928 9.30756C14.9857 9.60045 14.9857 10.0753 14.6928 10.3682L10.3677 14.6933C10.0748 14.9862 9.59997 14.9862 9.30707 14.6933C9.01418 14.4004 9.01418 13.9255 9.30707 13.6327L13.6322 9.30756C13.9251 9.01467 14.3999 9.01467 14.6928 9.30756Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconLinkMinimalistic2 as IconComponent).keywords = [
  "link",
  "minimalistic",
  "2",
  "linkup",
  "connection",
  "nexus",
  "connexion",
  "connectedness",
  "connect",
  "tie-in",
  "unite",
  "associate",
  "modularistic",
  "brutalistic",
  "localistic",
  "reductionist",
  "exhibitional",
  "monogynous",
  "simplificational",
  "reductionistic",
  "automatistic",
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

export default IconLinkMinimalistic2 as IconComponent;