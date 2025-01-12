import { FC } from 'react';

const IconPinCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.2452 7.82412L14.7755 7.29379V7.29379L14.2452 7.82412ZM16.1758 9.75476L15.6454 10.2851L16.1758 9.75476ZM10.6081 15.474L10.0777 16.0043L10.6081 15.474ZM8.52599 13.3919L9.05633 12.8616H9.05633L8.52599 13.3919ZM15.5124 12.9727L15.7897 13.6695L15.5124 12.9727ZM14.1176 13.5278L13.8402 12.831H13.8402L14.1176 13.5278ZM10.4721 9.88235L9.7753 9.60501L10.4721 9.88235ZM11.0273 8.48752L11.7241 8.76486H11.7241L11.0273 8.48752ZM9.12166 11.1014L8.91688 10.3799H8.91688L9.12166 11.1014ZM9.64707 10.9272L9.31572 10.2544L9.31572 10.2544L9.64707 10.9272ZM10.2453 10.3872L9.60974 9.98897L10.2453 10.3872ZM13.6127 13.7547L14.011 14.3902L14.011 14.3902L13.6127 13.7547ZM12.8985 14.8783L13.62 15.0831L12.8985 14.8783ZM13.0727 14.3529L13.7456 14.6842L13.7456 14.6842L13.0727 14.3529ZM7.83764 12.5876L7.13952 12.8616L7.13952 12.8616L7.83764 12.5876ZM8.12867 11.4685L8.60483 12.0479L8.60483 12.0479L8.12867 11.4685ZM11.4124 16.1624L11.1383 16.8605H11.1383L11.4124 16.1624ZM12.5315 15.8713L13.1109 16.3475L12.5315 15.8713ZM17.5 11.7051L16.7654 11.5537L16.7654 11.5537L17.5 11.7051ZM12.2948 6.49988L12.1434 5.76533H12.1434L12.2948 6.49988ZM6.98446 15.9548C6.69156 16.2477 6.69157 16.7225 6.98446 17.0154C7.27736 17.3083 7.75223 17.3083 8.04512 17.0154L6.98446 15.9548ZM10.0973 14.9632C10.3902 14.6703 10.3902 14.1955 10.0973 13.9026C9.80438 13.6097 9.32951 13.6097 9.03662 13.9026L10.0973 14.9632ZM13.7148 8.35444L15.6454 10.2851L16.7061 9.22443L14.7755 7.29379L13.7148 8.35444ZM11.1384 14.9437L9.05633 12.8616L7.99566 13.9222L10.0777 16.0043L11.1384 14.9437ZM15.235 12.2759L13.8402 12.831L14.3949 14.2247L15.7897 13.6695L15.235 12.2759ZM11.169 10.1597L11.7241 8.76486L10.3304 8.21019L9.7753 9.60501L11.169 10.1597ZM9.32644 11.8229C9.56981 11.7538 9.78288 11.6963 9.97842 11.6L9.31572 10.2544C9.27102 10.2764 9.2139 10.2956 8.91688 10.3799L9.32644 11.8229ZM9.7753 9.60501C9.66113 9.89188 9.6362 9.94675 9.60974 9.98897L10.8808 10.7855C10.9965 10.6008 11.0754 10.3947 11.169 10.1597L9.7753 9.60501ZM9.97842 11.6C10.349 11.4176 10.6614 11.1355 10.8808 10.7855L9.60974 9.98897C9.53827 10.103 9.43646 10.1949 9.31572 10.2544L9.97842 11.6ZM13.8402 12.831C13.6052 12.9245 13.3991 13.0035 13.2144 13.1192L14.011 14.3902C14.0532 14.3638 14.108 14.3388 14.3949 14.2247L13.8402 12.831ZM13.62 15.0831C13.7043 14.7861 13.7235 14.7289 13.7456 14.6842L12.3999 14.0216C12.3036 14.2171 12.2461 14.4302 12.177 14.6735L13.62 15.0831ZM13.2144 13.1192C12.8644 13.3386 12.5824 13.651 12.3999 14.0216L13.7456 14.6842C13.805 14.5635 13.8969 14.4617 14.011 14.3902L13.2144 13.1192ZM9.05633 12.8616C8.84506 12.6503 8.71106 12.5158 8.61821 12.4109C8.52305 12.3034 8.52421 12.2841 8.53577 12.3135L7.13952 12.8616C7.22603 13.082 7.36691 13.2604 7.49495 13.405C7.6253 13.5523 7.798 13.7246 7.99566 13.9222L9.05633 12.8616ZM8.91688 10.3799C8.64797 10.4562 8.41324 10.5225 8.22765 10.5876C8.04535 10.6516 7.83543 10.7387 7.65252 10.889L8.60483 12.0479C8.58039 12.068 8.5888 12.0506 8.72429 12.003C8.85649 11.9566 9.03901 11.9045 9.32644 11.8229L8.91688 10.3799ZM8.53577 12.3135C8.49881 12.2194 8.5267 12.1121 8.60483 12.0479L7.65252 10.889C7.07213 11.3659 6.865 12.1624 7.13952 12.8616L8.53577 12.3135ZM10.0777 16.0043C10.2754 16.202 10.4476 16.3747 10.5949 16.505C10.7396 16.6331 10.9179 16.774 11.1383 16.8605L11.6865 15.4642C11.7159 15.4758 11.6966 15.477 11.589 15.3818C11.4841 15.2889 11.3497 15.1549 11.1384 14.9437L10.0777 16.0043ZM12.177 14.6735C12.0955 14.961 12.0433 15.1435 11.9969 15.2757C11.9494 15.4112 11.9319 15.4196 11.952 15.3952L13.1109 16.3475C13.2612 16.1646 13.3484 15.9546 13.4123 15.7723C13.4774 15.5867 13.5437 15.352 13.62 15.0831L12.177 14.6735ZM11.1383 16.8605C11.8375 17.135 12.634 16.9279 13.1109 16.3475L11.952 15.3952C11.8878 15.4733 11.7806 15.5012 11.6865 15.4642L11.1383 16.8605ZM15.6454 10.2851C16.1401 10.7797 16.4493 11.0918 16.6335 11.34C16.8093 11.5769 16.7551 11.604 16.7654 11.5537L18.2346 11.8565C18.3519 11.2871 18.1127 10.8162 17.8381 10.4462C17.572 10.0876 17.1657 9.68398 16.7061 9.22443L15.6454 10.2851ZM15.7897 13.6695C16.3935 13.4292 16.9264 13.2193 17.3126 12.9951C17.7112 12.7639 18.1172 12.426 18.2346 11.8565L16.7654 11.5537C16.7758 11.5034 16.8149 11.5497 16.5598 11.6977C16.2924 11.8529 15.885 12.0172 15.235 12.2759L15.7897 13.6695ZM14.7755 7.29379C14.3159 6.83424 13.9124 6.42788 13.5538 6.16177C13.1838 5.88718 12.7128 5.64793 12.1434 5.76533L12.4463 7.23443C12.3959 7.24481 12.4231 7.19059 12.6599 7.36633C12.9082 7.55056 13.2202 7.85982 13.7148 8.35444L14.7755 7.29379ZM11.7241 8.76486C11.9828 8.11494 12.1471 7.70747 12.3022 7.44008C12.4502 7.18499 12.4966 7.22405 12.4463 7.23443L12.1434 5.76533C11.574 5.88272 11.236 6.28873 11.0048 6.68727C10.7807 7.07351 10.5707 7.60636 10.3304 8.21019L11.7241 8.76486ZM8.04512 17.0154L10.0973 14.9632L9.03662 13.9026L6.98446 15.9548L8.04512 17.0154Z" fill="currentColor" /><circle opacity={duotone ? "0.5" : "1"} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="currentColor" /><path d="M16.5576 9.42964C17.0105 9.88246 17.3899 10.2619 17.6372 10.5951C17.8953 10.943 18.0857 11.34 17.9896 11.8061C17.8935 12.2722 17.5616 12.5615 17.187 12.7789C16.8281 12.9872 16.3295 13.1856 15.7345 13.4224L14.3023 13.9924C14.0241 14.1031 13.944 14.1371 13.8781 14.1784C13.7247 14.2745 13.6011 14.4114 13.5211 14.5738C13.4867 14.6437 13.4612 14.7268 13.3794 15.0149L13.3751 15.0301C13.2998 15.2953 13.2371 15.5162 13.1763 15.6896C13.1151 15.8641 13.0395 16.0404 12.9176 16.1888C12.5095 16.6854 11.8279 16.8627 11.2295 16.6278C11.0508 16.5576 10.8989 16.4404 10.7605 16.3178C10.6229 16.1961 10.4605 16.0337 10.2655 15.8387L9.56683 15.14L7.8682 16.8387C7.67294 17.0339 7.35636 17.0339 7.1611 16.8387C6.96583 16.6434 6.96583 16.3268 7.16109 16.1316L8.85972 14.4329L8.16111 13.7343L8.16111 13.7343C7.96616 13.5393 7.8038 13.377 7.68202 13.2394C7.55946 13.1009 7.44226 12.949 7.37209 12.7703C7.13717 12.1719 7.31442 11.4903 7.8111 11.0822C7.95945 10.9603 8.13579 10.8848 8.31028 10.8235C8.48367 10.7627 8.70458 10.7 8.9698 10.6247L8.985 10.6204C9.27308 10.5386 9.35619 10.5131 9.42603 10.4787C9.5884 10.3987 9.72532 10.2751 9.82144 10.1217C9.86278 10.0558 9.89671 9.9757 10.0074 9.69747L10.5774 8.2653L10.5774 8.2653C10.8142 7.67028 11.0126 7.1717 11.2209 6.81275C11.4383 6.43812 11.7276 6.10629 12.1937 6.01019C12.6599 5.91409 13.0568 6.10443 13.4047 6.36254C13.7379 6.60985 14.1173 6.9893 14.5702 7.44216L16.5576 9.42964Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16.5578 9.42975C17.0106 9.88257 17.3901 10.262 17.6374 10.5953C17.8955 10.9431 18.0858 11.3401 17.9897 11.8062C17.8936 12.2723 17.5618 12.5617 17.1872 12.779C16.8282 12.9873 16.3296 13.1857 15.7346 13.4225L14.3025 13.9925C14.0242 14.1032 13.9442 14.1372 13.8782 14.1785C13.7248 14.2746 13.6012 14.4115 13.5213 14.5739C13.4869 14.6438 13.4613 14.7269 13.3795 15.015L13.3752 15.0302C13.3 15.2954 13.2373 15.5163 13.1764 15.6897C13.1152 15.8642 13.0397 16.0405 12.9178 16.1889C12.5097 16.6856 11.8281 16.8628 11.2297 16.6279C11.0509 16.5577 10.8991 16.4405 10.7606 16.318C10.623 16.1962 10.4606 16.0338 10.2657 15.8388L9.56697 15.1401L7.86834 16.8388C7.67308 17.034 7.3565 17.034 7.16124 16.8388C6.96597 16.6435 6.96597 16.3269 7.16123 16.1317L8.85986 14.433L8.16125 13.7344C7.96631 13.5394 7.80394 13.3771 7.68216 13.2395C7.5596 13.101 7.4424 12.9491 7.37223 12.7704C7.13731 12.172 7.31456 11.4904 7.81124 11.0823C7.95959 10.9604 8.13593 10.8849 8.31042 10.8236C8.48381 10.7628 8.70472 10.7001 8.96994 10.6248L8.98514 10.6205C9.27322 10.5388 9.35633 10.5132 9.42617 10.4788C9.58854 10.3988 9.72546 10.2752 9.82158 10.1218C9.86292 10.0559 9.89685 9.97581 10.0076 9.69758L10.5776 8.26541C10.8144 7.67039 11.0128 7.17181 11.221 6.81286C11.4384 6.43823 11.7277 6.1064 12.1939 6.0103C12.66 5.9142 13.057 6.10454 13.4048 6.36265C13.7381 6.60996 14.1175 6.98941 14.5703 7.44227L16.5578 9.42975Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPinCircle as IconComponent).keywords = [
  "pin",
  "circle",
  "peg",
  "pin down",
  "tholepin",
  "trap",
  "pivot",
  "flag",
  "oarlock",
  "rowlock",
  "pin up",
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

export default IconPinCircle as IconComponent;