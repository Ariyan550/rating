
  // Math objects

  // 1. Math.PI
  // 2. Math.round()
  // 3. Math.pow()
  // 4. Math.sqrt()
  // 5. Math.abs() return absolute value remove - value 
  // 6. Math.ceil() return 2.1 then output 3
  // 7. Math.floor()
  // 8. Math.trunc() can accept negative value
  // 9. Math.random()
  // 10. Math.min(2,20,50,70)
  // 11. Math.max(50,400,800)

// es8
// string padding()
// Object.values()
// object.entries() return new array

// es9
// Array.flat(set flat level)


//when you used use strict mode it check any traditional code missing in js then find out
// event bubling and cupturing
// higher order function and call back function




// ajax/ XMLhttp request

// new method insertAdjacentHTML('afterbegin, data)


// localStorage

// localStorage.setItem('key',string or json string)

// localStorage.getItem('key') parse this js object or array


// events in jquery

// 1. mouse events = click,dblclick,mouseenter,mouseleave,hover,mousedown,mouseup
// 2. keyboard events = keypress,keyup,keydown
// 3.form events =submit,change,focus,blur
// 4.document/window events =load,resize,scroll,unload
// 5. others on({add multiple events}), show(accept two paramiter),hide
// val(),text(),empty('empty value'),slideToggle,fadeToggle,animate({set propertylike objects},time), remove(delete element), addClass(''),removeClass(), toggleClass(), 



let star =document.querySelectorAll('.start')
let out =document.querySelector('.out')
let alerts =document.querySelector('.alert')


for(let x=0;x<star.length;x++){
  star[x].starValue=(x+1) 
  let eventArray =['click','mouseover','mouseout']
  eventArray.forEach(function(e){
    star[x].addEventListener(e,myFun)
  })
}

function myFun(e) {
  // let types =e.type
  let starValue =this.starValue //target star[x].starValue=(x+1) 

  star.forEach((curEle,ind)=>{

    if(e.type === 'click'){
      if(ind<starValue){
        curEle.classList.add('active')
        alerts.classList.add('active')
      }else{
        curEle.classList.remove('active')
        setTimeout(()=>{
          alerts.classList.remove('active')
        },2000)
      
      }

      if(starValue == 1){
        out.innerHTML ='😥Low'
      }else if(starValue == 2 || starValue == 3){
        out.innerHTML ='😊Good'

      }else if(starValue == 4){
        out.innerHTML ='😍Better'
      }else if(starValue == 5){
        out.innerHTML ='🥰Best'
      }

    }

    if(e.type === 'mouseover'){
      if(ind<starValue){
        curEle.classList.add('hover')
      }
    }

    if(e.type === 'mouseout'){
      if(ind<starValue){
        curEle.classList.remove('hover')
      }
    }

  })

}


