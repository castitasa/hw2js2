const jsonData = '{"name": "John", "age": 30}';

const promise = new Promise((resolve, reject) => {
  console.log('Загрузка данных...');
  setTimeout(() => {
    const randomNum = Math.random();
    if (randomNum < 0.5) {
      resolve(jsonData);
    } else {
      reject('Ошибка при загрузке данных');
    }
  }, 2000);
});

promise
  .then((data) => {
    console.log('Данные успешно загружены.');
    const parsedData = JSON.parse(data);
    console.log(parsedData);
  })

  .catch((error) => {
    console.error('Ошибка:', error);
  });