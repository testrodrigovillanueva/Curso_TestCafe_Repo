import { Selector } from 'testcafe';
import XPathSelector from './xpath-selector';
import { ClientFunction } from 'testcafe';
import xpathSelector from './xpath-selector';
import Funciones  from './page-model2'

let tiempo=1000
let sp=0.3
const datos=['Rodrigo','Villanueva','rod@gmail.com','78876','Dirección demo','PyThon']

fixture('Empezando con TestCafe')
    .page('https://testingqarvn.com.es/prueba-de-campos-checkbox/');

test('Parametros Dos', async t => {
    await Funciones.T_max()
    const nom=XPathSelector("//input[contains(@id,'wsf-1-field-29')]")
    const ap=XPathSelector("//input[contains(@id,'wsf-1-field-30')]")
    const email=XPathSelector("//input[contains(@id,'wsf-1-field-31')]")
    const tel=XPathSelector("//input[contains(@id,'wsf-1-field-32')]")
    const dir=XPathSelector("//textarea[contains(@id,'wsf-1-field-33')]")

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

    if(`${datos[5]}`.toUpperCase() == "PHP"){
        await Funciones.T_click_xpath("//label[contains(@id,'wsf-1-label-36-row-1')]",sp)
    }
    else if(`${datos[5]}`.toUpperCase() == "PYTHON"){
        await Funciones.T_click_xpath("//label[contains(@id,'wsf-1-label-36-row-2')]",sp)
    }
    else if(`${datos[5]}`.toUpperCase() == "JS"){
        await Funciones.T_click_xpath("//label[contains(@id,'wsf-1-label-36-row-3')]",sp)
    }
    else{
        await Funciones.T_click_xpath("//label[contains(@id,'wsf-1-label-36-row-1')]",sp)
    }


    await Funciones.T_tiempo(2000)
})


