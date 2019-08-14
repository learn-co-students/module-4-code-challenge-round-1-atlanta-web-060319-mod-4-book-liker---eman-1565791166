import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy"
// import BotCard from "../components/BotCard";

class BotsPage extends React.Component {
  //start here with your code for step one

  constructor(){
    super()
    this.state={
      bots: [],
      enlisted: [],
    }
  }

  componentDidMount(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(resp => resp.json())
    // .then(data => console.log(data))
    .then(data => {
      const botData = data.map(bot => {
                  return bot })
      this.setState({bots: botData})
}) 
}

handleEnlistingBot = (e)=> {

  const id = parseInt(e.target.id)

  let enlistedBots = this.state.bots.map(bot => {

    if(id === bot.id)
      {return bot}
    else
      return null
  })

  this.setState({bots: enlistedBots})
}

  render() {
    return (
      <div>
        <YourBotArmy enlistedBotsArray={this.enlistedBots}/>
        <BotCollection handleEnlistingBot={this.handleEnlistingBot}/>
      </div>
    );
  }
}
export default BotsPage;
