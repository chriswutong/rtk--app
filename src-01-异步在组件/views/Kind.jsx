import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getCategoryList } from '../api/kind'
import { changeCategoryList } from '../store/modules/kind';

const Kind = () => {
  const categoryList = useSelector((state) => state.kind.categoryList);
  const dispatch = useDispatch();
useEffect(() => {
  getCategoryList().then(res => {
          dispatch(changeCategoryList(res.data.data));
  })
}, [dispatch]);
  return (
      <div>
          <h1>Kind</h1>
          <ul>
              {categoryList &&
                  categoryList.map((item) => {
                      return <li key={item}>{item}</li>;
                  })}
          </ul>
      </div>
  );
};

export default Kind;