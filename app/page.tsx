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
      <LineBar data={data}/> 
    </>
  );
};


