const getUsers = async()=>{
    const response=await axios.get(`https://ums12.runasp.net/api/users?limit=1000`);
    //console.log(response.data);
   
   return response.data;
}
getUsers();
const displayUsers=async()=>{
    const result=await getUsers();
    const users=result.users.map((user)=>{
       // console.log(user);
       
    return `
    
    <tr>
    <td>${user.id}</td>
    <td>${user.name}</td>
    <td ><img src="${user.imageUrl}" class=" img-fluid w-25"/></td>
    <td  >
    <button class="btn btn-outline-danger" onclick=deleteUser(${user.id})>Delete</button>
    <a href= "./details.html?userId=${user.id}" class=" btn btn-outline-info">details</a>
    </td>
     
    </tr>
    
    
    `
  

   }).join('');
   document.querySelector('.Users tbody').innerHTML=users;
}
displayUsers();

const deleteUser=async(id)=>{
    const userid=await axios.delete(`https://ums12.runasp.net/api/users/${id}`);
   
  //  alert(id);

}
    