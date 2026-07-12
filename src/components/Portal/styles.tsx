import { motion } from "motion/react";
import styled from "styled-components";

export const ModalPortalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000033;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(8px);
`

export const ModalCard  = styled(motion.div)`
  padding: 24px;
  background-color: ${props => props.theme.background.primary};
  border-radius: 16px;
`