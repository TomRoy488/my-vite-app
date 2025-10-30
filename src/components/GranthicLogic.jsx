import { useContent } from "../../context/ContentContext";

export default function GranthicLogic() {
  const { getContent, hasContent } = useContent();

  return (
    <div className="ac-product-description__GranthicLogicContainer">
      <div className="ac-granthaRef-card__container">
        <div className="ac-granthaRef-card ac-granthaRef-card--twelve">
          <div className="ac-granthaRef-card__content">
            <div className="ac-granthaRef-card__textBox">
              <div className="ac-product-description__GranthicLogic">
                {/* Source Text Name */}
                {hasContent("source_text_name") && (
                  <div dangerouslySetInnerHTML={{ __html: getContent("source_text_name") }} />
                )}

                {/* Sanskrit Shloka */}
                {hasContent("sanskrit_shloka") ? (
                  <div dangerouslySetInnerHTML={{ __html: getContent("sanskrit_shloka") }} />
                ) : (
                  <div>
                    <h4>Sanskrit Verse</h4>
                    <p>
                      An ancient verse from Ayurvedic texts highlights the
                      digestive benefits of the ingredients used in this churna.
                    </p>
                    <span>Source: Classical Ayurvedic Texts</span>
                  </div>
                )}

                {/* Meaning Context */}
                {hasContent("meaning_context") ? (
                  <div dangerouslySetInnerHTML={{ __html: getContent("meaning_context") }} />
                ) : (
                  <div>
                    <h4>Verse Meaning</h4>
                    <p>
                      The verse emphasizes the herb's role in balancing
                      digestive fire and supporting overall wellness by clearing
                      digestive channels.
                    </p>
                    <span>Source: Traditional Ayurvedic Interpretation</span>
                  </div>
                )}

                {/* Classical Reference (fallback) */}
                {!hasContent("sanskrit_shloka") && !hasContent("meaning_context") && (
                  <div>
                    <h4>Classical Reference</h4>
                    <p>
                      Brihatri Avipattikara Churna is a formulation based on
                      classical Ayurvedic texts, revered for its digestive
                      support properties.
                    </p>
                    <span>Source: Classical Ayurvedic Granthas</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="ac-granthaRef-card__bgBox">
            <img
              src="https://www.ayurcentral.in/wp-content/uploads/webp_images/Untitled-design-7-1.webp"
              alt="Classical Ayurvedic text background"
              className="ac-granthaRef-card__bgImg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

