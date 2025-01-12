import { FC } from 'react';

const IconRewindBackCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" stroke="currentColor" strokeWidth={width} /><path d="M11 8.07141L7.77844 10.3725C6.66174 11.1702 6.66174 12.8298 7.77844 13.6274L11 15.9286M16.5 15.0568V8.94317C16.5 8.1298 15.5806 7.65667 14.9188 8.12944L10.6392 11.1862C10.0809 11.5851 10.0809 12.4149 10.6392 12.8137L14.9188 15.8705C15.5806 16.3433 16.5 15.8702 16.5 15.0568Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z" fill="currentColor" /><path d="M10.5636 7.46105C10.9006 7.22029 11.369 7.29836 11.6098 7.63542C11.8506 7.97248 11.7725 8.44089 11.4354 8.68165L8.21388 10.9828C7.51594 11.4813 7.51594 12.5186 8.21388 13.0171L11.4354 15.3182C11.7725 15.5589 11.8506 16.0274 11.6098 16.3644C11.369 16.7015 10.9006 16.7795 10.5636 16.5388L7.34202 14.2377C5.80656 13.1409 5.80656 10.8589 7.34202 9.76215L10.5636 7.46105Z" fill="currentColor" /><path d="M16.4996 15.1318V8.86887C16.4996 8.07017 15.6094 7.59378 14.9449 8.03682L10.2476 11.1683C9.6539 11.5641 9.6539 12.4366 10.2476 12.8324L14.9449 15.9639C15.6094 16.4069 16.4996 15.9305 16.4996 15.1318Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM10.564 7.46105C10.9011 7.22029 11.3695 7.29836 11.6102 7.63542C11.851 7.97248 11.7729 8.44089 11.4359 8.68165L8.21432 10.9828C7.51639 11.4813 7.51639 12.5186 8.21432 13.0171L11.4359 15.3182C11.7729 15.5589 11.851 16.0274 11.6102 16.3644C11.3695 16.7015 10.9011 16.7795 10.564 16.5388L7.34247 14.2377C5.80701 13.1409 5.80701 10.8589 7.34247 9.76215L10.564 7.46105ZM16.5 15.1318V8.86887C16.5 8.07017 15.6099 7.59378 14.9453 8.03682L10.2481 11.1683C9.65434 11.5641 9.65434 12.4366 10.2481 12.8324L14.9453 15.9639C15.6099 16.4069 16.5 15.9305 16.5 15.1318Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRewindBackCircle as IconComponent).keywords = [
  "rewind",
  "back",
  "circle",
  "rollback",
  "regress",
  "backtrack",
  "retrogressive",
  "backward",
  "rewrite",
  "reverse",
  "retract",
  "rearward",
  "rearwards",
  "backwards",
  "back up",
  "backmost",
  "rearmost",
  "hindermost",
  "support",
  "round",
  "rotary",
  "environ",
  "roundabout",
  "circulate",
  "circuit",
  "encircle",
  "surround",
  "dress circle"
];

export default IconRewindBackCircle as IconComponent;