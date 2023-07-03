import { Selector } from 'testcafe';
import XPathSelector from './xpath-selector';
import { ClientFunction } from 'testcafe';
import xpathSelector from './xpath-selector';
import Funciones  from './page-model2'
import dotenv from 'dotenv'

let tiempo=1000
let sp=0.6
const datos=['Rodrigo','SuperSecretPassword!','password123']
const rand=datos[(Math.random() * datos.length) | 0]
console.log(rand)
dotenv.config()
//Web  https://www.npmjs.com/package/node-xlsx

fixture('Empezando con TestCafe')
    .page('https://the-internet.herokuapp.com/login');

test('Intentos While', async t => {
    //await Funciones.T_max()
    const nom=XPathSelector("//input[contains(@id,'username')]")
    const ap=XPathSelector("//input[contains(@id,'password')]")    
  
    var bandera=true
    do{
        var rand=datos[(Math.random() * datos.length) | 0]
        console.log(rand)
        await Funciones.T_texto_limpiar(nom,"tomsmith",sp)
        await Funciones.T_texto_limpiar(ap,rand,sp)
        await Funciones.T_click_xpath("//button[@class='radius'][contains(.,'Login')]")
        const valor=await Funciones.T_valor_del_texto_xpath("//div[@id='flash']")      
        console.log(valor)
        var texto=await (valor.trim()).substring(0,25)
        console.log(texto)

        if(texto=="Your password is invalid!"){
            bandera=true
        }
        else if(texto!="Your password is invalid!"){
            bandera=false
        }

    }while(bandera==true);

    
    
    await Funciones.T_tiempo(200)
 
})


