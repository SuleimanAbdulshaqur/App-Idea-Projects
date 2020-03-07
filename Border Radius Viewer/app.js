const corners = document.querySelectorAll('.corner'),
    c1 = document.querySelector('.corner-1'),
    c2 = document.querySelector('.corner-2'),
    c3 = document.querySelector('.corner-3'),
    c4 = document.querySelector('.corner-4');


const border = document.querySelector('.fish');


for (let i = 0; i < corners.length; i++) {
    corners[i].addEventListener('keyup', () => {
        applyBorder();
    })
}

function applyBorder() {
    
    let value = `${c1.value}% ${c2.value}% ${c3.value}% ${c4.value}%`;
    console.log(value);
    border.style.borderRadius = value;
}




function changeHandler(val)
  {
    if (Number(val.value) > 100){
      val.value = 100
    } 
  }


