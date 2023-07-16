import React from "react";
import axios from "axios";
import { useState } from "react";
import bollywood from "@/constants/bollywood";

const BollywoodPage = ({ bollywoodDatas }) => {
  // const [bollywoodRes, setBollywoodRes] = useState(bollywoodDatas.bollywoodData);
  return (
    <main className="bollywood bg-slate-900 h-full w-full">
      <div className="inner__div">
        {bollywood.map((bolly) => (
          <div className="max-w-sm rounded overflow-hidden shadow-lg img__div m-4" key={bollywood.id}>
            <img className="w-full" src={bolly.image} alt={bollywood.name} />
            
          </div>
        ))}
      </div>
    </main>
  );
};

// export async function getServerSideProps(context) {
//   const res = await axios.get("http://localhost:3000/api/getBollywood");
//   const bollywoodDatas = await res.data;
//   return {
//     props: { bollywoodDatas },
//   };
// }

export default BollywoodPage;
