import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { Thumbnails, Zoom, Fullscreen } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "../../styles/product-gallery.css";

const demoSlides = [
  { src: "https://www.ayurcentralonline.com/wp-content/uploads/2019/05/1-14.jpg" },
  { src: "https://www.ayurcentralonline.com/wp-content/uploads/2019/05/3-13.jpg" },
  { src: "https://www.ayurcentralonline.com/wp-content/uploads/2019/05/4-5.jpg" },
  { src: "https://www.ayurcentralonline.com/wp-content/uploads/2019/05/5-5.jpg" },
  { src: "https://www.ayurcentralonline.com/wp-content/uploads/2019/05/6-4.jpg" }
];

export default function ProductImageGallery({ slides = demoSlides }) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <div className="ac_galleryContainer">
      {/* Main Preview Image */}
      <div 
        className="ac_mainPreview"
        onClick={() => setOpen(true)}
      >
        <img
          src={slides[index].src}
          alt={`Product image ${index + 1}`}
          className="ac_mainImage"
          loading="lazy"
        />
        <div className="ac_previewOverlay"></div>
      </div>

      {/* Thumbnails Strip */}
      <div className="ac_thumbnailsStrip">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`ac_thumbWrapper ${index === idx ? 'ac_thumbActive' : ''}`}
            onClick={() => setIndex(idx)}
          >
            <img
              src={slide.src}
              alt={`Thumbnail ${idx + 1}`}
              className="ac_thumbImage"
              loading="lazy"
            />
            {index === idx && (
              <div className="ac_activeIndicator"></div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        plugins={[Thumbnails, Zoom, Fullscreen]}
        thumbnails={{
          position: 'bottom',
          width: 120,
          height: 80,
          gap: 10,
          imageFit: 'cover',
        }}
        zoom={{
          maxZoomPixelRatio: 3,
          zoomInMultiplier: 2,
          doubleTapDelay: 300,
          doubleClickDelay: 300,
          doubleClickMaxStops: 2,
          keyboardMoveDistance: 50,
          wheelZoomDistanceFactor: 10,
          pinchZoomDistanceFactor: 100,
          scrollToZoom: true,
        }}
        on={{ view: ({ index: currentIndex }) => setIndex(currentIndex) }}
      />
    </div>
  );
}

