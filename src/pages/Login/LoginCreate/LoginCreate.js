import React from "react";
import Input from "../../../components/Input/Input";
import Error from "../../../components/helper/error/error";
import Button from "../../../components/Button/Button";
import useForm from "../../../Hooks/useForm";
import { USER_POST } from "../../../api";
import { UserContext } from "../../../userContext";
import useFetch from "../../../Hooks/useFetch";

function LoginCreate() {
  const username = useForm();
  const email = useForm("email");
  const password = useForm("password");
  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { res } = await request(url, options);
    if (res.ok) userLogin(username.value, password.value);
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
}

export default LoginCreate;
