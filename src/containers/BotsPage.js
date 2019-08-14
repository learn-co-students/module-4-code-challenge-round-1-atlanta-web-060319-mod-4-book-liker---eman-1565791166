import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(){
    super()
    this.state ={
      bots: []
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


  // handleBotClick = (botId) => {
  //   let newBots = this.state.bots.map(bot => {
  //     if(bot.id === parseInt(botId, 10)){
  //       let clickedBot = {...bot, isClicked: !bot.isClicked}
  //       return clickedBot
  //     } else {
  //       return bot
  //     }
  //   })
  //   this.setState({
  //     bots: newBots
  //   })
  // }


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
       <BotCollection bots={this.state.bots} handleBotRecruit={this.handleBotRecruit}/>
      </div>
    );
  }

}

export default BotsPage;
