import { motion } from "motion/react";
import styled from "styled-components";

export const LivePulseWrapper = styled.div`
  display: flex;
  align-items: center;
  
  & > .indicator {
    height: 100%;
    width: 32px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;


  }
`;

export const LivePulseIndicator = styled.div<{ $isActive: boolean }>`
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.auxiliar.success : theme.bw[500]};
  border-radius: 99px;
`;

export const LivePulseSinal = styled(motion.div)`
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.auxiliar.success};
  border-radius: 99px;
`;
