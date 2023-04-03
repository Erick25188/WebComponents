class ContadorClicks extends HTMLElement {
    constructor() {
        // Siempre llamar primero a super en el constructor
        super();

        //creamos variable de contador
       this.contador = 0;

        // Creamos un shadow root
        let shadow = this.attachShadow({ mode: 'open' });

        //crear un div
        const div = document.createElement('div');
        div.classList.add('display');

        //p con texto
        const p = document.createElement('p');
        p.innerHTML = 'Numero de clicks: '
        
        //crear botton
        const button = document.createElement('button');
        button.setAttribute('id','click');
        button.innerText = 'Click +';

        //agregar evento
        button.addEventListener('click',this.aumentar);


        //crear visualizador de clicks
        this.span = document.createElement('span');
        this.span.innerText = '0';

        //agregamos cotenido al html

        div.appendChild(button);
        div.appendChild(p)
        div.appendChild(this.span);

        this.shadowRoot.appendChild(div);

    }

    aumentar = () => {
        console.log(this.contador);
        this.contador += 1;
        console.log(this.contador);
        this.span.textContent = this.contador;
    }

}


customElements.define('contador-click', ContadorClicks);
