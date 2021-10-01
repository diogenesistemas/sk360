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

  function renderCombo(position:number, label:string) {
    return (
      <>
      <span>{label}</span>
      <Combo
          value={newSkill[position]}
          onChange={(e) => handleStateComboo(e, position)}
      />
      </>
    );    
  }

    return (
    <div id="page-auth">
      <aside>
        <strong>Crie seu gráfico de habilidades</strong>
        <p>Produzido para Talk sobre soft Skills</p>
      </aside>
      <main>
        <div className="main-content">
          <header>
             <h1>{user?.name}</h1>
             <h2>Fazer avaliação</h2>
          </header>
   

           <form onSubmit={handleCreateSkillResearch} className="form-combo">
            {/* <input 
              type="text"
              placeholder="Digite um identificador"
              onChange={event => setNewSkill(event.target.value)}
              value={newSkill}
            /> */}

            {renderCombo(0, "Comunicação")}
            {renderCombo(1, "Liderança")}
            {renderCombo(2, "Ética")}
            {renderCombo(3, "Trabalho em equipe")}
            {renderCombo(4, "Adaptabilidade")}
            {renderCombo(5, "Gestão de tempo")}
            {renderCombo(6, "Criatividade")}
            {renderCombo(7, "Senso crítico")}
            <Button type="submit">
              Criar gráfico de habilidades
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