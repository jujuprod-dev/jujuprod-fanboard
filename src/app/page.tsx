import Image from "next/image";
import { jujuMainWebsiteURL, newTabProps } from "@/config/constants";
import { Container } from "@/components/molecules/container";

export default function Home() {
  return (
    <Container>
      {/* Header */}
      <section className="mb-20 flex flex-wrap gap-4 w-full items-center justify-between">
        <div>
          <h1 className="text-4xl">Contribute</h1>
          <p className="text-gray-500">
            Come contribute, get shouted out and points.
          </p>
        </div>
        <a
          className="underline break-all"
          href={jujuMainWebsiteURL}
          {...newTabProps}
        >
          https://www.jujuprodgames.com/
        </a>
      </section>

      {/* Items */}
      <section className="grid grid-cols-1 gap-10 lg:grid-cols-2 w-full">
        <div className="w-full h-52 lg:h-64 bg-slate-200 relative">
          <button className="w-fit break-all p-4 bg-gray-400 text-white absolute m-5 rounded-md bottom-0 right-0">
            <a href="#" rel="noopener noreferrer" target="_blank">
              Contribute
            </a>
          </button>
        </div>
      </section>
    </Container>
  );
}
