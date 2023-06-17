let getUser = JSON.parse(localStorage.getItem('storageclient'))
let index = localStorage.getItem('index')
let savingchart = getUser[index].cart
// console.log(savingchart);
const display = () => {
    disp.innerHTML = ""
    for (let index = 0; index < savingchart.length; index++) {
        disp.innerHTML += `
        <div class="container row mx-auto mt-5">
           <div class="card col-sm-12 col-md-6 p-5 shadow">
              <div class="text-center"> ${savingchart[index].mycakeimgs}</div>
    
           </div>
    
        <div class="card col-sm-12 col-md-6">
            <div class="">
                <div class="text-end">
                  <button class="btn btn-success" onclick="pay(${index})">payment</button>
                  </div>
               ${savingchart[index].mycakeno}<br>
               Price- ${savingchart[index].mycakeprice}<br>
               </div>
              <div class="doublepro">
                <button class="btn btn-success" onclick="increaseBtn(${index})"><i class="ri-add-circle-fill"></i></button>
                <p id="result${index}" class="drag">0</p>
                <button class="btn btn-danger" onclick="decreaseBtn(${index})"><i class="ri-subtract-line"></i></button>
              </div>
              <div class="delectbTn mt-5">
                <button onclick="delct(${index})" class="btn btn-danger">Delect</button>
             </div>
        </div>             
        
            </div>
                `
    }
}
display()
getUser[index].eachCart=[]
const pay = (eachCake) => {
    let eachcart={
        cakeno:savingchart[eachCake].mycakeno,
        cakepricing:savingchart[eachCake].mycakeprice,
        cakeimg:savingchart[eachCake].mycakeimgs,
        quantity:savingchart[eachCake].mycakeQuant,
    }
    getUser[index].eachCart.push(eachcart)
    localStorage.setItem('storageclient', JSON.stringify(getUser))
    window.location.href = "payment.html"
}
const mybackBtn = () => {
    window.location.href = "addchart.html"
}

const increaseBtn = (eachProduct) => {
    savingchart[eachProduct].mycakeQuant++
    document.getElementById("result" + eachProduct).textContent = + savingchart[eachProduct].mycakeQuant;
    localStorage.setItem('storageclient', JSON.stringify(getUser))
}
window.onload = () => {
    for (let index = 0; index < savingchart.length; index++) {
        document.getElementById("result" + index).textContent = + savingchart[index].mycakeQuant;
        localStorage.setItem('storageclient', JSON.stringify(getUser))
    }
}
const decreaseBtn = (eachProduct) => {
    if (savingchart[eachProduct].mycakeQuant == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'It Has Reach The Limit 0',
        })
    }
    else {
        savingchart[eachProduct].mycakeQuant--
        document.getElementById("result" + eachProduct).textContent = + savingchart[eachProduct].mycakeQuant;
        localStorage.setItem('storageclient', JSON.stringify(getUser))
    }
}
// for (let index = 0; index < savingchart.length; index++) {
//     document.getElementById("increaseBtn"+index).addEventListener("click", increase);
//     document.getElementById("decreaseBtn"+index).addEventListener("click", decrease);   
// }


const delct = (debtn) => {
    savingchart.splice(debtn, 1)
    localStorage.setItem('storageclient', JSON.stringify(getUser))
    display()
}

