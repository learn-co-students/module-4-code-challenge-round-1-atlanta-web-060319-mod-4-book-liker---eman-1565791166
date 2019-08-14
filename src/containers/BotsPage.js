import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection"
import BotSpecs from "../components/BotSpecs"

class BotsPage extends React.Component {
  // constructor(){
  //   super()
  // }
    state = {
      bots: [],
      yourBotArmy: [],
      selectedBot: null
    }

    componentDidMount() {
      fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(resp => resp.json())
      .then(bots => this.setState({ bots: bots}))
    }

    onBotSelect = id => {
      const { bots } = this.state;
      const selectedBot = bots.find(bot => bot.id === id)
      this.setState({ selectedBot })
    }

    returnToHome = () => {
      const { selectedBot } = this.state;
      this.setState({ selectedBot: !selectedBot }) 
    }

    addBot = selectedBot => {
      const { bots, yourBotArmy } = this.state;

      this.setState({yourBotArmy: [...yourBotArmy, selectedBot]})

      const updatedBots = bots.filter(bot => bot.id !== selectedBot.id)

      this.setState({ bots: updatedBots })

      this.setState({ selectedBot: !selectedBot })
    }

    removeBotFromArmy = id => {
      const { bots, yourBotArmy } = this.state;

      const selectedBot = yourBotArmy.find(bot => bot.id === id)

      const updatedBotsArmy = yourBotArmy.filter(bot => bot.id !== id)
      
      this.setState({yourBotArmy: updatedBotsArmy})

      this.setState({bots: [...bots, selectedBot]})
    }

  render() {
    const { bots, yourBotArmy, selectedBot } = this.state
    return (
      <div>
        <YourBotArmy yourBotArmy={yourBotArmy} removebot={this.removeBotFromArmy} onBotSelect={this.onBotSelect}/>
        {selectedBot ? (
          <BotSpecs bot={selectedBot} addBot={this.addBot} returnToHome={this.returnToHome} />
        ) : (
        <BotCollection bots={bots} onBotSelect={this.onBotSelect}  />
        )}
      </div>
    );
  }

}

export default BotsPage;
