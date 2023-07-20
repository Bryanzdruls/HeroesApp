import { Link } from "react-router-dom"
import './myHeroCard.css'

const CharactersByHero = ({ alter_ego, characters }) => {
  if (alter_ego === characters) return (<></>);

  return (
    <p>{characters}</p>
  )
}

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {

  const heroImageUrl = `./assets/heroes/${id}.jpg`

  //const charactersByHero = (<p>{characters}</p>);
  return (
    <Link to={`/hero/${id}`} className="my-card">
      <img src={heroImageUrl} alt={superhero} className="img img-responsive" />
      <div className="profile-name">{superhero}</div>
      <div className="profile-position">{alter_ego}</div>
      <div className="profile-overview">
        <div className="row">
          <div className="col-ms-4">
            <h3>{publisher}</h3>
              <p>First Appearance: <br />{first_appearance}</p>
              {
                (alter_ego !== characters)
                && <p>{characters}</p>
              }
          </div>
        </div>
      </div>    
    </Link>
  )
}

/* <div className="col animate__animated animate__fadeIn">

        <div className="card">
          <div className="row no-gutters">
            <div className="col-4 ">

            </div>
            <div className="col-8">
              <div className="card-body">
                <h5 className="card-title"> {superhero}</h5>
                <p className="card-text">{alter_ego}</p>

                <CharactersByHero characters={characters} alter_ego={alter_ego} />

                <p className="card-text">
                  <small className="text-muted">{first_appearance}</small>
                </p>

                <Link to={`/hero/${id}`}>
                  Más...
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
 */