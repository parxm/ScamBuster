import dbConnect from "@/db/dbConnect";

export default async function Home() {
 await dbConnect();
  return (
    <>
    hwllo world
    </>
    

  );
}
