import { useRef } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";
import { FaGithub, FaLinkedin, FaYoutube, FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                toast.success("Message sent successfully!");
                console.log(result.text);
                form.current.reset();
            })
            .catch((error) => {
                toast.error("Failed to send message. Try again!");
                console.error(error.text);
            });
    };

    return (
        <section
            id="contact"
            className="w-10/12 sm:w-11/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12 mx-auto flex text-white py-16"
        >
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center px-6">
                {/* Left side - contact info */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold">
                        Contact <span className="text-green-400">✦</span>
                    </h2>
                    <p className="text-gray-300 max-w-md">
                        Feel free to get in touch, it will be a great pleasure to help you
                        with your project. Contact me now!
                    </p>

                    <div className="space-y-3 text-gray-300">
                        <p className="flex items-center gap-3">
                            <FaPhone className="text-green-400" /> +(91) 97155 - 18841
                        </p>
                        <p className="flex items-center gap-3">
                            <FaWhatsapp className="text-green-400" /> +(91) 97155 - 18841
                        </p>
                        <p className="flex items-center gap-3">
                            <FaEnvelope className="text-green-400" /> muthuyogeshmy@gmail.com
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex space-x-4 text-green-400 mt-4">
                        <a
                            href="https://github.com/MuthuYogesh"
                            className="transition-transform duration-300 hover:scale-110"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/muthu-yogesh/"
                            className="transition-transform duration-300 hover:scale-110"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin size={24} />
                        </a>
                        <a
                            href="https://www.youtube.com/@TempNext"
                            className="transition-transform duration-300 hover:scale-110"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaYoutube size={24} />
                        </a>
                    </div>
                </div>

                {/* Right side - form */}
                <div className="flex justify-center w-full">
                    <form ref={form} onSubmit={sendEmail} className="w-full max-w-full md:max-w-md flex flex-col space-y-4">
                        <input
                            type="text" name="user_name" placeholder="Your Name" required
                            className="w-full border border-gray-600 bg-transparent p-3 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                        <input
                            type="email" name="user_email" placeholder="Your Email" required
                            className="w-full border border-gray-600 bg-transparent p-3 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                        <textarea
                            name="message" placeholder="Your Message" required
                            rows={4}
                            className="w-full border border-gray-600 bg-transparent p-3 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                        <button
                            type="submit"
                            className="w-full bg-greentheme text-white px-4 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-background hover:border-2 hover:border-greentheme hover:scale-[1.02]"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
