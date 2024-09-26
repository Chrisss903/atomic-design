import { CircularProgress } from "@mui/material";
import { Suspense } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

type PropsLazy = {
  src: string;
  alt: string;
};

const LazyImage = ({ src, alt }: PropsLazy) => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <LazyLoadImage
        effect="opacity"
        wrapperProps={{
          style: { transitionDelay: "1s" },
        }}
        src={src}
        alt={alt}
        style={{ height: "100%", width: "100%" }}
      />
    </Suspense>
  );
};

export default LazyImage;
