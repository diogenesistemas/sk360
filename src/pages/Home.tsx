import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router';

// import ilustrationImg from '../assets/images/illustration.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';

import '../styles/auth.scss';

export function Home() {

const history = useHistory();
const {user, signInWithGoogle} = useAuth();
const [skillCode, setSkillCode] = useState('');

async function handleSkillResearch() {

  if(!user){
    await signInWithGoogle()
  }
  
  history.push('/skills/new')
}

async function handleJoinSkill(event: FormEvent){
  event.preventDefault();

  if(skillCode.trim()===''){
    return;
  }

  const skillRef = await database.ref(`skills/${skillCode}`).get();

  if(!skillRef.exists()){
    alert('Skill dos not exists');
    return;
  }

  history.push(`/skills/${skillCode}`)
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
          <div className="separator">ou visualize uma avaliação</div>
          <form onSubmit={handleJoinSkill}>
            <input 
              type="text"
              placeholder="Digite o código da avaliação"
              onChange={event=>setSkillCode(event.target.value)}
              value={skillCode}
            />
            <Button type="submit">
              Visualizar avaliação
            </Button>
          </form>
        </div>
      </main>
    </div>
    )
}