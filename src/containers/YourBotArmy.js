import React from "react";
import BotCard from "../components/BotCard";


class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    const { yourBotArmy, removeBotFromArmy } = this.props;
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {yourBotArmy.map(bot => (<BotCard bot={bot} key={bot.id} removeBot={removeBotFromArmy} onBotSelect={this.props.onBotSelect}/>))}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
