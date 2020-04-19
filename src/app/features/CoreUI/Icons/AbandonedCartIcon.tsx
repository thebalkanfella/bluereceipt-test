/* eslint-disable max-len */
import React from 'react';

import HoverIcon from './HoverIcon';

const AbandonedCartIcon: HoverIcon = ({ isHovered }) => (
  <svg width='19' height='19' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M6 16C5.75277 16 5.5111 16.0733 5.30554 16.2107C5.09998 16.348 4.93976 16.5432 4.84515 16.7716C4.75054 17.0001 4.72579 17.2514 4.77402 17.4939C4.82225 17.7363 4.9413 17.9591 5.11612 18.1339C5.29093 18.3087 5.51366 18.4277 5.75614 18.476C5.99861 18.5242 6.24995 18.4995 6.47835 18.4049C6.70676 18.3102 6.90199 18.15 7.03934 17.9445C7.17669 17.7389 7.25 17.4972 7.25 17.25C7.25 16.9185 7.1183 16.6005 6.88388 16.3661C6.64946 16.1317 6.33152 16 6 16ZM17 16C16.7528 16 16.5111 16.0733 16.3055 16.2107C16.1 16.348 15.9398 16.5432 15.8451 16.7716C15.7505 17.0001 15.7258 17.2514 15.774 17.4939C15.8223 17.7363 15.9413 17.9591 16.1161 18.1339C16.2909 18.3087 16.5137 18.4277 16.7561 18.476C16.9986 18.5242 17.2499 18.4995 17.4784 18.4049C17.7068 18.3102 17.902 18.15 18.0393 17.9445C18.1767 17.7389 18.25 17.4972 18.25 17.25C18.25 16.9185 18.1183 16.6005 17.8839 16.3661C17.6495 16.1317 17.3315 16 17 16ZM17 15V14H6.48L6 11.86L19 9.36V2H3.5L3 0H0V1H2.22L5.7 15H17Z' fill={isHovered ? '#2B76FB' : '#A5B1C3'} />
  </svg>
);

export default AbandonedCartIcon;