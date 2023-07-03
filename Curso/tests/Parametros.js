import { Selector } from 'testcafe';
import XPathSelector from './xpath-selector';
import { ClientFunction } from 'testcafe';
import xpathSelector from './xpath-selector';
import Funciones  from './page-model2'

let tiempo=1000
let sp=0.1
const datos=['Luis','Perez','luis@gmail.com','88888','Dirección demo']

fixture('Empezando con TestCafe')
    .page('https://testingqarvn.com.es/datos-personales/');

test('Parametros Uno', async t => {
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
    await Funciones.T_texto_limpiar(nom,`${datos[0]}`,sp) 
    await Funciones.T_texto_limpiar(ap,`${datos[1]}`,sp)
    await Funciones.T_texto_limpiar(email,`${datos[2]}`,sp)
    await Funciones.T_texto_limpiar(tel,`${datos[3]}`,sp)
    await Funciones.T_texto_limpiar(dir,`${datos[4]}`,sp)

    await Funciones.T_tiempo(2000)
})


