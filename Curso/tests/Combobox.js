import { Selector } from 'testcafe';
import XPathSelector from './xpath-selector';
import { ClientFunction } from 'testcafe';
import xpathSelector from './xpath-selector';
import Funciones  from './page-model2'

let tiempo=500
let sp=0.5

fixture('Empezando con TestCafe')
    .page('https://devexpress.github.io/testcafe/example/');

test('Opcion select combobox', async t => {
    await Funciones.T_max()
    await Funciones.T_comboBox("//select[contains(@id,'preferred-interface')]","Both",sp)
    await Funciones.T_tiempo(tiempo)
    await Funciones.T_comboBox("//select[contains(@id,'preferred-interface')]","Command Line",sp)
    await Funciones.T_tiempo(tiempo)
    await Funciones.T_comboBox("//select[contains(@id,'preferred-interface')]","JavaScript API",sp)
    await Funciones.T_tiempo(tiempo)
});


test.only('Opcion select combobox dos', async t => {  
    await Funciones.T_Open_Window("https://testingqarvn.com.es/combobox/")
    await Funciones.T_max()
    await Funciones.T_texto_limpiar_xpath("//input[contains(@id,'wsf-1-field-45')]","Rodrigo")
    await Funciones.T_texto_limpiar_xpath("//input[contains(@id,'wsf-1-field-46')]","Villanueva")
    await Funciones.T_scrollSel_xpath("//select[contains(@id,'wsf-1-field-53')]")
    await Funciones.T_tiempo(2000)
    await Funciones.T_comboBox("//select[contains(@id,'wsf-1-field-53')]","Linux",sp)
    await Funciones.T_comboBox("//select[contains(@id,'wsf-1-field-53')]","Mac",sp)
    await Funciones.T_comboBox("//select[contains(@id,'wsf-1-field-53')]","Windows",sp)
    await Funciones.T_comboBox("//select[contains(@id,'wsf-1-field-53')]","Mac",sp)

});








