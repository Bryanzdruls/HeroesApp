import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers/"
import { HeroCard } from "./HeroCard";
import PropTypes from 'prop-types'


export const HeroList = ({ publisher }) => {

    const heroes= useMemo(()=> getHeroesByPublisher(publisher),[publisher]);
    
    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
             {
                heroes.length != 0 ?
                heroes.map(hero=>(
                    <HeroCard 
                        key={hero.id}
                        { ...hero }
                    />
                ))
                : <h2>There is not heroes for this publisher</h2>
            }
        </div>
    )
}

HeroList.propTypes={
    publisher: PropTypes.string.isRequired,
}
