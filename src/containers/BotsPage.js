import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
import BotSpecs from "../components/BotSpecs"

class BotsPage extends React.Component {
  state = {
    allBots: [],
    showBotSpecs: false,
    selectedBot: null,
    botArmy: [],
  }
  
  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(res => res.json())
      .then(bots => this.setState({
        ...this.state,
        allBots: bots
      }))
  }
   
  toggleBot = bot => {
    const tempArmy = this.state.botArmy.slice()
    
    if (this.state.botArmy.includes(bot)) {
      tempArmy.splice(tempArmy.indexOf(bot), 1)
      this.setState({
        ...this.state,
        botArmy: tempArmy
      })
    } else {
      this.setState({
        ...this.state,
        showBotSpecs: true,
        selectedBot: bot
      })
      
    }
  }
 
  handleDetailClick = action => {
    if (action === 'back') {
      this.setState({
        ...this.state,
        showBotSpecs: false,
        selectedBot: null
      })
    } else if (action === 'enlist') {
      const tempArmy = this.state.botArmy.slice()
      tempArmy.push(this.state.selectedBot)
      
      this.setState({
        ...this.state,
        botArmy: tempArmy,
        showBotSpecs: false,
        selectedBot: null
      })
    }
  }

  render() {
   return (
   <div>
    <YourBotArmy botArmy={this.state.botArmy} toggleBot={this.toggleBot}/>
    {this.state.showBotSpecs 
    ? <BotSpecs bot={this.state.selectedBot} handleClick={this.handleDetailClick}/> 
    : <BotCollection allBots={this.state.allBots} toggleBot={this.toggleBot}/>}
    </div>
    );
  }

}

export default BotsPage;



