import { vidaloka } from "@/lib/fonts";
import Navbar from "@/components/navbar";

export default function PrivacyPolicy() {
    return (
        <div className="bg-slate-50 h-screen overflow-hidden flex flex-col w-full">
            <Navbar />
            <div className="flex-1 overflow-y-auto ">
                <div className="p-8 rounded-lg max-w-4xl mx-auto">
                    <h1 className={`text-4xl font-bold text-slate-700 ${vidaloka.className}`}>Privacy Policy 🔒</h1>
                    <p className="text-slate-500 mt-4">Effective Date: 10th Feb 2025</p>

                    <div className="mt-10">
                        <h2 className={`text-2xl text-slate-700 ${vidaloka.className}`}>1. Information We Collect 📝</h2>
                        <p className="text-slate-500 mt-4">We may collect the following types of information when you use ResumeGenie:</p>
                        <ul className="text-slate-500 mt-4 list-disc ml-5 space-y-2">
                            <li><span className="font-semibold text-slate-600">Personal Information:</span> Name, email address, and any other information you voluntarily provide when joining our waitlist or using our services.</li>
                            <li><span className="font-semibold text-slate-600">Resume Data:</span> Uploaded resumes and cover letters, including job descriptions provided for resume optimization.</li>
                            <li><span className="font-semibold text-slate-600">Usage Data:</span> Information about your interactions with our website, such as IP address, browser type, pages visited, and time spent.</li>
                            <li><span className="font-semibold text-slate-600">Cookies:</span> Small data files stored on your device to improve user experience and analyze website usage.</li>
                        </ul>
                    </div>

                    <div className="mt-10">
                        <h2 className={`text-2xl text-slate-700 ${vidaloka.className}`}>2. How We Use Your Information 💡</h2>
                        <ul className="text-slate-500 mt-4 list-disc ml-5 space-y-2">
                            <li>To provide, personalize, and improve our services.</li>
                            <li>To communicate with you about updates, promotions, and service-related information.</li>
                            <li>To process your requests and provide support.</li>
                            <li>To analyze usage patterns and improve the website's functionality.</li>
                            <li>To ensure security and prevent fraudulent activity.</li>
                        </ul>
                    </div>

                    <div className="mt-10">
                        <h2 className={`text-2xl text-slate-700 ${vidaloka.className}`}>3. Information Sharing and Disclosure 🔄</h2>
                        <p className="text-slate-500 mt-4">We do not sell your personal information. We may share your information in the following circumstances:</p>
                        <ul className="text-slate-500 mt-4 list-disc ml-5 space-y-2">
                            <li><span className="font-semibold text-slate-600">Service Providers:</span> Third-party vendors who assist us in operating our website and delivering services.</li>
                            <li><span className="font-semibold text-slate-600">Legal Obligations:</span> When required by law or to protect our rights and the rights of others.</li>
                            <li><span className="font-semibold text-slate-600">Business Transfers:</span> In the event of a merger, sale, or other business transfer.</li>
                        </ul>
                    </div>

                    <div className="mt-10">
                        <h2 className={`text-2xl text-slate-700 ${vidaloka.className}`}>4. Data Security 🔐</h2>
                        <p className="text-slate-500 mt-4">We implement appropriate security measures to protect your information from unauthorized access, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.</p>
                    </div>

                    <div className="mt-10">
                        <h2 className={`text-2xl text-slate-700 ${vidaloka.className}`}>5. Your Rights and Choices ⚙️</h2>
                        <ul className="text-slate-500 mt-4 list-disc ml-5 space-y-2">
                            <li><span className="font-semibold text-slate-600">Access and Update:</span> You may access and update your personal information by contacting us.</li>
                            <li><span className="font-semibold text-slate-600">Opt-Out:</span> You may opt out of receiving promotional communications by following the unsubscribe instructions in our emails.</li>
                            <li><span className="font-semibold text-slate-600">Cookies:</span> You can manage cookie preferences through your browser settings.</li>
                        </ul>
                    </div>

                    <div className="mt-10">
                        <h2 className={`text-2xl text-slate-700 ${vidaloka.className}`}>6. Children's Privacy 🚸</h2>
                        <p className="text-slate-500 mt-4">Our services are not intended for individuals under the age of 13. We do not knowingly collect information from children.</p>
                    </div>

                    <div className="mt-10">
                        <h2 className={`text-2xl text-slate-700 ${vidaloka.className}`}>7. Changes to This Privacy Policy 🔄</h2>
                        <p className="text-slate-500 mt-4">We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the updated policy on our website.</p>
                    </div>

                    <div className="mt-10">
                        <h2 className={`text-2xl text-slate-700 ${vidaloka.className}`}>8. Contact Us 📧</h2>
                        <p className="text-slate-500 mt-4">If you have any questions about this Privacy Policy, please contact us at <a href="mailto:avinashgupta.works@gmail.com" className="font-semibold text-slate-500 hover:underline">avinashgupta.works@gmail.com</a>.</p>
                    </div>

            </div>
            </div>
        </div>
    );
}
