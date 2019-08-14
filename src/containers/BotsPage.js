import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  state ={
    robots: [],
    myArmyGang: []
  }

  componentDidMount(){
    fetch(" https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(res => res.json())
    .then(data => {
      const robotList = data.map(robots => {
        robots.myArmy = false 
          return robots})
          this.setState({robots: robotList})
    })
  }


  handleMyArmy=(bot)=>{
    if(this.state.myArmyGang.map(robot => robot.id !== bot.id )){
       return this.setState({myArmyGang: [...this.state.myArmyGang, bot]})
    } else {
      let updateMyArmy = this.state.myArmyGang.filter(robot => bot.id === robot.id)
       return this.setState({robots: [...this.state.robot, bot], myArmyGang: updateMyArmy})
    }
  }

  render() {
    return (
      <div>
         <YourBotArmy  handleMyArmy={this.handleMyArmy} myArmyGang={this.state.myArmyGang}/>
        <BotCollection handleMyArmy={this.handleMyArmy} robots={this.state.robots}/>
       
      </div>
    );
  }

}

export default BotsPage;
