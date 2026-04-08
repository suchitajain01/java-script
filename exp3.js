let fontSize = 20;
 let isVisible = true;   

function Heading()
{
     let text = document.getElementById("inputText").value;
        document.getElementById("heading").innerText = text;

}

function Bg()
{
    let colors = ["#f0f0f0", "#ffcccc", "#ccffcc", "#ccccff", "#ffffcc"];
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;

}

function FontSize()
{
    fontSize += 3;
        document.getElementById("heading").style.fontSize = fontSize + "px";

}

function toggleParagraph()
{
   
     let para = document.getElementById("para");
        if (isVisible) {
            para.style.display = "none";
            isVisible = false;
        } else {
            para.style.display = "block";
            isVisible = true;
        }
    }


function resetPage()
{
        document.getElementById("heading").innerText = "Welcome to JavaScript Lab";
        document.body.style.backgroundColor = "#f0f0f0";
        fontSize = 20;
        document.getElementById("heading").style.fontSize = fontSize + "px";
        document.getElementById("para").style.display = "block";
        isVisible = true;
        document.getElementById("inputText").value = "";


}






