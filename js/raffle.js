class Raffle {
  constructor() {
    this.students = _.shuffle([{
        name: 'Andre',
        img: './img/Andre.jpg',
      },
      {
        name: 'Carol',
        img: './img/Carol.jpg',
      },
      {
        name: 'Daniel',
        img: './img/Daniel.jpg',
      },
      {
        name: 'Elaine',
        img: './img/Elaine.jpg',
      },
      {
        name: 'Gabriel',
        img: './img/Gabriel.jpg',
      },
      {
        name: 'Guilherme',
        img: './img/Gui.jpg',
      },
      {
        name: 'Ismael',
        img: './img/Ismael.jpg',
      },
      {
        name: 'Jeff',
        img: './img/Jeff.jpg',
      },
      {
        name: 'João',
        img: './img/Joao.jpg',
      },
      {
        name: 'Mohsan',
        img: './img/Mohsan.jpg',
      },
      {
        name: 'Radisol',
        img: './img/Radisol.jpg',
      },
      {
        name: 'Romulo',
        img: './img/Romulo.jpg',
      },
      {
        name: 'Ronaldo',
        img: './img/Ronaldo.jpg',
      },
      {
        name: 'Sarah',
        img: './img/Sarah.jpg',
      },
    ]);
    this.students.forEach((student) => {
      this.addCard(student);
    });

    this.finalPairs = [];

    $('.card').on('click', (e) => {
      if (!$(e.currentTarget).hasClass('clicked')) {
        $(e.currentTarget).addClass('clicked');
        const name = $(e.currentTarget).attr('attr-name');
        this.addPaired(name);
      }
    });
  }

  addCard(card) {
    const card_el = $(`
        <div class="card" attr-name="${card.name}">
            <div class="side back">
                <img src="https://www.ironhack.com/assets/shared/logo.svg">
            </div>
            <div class="side front">
                <img src="${card.img}">
            </div>
        </div>
        `);
    $('#board').append(card_el);
  }

  addPaired(name) {
    this.finalPairs.push(name);

    if (this.finalPairs.length % 2 == 0) {
      const chunks = _.chunk(this.finalPairs, 2);
      const pairs = $('#pairs');
      pairs.empty();
      chunks.forEach((chunk) => {
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
