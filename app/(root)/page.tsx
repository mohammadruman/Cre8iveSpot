import Image from "next/image";
import Searchform from "@/components/Searchform";
import StartupCard from "@/components/StartupCard";

export default async function Home({searchParams}:{
  searchParams: promise<{query: string}>
}) {
 const posts =[ {
    "_createdAt": "Yesterday",
    "views": 55,
    "author": { "_id": 1 },
    "_id": 1,
    "description": "This is a description",
    "image": "https://images.unsplash.com/photo-1634912314704-c646c586b131?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wdXJlWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "category": "Robots",
    "title": "We Robots"
  },
  {
    "_createdAt": "Yesterday",
    "views": 55,
    "author": { "_id": 1 },
    "_id": 1,
    "description": "This is a description",
    "image": "https://images.unsplash.com/photo-1634912314704-c646c586b131?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wdXJlWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "category": "Robots",
    "title": "We Robots"
  },
  {
    "_createdAt": "Yesterday",
    "views": 55,
    "author": { "_id": 1 },
    "_id": 1,
    "description": "This is a description",
    "image": "https://images.unsplash.com/photo-1634912314704-c646c586b131?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wdXJlWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "category": "Robots",
    "title": "We Robots"
  }
];
  
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
      {posts?.length >0 ? (posts.map((post : StartupCardType , index :number)=>(
        <StartupCard/> 
      ))
    ) :(
      <p className="no-result">No Saas Found</p>
    )}
    </ul>
    </section>
   
    </>
  );
}
