import Link from "next/link";
import { SelectorIcon, DotsHorizontalIcon } from "@heroicons/react/solid";

function VercelLogo({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1155 1000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M577.344 0L1154.69 1000H0L577.344 0Z" fill="black" />
    </svg>
  );
}

function Avatar({ src, alt }) {
  return (
    <img
      className="h-8 w-8 rounded-full border border-gray-200"
      src={src}
      alt={alt}
    />
  );
}

export default function Home() {
  return (
    <div>
      <div className="bg-white">
        <header className="space-y-2 border-b border-gray-200">
          <nav className="max-w-5xl mx-auto flex items-center justify-between pt-4 ">
            <div className="flex items-center space-x-3">
              <Link href="">
                <a>
                  <VercelLogo className="h-6" />
                </a>
              </Link>
              <span>
                <svg
                  viewBox="0 0 32 32"
                  stroke="currentColor"
                  className="text-gray-300 w-8 h-8"
                >
                  <line x1="10" y1="28" x2="22" y2="4" />
                </svg>
              </span>
              <span className="inline-flex space-x-2 items-center text-sm leading-5 font-medium">
                <Link href="#">
                  <a className="inline-flex items-center space-x-2">
                    <Avatar
                      src="https://pbs.twimg.com/profile_images/1271543395694108672/x3dN4sWs_400x400.jpg"
                      alt="Turhan Sel"
                    />
                    <span>Turhan Sel</span>
                  </a>
                </Link>
              </span>
              <button
                type="button"
                className="inline-flex items-center border-transparent border
                 rounded py-0.5 hover:border-gray-200 hover:bg-gray-50 transition ease-in-out duration-150"
              >
                <SelectorIcon className="h-5 w-5 text-gray-400" />
              </button>
            </div>
            <div className="flex items-center space-x-4 ">
              <div className="flex items-center space-x-5">
                <button
                  type="button"
                  className="border rounded border-gray-200 px-3 py-1.5 text-sm leading-5 text-gray-600 
                hover:border-black transition ease-in-out duration-150"
                >
                  Feedback
                </button>
                <Link href="#">
                  <a className="inline-block  text-sm leading-5 text-gray-500 hover:text-black transition ease-in-out duration-150 ">
                    Changelog
                  </a>
                </Link>
                <Link href="#">
                  <a className="inline-block  text-sm leading-5 text-gray-500 hover:text-black transition ease-in-out duration-150 ">
                    Support
                  </a>
                </Link>
                <Link href="#">
                  <a className="inline-block  text-sm leading-5 text-gray-500 hover:text-black transition ease-in-out duration-150 ">
                    Docs
                  </a>
                </Link>
                <button type="button">
                  <DotsHorizontalIcon className="h-5 w-5 text-gray-400" />
                </button>

                <button type="button">
                  <Avatar
                    src="https://pbs.twimg.com/profile_images/1271543395694108672/x3dN4sWs_400x400.jpg"
                    alt="Turhan Sel"
                  />
                </button>
              </div>
            </div>
          </nav>
          <div className="max-w-5xl mx-auto -mb-px">
            <nav className="flex text-sm leading-5 space-x-5">
              <Link href="#">
                <a className="border-b-2 border-black py-3 px-0.5 text-black ">
                  Overview
                </a>
              </Link>
              <Link href="#">
                <a className="border-b-2 border-transparent py-3 px-0.5 text-gray-500 ">
                  Projects
                </a>
              </Link>
              <Link href="#">
                <a className="border-b-2 border-transparent py-3 px-0.5 text-gray-500 hover:text-black transition ease-out duration-150">
                  Integrations
                </a>
              </Link>
              <Link href="#">
                <a className="border-b-2 border-transparent py-3 px-0.5 text-gray-500 hover:text-black transition ease-out duration-150 ">
                  Activity
                </a>
              </Link>
              <Link href="#">
                <a className="border-b-2 border-transparent py-3 px-0.5 text-gray-500 hover:text-black transition ease-out duration-150 ">
                  Domains
                </a>
              </Link>
              <Link href="#">
                <a className="border-b-2 border-transparent py-3 px-0.5 text-gray-500 hover:text-black transition ease-out duration-150 ">
                  Usage
                </a>
              </Link>
              <Link href="#">
                <a className="border-b-2 border-transparent py-3 px-0.5 text-gray-500 hover:text-black transition ease-out duration-150 ">
                  Settings
                </a>
              </Link>
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
}
