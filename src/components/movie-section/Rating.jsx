import React from "react";
import star from "../../assets/star.svg";

const Rating = ({ rating }) => {
  return Array.from({ length: rating }, (value, index) => (
    <img key={index} src={star} width="14" height="14" alt="star" />
  ));
};

export default Rating;
