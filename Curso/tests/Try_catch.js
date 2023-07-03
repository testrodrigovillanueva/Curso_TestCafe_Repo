import { Selector } from 'testcafe';
import XPathSelector from './xpath-selector';
import { ClientFunction } from 'testcafe';
import xpathSelector from './xpath-selector';
import Funciones  from './page-model2'

let tiempo=1000
let sp=0.9

fixture('Empezando con TestCafe')
    .page('https://devexpress.github.io/testcafe/example/');

test('Try Catch Uno', async t => {
    await Funciones.T_max()
    // const name=XPathSelector("//input[contains(@id,'developer-name13')]")
    // await Funciones.T_texto_limpiar(name,"Juan",0.2)

    try{
        const name=XPathSelector("//input[contains(@id,'developer-name13')]")
        await Funciones.T_texto_limpiar(name,"Pedro",0.2)
    
    }catch(error){
        console.log(error)
        console.log("No se encuentra el elemento pero la prueba ")
    }

    await Funciones.T_click_xpath("//input[contains(@id,'remote-testing')]")
    await Funciones.T_tiempo(2000)
   
})


