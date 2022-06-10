import React from 'react';
import Layout from '../components/atoms/Layout';
import Button from '../components/atoms/Button';
import { selectFetchedItems } from '../redux/selectors/items';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../redux/slices/items';
import { AppDispatch } from '../redux/store';

const IndexPage: React.FC = () => {
  const items = useSelector(selectFetchedItems);
  const dispatch = useDispatch<AppDispatch>();
  const handleFetchElements = () => {
    dispatch(fetchItems());
  };

  return (
    <Layout>
      <>
        <h1 className="p-6 border-solid border-2">Boilerplate</h1>
        <Button text={'fetch'} type={'button'} onClick={handleFetchElements} />
        <ul>
          {items.map((item) => (
            <li key={item.key}>{item.label}</li>
          ))}
        </ul>
      </>
    </Layout>
  );
};

export default IndexPage;
