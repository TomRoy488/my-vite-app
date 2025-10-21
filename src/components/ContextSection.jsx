export default function ContextSection({
  containerClass = "",
  headingClass = "",
  paragraphClass = "",
  heading = "",
  paragraph = "",
}) {
  // If nothing to show, return nothing
  if (!heading && !paragraph) return null;

  return (
    <section className={`ac-product-description__contextuse ${containerClass}`}>
      <div>
        {heading && <h4 className={headingClass}>{heading}</h4>}
        {paragraph && <p className={paragraphClass}>{paragraph}</p>}
      </div>
    </section>
  );
}
