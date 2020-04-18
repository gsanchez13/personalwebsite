import styled from 'styled-components'

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: auto;
  height: 8%;
  justify-content: center;
  margin: 0 auto;
  overflow: hidden;
  padding: 3px;
  position: relative;
  width: 40px;

  svg {
    height: 100%;
    width: 50%;
    transition: all 0.3s linear;
  } 
`;

export default ToggleContainer;