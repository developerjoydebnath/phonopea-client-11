import React from 'react';
import Carousel from 'react-multi-carousel';
import './Partners.css'
import 'react-multi-carousel/lib/styles.css';
import Alcatel from '../../../images/companies/Alcatel.png'
import Allview from '../../../images/companies/Allview.png'
import Apple from '../../../images/companies/Apple-phone.png'
import Archos from '../../../images/companies/Archos.png'
import Asus from '../../../images/companies/Asus.png'
import benco from '../../../images/companies/benco-mobile.png'
import BlackBerry from '../../../images/companies/BlackBerry.png'
import BLU from '../../../images/companies/BLU.png'
import Cat from '../../../images/companies/Cat-phone.png'
import coolpad from '../../../images/companies/coolpad.png'
import Geo from '../../../images/companies/Geo-phone.png'
import Gionee from '../../../images/companies/Gionee (1).png'
import Google from '../../../images/companies/Google.png'
import Haier from '../../../images/companies/Haier.png'
import Helio from '../../../images/companies/Helio.png'
import Honor from '../../../images/companies/Honor-phones.png'
import HTC from '../../../images/companies/HTC.png'
import Huawei from '../../../images/companies/Huawei.png'
import infinix from '../../../images/companies/infinix-mobile.png'
import Itel from '../../../images/companies/Itel.png'
import Karbonn from '../../../images/companies/Karbonn.png'
import LAVA from '../../../images/companies/LAVA.png'
import Lenovo from '../../../images/companies/Lenovo.png'
import LG from '../../../images/companies/LG.png'
import marcel from '../../../images/companies/marcel.png'
import Maximus from '../../../images/companies/Maximus.png'
import Meizu from '../../../images/companies/Meizu.png'
import Micromax from '../../../images/companies/Micromax.png'
import Microsoft from '../../../images/companies/Microsoft.png'
import Motorola from '../../../images/companies/Motorola.png'
import Nokia from '../../../images/companies/Nokia.png'
import Nothing from '../../../images/companies/Nothing-phone.png'
import OnePlus from '../../../images/companies/OnePlus.png'
import Oppo from '../../../images/companies/Oppo.png'
import Oukitel from '../../../images/companies/Oukitel.png'
import Panasonic from '../../../images/companies/Panasonic.png'
import Philips from '../../../images/companies/Philips.png'
import Realme from '../../../images/companies/Realme.png'
import Red from '../../../images/companies/Red-phones.png'
import Samsung from '../../../images/companies/Samsung.png'
import Sharp from '../../../images/companies/Sharp.png'
import Sony from '../../../images/companies/Sony.png'
import Symphony from '../../../images/companies/Symphony.png'
import Tmobile from '../../../images/companies/T-Mobile-phones.png'
import tcl from '../../../images/companies/tcl-phones.png'
import Tecno from '../../../images/companies/Tecno.png'
import Tesla from '../../../images/companies/Tesla.png'
import umidigi from '../../../images/companies/umidigi.png'
import Vivo from '../../../images/companies/Vivo.png'
import Vodafone from '../../../images/companies/Vodafone.png'
import Walton from '../../../images/companies/Walton.png'
import WE from '../../../images/companies/WE.png'
import wiko from '../../../images/companies/wiko.png'
import Xiaomi from '../../../images/companies/Xiaomi.png'
import Zelta from '../../../images/companies/Zelta.png'
import ZTE from '../../../images/companies/ZTE.png'

const Partners = () => {
    return (
        <div>
            <div className='mt-5'>
                <h4 className='customer-review'>Our Partners</h4>
            </div>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={2000}
                centerMode={false}
                className="mb-5 partner-slider"
                containerClass="container-with-dots"
                dotListClass=""
                draggable={true}
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                removeArrowOnDeviceType={['mobile', 'mobile2', 'tablet', 'laptop']}
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    mobile: {
                        breakpoint: {
                            max: 330,
                            min: 0
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                    },
                    mobile2: {
                        breakpoint: {
                            max: 450,
                            min: 330
                        },
                        items: 3,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 600,
                            min: 450
                        },
                        items: 4,
                        partialVisibilityGutter: 30
                    },
                    laptop: {
                        breakpoint: {
                            max: 900,
                            min: 600
                        },
                        items: 5,
                        partialVisibilityGutter: 30
                    },
                    laptop2: {
                        breakpoint: {
                            max: 1024,
                            min: 900
                        },
                        items: 6,
                        partialVisibilityGutter: 30
                    },
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 8,
                        partialVisibilityGutter: 5
                    }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={2}
                swipeable={true}
            >


                <div>
                    <img src={Alcatel} alt="" />
                </div>
                <div>
                    <img src={Allview} alt="" />
                </div>
                <div>
                    <img src={Apple} alt="" />
                </div>
                <div>
                    <img src={Archos} alt="" />
                </div>
                <div>
                    <img src={Asus} alt="" />
                </div>
                <div>
                    <img src={benco} alt="" />
                </div>
                <div>
                    <img src={BlackBerry} alt="" />
                </div>
                <div>
                    <img src={BLU} alt="" />
                </div>
                <div>
                    <img src={Cat} alt="" />
                </div>
                <div>
                    <img src={coolpad} alt="" />
                </div>
                <div>
                    <img src={Geo} alt="" />
                </div>
                <div>
                    <img src={Gionee} alt="" />
                </div>
                <div>
                    <img src={Google} alt="" />
                </div>
                <div>
                    <img src={Haier} alt="" />
                </div>
                <div>
                    <img src={Helio} alt="" />
                </div>
                <div>
                    <img src={Honor} alt="" />
                </div>
                <div>
                    <img src={HTC} alt="" />
                </div>
                <div>
                    <img src={Huawei} alt="" />
                </div>
                <div>
                    <img src={infinix} alt="" />
                </div>
                <div>
                    <img src={Itel} alt="" />
                </div>
                <div>
                    <img src={Karbonn} alt="" />
                </div>
                <div>
                    <img src={LAVA} alt="" />
                </div>
                <div>
                    <img src={Lenovo} alt="" />
                </div>
                <div>
                    <img src={LG} alt="" />
                </div>
                <div>
                    <img src={marcel} alt="" />
                </div>
                <div>
                    <img src={Maximus} alt="" />
                </div>
                <div>
                    <img src={Meizu} alt="" />
                </div>
                <div>
                    <img src={Micromax} alt="" />
                </div>
                <div>
                    <img src={Microsoft} alt="" />
                </div>
                <div>
                    <img src={Motorola} alt="" />
                </div>
                <div>
                    <img src={Nokia} alt="" />
                </div>
                <div>
                    <img src={Nothing} alt="" />
                </div>
                <div>
                    <img src={OnePlus} alt="" />
                </div>
                <div>
                    <img src={Oppo} alt="" />
                </div>
                <div>
                    <img src={Oukitel} alt="" />
                </div>
                <div>
                    <img src={Panasonic} alt="" />
                </div>
                <div>
                    <img src={Philips} alt="" />
                </div>
                <div>
                    <img src={Realme} alt="" />
                </div>
                <div>
                    <img src={Red} alt="" />
                </div>
                <div>
                    <img src={Samsung} alt="" />
                </div>
                <div>
                    <img src={Sharp} alt="" />
                </div>
                <div>
                    <img src={Sony} alt="" />
                </div>
                <div>
                    <img src={Symphony} alt="" />
                </div>
                <div>
                    <img src={Tmobile} alt="" />
                </div>
                <div>
                    <img src={tcl} alt="" />
                </div>
                <div>
                    <img src={Tecno} alt="" />
                </div>
                <div>
                    <img src={Tesla} alt="" />
                </div>
                <div>
                    <img src={umidigi} alt="" />
                </div>
                <div>
                    <img src={Vivo} alt="" />
                </div>
                <div>
                    <img src={Vodafone} alt="" />
                </div>
                <div>
                    <img src={Walton} alt="" />
                </div>
                <div>
                    <img src={WE} alt="" />
                </div>
                <div>
                    <img src={wiko} alt="" />
                </div>
                <div>
                    <img src={Xiaomi} alt="" />
                </div>
                <div>
                    <img src={Zelta} alt="" />
                </div>
                <div>
                    <img src={ZTE} alt="" />
                </div>
            </Carousel>
        </div>
    );
};

export default Partners;