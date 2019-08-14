import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  // ===> Trying to figure out what goes here

  render(){
    console.log();
    
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            
            Your Bot Army
            {
            this.props.bots.map((eachBot) => {
              return <BotCard addToArmy={this.props.addToArmy} bot={eachBot} />
            })
          }
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
