# 📱 Guia de Execução no Termux

Como você está usando o Termux, aqui estão os passos exatos para rodar o projeto localmente.

## 1. Instalar Dependências do Sistema
Certifique-se de que o Node.js e o Git estão instalados no seu Termux:
```bash
pkg update && pkg upgrade
pkg install nodejs git
```

## 2. Clonar o Repositório
```bash
git clone https://github.com/whesley264-oss/before-mendel.git
cd before-mendel
```

## 3. Instalar Dependências do Projeto
```bash
npm install
```

## 4. Corrigindo o erro de SWC (Binário não encontrado)
O erro `failed to download swc package` acontece porque o Next.js tenta baixar um binário otimizado que às vezes não está disponível para a arquitetura do Android no NPM.

**A solução é forçar o Next.js a usar o interpretador Rust que já vem no pacote ou desativar o Turbopack se necessário.**

No seu `package.json`, eu já configurei versões mais estáveis (Next.js 15). Se o erro persistir ao rodar `npm run dev`, tente o seguinte:

```bash
# Rode sem o Turbopack (padrão)
npm run dev
```

Se ainda assim der erro de SWC, tente instalar o binário manualmente no Termux:
```bash
npm install @next/swc-android-arm64
```
*(Ou arm-eabi se o seu celular for mais antigo)*

## 5. Iniciar o Servidor
```bash
npm run dev
```
Acesse em: `http://localhost:3000`

---

### 💡 Dicas de Performance:
No Termux, o modo `dev` pode ser pesado. Recomendo rodar o build otimizado para uma experiência fluida:
```bash
npm run build
npm run start
```
