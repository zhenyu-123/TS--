interface Bird{
    fly:boolean
    a:string
    sing:()=>{}
}
interface Dog{
    fly:Boolean,
    eat:()=>{}
}
function animals(animal:Dog | Bird){
    // 类型断言
    if(animal.fly){
        (animal as Bird).a
    }
    // 类型保护 in
    if('a' in animal){
      animal.a   
    }
    // typeof

    // instanceof
}