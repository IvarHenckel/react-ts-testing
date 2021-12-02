import React from 'react';
import TextField from './components/TextField';
import { Counter } from './components/Counter';

/*React.FC is a react functional component.*/
const App: React.FC = () => {
  return (
    <div>
      <h1>Hello world!</h1>
      <TextField text="kottbullar" person={{firstName: "Gunnar", lastName: "Solskjaer"}}/>
      <Counter>
        {(count, setCount) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>
              +
            </button>
          </div>
        )}
      </Counter>
    </div>
  );
  /*Since we told react what type we will be using for the props. It now complains if we don't insert that prop namely text.*/
}

export default App;
