import Footer from "../Components/Footer"
import { Check } from "lucide-react"
import { Link } from 'react-router-dom';

function Services() {
    const basic = ["Functional Website", "4-5 Pages", "Content upload", "Plugins/extensions", "E-commerce functionality", "Hosting setup", "Social Media Integration", "7-day deliver", "only 5 Revisions"]
    const standard = ["Functional Website", "7-10 Pages", "Content upload", "Plugins/extensions", "E-commerce functionality", "Hosting setup", "Social Media Integration", "14-days delivery", "Unlimited Revision", "Payment gateway", "Opt-in form", "Autoresponder integration", "Speed optimization", "Custom logo design"]
    const premium = [
        "Fully Custom Website", "Unique UI/UX Design",
        "Unlimited Pages",
        "Advanced Functionality & Custom Features",
        "Content Upload & Optimization",
        "Premium Plugins & Integrations",
        "Full E-commerce Solution",
        "Hosting & Domain Setup Assistance",
        "Social Media Integration & Automation",
        "21-Day Delivery",
        "Unlimited Revisions",
        "Advanced Payment Gateway Integration",
        "CRM & Email Marketing Integration",
        "Membership & Subscription System",
        "SEO Optimization & Analytics Setup",
        "Speed & Performance Optimization",
        "Security Enhancements & SSL Setup",
        "Ongoing Support & Maintenance",
        "Creation of admin panel",
        "Custom logo design"
    ];

    return (
        <div className="bg-[#0e0e0e]  text-white w-full min-h-screen">
            <div className="font-sans flex-wrap px-4 pt-20 mb-32 gap-10 mx-4 md:mx-20 flex flex-col md:flex-row items-stretch">

                {/* Basic */}
                <div className="w-full md:w-full h-auto flex-1 border border-slate-500 rounded-3xl flex flex-col hover:shadow-cyan-inner hover:scale-105 hover:border-2 hover:border-cyan-300 transition-all">
                    <h1 className="text-4xl pt-8 font-bold px-8">Basic</h1>
                    <h3 className="pt-3 px-8 font-semibold text-lg uppercase text-gray-400">Starter Site</h3>
                    <p className="text-sm/6 px-8 pt-3">A complete responsive website tailored to your business needs with Basic SEO setup</p>
                    <h3 className="pt-5 px-8 font-semibold text-cyan-300">What's Included</h3>
                    <div className="px-8 pt-10 pb-16 flex-grow">
                        <ul className="space-y-3">
                            {basic.map((include, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <span className="bg-green-600 text-black p-1 rounded-full flex items-center justify-center">
                                        <Check size={10} className="text-black" strokeWidth={3} />
                                    </span>
                                    <span className="text-md">{include}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="my-5 flex justify-center mt-auto">
                        <Link
                            to="/work"
                            className="font-bold text-white glow-on-hover text-md h-12 w-40 rounded-full flex items-center justify-center mb-5"
                        >
                            Get Quotation
                        </Link>
                    </div>
                </div>

                {/* Standard */}
                <div className="w-full md:w-full h-auto flex-1 border border-slate-500 rounded-3xl flex flex-col hover:shadow-cyan-inner hover:scale-105 hover:border-2 hover:border-cyan-300 transition-all">
                    <h1 className="text-4xl pt-8 px-8 font-bold">Standard</h1>
                    <h3 className="pt-3 px-8 font-semibold text-lg uppercase text-gray-400">Enhanced Web</h3>
                    <p className="text-sm/6 px-8 pt-3">The ultimate custom-built website for complex business needs, designed to give your brand a distinctive online presence.</p>
                    <h3 className="pt-5 px-8 font-semibold text-cyan-300">What's Included</h3>
                    <div className="px-8 pt-10 pb-16 flex-grow">
                        <ul className="space-y-3">
                            {standard.map((include, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <span className="bg-green-600 text-black p-1 rounded-full flex items-center justify-center">
                                        <Check size={10} className="text-black" strokeWidth={3} />
                                    </span>
                                    <span className="text-md">{include}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="my-5 flex justify-center mt-auto">
                        <Link
                            to="/work"
                            className="font-bold text-white glow-on-hover text-md h-12 w-40 rounded-full flex items-center justify-center mb-5"
                        >
                            Get Quotation
                        </Link>
                    </div>
                </div>

                {/* Premium */}
                <div className="w-full md:w-full h-auto flex-1 border border-slate-500 rounded-3xl flex flex-col hover:shadow-cyan-inner hover:scale-105 hover:border-2 hover:border-cyan-300 transition-all">
                    <h1 className="text-4xl pt-8 px-8 font-bold">Premium</h1>
                    <h3 className="pt-3 px-8 font-semibold text-lg uppercase text-gray-400">Exclusive Web Design Suite</h3>
                    <p className="text-sm/6 px-8 pt-3">Fully customized website tailored for high-performance businesses, featuring advanced functionality, seamless integrations, and an exceptional user experience.</p>
                    <h3 className="pt-5 px-8 font-semibold text-cyan-300">What's Included</h3>
                    <div className="px-8 pt-10 pb-16 flex-grow">
                        <ul className="space-y-3">
                            {premium.map((include, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <span className="bg-green-600 text-black p-1 rounded-full flex items-center justify-center">
                                        <Check size={10} className="text-black" strokeWidth={3} />
                                    </span>
                                    <span className="text-md">{include}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="my-5 flex justify-center mt-auto">
                        <Link
                            to="/work"
                            className="font-bold text-white glow-on-hover text-md h-12 w-40 rounded-full flex items-center justify-center mb-5"
                        >
                            Get Quotation
                        </Link>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Services;
