import ContextSection from "./components/ContextSection";
import ContextStatic from "./components/ContextStatic";
import UseCasesSection from "./components/UseCasesSection";
import UseCasesStatic from "./components/UseCasesStatic";
import KeyBenefitsSection from "./components/KeyBenefitsSection";
import KeyBenefitsStatic from "./components/KeyBenefitsStatic";
import WhatToExpectStatic from "./components/WhatToExpectStatic";
import HowToUseStatic from "./components/HowToUseStatic";
import HowToUseSection from "./components/HowToUseSection";
import IngredientsStatic from "./components/IngredientsStatic";
import IngredientsSection from "./components/IngredientsSection";
import SafetySection from "./components/SafetySection";
import SafetyStatic from "./components/SafetyStatic";
import QuoteCardContainer from "./components/QuoteCardContainer";
import ScientificValidationStatic from "./components/ScientificValidationStatic";


function App() {
  const useCases = [
    {
      title: "Post-meal discomfort",
      description:
        "When heavy meals leave you feeling uneasy, Avipattikara Churna can be your go-to remedy.",
    },
    {
      title: "Festive indulgence",
      description:
        "Support digestion during traditional feasts and celebrations.",
    },
    {
      description:
        "Integrate into your routine to maintain digestive balance naturally.",
    },
    {
      title: "", // Empty — will be ignored
      description: "", // Empty — will be ignored
    },
  ];

  const benefits = [
    {
      description:
        "Promoting digestive balance through traditional principles.",
    },
    { description: "Supporting natural detoxification processes." },
    { description: "Providing a gentle, soothing effect on the stomach." },
  ];

  const myIngredients = [
    {
      name: "Amalaki",
      description: "Rich in antioxidants, helps rejuvenate tissues.",
    },
    {
      name: "Bhringraj",
      description: "Traditionally used to nourish and cool the system.",
    },
  ];

  return (
    <div className="p-8 space-y-8">
      {/* Both heading + paragraph */}
      <ContextSection
        containerClass="bg-green-50 p-6 rounded-lg"
        headingClass="text-green-800 text-xl font-semibold"
        paragraphClass="text-gray-700 mt-2"
        heading="Traditional Context of Use"
        paragraph="Avipattikara Churna is typically consumed before meals to prime the digestive fire, or after meals to soothe and balance."
      />

      {/* Only paragraph */}
      <ContextSection
        containerClass="bg-yellow-50 p-4 rounded-md"
        paragraph="Used during summer to balance Pitta dosha and maintain digestive harmony."
      />

      {/* Only heading */}
      <ContextSection
        heading="Modern Wellness Relevance"
        headingClass="text-blue-700 text-lg font-medium"
      />

      {/* Neither → renders nothing */}
      <ContextSection />

      <ContextStatic />

      <UseCasesSection
        containerClass="bg-green-50 p-6 rounded-lg"
        headingClass="text-green-800 text-xl font-semibold"
        paragraphClass="text-gray-700 mt-2"
        listClass="mt-4 space-y-4"
        listItemClass="p-3 border rounded-md bg-white shadow-sm"
        listTitleClass="block text-green-700 font-medium"
        listDescClass="text-gray-600 mt-1"
        heading="Common Use Cases"
        paragraph="Avipattikara Churna is often incorporated into daily routines to aid digestive balance and comfort during:"
        useCases={useCases}
      />

      <UseCasesStatic />

      <KeyBenefitsSection
        containerClass="bg-orange-50 p-6 rounded-lg"
        headingClass="text-orange-800 text-xl font-semibold"
        paragraphClass="text-gray-700 mt-2"
        listClass="mt-4 space-y-3"
        listItemClass="p-3 border-l-4 border-orange-400 bg-white shadow-sm"
        listDescClass="text-gray-700"
        heading="Key Benefits"
        paragraph="Avipattikara Churna offers functional support without making medical claims, focusing on:"
        benefits={benefits}
      />

      <KeyBenefitsStatic />

      <WhatToExpectStatic />

      <HowToUseStatic />

      <HowToUseSection />

      <IngredientsStatic />

      {/* No props passed — uses its own built-in data */}
      <IngredientsSection />

      <IngredientsSection
        title="Core Herbal Blend"
        paragraph="A synergistic formulation combining adaptogenic and detoxifying herbs."
        subTitle="Highlighted Herbs"
        ingredients={myIngredients}
        containerClass="bg-green-50 p-6 rounded-lg"
        titleClass="text-green-900 text-2xl font-semibold"
        subTitleClass="text-green-800 text-lg font-medium mt-5 mb-3"
        listItemClass="border-b border-green-100 py-2"
        listTitleClass="font-semibold text-green-700"
        listDescClass="text-gray-700"
      />

<SafetySection />
 <SafetyStatic />

 {/* Example 1: Text content */}
      <QuoteCardContainer>
        <div className="ac-product-description__ScientificValidation">
          <p>
            Recent studies have explored the potential digestive benefits of
            Avipattikara Churna, aligning with traditional Ayurvedic insights.
          </p>
          <p>
            Although more research is needed, initial findings suggest its
            efficacy in supporting digestive health.
          </p>
          <span>This section requires review.</span>
        </div>
      </QuoteCardContainer>

      {/* Example 2: Custom heading & image */}
      <QuoteCardContainer>
        <div className="text-center">
          <h4 className="text-green-700 font-semibold mb-2">
            Ancient Wisdom Meets Modern Validation
          </h4>
          <img
            src="/images/research-lab.png"
            alt="Research lab"
            className="mx-auto rounded-lg shadow-md"
          />
          <p className="mt-3 text-gray-700">
            Scientific studies continue to uncover the bioactive potential of
            classical Ayurvedic formulations.
          </p>
        </div>
      </QuoteCardContainer>

       <ScientificValidationStatic />

    </div>
  );
}

export default App;
