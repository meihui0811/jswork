function sort(method){
    let origin = document.getElementById('oriin').value
    let logs
    console.log(method)
    if(method=='bubble'){
        logs = bubbleSort(origin)
    }else if(method=='insert'){
        logs = bubbleSort(origin)
    }
    showDiv = document.getElementById('Anim')
    showDiv.innerHTML = logs
}