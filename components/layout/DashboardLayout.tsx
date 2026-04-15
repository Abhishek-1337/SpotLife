const DashboardLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="flex flex-1">
            <div className="flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl border border-accent bg-surface p-4 px-8 overflow-auto">
            {children}
            </div>
      </div>
    );
}

export default DashboardLayout;