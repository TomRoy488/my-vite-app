export default function QuoteCardContainer({
  containerClass = "",
  contentClass = "",
  children,
}) {
  return (
    <div
      className={`ac-product-description__ScientificValidationContainer ${containerClass}`}
    >
      <div className="ac-blog-quoteCard">
        <div className="ac-blog-quoteCard__container">
          {/* Quotation Icon */}
          <div className="ac-blog-quoteCard__quote-icon">
            <svg
              className="w-6 h-6 text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#ec520b"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M6 6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3H5a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2H6Zm9 0a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3Z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Flexible Inner Content */}
          <div
            className={`ac-blog-quoteCard__content ${contentClass}`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
