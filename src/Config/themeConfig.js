import {createMuiTheme} from '@material-ui/core/styles';
//Especifica el tema Global de la aplicacion
const themeConfig=createMuiTheme({
    palette:{
        type:'light',
        primary:{
            light:'#3a5a6c',
            main:'#0c3141',
            dark:'#00091b'
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