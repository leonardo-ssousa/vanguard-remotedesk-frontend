import { motion } from "motion/react";
import styled from "styled-components";

export const Card = styled(motion.div)`
  padding: 24px;
  border-radius: 16px;
  border: ${(props) => "1px solid" + props.theme.border.default};
  background: ${({ theme }) => theme.background.primary};
`;
