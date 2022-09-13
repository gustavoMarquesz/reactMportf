
function ScriptShowHide (){
    const writeProjects = document.getElementById('writeProjects');
    const showButton = document.getElementById('show-btn')

    showButton.addEventListener('click', showText);


    function showText(){
        writeProjects.style.display = "none";
    
        if (writeProjects.style.display === "none"){
            writeProjects.style.display = "flex";
            writeProjects.style.flexDirection = "column";
        }   
    }
}

export default ScriptShowHide