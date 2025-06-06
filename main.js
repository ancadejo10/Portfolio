var topbar = document.getElementById("Topbar")
var container = document.getElementById("Container")

var prevBtn

function ActiveBtn(btn, goto){
    prevBtn.className = ""
    prevBtn = btn

    btn.className = "Selected"

    if(goto != null){
        container.src = "Sectors/" + btn.id + ".html#" + goto
    }else{
        container.src = "Sectors/" + btn.id + ".html"
    }
}

function SetButton(btn){
    btn.addEventListener("click", function(){
        ActiveBtn(btn)
    })
}

for(let i = 0; i < topbar.children.length; i++){
    var btn = topbar.children[i]

    if(i == 0){
        prevBtn = btn
        ActiveBtn(btn)
    }

    SetButton(btn)
}

window.addEventListener('message', (event) => {
  if (event.data.type === 'goto') {
    ActiveBtn(topbar.children[event.data.sector], event.data.goto);
  }
});

function OnResize(){
    container.style.width = (window.visualViewport.width  - 0) + "px"
    container.style.height = ((window.visualViewport.height - topbar.clientHeight) - 5) + "px"
}

window.addEventListener('resize', OnResize)
document.addEventListener("DOMContentLoaded", OnResize)

document.addEventListener('touchmove', preventScroll, { passive: false });

function preventScroll(e) {
  e.preventDefault();
}
