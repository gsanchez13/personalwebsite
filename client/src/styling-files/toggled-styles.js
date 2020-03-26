import styled from 'styled-components'

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: auto;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 3px;
  position: relative;
  width: 10%;
  height: 8%;

  svg {
    height: 100%;
    width: 30%;
    transition: all 0.3s linear;
  } 
`;

export default ToggleContainer;