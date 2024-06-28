//react
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

//redux
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../store';

//utils
import titles from '../utils/titles';

const usePageTitles = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle(titles[location.pathname]));
  }, [location.pathname, dispatch]);
}

export default usePageTitles