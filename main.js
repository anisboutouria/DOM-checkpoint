
// like function*/
var like=document.getElementsByClassName('like-btn')
for(let i=0;i<like.length;i++){
    like[i].addEventListener('click',function(){
        if (like[i].style.color==='red') {
            like[i].style.color='black'
        }
        else{like[i].style.color='red'}
    })
} 
// plus function*/
var plus=document.querySelectorAll('.plus-btn')
for(let i=0;i<plus.length;i++){
    plus[i].addEventListener('click',function(){
        plus[i].nextElementSibling.innerHTML++
        totalPrice()
    })
}

// minus function*/
var minus=document.querySelectorAll('.minus-btn')
for(let i=0;i<minus.length;i++){
minus[i].addEventListener('click',function(){
    if(minus[i].previousElementSibling.innerHTML>=1){
        minus[i].previousElementSibling.innerHTML--
        totalPrice()
    }
})
}

// delete function*/

var del=document.querySelectorAll('.delete-btn')
for(let i=0;i<del.length;i++){
    del[i].addEventListener('click',function(){
        del[i].parentElement.parentElement.parentElement.remove()
        totalPrice()
    })
}

// total function*/

function totalPrice() {
  var itemPrice = document.querySelectorAll(".price");
  var qtt = document.querySelectorAll(".number-items");
  var total = 0;
  for (let i = 0; i < itemPrice.length; i++) {
    total += itemPrice[i].innerHTML * qtt[i].innerHTML;

    document.getElementById("total").innerHTML = total;
    
  }
  
}

