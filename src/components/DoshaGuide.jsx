import { useContent } from "../../context/ContentContext";
import { useEffect } from "react";

export default function DoshaGuide() {
  const { getContent, hasContent } = useContent();

  useEffect(() => {
    const handleParagraphClick = (event) => {
      const target = event.target;
      // Check if the clicked element is a p tag or if we should find the nearest p tag
      let pElement = target;
      if (target.tagName !== 'P') {
        pElement = target.closest('p');
      }
      
      if (pElement && pElement.closest('.ac-doshaGuide-card__sliderItemContent')) {
        pElement.classList.toggle('ac-text-expanded');
      }
    };

    const container = document.querySelector('.ac-product-description__DoshaContainer');
    if (container) {
      // Use event delegation on the container to handle both static and dynamic content
      container.addEventListener('click', handleParagraphClick);

      return () => {
        container.removeEventListener('click', handleParagraphClick);
      };
    }
  }, []);

  return (
    <div className="ac-product-description__DoshaContainer">
      <div className="ac-doshaGuide-card ac-doshaGuide-card--five">
        <div className="ac-doshaGuide-card__content">
          <div className="ac-doshaGuide-card__contentBox">
            <div className="ac-doshaGuide-card__textBox">
              <div className="ac-doshaGuide-card__headingText">
                <h3>Discover the right way to balance your doshas.</h3>
              </div>
            </div>
            <div className="ac-doshaGuide-card__imageBox">
              <img
                src="https://www.ayurcentral.in/wp-content/uploads/webp_images/Bulk-Order-8.webp"
                alt="Dosha balance illustration"
                className="ac-doshaGuide-card__image"
              />
            </div>
          </div>
          <div className="ac-doshaGuide-card__contentBoxPara">
            <p>Understand the intricate formulation logic behind this product, designed for optimal.
            </p></div>
          <div className="ac-doshaGuide-card__sliderBox">
            <div className="ac-doshaGuide-card__slider">
              {/* Doṣa Impact */}
              <div className="ac-doshaGuide-card__sliderItem">
                <div className="ac-doshaGuide-card__sliderItemContent">
                  <span className="ac-doshaGuide-card__sliderItemContent-count">1</span>
                  {hasContent("dosha_impact") ? (
                    <div>
                      <h4>Doṣa Impact</h4>
                      <p>
                        This churna primarily balances Pitta doṣa, helping to
                        maintain digestive harmony. It may also support Kapha
                        doṣa due to its warming properties, fostering overall
                        equilibrium.
                      </p>
                    </div>
                  ) : (
                    <div dangerouslySetInnerHTML={{ __html: getContent("dosha_impact") }} />
                  )}
                </div>
              </div>

              {/* Guṇa/Rasapanchaka */}
              <div className="ac-doshaGuide-card__sliderItem">
                <div className="ac-doshaGuide-card__sliderItemContent">
                  <span className="ac-doshaGuide-card__sliderItemContent-count">2</span>
                  {hasContent("guna_rasapanchaka") ? (
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
                  ) : (
                    <div dangerouslySetInnerHTML={{ __html: getContent("guna_rasapanchaka") }} />
                  )}
                </div>
              </div>

              {/* Action on Agni & Srotas */}
              {hasContent("action_on_agni_srotas") && (
                <div className="ac-doshaGuide-card__sliderItem">
                  <div className="ac-doshaGuide-card__sliderItemContent">
                    <span className="ac-doshaGuide-card__sliderItemContent-count">3</span>
                    {hasContent("action_on_agni_srotas") ? (
                      <div>
                        <h4>Samprāpti Disruption</h4>
                        <p>
                          This churna interrupts the samprāpti (disease
                          progression) of digestive imbalances by enhancing
                          digestive fire and clearing any blockages in the
                          digestive channels, thus promoting harmony and wellness.
                        </p>
                      </div>
                    ) : (
                      <div dangerouslySetInnerHTML={{ __html: getContent("action_on_agni_srotas") }} />
                    )}
                  </div>
                </div>
              )}

              {/* Samprāpti Disruption */}
              <div className="ac-doshaGuide-card__sliderItem">
                <div className="ac-doshaGuide-card__sliderItemContent">
                  <span className="ac-doshaGuide-card__sliderItemContent-count">4</span>
                  {hasContent("samprapti_disruption") ? (
                    <div>
                      <h4>Samprāpti Disruption</h4>
                      <p>
                        This churna interrupts the samprāpti (disease
                        progression) of digestive imbalances by enhancing
                        digestive fire and clearing any blockages in the
                        digestive channels, thus promoting harmony and wellness.
                      </p>
                    </div>
                  ) : (
                    <div dangerouslySetInnerHTML={{ __html: getContent("samprapti_disruption") }} />
                  )}
                </div>
              </div>
            </div>

            {/* Dosha Match Label Section */}
            <div className="ac-product-description__DoshaMatchLabelContainer">
              <div className="ac-blog-quoteCard">
                <div className="ac-blog-quoteCard__container" >
                  <div className="ac-blog-quoteCard__quote-icon">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 11.917 9.724 16.5 19 7.5" />
                    </svg>
                  </div>
                  <div className="ac-blog-quoteCard__content">
                    <div className="ac-product-description__DoshaMatchLabel" style={{ display: "none" }}>
                      {hasContent("dosha_match_label") ? (
                        <div dangerouslySetInnerHTML={{ __html: getContent("dosha_match_label") }} />
                      ) : (
                        <>
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
                        </>
                      )}
                    </div>
                    <div className="ac-product-description__DoshaMatchLabel">
                      <p>
                        During hot summer months, consider reducing the
                        churna.
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
  );
}

