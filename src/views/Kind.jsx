import React ,{useEffect} from 'react';

import { useSelector, useDispatch } from "react-redux";
import { getCategoryListAction } from "../store/modules/kind";



const Kind = () => {

    const categoryList = useSelector((state) => state.kind.categoryList);
    const dispatch = useDispatch();

      useEffect(() => {
          dispatch(getCategoryListAction);
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