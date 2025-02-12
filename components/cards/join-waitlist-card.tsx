import { vidaloka } from "@/lib/fonts";

export default function JoinWaitlistCard() {
    return (
        <div className="h-full w-full bg-white grid place-content-center">
            <div className="w-[70%] h-[80%] flex flex-col m-auto overflow-y-auto pe-5">
                <div className="">
                    <h1 className={`text-4xl font-bold text-slate-700 ${vidaloka.className}`}>Craft the Perfect Job Application in Minutes with AI ✨</h1>
                    <p className={`text-slate-500 mt-6`}>ResumeGenie is your AI-powered career assistant designed to revolutionize how you apply for jobs. Upload your current resume, input the job description, and let our intelligent system generate a professionally optimized resume and personalized cover letter tailored for the role.</p>
                </div>
                <div className="mt-10">
                    <h3 className={`text-2xl text-slate-700 ${vidaloka.className}`}>Key Features 💼</h3>
                    <ul className="text-slate-500 mt-4 flex flex-col gap-2">
                        <li><span className="font-semibold text-slate-600">1. AI-Generated Resumes & Cover Letters:</span> Tailored content with the right keywords to boost your ATS score.</li>
                        <li><span className="font-semibold text-slate-600">2. Editable Sections:</span> Fine-tune your resume and cover letter before submitting.</li>
                        <li><span className="font-semibold text-slate-600">3. Job Tracker: </span> Keep track of all your job applications in one convenient place.</li>
                        <li><span className="font-semibold text-slate-600">4. Seamless Experience: </span> Auto-add finalized resumes to the job tracker along with company information.</li>
                    </ul>
                </div>
                <div className="mt-10">
                    <h3 className={`text-2xl text-slate-700 ${vidaloka.className}`}>Be Among the First 🚧</h3>
                    <p className="mt-4 text-slate-500">{"We’re hard at work creating an innovative tool that will redefine your job application experience. Joining the waitlist ensures you'll be the first to access TailorCV when it launches."}</p>
                </div>
                <div className="mt-10">
                    <h3 className={`text-2xl text-slate-700 ${vidaloka.className}`}>Early Access Benefits 🔥</h3>
                    <ul className="text-slate-500 mt-4 flex flex-col gap-2">
                        <li>1. Exclusive early access features.</li>
                        <li>2. Priority support to guide you through the experience.</li>
                        <li>3. Special insights on new updates.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
