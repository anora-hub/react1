function HeroCard({url ,title,deck}){
    return(
        <div className="about-cards">
            <div className="about-card">
                <img src={url}  alt="" />
                <h1>{title}</h1>
                <p>{deck}</p>
            </div>
        </div>
        
    )
}

export default HeroCard

