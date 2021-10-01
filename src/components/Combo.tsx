import {  SelectHTMLAttributes } from "react";
import '../styles/combo.scss'

type ComboProps = SelectHTMLAttributes<HTMLSelectElement>;

export const Combo = (props:ComboProps) => {
  const options = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
  ]

  // const [selectedOption, setSelectedOption] = useState(options[0]);

  return  (
    <>
     <select

       {...props}
        // value={props.value}
        // onChange={(e) => setSelectedOption(e.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
}