import { FC } from 'react';

const IconRevote: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M4.85233 4.59124C5.14301 4.29615 5.13943 3.82129 4.84434 3.53061C4.54925 3.23993 4.07439 3.2435 3.78371 3.53859L4.85233 4.59124ZM8.4 2.77724L7.86567 2.25094C7.5781 2.54289 7.57811 3.01162 7.86569 3.30356L8.4 2.77724ZM9.6161 5.08053C9.90678 5.37562 10.3816 5.3792 10.6767 5.08852C10.9718 4.79784 10.9754 4.32298 10.6847 4.02789L9.6161 5.08053ZM10.6847 1.52646C10.9754 1.23136 10.9718 0.756503 10.6767 0.465833C10.3816 0.175163 9.90675 0.178753 9.61608 0.473853L10.6847 1.52646ZM12 20.25C9.85716 20.25 8.32662 20.2484 7.1637 20.0896C6.02353 19.934 5.34923 19.6401 4.85233 19.1357L3.78371 20.1883C4.60483 21.0219 5.65019 21.397 6.96085 21.5759C8.24876 21.7516 9.90019 21.75 12 21.75V20.25ZM2.25 11.8635C2.25 13.9961 2.24845 15.6699 2.42124 16.9746C2.59674 18.2997 2.96414 19.3563 3.78371 20.1883L4.85233 19.1357C4.35388 18.6296 4.06227 17.9405 3.90826 16.7776C3.75155 15.5943 3.75 14.0379 3.75 11.8635H2.25ZM20.25 11.8635C20.25 14.0379 20.2485 15.5943 20.0917 16.7776C19.9377 17.9405 19.6461 18.6296 19.1477 19.1357L20.2163 20.1883C21.0359 19.3563 21.4033 18.2997 21.5788 16.9746C21.7515 15.6699 21.75 13.9961 21.75 11.8635H20.25ZM12 21.75C14.0998 21.75 15.7512 21.7516 17.0391 21.5759C18.3498 21.397 19.3952 21.0219 20.2163 20.1883L19.1477 19.1357C18.6508 19.6401 17.9765 19.934 16.8363 20.0896C15.6734 20.2484 14.1428 20.25 12 20.25V21.75ZM12 3.4769C14.1428 3.4769 15.6734 3.47854 16.8363 3.63726C17.9765 3.79288 18.6508 4.08679 19.1477 4.59124L20.2163 3.53859C19.3952 2.70502 18.3498 2.32993 17.0391 2.15104C15.7512 1.97526 14.0998 1.9769 12 1.9769V3.4769ZM21.75 11.8635C21.75 9.73084 21.7515 8.05705 21.5788 6.75234C21.4033 5.42721 21.0359 4.3706 20.2163 3.53859L19.1477 4.59124C19.6461 5.09725 19.9377 5.7864 20.0917 6.94928C20.2485 8.13259 20.25 9.68905 20.25 11.8635H21.75ZM3.75 11.8635C3.75 9.68905 3.75155 8.13259 3.90826 6.94928C4.06227 5.7864 4.35388 5.09725 4.85233 4.59124L3.78371 3.53859C2.96414 4.3706 2.59674 5.42721 2.42124 6.75234C2.24845 8.05705 2.25 9.73084 2.25 11.8635H3.75ZM12 1.9769C10.5848 1.9769 9.38003 1.97669 8.3621 2.0282L8.4379 3.52628C9.40971 3.47711 10.5719 3.4769 12 3.4769V1.9769ZM7.86569 3.30356L9.6161 5.08053L10.6847 4.02789L8.93431 2.25092L7.86569 3.30356ZM8.93432 3.30355L10.6847 1.52646L9.61608 0.473853L7.86567 2.25094L8.93432 3.30355Z" fill="currentColor" /><path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} fillRule="evenodd" clipRule="evenodd" d="M10.4348 0.306033C10.7164 0.42145 10.9004 0.695644 10.9004 1.00002V1.97774C11.2467 1.97676 11.6074 1.97676 11.9829 1.97676L12.0577 1.97676C14.1301 1.97675 15.7631 1.97674 17.0391 2.1509C18.3498 2.32979 19.3952 2.70489 20.2163 3.53846C21.0359 4.37046 21.4033 5.42707 21.5788 6.75221C21.75 8.04542 21.75 9.70124 21.75 11.8071V11.9196C21.75 14.0254 21.75 15.6812 21.5788 16.9744C21.4033 18.2996 21.0359 19.3562 20.2163 20.1882C19.3952 21.0217 18.3498 21.3968 17.0391 21.5757C15.7631 21.7499 14.1301 21.7499 12.0577 21.7499H11.9423C9.86991 21.7499 8.23694 21.7499 6.96085 21.5757C5.65019 21.3968 4.60483 21.0217 3.78371 20.1882C2.96414 19.3562 2.59674 18.2996 2.42124 16.9744C2.24998 15.6812 2.24999 14.0254 2.25 11.9196V11.8071C2.24999 9.70125 2.24998 8.04542 2.42124 6.75221C2.59674 5.42708 2.96414 4.37046 3.78371 3.53846C4.07439 3.24337 4.54925 3.23979 4.84434 3.53047C5.13943 3.82115 5.14301 4.29601 4.85233 4.5911C4.35388 5.09711 4.06227 5.78627 3.90826 6.94914C3.75155 8.13245 3.75 9.68892 3.75 11.8633C3.75 14.0377 3.75155 15.5942 3.90826 16.7775C4.06227 17.9404 4.35388 18.6295 4.85233 19.1355C5.34923 19.64 6.02354 19.9339 7.1637 20.0895C8.32662 20.2482 9.85717 20.2499 12 20.2499C14.1428 20.2499 15.6734 20.2482 16.8363 20.0895C17.9765 19.9339 18.6508 19.64 19.1477 19.1355C19.6461 18.6295 19.9377 17.9404 20.0917 16.7775C20.2485 15.5942 20.25 14.0377 20.25 11.8633C20.25 9.68892 20.2485 8.13245 20.0917 6.94914C19.9377 5.78627 19.6461 5.09711 19.1477 4.5911C18.6508 4.08666 17.9765 3.79274 16.8363 3.63713C15.6734 3.4784 14.1428 3.47676 12 3.47676C11.6146 3.47676 11.2486 3.47678 10.9004 3.47777V4.55407C10.9004 4.85845 10.7165 5.13264 10.4348 5.24806C10.1532 5.36348 9.8297 5.29724 9.6161 5.0804L7.86569 3.30343C7.57811 3.01148 7.5781 2.54276 7.86567 2.2508L9.61608 0.473718C9.82968 0.256868 10.1532 0.190617 10.4348 0.306033Z" fill="currentColor" /><path d="M16.0303 10.0303C16.3232 9.73744 16.3232 9.26256 16.0303 8.96967C15.7374 8.67678 15.2626 8.67678 14.9697 8.96967L10.5 13.4393L9.03033 11.9697C8.73744 11.6768 8.26256 11.6768 7.96967 11.9697C7.67678 12.2626 7.67678 12.7374 7.96967 13.0303L9.96967 15.0303C10.2626 15.3232 10.7374 15.3232 11.0303 15.0303L16.0303 10.0303Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M10.4348 0.306155C10.7164 0.421572 10.9004 0.695766 10.9004 1.00015V1.97786C11.2467 1.97688 11.6074 1.97688 11.9829 1.97688L12.0577 1.97688C14.1301 1.97687 15.7631 1.97686 17.0391 2.15103C18.3498 2.32991 19.3952 2.70501 20.2163 3.53858C21.0359 4.37058 21.4033 5.4272 21.5788 6.75233C21.75 8.04554 21.75 9.70136 21.75 11.8072V11.9197C21.75 14.0255 21.75 15.6813 21.5788 16.9745C21.4033 18.2997 21.0359 19.3563 20.2163 20.1883C19.3952 21.0219 18.3498 21.397 17.0391 21.5758C15.7631 21.75 14.1301 21.75 12.0577 21.75H11.9423C9.86991 21.75 8.23694 21.75 6.96085 21.5758C5.65019 21.397 4.60483 21.0219 3.78371 20.1883C2.96414 19.3563 2.59674 18.2997 2.42124 16.9745C2.24998 15.6813 2.24999 14.0255 2.25 11.9197V11.8072C2.24999 9.70137 2.24998 8.04554 2.42124 6.75233C2.59674 5.4272 2.96414 4.37058 3.78371 3.53858C4.07439 3.24349 4.54925 3.23991 4.84434 3.53059C5.13943 3.82127 5.14301 4.29613 4.85233 4.59122C4.35388 5.09724 4.06227 5.78639 3.90826 6.94927C3.75155 8.13258 3.75 9.68904 3.75 11.8634C3.75 14.0378 3.75155 15.5943 3.90826 16.7776C4.06227 17.9405 4.35388 18.6296 4.85233 19.1356C5.34923 19.6401 6.02354 19.934 7.1637 20.0896C8.32662 20.2483 9.85717 20.25 12 20.25C14.1428 20.25 15.6734 20.2483 16.8363 20.0896C17.9765 19.934 18.6508 19.6401 19.1477 19.1356C19.6461 18.6296 19.9377 17.9405 20.0917 16.7776C20.2485 15.5943 20.25 14.0378 20.25 11.8634C20.25 9.68904 20.2485 8.13258 20.0917 6.94927C19.9377 5.78639 19.6461 5.09724 19.1477 4.59122C18.6508 4.08678 17.9765 3.79286 16.8363 3.63725C15.6734 3.47853 14.1428 3.47688 12 3.47688C11.6146 3.47688 11.2486 3.4769 10.9004 3.47789V4.5542C10.9004 4.85857 10.7165 5.13276 10.4348 5.24818C10.1532 5.3636 9.8297 5.29736 9.6161 5.08052L7.86569 3.30355C7.57811 3.0116 7.5781 2.54288 7.86567 2.25092L9.61608 0.47384C9.82968 0.256991 10.1532 0.190739 10.4348 0.306155Z" fill="currentColor" /><path d="M16.0303 10.0303C16.3232 9.73742 16.3232 9.26255 16.0303 8.96966C15.7374 8.67676 15.2626 8.67676 14.9697 8.96966L10.5 13.4393L9.03033 11.9697C8.73744 11.6768 8.26256 11.6768 7.96967 11.9697C7.67678 12.2625 7.67678 12.7374 7.96967 13.0303L9.96967 15.0303C10.2626 15.3232 10.7374 15.3232 11.0303 15.0303L16.0303 10.0303Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRevote as IconComponent).keywords = [
  "revote",
  "reballot",
  "retaking",
  "recount",
  "repeater",
  "revisit",
  "reappointment",
  "rewatch",
  "reelection",
  "resurvey"
];

export default IconRevote as IconComponent;