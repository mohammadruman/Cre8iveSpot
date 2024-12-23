import Image from "next/image";
import Hello from "./components/hello";
export default function Home() {
  console.log("server side");
  return (
    <>
     <h1 className="text-3xl">hello i am building</h1>
     <Hello/>
    </>
  
  );
}
