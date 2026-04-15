import { Button } from "@/components/ui/Button";
import LineBar from "../components/LineBar"
import DashboardLayout from "@/components/layout/DashboardLayout";


const data = [
          { x: new Date("2018-02-12").getTime(), y: 76 },
          { x: new Date("2019-02-14").getTime(), y: 100 }
];

export default function Home() {
  
  return (
       <DashboardLayout>
        <Dashboard />  
       </DashboardLayout>
  );
}
 
// Dummy dashboard component with content
const Dashboard = () => {
  return (
    <>
      <div className="flex justify-between p-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Button >What's up?</Button>
      </div>
      <LineBar data={data}/> 
      
    </>
  );
};


