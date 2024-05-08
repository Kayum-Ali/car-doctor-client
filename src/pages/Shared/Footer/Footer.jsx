import { FaFacebookF } from "react-icons/fa6";
import { SlSocialTwitter } from "react-icons/sl";
import { TfiLinkedin } from "react-icons/tfi";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {

    const logo = 'https://i.ibb.co/PcV18rt/Group-2.png'
    return (
        <footer className="footer p-10 bg-[#151515] text-white">
            <aside>
                <img src={logo} alt="" />
                <p className="w-[283px] opacity-80">Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
                <div className="flex gap-5">
                    <FaFacebookF className="bg-[#395185] p-2 text-4xl rounded-full "></FaFacebookF>

                    <SlSocialTwitter className="bg-[#55ACEE]  p-2 text-4xl rounded-full "></SlSocialTwitter>
                    <TfiLinkedin className="bg-[#0C86E3]  p-2 text-4xl rounded-full "></TfiLinkedin>
                    <BsInstagram className="bg-[#DC4476]  p-2 text-4xl rounded-full "></BsInstagram>
                </div>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;