import React, { useEffect, useState } from "react";
import api from "../../services/api";
// import { Container } from './styles';

interface IEpisodes {
  title: string;
  episode: number;
  thumbnail: string;
}

const Home: React.FC = () => {
  const [episodes, setEpisodes] = useState<IEpisodes[]>([]);
  useEffect(() => {
    getEpisodes();
  }, []);

  async function getEpisodes() {
    try {
      const response = await api.get("/episodes");
      setEpisodes(response.data);
      console.log("DADOS --->", response.data);
    } catch (error) {}
  }

  return (
    <>
      <div>Home</div>
      {episodes.map((item, index) => (
        <>
          <div>#{item.episode}</div>
          <div>{item.title}</div>
          <img src={item.thumbnail} alt="Episodio" />
        </>
      ))}
    </>
  );
};

export default Home;
