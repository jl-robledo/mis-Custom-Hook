import { useState } from "react";


export const useForm = ( initialState = {} ) => {       // recibe un objeto vacio para completar los campos
    
    const [ values , setValues ] = useState(initialState); 

    // reseteamos el formulario
    const reset = () => {
        setValues( initialState );
    }

    // definicion de handleInputChange
    const handleInputChange = ( { target } ) => { // desestructuramos el evento y nos quedamos con el target
        // console.log(target.name);
        // console.log(e.target.value);
        setValues({
            ...values,
            [ target.name ] : target.value
        });
    }

    return [ values , handleInputChange , reset ];

}
