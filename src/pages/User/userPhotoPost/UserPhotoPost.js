import React, { useState, useEffect } from "react";
import Styles from "./UserPhotoPost.module.css";
import Input from "../../../components/Input/Input";
import Error from "../../../components/helper/error/error";
import Button from "../../../components/Button/Button";
import useForm from "./../../../Hooks/useForm";
import useFetch from "./../../../Hooks/useFetch";
import { PHOTO_POST } from "../../../api";
import { useNavigate } from "react-router-dom";

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const [img, setImg] = useState({});
  const navigate = useNavigate();

  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    if (data) navigate("/conta");
  }, [data, navigate]);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);

    const token = window.localStorage.getItem("token");
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className={`${Styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label="nome" type="text" name="nome" {...nome} />
        <Input label="peso" type="number" name="peso" {...peso} />
        <Input label="idade" type="number" name="idade" {...idade} />
        <input
          className={Styles.file}
          type="file"
          name="img"
          id="img"
          onChange={(e) => handleImgChange(e)}
        ></input>
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        {error && <Error error={error} />}
      </form>
      <div>
        {img.preview && (
          <div
            className={Styles.preview}
            style={{ backgroundImage: `url(${img.preview})` }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default UserPhotoPost;
