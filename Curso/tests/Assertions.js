import { Selector } from 'testcafe';
import XPathSelector from './xpath-selector';
import { ClientFunction } from 'testcafe';
import xpathSelector from './xpath-selector';
import Funciones  from './page-model2'

let tiempo=1000
let sp=0.9

fixture('Empezando con TestCafe')
    .page('https://devexpress.github.io/testcafe/example/');

test('Assertions Uno', async t => {
    await Funciones.T_max()
    //Validar un selector  Name
    // await t.expect(Selector('#developer-name').filterVisible().exists).ok();
    //await Funciones.T_validar_selector_existe('#developer-name')
    await Funciones.T_validar_selector_existe_xpath("//input[contains(@id,'developer-name')]")
    await Funciones.T_texto_limpiar_xpath("//input[contains(@id,'developer-name')]","Juan",sp)
    
    //Contains 
    const text1=XPathSelector("//p[contains(.,'This webpage is used as a sample in TestCafe tutorials.')]")
   
    await Funciones.T_validar_contiene_texto(text1,"This web")
    

    //Metodos
    //Eql 
    await t.expect(20).eql(20);
    await Funciones.T_validar_igualdad(30,30)
    await Funciones.T_validar_igualdad("Rodrigo","Rodrigo")
    
    //notEql
    await t.expect(15).notEql(17);
    await Funciones.T_validar_diferentes("Rodrigo","Rodrigo1")

    //gt(x>y)
    await t.expect(21).gt(20);
    await Funciones.T_validar_mayorxy(10,5)

    //gte
    await Funciones.T_validar_mayor_igualxy(10,10)

    //lte
    await Funciones.T_validar_menor_igualxy(9,10)
    
    // contains 
    await t.expect(['x','y']).contains('y');
    await t.expect('Username: steve@example.com').contains('Username');
    await t.expect('Rodrigo').contains('Ro');
    await Funciones.T_validar_contiene_xy("Rodrigo","Ro")

    //No contiene
    await Funciones.T_validar_no_contiene_xy("Rodrigo","Ro4")

    //Numeric Range
    await t.expect(10).within(1, 20); // success
    // await t.expect(22).within(1, 20); // failure
    await t.expect(18).within(1, 20); // success

    //notWithin
    await t.expect(24).notWithin(1, 20); // success
    // await t.expect(10).notWithin(1, 20); // failure

})


test.only('Assertions Dos', async t => {

    const text1=XPathSelector("//input[contains(@id,'developer-name13')]")
    // await t.expect(text1.exists).ok()

    const visibleSelectors = Selector(text1).filterVisible();
    //console.log(visibleSelectors)

    if(visibleSelectors){
        console.log("El xpath existe para poder localizarlo")
        // await Funciones.T_texto_limpiar(text1,"Rodrigo Villanueva Nieto",0.2)
    }else{
        console.log("No existe el Xpath")
    }
    
    

})

