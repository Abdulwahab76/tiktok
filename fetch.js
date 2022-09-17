// async function showAvatar() {

//     // read our JSON
//     // let response = await fetch('/article/promise-chaining/user.json');
//     // let user = await response.json();
//     // console.log(response);
//     // // read github 
//     let githubResponse = await fetch(`https://api.github.com/users/Abdulwahab76`);
//     let githubUser = await githubResponse.json();
//   console.log(githubUser);
//     // show the avatar
//     let img = document.createElement('img');
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);
  
//     // wait 3 seconds
//     await new Promise((resolve, reject) => setTimeout(resolve, 3000));
  
//     img.remove();
  
//     return githubUser;
//   }
  
//   showAvatar();


//   async function fetchText() {
// //  let url = 
//     try{
//         let response = await fetch('https://api.github.co/users/Abdulwahab7');
//         let data = await response.json();
//         console.log('find',data);

//     }catch(err){
//         console.log('err==',err);
//     }
// }
// fetchText()


let inp = document.querySelector('input[name="inp"]');

let obj = [{
  id: '1',
  name: 'John',
},{
  id: '2',
  name: 'Jane',
},{
  id: '3',
  name: 'Doe',
}]
let submit =()=>{
  
    let search = obj.filter((val,ind)=>{
      let term = val.name.toLowerCase().includes(inp.value)
 return term
  
    })
    console.log(search);
    console.log('try to search');
 

}

