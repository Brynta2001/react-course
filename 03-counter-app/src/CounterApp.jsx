import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {
    //En useState se puede poner un valor inicial
    const [ counter, setCounter ] = useState(value)
    //Cuando hay un cambio en el estado se vuelve a disparar el funtional component

    const handleAdd = () => { 
        //console.log(event)
        //setCounter( (c) => c + 1 )
        setCounter( counter + 1 )
    }

    const handleSubtract = () => {
        setCounter( counter - 1 )
    }

    const handleReset = () => {
        setCounter( value )
    }

  return (
    <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>

        <button onClick={ handleAdd }> +1 </button>
        <button onClick={ handleSubtract }> -1 </button>
        <button aria-label='btn-reset' onClick={ handleReset }> Reset </button>
    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
