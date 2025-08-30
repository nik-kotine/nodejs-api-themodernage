# 🎸 Indie Rock Songs API

Una API REST en NodeJS y Express creada específicamente para almacenar la información básica de los grandes éxitos de bandas de rock alternativo de los 2000.
## Dependencias

La API usa NodeJS (versión usada para crear la API: v20.19.4) y es necesaria su instalación para funcionar. 

```bash
sudo apt update
sudo apt upgrade -y
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
```

## Uso

La API almacena canciones en una tabla denominada *songs*. Cada canción tiene cinco atributos base:
* id: `INTEGER PRIMARY KEY`.
* title: `TEXT NOT NULL`. Título de la canción.
* artist: `TEXT NOT NULL`. Artista detrás de la canción.
* year: `INTEGER`. Año de publicación de la canción.
* album: `TEXT`. Álbum de la canción. Puede que la canción no se encuentre en ningún álbum.

Hay 5 endpoints disponibles para obtener, crear, eliminar y actualizar canciones.

| método HTTP | URL           | descripción                                       |
| ----------- | ------------- | ------------------------------------------------- |
| GET         | `/songs`      | Lista todas las canciones                         |
| GET         | `/songs/{id}` | Muestra la información de una sola canción por ID |
| POST        | `/songs`      | Crea una canción (requiere body)                  |
| PUT         | `/songs/{id}` | Actualiza una canción por ID (requiere body)      |
| DELETE      | `/songs/{id}` | Elimina la canción por ID                         |

Para encender la API, sólo basta con usar `node server.js`. Cabe destacar que no hay endpoints en `/` y por ende no aparecerá nada ahí. Para tener datos de ejemplo, ejecutar `node seed.js` antes de encender el servidor.

## Archivos incluidos

Además de este README, se incluye:

- server.js: enciende el servidor. Usa `database.js`.
- database.js: crea la base de datos.
- reset-db.js: reinicia la base de datos.
- seed.js: crea seis canciones de ejemplo en la base de datos.

También se adjunta una colección de Postman con requests de ejemplo.
