import { motion } from "motion/react";
import styled from "styled-components";

export const DeviceCardWrapper = styled.div<{ $isOnline: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: ${(props) => props.theme.background.primary};
  border: 1px solid ${(props) => props.theme.bw[200]};
  border-radius: 12px;
  font-size: 0.875rem;
  gap: 16px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 6px ${(props) => props.theme.font.secondary + "30"};
  }

  & > header {
    display: flex;
    justify-content: space-between;

    & > div {
      display: flex;
      flex-direction: column;

      & > p {
        font-size: 0.75rem;
        font-weight: 400;
      }
    }

    & > .device-status {
      display: flex;
      flex-direction: row;
      gap: 6px;

      & > .device-indicator {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 18px;
        height: 18px;

        & > .indicator {
          position: absolute;
          width: 6px;
          height: 6px;
          background-color: ${(props) =>
            props.$isOnline
              ? props.theme.auxiliar.success
              : props.theme.bw[400]};
          border-radius: 99px;
          z-index: 1;
        }

        & > .indicator-shadow {
          position: absolute;
          width: 12px;
          height: 12px;
          background-color: ${(props) =>
            props.$isOnline ? props.theme.auxiliar.success + "33" : ""};
          z-index: 0;
          border-radius: 99px;
        }
      }
    }
  }

  & > main {
    display: flex;
    justify-content: space-between;
    color: ${(props) => props.theme.font.secondary};

    & > .os {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 0.8125rem;
    }

    & > .actions {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 1rem;
    }
  }

  & > footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid ${(props) => props.theme.bw[200]};
    padding-top: 16px;
    font-size: 0.75rem;
  }
`;

export const DeviceBusinessTag = styled.div`
  display: flex;
  width: fit-content;
  padding: 4px 12px;
  border-radius: 12px;
  background-color: ${(props) => props.theme.background.secondary};
  font-size: 0.8125rem;
`;

export const DeviceActionButton = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border-radius: 99px;
  font-size: 0.875rem;

  &:hover {
    background-color: ${(props) => props.theme.background.secondary};
    cursor: pointer;
  }
`;

export const DeviceStatusPulse = styled(motion.span)<{ $isOnline: boolean }>`
  position: absolute;
  width: 12px;
  height: 12px;
  background-color: ${(props) =>
    props.$isOnline ? props.theme.auxiliar.success + "33" : ""};
  z-index: 0;
  border-radius: 99px;
`;
