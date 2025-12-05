function New({img,title,deck,sana}) {
    return (
        <div className="how">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="hows">
                <h1>{title}</h1>
                <p>{deck}</p>
                <div className="hows-car">
                    <h3>{sana}</h3>
                    <img src="./public/Frame (2).png" alt="" />
                </div>
            </div>
        </div>
    )
}
export default New;