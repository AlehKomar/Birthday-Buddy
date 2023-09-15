import React from 'react'
import { useState } from 'react'

import data from './data'
import List from './List'

const App = () => {
  const [people, setPeople] = useState(data)
  console.log(data)
  console.log('people', people)
  return (
    <>
      <main>
        <section className='container'>
          <h3
            style={{
              textAlign: 'center',
              fontWeight: 'bold'
            }}
          >
            {people.length} Birthdays Today
          </h3>
          <hr style={{ marginTop: '-1rem', marginBottom: '1rem' }} />
          <List people={people} />
          <button
            type='button'
            className='btn btn-block'
            onClick={() => setPeople([])}
          >
            clear all
          </button>
        </section>
      </main>
    </>
  )
}
export default App
