import React, { useState } from "react";
import GalleryShimmer from "./gallerySkeleton";
interface lazyProps {
  src: string;
  alt: string;
}
const LazyImage: React.FC<lazyProps> = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className='relative'>
      {!loaded && <GalleryShimmer />}
      <img
        className={`w-16 h-16 object-cover rounded-lg ${
          loaded ? "" : "hidden"
        }`}
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(false)}
      />
    </div>
  );
};

export default LazyImage;
