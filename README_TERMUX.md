# 📱 Guia de Execução no Termux

**⚠️ AVISO CRÍTICO: Não execute o projeto em `/storage/emulated/0/` (pastas do sistema Android).**
O Android não permite a criação de "symlinks" no armazenamento compartilhado, o que causa o erro `EACCES: permission denied, symlink` durante o `npm install`.

## 1. Como Corrigir o Erro de Permissão (EACCES)
Você deve mover o projeto para a pasta interna do Termux. Execute estes comandos:

```bash
# Vá para a pasta home real do Termux
cd ~

# Clone o repositório aqui (onde as permissões funcionam)
git clone https://github.com/whesley264-oss/before-mendel.git
cd before-mendel

# Agora o install funcionará
npm install
```

## 2. Resolvendo o erro de SWC (Binário 404)
Se ao rodar `npm run dev` você vir um erro de `Failed to download swc package`, instale o binário manualmente:

```bash
# Para a maioria dos celulares modernos:
npm install @next/swc-android-arm64

# Se o seu celular for antigo:
npm install @next/swc-android-arm-eabi
```

## 3. Iniciar o Servidor
```bash
npm run dev
```
Acesse em: `http://localhost:3000`

---

### 💡 Dica de Performance:
O modo `dev` no Termux pode ser pesado. Para uma experiência **fluida e cinematográfica**, use o modo otimizado:

```bash
npm run build
npm run start
```
Acesse em: `http://localhost:3000`
