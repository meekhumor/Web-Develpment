export default function Footer() {
  return (
    <footer className="border-t">
      <div className="flex max-w-xl mx-auto justify-evenly mt-8">
        <p className="text-gray-400 text-sm">Contact</p>
        <p className="text-gray-400 text-sm">About</p>
        <p className="text-gray-400 text-sm">Support</p>
        <p className="text-gray-400 text-sm">Acknowledgement</p>
      </div>

      <div className="flex gap-6 justify-center mt-6">
        <img src="footer/linkedin.svg" className="w-6" alt="" />
        <img src="footer/github.svg" className="w-6" alt="" />
        <img src="footer/discord.svg" className="w-6" alt="" />
      </div>

      <div className="text-center mt-14 text-xs flex flex-col gap-1 mb-8">
        <p className="text-gray-400">&copy; 2024 Virtual AI. All rights reserved.</p>
        <p className="text-gray-400"> This website is a clone of
          <a href="https://myinterviewpractice.com" className="hover:text-gray-300"> myinterviewpractice.com </a>
        </p>
      </div>
    </footer>
  );
}
