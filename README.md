# vk-streaming

## Что делает?

Возвращает объекты Promises axios'а для взаимодействия с методами Streaming API VK.

## Как использовать?
```
npm install vk-streaming
```
```javascript
const { getServer, Rules, Read } = require('vk-streaming');

// Получение сервера и ключа
getServer('cc968...c25cc')
  .then(data => data.data.response)
  .then(console.log);

// Получение, удаление и добавление правил
const rules = new Rules(
  'server',
  'key'
);

rules
  .get()
  .then(data => data.data.rules)
  .then(console.log);

rules
.delete(1) 
  .then(data => data.data)
  .then(console.log);

rules
  .add({
    value: 'hello',
    tag: '1'
  })
  .then(data => data.data)
  .then(console.log);

// Чтение потока
const read = new Read(
  'server',
  'key'
);

read.stream()
  .onmessage = event => console.log(JSON.parse(event.data).event);
// Так как возвращается объект WebSocket, все события см. в его документации
 ```

