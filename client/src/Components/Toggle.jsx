import React, { useState } from 'react';
import ToggleContainer from '../styling-files/toggled-styles';

import { IoIosSunny, IoIosMoon } from 'react-icons/io';

const Toggle = ({ toggleTheme }) => {
  const [color, useColor] = useState(true);

  return (
    <ToggleContainer onClick={toggleTheme} className="toggle-component">
      <IoIosSunny />
      <IoIosMoon />
    </ToggleContainer>
  );
};

export default Toggle;