import { useContent } from "../../context/ContentContext";

export default function MythReference() {
  const { getContent, hasContent } = useContent();

  return (
    <div className="ac-product-description__MythReferenceContainer">
      <div className="ac-special-info">
        <div className="ac-special-info__container">
          <div className="ac-special-info__content">
            <div className="ac-special-info__header">
              <div className="ac-special-info__title-box">
                <div className="ac-product-description__MythReference">
                  {/* Cultural Context */}
                  {hasContent("cultural_context") ? (
                    <div dangerouslySetInnerHTML={{ __html: getContent("cultural_context") }} />
                  ) : hasContent("myth_reference") ? (
                    <div dangerouslySetInnerHTML={{ __html: getContent("myth_reference") }} />
                  ) : (
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
                  )}

                  {/* Ritual Instructions */}
                  {hasContent("ritual_instructions") && (
                    <div dangerouslySetInnerHTML={{ __html: getContent("ritual_instructions") }} />
                  )}

                  {/* Emotional Spiritual Benefit */}
                  {hasContent("emotional_spiritual_benefit") && (
                    <div dangerouslySetInnerHTML={{ __html: getContent("emotional_spiritual_benefit") }} />
                  )}
                </div>
              </div>

              <div className="ac-special-info__title-line">
                <img
                  src="https://www.ayurcentral.in/wp-content/uploads/webp_images/Untitled-design-50.webp"
                  alt="Title underline decoration"
                  className="ac-special-info__line-img"
                />
              </div>
            </div>
          </div>

          <div
            className="ac-special-info__bg"
            style={{ display: "none" }}
          >
            <img
              src="https://www.ayurcentral.in/wp-content/uploads/webp_images/Specially-used-during-Diwali-for-Abhyanjana.webp"
              alt="Background decorative"
              className="ac-special-info__bg-img"
            />
          </div>

          <div
            className="ac-special-info__gif"
            style={{ display: "none" }}
          >
            <img
              src="https://www.ayurcentral.in/wp-content/uploads/2025/06/Specially-used-during-Diwali-for-Abhyanjana.gif"
              alt="Background decorative animation"
              className="ac-special-info__bg-gif"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

