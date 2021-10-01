import '../styles/skill-code.scss';

type SkillCodeProps = {
  code: string;
} 

export function SkillCode(props: SkillCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code)
  }

  return (
    <button className="skill-code" onClick={copyRoomCodeToClipboard}>
      <span>Skill# {props.code}</span>
    </button>
  )
}