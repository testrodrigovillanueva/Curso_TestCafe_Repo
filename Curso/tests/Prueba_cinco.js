import { Selector, userVariables } from 'testcafe';
import XPathSelector from './xpath-selector';
import Funciones  from './page-model2'

let tiempo=1000

fixture('Empezando con TestCafe')
    .page(userVariables.url);
    //.page("https://testpages.herokuapp.com/styled/basic-html-form-test.html");

test('Prueba Página testingQA 1', async t =>{   
       
        await Funciones.T_max()
        await Funciones.T_texto_xpath("//input[contains(@name,'username')]",userVariables.nombre)
        //await Funciones.T_texto_xpath("//input[contains(@name,'username')]","Juan Perez")
        await Funciones.T_tiempo(3000)
        //await t.takeScreenshot()
});

test.page("https://testingqarvn.com.es/datos-personales/")
('Prueba De Texto ', async t =>{   
       
    await Funciones.T_max()
    //await Funciones.T_texto_xpath("//input[contains(@name,'username')]",userVariables.nombre)
    //await Funciones.T_texto_xpath("//input[contains(@name,'username')]","Juan Perez")
    await Funciones.T_texto("#wsf-1-field-21","Rodrigo",0.5)
    await Funciones.T_texto_limpiar("#wsf-1-field-21","Villanueva",0.5)
    await Funciones.T_texto_limpiar_xpath("//input[contains(@id,'wsf-1-field-21')]","Nieto",0.5)
    await Funciones.T_tiempo(1000)
    //await t.takeScreenshot()
});

test('POM Click', async t =>{   
       
    await Funciones.T_max()
    await Funciones.T_click_xpath("//input[contains(@name,'username')]",0.1)
    await Funciones.T_click_derecho_xpath("//input[contains(@type,'reset')]",0.1)
    await Funciones.T_tiempo(4000)
    // await t.takeScreenshot()
});

test('Prueba Página testingQA 2', async t =>{   
       
    await Funciones.T_max()
    await Funciones.T_texto_xpath("//input[contains(@name,'username')]","Rodrigo")
    await Funciones.T_tiempo(2000)
    //await t.takeScreenshot()
});


test('Prueba Página testingQA 3', async t =>{   
       
    await Funciones.T_max()
    await Funciones.T_texto_xpath("//input[contains(@name,'username')]","Rodrigo")
    await Funciones.T_tiempo(2000)
    //await t.takeScreenshot()
});

test('Prueba Página testingQA 4', async t =>{   
       
    await Funciones.T_max()
    await Funciones.T_texto_xpath("//input[contains(@name,'username')]","Rodrigo")
    await Funciones.T_tiempo(2000)
    //await t.takeScreenshot()
});

test('Prueba Página testingQA 5', async t =>{   
       
    await Funciones.T_max()
    await Funciones.T_texto_xpath("//input[contains(@name,'username')]","Rodrigo")
    await Funciones.T_tiempo(2000)
    //await t.takeScreenshot()
});







