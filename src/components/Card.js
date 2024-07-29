import { useState } from "react";


function Card({id, name, image, info, price,removeTour}) {
    const [readmore, setReadmore] = useState(false);
    //This line uses the useState hook to create a state variable readmore and a function setReadmore to update it. The initial value of readmore is false, indicating that the text is not expanded.
    
    
    const description = readmore ? info :`${info.substring(0, 200)}...`

    //toggle function => This function toggles the readmore state between true and false when called.
    function readmoreHandler() {
        setReadmore(!readmore);
    }

    return (
        <div className="card">

            <img src={image} className="image"></img>
            <div className="tour-info">

                <div className="tour-details">
                    <h4 className="tour-price">{price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>

                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler} >
                        {readmore ? ` Show Less` : ` Read More`}
                    </span>
                </div>

            </div>

            <button className="btn-red" onClick={()=>removeTour(id)}>
                Not Interested
            </button>


        </div>

    )
}

export default Card;