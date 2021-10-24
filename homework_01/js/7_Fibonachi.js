//1 и 2 - фибоначи с кешем
const fib=()=>{
    let cache={};
        return function fib1(n){
           if(n in cache){
             console.log(`возврат из кеша со значением ${n}`);
             return cache[n];
             }
           else {
               const result=n <= 1 ? n : fib1(n - 1) + fib1(n - 2);
               cache[n]=result;
               return result;
             }
   }}

//3 Рекурсивная функция, принимающая массив , содержащий массив двух значений,
//первый который ключ,второй значение для объекта. Фукнция должна вернуть объект
const obj=(ar)=>{ 
    const ob={}; 
     ar.forEach(value=>{
            if(!Array.isArray(value[1])) { 
               ob[value[0]]=value[1]; 
                console.log(value);}
               else {ob[value[0]]=obj(value[1])
               console.log(value)}
            
        })
        return ob;
   }