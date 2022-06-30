import React from "react";
import Styles from "./FeedPhotosItem.module.css";

function FeedPhotosItem({ photo }) {
  return (
    <li className={Styles.photo}>
      <img src={photo.src} alt={photo.title} />
      <span className={Styles.visualizacao}>{photo.acessos}</span>
    </li>
  );
}

export default FeedPhotosItem;
