import React, { useEffect } from 'react';

import { useSelector,useDispatch } from 'react-redux';
import { getBannerListAction,changeProListAction } from '../store/modules/home'

const Home = () => {

  const bannerList = useSelector((state) => state.home.bannerList);
  const proList = useSelector((state) => state.home.proList);
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getBannerListAction);
      dispatch(changeProListAction({ limitNum:5 }));
  },[dispatch])
  
  return (
      <div>
          <h1>Home</h1>
          <ul>
              {bannerList &&
                  bannerList.map((item) => (
                      <img
                          src={item.img}
                          key={item.bannerid}
                          alt=""
                          style={{ height: 60 }}
                      ></img>
                  ))}
          </ul>

          <ul>
              {proList &&
                  proList.map((item) => (
                      <li key={item.proid}>{item.proname}</li>
                  ))}
          </ul>
      </div>
  );
};

export default Home;