const posts=[
    {title:'Post One', body:'This is Post One',CreatedAt :new Date().getTime()},
    {title:'Post Two', body:'This is Post Two',CreatedAt :new Date().getTime()}
];


function getposts(){
        setInterval(()=>{
            let output = ''; 
            posts.forEach((post)=>{
            output+=`<li> ${post.title} Last Updated = ${(new Date().getTime() - post.CreatedAt)/1000} seconds ago</li>`;
            });
        document.body.innerHTML=output;
        },1000)
        
    }
function createPost(post,callback){
    setTimeout(() => {
        posts.push({...post, CreatedAt: new Date().getTime()});
        callback();
    }, 2000);
}

getposts();
createPost({title:'Post Three',body:'This is Post Three'},getposts);

function create4thPost(post,callback){
    setTimeout(() => {
       posts.push({...post, CreatedAt: new Date().getTime()});
       callback(); 
    }, 4000);
}
create4thPost({title:'Post Four',body:'This is Post Four'},getposts);

