import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    botArmy: []
  }
  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(resp => resp.json())
      .then(bots => this.setState({bots:bots}))
  }

  addToArmy = (event, props) =>{
    let newArmy = [...this.state.botArmy, props.bots]
    this.setState({botArmy: newArmy})
  } 

  removeFromArmy= (event, props) =>{
    let reducedArmy = [...this.state.botArmy, props.bots]
    this.setState({botArmy: reducedArmy}) 
  }



  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.botArmy} addToArmy={this.addToArmy} />
        <BotCollection bots={this.state.bots}/>
      </div>
    );
  }

}

export default BotsPage;
