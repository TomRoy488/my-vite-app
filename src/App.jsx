import { ContentProvider, useContent } from "../context/ContentContext";
import ProductHeader from "./components/ProductHeader";
import ProductHighlights from "./components/ProductHighlights";
import ProductDescription from "./components/ProductDescription";
import ScientificValidation from "./components/ScientificValidation";
import DoshaGuide from "./components/DoshaGuide";
import GranthicLogic from "./components/GranthicLogic";
import MythReference from "./components/MythReference";
import Header from "./components/Header";
import ProductMenu from "./components/ProductMenu";
import ProductImageGallery from "./components/product/ProductImageGallery";
import UsesCases from "./components/product/UsesCases";
import IngredientsOverview from "./components/product/IngredientsOverview";
import ScientificPublications from "./components/ScientificPublications";
// Loading component
function LoadingSpinner() {
  return (
    <div className="p-8 text-center">
      <p>Loading content...</p>
    </div>
  );
}

// Error component
function ErrorMessage({ error }) {
  return (
    <div className="p-8 text-center text-red-600">
      <p>Error loading content: {error}</p>
    </div>
  );
}

// Main content component
function AppContent() {
  const { loading, error } = useContent();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <>
      <Header />
      <div className="ac-product-description">
        {/* Sidebar Menu */}
        <ProductMenu />

        {/* Product Content */}
        <div className="ac-product-description__content">
          <ProductImageGallery />
          <ProductHeader />
          <ProductHighlights />
          <UsesCases />
          <IngredientsOverview />
          <DoshaGuide />
          <ScientificPublications />
          <ProductDescription />
          <ScientificValidation />

          <GranthicLogic />
          <MythReference />
        </div>
      </div>
    </>
  );
}

// App wrapper with provider
function App() {
  const contentId = '6629'; //urlParams.get('content_id') || 'default';


  return (
    <ContentProvider contentId={contentId}>
      <AppContent />
    </ContentProvider>
  );
}

export default App;
