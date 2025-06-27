// Indicator.tsx
import React from 'react';
import styled from 'styled-components';

interface IndicatorProps {
  totalSteps: number;
  step: number;
}

const Dot = styled.span<{ active: boolean }>`
  width: ${({ active }) => (active ? '16px' : '8px')};
  height: 8px;
  border-radius: 16px;
  background-color: ${({ active }) => (active ? '#000' : '#ccc')};
  margin: 0 4px;
  transition: all 0.3s ease;
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const Indicator: React.FC<IndicatorProps> = ({ totalSteps, step }) => {
  return (
    <DotsContainer>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <Dot key={index} active={index === step} />
      ))}
    </DotsContainer>
  );
};

export default Indicator;
