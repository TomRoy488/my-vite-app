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
  ArrowRightFromLine
  
} from "lucide-react";



export default function ProductMenu() {
  return (
    <div className="ac-product-description__menu">
      <span className="ac-product-menu__expandIcon"><ArrowRightFromLine size={18} /></span>
      <ul className="ac_productMenu">
        <li><a href="#product-info"><Info size={18} /> <span>Product Info</span></a></li>
        <li><a href="#highlights"><Sparkles size={18} /> <span>Highlights</span></a></li>
        <li><a href="#target-usecase"><Target size={18} /> <span>Target Usecase</span></a></li>
        <li><a href="#key-benefits"><Heart size={18} /> <span>Key Benefits</span></a></li>
        <li><a href="#how-to-use"><Droplet size={18} /> <span>How to Use</span></a></li>
        <li><a href="#key-ingredients"><FlaskConical size={18} /> <span>Key Ingredients</span></a></li>
        <li><a href="#safety"><ShieldCheck size={18} /> <span>Safety</span></a></li>
        <li><a href="#clinical-research"><Microscope size={18} /> <span>Clinical Research</span></a></li>
        <li><a href="#how-it-works"><BrainCircuit size={18} /> <span>How it Works</span></a></li>
        <li><a href="#grantha-reference"><BookOpenCheck size={18} /> <span>Grantha Reference</span></a></li>
        <li><a href="#mythology"><Sun size={18} /> <span>Mythology</span></a></li>
      </ul>
    </div>
  );
}
