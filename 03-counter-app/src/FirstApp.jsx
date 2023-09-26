import PropTypes from 'prop-types';

//Siempre que sea posible se debe colocar las funciones fuera para que no se rendericen todo el tiempo
/*const getResult = (a, b) => {
    return a + b;
}*/

export const FirstApp = ({ title, subTitle, name }) => {

    return (
        <>
            {/*<h1>{ getResult(1, 10) }</h1>*/}
            <h1 data-testid="test-title">{ title }</h1>
            <p>{ subTitle }</p>
            <p>{ subTitle }</p>
            <p>{ name }</p>
        </>
      
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}
//Los default props entran antes de los propTypes
FirstApp.defaultProps = {
    name: 'Bryan',
    subTitle: 'No hay subtítulo',
    title: 'No hay título',
}