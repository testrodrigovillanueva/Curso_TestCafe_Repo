import { Selector } from 'testcafe';
import XPathSelector from './xpath-selector';
import { ClientFunction } from 'testcafe';
import Funciones  from './page-model2'

let tiempo=1000





fixture('Empezando con TestCafe')
    .page('https://js.devexpress.com/');


    test('Scroll element into view', async t => {
        const target =XPathSelector("(//a[@class='tab-button'][contains(.,'Learn More')])[5]");
    
        await t
        .maximizeWindow()
        .wait(tiempo)
        .scrollIntoView(target,{speed:0.1})
        .click(target,{speed:0.1})
        .wait(tiempo)
    });

    test.only('Scroll element into view Dos', async t => {
        const target =XPathSelector("(//a[@class='tab-button'][contains(.,'Learn More')])[5]");

        await Funciones.T_max(1000)
        await Funciones.T_scrollSel_xpath("(//a[@class='tab-button'][contains(.,'Learn More')])[5]",0.3)
        //await Funciones.T_click(target,0.2)
        await Funciones.T_scrollxy(0,100,0.2)
        await Funciones.T_scrollxy(0,1500,0.2)

    
        // await t
        // .maximizeWindow()
        // .wait(tiempo)
        // .scrollIntoView(target,{speed:0.1})
        // .click(target,{speed:0.1})
        // .wait(tiempo)
    });

