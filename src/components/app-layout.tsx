import React from 'react';
import Profile from './profile';
import { ScrollArea } from './ui/scroll-area';

interface AppLayoutProps {
    children: React.ReactNode;
}

function AppLayout({ children}: AppLayoutProps) {
  return (
    <main className='min-w-screen max-w-[1600px] max-h-screen overflow-hidden w-full h-full grid grid-cols-10'>
        <div className='col-span-2'>
            <ScrollArea className='h-screen w-full'>
                <Profile/>
            </ScrollArea>
        </div>
        <div className='col-span-6'>{children}</div>
        <div className='col-span-2'></div>
    </main>
  )
}

export default AppLayout;