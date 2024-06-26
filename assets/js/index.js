const operations=document.querySelector('.operations')
const plus=operations.querySelectorAll('button')[0]
const minus=operations.querySelectorAll('button')[1]
const multiplication=operations.querySelectorAll('button')[2]
const division=operations.querySelectorAll('button')[3]
const screen_text=document.querySelector('p')

const numbers=document.querySelector('.numbers_c')
const num0=numbers.querySelectorAll('button')[10]
const num1=numbers.querySelectorAll('button')[6]
const num2=numbers.querySelectorAll('button')[7]
const num3=numbers.querySelectorAll('button')[8]
const num4=numbers.querySelectorAll('button')[3]
const num5=numbers.querySelectorAll('button')[4]
const num6=numbers.querySelectorAll('button')[5]
const num7=numbers.querySelectorAll('button')[0]
const num8=numbers.querySelectorAll('button')[1]
const num9=numbers.querySelectorAll('button')[2]
const clear=numbers.querySelector('.clear')
const equal=document.querySelector('.equal')
const empty=numbers.querySelectorAll('button')[9]

empty.style.background='white'

let sum=parseInt(screen_text.textContent)

plus.addEventListener('click',plusoperate)
minus.addEventListener('click',minusoperate)
multiplication.addEventListener('click',multioperate)
division.addEventListener('click',divisionoperate)

function numpress(number){
    
    console.log(screen_text.textContent.length);
}

function plusoperate(){
    let sum0=parseInt(screen_text.textContent)
    console.log("necesen");
    screen_text.textContent=""
    equal.addEventListener('click',()=>{
        sum0+=parseInt(screen_text.textContent)
        screen_text.textContent=sum0
    })
}

function minusoperate(){
    let sum0=parseInt(screen_text.textContent)
    screen_text.textContent=""
    equal.addEventListener('click',()=>{
        sum0-=parseInt(screen_text.textContent)
        screen_text.textContent=sum0
        
    })
}

function multioperate(){
    let sum0=parseInt(screen_text.textContent)
    screen_text.textContent=""
    equal.addEventListener('click',()=>{
        sum0*=parseInt(screen_text.textContent)
        screen_text.textContent=sum0
        
    })
}

function divisionoperate(){
    let sum0=parseInt(screen_text.textContent)
    screen_text.textContent=""
    
    equal.addEventListener('click',()=>{
        if(screen_text.textContent!=0){
        sum0/=parseInt(screen_text.textContent)
        if(sum0.toString().length<9){
        screen_text.textContent=sum0}
        else{
            screen_text.textContent=sum0.toString().substring(0,9)
        }
        }
        else{
            screen_text.textContent="Infinity"
        }
    })
}
    num0.addEventListener('click',()=>{if(screen_text.textContent=="0"){screen_text.textContent=""}if(screen_text.textContent.length<9){screen_text.textContent+=num0.textContent}})
    num1.addEventListener('click',()=>{if(screen_text.textContent=="0"){screen_text.textContent=""}if(screen_text.textContent.length<9){screen_text.textContent+=num1.textContent}})
    num2.addEventListener('click',()=>{if(screen_text.textContent=="0"){screen_text.textContent=""}if(screen_text.textContent.length<9){screen_text.textContent+=num2.textContent}})
    num3.addEventListener('click',()=>{if(screen_text.textContent=="0"){screen_text.textContent=""}if(screen_text.textContent.length<9){screen_text.textContent+=num3.textContent}})
    num4.addEventListener('click',()=>{if(screen_text.textContent=="0"){screen_text.textContent=""}if(screen_text.textContent.length<9){screen_text.textContent+=num4.textContent}})
    num5.addEventListener('click',()=>{if(screen_text.textContent=="0"){screen_text.textContent=""}if(screen_text.textContent.length<9){screen_text.textContent+=num5.textContent}})
    num6.addEventListener('click',()=>{if(screen_text.textContent=="0"){screen_text.textContent=""}if(screen_text.textContent.length<9){screen_text.textContent+=num6.textContent}})
    num7.addEventListener('click',()=>{if(screen_text.textContent=="0"){screen_text.textContent=""}if(screen_text.textContent.length<9){screen_text.textContent+=num7.textContent}})
    num8.addEventListener('click',()=>{if(screen_text.textContent=="0"){screen_text.textContent=""}if(screen_text.textContent.length<9){screen_text.textContent+=num8.textContent}})
    num9.addEventListener('click',()=>{if(screen_text.textContent=="0"){screen_text.textContent=""}if(screen_text.textContent.length<9){screen_text.textContent+=num9.textContent}})
    
    clear.addEventListener('click',()=>{window.location.reload()})
