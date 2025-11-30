import { cn } from "@/lib/utils";

const MainLayout = ({children} : {children: React.ReactNode}) => {
    return (
        <div  className={cn(
                "flex w-screen flex-1 flex-col overflow-hidden  border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800",
                "h-screen"
        )}>
            {children}
        </div>
    );
}

export default MainLayout;