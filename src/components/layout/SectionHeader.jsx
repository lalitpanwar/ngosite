export default function SectionHeader({ badge, title, italicPart, description, center = true }) {
  return (
    <div className={`${center ? "text-center" : "text-left"} mb-20 space-y-3`}>
      {/* Small Text Badge Pattern */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
        <span className="text-[10px] md:text-xs font-heading font-bold text-primary uppercase tracking-[0.3em]">
          {badge}
        </span>
      </div>
      
      {/* Main Title Pattern */}
      <h2 className="text-xl md:text-3xl font-heading font-black text-slate-900 tracking-tighter">
        {title} <span className="text-primary italic">{italicPart}</span>
      </h2>
      
      {/* Animated Divider Pattern */}
      <div className={`w-20 h-1.5 bg-primary/20 rounded-full overflow-hidden ${center ? "mx-auto" : ""}`}>
        <div className="w-1/2 h-full bg-primary rounded-full"></div>
      </div>
      

      {description && (
        <p className="max-w-2xl mx-auto text-slate-500 font-light mt-4 text-sm md:text-base">
          {description}
        </p>
      )}
    </div>
  );
}