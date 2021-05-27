import React from 'react';
import {withWidth,Typography} from '@material-ui/core';

/*  Utileria que permite mostrar el tamaño de la pantalla en formato de breakpoints:
    xs sm md lg xl 
*/

const ScreenSizer = (props) => {

    if(props.visual===true)
    {
        return (
            <div>
                <Typography variant="H6" color="initial">
                    Ancho: {props.width}
                </Typography>
            </div>
        )
    }
    else{
        return props.width;
    }
    
}

export default withWidth()(ScreenSizer);
