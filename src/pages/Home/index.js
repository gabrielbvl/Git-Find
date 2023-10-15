import { useState } from "react";
import Header from "../../components/Header";
import ListRepository from "../../components/ListRepositorys";
import background from "../../assets/background.png";

import "./styles.css";

function App() {
  const [user, setUser] = useState("");
  const [currentUser, setCurrentUser] = useState([]);
  const [repos, setRepos] = useState([]);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    if (newUser.name) {
      const { avatar_url, name, bio, login } = newUser;
      setCurrentUser({ avatar_url, name, bio, login });

      const reposData = await fetch(
        `https://api.github.com/users/${user}/repos`
      );
      const newRepos = await reposData.json();

      if (newRepos.length) {
        setRepos(newRepos);
      }
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="contentBodyPage">
        <img src={background} className="background" alt="backgroundPage" />
        <div className="rightBodyPage">
          <div>
            <input
              name="user"
              value={user}
              onChange={(event) => setUser(event.target.value)}
              placeholder="@username"
            />
            <button onClick={handleGetData}>Buscar</button>
          </div>
          {currentUser.name ? (
            <>
              <div className="contentProfile">
                <img src={currentUser.avatar_url} className="profile" />
                <div>
                  <h3>{currentUser.name}</h3>
                  <span>@{currentUser.login}</span>
                  <p>{currentUser.bio}</p>
                </div>
              </div>
              <hr />
            </>
          ) : null}

          {repos.length ? (
            <div>
              <h3 className="repository"> Repositórios </h3>
              {repos.map((repo) => (
                <ListRepository
                  title={repo.name}
                  description={repo.description}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
