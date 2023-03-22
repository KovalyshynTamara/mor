import { Link } from "react-router-dom"
function Card(props) {
    const { item } = props;
    const { image, name, id, species } = item;

    return (
        <div className="card">
            <Link to={`/character?id=${id}`}>
            <div className="character">
                <img src={image} alt={name} />
            </div>
            <div className="name">{name}</div>
            <div className="specie">{species}</div>
            </Link>
        </div>
             
    )
}
export default Card