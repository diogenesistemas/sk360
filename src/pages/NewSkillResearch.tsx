import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';

import '../styles/auth.scss';

export function NewSkillResearch() {

  const {user} = useAuth();

    return (
    <div id="page-auth">
      <aside>
        <strong>Crie seu grágico de habilidades</strong>
        <p>Produzido para Talk sobre soft Skills</p>
      </aside>
      <main>
        <div className="main-content">
         <h1>{user?.name}</h1>
         <h2>Fazer avaliação</h2>
          <form>
            {/* <input 
              type="text"
              placeholder="Digite o código da sala"
            /> */}
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
          <p>
            Quer fazer uma nova avaliação? <Link to="/">clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
    )
}