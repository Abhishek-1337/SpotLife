import { cn } from "@/lib/utils";

const MainLayout = ({children} : {children: React.ReactNode}) => {
    return (
        <div  className={cn(
                "flex w-screen flex-1 flex-col overflow-hidden bg-background md:flex-row",
                "h-screen"
        )}>
            {children}
        </div>
    );
}

export default MainLayout;