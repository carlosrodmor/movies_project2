

| HTTP Method | URI Path  | Middleware   |
| :----- | :--- | :---    |
|  GET | `/auth/signup`   | isLoggedOut   | None   |
| POST | `/auth/signup`   | isLoggedOut   | None   |
| GET | `/auth/login`   | isLoggedOut   | None   |
| POST | `/auth/login`   | isLoggedOut   | None   |
| POST |`/auth/logout`  | isLoggedIn   | None   |




| HTTP Method | URI Path | Description | JSON   |
| :----- | :--- | :---    | :---    |  
| GET     | `/movies`   |  Botón ver detalles en todas las pags   |
| GET | `/movies/details/:id` |Común a todos + botón añadir favs   |
| POST | `/movies/details/:id` |Añade id a array favs  |
| GET | `/movies/top50`    |       |
| GET | `/movies/popular`   |      |
| GET | `/movies/random`   |     |
| GET | `/movies/search`   |    |
| GET | `/movies/search/results` |    |


| HTTP Method | URI Path | Description | JSON   |
| :----- | :--- | :---    | :---    |
| GET | `/users`   | Lista (Admin)   |     |
| GET | `/users/:id`   | Detalle (Admin y user loggin)   |   |
| POST | `/users/:id`   | Eliminar  (Admin y user loggin)   |     |
| GET |`/users/:id/edit`   | Editar  (Admin y user loggin)   |      |
| POST | `/users/:id/edit`   | Editar en el detalle  (Admin y user loggin)   | None   |



| HTTP Method | URI Path | Description | JSON   |
| :----- | :--- | :---    | :---    |
|  GET |`/communities`   | Lista |   |
| POST | `/communities/edit`   | Eliminar community (Admin) |      |
| GET | `/communities/edit`   | Editar community (Admin) |      |
| POST | `/communities/edit`   | Editar community (Admin) |     |
| GET | `/communities/:id`   | Detalles community |   ✔   |
|  POST |`/communities/:id`     | Une al user a la community  |     |
| GET |`/communities/:id/forum` | Renderizar los comentarios de la bbdd (Solo los users que pertenecen a la community, Admin) |      |
| POST |`/communities/:id/forum` | Botón añadir comentario, que lleve al formulario |          |
|POST | `/communities/:id/forum/comment` |Form: username autocompletado (currentSession) + comment |          |
 

| HTTP Method | URI Path | Description | JSON   |
| :----- | :--- | :---    | :---    |
|   GET   | `/profile/:id`   | Vista perfil, solo usuario loggedIn
| GET | `/profile/:id/edit`   | 
| POST | `/profile/:id/edit`   | 

