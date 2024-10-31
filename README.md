# RTC - PROYECTO 06
## _API REST_

El proyecto levanta un servidor usando la libreria Express. Me conecto a la base de datos de Mongo Atlas mediante mongoose.

Creo dos colecciones: 
- libros 
- autores: el parametro "books" está relacionado con la coleccion libros

### Endpoints para la colección libros:
| PETICIÓN | NOMBRE | DESCRIPCIÓN |
| ------ | ------ | ------ |
| GET | getLibros | devuelve todos los libros de mi coleccion. |
| GET | getLibroById | devuelve un libro, pasandole el id de dicho libro |
| GET | getLibroByTitle | devuelve un libro, pasandole el title de dicho libro. El title es unico, con lo cual siempre devolverà un solo libro |
| POST | postLibro | para subir un nuevo libro |
| PUT | updateLibro | actualiza los datos de un libro. Le paso el id para saber que libro tengo que actualizar |
| DELETE | deleteLibro | elimina un libro de mi colección.  Le paso el id para saber que libro tengo que eliminar |

### Endpoints para la colección autores:
| PETICIÓN | NOMBRE | DESCRIPCIÓN |
| ------ | ------ | ------ |
| GET | getAutores |  devuelve todos los autores de mi coleccion. El parametro "books" está populado con los datos de la colección libros. Le paso los id de los libros que corresponden a dicho autor para rellenar este parámetro |
| GET | getAutorById | devuelve un autor, pasandole el id de dicho autor |
| GET | getAutorByName | devuelve un autor, pasandole el nombre de dicho autor. El name es unico, con lo cual siempre devolverà un solo autor |
| POST | postAutor | para subir un nuevo autor|
| PUT | updateAutor | para actualizar los datos de un autor. Le paso el id para saber que autor tengo que actualizar |
| DELETE | deleteAutor | para eliminar un autor de mi colección.  Le paso el id para saber que autor tengo que eliminar |

El servidor está levandado en el puerto 3000.
Las rutas para las colecciones son:
- /api/v1/libros
- /api/v1/autores


### SEED
Creada una semilla para la colección libros.
Subida a GitHub para corrección del proyecto.

**Mireia**

