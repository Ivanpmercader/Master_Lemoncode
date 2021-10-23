import React from 'react';
import { RouterComponent } from 'core/router';
import { AppLayout } from 'layouts';
import { OrgContextProvider } from 'core/context/member.context';


export const App: React.FC = () => {
    return (
    <AppLayout>
        <OrgContextProvider>
            <RouterComponent/>
        </OrgContextProvider>
    </AppLayout>
    )
}