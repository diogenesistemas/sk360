import {FormEvent, useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '../components/Button';
import { Combo } from '../components/Combo';
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';

import '../styles/auth.scss';

export function NewSkillResearch() {
  const {user} = useAuth();
  const history = useHistory();
  const [newSkill, setNewSkill] = useState(Array(8).fill('0')); 

  async function handleCreateSkillResearch(event: FormEvent) {
    event.preventDefault();
    // if(newSkill.trim()===''){
    //   return;
    // }
    
    const skillRef = database.ref('skills');

    const firebaseSkill = await skillRef.push({
      data: newSkill,
      authorId: user?.id,
    })

    history.push(`/skills/${firebaseSkill.key}`)
  }

  function handleStateComboo(e: React.ChangeEvent<HTMLSelectElement>,position:number){
    let copyNewSkill = newSkill.slice();
    copyNewSkill[position] = e.target.value;
    setNewSkill(copyNewSkill);
  }

  function renderCombo(position:number) {
    return (
      <Combo
          value={newSkill[position]}
          onChange={(e) => handleStateComboo(e, position)}
      />
    );    
  }

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
          <form onSubmit={handleCreateSkillResearch} className="registerForm_Container">
            {/* <input 
              type="text"
              placeholder="Digite um identificador"
              onChange={event => setNewSkill(event.target.value)}
              value={newSkill}
            /> */}
            {renderCombo(0)}
            {renderCombo(1)}
            {renderCombo(2)}
            {renderCombo(3)}
            {renderCombo(4)}
            {renderCombo(5)}
            {renderCombo(6)}
            {renderCombo(7)}
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