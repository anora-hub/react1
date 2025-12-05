import HeroCard from "../../components/heroCard";
import New from "../../components/how";
import Outim from "../../components/out";
import "./home.css"

function HomePage() {
    return (

        <>

            <header>
                <div className="container navbar">
                    <div className="navbar-contact">
                        <ul>
                            <img src="../public/IMAGE (10).png" alt="" />
                        </ul>
                        <ul className="nav-items">
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="">About</a>
                            </li>
                            <li>
                                <a href="">Services</a>
                            </li>
                            <li>
                                <a href="">Articles</a>
                            </li>
                            <li>
                                <a href="">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <ul className="navbar-cards">
                        <a href="">Cart (0)</a>
                        <button>Get a free quote</button>
                    </ul>
                </div>
            </header>
            <main>
                <section>
                    <div className="container hero">
                        <div className="hero-cards">
                            <h1>Quality cleaning for your home</h1>
                            <p>Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.</p>
                            <div className="hero-card">
                                <button className="hero-btn">Get a free quote</button>
                                <img src="./public/IMAGE (12).png" alt="" />
                                <div>
                                    <h3 className="hero-title1">Call us now</h3>
                                    <h3 className="hero-title2">(414) 567 - 2109</h3>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src="./public/IMAGE (13).png" alt="" />
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container about">
                        <h1 className="about-title">About Us</h1>
                        <p className="about-deck">Sagittis nibh scelerisque vitae eget vulputate sem elementum sed <br /> neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>
                       <div className="birinchi">
                            <HeroCard url={"/IMAGE (14).png"} title={"1. Schedule online"} deck={"Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n."}      />
                            <HeroCard url={"/IMAGE (18).png"} title={"2. Pay online easily"} deck={"Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc."} />
                            <HeroCard url={"/IMAGE (19).png"} title={"3. Get your house cleaned"} deck={"Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend."} />
                       </div>
                        <div className="about-btns">
                            <button className="about-btn">Get a free quote</button>
                            <button className="about-btn2">Get a free quote</button>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="our-cardlar">
                            <h1 className="our-title">Our Services</h1>
                            <button className="our-btn">Explore services</button>
                        </div>
                        <div className="our">
                            <Outim src={"/IMAGE (16).png"} title={"House cleaning"} deck={"Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est."}/>
                            <Outim src={"/IMAGE (21).png"} title={"Office cleaning"} deck={"Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est."} />
                            <Outim src={"/IMAGE (22).png"} title={"Industrial cleaning"} deck={"Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est."} />
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="covid">
                            <div>
                                <img className="covid-img" src="./public/IMAGE (17).png" alt="" />
                            </div>
                            <div className="covids-cards">
                                <h3>Covid-19 sanitization</h3>
                                <h1>We follow guidelines to keep you safe from the COVID-19 virus</h1>
                                <p>Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa mauris lectus.</p>
                                <div className="covid-card">
                                    <button className="covid-btn">Get a free quote</button>
                                    <img src="./public/IMAGE (12).png" alt="" />
                                    <div>
                                        <h3 className="covid-tit">Call us now</h3>
                                        <h3 className="covid-title2">(414) 567 - 2109</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div>
                            <div className="artic-cardlar">
                                <h1>Articles & resources</h1>
                                <div className="artic-btnlar">
                                    <button className="artic-btn1">Get a free quote</button>
                                    <button className="artic-btn2">Browse articles</button>
                                </div>
                            </div>
                          <div className="newa">
                                <New img={"/Frame (4).png"} title={"8 best vacuum cleaners to clean any mess for your home in 2022"} deck={"Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males."} sana={"Jan 28, 2022"}                        />
                                <New img={"/Frame (1).png"} title={"How to properly disinfect your phone and other electronics"} deck={"Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males."} sana={"Feb 1, 2022"}      />
                          </div>
                        </div>
                    </div>
                </section>
                <section className="sectin">
                    <div className="container">
                        <div className="contact">
                            <div className="contact-card">
                                <h1>Contact Us</h1>
                                <p>In dignissim euismod pretium amet enim a eu nam ut urna accumsan pellentesque lacus duis pharetra eutortor.</p>
                                <div className="contact-cards">
                                    <img src="./public/IMAGE (12).png" alt="" />
                                    <div>
                                        <h6>Call us now</h6>
                                        <h4>(414) 567 - 2109</h4>
                                    </div>

                                </div>
                                <h2 className="contac-title">Not convinced yet?</h2>
                                <p className="contac-deck">Massa bibendum consectetur maurisid gravida purus, dolor dui amet morbi non nunc urna purus diam.</p>
                                <button className="contac-btn">Browse our packages</button>
                            </div>
                            <div className="contact-border">


                                <div className="form1">
                                    <form action="">
                                        <p className="text">full name</p>
                                        <input className="inpu" type="" />
                                    </form>
                                    <form action="">
                                        <p className="text">Phone number</p>
                                        <input className="inpu" type="" />
                                    </form>
                                </div>
                                <div className="form1">
                                    <form action="">
                                        <p className="text">Address</p>
                                        <input className="inpu" type="" />
                                    </form>
                                    <form action="">
                                        <p className="text">Email</p>
                                        <input className="inpu" type="email" />
                                    </form>
                                </div>
                                <div className="form1">
                                    <form action="">
                                        <p className="text">Requested service</p>
                                        <input className="inpu" type="" />
                                    </form>
                                    <form action="">
                                        <p className="text">Day of service</p>
                                        <input className="inpu" type="" />
                                    </form>

                                </div>
                                <form action="">
                                    <p className="textt">Add a note</p>
                                    <input className="inpul" type="" />
                                </form>
                                <button className="bttn">Submit message</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container your">
                        <div className="foter-1">
                            <h1>Quality cleaning for your home</h1>
                            <p>Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do eiusmo.</p>
                            <div>
                                <img src="./public/Frame (3).png" alt="" />
                                <img src="./public/Frame (3).png" alt="" />
                                <img src="./public/Frame (3).png" alt="" />
                                <img src="./public/Frame (3).png" alt="" />
                                <img src="./public/Frame (3).png" alt="" />
                            </div>
                        </div>
                        <div className="foter-2">
                            <h1>Contact us</h1>
                            <p>1827 Nickel Road, Los Angeles, CA, 90017, United States</p>
                            <p>(414) 567 - 2109</p>
                            <p>contact@cleaning.com</p>
                        </div>
                        <div className="foter-3">
                            <h4 className="your-title">Hours</h4>
                            <h4 className="you-title">Monday to Friday</h4>
                            <p>6:00 AM - 9:00 PM</p>
                            <h4 className="you-title">Saturday & Sunday</h4>
                            <p>8:00 AM - 8:00 PM</p>
                        </div>
                        <div className="foter-4" >
                            <h2>Get a free estimate</h2>
                            <h1>(414) 567 - 2109</h1>
                            <p>Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do eiusmod.</p>
                            <button>Request a free quote</button>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
              <div className="container ben">
                    <div className="footer1">
                        <img src="./public/IMAGE (10).png" alt="" />
                    </div>
                    <h1 className="footer-title">Copyright © Cleaning X | Designed by <span>BRIX Templates</span> - Powered by <span>Webflow</span>  - <span>Licenses</span></h1>
              </div>
            </footer>
        </>
    )
}
export default HomePage;