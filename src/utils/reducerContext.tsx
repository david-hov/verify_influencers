import { createContext, useContext, useReducer, Dispatch } from 'react';

type CustomState = {
    filter: string,
};

type CustomAction = { type: 'SET_FILTER'; value: any }

const customReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'SET_FILTER':
            return { ...state, filter: action.value };
        default:
            return state;
    }
};

type CustomContextType = {
    state: CustomState;
    dispatch: Dispatch<CustomAction>;
};

const CustomContext = createContext<CustomContextType | undefined>(undefined);

export const CustomProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(customReducer, {
        filter: 'All',
    });

    return (
        <CustomContext.Provider value={{ state, dispatch }}>
            {children}
        </CustomContext.Provider>
    );
};

export const useCustomContext = () => {
    const context = useContext(CustomContext);
    if (context === undefined) {
        throw new Error('useCustomContext must be used within a CustomProvider');
    }
    return context;
};
