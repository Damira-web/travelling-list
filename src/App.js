import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {

  const [essential, setEssential] = useState(data);

  const removeEssential = (id) => {
    let newEssential = essential.filter(essential => essential.id!==id);
    setEssential(newEssential)
  }

  return (
    <div>
      <div className='container'>
        <h1> Travell list of {essential.length} items</h1>
      </div>

      {essential.map ((element => {
        const {id, essential, image} = element;

        return (<div key={id}>
          <div className='container'>
            <h2>{id} - {essential}</h2>
          </div>

          <div className='container'>
            <img src={image} width="300px" alt='essential'/>
          </div>

          <div className='container'>
            <button className='btnRemove' onClick={() => removeEssential (id)}>Remove</button>
          </div>

          </div>)
      }))}

      <div className='container'>
        <button className='btnDelete' onClick = { () => setEssential([])}>Delete all</button>
      </div>

    </div>
  );
}

export default App;