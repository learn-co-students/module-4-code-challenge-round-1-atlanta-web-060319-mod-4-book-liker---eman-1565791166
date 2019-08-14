import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {

  state = ({
    bots: [],
    myBots: [],
    recruited: false
  })

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(r => r.json())
    .then(data => this.setState({
      bots: data,
      recruited: false
    }))
  }

  handleRecruits = (myBot) => {
    let newRecruit = this.state.bots.filter(robot => myBot.id === robot.id)
    if(this.state.myBots.includes(myBot)){
      return null
    }else{
    this.setState({
      myBots: [...this.state.myBots, newRecruit], ...myBot.recruited = true
      })
    } 
  }



  
  render() {
    return (
      <div>
        <YourBotArmy robots={this.state.bots} bots={this.state.myBots} newRecruit={this.state.newRecruit}/>
        <BotCollection bots={this.state.bots} handleRecruits={this.handleRecruits} myBots={this.state.myBots}/>

      </div>
    );
  }

}

export default BotsPage;
