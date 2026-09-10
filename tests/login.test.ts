import { test, expect, vi } from "vitest";

const LoginLento = (usuario: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Bem vindo, ${usuario}!`);
    }, 5000);
  });
};

test("Simular login usando Fake Timers", async () => {
  vi.useFakeTimers();

  try {
    console.log("⌛ Iniciando Cenario de Teste ");

    const promessaLogin = LoginLento("Dr. Doflex");
    vi.advanceTimersByTime(5000);

    const resultado = await promessaLogin;

    expect(resultado).toBe("Bem vindo, Dr. Doflex!");
    console.log("Sucesso!   teste realizado na velocidade da luz");
  } finally {
    vi.useRealTimers();
  }
});
