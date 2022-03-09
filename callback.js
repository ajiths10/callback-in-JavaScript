const posts=[
    {title:'Post One', body:'This is Post One',CreatedAt :new Date().getTime()},
    {title:'Post Two', body:'This is Post Two',CreatedAt :new Date().getTime()}
];


function getposts(){

        let output = ''; 
        for(let i=0;i<posts.length;i++){
            output+=`<li> ${posts[i].title} Last Updated = ${(new Date().getTime() - posts[i].CreatedAt)/1000} Sec ago</li>`;
        }
        document.body.innerHTML=output;
    
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

function getLastEditTime(){
    
    return time;
}

function getLastEditTime(){

}