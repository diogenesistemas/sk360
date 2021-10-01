import '../styles/skill-code.scss';

type RoomCodeProps = {
  code: string;
} 

export function SkillCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code)
  }

  return (
    <button className="skill-code" onClick={copyRoomCodeToClipboard}>
      <span>Sala #{props.code}</span>
    </button>
  )
}