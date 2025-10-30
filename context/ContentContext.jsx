/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";

// Create the context
const ContentContext = createContext();

// Custom hook to use the content context
export function useContent() {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error("useContent must be used within a ContentProvider");
  }
  return context;
}

// Provider component
export function ContentProvider({ children, contentId = null }) {
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        
        // Build URL with content_id parameter
        const baseUrl = "https://www.test.ayurcentral.in/wp-json/custom/v1/get-content-meta";
        const url = contentId 
          ? `${baseUrl}?content_id=${encodeURIComponent(contentId)}`
          : baseUrl;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setContent(data.meta_data);
        setError(null);
      } catch (err) {
        console.error("Error fetching content:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [contentId]);

  // Helper function to get content by key
  const getContent = (key) => {
    return content[key] || null;
  };

  // Helper function to check if content exists for a key
  const hasContent = (key) => {
    // Use Object.hasOwn (modern) or Object.prototype.hasOwnProperty.call (compatible)
    return (
      (Object.hasOwn ? Object.hasOwn(content, key) : Object.prototype.hasOwnProperty.call(content, key)) &&
      content[key]
    );
  };

  const value = {
    content,
    loading,
    error,
    getContent,
    hasContent,
  };

  return (
    <ContentContext.Provider value={value}>
      {children}
    </ContentContext.Provider>
  );
}

export default ContentContext;

