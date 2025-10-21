import ContextSection from "./ContextSection";

export default function IngredientsSection({
  containerClass = "",
  titleClass = "",
  subTitleClass = "",
  paragraphClass = "",
  listClass = "",
  listItemClass = "",
  listTitleClass = "",
  listDescClass = "",
  title,
  paragraph,
  subTitle,
  ingredients,
}) {
  // 🪶 Fallback values
  const defaultTitle = "Ingredients Overview";
  const defaultParagraph =
    "This formulation combines time-honored Ayurvedic herbs known for their synergistic action in supporting eye clarity, comfort, and dosha balance.";
  const defaultSubTitle = "Key Ingredients & Their Roles";
  const defaultIngredients = [
    {
      name: "Haritaki",
      description:
        "Known for its balancing effect on all three doshas and support for digestive health.",
    },
    {
      name: "Pippali",
      description: "Traditionally used to enhance digestion and absorption.",
    },
    {
      name: "Guduchi",
      description: "Renowned for its detoxifying and rejuvenating properties.",
    },
  ];

  const usedTitle = title || defaultTitle;
  const usedParagraph = paragraph || defaultParagraph;
  const usedSubTitle = subTitle || defaultSubTitle;
  const usedIngredients = ingredients && ingredients.length
    ? ingredients
    : defaultIngredients;

  const validIngredients = usedIngredients.filter(
    (i) => i.name || i.description
  );

  return (
    <section className={`ac-product-description__ingredient ${containerClass}`}>
      {/* Main Title */}
      {usedTitle && (
        <h3 className={`ac-product-description__ingredientTitle ${titleClass}`}>
          {usedTitle}
        </h3>
      )}

      {/* Overview Paragraph */}
      {usedParagraph && (
        <div className="ac-product-description__ingredientPara">
          <p className={paragraphClass}>{usedParagraph}</p>
        </div>
      )}

      {/* Sub-Title */}
      {usedSubTitle && (
        <h4
          className={`ac-product-description__ingredientSubTitle ${subTitleClass}`}
        >
          {usedSubTitle}
        </h4>
      )}

      {/* Ingredients List */}
      {validIngredients.length > 0 && (
        <div className="ac-product-description__ingredientList">
          <ul className={listClass}>
            {validIngredients.map((item, index) => (
              <li key={index} className={listItemClass}>
                {item.name && (
                  <span className={listTitleClass}>{item.name}</span>
                )}
                {item.description && (
                  <p className={listDescClass}>{item.description}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
