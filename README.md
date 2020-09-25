# udemyMarket

<-------------creacion  de base de datos fire base -------------> 

1. crear un proyecto en la pagina principal de firebase, 
2. ingresar a la consola. 
3. crear una base datos realtime. 
4. definir que es de prueba. 
5. ingresar a regalas y cambiar 
   {
       write: true,
       read: true
    } 
<-------------importar de un excel los datos -------------> 

// los datos deben estar en formato json  

{
    collections1:[
        {documentos1},
        {documentos2},
        ...
    ],
    collectons2[
        {documentos1.1},
        {documentos1.2},
        ...
        
    ],
    ...

}
     
6. se crea un archivo en excel con los datos a subir, se guarda en formato csv, separado por comas.
7. ingresar la pag 

     https://www.convertcsv.com/csv-to-json.htm

     a. cargar archivo. se ingresa nuestro archivo csv.
     b.copiamos el codigo que genera automaticamente. 
     c. ingresamos a  la siguiente pagina para corregir posibles errores

        https://jsonformatter.curiousconcept.com/

        1. pegamos el codigo generado anteriormente y le damos procesar, el nuevo codigo lo copiamos. 
8. pegamos el codigo generado en el editor de codigo. 
9. lo guardamos con al extencion .json
10. en la parte superior derecha en los puntos verticales, se da click y se seleccina la opcion de importar datos json, se busca el archivo donde se encuentra nuestra api Rest y se importan.



<-------------API rest con postman -------------> 

1. copiamos nuestro end point que se encuentra en firebase. es la url aque aperece en la base de datos. 

2. la pegamos y le agregamos la extencion .json "asi podemos verla desde un navegador"
3. abrimos postman. 
y lo pegamos en el servicio get. 

<-------------crear collection en postman -------------> 

4. en la parte superior izquiera dar clic en crear nueva collection 
5. al lado de la url que agregamos damos en la opcion save, la nombramos y guardamos en la coleccion creada. 
6. en la parte superior derecha se encuentra envairoment, le damos en editar envairoment.
7. en key o variable ponemos el nombre en este caso "url" y en value le pegamos la url de la api. 
8. guardamos
9. de nuevo en la seccion de enviroment seleccionamos el envairoment que creamos. 
10. en la parte que se pone la url se genera la siguiente sintaxis

            {{nombre de la variable}}nombre de la colection 

<-------------servicios GET POST  PUT -------------> 
<-------------servicios  POST   -------------> 
     sirve para crear nuevos documents o collections en la base de datos.

1. en postan se crea una nueva ventana, copiamos la url igual de en get, y se cambia el metodo a post. 

2. en la nueva ventana se ingresa:

   - body
    - raw
     - tipo de texto json.
3. copiamos en el espacio blanco la nueva collection en formato json

4. se da clic en send. y ya se debe evidenciar la nueva collecition en la base de datos. 

     " las reglas de la base de datos deben permintir la escritura"
5. guardamos el metodo POST  en la colletion creada en postman. 

<-------------servicios  PUT   -------------> 
         sirve para actualizar todo el documento

1. se crea una nueva pestaña en post man
2. se seleccina el metodo put. 
3. se copia la url igual que en los metodos anteriores. 
4. se le agrega en el url la el id del document o collections a actualizar 

        {{url}}collections/id.json

5.    - body
         - raw
             - tipo de texto json.
6. se copia el archivo json por el cual se piensa actualizar 

7. se da clic en send. y ya se debe evidenciar la actualizacion collecition en la base de datos. 

     " las reglas de la base de datos deben permintir la escritura"
8. guardamos el metodo POST  en la colletion creada en postman. 

<-------------servicios  PATCH    -------------> 
        actualiza una sola propiedad del json 
        o agrega una propiedad inexistente

1. los mismos pasos del anterior. 
2. 2 metodo patch
2. en el paso 6 solo se pega la propiedad del archivo json a actualizar

<-------------servicios  DELETE  -------------> 
1. los mismos pasos del anterior. 
2. 2 metodo DELETE
2. No se agrega nada


<-------------TOKEN DE IDENTIFICACION  -------------> 

1. En la pag de firebase se ingresa a authentication 
  - sing in method
2. habilitar provedoor de correo electronico 
3. ingresas a user 
 - agregar usuario 
4. se pone un correo como "admin@marketplace.com" y contraseña
5. ingresar:
  - firebase.com nueva pestaña
   - documentacion
    - referencias
     - desarrollo web
       - rest
        - autenticachion y gestion de usuarios.
         - sing up with email/password "parte derecha"
6. se copia el end point 
    https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=
7. en la pastaña donde se encuentra nuestra base de datos en la parte superior izquierda se da click en el engrane y configuracion de proyecto . 
8. se copia la api key web que se genero. 
9. se agrega a la url del endpoint copiado anterior mente 

https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDPjwm5FWIoHQ6g6qB0flCGEdM-CTRFyiE"

10. en postman creamos una nueva pestañas. 
11. copiamos nuestra url del token de seguridad. 
12. cambiamos el metodo a POST. 
   - body
    - x www undecoder ...
13. ingresamos en variable o key y su respectivo valor. 

     email                   admin@marketplace.com
     password                blink182
     returnSecureToken       true
14. se generan una serie de datos como el token 


<------------ REGLAS DE SEGURIDAD  -------------> 

1. se ingresa a reglas en la base de datos y se modifican los read y write. 
2.  ".write":"auth !=null", "solo pueden escribir los que esten autorizados"
3. se da en publicar. 
4. en la pagina de fire base en 
- documentacion
    - referencias
     - desarrollo web
       - rest  
        - autenticacion de rest 
5. copiar la url  

"https://<DATABASE_NAME>.firebaseio.com/users/ada/name.json?auth=<ID_TOKEN>"

6. se remplaza el id token con la api token que se genero en la pestaña de login 

7. se agrega un anueva regla solo permite a dueño de ese mail modificar

    && auth.email == 'admind2@marketplace.com
8. para generar reglas por collection se genera de la siguiente manera

{
  "rules": {
    "categories":{
      ".read": "true",  
      ".write":"auth !=null && auth.email == 'admind2@marketplace.com'",  
       }
  }
    
}

<------------ FILTRAR DATOS   -------------> 

1. entrar en cocumentacion de firebase 
  - referencia
    - desarrollo web
     - rest 
      - realtime database 
2. buscar en la pagina 
    orderBy 
    - click en filtrar datos 
3. segun la documentacion para qualto
4. se agrega en las reglas de las collecciones en este caso la de sub-categories:
  ".indexOn": ["title_list", "url", "category"]
  donde en el array se ponene los parametros a filtrar o por los que se puede filtrar. 
5. para probar en postman se genera un nuevo metodo GET. 
6. en la url se pone 
 {{url}}sub-categories.json?orderBy="parametro a filtrar "&equalTo="valor que queremos filtrar"&print=pretty

"se filtra por el nombre de las collection y de los document"

ejemplo 

 {{url}}sub-categories.json?orderBy="title_list"&equalTo="Electronic"&print=pretty

<------------ BUSCADOR  -------------> 

1. ingresamos a la documentacion igual que en el punto de filtrar. 
2. agregamos a la url 
{{url}}sub-categories.json?orderBy="$key"&startAt="b"&endAt="b\uf8ff"&print=pretty'
donde b es lo que se va buscar,
 - startAt: hace referencia a la parte unicial de la palabra a buscar 
 - uf8ff: hace referencia a coincidencias en cualquier parte de la palabra a buscar. 
 - $key: toca cambiarlo por la colleccion o tipo de filtrado que vamos a hacer. 
3. se habilita igual en las reglas. 
4. y se prueba en postam a traves del metodo  GET.

ejemplo 

{{url}}sub-categories.json?orderBy="category"&startAt="Home"&endAt="Home\uf8ff"&print=pretty'

