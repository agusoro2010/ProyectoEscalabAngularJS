#Iniciar el proyecto

Una vez clonado o descargado el archivo .zip, abrir la consola, dirigirse a la ruta donde está el proyecto y ejecutar el siguiente comando:

`$ npm install`

#En que consiste
Una pequeña app para que consulta 3 links asociados a Final Space, en el que se involucran los personajes, los orígenes y episodios. 
Contiene una persistencia de datos en localStorage, almacenando las imágenes de los personajes, para que esta sea usada en los componentes de Locaciones y Episodios.
Posee un formulario reactivo que permitiría guardar cierta información relacionada a los personajes.

#Estructura del proyecto
- Carpeta **components**, contiene el unico componente fijo que es la barra de menú.
- Carpeta **enums**, contiene un enums relacionado a un pipe desarrollado para especificar el 'estado' de un personaje.
- Carpeta **models** contiene el modelo de dato de ´Personaje´ usado para generar la comunicación entre componente padre e hijo.
- Carpeta **pages** contiene los módulos que son páginas en si desarrolladas en la aplicación.  La agrupación está por módulo de **Episodio**, **Locaciones** (origenes) y **Personajes**.  Dentro del módulo de **Personajes** es donde hay mayor número de componentes que dan base para realizar **lazy loading**.
- Carpeta **pagina-no-existe** está por separado para tener el control independiente de los componentes para este tipo de error u otros asociados a este.
- Carpeta **pipes** contiene el pipe que usa el **enums** para hacer el cambio requerido en el componente **listar-personajes**, especificamente en el campo de *estado*.
- Carpeta **services**, en ella se encuentran los servicios necesarios para el llamado de las apis de Final Space.
	- El archivo *environment* ubicado en la raíz del proyecto contiene el los links que son necesarios para las consultas a las APIs.

#Link para acceso a la aplicacion

https://proyecto-angular-ao.web.app/
