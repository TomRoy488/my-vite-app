import { useContent } from "../../context/ContentContext";

export default function ProductHeader() {
  const { getContent, hasContent } = useContent();

  return (
    <>
      {/* Product Name */}
      <div className="ac-product-maintitle__container">
        {hasContent("product_name") ? (
          <div dangerouslySetInnerHTML={{ __html: getContent("product_name") }} />
        ) : (
          <h1>Brihatri Avipattikara Churna (90Gm)</h1>
        )}
      </div>

      {/* Subtitle */}
      <div className="ac-product-subtitle" id="ac-product-subtitle">
        {hasContent("subtitle") ? (
          <div dangerouslySetInnerHTML={{ __html: getContent("subtitle") }} />
        ) : (
          <p>
            A traditional formula from Ayurveda, crafted to support digestive
            wellness with gentle balance.
          </p>
        )}
      </div>
    </>
  );
}

