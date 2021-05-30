import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo((props) => {
  //const [inputTitle, setInputTitle] = useState({ title: '', amount: '' });

  const [enterdtitle, setEnteredTitle] = useState('');
  const [enteredamount, setEnteredAmount] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddIngredient({ title: enterdtitle, amount: enteredamount });
  };

  const handleTitle = (e) => {
    setEnteredTitle(e.target.value);
    console.log(enterdtitle);
    //setInputTitle({ title: e.target.value });
  };

  const handleAmount = (e) => {
    setEnteredAmount(e.target.value);
    console.log(enteredamount);
    // setInputTitle({ amount: e.target.value });
  };
  return (
    <section className='ingredient-form'>
      <Card>
        <form onSubmit={submitHandler}>
          <div className='form-control'>
            <label htmlFor='title'>Name</label>
            <input
              type='text'
              id='title'
              value={enterdtitle}
              onChange={handleTitle}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='amount'>Amount</label>
            <input
              type='number'
              id='amount'
              value={enteredamount}
              onChange={handleAmount}
            />
          </div>
          <div className='ingredient-form__actions'>
            <button type='submit'>Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
