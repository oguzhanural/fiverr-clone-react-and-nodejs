import React, { useRef, useState } from 'react'
import GigCard from '../../components/gigCard/GigCard'
import { gigs } from '../../data';
import "./Gigs.scss"
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';

const Gigs = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");
  const minRef = useRef();
  const maxRef = useRef();

  
    const { isLoading, error, data } = useQuery({
      queryKey: ['repoData'],
      queryFn: () =>
        newRequest.get("/gigs").then((res)=>{
          return res.data;
        }),
    });
    console.log(data);
 
    const apply = () => {
      console.log(minRef.current.value);
      console.log(maxRef.current.value);
    }

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  }
  return (
    <div className='gigs'>
      <div className="container">
        <span className='breadcrumbs'>FIVERR {'>'} Music & Audio</span>
        <h1>Voice Over</h1>
        <p>Find the perfect voice for your audio or video in any style, language, or accent.</p>
          <div className="menu">
            <div className="left">
            <span>Budget</span>
              <input type="text" placeholder='Min' />
              <input type="text" placeholder='Max' />
              <button>Apply</button>
            </div>
            <div className="right">
            <span className='sortBy'>Sort By</span>
            <span className='sortType'>{sort==="sales" ? "Best Selling": "Newest"}</span>
            <img src="./img/down.png" alt="" onClick={()=>setOpen(!open)} />
            {open && (
              <div className="rightMenu">
                {
                sort==="sales"
                ? <span onClick={()=>reSort("createdAt")}>Newest</span>
                :<span onClick={()=>reSort("sales")}>Best Selling</span>
                }
              </div>)}
            </div>
          </div>
          <div className="cards">
            {isLoading 
            ? "Loading..."
            : error
            ? "Something went wrong!"
            : data.map((gig) => <GigCard key={gig._id} item={gig} />)}
          </div>
      </div>
    </div>
  )
}

export default Gigs