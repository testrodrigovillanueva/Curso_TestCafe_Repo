import { Selector } from 'testcafe';
import XPathSelector from './xpath-selector';

let tiempo=1000


fixture('Empezando con TestCafe')
    .page('https://js.devexpress.com');



test('Hover test', async t => {
    await t
        .maximizeWindow()
        .wait(tiempo)
        .hover('.map-container',{speed:0.1})
        .wait(tiempo)
        .hover('#treelist',{speed:0.1})       
        .wait(2000)
});
