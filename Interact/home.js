var projViews = document.getElementById("ProjectsView")
var elements = projViews.getElementsByTagName("img")

for(let i = 0; i < elements.length; i++){
    let img = elements.item(i)

    img.addEventListener("click", function(){
        let txt = img.id

        window.parent.postMessage({
            type: 'goto',
            sector: 2,
            goto: txt,
        }, '*');
    })
}