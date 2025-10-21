import QuoteCardContainer from "./components/QuoteCardContainer";
import ACProductSection from "./components/ACProductSection";

function App() {
  return (
    <div className="p-8 space-y-8">
      <div className="ac-product-maintitle__container">
        <h1>Brihatri Avipattikara Churna (90Gm)</h1>
      </div>

      <div className="ac-product-subtitle" id="ac-product-subtitle">
        <p>
          A traditional formula from Ayurveda, crafted to support digestive
          wellness with gentle balance.
        </p>
      </div>

      <div className="ac-product-highlights">
        <div
          className="ac-product-highlights__content"
          id="ac-product-highlights"
        >
          <div>
            <h4>Highlights</h4>
            <p>Explore the essence of Brihatri Avipattikara Churna:</p>
            <ul>
              <li>
                <p>
                  Rooted in classical Ayurvedic wisdom, honoring its legacy.
                </p>
              </li>
              <li>
                <p>
                  Traditionally used for promoting digestive health and balance.
                </p>
              </li>
              <li>
                <p>
                  Safe when used as directed; consult an Ayurvedic practitioner
                  for personalized advice.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="ac-product-highlights__readMore">
          <a href="#">read more</a>
        </div>
      </div>

      <div className="ac-product-description__maintitle-wrapper">
        <h2>Product Description – Triphala Glow Capsules</h2>
      </div>

      <h3 className="ac-product-description__subtitle">Product Overview</h3>

      <ACProductSection className="ac-product-description__coredescription">
        <p>
          Brihatri Avipattikara Churna is a revered Ayurvedic formulation,
          crafted with care to harmonize your digestive fire, known as 'agni'.
          This blend, enriched with herbs like Shunti and Amalaki, is designed
          to be a part of your daily wellness routine, especially during
          seasonal transitions when digestion often needs gentle support.
          Embrace the subtle transformation as this churna becomes a part of
          your holistic lifestyle.
        </p>
      </ACProductSection>

      <ACProductSection className="ac-product-description__UsesCases">
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
      </ACProductSection>

      <ACProductSection className="ac-product-description__contextuse">
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
      </ACProductSection>

      <ACProductSection className="ac-product-description__keyBenefits">
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
      </ACProductSection>

      <ACProductSection className="ac-product-description__WhatToExpect">
        <div>
          <h4>What to Expect</h4>
          <p>
            Experience a gentle and gradual enhancement in digestive comfort,
            typically observed within a few days of consistent use.
          </p>
        </div>
      </ACProductSection>

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

      <ACProductSection className="ac-product-description__ingredient">
        <h3 className="ac-product-description__ingredientTitle">
          Ingredients Overview
        </h3>
        <div className="ac-product-description__ingredientPara">
          <p>
            This formulation combines time-honored Ayurvedic herbs known for
            their synergistic action in supporting eye clarity, comfort, and
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
      </ACProductSection>

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

      <QuoteCardContainer>
        <div className="ac-product-description__ScientificValidation">
          <div>
            <p>
              Recent studies highlight the efficacy of ginger (Shunti) in
              supporting digestive health and reducing gastric discomfort.
            </p>
            <p>
              Research supports the use of Amalaki for its antioxidant
              properties and ability to balance digestive functions.
            </p>
            <span>Source: Modern Clinical Research</span>
          </div>
        </div>
      </QuoteCardContainer>

      <QuoteCardContainer>
        <div className="ac-product-description__Formulation">
          <div>
            <p>
              The formulation of Brihatri Avipattikara Churna is rooted in the
              principle of balancing Pitta and Kapha doṣas, using herbs that
              support digestive fire while cooling excess heat.
            </p>
            <p>
              This strategic blend is designed to work synergistically with the
              body's natural rhythms, promoting overall digestive harmony.
            </p>
            <span>Source: Classical Ayurvedic Formulation Logic</span>
          </div>
        </div>
      </QuoteCardContainer>

      {/* Dosha Container */}
      <div className="ac-product-description__DoshaContainer">
        <div className="ac-doshaGuide-card ac-doshaGuide-card--five">
          <div className="ac-doshaGuide-card__content">
            <div className="ac-doshaGuide-card__contentBox">
              <div className="ac-doshaGuide-card__textBox">
                <div className="ac-doshaGuide-card__headingText">
                  <h3>Discover the right way to overcome stress.</h3>
                </div>
              </div>
              <div className="ac-doshaGuide-card__imageBox">
                <img
                  src="https://www.ayurcentral.in/wp-content/uploads/webp_images/Bulk-Order-8.webp"
                  alt=""
                  className="ac-doshaGuide-card__image"
                />
              </div>
            </div>
            <div className="ac-doshaGuide-card__sliderBox">
              <div className="ac-doshaGuide-card__slider">
                <div className="ac-doshaGuide-card__sliderItem">
                  <div className="ac-doshaGuide-card__sliderItemContent">
                    <div>
                      <h4>Doṣa Impact</h4>
                      <p>
                        This churna primarily balances Pitta doṣa, helping to
                        maintain digestive harmony. It may also support Kapha
                        doṣa due to its warming properties, fostering overall
                        equilibrium.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="ac-doshaGuide-card__sliderItem">
                  <div className="ac-doshaGuide-card__sliderItemContent">
                    <div>
                      <h4>Guṇa/Rasapanchaka</h4>
                      <p>
                        The churna possesses a balanced blend of guṇas
                        (qualities) — it is warming and dry, with a sweet and
                        slightly pungent rasa (taste). It has a warming vīrya
                        (potency) and a sweet vipāka (post-digestive effect),
                        making it suitable for balancing Pitta and Kapha doṣas.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="ac-doshaGuide-card__sliderItem">
                  <div className="ac-doshaGuide-card__sliderItemContent">
                    <div>
                      <h4>Samprāpti Disruption</h4>
                      <p>
                        This churna interrupts the samprāpti (disease
                        progression) of digestive imbalances by enhancing
                        digestive fire and clearing any blockages in the
                        digestive channels, thus promoting harmony and wellness.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ac-product-description__DoshaMatchLabelContainer">
                <div className="ac-blog-quoteCard">
                  <div className="ac-blog-quoteCard__container">
                    <div className="ac-blog-quoteCard__quote-icon">
                      <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="#ec520b"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3H5a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2H6Zm9 0a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>

                    <div className="ac-blog-quoteCard__content">
                      <div className="ac-product-description__DoshaMatchLabel">
                        <p>✓ Ideal for Pitta and Kapha types.</p>
                        <p>
                          During hot summer months, consider reducing the
                          churna's dosage to avoid excessive heat. Adjust intake
                          based on individual heat tolerance.
                        </p>
                        <p>
                          Suitable for Pitta types experiencing digestive
                          discomfort, and Kapha types needing digestive warmth
                          and balance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Granthic Logic */}
      <div className="ac-product-description__GranthicLogicContainer">
        <div className="ac-granthaRef-card__container">
          <div className="ac-granthaRef-card ac-granthaRef-card--twelve">
            <div className="ac-granthaRef-card__content">
              <div className="ac-granthaRef-card__textBox">
                <div className="ac-product-description__GranthicLogic">
                  <div>
                    <h4>Sanskrit Verse</h4>
                    <p>
                      An ancient verse from Ayurvedic texts highlights the
                      digestive benefits of the ingredients used in this churna.
                    </p>
                    <span>Source: Classical Ayurvedic Texts</span>
                  </div>

                  <div>
                    <h4>Verse Meaning</h4>
                    <p>
                      The verse emphasizes the herb's role in balancing
                      digestive fire and supporting overall wellness by clearing
                      digestive channels.
                    </p>
                    <span>Source: Traditional Ayurvedic Interpretation</span>
                  </div>

                  <div>
                    <h4>Classical Reference</h4>
                    <p>
                      Brihatri Avipattikara Churna is a formulation based on
                      classical Ayurvedic texts, revered for its digestive
                      support properties.
                    </p>
                    <span>Source: Classical Ayurvedic Granthas</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="ac-granthaRef-card__bgBox">
              <img
                src="https://www.ayurcentral.in/wp-content/uploads/webp_images/Untitled-design-7-1.webp"
                alt=""
                className="ac-granthaRef-card__bgImg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Myth Reference */}
      <div className="ac-product-description__MythReferenceContainer">
        <div className="ac-special-info">
          <div className="ac-special-info__container">
            <div className="ac-special-info__content">
              <div className="ac-special-info__header">
                <div className="ac-special-info__title-box">
                  <div className="ac-product-description__MythReference">
                    <div>
                      <p>
                        In Ayurvedic mythology, herbs like Amalaki are often
                        associated with divine healers, known for their ability
                        to restore balance and vitality.
                      </p>
                      <p>
                        The story of Dhanvantari, the celestial healer,
                        highlights the importance of digestive balance in
                        maintaining health and longevity.
                      </p>
                      <p>
                        These narratives inspire the use of Brihatri
                        Avipattikara Churna as a tool for harnessing the body's
                        innate healing potential.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="ac-special-info__title-line">
                  <img
                    src="https://www.ayurcentral.in/wp-content/uploads/webp_images/Untitled-design-50.webp"
                    alt="Title underline"
                    className="ac-special-info__line-img"
                  />
                </div>
              </div>
            </div>

            <div
              className="ac-special-info__bg"
              style={{ display: "non" }}
            >
              <img
                src="https://www.ayurcentral.in/wp-content/uploads/webp_images/Specially-used-during-Diwali-for-Abhyanjana.webp"
                alt="Background decorative"
                className="ac-special-info__bg-img"
              />
            </div>

            <div
              className="ac-special-info__gif"
              style={{ display: "non" }}
            >
              <img
                src="https://www.ayurcentral.in/wp-content/uploads/2025/06/Specially-used-during-Diwali-for-Abhyanjana.gif"
                alt="Background decorative"
                className="ac-special-info__bg-gif"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
