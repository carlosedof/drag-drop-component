# Componente Drag Drop

Projeto em Angular 9 que inclui um componente de Drag and Drop do PrimeNg adaptado para incluir pontos em um quadro, podendo ser utilizada uma imagem como background.

## Demo
A demonstração da funcionalidade pode ser acessada [aqui](https://drag-drop-component.herokuapp.com/).

## Instalação

Para subir a aplicação basta rodar o comando abaixo, que instalará as dependências e subirá o projeto por padrão na porta 4200.

```bash
yarn install && yarn start
```

## Funcionalidade

Trata-se de uma lista de itens que podem ser distribuídos em um quadro ou imagem, há um cálculo de proporção envolvendo o tamanho do container, por isso, independente do tamanho da janela do browser, o mapeamento deve permanecer constante.

## Caso de uso

Recurso foi utilizado na implementação de um mapeamento de dispositivos de acesso (leitor de digital) em cima de uma imagem de planta baixa de uma empresa. Após o mapeamento foi possível implementar uma lógica para monitorar em tempo real os eventos ocorridos em cada ponto.

## Implementação e Recursos Externos

Foram utilizadas algumas libs para facilitar a implementação da funcionalidade ou do layout, sendo elas: PrimeNG, FontAwesome

## Contribuições

Indicações de bugs ou melhorias são bem vindas.

