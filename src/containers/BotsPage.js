import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    army: [],
    currentBot: null
  }

  componentDidMount = () => {
    this.getBots()
  }

  getBots = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(resp => resp.json())
      .then(bots => this.setState({ bots: bots }))
  }

  addBotToArmy = (bot) => {
    if (bot === null) {
      this.setState(state => {
        state.currentBot = null
        return state
      })
    }
    else if (!this.state.army.includes(bot)) {
      this.setState(state => {
        state.army.push(bot)
        state.currentBot = null
        return state
      })
    }
  }

  removeFromArmy = (bot) => {
    let index = this.state.army.indexOf(bot)
    this.setState(state => {
      if (index > -1) {
        state.army.splice(index, 1);
      }
      return state
    })
  }


  addCurrentBotOrBotCollection = () => {
    if (this.state.currentBot === null) {
      return <BotCollection bots={this.state.bots} addBotToArmy={this.handleChangeCurrentBot} />
    } else if (this.state.currentBot) {
      return <BotSpecs bot={this.state.currentBot} addBotToArmy={this.addBotToArmy} />
    }
  }

  handleChangeCurrentBot = (bot) => {
    console.log('got here')
    this.setState(state => {
      if (state.currentBot === null) {
        state.currentBot = bot
      }
      else {
        state.currentBot === null
      }

      return state
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy army={this.state.army} removeFromArmy={this.removeFromArmy} />
        {this.addCurrentBotOrBotCollection()}


        {/* put your components here */}
      </div>
    );
  }

}

export default BotsPage;
