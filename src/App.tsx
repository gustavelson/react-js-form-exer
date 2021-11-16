import React, { useState } from 'react';

const App = () => {

  const [name, setName] = useState('jamal');
  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const [sname, setSName] = useState('santos');
  const inputChangeS = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSName(event.target.value);
  };
  const [age, setAge] = useState('');
  const inputChangeA = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <div>
        Nome:
        <input type="text"  value={name} onChange={inputChange}/>
      </div>

      <div>
        Sobrenome:
        <input type="text"  value={sname} onChange={inputChangeS}/>
      </div>

      <div>
        Idade:
        <input type="text" value={age} onChange={inputChangeA}/>
      </div>

      <hr/>

      Olá {name} {sname}, tudo bem?<br/>
      Você tem {age} anos.
    </div>
  );
}

export default App;