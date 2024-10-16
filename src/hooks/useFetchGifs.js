
import { getGifs } from "../helpers/getGifs";
import { useState, useEffect } from "react";


export const useFetchGifs = (pokemon) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(pokemon);
    setImages(newImages);
    setIsLoading(false);

  };

  useEffect(() => {
    // UseEffect, para que no se vuelva a disparar el componente
    getImages();
  }, []);

  return {
    images, //es lo mismo que poner images:images, ya que se llaman igual
    isLoading
  };
};

//Un hook es una funcion que regresa algo
