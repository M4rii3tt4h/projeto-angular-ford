// match.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-match',
  imports: [CommonModule],
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent {
  finished: boolean = false;
  currentQuestionIndex: number = 0;

  questions = [
  {
    text: 'Como você define sua rotina diária?',
    options: [
      { text: 'Aventura e trilhas', cars: ['Ranger Raptor', 'Bronco Sport'] },
      { text: 'Trânsito urbano', cars: ['Territory', 'Maverick', 'Mustang Mach-E'] },
      { text: 'Viagens longas', cars: ['Ranger', 'F-150'] },
      { text: 'Gosto de velocidade', cars: ['Mustang GT', 'Mustang MT'] },
      { text: 'Tecnologia e sustentabilidade', cars: ['Mustang Mach-E', 'Territory'] }
    ]
  },
  {
    text: 'Qual é o seu estilo de direção?',
    options: [
      { text: 'Tranquilo e seguro', cars: ['Territory', 'F-150'] },
      { text: 'Emocionante e potente', cars: ['Mustang GT', 'Ranger Raptor'] },
      { text: 'Prático e ágil', cars: ['Maverick', 'Bronco Sport'] },
      { text: 'Comando total (manual)', cars: ['Mustang MT'] },
      { text: 'Alta tecnologia e assistência', cars: ['Mustang Mach-E', 'Ranger'] }
    ]
  },
  {
    text: 'Qual destas frases mais te representa?',
    options: [
      { text: 'Meu carro precisa ir bem em terrenos difíceis', cars: ['Ranger Raptor', 'F-150'] },
      { text: 'Quero conforto e estilo ao mesmo tempo', cars: ['Territory', 'Maverick'] },
      { text: 'Uso o carro para trabalho e lazer', cars: ['Ranger'] },
      { text: 'Gosto de potência e design chamativo', cars: ['Mustang GT', 'Mustang Mach-E'] },
      { text: 'Prezo por inovação e conectividade', cars: ['Mustang Mach-E', 'Bronco Sport'] }
    ]
  },
  {
    text: 'Quantas pessoas costumam andar com você?',
    options: [
      { text: 'Normalmente só eu ou um acompanhante', cars: ['Mustang MT', 'Mustang GT'] },
      { text: 'Família ou amigos sempre presentes', cars: ['Territory', 'F-150'] },
      { text: 'Costumo carregar ferramentas ou objetos', cars: ['Ranger', 'Maverick', 'F-150'] },
      { text: 'Prefiro espaço mesmo com poucos passageiros', cars: ['Mustang Mach-E', 'Bronco Sport'] },
      { text: 'Levo pets e malas, gosto de porta-malas grande', cars: ['Bronco Sport', 'Ranger'] }
    ]
  },
  {
    text: 'Qual desses fatores é mais importante para você?',
    options: [
      { text: 'Economia de combustível', cars: ['Mustang Mach-E', 'Maverick'] },
      { text: 'Design premium e elegante', cars: ['Territory', 'F-150'] },
      { text: 'Alto desempenho e torque', cars: ['Mustang GT', 'Ranger Raptor'] },
      { text: 'Tecnologia embarcada e conectividade', cars: ['Ranger', 'Mustang Mach-E'] },
      { text: 'Robustez e força para o trabalho', cars: ['F-150', 'Ranger'] }
    ]
  },
  {
    text: 'Como você usaria o carro nos finais de semana?',
    options: [
      { text: 'Viagens com família ou amigos', cars: ['F-150', 'Territory', 'Bronco Sport'] },
      { text: 'Eventos, encontros ou track days', cars: ['Mustang GT', 'Mustang MT'] },
      { text: 'Aventuras e trilhas leves ou médias', cars: ['Ranger Raptor', 'F-150'] },
      { text: 'Sair com estilo pela cidade', cars: ['Maverick', 'Mustang Mach-E'] },
      { text: 'Quero um carro que esteja sempre pronto pra tudo', cars: ['Ranger', 'Maverick'] }
    ]
  },
  {
    text: 'Qual dessas qualidades você mais admira em um carro?',
    options: [
      { text: 'Força e resistência', cars: ['F-150', 'Ranger Raptor'] },
      { text: 'Tecnologia e inteligência', cars: ['Mustang Mach-E', 'Ranger'] },
      { text: 'Estilo marcante e exclusivo', cars: ['Mustang GT', 'Maverick'] },
      { text: 'Versatilidade para várias situações', cars: ['Maverick', 'Bronco Sport'] },
      { text: 'Sustentabilidade e inovação', cars: ['Mustang Mach-E', 'Territory'] }
    ]
  }
];

carImages: { [key: string]: string } = {
  'Mustang GT': 'img/mustang-gt.png',
  'Mustang MT': 'img/mustang-mt.png',
  'Mustang Mach-E': 'img/mustang-mach-E.png',
  'Territory': 'img/territory.png',
  'Ranger Raptor': 'img/ranger-raptor.jpg',
  'Ranger': 'img/Ranger-New-Gen.png',
  'F-150': 'img/f-150.png',
  'Bronco Sport': 'img/bronco-sport.png',
  'Maverick': 'img/maverick.png'
};

carLinks: { [key: string]: string } = {
  'Mustang GT': 'https://www.ford.com.br/performance/mustang/',
  'Mustang MT': 'https://www.ford.com.br/performance/mustang-mt/',
  'Mustang Mach-E': 'https://www.ford.com.br/performance/mustang-mach-e/',
  'Territory': 'https://www.ford.com.br/suvs-e-crossovers/territory/',
  'Ranger Raptor': 'https://www.ford.com.br/picapes/ranger-raptor/',
  'Ranger': 'https://www.ford.com.br/picapes/ranger/',
  'F-150': 'https://www.ford.com.br/picapes/f-150/',
  'Bronco Sport': 'https://www.ford.com.br/suvs-e-crossovers/bronco-sport/',
  'Maverick': 'https://www.ford.com.br/picapes/maverick/'
};

showModal: boolean = false;
selectedCar: string = '';

carDetails: { [key: string]: any } = {
  'Ranger': {
    preco: 'R$238.000 / R$366.600',
    versoes: '6',
    motor: '3.0 V6 ou 2.0',
    potencia: '250cv / 170cv',
    torque: '600Nm / 405Nm'
  },
  'Ranger Raptor': {
    preco: 'R$490.000',
    versoes: 'Única',
    motor: '3.0 V6 Bi-turbo',
    potencia: '397cv',
    torque: '583Nm'
  },
  'Maverick': {
    preco: 'R$219.900 / R$239.900',
    versoes: '2',
    motor: '2.0L Turbo EcoBoost GTDi',
    potencia: '253cv',
    torque: '380Nm'
  },
  'F-150': {
    preco: 'R$560.000 / R$580.000',
    versoes: '3',
    motor: 'Coyote 5.0L V8',
    potencia: '405cv',
    torque: '556Nm'
  },
  'Territory': {
    preco: 'R$215.000',
    versoes: 'Única',
    motor: '1.5L EcoBoost®',
    potencia: '169cv',
    torque: '250Nm'
  },
  'Bronco Sport': {
    preco: 'R$260.000',
    versoes: 'Única',
    motor: '2.0L EcoBoost®',
    potencia: '253cv',
    torque: '380Nm'
  },
  'Mustang Mach-E': {
    preco: 'R$480.000',
    versoes: '3',
    motor: 'Elétrico',
    potencia: '487cv',
    torque: '860Nm',
    aceleracao: '0–100 km/h em 3,7s',
    eletrico: true
  },
  'Mustang GT': {
    preco: 'R$549.000',
    versoes: '3',
    motor: 'Coyote 5.0L V8',
    potencia: '492cv',
    torque: '567Nm'
  },
  'Mustang MT': {
    preco: 'R$600.000',
    versoes: '3',
    motor: 'Coyote 5.0L V8',
    potencia: '492cv',
    torque: '567Nm',
    manual: true
  }
};

openModal(car: string) {
  this.selectedCar = car;
  this.showModal = true;
}

closeModal() {
  this.selectedCar = '';
  this.showModal = false;
}

  scores: { [key: string]: number } = {};

  get currentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  selectOption(option: any) {
    option.cars.forEach((car: string) => {
      this.scores[car] = (this.scores[car] || 0) + 1;
    });

    console.log('Pontuação atual:', this.scores);

    this.currentQuestionIndex++;

    if (this.currentQuestionIndex >= this.questions.length) {
      this.finished = true;
    }
  }

  getResults() {
    const max = Math.max(...Object.values(this.scores));
    const winners = Object.keys(this.scores).filter(car => this.scores[car] === max);
    return winners;
  }

restartQuiz() {
  this.finished = false;
  this.currentQuestionIndex = 0;
  this.scores = {};
}

}
