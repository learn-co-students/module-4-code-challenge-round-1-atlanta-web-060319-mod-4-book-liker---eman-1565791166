import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    const botCards = this.props.bots.map(bot =>{
		  if(bot.inArmy === true){
			  return <BotCard key={bot.id}  bot={bot} handleBotRecruit={this.props.handleBotRecruit}/>
		  }
	  })
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {botCards}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
