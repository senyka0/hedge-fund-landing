"use client";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  index: number;
}

const Tooltip: React.FC<TooltipProps> = ({ content, children, index }) => {
  return (
    <div className="group">
      {children}
      <div
        className={`absolute ${
          index >= 3 ? "right-full" : "left-full"
        } top-1/2 transform -translate-y-1/2 hidden group-hover:block text-[#1B1B2F] text-xs p-2 mx-2 rounded bg-white z-10`}
      >
        {content}
      </div>
    </div>
  );
};

export default Tooltip;
