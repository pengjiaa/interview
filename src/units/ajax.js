export default  function myAjax(methods,url,async,data) {
    const xhr = new XMLHttpRequest()
    xhr.open(methods,url,async)
    if(methods === 'get'){
        xhr.send(null)
    }else{
        xhr.send(data)
    }
    xhr.onreadystatechange=()=>{
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                console.log('成功',xhr.responseText)
            }else{
                console.log('失败',xhr.status)
            }
        }
    }
}
