import { FC } from 'react';

const IconBones: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.4809 2.04565V4.06084C9.4809 4.61732 9.00457 5.05936 8.52039 5.33365C7.60566 5.85186 6.96191 7.04015 6.96191 8.09123C6.96191 9.48242 8.0897 10.6102 9.4809 10.6102C10.8721 10.6102 11.9999 9.48242 11.9999 8.09123C11.9999 9.48242 13.1277 10.6102 14.5189 10.6102C15.9101 10.6102 17.0379 9.48242 17.0379 8.09123C17.0379 7.04015 16.3941 5.85186 15.4794 5.33365C14.9952 5.05936 14.5189 4.61733 14.5189 4.06085L14.5189 2.04566" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M9.51899 22.0002V19.9851C9.51899 19.4286 9.04266 18.9865 8.55848 18.7122C7.64375 18.194 7 17.0057 7 15.9547C7 14.5635 8.12779 13.4357 9.51899 13.4357C10.9102 13.4357 12.038 14.5635 12.038 15.9547C12.038 14.5635 13.1658 13.4357 14.557 13.4357C15.9482 13.4357 17.076 14.5635 17.076 15.9547C17.076 17.0057 16.4322 18.194 15.5175 18.7122C15.0333 18.9865 14.557 19.4286 14.557 19.9851L14.557 22.0002" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.5" : "1"} d="M2 12.0002C2 7.2862 2 4.92918 3.46447 3.46471C4.92893 2.00024 7.28595 2.00024 12 2.00024C16.714 2.00024 19.0711 2.00024 20.5355 3.46471C22 4.92918 22 7.2862 22 12.0002C22 16.7143 22 19.0713 20.5355 20.5358C19.0711 22.0002 16.714 22.0002 12 22.0002C7.28595 22.0002 4.92893 22.0002 3.46447 20.5358C2 19.0713 2 16.7143 2 12.0002Z" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M2 12.0002C2 7.2862 2 4.92918 3.46447 3.46471C4.92893 2.00024 7.28595 2.00024 12 2.00024C16.714 2.00024 19.0711 2.00024 20.5355 3.46471C22 4.92918 22 7.2862 22 12.0002C22 16.7143 22 19.0713 20.5355 20.5358C19.0711 22.0002 16.714 22.0002 12 22.0002C7.28595 22.0002 4.92893 22.0002 3.46447 20.5358C2 19.0713 2 16.7143 2 12.0002Z" fill="currentColor" /><path d="M9.4809 10.6103C10.8721 10.6103 11.9999 9.48252 11.9999 8.09132C11.9999 9.48252 13.1277 10.6103 14.5189 10.6103C15.9101 10.6103 17.0379 9.48252 17.0379 8.09132C17.0379 7.04025 16.3941 5.85195 15.4794 5.33375C14.9952 5.05945 14.5189 4.61742 14.5189 4.06094V2.01147L9.4809 2.01148V4.06094C9.4809 4.61742 9.00457 5.05945 8.52039 5.33375C7.60566 5.85195 6.96191 7.04025 6.96191 8.09132C6.96191 9.48252 8.0897 10.6103 9.4809 10.6103Z" fill="currentColor" /><path d="M14.557 21.9886L14.557 19.9851C14.557 19.4287 15.0333 18.9866 15.5175 18.7123C16.4322 18.1941 17.076 17.0058 17.076 15.9548C17.076 14.5636 15.9482 13.4358 14.557 13.4358C13.1658 13.4358 12.038 14.5636 12.038 15.9548C12.038 14.5636 10.9102 13.4358 9.51899 13.4358C8.12779 13.4358 7 14.5636 7 15.9548C7 17.0058 7.64375 18.1941 8.55848 18.7123C9.04266 18.9866 9.51899 19.4287 9.51899 19.9851V21.9897L14.557 21.9886Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12.0002C2 7.28617 2 4.92915 3.46447 3.46468C4.6409 2.28825 6.39332 2.05686 9.4809 2.01136V4.06081C9.4809 4.61729 9.00457 5.05933 8.52039 5.33362C7.60566 5.85183 6.96191 7.04012 6.96191 8.0912C6.96191 9.48239 8.0897 10.6102 9.4809 10.6102C10.8721 10.6102 11.9999 9.48239 11.9999 8.0912C11.9999 9.48239 13.1277 10.6102 14.5189 10.6102C15.9101 10.6102 17.0379 9.48239 17.0379 8.0912C17.0379 7.04012 16.3941 5.85183 15.4794 5.33362C14.9952 5.05933 14.5189 4.61729 14.5189 4.06081V2.01135C17.6066 2.05685 19.3591 2.28822 20.5355 3.46468C22 4.92915 22 7.28617 22 12.0002C22 16.7143 22 19.0713 20.5355 20.5357C19.3639 21.7074 17.621 21.9417 14.557 21.9885L14.557 19.985C14.557 19.4285 15.0333 18.9865 15.5175 18.7122C16.4322 18.194 17.076 17.0057 17.076 15.9546C17.076 14.5634 15.9482 13.4357 14.557 13.4357C13.1658 13.4357 12.038 14.5634 12.038 15.9546C12.038 14.5634 10.9102 13.4357 9.51899 13.4357C8.12779 13.4357 7 14.5634 7 15.9546C7 17.0057 7.64375 18.194 8.55848 18.7122C9.04266 18.9865 9.51899 19.4285 9.51899 19.985V21.9896C6.40771 21.9454 4.64573 21.717 3.46447 20.5357C2 19.0713 2 16.7143 2 12.0002Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBones as IconComponent).keywords = [
  "bones",
  "castanets",
  "maraca",
  "clappers",
  "finger cymbals",
  "the",
  "legs",
  "feet",
  "apples",
  "edges"
];

export default IconBones as IconComponent;