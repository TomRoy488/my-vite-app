
import React from "react";

export default function ACProductSection({
  as: Tag = "section", // default tag type
  className = "",
  children,
  ...props // allows id, style, data-*, etc.
}) {
  const baseClass = "ac-product-section";
  const combinedClasses = `${baseClass} ${className}`.trim();

  // ✅ Tag is now used directly in JSX
  return (
    <Tag className={combinedClasses} {...props}>
      {children}
    </Tag>
  );
}
