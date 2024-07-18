import  Navbar  from "../components/Navbar"
import { Footer } from "../components/Footer"
import { useState } from "react" ;
// import nodemailer , {Transporter} from 'nodemailer';




export const ContactUs = ()=>{
    const [error, setError] = useState("");
    const [formInput, setFormInput] = useState({
        email: "",
        subject: "",
        message: ""
    });

    // Function to validate email format
    // function validateEmail(email:string) {
    //     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     return regex.test(email);
    // }

    // Function to handle form submission
    // const handleSubmit = async () => {
        

    //     // Clear previous errors
    //     setError("");

    //     // Validate email
    //     if (!formInput.email) {
    //         setError("Email is required");
    //         return;
    //     }

    //     if (!validateEmail(formInput.email)) {
    //         setError("Invalid email format");
    //         return;
    //     }

    //     try {
    //         // Send email using Nodemailer directly (not recommended for production)
    //         const transporter:Transporter<unknown> = nodemailer.createTransport({
    //             service: "gmail",
    //             auth: {
    //                 user: "mailer9909@gmail.com",
    //                 pass: "teuw rvlj fxiy mehs"
    //             }
    //         });

    //         const details = {
    //             from: "mailer9909@gmail.com",
    //             to: formInput.email,
    //             subject: formInput.subject,
    //             text: formInput.message
    //         };

    //         transporter.sendMail(details, (err:Error | null) => {
    //             if (err) {
    //                 console.error('Error sending email:', err);
    //                 setError("Error sending email. Please try again.");
    //             } else {
    //                 console.log('Email sent');
    //                 // Handle success message or other logic
    //             }
    //         });

    //         // Optionally, handle success message or redirection
    //     } catch (error) {
    //         console.error('Error sending email:', error);
    //         setError("Error sending email. Please try again.");
    //     }
    // };

    
 
    return(
        
        <>
            <div className="bg-gray-900">
                <div>
                    <Navbar/>
                </div>     

                <div className="mt-24">
                    <section className="bg-white dark:bg-gray-900">
                        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
                            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">For any sponsorship contact us</p>
                            <form action="#" className="space-y-8">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                    <input type="email" 
                                    id="email" 
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                    placeholder="johndoe@gmail.com"
                                    onChange={(e)=>{
                                        setFormInput({...formInput , email:e.target.value})
                                    }}
                                      required/>
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                                    <input type="text" 
                                    id="subject"
                                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                    placeholder="Let us know how we can help you"
                                    onChange={(e)=>{
                                        setFormInput({...formInput , subject : e.target.value})
                                    }} 
                                    required/>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                                    <textarea id="message"
                                    rows={6}
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Leave a comment..."
                                    onChange={(e)=>{
                                        setFormInput({...formInput , message : e.target.value})
                                    }}></textarea>
                                </div>
                                <button type="submit"
                                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >Send message</button>
                            </form>
                        </div>
                    </section>
                </div>      

            </div>

            <Footer/>
        </>
    )
}