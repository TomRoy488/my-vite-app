import ContextSection from "./ContextSection";

export default function HowToUseSection() {
  return (
    <section className="ac-product-description__howtouse">
      <h3 className="ac-product-description__howtouseTitle">How to Use</h3>

      {/* Dosage & Frequency */}
      <div className="ac-product-description__DosageFrequency">
        <ContextSection
          heading="Dosage & Frequency"
          paragraph="Adults are generally advised to take 1–2 teaspoons of Avipattikara Churna with warm water, once or twice daily, or as directed by a healthcare practitioner."
        />
      </div>

      {/* Method of Consumption */}
      <div className="ac-product-description__MethodofConsumption">
        <ContextSection
          heading="Method of Consumption"
          paragraph="Mix the churna with warm water, honey, or ghee for optimal absorption and effect."
        />
      </div>

      {/* Timing & Seasonality */}
      <div className="ac-product-description__Timing">
        <ContextSection
          heading="Timing & Seasonality"
          paragraph="Best taken post-dinner during Kapha or Pitta aggravation; suitable year-round, but especially supportive during seasonal transitions or post-festive detox."
        />
      </div>
    </section>
  );
}
