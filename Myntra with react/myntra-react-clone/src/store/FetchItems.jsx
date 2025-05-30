import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { itemsActions } from './itemsSlice';
import { fetchStatusActions } from './fetchStatusSlice';

const FetchItems = () => {

    const fetchStatus = useSelector(store => store.fetchStatus);
    const dispatch = useDispatch();
    console.log(fetchStatus);

    useEffect(() => {
        if (fetchStatus.fetchDone) return;

        const controller = new AbortController();
        const signal = controller.signal;

        dispatch(fetchStatusActions.markFetchingStarted());
        fetch('http://localhost:8080/items', { signal })
            .then((res) => res.json())
            .then(({ items }) => {
                // console.log('Items fetched:', items);
                dispatch(fetchStatusActions.markFetchDone());
                dispatch(fetchStatusActions.markFetchingFinished());
                dispatch(itemsActions.addInitialItems(items[0]));
            });

        return () => {
            controller.abort();
        };
    }, [fetchStatus]);

    return (
        <>
            {/* <div>
                Fetch Done: {fetchStatus.fetchDone};
                Currently Fetching: {fetchStatus.currentlyFetching};
            </div> */}
        </>
    );
};
export default FetchItems;