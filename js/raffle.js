const data = [
  {
    name: 'Adamy',
    img: './img/Adamy.jpg',
  },
  {
    name: 'bruno',
    img: './img/Bruno.jpg',
  },
  {
    name: 'Eric',
    img: './img/Eric.jpg',
  },
  {
    name: 'Fabio',
    img: './img/Fabio.jpg',
  },
  {
    name: 'Felipe',
    img: './img/Felipe.jpg',
  },
  {
    name: 'Filipe',
    img: './img/Filipe.jpg',
  },
  {
    name: 'Gabriel',
    img: './img/Gabriel.jpg',
  },
  {
    name: 'Grazi',
    img: './img/Grazi.jpg',
  },
  {
    name: 'Guilherme',
    img: './img/Guilherme.jpg',
  },
  {
    name: 'Lucas',
    img: './img/Lucas.jpg',
  },
  {
    name: 'Marcelle',
    img: './img/Marcelle.jpg',
  },
  {
    name: 'Marco',
    img: './img/Marco.jpg',
  },
  {
    name: 'Marcos',
    img: './img/Marcos.jpg',
  },
  {
    name: 'Millene',
    img: './img/Millene.jpg',
  },
  {
    name: 'Mônica',
    img: './img/Monica.jpg',
  },
  {
    name: 'Pedro',
    img: './img/Pedro.jpg',
  },
  {
    name: 'Rafael',
    img: './img/Rafael.jpg',
  },
  {
    name: 'Saulo',
    img: './img/Saulo.jpg',
  },
];

class Raffle {
  constructor() {
    this.students = _.shuffle(data);
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
