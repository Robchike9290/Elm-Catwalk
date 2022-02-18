import React, {useState} from 'react';

const CharacteristicsAdd = ((props) => {
  const [select, setSelect] = useState('')
  // console.log('CHARACTERISTICS', props)
  const charMeaning = {
    'Size': ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too wide'],
    'Width': ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
    'Comfort': ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Confortable', 'Perfect'],
    'Quality': ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
    'Length': ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
    'Fit': ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']
  }

  return(
    <div>{props.characteristic}
      <div>{select ? select : 'None Selected'}
      <table>
        <thead>
        <tr>
          <td><input type="radio" value="1" name="choice" onClick={()=>setSelect(charMeaning[props.characteristic][0])}/> </td>
          <td><input type="radio" value="2" name="choice" onClick={()=>setSelect(charMeaning[props.characteristic][1])}/> </td>
          <td><input type="radio" value="3" name="choice" onClick={()=>setSelect(charMeaning[props.characteristic][2])}/> </td>
          <td><input type="radio" value="4" name="choice" onClick={()=>setSelect(charMeaning[props.characteristic][3])}/> </td>
          <td><input type="radio" value="5" name="choice" onClick={()=>setSelect(charMeaning[props.characteristic][4])}/> </td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>{charMeaning[props.characteristic][0]}</td>
          <td>{charMeaning[props.characteristic][1]}</td>
          <td>{charMeaning[props.characteristic][2]}</td>
          <td>{charMeaning[props.characteristic][3]}</td>
          <td>{charMeaning[props.characteristic][4]}</td>
        </tr>
        </tbody>
      </table>
      </div>
    </div>
  )
})

export default CharacteristicsAdd;