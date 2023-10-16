import { useContext } from 'react';
import StoreContext from 'app/providers/context/store';

export default function (...list) {
    let stores = useContext(StoreContext);
    return list.map((name) => stores[name]);
}
