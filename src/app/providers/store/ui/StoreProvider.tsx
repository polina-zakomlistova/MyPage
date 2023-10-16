import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom/client';

import StoreContext from 'app/providers/context/store';
import { injectStores } from '@mobx-devtools/tools';

import rootStore from '../config/store';

interface StoreProviderProps {
    children?: ReactNode;
}

const StoreProvider = (props: StoreProviderProps) => {
    const { children } = props;

    const store = new rootStore();

    injectStores({
        store,
    });
    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
};

export default StoreProvider;
