import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';
export const Footer = () =>{
    return(
        <>
        <div className="bg-gray-900 pt-12">
            <div className="text-white text-center font-semibold text-xl">
                About Us 
            </div>
            
            <div className="font-extralight text-gray-200 text-center text-sm pt-6">
                Trident Club RBU<br></br>
                
                All Rights Reserved - @2024
            </div>

            <div className="flex justify-center gap-8 p-6 bg-gray-900">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon bg-blue-800 hover:bg-blue-600 p-3 rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
                <FaFacebookF className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/company/trident-racing-rcoem/" target="_blank" rel="noopener noreferrer" className="social-icon bg-blue-700 hover:bg-blue-500 p-3 rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
                <FaLinkedinIn className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/trident_rcoem?igsh=ZmFsYjRoM3JjOTJw" target="_blank" rel="noopener noreferrer" className="social-icon bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 hover:from-yellow-300 hover:via-pink-400 hover:to-purple-500 p-3 rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
                <FaInstagram className="w-6 h-6" />
            </a>
            <a href="https://x.com/tridentracing" target="_blank" rel="noopener noreferrer" className="social-icon bg-blue-500 hover:bg-blue-400 p-3 rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
                <FaTwitter className="w-6 h-6" />
            </a>
        </div>
        </div>

        </>
    )
}