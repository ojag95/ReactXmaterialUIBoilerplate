import {createMuiTheme} from '@material-ui/core/styles';
//Especifica el tema Global de la aplicacion
const themeConfig=createMuiTheme({
    palette:{
        type:'light',
        primary:{
            light:'#58a5f0',
            main:'#0568AE',
            dark:'#004c8c'
        },
        secondary:{
            light:'#61ceff',
            main:'#029ddb',
            dark:'#006fa9'
        },
        error:{
            light:'#e57373',
            main:'#f44336',
            dark:'#d32f2f'
        }
    }
})

export default themeConfig;