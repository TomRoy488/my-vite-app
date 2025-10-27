import ACProductSection from "../ACProductSection";
import { 
  ArrowRight
} from "lucide-react";

export default function UsesCases() {
  return (
    <ACProductSection className="ac-product-description__UsesCases">
      <div>
        <h4>Common Use Cases</h4>
        <p>
          Brihatri Avipattikara Churna can be a beneficial companion in your
          journey towards digestive harmony in these situations:
        </p>
        <ul>
          <li>
            <img src="https://www.ayurcentralonline.com/wp-content/uploads/2024/06/Digestive-Health-4.png" alt="" />
            <span>Digestion</span>
            <p>
              Helps in soothing digestion when the stomach feels overburdened.
            </p>
            <a href=""> <ArrowRight strokeWidth={1.5} size={16} /> Explore treatment for digestion </a>
          </li>
          <li>
          <img src="https://www.ayurcentralonline.com/wp-content/uploads/2024/06/Digestive-Health-4.png" alt="" />
            <span>Seasonal</span>
            <p>
              Traditionally used to maintain digestive balance as seasons
              shift.
            </p>
            <a href=""> <ArrowRight strokeWidth={1.5} size={16} /> Explore treatment for digestion </a>
          </li>
          <li>
          <img src="https://www.ayurcentralonline.com/wp-content/uploads/2024/06/Digestive-Health-4.png" alt="" />
            <span>Acidity</span>
            <p>
              Supports the body's natural processes in maintaining comfort.
            </p>
            <a href=""> <ArrowRight strokeWidth={1.5} size={16} /> Explore treatment for digestion </a>
          </li>
          <li>
          <img src="https://www.ayurcentralonline.com/wp-content/uploads/2024/06/Digestive-Health-4.png" alt="" />
            <span>Seasonal</span>
            <p>
              Traditionally used to maintain digestive balance as seasons
              shift.
            </p>
            <a href=""> <ArrowRight strokeWidth={1.5} size={16} /> Explore treatment for digestion </a>
          </li>
        </ul>
      </div>
    </ACProductSection>
  );
}

