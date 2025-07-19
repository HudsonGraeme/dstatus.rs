import { Snippet } from "@heroui/react";

function App() {
  const asciiArt = `██████╗ ███████╗████████╗ █████╗ ████████╗██╗   ██╗███████╗
██╔══██╗██╔════╝╚══██╔══╝██╔══██╗╚══██╔══╝██║   ██║██╔════╝
██║  ██║███████╗   ██║   ███████║   ██║   ██║   ██║███████╗
██║  ██║╚════██║   ██║   ██╔══██║   ██║   ██║   ██║╚════██║
██████╔╝███████║   ██║   ██║  ██║   ██║   ╚██████╔╝███████║
╚═════╝ ╚══════╝   ╚═╝   ╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚══════╝`;

  const installCommand = "curl -sSL install.dstatus.rs | bash";

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
          </div>
        </div>
      </div>

      <footer className="p-6 text-center text-gray-500 text-sm">
        <p>
          Built with Rust •{" "}
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
