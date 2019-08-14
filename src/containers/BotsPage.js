import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

const API = "https://bot-battler-api.herokuapp.com/api/v1/bots"
class BotsPage extends React.Component {
 constructor(){
   super()
   this.state = {
     bots: [],
     userArmy: []
   }
 }

 componentDidMount(){
  fetch(API)
  .then(res => res.json())
  .then(bots => { 
      const allBots = bots.map(bot => {
        bot.inArmy = false
        return bot })
        this.setState({bots: allBots})
  })
 }

 addBotToArmy = (e) => {
  const id = Number(e.target.id)
  const army = this.state.bots.map(bot => {
    if(bot.id === id){
      bot.inArmy = true
      return bot
    } else 
    return bot
  })
  this.setState({ userArmy: army})
 }

 userBotArmy(){
   return this.state.userArmy.filter(bot => bot.inArmy)
 }

 removeBotFromArmy = (e) => {
   const id = Number(e.target.id)
   this.state.userArmy.map(bot => {
     if(bot.id === id){
       const botIdx = this.state.userArmy.indexOf(bot)
       this.state.userArmy.splice(botIdx, 1)
       this.setState({userArmy: this.state.userArmy})
       return this.state.userArmy
     } else 
     return bot
   })
 }

  render() {
    return (
      <div>
        {<YourBotArmy removeBotFromArmy={this.removeBotFromArmy} botArmy={this.userBotArmy()}/>}
        {<BotCollection addBotToArmy={this.addBotToArmy} bots={this.state.bots}/>}
      </div>
    );
  }

}

export default BotsPage;
