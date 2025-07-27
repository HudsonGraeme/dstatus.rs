import { Button, Snippet } from "@heroui/react";

function App() {
  const asciiArt = `██████╗ ███████╗████████╗ █████╗ ████████╗██╗   ██╗███████╗
██╔══██╗██╔════╝╚══██╔══╝██╔══██╗╚══██╔══╝██║   ██║██╔════╝
██║  ██║███████╗   ██║   ███████║   ██║   ██║   ██║███████╗
██║  ██║╚════██║   ██║   ██╔══██║   ██║   ██║   ██║╚════██║
██████╔╝███████║   ██║   ██║  ██║   ██║   ╚██████╔╝███████║
╚═════╝ ╚══════╝   ╚═╝   ╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚══════╝`;

  const installCommand = "curl -sSL https://install.dstatus.rs | bash";

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-4xl w-full text-center space-y-12">
          <div className="ascii-art text-purple-500">{asciiArt}</div>

          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-light text-gray-300">
              Discord Status Manager
            </h2>

            <div className="flex justify-center px-4">
              <Snippet
                hideSymbol
                variant="bordered"
                color="default"
                className="w-full max-w-4xl"
                classNames={{
                  base: "bg-gray-900/50 border-gray-700 overflow-hidden",
                  pre: "text-gray-400 font-mono text-xs break-all",
                  copyButton: "text-gray-400 hover:text-white",
                }}
              >
                {installCommand}
              </Snippet>
            </div>

            <p className="text-gray-400 text-sm">
              Install DSTATUS in your terminal
            </p>

            <div className="flex justify-center gap-4 mt-8">
              <Button
                as="a"
                href="https://download.dstatus.rs/mac"
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="bg-white text-black hover:bg-gray-100 font-medium px-6"
                startContent={
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                }
              >
                Download for macOS
              </Button>
            </div>
          </div>
        </div>
      </div>

      <footer className="p-6 text-center text-gray-500 text-sm">
        <p>
          ☕ Built with Rust •{" "}
          <a
            href="https://github.com/HudsonGraeme/dstatus-rs"
            className="text-white"
          >
            Open Source
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
