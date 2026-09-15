

type Post ={
  id?: number;
  userId:number;
  title: string;
  body: string;
}

type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const Api:string =   'https://jsonplaceholder.typicode.com'
const Lista:string = 'https://jsonplaceholder.typicode.com/todos' 
const Buscar:string =`https://jsonplaceholder.typicode.com/todos/1`
const Post:string =  'https://jsonplaceholder.typicode.com/posts'
const Update:string =`https://jsonplaceholder.typicode.com/posts/1`

const Enviar :Post = ( title, body) => {

}
async function ListarPost() {
  const res = await fetch(` ${Post}`)
  const dados:Post[] = await res.json();

  console.log(`Status: ${res.status}`)
  console.log(` Lidos: ${dados.length} posts` )
  console.log(`Titulo: ${dados[0].title}`)
}

ListarPost()

/*async function ListarDados() {
  const r = await fetch(`${Lista}`)
  const dados:Post[] = await r.json();

  console.log(`Title: ${dados}, Body: ${dados}`)
} 

ListarDados()*/

// Get /post/1
async function BuscarId(id:number) {
  console.log('--- 2. GET /posts/1')
  const res = await fetch(`${Buscar}/${id}`)
  const dados: Post[] = await res.jason();

  console.log(`Status: ${res.status}`)
  console.log(`Titulo: ${dados[id].title}`)
}



// Get /posts/1/comment
async function  ListarComment(postId:number) {
  console.log('--- 3. GET /posts/1/comment')
  const res = await fetch(`${Buscar}/posts/${postId}/comments`)
  const dados: Comment[] = await res.jason();

  console.log(`Status: ${res.status}`)
  console.log(`O post ${postId} tem ${dados.length} comment
            EX: Email do primeiro comentario. `, dados[0].email)
}



/*async function criaPost(title: string): Promises<Post> {
  const res = await fetch("https://jsonplaceholder/posts", {
    method: "POST",
    headers: { "Content-Type": "aplication/json" },
    body: JSON.stringify({ title: titulo, body: userId }),
  });

  if(res.ok){
    try {
        
    } catch (error) {
        
    }
  }
}
*/
