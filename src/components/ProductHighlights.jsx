import { useContent } from "../../context/ContentContext";

export default function ProductHighlights() {
  const { getContent, hasContent } = useContent();

  return (
    <div className="ac-product-highlights">
      <div
        className="ac-product-highlights__content"
        id="ac-product-highlights"
      >
        {hasContent("highlights") ? (
          <div dangerouslySetInnerHTML={{ __html: getContent("highlights") }} />
        ) : (
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
        )}
      </div>

      <div className="ac-product-highlights__readMore">
        <a href="#product-description">read more</a>
      </div>
    </div>
  );
}

