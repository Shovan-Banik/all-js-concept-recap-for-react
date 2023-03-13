const storeDataAtLocalStorage=()=>{
    const inputId=document.getElementById('storage-id');
    const inputValue=document.getElementById('storage-value');
    const id=inputId.value;
    const value=inputValue.value;
    localStorage.setItem(id,value);
    inputValue.value='';
    inputId.value='';
 }