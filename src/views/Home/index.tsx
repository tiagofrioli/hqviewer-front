import React, { useEffect, useState } from "react";
import Carousel, { ImageType } from "../../components/Carousel";
import { useAuth } from "../../context/Auth.tsx";
import "../../styles.css";

const Home: React.FC = () => {
  const [images, setImagens] = useState<ImageType[]>();

  const { data } = useAuth();

  useEffect(() => {
    setImagens(
      data.map((item) => ({
        thumbnail: item.thumbnail,
      }))
    );
  }, []);

  return (
    <>
      <Carousel images={images} />
    </>
  );
};

export default Home;
