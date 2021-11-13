/*  1. На вход поступает массив, вывести массив, удалив неуникальные значения. */
const nonunique=(array)=>{
    // const uniqueAr=[];
     const un=array.filter((value,index,ar)=>{
        return ar.indexOf(value)==index
    
     })
     return un;
 }
/*  2. На вход поступает массив, реверсировать 
 значения (подобно методу reverse) метод reverse не использовать. */
 const reverseFunc=(ar)=>{
    return ar.reduce((newArray,value)=>{
         newArray.unshift(value);
         return newArray;
    },[]);
  }
 /*  3. На вход поступает массив, содержащий массивы, в которых хранится два элемента. 
  Преобразовать массив в объект, где ключами являются нулевой индекс вложенныхых массивов, а значениями являются элементы с индексом один. */
  const arob=(ar)=>{
      return ar.map(value=>{
          return {
              [value[0]]:value[1],
          }
      })
  }
/*   4. На вход поступает объект, вывести сумму числовых свойств объекта. */
function ob1(ob){
    return Object.keys(ob)
                        .filter(value=>{
                            return Number.isInteger(parseInt(value))})
                        .reduce((prev,val)=>{
                             return prev+parseInt(val);},0)
                }
/*  5. На вход поступает массив с числами, вывести среднее арифметическое элементов массива. */
const arifaverage=(ar)=>{
    return ar.reduce((prev,value)=>{return prev+value},0)/ar.length
}

/* 6. Создать функцию-конструктор для объекта "калькулятор", объект должен иметь поле, 
хранящее текущее значение и методы сложения, вычитания, умножения и деления, 
принимающие число и манипулирующий свойством значения
 в соответствии с назначением метода, а так же функцию, сбрасывающую значение в ноль. */
 function Calculation(val){
    this.buffer=val || 0;
    this.plus=function(value){
       this.buffer=this.buffer+value;
    }
    this.minus=function(value){
        this.buffer= this.buffer-value;}
    this.mul=function(value){
      this.buffer= this.buffer.key*value;}
    this.div=function(value){
          this.buffer= this.buffer.key/value; }
    this.reset=function(){
         this.buffer=0;
    }
}
/* 7. Функция принимает смешанный массив (содержащий значения чисел, строк и объектов), вернуть объект с полями numbers, 
strings и objects, содержащими массив со значениями, соответствующими названию поля. */
const arrayMixed=(ar)=>{
    const ob={
        "numbers":[],
        "strings":[],
        "objects":[],
    }
     ar.forEach(value=>{
        if(typeof value==="object") {ob.objects.push(value)}
        else if(typeof value==="number") {ob.numbers.push(value)}
        else (ob.strings.push(value))
    })
    return ob;
}
/* 8. Функция принимает массив чисел и два числовых значения, вернуть новый массив, содержащий элементы первого
 массива, значение которых попадает под диапазон переданных в функцию чисел (второе переданное число может быть больше первого) */
 const sort = (ar,v1,v2)=>{
     return [...ar].slice(v1,v2)
 }
/*  9. Функция принимает две строки. Вывести true, если строки являются анаграммами, в противном случае false */
const anagram=(str1,str2)=>{
    const sort1=str1.split("").sort().join("");
    const sort2=str2.split("").sort().join("");
   if(sort1===sort2) {return `анаграмы найдены`}
   return `анаграма не найдена`
}
/* 10. Создать объект, выводящий в консоль все ключи и значения объекта в формате "ключ: значение" через запятую 
(считать, что значением ключа объекта не может быть объектом или массивом, содержащими объекты) сама функция в консоль выводиться не должна. */
/* 11. Создать функцию-конструктор для объекта, содержащего методы serProp (установить значение свойства), 
метод принимает ключь (строка), значение (произвольное) и объект со свойствами writable, configurable, 
enumerable (разрешение перезаписи свойства, разрешение перечисления свойства и разрешение удаления свойства). 
Если какое-то из свойств в объекте отсутствует, действие должно быть разрешено */
function NewOb(){
    this.serProp=function(key,value1,ob){
       const {writable=true,configurable=true,enumerable=true}=ob;
       Object.defineProperty(this,key,{
           value:value1,
           enumerable:enumerable,
           writable:writable,
           configurable:configurable,
       });
    }
}