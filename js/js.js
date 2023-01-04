let loads = document.querySelectorAll(".load")
let percents = document.querySelectorAll(".percent")
let delayTime = 100

function delay(load,width,percent){
    let num = 0 
    

    setTimeout(()=>{
        console.log(load,width)
        load.style.width = `${width}%`
        // console.log(delayTime)

        let interval = setInterval(()=>{
            num ++
            if(num==width){
                clearInterval(interval)
            }
            percent.innerHTML = num
        },30)
    },delayTime)
    delayTime +=1000

    
}

loads.forEach((load)=>{
    
    // setTimeout(()=>{
        let percent = load.parentNode.parentNode.childNodes[1].childNodes[1]
    
        if(load.classList.contains("html")){
            let loadPercent = 56
            delay(load,loadPercent,percent)
            // percent.innerHTML = loadPercent

        }
        if(load.classList.contains("javascript")){
            // load.style.width = "76%"
            // delayTime(load.style.width = "76%")
            let loadPercent = 66

            delay(load,loadPercent,percent)
            // percent.innerHTML = loadPercent




        }
        if(load.classList.contains("react")){
            // load.style.width = "56%"
            // delayTime(load.style.width = "56%")
            let loadPercent = 76

            delay(load,loadPercent,percent)
            // percent.innerHTML = loadPercent



        }
        if(load.classList.contains("css")){
            // load.style.width = "86%"
            let loadPercent = 86
            // delayTime(load.style.width = "86%")\
            delay(load,loadPercent,percent)
            // percent.innerHTML = loadPercent



        }
    // },1000)
})

