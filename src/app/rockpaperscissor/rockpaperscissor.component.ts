import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rockpaperscissor',
  templateUrl: './rockpaperscissor.component.html',
  styleUrls: ['./rockpaperscissor.component.styl']
})
export class RockpaperscissorComponent implements OnInit {
  undefind = undefined;
  currentText = 'Click Start To Play!';
  win = 0;
  lose = 0;
  tie = 0;
  startDisableBtn = false;
  userSelection;
  computerChoice;
  userChoiceText = undefined;
  computerChoiceText = undefined;
  resultText = undefined;
  constructor() { }

  ngOnInit() {
  }
  startGame(){
    this.currentText = 'Loading....'
    setTimeout(() => {
      this.currentText = 'Select Any One between \n Rock, Paper and Scissor'
      this.startDisableBtn = true
    }, 600);
  }
  resetGame(){
    this.setDefaultValues()
  }
  setDefaultValues(){
    this.startDisableBtn = false;
    this.currentText = 'Click Start To Play!';
    this.win = 0;
    this.lose = 0;
    this.tie = 0;
    this.userChoiceText = undefined;
    this.computerChoiceText = undefined;
    this.resultText = undefined;
  }
  userSelected(currentChoice){
    if(this.startDisableBtn){
      this.userSelection = currentChoice;
      this.userChoiceText = 'Your Choice: ' + this.userSelection
      this.processing()
    }
  }
  processing(){
    this.computerSelection();
    this.getScoreStatus();
  }
  computerSelection(){
    const val = this.getRandNumber();
    if(val == 1){
      this.computerChoice = 'Rock'
    }else if(val == 2){
      this.computerChoice = 'Scissor'
    }else if(val == 3){
      this.computerChoice = 'Paper'
    }
    this.computerChoiceText = 'Bot Choice: ' + this.computerChoice 
  }
  getRandNumber() {
    return Math.floor((Math.random()*3) + 1);
  }
  getScoreStatus(){
    if(this.computerChoice == this.userSelection){
      this.resultText = "It's a tie!"
      this.tie = this.tie + 1;
    } 
    else if (this.userSelection == 'Rock' && this.computerChoice == 'Scissor'){
      this.resultText = "You Win!"
      this.win = this.win + 1
    }
    else if (this.userSelection == 'Rock' && this.computerChoice == 'Paper'){
      this.resultText = "You Lose!"
      this.lose = this.lose + 1
    }
    else if (this.userSelection == 'Paper' && this.computerChoice == 'Rock'){
      this.resultText = "You Win!"
      this.win = this.win + 1
    }
    else if (this.userSelection == 'Paper' && this.computerChoice == 'Scissor'){
      this.resultText = "You Lose!"
      this.lose = this.lose + 1
    }
    else if (this.userSelection == 'Scissor' && this.computerChoice == 'Rock'){
      this.resultText = "You Lose!"
      this.lose = this.lose + 1
    }
    else if (this.userSelection == 'Scissor' && this.computerChoice == 'Paper'){
      this.resultText = "You Win!"
      this.win = this.win + 1
    }
  }
}
