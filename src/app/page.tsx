import dbConnect from "@/lib/dbConnect";

export default async function Home() {
 await dbConnect();
  return (
    <>
    hwllo world
    </>
    

  );
}
