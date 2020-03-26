import React from 'react';
import ToggleContainer from '../styling-files/toggled-styles';

import { IoIosSunny, IoIosMoon } from 'react-icons/io';

const Toggle = ({ toggleTheme }) => {
  return (
    <ToggleContainer onClick={toggleTheme}>
      <IoIosSunny style={{color: "yellow"}}/>
      <IoIosMoon style={{color: "yellow"}}/>
    </ToggleContainer>
  );
};

export default Toggle;