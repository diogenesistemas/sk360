import { useHistory } from 'react-router';

// import ilustrationImg from '../assets/images/illustration.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';

import '../styles/auth.scss';

export function Home() {

const history = useHistory();
const {user, signInWithGoogle} = useAuth();

async function handleSkillResearch() {

  if(!user){
    await signInWithGoogle()
  }
  
  history.push('/skills/new')
}

    return (
    <div id="page-auth">
      <aside>
        <strong>Crie seu grágico de habilidades</strong>
        <p>Produzido para Talk sobre soft Skills</p>
      </aside>
      <main>
        <div className="main-content">
          <button onClick={handleSkillResearch} className="create-chart">
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua havaliação com o Google
          </button>
          <form>
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
    )
}