import { useContent } from "../../context/ContentContext";
import QuoteCardContainer from "./QuoteCardContainer";
import { 
  ArrowRight
} from "lucide-react";

export default function ScientificValidation() {
  const { getContent, hasContent } = useContent();

  return (
    <>
      {/* Clinical Research Summary */}
      <QuoteCardContainer>
        <div className="ac-product-description__ScientificValidation">
          {hasContent("clinical_research_summary") ? (
            <div dangerouslySetInnerHTML={{ __html: getContent("clinical_research_summary") }} />
          ) : (
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
          )}
        </div>
      </QuoteCardContainer>

      {/* Formulation Intent */}
      <QuoteCardContainer>
        <div className="ac-product-description__Formulation">
          {hasContent("formulation_intent") ? (
            <div dangerouslySetInnerHTML={{ __html: getContent("formulation_intent") }} />
          ) : (
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
          )}
        </div>
      </QuoteCardContainer>

      <div className="ac-product-description__ScientificValidationContainerList">
        {/* Practitioner Insight - Note: API has typo "practinioner" */}
        {hasContent("practinioner_insight") && (
          <>
            <QuoteCardContainer containerClass="ac-product-description__PractitionerInsightsContainer">
              <div className="ac-product-description__PractitionerInsights">
                <div class="ac-blog-quoteCard__quote-icon">
                  <img src="https://www.ayurcentralonline.com/wp-content/uploads/2025/10/Icons-4.svg" alt="" />
                </div>
                {/* <div dangerouslySetInnerHTML={{ __html: getContent("practinioner_insight") }} /> */}
                <div>
                  <p>
                    Dr. Pampa Srishankar A is a renowned Ayurvedic practitioner with over 8 years of experience.
                    He is a graduate of the Ayurvedic Medical College and Hospital.
                  </p>
                </div>
                <div className="ac-product-description__PractitionerDetails">
                  <div className="ac-product-description__PractitionerDetails-content">
                    <div className="ac-product-description__PractitionerDetails-TxtContent">
                      <h4>Dr. Pampa Srishankar A</h4>
                      <p><span>BAMS, MD (Ayu)</span>, <span>8 years exp</span></p>
                      <div className="ac-product-description__PractitionerDetails-actions"> <a href="#" className="ac-product-description__PractitionerDetails-actions-link"><ArrowRight strokeWidth={1.5} size={16} /> View profile</a> <a href="" className="ac-product-description__PractitionerDetails-actions-link"><ArrowRight strokeWidth={1.5} size={16} /> Book appointment</a>  </div>
                    </div>
                    <div className="ac-product-description__PractitionerDetails-img">
                      <img src="https://www.ayurcentral.in/wp-content/uploads/2024/05/5.webp" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </QuoteCardContainer>

            <QuoteCardContainer containerClass="ac-product-description__PractitionerInsightsContainer">
              <div className="ac-product-description__PractitionerInsights">
                <div class="ac-blog-quoteCard__quote-icon">
                  <img src="https://www.ayurcentralonline.com/wp-content/uploads/2025/10/Icons-4.svg" alt="" />
                </div>
                <div dangerouslySetInnerHTML={{ __html: getContent("practinioner_insight") }} />
                <div className="ac-product-description__PractitionerDetails">
                  <div className="ac-product-description__PractitionerDetails-content">
                    <div className="ac-product-description__PractitionerDetails-TxtContent">
                      <h4>Dr. Pampa Srishankar A</h4>
                      <p><span>BAMS, MD (Ayu)</span>, <span>8 years exp</span></p>
                      <div className="ac-product-description__PractitionerDetails-actions"> <a href="#" className="ac-product-description__PractitionerDetails-actions-link"><ArrowRight strokeWidth={1.5} size={16} /> View profile</a> <a href="" className="ac-product-description__PractitionerDetails-actions-link"> <ArrowRight strokeWidth={1.5} size={16} /> Book appointment</a>  </div>
                    </div>
                    <div className="ac-product-description__PractitionerDetails-img">
                      <img src="https://www.ayurcentral.in/wp-content/uploads/2024/05/5.webp" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </QuoteCardContainer>

            <QuoteCardContainer containerClass="ac-product-description__PractitionerInsightsContainer">
              <div className="ac-product-description__PractitionerInsights">
                <div class="ac-blog-quoteCard__quote-icon">
                  <img src="https://www.ayurcentralonline.com/wp-content/uploads/2025/10/Icons-4.svg" alt="" />
                </div>
                <div dangerouslySetInnerHTML={{ __html: getContent("practinioner_insight") }} />
                <div className="ac-product-description__PractitionerDetails">
                  <div className="ac-product-description__PractitionerDetails-content">
                    <div className="ac-product-description__PractitionerDetails-TxtContent">
                      <h4>Dr. Pampa Srishankar A</h4>
                      <p><span>BAMS, MD (Ayu)</span>, <span>8 years exp</span></p>
                      <div className="ac-product-description__PractitionerDetails-actions"> <a href="#" className="ac-product-description__PractitionerDetails-actions-link"><ArrowRight strokeWidth={1.5} size={16} /> View profile</a> <a href="" className="ac-product-description__PractitionerDetails-actions-link"><ArrowRight strokeWidth={1.5} size={16} /> Book appointment</a>  </div>
                    </div>
                    <div className="ac-product-description__PractitionerDetails-img">
                      <img src="https://www.ayurcentral.in/wp-content/uploads/2024/05/5.webp" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </QuoteCardContainer>
          </>
        )}
      </div>

    </>
  );
}

