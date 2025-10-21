import ContextSection from "./ContextSection";

export default function SafetySection() {
  return (
    <section className="ac-product-description__Safety">
      {/* Main Title */}
      <h3 className="ac-product-description__Safety Title">
        Safety &amp; Suitability
      </h3>

      {/* Contraindications */}
      <div className="ac-product-description__Contraindications">
        <ContextSection
          heading="Contraindications"
          paragraph="Individuals with specific health conditions or who are pregnant/lactating should consult a healthcare provider before use. Not recommended for children without professional guidance."
        />
      </div>

      {/* Precautionary Guidance */}
      <div className="ac-product-description__Guidance">
        <ContextSection
          heading="Precautionary Guidance"
          paragraph="Avoid consuming with incompatible foods like milk and fish. Follow a diet supporting your dosha balance for best results."
        />
      </div>

      {/* Compatibility */}
      <div className="ac-product-description__Compatibility">
        <ContextSection
          heading="Compatibility"
          paragraph="Avipattikara Churna can be safely combined with a balanced diet and regular exercise, but should not be mixed with incompatible (viruddha) foods or beverages."
        />
      </div>

      {/* Storage & Shelf Life */}
      <div className="ac-product-description__Storage">
        <ContextSection
          heading="Storage & Shelf Life"
          paragraph="Store in a cool, dry place away from direct sunlight. Use within 24 months of manufacturing for best efficacy."
        />
      </div>

      {/* General Safety Statement */}
      <div className="ac-product-description__SafetyStatement">
        <ContextSection
          heading="General Safety Statement"
          paragraph="Avipattikara Churna is non-habit-forming and safe when used as directed. Always consult a healthcare professional for personalized advice."
        />
      </div>
    </section>
  );
}
