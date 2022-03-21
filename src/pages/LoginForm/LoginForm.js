import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { TOKEN_POST, USER_GET } from "../../api";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import useForm from "../../Hooks/useForm";

async function getUser(token){
  const {url, options} = USER_GET(token);
  const res = await fetch(url, options);
  const json = await res.json();
  console.log(json);
}


function LoginForm() {
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if(token)
      getUser(token);
  }, [])
  
  const username = useForm();
  const password = useForm();



  const handleSubmit = async (event) => {
    event.preventDefault();
    if(username.validate() && password.validate()){
      const {url, options} = TOKEN_POST({username: username.value, password: password.value})
      const res = await fetch(url, options);
      const json = await res.json();
      window.localStorage.setItem("token", json.token);
      getUser(json.token)
    }
  };

  return (
    <section onSubmit={handleSubmit}>
      <h1>Login</h1>
      <form action="">
        <Input
          type="text"
          {...username}
          name="username" 
          label="Usuário"
        />

        <Input
          type="password"
          name="password" 
          label="Senha"
          {...password}
        />

        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
}

export default LoginForm;
