import React from "react";

interface DynamicTodoProps {
  params: {
    id: string;
  };
}

const DynamicTodo = async (props: DynamicTodoProps) => {
  const url = await fetch(`https://jsonplaceholder.typicode.com/posts/${props.params.id}`);
  const res = await url.json();
  console.log("SingleTodoResponse", res);

  return (
    <main className="border-2 bg-slate-100 w-[555px] h-[345px] rounded-md mt-48 pt-5 transition-transform hover:scale-110 cursor-pointer ml-[550px]">
      <h1 className="text-[23px] font-medium text-center">
        {props.params.id} <br />
      </h1>
      <h1 className="text-[23px] font-bold text-black ml-4 mt-6">
        <p className="text-[20px] underline font-bold">
          Title: {res.title}
          <br />
        </p>
      </h1>
      <h1 className="text-[17px] text-blue-800 font-light ml-5 mt-3">
        <p className="text-[21px] font-serif">
          Body: {res.body}
          <br />
        </p>
      </h1>
    </main>
  );
};

export default DynamicTodo;
