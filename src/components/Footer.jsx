export default function Footer() {
    return (
        <footer className="w-full py-1 bg-background text-center text-gray-400 text-sm border-t border-gray-700">
            © {new Date().getFullYear()} All rights reserved.
        </footer>
    );
}
