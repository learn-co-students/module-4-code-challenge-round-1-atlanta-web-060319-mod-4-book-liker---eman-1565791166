import React from "react";

class BotFilter extends React.Component {
  constructor() {
	  super()
  }

  render(){
  	return (
  	  <div>
        Filter Bots By Class/Type: 
        <div>
            <label>
                <input type="radio" value="Assualt" checked={this.props.checked === 'No Filter'} onClick={this.props.botFilter}/>
                No Filter
            </label>
            <label>
                <input type="radio" value="Assualt" checked={this.props.checked === 'Assualt'} onClick={this.props.botFilter}/>
                Assault
            </label>
            <label>
                <input type="radio" value="Defender" checked={this.props.checked === 'Defender'} onClick={this.props.botFilter}/>
                Defender
            </label>
            <label>
                <input type="radio" value="Support" checked={this.props.checked === 'Support'} onClick={this.props.botFilter}/>
                Support
            </label>
        </div>
  	  </div>
  	);
  }

};

export default BotFilter;