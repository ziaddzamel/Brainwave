import brackets from "../assets/svg/Brackets";
import { ReactNode } from "react";

interface TagLineProps {
  className?: string;
  children?: ReactNode;
}
const TagLine = ({ className, children }: TagLineProps) => {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      {brackets({ position: "left" })}
      <div className="mx-3 text-n-3">{children}</div>
      {brackets({ position: "right" })}
    </div>
  );
};

export default TagLine;
