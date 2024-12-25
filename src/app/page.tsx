

import Link from "next/link";
export default  async  function Home() {
  const url= await fetch('https://jsonplaceholder.typicode.com/posts')
  const res= await url.json()
  console.log(res)
  return (
    <main className=" mt-10 ml-[550px]  ">
      {
        res.map((todo:any,index:number)=>(
          <div key={index}>
             <Link href={`${todo.id}`}> 
             <div className="border-2 bg-slate-100 w-[525px] transition-transform hover:scale-110 cursor-pointer">
            <h1 className="text-[19px] ml-5 text-center font-medium ">
             {todo.id}
             </h1>
             <h1 className="text-[19px] ml-5 text-center font-thin text-blue-800 "> {todo.title}</h1> 
          
             </div>
</Link>
          </div>
        ))
      }
  
    </main>
  );
}
