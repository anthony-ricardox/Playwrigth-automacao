import { describe, expect, it, vi } from 'vitest';
import { listarPosts, buscarPostPorId, listarComentariosPorPost, criarPost } from '../src/aula28/api';

describe('API do JSONPlaceholder', () => {
  it('lista posts', async () => {
    const posts = [{ id: 1, userId: 1, title: 'titulo', body: 'conteudo' }];
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      json: async () => posts,
    }));

    await expect(listarPosts()).resolves.toEqual(posts);
    expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts');
  });

  it('busca um post pelo id', async () => {
    const post = { id: 2, userId: 7, title: 'post 2', body: 'conteudo 2' };
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      json: async () => post,
    }));

    await expect(buscarPostPorId(2)).resolves.toEqual(post);
    expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts/2');
  });

  it('lista comentários de um post', async () => {
    const comentarios = [{ postId: 1, id: 1, name: 'coment', email: 'a@b.com', body: 'ok' }];
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      json: async () => comentarios,
    }));

    await expect(listarComentariosPorPost(1)).resolves.toEqual(comentarios);
    expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts/1/comments');
  });

  it('cria um post', async () => {
    const payload = { userId: 1, title: 'novo', body: 'conteudo novo' };
    const retorno = { id: 101, ...payload };
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      json: async () => retorno,
    }));

    await expect(criarPost(payload)).resolves.toEqual(retorno);
    expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts', expect.objectContaining({
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    }));
  });
});
