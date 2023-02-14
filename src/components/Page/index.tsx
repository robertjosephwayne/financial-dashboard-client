import PageHeader from '../PageHeader';

export default function Page({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex flex-col w-full h-full'>
            <PageHeader />
            {children}
        </div>
    );
}
