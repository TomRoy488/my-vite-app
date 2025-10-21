import ContextSection from "./ContextSection";

export default function KeyBenefitsSection({
  containerClass = "",
  headingClass = "",
  paragraphClass = "",
  listClass = "",
  listItemClass = "",
  listDescClass = "",
  heading = "",
  paragraph = "",
  benefits = [], // array of { description? }
}) {
  // Filter only valid benefit items (non-empty descriptions)
  const validBenefits = benefits.filter((b) => b.description && b.description.trim() !== "");

  // If nothing to show, return nothing
  if (!heading && !paragraph && validBenefits.length === 0) return null;

  return (
    <section className={`ac-product-description__keyBenefits ${containerClass}`}>
      <div>
        {/* Reuse ContextSection for heading and paragraph */}
        <ContextSection
          heading={heading}
          paragraph={paragraph}
          headingClass={headingClass}
          paragraphClass={paragraphClass}
        />

        {/* Render benefits list if valid items exist */}
        {validBenefits.length > 0 && (
          <ul className={listClass}>
            {validBenefits.map((item, index) => (
              <li key={index} className={listItemClass}>
                <p className={listDescClass}>{item.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
