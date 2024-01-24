import React, { useContext, useState } from "react";
import tagIcon from "../../assets/tag.svg";
import { MovieContext } from "../../context";
import { getImgUrl } from "../../utils/movie-utility";
import Rating from "../movie-section/Rating";
import MovieModal from "./MovieModal";

const MovieCard = ({ movie }) => {
  const { title, genre, rating, price, cover } = movie;

  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const image = getImgUrl(cover);

  const { cartData, setCartData } = useContext(MovieContext);

  const handleAddToCart = (e, movie) => {
    e.stopPropagation();
    const found = cartData.find((item) => item.id === movie.id);
    if (!found) {
      setCartData([...cartData, movie]);
    } else {
      console.error("This movie has already been added");
    }
  };

  const handleModalClose = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };
  const handleMovieSelection = () => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  return (
    <>
      {showModal && (
        <MovieModal movie={selectedMovie} onClose={handleModalClose} onAddToCart={handleAddToCart} />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a onClick={handleMovieSelection}>
          <img className="w-full object-cover" src={image} alt={title} />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating rating={rating} />
            </div>
            <button
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              onClick={(e) => handleAddToCart(e, movie)}
            >
              <img src={tagIcon} alt="" />
              <span>${price} | Add to Cart</span>
            </button>
          </figcaption>
        </a>
      </figure>
    </>
  );
};

export default MovieCard;
