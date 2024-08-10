import React from "react";
import "./Grid.css"
import Button, {link} from "../button/Button";
function GridItem({title,description,buttonLabel,buttonLink}) {
    return (
        <div className="grid-item" style={{marginTop: '4%',marginBottom:'4%',marginLeft:"4%",marginRight:"4%"}}>
            <h1>{title}</h1>
            <p>{description}</p>
            <Button link={link(buttonLink)} label={buttonLabel} />
        </div>
    )
}

export default GridItem;