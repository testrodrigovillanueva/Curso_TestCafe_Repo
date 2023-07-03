import { Selector } from 'testcafe';
import XPathSelector from './xpath-selector';
import { ClientFunction } from 'testcafe';
import xpathSelector from './xpath-selector';
import Funciones  from './page-model2'
import dotenv from 'dotenv'

let tiempo=1000
let sp=0.3
const datos=['Rodrigo','Villanueva','rod@gmail.com','78876','Dirección demo','javascript']
dotenv.config()
//Web  https://www.npmjs.com/package/dotenv

fixture('Empezando con TestCafe')
    .page('https://testingqarvn.com.es/datos-personales/');

test('Parametros tres', async t => {
    await Funciones.T_max()
    const nom=XPathSelector("//input[contains(@id,'wsf-1-field-21')]")
    const ap=XPathSelector("//input[contains(@id,'wsf-1-field-22')]")
    const email=XPathSelector("//input[contains(@id,'wsf-1-field-23')]")
    const tel=XPathSelector("//input[contains(@id,'wsf-1-field-24')]")
    const dir=XPathSelector("//textarea[contains(@id,'wsf-1-field-28')]")

    // await Funciones.T_texto_limpiar(nom,"Rodrigo",0.3)
    // await Funciones.T_texto_limpiar(ap,"Villanueva",0.3)
    // await Funciones.T_texto_limpiar(email,"rodrigo@gmail.com",0.3)
    // await Funciones.T_texto_limpiar(tel,"5785435",0.3)
    // await Funciones.T_texto_limpiar(dir,"Dirección uno",0.3)
    
    //CODIGO ASCII 96 `
    console.log(process.env)
    await Funciones.T_texto_limpiar(nom,process.env.nombre,sp)
    await Funciones.T_texto_limpiar(ap,process.env.apellido,sp)
    await Funciones.T_texto_limpiar(email,process.env.email,sp)
    await Funciones.T_texto_limpiar(tel,process.env.telefono,sp)
    await Funciones.T_texto_limpiar(dir,process.env.dir,sp)
    await Funciones.T_tiempo(2000)
})


