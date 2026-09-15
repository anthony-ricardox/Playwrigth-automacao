
/**
 * Arquivo responsável por demonstrar requisições HTTP para a API pública do JSONPlaceholder.
 *
 * Esse exemplo mostra como consumir endpoints de posts e comentários usando fetch e TypeScript.
 * A API de teste é a base abaixo e os endpoints são montados dinamicamente.
 */

/** Base URL da API utilizada nos exemplos. */
const Api: string = 'https://jsonplaceholder.typicode.com';

/** Endpoint para listar todos os todos da API. */
const Lista: string = 'https://jsonplaceholder.typicode.com/todos';

/** Endpoint de exemplo para buscar um todo específico. */
const Buscar: string = 'https://jsonplaceholder.typicode.com/todos/1';

/** Endpoint para criar ou consultar posts. */
const post: string = 'https://jsonplaceholder.typicode.com/posts';

/** Endpoint de exemplo para atualizar um post específico. */
const Update: string = 'https://jsonplaceholder.typicode.com/posts/1';

/**
 * Estrutura de dados de um post retornado pela API.
 *
 * O campo `id` é opcional porque a API pode retornar um objeto em construção
 * em alguns cenários, mas no retorno padrão ele costuma vir preenchido.
 */
type Post = {
    userId: number;
    id?: number;
    title: string;
    body: string;
};

/**
 * Estrutura de dados de um comentário associado a um post.
 */
type Coment = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
};

/**
 * Busca todos os posts cadastrados na API.
 *
 * Realiza uma requisição GET para /posts e imprime:
 * - o status da resposta;
 * - a quantidade de registros retornados;
 * - o título do primeiro item como exemplo.
 */
async function listarPost() {
    console.log('--- 1. GET /posts ---');
    const res = await fetch(`${Api}/posts`);
    const dados: Post[] = await res.json();
    console.log(`✅ Status: ${res.status}`);
    console.log(`Lidos ${dados.length} posts. Ex: do primeiro:`, dados[0].title);
}

/**
 * Busca um post específico pelo ID.
 *
 * @param id Identificador do post a ser procurado.
 */
async function buscarPorId(id: number) {
    console.log('--- 2. GET /posts/1 ---');
    const res = await fetch(`${Api}/posts/${id}`);
    const dados: Post = await res.json();
    console.log(`✅ Status: ${res.status}`);
    console.log(`Título do post ${id}:`, dados.title);
}

/**
 * Lista todos os comentários de um post específico.
 *
 * @param postId Identificador do post cujo comentário será consultado.
 */
async function listarComent(postId: number) {
    console.log('--- 3. GET /posts/1/comments ---');
    const res = await fetch(`${Api}/posts/${postId}/comments`);
    const dados: Coment[] = await res.json();
    console.log(`✅ Status: ${res.status}`);
    console.log(`O post ${postId} tem ${dados.length} comentários. Ex: email do primeiro comentário:`, dados[0].email);
}

/**
 * Executa as requisições de exemplo em sequência.
 *
 * Essa função centraliza a chamada das operações demonstradas no arquivo.
 */
async function chamarReqs() {
    await listarPost();
    await buscarPorId(10);
    await listarComent(20);
}

chamarReqs();