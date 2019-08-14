import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

const URL = 'https://bot-battler-api.herokuapp.com/api/v1/bots/'

class BotsPage extends React.Component {
  constructor() {
    super()
    this.state = {
      bots: [],
      myBotArmy: [],
      specPage: false,
      specBot: [],
      filterTerm: '',
      checked: ''
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

  showSpecs = (chosenBot) => {
    console.log("inside showSpecPage", chosenBot)
    this.setState({specPage: true}, () => {this.renderBotSpecs(chosenBot)})
  }

  renderBotSpecs = (chosenBot) => {
    console.log("inside renderBotSpecs", chosenBot)
    this.setState({specBot: chosenBot})
  }

  hideSpecs = () => {
    this.setState({specPage: !this.state.specPage})
  }

  botFilter = (e) => {
    console.log("inisde botFilter", e.target.value)
    this.setState({checked: e.target.value})
  }

  realBotFilter = () => {
    let currentBots = this.state.bots
    
  }

  

  render() {
    const filteredBots = () => {
      if(this.state.filterTerm === '' || null || undefined) {
        return this.state.bots
      } 
      else {
        return this.state.bots.filter(bot => bot.bot_type === this.state.filterTerm)
      }
    }

    return (
      <div>
        <YourBotArmy assignBot={this.assignBot} myBotArmy={this.state.myBotArmy}/>
        {this.state.specPage ? <BotSpecs hideSpecs={this.hideSpecs} assignBot={this.assignBot} bot={this.state.specBot}/> : null}
        <BotCollection checked={this.state.checked} filterTerm={this.state.filterTerm} botFilter={this.botFilter} showSpecs={this.showSpecs} assignBot={this.assignBot} bots={filteredBots()}/>
      </div>
    );
  }

}

export default BotsPage;
