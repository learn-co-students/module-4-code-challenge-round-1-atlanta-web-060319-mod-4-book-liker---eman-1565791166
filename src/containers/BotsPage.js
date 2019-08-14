import React from "react";
import YourBotArmy from "./YourBotArmy"
import BotCollection from "./BotCollection"
import BotSpecs from "../components/BotSpecs"

class BotsPage extends React.Component {
  constructor() {
  	super()
  	this.state= {
  		bots: [],
  		flexbots: [],
  		yourBots: [],
  		showSpecs: false,
  		specBot: undefined 
  	}
  }

  componentDidMount() {
  	fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
  	.then((response) => response.json())
  	.then((bots) => {
  		this.setState({
  			bots: bots,
  			flexbots: bots
  		})
  	})
  }

  handleEnlist = (event, bot) => {
  	if (this.state.yourBots.includes(bot)) {
  		alert("you have already enlisted this bot")
  		this.setState({
  			showSpecs: false,
  			specBot: undefined
  		})
  	}
  	else {
  		this.setState({
  			yourBots: [...this.state.yourBots, bot],
  			showSpecs: false,
  			specBot: undefined
  		})
  	}
  	return null
  }

  handleRemove = (event, bot) => {
  	let thisBotIndex = this.state.yourBots.findIndex((urbot) => {
  		return urbot === bot
  	})
  	let newYourBots = this.state.yourBots
  	newYourBots.splice(thisBotIndex, 1)

  	this.setState({yourBots: newYourBots})
  	return null
  }

  handleShowSpecs = (event, bot) => {
  	this.setState({
  		showSpecs: true,
  		specBot: bot
  	})
  	return null
  }

  handleGoback = (event) => {
  	this.setState({
  		showSpecs: false,
  		specBot: undefined
  	})
  	return null
  }

  render() {
    return (
      <div>
        <YourBotArmy yourBots={this.state.yourBots} handleRemove={this.handleRemove}/>
        {this.state.showSpecs ? <BotSpecs bot={this.state.specBot} handleEnlist={this.handleEnlist} handleGoback={this.handleGoback}/> :<BotCollection bots={this.state.flexbots} handleShowSpecs={this.handleShowSpecs}/>}
      </div>
    );
  }

}

export default BotsPage;
