import React from 'react';
import ClipLoader from "react-spinners/ClockLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin-bottom: 26px;
  border-color: red;
`;

const HeaderSpinner = () => {
    const color = '#D73636';
    return (
        <div className='text-center mt-8'>
            <ClipLoader color={color} css={override} size={30} speedMultiplier={5} />
        </div>
    );
};

export default HeaderSpinner;