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

function GithubLogo({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div>
      <div className="bg-white">
        <header className="space-y-2 border-b border-gray-200">
          <nav className="max-w-5xl mx-auto px-6 flex items-center justify-between pt-4 ">
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
          <div className="max-w-5xl mx-auto -mb-px px-6">
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
        <div className="flex items-start justify-between  max-w-5xl mx-auto px-6 pt-14 pb-28">
          <div className="flex space-x-8">
            <div>
              <img
                className="h-24 w-24 rounded-full"
                src="https://pbs.twimg.com/profile_images/1271543395694108672/x3dN4sWs_400x400.jpg"
                alt="Turhan Sel"
              />
            </div>
            <div className="flex flex-col justify-between space-y-4">
              <div className="flex items-end space-x-3">
                <h1 className="text-4xl leading-10 font-bold">Turhan Sel</h1>
                <span
                  className="inline-flex text-xs text-black leading-5 font-medium rounded-full px-2 uppercase tracking-wide bg-gray-50 
              border border-gray-200"
                >
                  Hobby
                </span>
              </div>
              <div>
                <dl>
                  <dt className="text-xs leading-5 text-gray-500 uppercase tracking-wide font-medium">
                    Git integration
                  </dt>
                  <dd className="flex items-center space-x-2 text-sm leading-5 font-medium">
                    <GithubLogo className="h-4 w-4" />
                    <span>turhansel</span>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <Link href="">
              <a className="inline-flex justify-center border border-gray-200 rounded text-sm leading-5 px-6 py-2 bg-white text-gray-500 font-medium hover:text-black transition ease-in-out duration-150">
                Invite Team
              </a>
            </Link>
            <Link href="">
              <a className="inline-flex justify-center border border-transparent rounded text-sm leading-5 px-6 py-2 text-white bg-black font-medium hover:text-black hover:border-black hover:bg-white transition ease-in-out duration-150">
                New Project
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
