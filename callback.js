const posts=[
    {title:'Post One', body:'This is Post One'},
    {title:'Post Two', body:'This is Post Two'}
];

function getposts(){
    setTimeout(() =>{
        let output = '';
        posts.forEach((post,index)=>{
            output+=`<li> ${post.title}</li>`;
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