import React, { useEffect } from "react";
import FeedPhotosItem from "../FeedPhotosItem/FeedPhotosItem";
import useFetch from "../../../Hooks/useFetch";
import { PHOTOS_GET } from "../../../api";
import Error from "../../../components/helper/error/error";
import Loading from "../../../components/helper/Loading/Loading";
import Styles from "./FeedPhotos.module.css";

function FeedPhotos() {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { json } = await request(url, options);
      console.log(json);
    }
    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error}></Error>;
  if (loading) return <Loading />;

  if (data)
    return (
      <ul className={`${Styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem key={photo.id} photo={photo} />
        ))}
      </ul>
    );
  else return null;
}

export default FeedPhotos;
