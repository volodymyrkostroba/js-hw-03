const user = {
   name: 'Mango',
   age: 20,
   hobby: 'html',
   premium: true,
 };

 user.mood = 'happy';
 user.hobby = 'skydiving';
 user.premium = false;

 const arr = Object.keys(user);
 
 for (const i of arr) {
   console.log(i, ':' ,user[i]);
 }






//  добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of