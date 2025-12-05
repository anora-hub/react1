function Outim({src,title,deck}) {
    return (
        <div className="our-card">
            <img src={src} alt="" />
            <h1>{title}</h1>
            <p>{deck}</p>
        </div>
    )
}
export default Outim;