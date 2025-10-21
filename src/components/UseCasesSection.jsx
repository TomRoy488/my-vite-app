import ContextSection from "./ContextSection";

export default function UseCasesSection({
  containerClass = "",
  headingClass = "",
  paragraphClass = "",
  listClass = "",
  listItemClass = "",
  listTitleClass = "",
  listDescClass = "",
  heading = "",
  paragraph = "",
  useCases = [], // array of { title?, description? }
}) {
  // filter only valid use cases (those with title or description)
  const validUseCases = useCases.filter(
    (item) => item.title || item.description
  );

  // if there's literally nothing to show, return nothing
  if (!heading && !paragraph && validUseCases.length === 0) return null;

  return (
    <section className={`ac-product-description__UsesCases ${containerClass}`}>
      <div>
        {/* Heading + paragraph reuse */}
        <ContextSection
          heading={heading}
          paragraph={paragraph}
          headingClass={headingClass}
          paragraphClass={paragraphClass}
        />

        {/* Flexible list rendering */}
        {validUseCases.length > 0 && (
          <ul className={listClass}>
            {validUseCases.map((item, index) => (
              <li key={index} className={listItemClass}>
                {item.title && (
                  <span className={listTitleClass}>{item.title}</span>
                )}
                {item.description && (
                  <p className={listDescClass}>{item.description}</p>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
