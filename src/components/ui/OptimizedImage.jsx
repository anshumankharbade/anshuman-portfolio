import React, { useState, useEffect, useMemo } from "react";

const OptimizedImage = ({ 
  src, 
  alt, 
  className, 
  lazy = true, 
  ...props 
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const optimizedSrc = useMemo(() => {
    if (!src || src.startsWith("http")) return src;
    return src;
  }, [src]);

  useEffect(() => {
    if (!optimizedSrc) return;

    const img = new Image();
    img.src = optimizedSrc;
    img.decoding = "async";

    img.onload = () => {
      setLoaded(true);
    };

    img.onerror = () => {
      setError(true);
      setLoaded(true);
    };

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [optimizedSrc]);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ contain: "paint" }}
    >
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800" />
      )}
      {error ? (
        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
          <span className="text-gray-600 text-sm">Image</span>
        </div>
      ) : (
        <img
          src={optimizedSrc}
          alt={alt}
          loading={lazy ? "lazy" : "eager"}
          decoding="async"
          fetchPriority={lazy ? "low" : "high"}
          className={`w-full h-full object-cover ${
            loaded ? "opacity-100" : "opacity-0"
          } transition-opacity duration-200`}
          style={{
            contentVisibility: "auto",
            willChange: "opacity",
          }}
          {...props}
        />
      )}
    </div>
  );
};

export default OptimizedImage;