 import { useEffect } from 'react';
import { FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom'

import { RadarChart } from '../components/RadarChart';
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';

import '../styles/skill.scss';

type FirebaseSkills = Record<string, 
 String[]
>

type SkillParams = {
  id: string;
}

export function Skill(){
  const { user } = useAuth();
  const params = useParams<SkillParams>();
  const [newQuestion, setNewQuestion] = useState('');
  const [skills, setSkills] = useState<String[]>([])
  const [title, setTitle] = useState('');

  const skillId = params.id;


  useEffect(() => {
    const skillRef = database.ref(`skills/${skillId}`);

    skillRef.once('value', skill => {
      const databaseSkill = skill.val();

      const firebaseSkillss: FirebaseSkills = databaseSkill ?? {};
  
      setSkills(firebaseSkillss.data)
   
    })
  }, [skillId]);

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault();


    if (!user) {
      throw new Error('You must be logged in');
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false
    };

  }

  return (
    <div id="page-skill">
      <header>
        <div className="content">
        <div className="form-footer">
            { user ? (
              <div className="user-info">
                <img src={user.avatar} alt={user.name} />
                <span>{user.name}</span>
              </div>
            ) : (
            <>
            </>
            ) }
          </div>
          {/* <RoomCode code={roomId} /> */}
        </div>
      </header>

      <main>
        <div className="room-title">
           
        </div>

        <RadarChart data={skills}/>
      </main>
    </div>



  );
}