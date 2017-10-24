**Repositório criado para estudo sobre Ionic**

* Desenvolvimento de App para Test Drive de Carros Parte I 

**Subir Aplicação**

* npm install

* ionic serve --lab 

* Importando componente de loading

- Dentro da importação do **NavController** colocar o componente **LoadingController**
- Chamar dentro do **constructor**

> private _loadingCtrl: LoadingController

> present(); Exibi o loader que acabamos de construir

> dismiss(); Fecha o loader

**stacked** Essa propriedade do componente **ion-label** faz com que o label fique acima do campo, com letra um pouco menor.


**Lidando com erros e notificando o usuário**

* Importar o **AlertController** do módulo **ionic-angular**, e injetá-lo no construtor do componente.

* #toggle: exemplo de variável de template. Sua presença em um ion-toggle faz com que ela guarde uma referência para o componente.

**setRoot** Finaliza a pilha e começa do zero para página inicial do aplicativo. Esvazia a pilha indicando seu primeiro elemento. Sendo o primeiro elemento, não há back button e toda navegação começa a partir dele.
