const posts=[
    {title:'Post One', body:'This is Post One'},
    {title:'Post Two', body:'This is Post Two'}
];


function getposts(){
    setTimeout(() =>{
        let output = '';
        var nowTime = new Date();
        let time = `${nowTime.getHours()} :  ${nowTime.getMinutes()} : ${nowTime.getSeconds()}`; 
        posts.forEach((post,index)=>{
            output+=`<li> ${post.title} Last edited = ${time} </li>`;
        });
        document.body.innerHTML=output;
    },1000);
}

function createPost(post,callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

getposts();
createPost({title:'Post Three',body:'This is Post Three'},getposts);

function create4thPost(post,callback){
    setTimeout(() => {
       posts.push(post);
       callback(); 
    }, 4000);
}
create4thPost({title:'Post Four',body:'This is Post Four'},getposts);

function getLastEditTime(){
    
    return time;
}

function getLastEditTime(){

}