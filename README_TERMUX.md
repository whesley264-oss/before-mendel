# 📱 Guia de Execução no Termux

O Termux pode apresentar erros ao tentar baixar os binários otimizados do Next.js (SWC). Siga estes passos para garantir que o projeto rode corretamente.

## 1. Preparação do Ambiente
```bash
pkg update && pkg upgrade
pkg install nodejs-lts git
```
*Recomendo usar o `nodejs-lts` para maior estabilidade.*

## 2. Instalação do Projeto
```bash
git clone https://github.com/whesley264-oss/before-mendel.git
cd before-mendel
npm install
```

## 3. Resolvendo o erro de SWC (O MAIS IMPORTANTE)
Se ao rodar `npm run dev` você vir um erro como `Error: request failed with status 404` ao baixar o `@next/swc-android`, você precisa instalar o binário manualmente:

```bash
# Para a maioria dos celulares modernos:
npm install @next/swc-android-arm64

# Se o seu celular for mais antigo:
npm install @next/swc-android-arm-eabi
```

## 4. Iniciar o Servidor
```bash
npm run dev
```
Acesse em: `http://localhost:3000`

---

### 💡 Dica de Performance (Recomendado):
O modo de desenvolvimento (`dev`) no Termux pode travar ou ficar lento. Para ter a experiência **cinematográfica e fluida** que o projeto oferece, use o modo de produção:

```bash
# Compila o projeto (otimiza tudo)
npm run build

# Inicia o servidor otimizado
npm run start
```
Acesse em: `http://localhost:3000`
