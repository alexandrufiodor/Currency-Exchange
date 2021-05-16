import {ACTIONS_TYPE, CurrencyReducersTypes} from './actions';


export type CurrencyType = {
    currencyName: string;
    buyRate: number;
    sellRate: number;
};
export type CurrencyState = {
    currencies: Array<CurrencyType>;
    currentCurrency: string;
    isBuying: boolean;
    amountOfBYN: string;
    amountOfCurrency: string;
};

const initialState: CurrencyState = {
    currencies: [
        {
            currencyName: 'USD',
            buyRate: 17.88,
            sellRate: 17.69,
        },
        {
            currencyName: 'EUR',
            buyRate: 21.66,
            sellRate: 21.40,
        },
        {
            currencyName: 'RON',
            buyRate: 4.43,
            sellRate: 4.25,
        },
    ],
    currentCurrency: 'USD',
    isBuying: true,
    amountOfBYN: '',
    amountOfCurrency: '',
};

export const currencyReducer = (state: CurrencyState = initialState, action: CurrencyReducersTypes): CurrencyState => {
    switch (action.type) {
        case ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE: {
            return {
                ...state,
                ...action.payload
            }
        }
        case ACTIONS_TYPE.CHANGE_CHANGE_ACTION:
        case ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY: {
            return {
                ...state,
                ...action.payload,
                amountOfBYN: '',
                amountOfCurrency: ''
            }
        }
        default:
            return state;
    }
};
