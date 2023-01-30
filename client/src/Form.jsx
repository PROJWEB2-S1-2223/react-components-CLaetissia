import {useState} from 'react';

function Form() {
return (
  <form>

      <p>
        <label>
        Nom: <input type="text" name="nom"></input>
        </label>
      </p>
      <p>
      <button type="submit">Ajouter</button>
      </p>
    </form>
)
}

export default Form;
