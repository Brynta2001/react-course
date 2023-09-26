import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirstApp />', () => {
    //Match con el snapshot significa que se le toma una fotografía al componente y si algo cambia la prueba falla
    //La prueba de snapshot no es muy conveniente durante el desarrollo
    /*test('debe hacer match con el snapshot', () => {
        const title = 'Hola, soy Bryan';
        const { container } = render( <FirstApp title={ title } /> );

        expect( container ).toMatchSnapshot();

    });*/

    test('debe mostrar el título en un h1', () => {
        const title = 'Hola, soy Bryan';
        const { container, getByText, getByTestId } = render( <FirstApp title={ title } /> );
        //getByText busca el texto que se le pasa por parámetro dentro del snapshot
        expect( getByText(title) ).toBeTruthy();

        //const h1 = container.querySelector('h1');
        //expect( h1.innerHTML ).toContain( title );

        //expect( getByTestId('test-title') ).toBeTruthy();
        expect( getByTestId('test-title').innerHTML ).toBe(title);
    });

    test('debe mostrar el subtítulo enviado por props', () => {
        const title = 'Hola, soy Bryan';
        const subTitle = 'Soy un subtítulo';
        const { getAllByText } = render( 
            <FirstApp 
                title={ title }
                subTitle={ subTitle }
            /> 
        );
        //expect( getByText(subTitle) ).toBeTruthy();
        expect( getAllByText(subTitle).length ).toBe(2);
    })
});