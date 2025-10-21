import ACProductSection from "../ACProductSection";

export default function HowToUse() {
  return (
    <ACProductSection className="ac-product-description__howtouse">
      <h3 className="ac-product-description__howtouseTitle">How to Use</h3>
      <ACProductSection className="ac-product-description__DosageFrequency">
        <div>
          <h4>Dosage &amp; Frequency</h4>
          <p>
            For adults, it is traditionally recommended to take 1-2 teaspoons
            of Brihatri Avipattikara Churna, mixed with warm water, once or
            twice daily after meals. For personalized guidance, consult a
            qualified Ayurvedic practitioner.
          </p>
        </div>
      </ACProductSection>
      <ACProductSection className="ac-product-description__MethodofConsumption">
        <div>
          <h4>How to Consume</h4>
          <p>
            Brihatri Avipattikara Churna is best consumed with warm water,
            honey, or ghee as an anupāna (vehicle), enhancing its absorption
            and efficacy. Follow your practitioner's advice for specific
            recommendations.
          </p>
        </div>
      </ACProductSection>
      <ACProductSection className="ac-product-description__Timing">
        <div>
          <h4>Timing &amp; Seasonality:</h4>
          <p>
            Best taken post-dinner during kapha or pitta aggravation; suitable
            year-round, but especially supportive during seasonal transitions
            or post-festive detox.
          </p>
        </div>
      </ACProductSection>
    </ACProductSection>
  );
}

