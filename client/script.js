//edit your code 
fetch('http://localhost:3000/user?name=Aaya',{
    method:'GET',
    headers: {
        'Content-Type': 'application/json',
      },
}).then(res=>res.json()).then(val=>console.log(val))
.catch(err=>{
    console.log(err);
});
fetch('http://localhost:3000/user',{
    method:'POST',
    body:JSON.stringify({
        'name':'Aaya',
    }),
    headers: {
        'Content-Type': 'application/json',
      },
}).then(res=>res.json()).then(val=>console.log(val))
.catch(err=>{
    console.log(err);
});