import Navbar from "@/components/navbar";
import { vidaloka } from "@/lib/fonts";

export default function TermsOfUse() {
    return (
        <div className="bg-slate-50 h-screen overflow-hidden flex flex-col w-full">
            <Navbar />
            <div className="flex-1 flex gap-5 overflow-y-auto">
                <div className="rounded-lg max-w-4xl mx-auto p-8">
                    <h1 className={`text-4xl font-bold text-slate-700 ${vidaloka.className}`}>Terms of Use 📜</h1>
                    <p className="text-slate-500 mt-4">Effective Date: 10th Feb 2025</p>

                    <div className="mt-10">
                        <h2 className={`text-2xl text-slate-700 ${vidaloka.className}`}>1. Acceptance of Terms ✅</h2>
                        <p className="text-slate-500 mt-4">By accessing or using ResumeGenie, you agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree to these terms, please do not use our services.</p>
                    </div>

                    <div className="mt-10">
                        <h2 className={`text-2xl text-slate-700 ${vidaloka.className}`}>2. Use of Services 💻</h2>
                        <ul className="text-slate-500 mt-4 list-disc ml-5 space-y-2">
                            <li>You must be at least 13 years old to use our services.</li>
                            <li>You agree to provide accurate and up-to-date information during registration and use of the service.</li>
                            <li>You are responsible for maintaining the confidentiality of your account and password.</li>
                            <li>You must not use the services for any unlawful or unauthorized purpose.</li>
                        </ul>
                    </div>

                    <div className="mt-10">
                        <h2 className={`text-2xl text-slate-700 ${vidaloka.className}`}>3. User Conduct 🚦</h2>
                        <p className="text-slate-500 mt-4">You agree not to engage in any activity that may disrupt or interfere with the functioning of our services, including but not limited to:</p>
                        <ul className="text-slate-500 mt-4 list-disc ml-5 space-y-2">
                            <li>Uploading or transmitting viruses, malware, or harmful content.</li>
                            <li>Accessing or attempting to access accounts or systems without authorization.</li>
                            <li>Using the service to harass, abuse, or harm others.</li>
                        </ul>
                    </div>

                    <div className="mt-10">
                        <h2 className={`text-2xl text-slate-700 ${vidaloka.className}`}>4. Intellectual Property Rights ©️</h2>
                        <p className="text-slate-500 mt-4">All content, trademarks, and materials on ResumeGenie are the property of their respective owners. You may not use, copy, or distribute any content without explicit permission.</p>
                    </div>

                    <div className="mt-10">
                        <h2 className={`text-2xl text-slate-700 ${vidaloka.className}`}>5. Termination 🔚</h2>
                        <p className="text-slate-500 mt-4">We reserve the right to terminate or suspend your access to our services at any time for violations of these Terms of Use or any applicable law.</p>
                    </div>

                    <div className="mt-10">
                        <h2 className={`text-2xl text-slate-700 ${vidaloka.className}`}>6. Limitation of Liability ⚠️</h2>
                        <p className="text-slate-500 mt-4">To the fullest extent permitted by law, ResumeGenie shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our services.</p>
                    </div>

                    <div className="mt-10">
                        <h2 className={`text-2xl text-slate-700 ${vidaloka.className}`}>7. Changes to Terms of Use 🔄</h2>
                        <p className="text-slate-500 mt-4">We may update these Terms of Use from time to time. We will notify you of significant changes by posting the updated terms on our website.</p>
                    </div>

                    {/* <div className="mt-10">
                        <h2 className={`text-2xl text-slate-700 ${vidaloka.className}`}>8. Governing Law ⚖️</h2>
                        <p className="text-slate-500 mt-4">These Terms of Use shall be governed by and construed in accordance with the laws of [Insert Jurisdiction].</p>
                    </div> */}

                    <div className="my-10">
                        <h2 className={`text-2xl text-slate-700 ${vidaloka.className}`}>8. Contact Us 📧</h2>
                        <p className="text-slate-500 mt-4">If you have any questions or concerns about these Terms of Use, please contact us at <a href="mailto:avinashgupta.works@gmail.com" className="font-semibold text-slate-500 hover:underline">avinashgupta.works@gmail.com</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
