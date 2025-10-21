export default function IngredientsStatic() {
  return (
    <section className="ac-product-description__ingredient">
      <h3 className="ac-product-description__ingredientTitle">
        Ingredients Overview
      </h3>

      <div className="ac-product-description__ingredientPara">
        <p>
          This formulation combines time-honored Ayurvedic herbs known for their
          synergistic action in supporting eye clarity, comfort, and dosha
          balance.
        </p>
      </div>

      <h4 className="ac-product-description__ingredientSubTitle">
        Key Ingredients &amp; Their Roles
      </h4>

      <div className="ac-product-description__ingredientList">
        <ul>
          <li>
            <span>Haritaki</span>
            <p>
              Known for its balancing effect on all three doshas and support for
              digestive health.
            </p>
          </li>
          <li>
            <span>Pippali</span>
            <p>Traditionally used to enhance digestion and absorption.</p>
          </li>
          <li>
            <span>Guduchi</span>
            <p>
              Renowned for its detoxifying and rejuvenating properties.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
