# 📖 Citações Aleatórias  

Aplicação React que exibe citações aleatórias acompanhadas de seus autores.  
Além disso, permite compartilhar a frase diretamente pelo WhatsApp com apenas um clique.  

![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)  
![Vite](https://img.shields.io/badge/Vite-6-purple?style=for-the-badge&logo=vite)  
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)  

---

## 🚀 Demonstração  

👉 [Deploy no GitHub Pages](https://github.com/TonySouz/citacoes)  

---

## 🎯 Funcionalidades  

- 🎲 Exibe uma citação aleatória de uma lista pré-definida.  
- 🎨 Gera uma cor aleatória a cada nova citação, alterando o fundo e o estilo.  
- 📱 Compartilhamento rápido da citação pelo **WhatsApp**.  
- ✨ Efeito de transição suave (`fade-in`) ao trocar de citação.  

---

## 🛠️ Tecnologias Utilizadas  

- **React 19**  
- **TypeScript**  
- **Vite** (ambiente de desenvolvimento e build)  
- **React Icons** (ícones do WhatsApp e aspas)  
- **CSS personalizado** para animações e layout  
- **gh-pages** para deploy no GitHub Pages  

---

## 📂 Estrutura do Projeto  

```
citacoes/
├── src/
│   ├── components/
│   │   └── quotes.json       # Arquivo com lista de citações
│   ├── Citacoes.tsx          # Componente principal
│   ├── styles.css            # Estilos globais e animações
│   └── main.tsx              # Ponto de entrada da aplicação
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 📖 Estrutura do `quotes.json`  

O arquivo `quotes.json` contém uma lista de citações no seguinte formato:  

```json
{
  "quotes": [
    {
      "quote": "A vida é 10% o que acontece comigo e 90% como eu reajo a isso.",
      "author": "Charles Swindoll"
    },
    {
      "quote": "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.",
      "author": "Winston Churchill"
    }
  ]
}
```

---

## 📸 Captura de Tela (exemplo)

![exemplo](/src/componets/image.png)

---

## 👨‍💻 Autor  

**Tony Souza**  
- 💼 [LinkedIn](https://www.linkedin.com/in/tony-souza/)
- 📂 [Portfólio](https://tonysouz.github.io/portfolio/)

---

## 📝 Licença  

Este projeto está sob a licença MIT. Sinta-se livre para usar e modificar.  