import React from 'react';
import ToggleContainer from '../styling-files/toggled-styles';

import { IoIosSunny, IoIosMoon } from 'react-icons/io';

const Toggle = ({ theme, toggleTheme, iconColor }) => {
  if (theme === 'light') {
    return (
      <ToggleContainer onClick={toggleTheme} className="toggle-component">
        <IoIosMoon style={{ color: iconColor }} />
      </ToggleContainer>
    );
  }
  else {
    return (
      <ToggleContainer onClick={toggleTheme} className="toggle-component">
        <IoIosSunny style={{ color: iconColor }} />
      </ToggleContainer>
    );
  };
}

export default Toggle;