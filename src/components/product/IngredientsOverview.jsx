import ACProductSection from "../ACProductSection";

export default function IngredientsOverview() {
  return (
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
      <div className="ac-product-description__ingredientList" >
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
  );
}

