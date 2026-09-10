//Importando função utilitaria  de aguardar tempo(delay)
import { Aguardar } from "../../utils/helpers";

//Simulando APi de Login
const SimularLogin = (usuario: string, senha: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (usuario === "admin" && senha === "12345678") {
      resolve("token-secreto-aprovado-123");
    } else {
      reject("Erro 401 = Usuario ou senha Invalido ❌ ");
    }
  });
};

async function ExecutarCt() {
  console.log("⌛ Iniciando Cenário de Teste");
  try {
    console.log("passo 1 - abrindo tela de login");
    await Aguardar(2000);
    console.log("passo 2 - inserindo credênciais...");
    await Aguardar(3000);

    const token = await SimularLogin("admin", "12345678");
    console.log(`Sucesso!! Usuario Logado 🙅‍♂️ `);
  } catch (error) {
    console.error(`ERRO - Usuario ou Senha Incorreta ${error}`);
  } finally {
    console.log(`Passo final: fechando Navegador e limpando dados`);
  }
}

ExecutarCt();
