import { useEffect, useState, Suspense } from "react";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import { Box, CircularProgress } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// Initial set of image links
const initialImageLinks = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1526045612212-70caf35c14df",
    alt: "Sample Image 1",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    alt: "Sample Image 2",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1485796826113-174aa68fd81b",
    alt: "Sample Image 3",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    alt: "Sample Image 4",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    alt: "Sample Image 5",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    alt: "Sample Image 6",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a",
    alt: "Sample Image 7",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    alt: "Sample Image 8",
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    alt: "Sample Image 9",
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f",
    alt: "Sample Image 10",
  },
  {
    id: 11,
    url: "https://images.unsplash.com/photo-1425321395722-b1dd54a97cf3",
    alt: "Sample Image 11",
  },
  {
    id: 12,
    url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    alt: "Sample Image 12",
  },
];

function Dashboard() {
  const [images, setImages] = useState(initialImageLinks);
  const [loading, setLoading] = useState(false);

  const loadMoreImages = () => {
    setLoading(true);
    setTimeout(() => {
      const newImageLinks = [
        {
          id: 1,
          url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
          alt: "Sample Image 1",
        },
        {
          id: 2,
          url: "https://images.unsplash.com/photo-1485796826113-174aa68fd81b",
          alt: "Sample Image 2",
        },
        {
          id: 3,
          url: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
          alt: "Sample Image 3",
        },
        {
          id: 4,
          url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
          alt: "Sample Image 4",
        },
        {
          id: 5,
          url: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f",
          alt: "Sample Image 5",
        },
        {
          id: 6,
          url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
          alt: "Sample Image 6",
        },
      ];

      setImages((prev) => [...prev, ...newImageLinks]);
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;
      if (bottom && !loading) {
        loadMoreImages();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

  return (
    <Grid container spacing={3}>
      {images?.map(({ url, alt }) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Card
              sx={{
                height: "20rem",
                width: "30rem",
                boxShadow: 3,
                transition: "0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <Suspense fallback={<CircularProgress />}>
                <LazyLoadImage
                  effect="blur"
                  wrapperProps={{
                    style: {
                      transitionDelay: "1s",
                    },
                  }}
                  src={url}
                  alt={alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Suspense>
            </Card>
          </Box>
        </Grid>
      ))}
      {loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginTop: "20px",
          }}
        >
          <CircularProgress />
        </div>
      )}
    </Grid>
  );
}

export default Dashboard;
