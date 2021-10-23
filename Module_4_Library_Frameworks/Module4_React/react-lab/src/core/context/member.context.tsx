import React from "react";

const initValueOrg: string = 'lemoncode';

interface IntOrgContext {
    organization: string;
    setOrganization: (org: string) => void;
}

export const OrgContext = React.createContext<IntOrgContext>({
    organization: '',
    setOrganization: (org) => {},
});

export const OrgContextProvider = ({children}) => {
    const [organization, setOrganization ] = React.useState(initValueOrg);

    return (
        <OrgContext.Provider value={{organization, setOrganization}}>
            {children}
        </OrgContext.Provider>
    )
}