import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Error from "../../components/helper/error/error";
import Input from "../../components/Input/Input";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../userContext";
import styles from "./LoginForm.module.css";
import stylesBtn from "../../components/Button/Button.module.css";

function LoginForm() {
  const { userLogin, error, loading } = React.useContext(UserContext);
  const username = useForm();
  const password = useForm();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  };

  return (
    <section onSubmit={handleSubmit} className="animeLeft">
      <h1 className="title">Login</h1>
      <form action="" className={styles.form}>
        <Input type="text" {...username} name="username" label="Usuário" />

        <Input type="password" name="password" label="Senha" {...password} />

        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <Link to="/login/perdeu" className={styles.perdeu}>Perdeu a senha?</Link>
      <div className={styles.cadastro}>
          <h2 className={styles.subtitle}>Cadastre-se</h2>
          <p>Ainda não possui conta? Cadastre-se no site</p>
          <Link to="/login/criar" className={stylesBtn.button}>Cadastro</Link>     
      </div>
    </section>
  );
}

export default LoginForm;
