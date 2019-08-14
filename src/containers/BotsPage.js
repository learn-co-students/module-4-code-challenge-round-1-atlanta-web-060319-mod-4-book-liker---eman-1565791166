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
    if (this.state.currentBot === []){
    let currentBot = this.state.bots.find(bot => {
      return bot.id === parseInt(botId)
    })
    this.setState({
      currentBot: this.state.currentBot.push(currentBot)
    })
  } else if(this.state.currentBot !== []){
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

      {(this.state.currentBot.length < 1) ? <BotSpecs bot={this.state.currentBot} handleBotClick={this.handleBotClick} handleBotRecruit={this.handleBotRecruit}/> : <BotCollection bots={this.state.bots} handleBotClick={this.handleBotClick} handleBotRecruit={this.handleBotRecruit}/>}
      </div>
    );
  }

}

export default BotsPage;
