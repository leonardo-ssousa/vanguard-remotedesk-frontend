import { AnimatePresence, easeInOut } from "motion/react";
import { LivePulseIndicator, LivePulseSinal, LivePulseWrapper } from "./styles";

interface LivePulseProps {
  isActive: boolean;
  children?: React.ReactNode;
}

export const LivePulse = ({ isActive, children }: LivePulseProps) => {
  return (
    <LivePulseWrapper>
      <section className="indicator">
        <LivePulseIndicator $isActive={isActive}/>
        <AnimatePresence>
          {
            isActive &&
            <LivePulseSinal
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.2, scale: 0.9 }}
              transition={{ duration: .8, ease: easeInOut, repeat: Infinity, repeatType: "reverse" }}
            />
          }
        </AnimatePresence>
      </section>
      <p>{children}</p>
    </LivePulseWrapper>
  );
};
