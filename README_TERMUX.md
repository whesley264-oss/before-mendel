# 📱 Guia de Execução no Termux

Como você está usando o Termux, aqui estão os passos exatos para rodar o projeto localmente antes de fazer o deploy.

## 1. Instalar Dependências do Sistema
Certifique-se de que o Node.js e o Git estão instalados no seu Termux:
```bash
pkg update && pkg upgrade
pkg install nodejs git
```

## 2. Clonar o Repositório (se ainda não fez)
```bash
git clone https://github.com/whesley264-oss/before-mendel.git
cd before-mendel
```

## 3. Instalar Dependências do Projeto
O erro `next: not found` acontece porque as dependências ainda não foram baixadas para a pasta `node_modules`. Execute:
```bash
npm install
```
*Isso pode demorar alguns minutos dependendo da sua conexão e do dispositivo.*

## 4. Iniciar o Servidor de Desenvolvimento
```bash
npm run dev
```

## 5. Acessar o Site
O Next.js iniciará o servidor em: `http://localhost:3000`

Abra o navegador do seu celular (Chrome, Firefox, etc) e digite o endereço acima.

---

### 💡 Dicas para Termux:

- **Performance:** Se o site parecer lento no celular durante o desenvolvimento, tente rodar a versão de produção (que é muito mais rápida):
  ```bash
  npm run build
  npm run start
  ```
- **Portas:** Se a porta `3000` estiver ocupada, o Next.js tentará a `3001`, `3002`, etc. Fique atento ao log no terminal.
- **Armazenamento:** Garanta que você deu permissão de armazenamento ao Termux para evitar erros de leitura/escrita: `termux-setup-storage`.
