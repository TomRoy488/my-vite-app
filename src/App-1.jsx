import Header from "./components/Header";
import ProductMenu from "./components/ProductMenu";
import ProductHeader from "./components/product/ProductHeader";
import ProductHighlights from "./components/product/ProductHighlights";
import ProductDescriptionTitle from "./components/product/ProductDescriptionTitle";
import ProductOverview from "./components/product/ProductOverview";
import CoreDescription from "./components/product/CoreDescription";
import UsesCases from "./components/product/UsesCases";
import ContextUse from "./components/product/ContextUse";
import KeyBenefits from "./components/product/KeyBenefits";
import WhatToExpect from "./components/product/WhatToExpect";
import HowToUse from "./components/product/HowToUse";
import IngredientsOverview from "./components/product/IngredientsOverview";
import SafetySuitability from "./components/product/SafetySuitability";
import ScientificValidation from "./components/product/ScientificValidation";
import FormulationLogic from "./components/product/FormulationLogic";
import DoshaGuide from "./components/product/DoshaGuide";
import GranthicLogic from "./components/product/GranthicLogic";
import MythReference from "./components/product/MythReference";

function App() {
  return (
    <>
      <Header />
      <div className="ac-product-description">
        {/* Sidebar Menu */}
        <ProductMenu />

        {/* Product Content */}
        <div className="ac-product-description__content">
          <ProductHeader />
          <ProductHighlights />
          <ProductDescriptionTitle />
          <ProductOverview />
          <CoreDescription />
          <UsesCases />
          <ContextUse />
          <KeyBenefits />
          <WhatToExpect />
          <HowToUse />
          <IngredientsOverview />
          <SafetySuitability />
          <ScientificValidation />
          <FormulationLogic />
          <DoshaGuide />
          <GranthicLogic />
          <MythReference />
        </div>
      </div>
    </>
  );
}

export default App;
