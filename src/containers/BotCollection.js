import React from "react";
import BotCard from "../components/BotCard";

const BotCollection = (props) => {
return (
<div className="ui four column grid">
    <div className="row">
    <BotCard {...props} />
    Collection of all bots
    </div>
</div>
);
}


export default BotCollection;
