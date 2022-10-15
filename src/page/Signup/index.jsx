import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Signup from "../../styles/Signup";
import "./style.css";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from "react";
import { UserContext } from "../../Providers/user";

function SignupElem() {
  const { signup } = useContext(UserContext)
  const formSchema = yup.object().shape({
    name: yup.string().required('Nome é um campo obrigatório'),
    email: yup.string().email('Deve fornecer um email válido').required('Email é um campo obrigatório'),
    password: yup.string().required('Senha é um campo obrigatório').min(8, 'Tamanho mínimo de 8 caracteres').matches(/([A-z])/, 'É necessário ao menos uma letra').matches(/([0-9])/, 'É necessário ao menos um número').matches(/\W|_/, 'É necessário ao menos um caracter especial'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Confirmação não coincide com a senha').required('É necessário confirmar a senha'),
    bio: yup.string().required('Bio é um campo obrigatório'),
    contact: yup.string().required('Contato é um campo obrigatório')
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(formSchema),
  });


  return (
    <Signup>
      <header>
        <h1>KenzieHub</h1>
        <Link className="buttonBack" to={"/login"}>
          Voltar
        </Link>
      </header>
      <form onSubmit={handleSubmit(signup)}>
        <h2>Crie sua conta</h2>
        <p>Rápido e grátis, vamos nessa</p>

        <div>
          <label htmlFor="name">Nome</label>
          <input placeholder="Digite aqui seu nome" type="text" name="name" id="name" {...register("name")} />
          <p className="error">{ errors.name?.message}</p>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input placeholder="Digite aqui seu email" type="email" name="email" id="email" {...register("email")} />
          <p className="error">{ errors.email?.message}</p>
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <input
            placeholder="Digite sua senha"
            type="password"
            name="password"
            id="password"
            {...register("password")}
          />
          <p className="error">{ errors.password?.message}</p>
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirmar Senha</label>
          <input
            placeholder="Confirme sua senha"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            {...register("confirmPassword")}
          />
          <p className="error">{ errors.confirmPassword?.message}</p>
        </div>

        <div>
          <label htmlFor="bio">Bio</label>
          <input placeholder="Fale sobre você" type="text" name="bio" id="bio" {...register("bio")} />
          <p className="error">{ errors.bio?.message}</p>
        </div>

        <div>
          <label htmlFor="contact">Contato</label>
          <input
            placeholder="Opção de contato"
            type="text"
            name="contact"
            id="contact"
            {...register("contact")}
          />
          <p className="error">{ errors.contact?.message}</p>
        </div>

        <div>
          <label htmlFor="module">Selecionar Módulo</label>
          <select name="module" id="module" {...register("module")}>
            <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
            <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
            <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
            <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
          </select>
        </div>

        <button className="buttonPrimary">Cadastrar</button>
      </form>
    </Signup>
  );
}

export default SignupElem;
