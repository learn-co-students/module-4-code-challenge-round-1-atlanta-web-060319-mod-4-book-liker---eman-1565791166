import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    enlistedBots: [],
    releasedBots: []
  }
  
  // componentDidMount() {
  //   const allBots = `https://bot-battler-api.herokuapp.com/api/v1/bots`
  //   fetch(allBots)
  //   .then(res => res.json())
  //   .then(data => this.setState({
  //     bots: data
  //   }))
  // }

  componentDidMount() {
    const allBots = `https://bot-battler-api.herokuapp.com/api/v1/bots`
    fetch(allBots)
    .then(res => res.json())
    .then(data => {
      const myBots = data.map(bot => {
                  bot.own = false
                  return bot })

      this.setState({bots: myBots})
    
    })
  }

  handleMyBots = (userBot) => {
    if(userBot.own === false) {
      const updateBots = this.state.bots.filter(bot => userBot.id !== bot.id)
      userBot.own = true
      this.setState({
        enlistedBots: [...this.state.enlistedBots, userBot], bots: updateBots
      })
    }
     else {
      const releaseBots = this.state.bots.filter(bot => userBot.id !== bot.id)
      userBot.own = false
      this.setState({
        bots: [...this.state.bots, userBot], enlistedBots: releaseBots
      })
    }
  }

  render() {
    return (
      <div>
        <YourBotArmy handleMyBots={this.handleMyBots} enlistedBots={this.state.enlistedBots} />
        <BotCollection bots={this.state.bots} handleMyBots={this.handleMyBots} />
      </div>
    );
  }

}

export default BotsPage;
