import { Selector } from 'testcafe';
import XPathSelector from './xpath-selector';
import { ClientFunction } from 'testcafe';
import xpathSelector from './xpath-selector';
import Funciones  from './page-model2'

let tiempo=100
let sp=0.6

fixture('Empezando con TestCafe')
    .page('https://demoqa.com/text-box');

test('Page Object Uno', async t => {
    await Funciones.T_texto('#userName','Rodrigo')
    await Funciones.T_texto('#userEmail','rodrigo@example.com')    
    await Funciones.T_texto('#currentAddress','Dirección uno')
    await Funciones.T_texto('#permanentAddress','Dirección dos')
    await Funciones.T_click('#submit')
});

test.only('Page Object Dos', async t => {
    const name=XPathSelector("//input[contains(@id,'userName')]")
    const email=XPathSelector("//input[contains(@id,'userEmail')]")
    const dir1=XPathSelector("//textarea[contains(@id,'currentAddress')]")
    const dir2=XPathSelector("//textarea[contains(@id,'permanentAddress')]")
    const bt=XPathSelector("//button[contains(@id,'submit')]")

    await Funciones.T_max()
    await Funciones.T_texto(name,'Rodrigo')
    await Funciones.T_key('ctrl+a')
    await Funciones.T_texto(email,'rodrigo@example.com')
    await Funciones.T_tiempo()    
    await Funciones.T_texto(dir1,'Dirección uno')
    await Funciones.T_texto_limpiar(dir2,'Dirección dos')
    await Funciones.T_key('tab')
    await Funciones.T_tiempo()
    await Funciones.T_scrollSel(bt)
    await Funciones.T_scrollxy(0,800)
    await Funciones.T_click(bt)
    await Funciones.T_validar_url('https://demoqa.com/text-box')
});






