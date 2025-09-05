/*
На сайте JSONPlaceholder - Free Fake REST API  с помощью функции fetch получить список пользователей. 
  Вывести на экран: имя, e-mail, телефон и название компании пользователя.
  Отдельными запросами получить список альбомов пользователя и список фотографий в альбомах. 
  Дополнительно вывести список альбомов у пользователя с указанием количества в них фотографий. 
  Для реализации трех запросов воспользоваться Promise.all().
  (Принадлежность альбомов пользователем связано полем userId, принадлежность фотографий к альбомам сваязано полем albumId). 
      Пример: 
      1.  name: Leanne Graham
          email: Sincere@april.biz
          phone: 1-770-736-8031 x56442
          company: Romaguera-Crona    
          albums:
            Album name 1 (10 photos)
            Album name 2 (100 photos)
      __________________________________

      2.  name: Ervin Howell   
          email: Shanna@melissa.tv 
          phone: 010-692-6593 x09125
          company: Deckow-Crist
          albums:
            Album name 1 (10 photos)
            Album name 2 (100 photos)

*/

const baseUrl = 'https://jsonplaceholder.typicode.com/users';
const albumsUrl = 'https://jsonplaceholder.typicode.com/albums';
const photosUrl = 'https://jsonplaceholder.typicode.com/photos';

async function sendRequest(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to fetch ${url}: ${response.status}`);
  return await response.json();
}

async function displayUserAlbumsWithPhotos() {
  try {
    const [users, albums, photos] = await Promise.all([
      sendRequest(baseUrl),
      sendRequest(albumsUrl),
      sendRequest(photosUrl)
    ]);

    users.forEach(user => {
      console.log(`${user.id}. name: ${user.name}`);
      console.log(`   email: ${user.email}`);
      console.log(`   phone: ${user.phone}`);
      console.log(`   company: ${user.company.name}`);
      console.log(`   albums:`);

      const userAlbums = albums.filter(album => album.userId === user.id);

      userAlbums.forEach(album => {
        const photoCount = photos.filter(photo => photo.albumId === album.id).length;
        console.log(`     ${album.title} (${photoCount} photos)`);
      });
    });

  } catch (error) {
    console.error('Ошибка:', error.message);
  }
}

await displayUserAlbumsWithPhotos();
