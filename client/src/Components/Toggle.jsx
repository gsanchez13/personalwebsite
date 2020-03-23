import React from 'react';
import ToggleContainer from '../styling-files/toggled-styles';
// import { func, string } from 'prop-types';
import { IoIosSunny, IoIosMoon } from 'react-icons/io';

const Toggle = ({ toggleTheme }) => {
  return (
    <ToggleContainer onClick={toggleTheme}>
      <IoIosSunny style={{color: "yellow"}}/>
      <IoIosMoon style={{color: "yellow"}}/>
    </ToggleContainer>
  );
};

// Toggle.propTypes = {
//   theme: string.isRequired,
//   toggleTheme: func.isRequired,
// }

export default Toggle;