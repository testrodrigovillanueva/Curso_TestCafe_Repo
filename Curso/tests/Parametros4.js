import { Selector } from 'testcafe';
import XPathSelector from './xpath-selector';
import { ClientFunction } from 'testcafe';
import xpathSelector from './xpath-selector';
import Funciones  from './page-model2'
import dotenv from 'dotenv'

let tiempo=1000
let sp=0.6
const datos=['Rodrigo','Villanueva','rod@gmail.com','78876','Dirección demo','javascript']
dotenv.config()
//Web  https://www.npmjs.com/package/node-xlsx

fixture('Empezando con TestCafe')
    .page('https://testingqarvn.com.es/datos-personales/');

test('Parametros Excel', async t => {
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


    var XL=require("xlsx")
    var Libro=XL.readFile("Libro1.xlsx")
    var dato_xl=Libro.SheetNames;
    //console.log(dato_xl)
    const hoja=dato_xl[0]
    const excel=XL.utils.sheet_to_json(Libro.Sheets[hoja])
    console.log(excel)

    // for(const fila of excel){
    //     console.log(fila['nombre'])
    //     console.log(fila['apellido'])
    //     console.log(fila['email'])
    // }



    
    //CODIGO ASCII 96 `
    // console.log(process.env)
    for(const fila of excel){
        await Funciones.T_texto_limpiar(nom,fila['nombre'],sp)
        await Funciones.T_texto_limpiar(ap,fila['apellido'],sp)
        await Funciones.T_texto_limpiar(email,fila['email'],sp)
        await Funciones.T_texto_limpiar(tel,fila['tel'].toString(),sp)
        //await Funciones.T_texto_limpiar(tel,fila['tel'],sp)
        await Funciones.T_texto_limpiar(dir,fila['dir'],sp)
        await Funciones.T_tiempo(300)
    }
})


