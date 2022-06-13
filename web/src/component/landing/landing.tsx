

import "./landing.css";
import LOGO_HOTEL from "../../assets/images/logo-hotel.png";
import GIF_FILE from "../../assets/images/TheInvitation.gif";
import BUTTON_MINT from "../../assets/images/button-mint.png";
const LandingComponent = () => {



    return (

        <>
            <div className="bg-control">
                <div className="container-control">

                    <div className="main-control">
                        <span className="coming-soon-text">Coming soon</span>
                        {/* <div className="bg-border-control">
                            <img src={LOGO_HOTEL} className="logo-hotel"></img>
                            <img src={GIF_FILE} className="gif-control"></img>
                            <div className="grid-control">
                                <div className="item-control">
                                    <span className="text-public-sale">Public <br></br>PRICE</span>
                                    <span className="text-price">1.25 SOL</span>
                                </div>
                                <div className="item-control">
                                    <span className="text-public-sale">Total <br></br>Minted</span>
                                    <span className="text-price">0/2000</span>
                                </div>

                            </div>
                        </div>

                        <img src={BUTTON_MINT} className="button-mint"></img> */}



                    </div>
                </div>
            </div>


        </>

    )
}

export default LandingComponent;