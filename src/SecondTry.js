import { useState } from 'react';
import { getTermIndexes } from './helpers';

function SecondTry() {
  const [value, setValue] = useState('');

  const initialParagraphs = [
    'hello world',
    'lorem ipsum',
    'such a lovely lovely day',
    'crazy potatoes running on a field',
    'attention please',
    'five of us and five of you',
  ];

  const hightlightSearch = (string, searchStr) =>
    `<p>${string.replace(new RegExp(searchStr, 'gi'), (matched) => {
      if (!matched) return '';
      return `<span style="background-color: yellow">${matched}</span>`;
    })}</p>`;

  return (
    <div>
      <fieldset>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          id='search-two'
          placeholder='search what you want'
          autoComplete='off'
        />
        <legend htmlFor='search-two'>Search</legend>
      </fieldset>
      <div
        dangerouslySetInnerHTML={{
          __html: initialParagraphs.reduce(
            (finalString, paragraph) =>
              finalString + hightlightSearch(paragraph, value),
            ''
          ),
        }}
      />
    </div>
  );
}

export default SecondTry;
