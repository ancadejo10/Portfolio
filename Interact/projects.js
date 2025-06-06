var projViews = document.getElementById("ProjectsView")
var elements = projViews.getElementsByTagName("img")
var videoView = document.getElementById("VideoView")
var videoElement = videoView.getElementsByTagName("video").item(0)

for(let i = 0; i < elements.length; i++){
    let img = elements.item(i)

    img.addEventListener("click", function(){
        let txt = img.parentElement.parentElement.id
        
        projViews.style.filter = "blur(5px)"
        videoElement.src = "../Videos/" + txt + ".mp4"
        videoView.style.display = "block"
        videoView.style.animation = "scaleUp 0.2s ease-out forwards"
        videoElement.play()
    })
}

videoView.getElementsByTagName("div").item(0).addEventListener("click", function(){
    videoView.style.animation = "scaleDown 0.2s ease-in forwards"
    projViews.style.filter = "blur(0px)"
    videoElement.src  = ""
})