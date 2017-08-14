# vk-streaming

## Что делает?

Позволяет взаимодействовать с методами Streaming API VK.

## Как использовать?
```sh
$ npm install vk-streaming
```
```javascript
const { getServer, Rules, Read } = require('vk-streaming');

// Получение сервера и ключа
getServer('cc968...c25cc')
  .then(data => data.response)
  .then(console.log);

// Получение, удаление и добавление правил
const rules = new Rules(
  'server',
  'key'
);

rules.get()
  .then(console.log);

rules.delete(1)
  .then(console.log);

rules.add({
    value: 'hello3',
    tag: '3'
  })
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

