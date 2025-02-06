import Image from "next/image";
import Searchform from "@/components/Searchform";

export default async function Home({searchParams}:{
  searchParams: promise<{query: string}>
}) {
  const query = (await searchParams).query;
  return (
    <>
    <section className="pink_container">
    <h1 className="heading">Your SaaS, Your Impact<br/>Let the World See the Problem You’ve Solved!</h1>
<p className="sub-heading !max-w-3xl">Get your SaaS application in front of the right audience. </p>
    <Searchform query={query}/>
    </section>
   <section>
    <p className="text-30-semibold">
      {query ? `Search results for "${query}"` : "Popular SaaS applications"}

    </p>
    <ul className="mt-7 card_grid">

    </ul>
    </section>
   
    </>
  );
}
