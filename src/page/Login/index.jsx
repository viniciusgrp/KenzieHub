import { useForm } from "react-hook-form";
import { Link, } from "react-router-dom";
import Login from "../../styles/Login/styles.js";
import "./style.css";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from "react";
import {UserContext} from "../../Providers/user/index.js";

function LoginElem() {
  const { login } = useContext(UserContext)

  const formSchema = yup.object().shape({
    email: yup.string().required('Email é um campo obrigatório').email('Deve ser um email válido'),
    password: yup.string().required('Senha é um campo obrigatório')
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(formSchema),
  })

  return (
    <Login>
      <h1>Kenzie Hub</h1>
      <div>
        <h2 className="title-1">Login</h2>
        <form onSubmit={handleSubmit(login)}>
          <div className="divInput">
          <label htmlFor="email">Email</label>
          <input
            placeholder="Digite seu email"
            name="email"
            id="email"
            {...register('email')}
            />
            <p className="error">{ errors.email?.message}</p>
          </div>
          <div className="divInput">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            name="password"
            id="password"
            {...register('password')}
            />
            <p className="error">{ errors.password?.message}</p>
          </div>
          <button className="buttonPrimary" type="submit">Entrar</button>
        </form>
        <p className="createAccount">Ainda não possui uma conta?</p>
        <Link className="buttonGrey" to={"/signup"}>Cadastre-se</Link>
      </div>
    </Login>
  );
}

export default LoginElem;
