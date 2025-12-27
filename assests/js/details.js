
const getUser = async()=>{
    const params=new URLSearchParams(location.search);
    const userId=params.get('userId');
    const response = await axios.get(`https://ums12.runasp.net/api/users/${userId}`);
    console.log(userId) ;
    if(response.status == 200)
    return response.data;  
}
getUser();
const displayUserData=async()=>{
const response=await getUser();
console.log(response);
document.querySelector('.userName').innerHTML=response.data.name;
}

displayUserData();

