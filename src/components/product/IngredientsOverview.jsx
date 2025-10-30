import ACProductSection from "../ACProductSection";
import {
  ArrowRight
} from "lucide-react";
import { useEffect } from "react";

export default function IngredientsOverview() {
  useEffect(() => {
    const handleParagraphClick = (event) => {
      const target = event.target;
      let pElement = target;
      if (target.tagName !== 'P') {
        pElement = target.closest('p');
      }
      if (pElement && pElement.closest('.ac-product-description__ingredient ul li')) {
        pElement.classList.toggle('ac-text-expanded');
      }
    };

    const container = document.querySelector('.ac-product-description__ingredient');
    if (container) {
      container.addEventListener('click', handleParagraphClick);
      return () => {
        container.removeEventListener('click', handleParagraphClick);
      };
    }
  }, []);

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
            <img src="https://m.media-amazon.com/images/I/41Pvfjsk9uS._AC_UF1000,1000_QL80_.jpg" alt="Svetachandana Mula" />
            <span>Svetachandana Mula</span>
            <p>
              Renowned for its warming and digestive properties. Known for its cooling and rejuvenating qualities.
            </p>
            <a href="#"> <ArrowRight strokeWidth={1.5} size={16} /> Explore more about Shunti </a>
          </li>
          <li>
            <img src="https://m.media-amazon.com/images/I/41Pvfjsk9uS._AC_UF1000,1000_QL80_.jpg" alt="Kampillaka Pushpa" />
            <span>Kampillaka Pushpa</span>
            <p>
              Traditionally used to enhance digestive fire. Known for its cooling and rejuvenating qualities.
            </p>
            <a href="#"> <ArrowRight strokeWidth={1.5} size={16} /> Explore more about Shunti </a>
          </li>
          <li>
            <img src="https://m.media-amazon.com/images/I/41Pvfjsk9uS._AC_UF1000,1000_QL80_.jpg" alt="Parijataka Pushpa" />
            <span>Parijataka Pushpa</span>
            <p>
              Known for its cooling and rejuvenating qualities. Known for its cooling and rejuvenating qualities.
            </p>
            <a href="#"> <ArrowRight strokeWidth={1.5} size={16} /> Explore more about Shunti </a>
          </li>
          <li>
            <img src="https://m.media-amazon.com/images/I/41Pvfjsk9uS._AC_UF1000,1000_QL80_.jpg" alt="Agnimantha Patra" />
            <span>Agnimantha Patra</span>
            <p>
              Known for its cooling and rejuvenating qualities. Known for its cooling and rejuvenating qualities.
            </p>
            <a href="#"> <ArrowRight strokeWidth={1.5} size={16} /> Explore more about Shunti </a>
          </li>
        </ul>
      </div>
    </ACProductSection>
  );
}
