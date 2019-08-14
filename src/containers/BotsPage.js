import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs"

const API = "https://bot-battler-api.herokuapp.com/api/v1/bots"
class BotsPage extends React.Component {
 constructor(){
   super()
   this.state = {
     bots: [],
     userArmy: [],
     oneBot: [],
     showBot: true, 
     showAllBots: true
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

 showBotSpecs = (bot) => {
   this.setState({showBot: false})
   this.setState({oneBot: bot})
  
 }

 addBotToArmy = (bot) => {
  //  console.log(bot, 'addBot')
    const id = bot.id
    const army = this.state.bots.map(bot => {
      if(bot.id === id){
        bot.inArmy = true
        return bot
      } else 
      return bot
    })
    this.setState({ userArmy: army})
   }

    removeBotFromArmy = (e) => {
   const id = Number(e.target.id)
   this.state.userArmy.map(bot => {
     if(bot.id === id){
       const botIdx = this.state.userArmy.indexOf(bot)
       this.state.userArmy.splice(botIdx, 1)
       bot.inArmy = false
       this.setState({userArmy: this.state.userArmy})
       return this.state.userArmy
     } else 
     return bot
   })
 }

    userBotArmy(){
   return this.state.userArmy.filter(bot => bot.inArmy)
 }

 callAllBots = (e) => {
   this.setState({ showBot: true})
 }

 render() {
  return (
    <div>
      {/* {<YourBotArmy  />} */}
      {<YourBotArmy removeBotFromArmy={this.removeBotFromArmy} botArmy={this.userBotArmy()}/>}
      {this.state.showBot ? <BotCollection showBotSpecs={this.showBotSpecs} bots={this.state.bots}/> : 
      <BotSpecs callAllBots={this.callAllBots} addBotToArmy={this.addBotToArmy} bot={this.state.oneBot}/>}
      {/* {this.callAllBots ? <BotCollection showBotSpecs={this.showBotSpecs} bots={this.state.bots}/> : null } */}


    </div>
  );
}


// 





  
}

export default BotsPage;
