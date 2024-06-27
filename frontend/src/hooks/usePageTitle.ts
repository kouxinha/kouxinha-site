//react
import { useEffect } from 'react';

//redux
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../store';

function SetPageTitle(pageTitle: string) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle(pageTitle));
  }, [dispatch]);
}

export default SetPageTitle