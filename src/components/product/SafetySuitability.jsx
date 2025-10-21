import ACProductSection from "../ACProductSection";

export default function SafetySuitability() {
  return (
    <ACProductSection className="ac-product-description__Safety">
      <h3 className="ac-product-description__SafetyTitle">
        Safety &amp; Suitability
      </h3>

      <ACProductSection className="ac-product-description__Contraindications">
        <div>
          <h4>Who Should Avoid</h4>
          <p>
            Individuals with specific health conditions or those on medication
            should consult a healthcare provider before use. It is advisable
            for pregnant and breastfeeding women to seek professional
            guidance.
          </p>
        </div>
      </ACProductSection>

      <ACProductSection className="ac-product-description__Guidance">
        <div>
          <h4>Precautionary Guidance</h4>
          <p>
            For optimal results, avoid consuming incompatible foods such as
            heavy, oily, or excessively spicy dishes while using this churna.
            Incorporate light, easily digestible meals to complement its
            benefits.
          </p>
        </div>
      </ACProductSection>

      <ACProductSection className="ac-product-description__Compatibility">
        <div>
          <h4>Compatibility</h4>
          <p>
            Brihatri Avipattikara Churna can be safely combined with most
            Ayurvedic herbs, but avoid mixing with incompatible combinations
            like milk or cold foods, which could hinder its effectiveness.
          </p>
        </div>
      </ACProductSection>

      <ACProductSection className="ac-product-description__Storage">
        <div>
          <h4>Storage &amp; Shelf Life</h4>
          <p>
            Store in a cool, dry place, away from direct sunlight. Ensure the
            container is tightly sealed to maintain potency. Best consumed
            within 24 months from the date of manufacture.
          </p>
        </div>
      </ACProductSection>

      <ACProductSection className="ac-product-description__SafetyStatement">
        <div>
          <h4>General Safety Statement</h4>
          <p>
            Brihatri Avipattikara Churna is non-habit-forming and safe when
            used as guided by a qualified Ayurvedic practitioner. It is
            crafted to support your wellness journey with integrity and care.
          </p>
        </div>
      </ACProductSection>
    </ACProductSection>
  );
}

