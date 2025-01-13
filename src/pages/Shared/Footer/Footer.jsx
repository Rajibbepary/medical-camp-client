import { FaFacebook} from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { ImInstagram } from "react-icons/im";

const Footer = () => {
    return (
        <div className="w-full flex flex-col">
            <div className="grid lg:grid-cols-2">
                <div className="py-8 flex flex-col items-center text-[hsla(0,0%,101%,1)] bg-[hsla(215,27%,17%,1)]">
                    <h2 className="text-[32px] font-semibold ">CONTACT US</h2>
                    <div className="flex flex-col items-center gap-3 py-3">
                        <p> 123 ABS Street, Uni 21, Bangladesh</p>
                       <p> +88 123456789</p>
                       <p>Mon - Fri: 08:00 - 22:00</p>
                        <p className="mb-4"> Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>
                <div className=" py-8 bg-[hsla(220,39%,11%,1)] text-[hsla(0,0%,101%,1)] flex flex-col gap-4 items-center">
                    <h2 className="text-[30px] font-semibold">Follow US</h2>
                    <p>Join us on social media</p>
                    <div className="flex gap-4 text-2xl">
                        <FaFacebook/>
                        <ImInstagram/>
                        <FaTwitter/>
                    </div>
                </div>
            </div>
            <div className="text-center bg-[hsla(0,0%,9%,1)] py-4">
            <p className="text-[hsla(0,0%,101%,1)]">Copyright &copy; {new Date().getFullYear()} CulinaryCloud. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;