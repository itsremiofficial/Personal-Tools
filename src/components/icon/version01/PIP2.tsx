import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconPIP2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M2 12C2 8.25027 2 6.3754 2.95491 5.06107C3.26331 4.6366 3.6366 4.26331 4.06107 3.95491C5.3754 3 7.25027 3 11 3H13C16.7497 3 18.6246 3 19.9389 3.95491C20.3634 4.26331 20.7367 4.6366 21.0451 5.06107C22 6.3754 22 8.25027 22 12C22 15.7497 22 17.6246 21.0451 18.9389C20.7367 19.3634 20.3634 19.7367 19.9389 20.0451C18.6246 21 16.7497 21 13 21H11C7.25027 21 5.3754 21 4.06107 20.0451C3.6366 19.7367 3.26331 19.3634 2.95491 18.9389C2 17.6246 2 15.7497 2 12Z" stroke="currentColor" strokeWidth={width} /><path d="M11 14C11 13.0681 11 12.6022 11.1522 12.2346C11.3552 11.7446 11.7446 11.3552 12.2346 11.1522C12.6022 11 13.0681 11 14 11H15C15.9319 11 16.3978 11 16.7654 11.1522C17.2554 11.3552 17.6448 11.7446 17.8478 12.2346C18 12.6022 18 13.0681 18 14C18 14.9319 18 15.3978 17.8478 15.7654C17.6448 16.2554 17.2554 16.6448 16.7654 16.8478C16.3978 17 15.9319 17 15 17H14C13.0681 17 12.6022 17 12.2346 16.8478C11.7446 16.6448 11.3552 16.2554 11.1522 15.7654C11 15.3978 11 14.9319 11 14Z" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M2.95491 5.06107C2 6.3754 2 8.25027 2 12C2 15.7497 2 17.6246 2.95491 18.9389C3.26331 19.3634 3.6366 19.7367 4.06107 20.0451C5.3754 21 7.25027 21 11 21H13C16.7497 21 18.6246 21 19.9389 20.0451C20.3634 19.7367 20.7367 19.3634 21.0451 18.9389C22 17.6246 22 15.7497 22 12C22 8.25027 22 6.3754 21.0451 5.06107C20.7367 4.6366 20.3634 4.26331 19.9389 3.95491C18.6246 3 16.7497 3 13 3H11C7.25027 3 5.3754 3 4.06107 3.95491C3.6366 4.26331 3.26331 4.6366 2.95491 5.06107Z" fill="currentColor" /><path d="M11 14.5C11 13.4128 11 12.8692 11.174 12.4404C11.406 11.8687 11.8509 11.4144 12.411 11.1776C12.8311 11 13.3636 11 14.4286 11H15.5714C16.6364 11 17.1689 11 17.589 11.1776C18.1491 11.4144 18.594 11.8687 18.826 12.4404C19 12.8692 19 13.4128 19 14.5C19 15.5872 19 16.1308 18.826 16.5596C18.594 17.1313 18.1491 17.5856 17.589 17.8224C17.1689 18 16.6364 18 15.5714 18H14.4286C13.3636 18 12.8311 18 12.411 17.8224C11.8509 17.5856 11.406 17.1313 11.174 16.5596C11 16.1308 11 15.5872 11 14.5Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2.95491 5.06107C2 6.3754 2 8.25027 2 12C2 15.7497 2 17.6246 2.95491 18.9389C3.26331 19.3634 3.6366 19.7367 4.06107 20.0451C5.3754 21 7.25027 21 11 21H13C16.7497 21 18.6246 21 19.9389 20.0451C20.3634 19.7367 20.7367 19.3634 21.0451 18.9389C22 17.6246 22 15.7497 22 12C22 8.25027 22 6.3754 21.0451 5.06107C20.7367 4.6366 20.3634 4.26331 19.9389 3.95491C18.6246 3 16.7497 3 13 3H11C7.25027 3 5.3754 3 4.06107 3.95491C3.6366 4.26331 3.26331 4.6366 2.95491 5.06107ZM11.174 12.4404C11 12.8692 11 13.4128 11 14.5C11 15.5872 11 16.1308 11.174 16.5596C11.406 17.1313 11.8509 17.5856 12.411 17.8224C12.8311 18 13.3636 18 14.4286 18H15.5714C16.6364 18 17.1689 18 17.589 17.8224C18.1491 17.5856 18.594 17.1313 18.826 16.5596C19 16.1308 19 15.5872 19 14.5C19 13.4128 19 12.8692 18.826 12.4404C18.594 11.8687 18.1491 11.4144 17.589 11.1776C17.1689 11 16.6364 11 15.5714 11H14.4286C13.3636 11 12.8311 11 12.411 11.1776C11.8509 11.4144 11.406 11.8687 11.174 12.4404Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPIP2 as IconComponentType).keywords = [
  "2",
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

export default IconPIP2 as IconComponentType;