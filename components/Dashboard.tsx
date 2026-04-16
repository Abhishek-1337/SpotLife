"use client"

import { useState } from "react";
import { FormModal } from "@/components/ui/FormModal";
import * as yup from "yup";
import { Button } from "./ui/Button";
import LineBar from "./LineBar";
import { useFormContext } from "react-hook-form";

type FormData = {
    career: number;
    health: number;
    finance: number;
  };
  
  const schema = yup.object({
    career: yup.number().min(1).max(100).required(),
    health: yup.number().min(1).max(100).required(),
    finance: yup.number().min(1).max(100).required(),
  });
   
  const data = [
      // { x: new Date("2026-04-15").getTime(), y: 76 },
      { x: new Date("2026-04-14").getTime(), y: 100 },
      { x: new Date("2026-04-13").getTime(), y: 80 },
      { x: new Date("2026-04-12").getTime(), y: 100 },
      { x: new Date("2026-04-11").getTime(), y: 90 },
  ];

  type scoreData = {
    x: number;
    y: number;
  }

 const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [score, setScore] = useState<number>(0);
    const [oneGraph, setOneGraph] = useState<scoreData[]>(data);
    const handleSubmit = (data: any) => {
        const avg = (data.finance + data.career + data.health) / 3;
        console.log(avg);
        setScore(avg);
        setOneGraph((prev) => ([...prev, {x: Date.now(), y: avg}]))
    }

    console.log(oneGraph)
    
    return (
      <>
        <FormModal<FormData>
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onSubmit={handleSubmit}
          schema={schema}
          defaultValues={{  career: 0, health: 0, finance: 0 }}
          title="User Form"
        >
        {(register, errors, setValue, watch) => {
          // const { setValue, watch, setValue, w } = useFormContext<FormData>();
          const career = watch("career");
          const health = watch("health");
          const finance = watch("finance");
          return (
          <>
            <div>
                <label className="block mb-1 font-medium">
                  Career: {career}
                </label>

                <input
                  type="range"
                  min={1}
                  max={100}
                  value={career}
                  onChange={(e) =>
                    setValue("career", Number(e.target.value))
                  }
                  className="w-full"
                />

                <p className="text-red-500 text-sm">
                  {errors.career?.message}
                </p>
              </div>
            
            <div>
                <label className="block mb-1 font-medium">
                  Health: {health}
                </label>

                <input
                  type="range"
                  min={1}
                  max={100}
                  value={health}
                  onChange={(e) =>
                    setValue("health", Number(e.target.value))
                  }
                  className="w-full"
                />

                <p className="text-red-500 text-sm">
                  {errors.health?.message}
                </p>
              </div>
            
            <div>
                <label className="block mb-1 font-medium">
                  Finance: {finance}
                </label>

                <input
                  type="range"
                  min={1}
                  max={100}
                  value={finance}
                  onChange={(e) =>
                    setValue("finance", Number(e.target.value))
                  }
                  className="w-full"
                />

                <p className="text-red-500 text-sm">
                  {errors.finance?.message}
                </p>
              </div>
          </>
          )
        }}
      </FormModal>

        <div className="flex justify-between p-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <Button 
          onClick={() => setIsOpen(true)}
          >What's up?</Button>
        </div>
        <LineBar key={oneGraph.length} data={oneGraph}/>     
      </>
    );
  };

  export default Dashboard;
  
  
  