import { useState } from "react";
import { 
  Info, 
  Sparkles, 
  Target, 
  Heart, 
  Droplet, 
  FlaskConical, 
  ShieldCheck, 
  Microscope, 
  BrainCircuit, 
  BookOpenCheck, 
  Sun,
  ChevronLeft,
  ChevronRight,
  ShoppingBag
} from "lucide-react";

export default function ProductMenu() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState('product-info');

  const handleShowMenu = () => {
    setIsMenuVisible(false);
  };

  const handleHideMenu = () => {
    setIsMenuVisible(true);
  };

  const handleItemClick = (itemId) => {
    setSelectedItem(itemId);
  };

  return (
    <div className={`ac-product-description__menu ${isMenuVisible ? 'ac-product-description__menu-show' : ''}`}>
      <div className="ac-product-menu__content">
      <div className="ac-product-menu__showIconBox">
        <span 
          className="ac-product-menu__hideIcon ac-product-menu__showIcon"
          onClick={handleShowMenu}
        >
          <span>Show</span> <ChevronRight size={18} /> 
        </span>
      </div>
      
      <span 
        className="ac-product-menu__hideIcon"
        onClick={handleHideMenu}
      >
        <ChevronLeft size={18} /> <span>Hide</span>
      </span>
      
      <ul className="ac_productMenu">
        <li className={selectedItem === 'product-info' ? 'ac-menu-item--selected' : ''}>
          <a href="#product-info" onClick={() => handleItemClick('product-info')}>
            <Info size={18} /> <span>Product Info</span>
          </a>
        </li>
        <li className={selectedItem === 'highlights' ? 'ac-menu-item--selected' : ''}>
          <a href="#highlights" onClick={() => handleItemClick('highlights')}>
            <Sparkles size={18} /> <span>Highlights</span>
          </a>
        </li>
        <li className={selectedItem === 'target-usecase' ? 'ac-menu-item--selected' : ''}>
          <a href="#target-usecase" onClick={() => handleItemClick('target-usecase')}>
            <Target size={18} /> <span>Target Usecase</span>
          </a>
        </li>
        <li className={selectedItem === 'key-benefits' ? 'ac-menu-item--selected' : ''}>
          <a href="#key-benefits" onClick={() => handleItemClick('key-benefits')}>
            <Heart size={18} /> <span>Key Benefits</span>
          </a>
        </li>
        <li className={selectedItem === 'how-to-use' ? 'ac-menu-item--selected' : ''}>
          <a href="#how-to-use" onClick={() => handleItemClick('how-to-use')}>
            <Droplet size={18} /> <span>How to Use</span>
          </a>
        </li>
        <li className={selectedItem === 'key-ingredients' ? 'ac-menu-item--selected' : ''}>
          <a href="#key-ingredients" onClick={() => handleItemClick('key-ingredients')}>
            <FlaskConical size={18} /> <span>Key Ingredients</span>
          </a>
        </li>
        <li className={selectedItem === 'safety' ? 'ac-menu-item--selected' : ''}>
          <a href="#safety" onClick={() => handleItemClick('safety')}>
            <ShieldCheck size={18} /> <span>Safety</span>
          </a>
        </li>
        <li className={selectedItem === 'clinical-research' ? 'ac-menu-item--selected' : ''}>
          <a href="#clinical-research" onClick={() => handleItemClick('clinical-research')}>
            <Microscope size={18} /> <span>Clinical Research</span>
          </a>
        </li>
        <li className={selectedItem === 'how-it-works' ? 'ac-menu-item--selected' : ''}>
          <a href="#how-it-works" onClick={() => handleItemClick('how-it-works')}>
            <BrainCircuit size={18} /> <span>How it Works</span>
          </a>
        </li>
        <li className={selectedItem === 'grantha-reference' ? 'ac-menu-item--selected' : ''}>
          <a href="#grantha-reference" onClick={() => handleItemClick('grantha-reference')}>
            <BookOpenCheck size={18} /> <span>Grantha Reference</span>
          </a>
        </li>
        <li className={selectedItem === 'mythology' ? 'ac-menu-item--selected' : ''}>
          <a href="#mythology" onClick={() => handleItemClick('mythology')}>
            <Sun size={18} /> <span>Mythology</span>
          </a>
        </li>
      </ul>
      </div>
      <div className="ac-product-menu-butNow">
        <a href="" className="ac-product-menu-butNow__link"> <ShoppingBag size={18} /> Buy Now</a>
      </div>
     
    </div>
  );
}
