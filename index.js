
let dropDown = document.getElementById('drop-down')
let hexSelector = document.getElementById('hex')
let colorScheme = document.getElementById('color-scheme')
let hexValue = ''
let modeValue = ''



// set hex and mode value 
function selectSettings() {

    dropDown.addEventListener('change',(event) => {
        modeValue = event.target.value
        modeValue = modeValue.toLowerCase()
     })
    
    hexSelector.addEventListener('change',(event) => {
        hexValue = event.target.value
        hexValue = hexValue.slice(1).toUpperCase()
    })   

}

function renderColors(data){
    let html = ''
        for(let i = 0; i < 5; i++){
            let color = data.colors[i].hex.value
            html += `
            <div style=background:${color} class="color-box">
                <div class = "color-code" id ="color-one-code">
                    ${color}
                </div>
             </div>`
        }
    
        colorScheme.innerHTML = html
}

// initiate website look and settings

selectSettings()
fetch(`https://www.thecolorapi.com/scheme?hex=F55A5A&mode=monochrome&count=5`)
    .then(res => res.json())
    .then(data => renderColors(data))



// get color values after user picks color and mode

document.getElementById('result-btn').addEventListener('click',() => {
    fetch(`https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=${modeValue}&count=5`)
    .then(res => res.json())
    .then(data => renderColors(data))
}
)

