console.log('Загрузка данных...');

const promise = new Promise((resolve, reject) => {
  const error = true;

  setTimeout(() => {
    if (!error){
      const response = {
          status: 200,
          url: 'example.com',
      };
      resolve(response);
    } else {
      reject('Ошибка данных');
    }
  }, 2000);
});

promise
  .then((data) => {
    console.log('Успешно загружены.', data);
    setTimeout(() => {
      const data = {
        username: 'Aybiyke',
        userage: 17,
      };
      const parsedData = JSON.parse(data);
      console.log(parsedData);
    })
  })

  .catch((error) => {
    console.log('Ошибка:', error);
  })
  .finally(() => {
    console.log('Конец загрузки!')
  })