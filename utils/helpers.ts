///Função delay para retorna Promises

export function Aguardar(ms: number):Promise<void>{
    return new Promise(resolve => setTimeout(resolve,ms))
}

