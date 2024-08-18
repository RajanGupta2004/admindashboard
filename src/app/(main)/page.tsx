import AnalyticsChart from "@/components/dashboardcard/AnalyticsChart";
import DashboardCard from "@/components/dashboardcard/DashboardCard";
import PostTables from "@/components/posts/PostTables";
import { Folder, MessageCircle, Newspaper, User } from 'lucide-react'


export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-5">

        <DashboardCard title={"Posts"} count={100} icon={<Newspaper className='text-2xl text-slate-500' size={60} />} />
        <DashboardCard title='Categories' count={12} icon={<Folder className='text-slate-500' size={60} />} />
        <DashboardCard title={"Users"} count={100} icon={<User className='text-slate-500' size={60} />} />
        <DashboardCard title={"Comments"} count={100} icon={<MessageCircle className='text-slate-500' size={60} />} />

      </div>

      <div className="mt-3">
        <AnalyticsChart />
      </div>

      <div className="mt-3">
        <PostTables title={"Latest Posts"} limit={5} />
      </div>

    </>
  );
}
