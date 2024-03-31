// javascript Execution Context
// js execution context are two type
// 1. global ec & 2. function ec & eval ec(used in mango.js(it is usualy property of global object.))
// 1 step: coade go to global execution context (global environment)
        
// 2 step: then go to memory creation phase.
        //    {
        //     only memory allocation of all vairiable phase is used.
        //    }
        Val1: undifine
        Val2: undifine
        addtwoNum: definition
        result1: undefined 
 // 3 step: then go to execution phase
        val1=10
        Val2=5
        addtwo=  there is two step 
        1. new variable environment
        2. execution thread.     
 // 4 step: all the result will go to the global execution.        
 // 5 step: then the global execution contest is deleted autometecaly after compliting their work.

     finaly all this procces will be repeted again and again

     //++++++++++ Call Stack +++++++++++
     it work based in LIFO(Last In First Out) concept.

     example: 
      function one(){
        console.log("one")
      }
      function two(){
        console.log("two")
      }
      function three(){
        console.log("three")
      }

      LIFO example:

      function one(){
        console.log("one")
        two()
      }
      function two(){
        console.log("two")
        three()
      }
      function three(){
        console.log("three")
      }
      one()
      two()
      three()

      in second ex one go to  exicute First
      then two is call in one function then two is exicute then three is call inside two then three go to exicute and after execution three is go out first then two and last one is go out.