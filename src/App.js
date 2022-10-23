import { useState } from 'react';
import SecondTry from './SecondTry';
import { getTermIndexes } from './helpers';

function App() {
  const [term, setTerm] = useState('');

  const handle = (e) => {
    const { value } = e.target;
    setTerm(value);
  };

  const string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ';

  const conditionalRender = () => {
    return (
      <div>
        {[...string].map((el, index) => {
          if (getTermIndexes(string, term).includes(index))
            return (
              <span
                key={index}
                style={{ color: 'red' }}
              >
                {el}
              </span>
            );
          return el;
        })}
      </div>
    );
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        padding: '2rem',
      }}
    >
      <fieldset>
        <legend htmlFor='search'>Search</legend>
        <input
          onChange={handle}
          value={term}
          id='search'
          placeholder='search what you want'
          autoComplete='off'
        />
      </fieldset>
      {conditionalRender()}
      <SecondTry />
    </div>
  );
}

export default App;
