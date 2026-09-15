
const Api:string =   'https://jsonplaceholder.typicode.com'
const Lista:string = 'https://jsonplaceholder.typicode.com/todos' 
const Buscar:string =`https://jsonplaceholder.typicode.com/todos/1`
const post:string =  'https://jsonplaceholder.typicode.com/posts'
const Update:string =`https://jsonplaceholder.typicode.com/posts/1`


//Definindo contratos de tipos
type Post = {
    userId:number;
    id?: number; //campo opcional
    title: string;
    body: string;
};
type Coment ={
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
};

//GET /posts
async function listarPost(){
    console.log(`--- 1. GET /posts ---`);
    const res = await fetch(`${Api}/posts`);
    const dados: Post[] = await res.json();
    console.log(`✅ Status: ${res.status}`);
    console.log(`Lidos ${dados.length} posts. Ex: do primeiro:`,dados[0].title);
}

// GET /posts/1

async function buscarPorId(id:number) {
    console.log(`--- 2. GET /posts/1 ---`);
    const res = await fetch(`${Api}/posts/${id}`);
    const dados: Post = await res.json();
    console.log(`✅ Status: ${res.status}`);
    console.log(`Título do post ${id}:`, dados.title);
}

// GET /post/1/comments
async function listarComent(postId:number){
    console.log(`--- 3. GET /posts/1/comments ---`);
    const res = await fetch(`${Api}/posts/${postId}/comments`);
    const dados: Coment[] = await res.json();
    console.log(`✅ Status: ${res.status}`);
    console.log(`O post ${postId} tem ${dados.length} comentários Ex: Email do primeiro comentário.`, dados[0].email);
}
async function chamarReqs(){
    listarPost();
    buscarPorId(10);
    listarComent(20);

}
chamarReqs();