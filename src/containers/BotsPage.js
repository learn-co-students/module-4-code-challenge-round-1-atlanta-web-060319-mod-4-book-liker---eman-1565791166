import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(){
    super()
    this.state ={
      bots: [],
      currentBot: []
    }
  }


  componentDidMount(){
    fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots`)
    .then(res => res.json())
    .then(bots => this.addAttributes(bots))
  }


  addAttributes = bots =>  {
    let newBots = bots.map(bot => {
      const newBot = {...bot, inArmy: false, isClicked: false}
      return newBot
    })
    this.setState({
      bots: newBots
    })
  }


  handleBotClick = (botId) => {
    let array = []
    if (this.state.currentBot.length < 1){
    
    let currentBot = this.state.bots.find(bot => bot.id === parseInt(botId, 10))
    
    array.push(currentBot)

    this.setState({
      currentBot: array
    })
    
  } else if(this.state.currentBot.length === 1){
    let emptyArray = []
    this.setState({
      currentBot: emptyArray
    })
  }
    
  }


  handleBotRecruit = (botId) => {
    console.log(botId)
    let newBots = this.state.bots.map(bot => {
      if(bot.id === parseInt(botId, 10)){
        let botRecruit = {...bot, inArmy: !bot.inArmy}
        return botRecruit
      } else {
        return bot
      }
    })
    this.setState({
      bots: newBots
    })
  }
  

  render() {
    
    return (
      <div>
      <YourBotArmy bots={this.state.bots}  handleBotRecruit={this.handleBotRecruit}/>

      {(this.state.currentBot.length < 1) ? <BotCollection bots={this.state.bots} handleBotClick={this.handleBotClick} handleBotRecruit={this.handleBotRecruit}/> : <BotSpecs bot={this.state.currentBot[0]} handleBotClick={this.handleBotClick}/> }
      </div>
    );
  }

}

export default BotsPage;
