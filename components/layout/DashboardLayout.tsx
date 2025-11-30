const DashboardLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="flex flex-1">
            <div className="flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl border border-neutral-200 bg-white p-2 md:p-10 dark:border-neutral-700 dark:bg-neutral-300 bg-linear-to-l dark:from-neutral-400 dark:to-neutral-300 from-neutral-900 to-neutral-800 overflow-auto">
            {children}
            </div>
      </div>
    );
}

export default DashboardLayout;