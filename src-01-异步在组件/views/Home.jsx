import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { changeBannerList,changeProList } from '../store/modules/home';
import { getBannerList,getProList } from '../api/home'
const Home = () => {
  // 获取状态管理器的数据
  const bannerList = useSelector(state => state.home.bannerList)
  const proList = useSelector((state) => state.home.proList);

  const dispatch = useDispatch()
  useEffect(() => {
      getBannerList().then((res) => {
          dispatch(changeBannerList(res.data.data));
      });
      getProList().then((res) => {
          dispatch(changeProList(res.data.data));
      });
  }, [dispatch]);
  return (
      <div>
          <h1>Home</h1>
           <ul>
        {
          bannerList && bannerList.map(item => (
            <img src = { item.img } key = { item.bannerid } alt="" style={{ height: 60 }}></img>
          ))
        }
      </ul>

      <ul>
        {
          proList && proList.map(item => (
            <li key = { item.proid }>{ item.proname }</li>
          ))
        }
      </ul>
      </div>
  );
};

export default Home;