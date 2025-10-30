import { useContent } from "../../context/ContentContext";
import ACProductSection from "./ACProductSection";

export default function ProductDescription() {
  const { getContent, hasContent } = useContent();

  return (
    <>
      {/* Main Title */}
      <div className="ac-product-description__maintitle-wrapper" id="product-description">
        {hasContent("core_description_heading") ? (
          <div dangerouslySetInnerHTML={{ __html: getContent("core_description_heading") }} />
        ) : (
          <h2>Product Description – Brihatri Avipattikara Churna</h2>
        )}
      </div>

      

      {/* Product Overview - No specific key, keeping static or using core description */}
      <ACProductSection className="ac-product-description__coredescription">
        <div>
          <h3 className="ac-product-description__subtitle">Product Overview</h3>
          <p>
            Brihatri Avipattikara Churna is a revered Ayurvedic formulation,
            crafted with care to harmonize your digestive fire, known as 'agni'.
            This blend, enriched with herbs like Shunti and Amalaki, is designed
            to be a part of your daily wellness routine, especially during
            seasonal transitions when digestion often needs gentle support.
            Embrace the subtle transformation as this churna becomes a part of
            your holistic lifestyle.
          </p>
        </div>
      </ACProductSection>

      {/* Target Use Cases */}
      <ACProductSection className="ac-product-description__UsesCases">
        {hasContent("target_use_cases") ? (
          <div dangerouslySetInnerHTML={{ __html: getContent("target_use_cases") }} />
        ) : (
          <div>
            <h4>Common Use Cases</h4>
            <p>
              Brihatri Avipattikara Churna can be a beneficial companion in your
              journey towards digestive harmony in these situations:
            </p>
            <ul>
              <li>
                <span>After heavy meals:</span>
                <p>
                  Helps in soothing digestion when the stomach feels overburdened.
                </p>
              </li>
              <li>
                <span>During seasonal changes:</span>
                <p>
                  Traditionally used to maintain digestive balance as seasons
                  shift.
                </p>
              </li>
              <li>
                <span>When experiencing occasional acidity:</span>
                <p>
                  Supports the body's natural processes in maintaining comfort.
                </p>
              </li>
            </ul>
          </div>
        )}
      </ACProductSection>

      {/* Context of Use */}
      <ACProductSection className="ac-product-description__contextuse">
        {hasContent("context_of_use") ? (
          <div dangerouslySetInnerHTML={{ __html: getContent("context_of_use") }} />
        ) : (
          <div>
            <h4>When and How to Use</h4>
            <p>
              Traditionally, Brihatri Avipattikara Churna is taken after meals to
              aid digestion. It is often incorporated during seasonal transitions,
              such as the onset of summer, to help maintain digestive balance.
              Following an Ayurvedic routine, it is recommended to consume it
              under the guidance of a qualified practitioner to align with your
              individual constitution.
            </p>
          </div>
        )}
      </ACProductSection>

      {/* Benefit Highlights */}
      <ACProductSection className="ac-product-description__keyBenefits">
        {hasContent("benefit_highlights") ? (
          <div dangerouslySetInnerHTML={{ __html: getContent("benefit_highlights") }} />
        ) : (
          <div>
            <h3>Key Benefits</h3>
            <p>Unveil the supportive benefits of Brihatri Avipattikara Churna:</p>
            <ul>
              <li>
                <p>Traditionally supports digestive wellness.</p>
              </li>
              <li>
                <p>Helps maintain a balanced digestive fire, known as 'agni'.</p>
              </li>
              <li>
                <p>
                  Crafted to promote holistic balance during seasonal transitions.
                </p>
              </li>
            </ul>
          </div>
        )}
      </ACProductSection>

      {/* What to Expect */}
      <ACProductSection className="ac-product-description__WhatToExpect">
        {hasContent("what_to_expect") ? (
          <div dangerouslySetInnerHTML={{ __html: getContent("what_to_expect") }} />
        ) : (
          <div>
            <h4>What to Expect</h4>
            <p>
              Experience a gentle and gradual enhancement in digestive comfort,
              typically observed within a few days of consistent use.
            </p>
          </div>
        )}
      </ACProductSection>

      {/* How to Use Section */}
      <ACProductSection className="ac-product-description__howtouse">
        <h3 className="ac-product-description__howtouseTitle">How to Use</h3>
        
        {/* Dosage Frequency Timing */}
        <ACProductSection className="ac-product-description__DosageFrequency">
          {hasContent("dosage_frequency_timing") ? (
            <div dangerouslySetInnerHTML={{ __html: getContent("dosage_frequency_timing") }} />
          ) : (
            <div>
              <h4>Dosage &amp; Frequency</h4>
              <p>
                For adults, it is traditionally recommended to take 1-2 teaspoons
                of Brihatri Avipattikara Churna, mixed with warm water, once or
                twice daily after meals. For personalized guidance, consult a
                qualified Ayurvedic practitioner.
              </p>
            </div>
          )}
        </ACProductSection>

        {/* Method of Consumption */}
        <ACProductSection className="ac-product-description__MethodofConsumption">
          {hasContent("method_of_consumption") ? (
            <div dangerouslySetInnerHTML={{ __html: getContent("method_of_consumption") }} />
          ) : (
            <div>
              <h4>How to Consume</h4>
              <p>
                Brihatri Avipattikara Churna is best consumed with warm water,
                honey, or ghee as an anupāna (vehicle), enhancing its absorption
                and efficacy. Follow your practitioner's advice for specific
                recommendations.
              </p>
            </div>
          )}
        </ACProductSection>

        {/* Timing - using same key as dosage_frequency_timing contains timing info */}
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

      {/* Key Ingredients with Roles */}
      <ACProductSection className="ac-product-description__ingredient" style={{display: 'none'}}>
        {hasContent("key_ingredients_with_roles") ? (
          <div dangerouslySetInnerHTML={{ __html: getContent("key_ingredients_with_roles") }} />
        ) : (
          <>
            <h3 className="ac-product-description__ingredientTitle">
              Ingredients Overview
            </h3>
            <div className="ac-product-description__ingredientPara">
              <p>
                This formulation combines time-honored Ayurvedic herbs known for
                their synergistic action in supporting digestive wellness and
                dosha balance.
              </p>
            </div>
            <h4 className="ac-product-description__ingredientSubTitle">
              Key Ingredients &amp; Their Roles
            </h4>
            <div className="ac-product-description__ingredientList">
              <ul>
                <li>
                  <span>Shunti (Ginger):</span>
                  <p>Renowned for its warming and digestive properties.</p>
                </li>
                <li>
                  <span>Pippali (Long Pepper):</span>
                  <p>Traditionally used to enhance digestive fire.</p>
                </li>
                <li>
                  <span>Amalaki (Indian Gooseberry):</span>
                  <p>Known for its cooling and rejuvenating qualities.</p>
                </li>
              </ul>
            </div>
          </>
        )}
      </ACProductSection>

      {/* Safety & Suitability */}
      <ACProductSection className="ac-product-description__Safety">
        <h3 className="ac-product-description__SafetyTitle">
          Safety &amp; Suitability
        </h3>

        {/* Contraindications */}
        <ACProductSection className="ac-product-description__Contraindications">
          {hasContent("contraindications") ? (
            <div dangerouslySetInnerHTML={{ __html: getContent("contraindications") }} />
          ) : (
            <div>
              <h4>Who Should Avoid</h4>
              <p>
                Individuals with specific health conditions or those on medication
                should consult a healthcare provider before use. It is advisable
                for pregnant and breastfeeding women to seek professional
                guidance.
              </p>
            </div>
          )}
        </ACProductSection>

        {/* Precautionary Guidance */}
        <ACProductSection className="ac-product-description__Guidance">
          {hasContent("precautionary_guidance") ? (
            <div dangerouslySetInnerHTML={{ __html: getContent("precautionary_guidance") }} />
          ) : (
            <div>
              <h4>Precautionary Guidance</h4>
              <p>
                For optimal results, avoid consuming incompatible foods such as
                heavy, oily, or excessively spicy dishes while using this churna.
                Incorporate light, easily digestible meals to complement its
                benefits.
              </p>
            </div>
          )}
        </ACProductSection>

        {/* Compatibility */}
        <ACProductSection className="ac-product-description__Compatibility">
          {hasContent("compatibility") ? (
            <div dangerouslySetInnerHTML={{ __html: getContent("compatibility") }} />
          ) : (
            <div>
              <h4>Compatibility</h4>
              <p>
                Brihatri Avipattikara Churna can be safely combined with most
                Ayurvedic herbs, but avoid mixing with incompatible combinations
                like milk or cold foods, which could hinder its effectiveness.
              </p>
            </div>
          )}
        </ACProductSection>

        {/* Storage & Shelf Life */}
        <ACProductSection className="ac-product-description__Storage">
          {hasContent("storage_shelf_life") ? (
            <div dangerouslySetInnerHTML={{ __html: getContent("storage_shelf_life") }} />
          ) : (
            <div>
              <h4>Storage &amp; Shelf Life</h4>
              <p>
                Store in a cool, dry place, away from direct sunlight. Ensure the
                container is tightly sealed to maintain potency. Best consumed
                within 24 months from the date of manufacture.
              </p>
            </div>
          )}
        </ACProductSection>

        {/* General Safety Statement */}
        <ACProductSection className="ac-product-description__SafetyStatement">
          {hasContent("general_safety_statement") ? (
            <div dangerouslySetInnerHTML={{ __html: getContent("general_safety_statement") }} />
          ) : (
            <div>
              <h4>General Safety Statement</h4>
              <p>
                Brihatri Avipattikara Churna is non-habit-forming and safe when
                used as guided by a qualified Ayurvedic practitioner. It is
                crafted to support your wellness journey with integrity and care.
              </p>
            </div>
          )}
        </ACProductSection>
      </ACProductSection>
    </>
  );
}
