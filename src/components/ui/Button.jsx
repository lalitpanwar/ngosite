import Link from "next/link";

export default function Button({
  text = "Click Me",
  href = "",
  type = "primary", 
  classes = "",
  icon = null,
  isExternal = false,
}) {
  
  const styles = {
    primary: "bg-primary text-white hover:bg-primary-dark shadow-md md:hover:shadow-lg shadow-primary/20",
    accent: "bg-accent text-white hover:opacity-90 shadow-md md:hover:shadow-lg shadow-accent/20",
    donate: "bg-donate text-white hover:bg-red-700 shadow-md md:hover:shadow-lg shadow-donate/30",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  };

  // RESPONSIVE CLASSES:
  // - text-xs (Mobile) -> text-sm (Tablet) -> text-base (Desktop)
  // - py-2 (Mobile) -> py-2.5 (Tablet) -> py-3 (Desktop)
  const baseStyles = `
    inline-flex items-center justify-center gap-2 
    px-5 md:px-7 
    py-2 md:py-3 
    rounded-sm font-bold 
    text-sm md:text-base
    transition-all duration-300 
    active:scale-95 
    whitespace-nowrap
    md:hover:-translate-y-0.5
    ${styles[type] || styles.primary} 
    ${classes}
  `;

  const content = (
    <>

      <span className="leading-none">{text}</span>      {icon && <span className="text-lg md:text-xl inline-flex items-center justify-center leading-none">{icon}</span>}
    </>
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer nofollow" className={baseStyles}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={baseStyles}>
      {content}
    </Link>
  );
}