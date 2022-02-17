let time = performance.now();
let pass = "3678"
let gen = []

let counter = [0,0,0,0,0,0,0,0,0,0]
let nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

const passGen = (length = 0, min = 0, max = 0) =>{
    for (let i = 0; i < length;i++ ){
        let t = getRandomInt(min, max)
        gen.push(t)
    }
    return gen
}

const converter = () =>{
    gen.toString().split(',')
    let text = ''

    for(i of gen){
        text = text + i.toString()
    }

    return text.toString()
}

function factory(){

    while(pass !== converter()){
        gen = []
        passGen(4,0,10)
        console.log(gen)
        for(i of gen){
            if (i === 0){
                counter[0] = counter[0] + 1
            }else if(i === 1){
                counter[1] = counter[1] + 1
            }else if(i === 2){
                counter[2] = counter[2] + 1
            }else if(i === 3){
                counter[3] = counter[3] + 1
            }else if(i === 4){
                counter[4] = counter[4] + 1
            }else if(i === 5){
                counter[5] = counter[5] + 1
            }else if(i === 6){
                counter[6] = counter[6] + 1
            }else if(i === 7){
                counter[7] = counter[7] + 1
            }else if(i === 8){
                counter[8] = counter[8] + 1
            }else if(i === 9){
                counter[9] = counter[9] + 1
            }
        }
    }
    console.log("Password found!")
    console.group()
    for(let i = 0; i < counter.length;i++){
        console.log(`${nums[i]}: ${counter[i]}`)
    }
    console.groupEnd()
}

factory()

time = performance.now() - time;
console.log("ВРЕМЯ ПОИСКА: " + time +" mills.")