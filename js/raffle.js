const data = [
  {
    name: "Andre",
    img: "./img/Andre.JPG",
  },
  {
    name: "Bruno",
    img: "./img/Bruno.JPG",
  },
  {
    name: "Daniel",
    img: "./img/Daniel.JPG",
  },
  {
    name: "Fabio",
    img: "./img/Fabio.JPG",
  },
  {
    name: "Fabricio",
    img: "./img/Fabricio.JPG",
  },
  {
    name: "Gabriel",
    img: "./img/Gabriel.JPG",
  },
  {
    name: "Gabriela",
    img: "./img/Gabriela.JPG",
  },
  {
    name: "Gustavo",
    img: "./img/Gustavo.JPG",
  },
  {
    name: "Julia",
    img: "./img/Julia.JPG",
  },
  {
    name: "Marcela",
    img: "./img/Marcela.JPG",
  },
  {
    name: "Massao",
    img: "./img/Massao.JPG",
  },
  {
    name: "Pedro",
    img: "./img/Pedro.JPG",
  },
  {
    name: "Rafael",
    img: "./img/Rafael.JPG",
  },
  {
    name: "Rhaysa",
    img: "./img/Rhaysa.JPG",
  },
  {
    name: "Ricky",
    img: "./img/Ricky.JPG",
  },
  {
    name: "Sebá",
    img: "./img/Sebá.JPG",
  },
  {
    name: "Vinicius",
    img: "./img/Vinicius.JPG",
  },
];

class Raffle {
  constructor() {
    this.students = _.shuffle(data);
    this.students.forEach((student) => {
      this.addCard(student);
    });

    this.finalPairs = [];

    $(".card").on("click", (e) => {
      if (!$(e.currentTarget).hasClass("clicked")) {
        $(e.currentTarget).addClass("clicked");
        const name = $(e.currentTarget).attr("attr-name");
        this.addPaired(name);
      }
    });
  }

  addCard(card) {
    const cardElement = $(`
        <div class="card" attr-name="${card.name}">
            <div class="side back">
            </div>
            <div class="side front">
                <img src="${card.img}">
            </div>
        </div>
        `);
    $("#board").append(cardElement);
  }

  addPaired(name) {
    this.finalPairs.push(name);

    if (this.finalPairs.length % 2 == 0 && this.finalPairs.length < 15) {
      const chunks = _.chunk(this.finalPairs, 2);
      const pairs = $("#pairs");
      pairs.empty();
      let pair = "";

      chunks.forEach((chunk) => {
        pair = $(`
                <div class="pair">
                <span>${chunk[0]}</span>
                - 
                <span>${chunk[1]}</span>
                </div>
                `);
        pairs.append(pair);
      });
    } else if (this.finalPairs.length == 17) {
      const pairs = $("#pairs");
      pairs.empty();
      for(let i = 0; i < this.finalPairs.length; i+=2){
        if(i<14){
          let pair = "";
          pair = $(`
                  <div class="pair">
                  <span>${this.finalPairs[i]}</span>
                  - 
                  <span>${this.finalPairs[i+1]}</span>
                  </div>
                  `);
          pairs.append(pair);
        } else if(i === 16){
          const pairs = $("#pairs");
          // pairs.empty();
          let pair = "";
          pair = $(`
                  <div class="pair">
                  <span>${this.finalPairs[i-2]}</span>
                  - 
                  <span>${this.finalPairs[i-1]}</span>
                  - 
                  <span>${this.finalPairs[i]}</span>
                  </div>
                  `);
          pairs.append(pair);
        }
      }
    }
  }
}
