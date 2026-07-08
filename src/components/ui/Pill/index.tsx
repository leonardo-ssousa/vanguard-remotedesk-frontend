import { PillWrapper } from "./styles"

interface PillProps {
  children: React.ReactNode
}
export const Pill = ({children}: PillProps) => {
  return (
    <PillWrapper>{children}</PillWrapper>
  )
}