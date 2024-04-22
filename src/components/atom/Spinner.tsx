import React from "react";
import styled, { keyframes } from "styled-components";

interface SpinnerProps {
  radius: number;
}

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled.div<SpinnerProps>`
  display: inline-block;
  width: ${(props) => props.radius}px;
  height: ${(props) => props.radius}px;
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-top: 3px solid #3498db;
  border-radius: 50%;
  animation: ${spinAnimation} 1s linear infinite;
`;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const PageSpinner: React.FC<SpinnerProps> = ({ radius }) => {
  return (
    <CenteredContainer>
        <SpinnerContainer
          radius={radius}
          key="spinner"
        />
    </CenteredContainer>
  );
};

const Spinner: React.FC<SpinnerProps> = ({ radius }) => {
  return <SpinnerContainer radius={radius} />;
};

export { PageSpinner, Spinner };
