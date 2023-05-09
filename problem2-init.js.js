/* En base a una lista de usuarios y una lista de películas vistas por dichos usuarios, realizar una
función que permita obtener un nuevo arreglo de objetos el cual conste con el nombre del
usuario, su email y el título de alguna de sus películas vistas. Formato del objeto y nombre de la
función:
{
name: “Juan Pérez”,
email: “juanperez23@gmail.com”,
movies: “Titanic”
}
listUsersWithMovie(users, movies) */

function listUsersWithMovie(users, movies) {
    const usersWithMovies = users.map(user => {
      const userMovies = movies.filter(movie => movie.userId === user.id);
      const randomMovie = userMovies[Math.floor(Math.random() * userMovies.length)];
      return {
        name: user.name,
        email: user.email,
        movies: randomMovie.title
      }
    });
    return usersWithMovies;
  }


  const users = [
    { id: 1, name: 'camila', email: 'camilaahjuacho@gmail.com' },
    { id: 2, name: 'rebeca', email: 'rebecasanchez@gmail.com' }
  ];
  
  const movies = [
    { userId: 1, title: 'Von neumann ' },
    { userId: 2, title: 'donde estan las rubias' },
  ];
  
  console.log(listUsersWithMovie(users, movies));
