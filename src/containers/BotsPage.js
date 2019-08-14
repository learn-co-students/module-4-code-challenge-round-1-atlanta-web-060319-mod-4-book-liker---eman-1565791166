import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

const URL = 'https://bot-battler-api.herokuapp.com/api/v1/bots/'

class BotsPage extends React.Component {
  constructor() {
    super()
    this.state = {
      bots: [],
      myBotArmy: []
    }
  }

  componentDidMount() {
    fetch(URL)
    .then(res => res.json())
    .then(bots => this.setState({bots: bots}))
  }

  assignBot = (chosenBot) => {
    console.log("inside assignBot", chosenBot)
    // let currentBots = this.state.bots
    let currentArmyBots = this.state.myBotArmy

    if(currentArmyBots.includes(chosenBot)) {
      let newArmy = this.state.myBotArmy.filter(bot => bot !== chosenBot)
      this.setState({myBotArmy: newArmy})
    }
    else {
      this.setState({myBotArmy: [...this.state.myBotArmy, chosenBot]})
    }
  }

  render() {
    return (
      <div>
        <YourBotArmy assignBot={this.assignBot} myBotArmy={this.state.myBotArmy}/>
        <BotCollection assignBot={this.assignBot} bots={this.state.bots}/>
      </div>
    );
  }

}

export default BotsPage;
