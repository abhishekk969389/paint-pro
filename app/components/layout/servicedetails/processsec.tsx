import { FiCheckCircle, FiMessageSquare, FiTool, FiDroplet } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

const ICONS: Record<string, any> = {
  FiMessageSquare,
  FiTool,
  FiDroplet,
  FiCheckCircle,
};

export default function ProcessSection({ processData }: { processData: any }) {
  return (
    <div className="mt-10">
      <h2 className="text-3xl font-extrabold text-[#0b1a3a] mb-4">
        {processData.title.text1} <span className="text-orange-500">{processData.title.highlight}</span>
      </h2>
      <p className="text-[15px] leading-relaxed text-slate-500 mb-4 max-w-3xl">
        {processData.description}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
        {processData.steps.map((step: any, i: number) => {
          const Icon = ICONS[step.icon];
          return (
            <div key={i} className="relative bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-xl p-8 text-center flex flex-col items-center">
              
              {/* Dashed Arrow between cards */}
              {i !== processData.steps.length - 1 && (
                <div className="hidden lg:flex absolute top-[70px] -right-[40px] w-[40px] items-center justify-center z-20 -translate-y-1/2">
                  <div className="flex-1 border-t-[1.5px] border-dashed border-orange-500"></div>
                  <FiChevronRight className="h-4 w-4 text-orange-500 -ml-1.5 shrink-0" strokeWidth={3} />
                </div>
              )}

              <div className="w-[76px] h-[76px] rounded-full bg-[#fff6f0] flex items-center justify-center mb-6 relative z-10">
                {Icon && <Icon className="h-9 w-9 text-orange-500" strokeWidth={1.5} />}
              </div>
              <h4 className="text-[18px] font-bold text-[#0b1a3a] mb-3 relative z-10">{step.title}</h4>
              <p className="text-[14px] leading-relaxed text-slate-500 relative z-10">{step.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
