class Raffle {
  constructor() {
    this.students = _.shuffle([
      {
        name: 'Bruno',
        img: './img/Bruno.jpg'
      },
      {
        name: 'Cristiana',
        img: './img/Cristiana.jpg'
      },
      {
        name: 'Guilherme',
        img: './img/Guilherme.jpg'
      },
      {
        name: 'Henrique',
        img: './img/Henrique.jpg'
      },
      {
        name: 'Ilara',
        img: './img/Ilara.jpg'
      },
      {
        name: 'Joao',
        img: './img/Joao.jpg'
      },
      {
        name: 'Jorge',
        img: './img/Jorge.jpg'
      },
      {
        name: 'Marianna',
        img: './img/Marianna.jpg'
      },
      {
        name: 'Matheus',
        img: './img/Matheus.jpg'
      },
      {
        name: 'Murillo',
        img: './img/Murillo.jpg'
      },
      {
        name: 'Raphael',
        img: './img/Raphael.jpg'
      },
      {
        name: 'Karen',
        img: ''
      }
    ]);
    this.students.forEach(student => {
      this.addCard(student);
    });

    this.finalPairs = [];

    $('.card').on('click', e => {
      if (!$(e.currentTarget).hasClass('clicked')) {
        $(e.currentTarget).addClass('clicked');
        const name = $(e.currentTarget).attr('attr-name');
        this.addPaired(name);
      }
    });
  }

  // eslint-disable-next-line class-methods-use-this
  addCard(card) {
    const cardElement = $(`
        <div class="card" attr-name="${card.name}">
            <div class="side back">
                <img src="https://www.ironhack.com/assets/shared/logo.svg">
            </div>
            <div class="side front">
                <img src="${card.img}">
            </div>
        </div>
        `);
    $('#board').append(cardElement);
  }

  addPaired(name) {
    this.finalPairs.push(name);

    if (this.finalPairs.length % 2 == 0) {
      const chunks = _.chunk(this.finalPairs, 2);
      const pairs = $('#pairs');
      pairs.empty();
      chunks.forEach(chunk => {
        const pair = $(`
                <div class="pair">
                <span>${chunk[0]}</span>
                - 
                <span>${chunk[1]}</span>
                </div>
                `);
        pairs.append(pair);
      });
    }
  }
}
