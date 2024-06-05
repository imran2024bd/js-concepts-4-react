// 37-7 Explore Localstorage And Session Storage With JSON

// localStorage.setItem('UserId' , 998722);
// localStorage.setItem('PenBrand', 'Matador');
// localStorage.setItem('PenColor' , 'White');
// localStorage.setItem('Capital' , 'Dhaka');


const addToLocalStorage = () =>{
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;
    

    localStorage.setItem(id,value);
    
    idInput.value = '';
    valueInput.value = '';

}