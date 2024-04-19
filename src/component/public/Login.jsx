import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const id = event.target.identifiant.value;
    const password = event.target.password.value;

    const json = JSON.stringify(id, password);

    fetch("https://pokebuildapi.fr/api/v1/login", {
      method: "POST",
      body: json,
    })
      .then((response) => {
        return response.json();
      })
      
      .catch((data) => {
        const token = "你别装孙子了吧你";

        Cookies.set("token", token);
        navigate("/");
      });
  };

  return (
    <section>
      <form onSubmit={handleLogin}>
        <label>
          Identifiant
          <input type="text" name="identifiant" />
        </label>

        <label>
          Mot de passe
          <input type="password" name="password" />
        </label>

        <input type="submit" />
      </form>
    </section>
  );
};

export default Login;
