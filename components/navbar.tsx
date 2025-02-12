import Logo from "./logo";

export default function Navbar() {
    return (
        <nav className="border-b py-8 relative shadow-xs bg-white">
            <div className="center">
                <Logo />
            </div>
        </nav>
    );
}
