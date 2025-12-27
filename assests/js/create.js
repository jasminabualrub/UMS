/*const inputs= document.querySelectorAll('.createuser .form-control');
const createuserform=document.querySelector(".createuser");
console.log(createuserform);
createuserform.addEventListener("submit",async(e)=>{
    e.preventDefault();
    const formData= new formData();
    console.log(formData);
   var user ={
        name:inputs[0].value,
        email:inputs[1].value,
        age:inputs[2].value,



    }
    const response = await axios.post(`http://ums12.runasp.net/api/users`,user);
//console.log(user);
});*/
const createuserform = document.forms['AddUserForm'];
createuserform.addEventListener('submit',async(e)=>{
    e.preventDefault();
    const formdata= new FormData(createuserform);
    const response= await axios.post(`https://ums12.runasp.net/api/users`,formdata);
    
if( response.status == 200){
    location.href='./index.html';
}
console.log(response);
})