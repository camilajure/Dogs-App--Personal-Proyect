import React , {useEffect, useState} from 'react';
import './PaginationComponent.css';
import { Link } from 'react-router-dom';
import {getAllBreeds} from '../../actions/actions';
import  './Card.css';
import { connect } from 'react-redux';
import Filter from './Filter/Filter';



const renderCard=(card)=> {
    
  return (
      <div className='contenedor2' >{
        card.length !== 0 ?

        card.map((card) => {
      
        return(
          <div className='detail'>
        <div className='container'>
    
        <div className='breed-card'>
                  <p className='name'>{card.name}</p>
                  <img className='image' src={card.image}  width="300" height="200" alt=""/>

                  {/* para que me muestre los temperamentos de los nuevos perros creados */}
                  <p className='description'>Temperaments:</p>
                  <p className='description'> { card.temperament  ? card.temperament : card.temperaments.map(temp => temp.name).join(', ')}</p> 
                  <Link to={`/home/${card.id}`}>
                  <p className='descriptionDetails'>More Details...</p>
                  </Link>
                  </div>
          </div>
          
          </div>
        )
      }): <div className= 'description2'> <p>No More Dogs...</p>
        <img src="https://media.tenor.com/images/e1ce4124fa1beeefed3e7d701cb65eff/tenor.gif " alt="LoadingGif" className='loadingGif' /> </div> }
          
      </div>
  )
}

  
  function PaginationComponent({filteredBreeds,breeds, getAllBreeds}) {
  
  // function getAllBreedsFunction(){
  //   getAllBreeds()
  // }
  useEffect(() => {
    getAllBreeds()
  },[])
  
    useEffect(() => {
    getAllBreeds()
// if (card === true ){
// getAllBreeds()
// setCard(false)}
      if
      ( filteredBreeds.length > 0 ) {
        setCard(filteredBreeds)
      }
      else if (filteredBreeds.length === 0 ){
        setCard(breeds)
      }
      else if (filteredBreeds === 'All'){
        setCard(breeds)}
      else{
        setCard(breeds)
      }
    
      }, [filteredBreeds])


const [card,setCard]= useState(breeds);
// const [firstRender, setFirstRender]= useState(true)

    const [currentPage, setcurrentPage] = useState(1);
    const [itemsPerPage, setitemsPerPage] = useState(8);
  
    const [pageNumberLimit, setpageNumberLimit] = useState(1);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(1);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  
    const handleClick = (event) => {
      setcurrentPage(Number(event.target.id));
    };
  
    const pages = [];
    for (let i = 1; i <= Math.ceil(breeds.length / itemsPerPage); i++) {
      pages.push(i);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = card.slice(indexOfFirstItem, indexOfLastItem);
  
    const renderPageNumbers = pages.map((number) => {
      if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
        return (
          <li
            key={number}
            id={number}
            onClick={handleClick}
            className={currentPage === number ? "active" : null}
          >
            {number}
          </li>
        );
      } else {
        return null;
      }
    });
  
  
  
    const handleNextbtn = () => {
      setcurrentPage(currentPage + 1);
  
      if (currentPage + 1 > maxPageNumberLimit) {
        setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
        setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
      } 
    };
  
    const handlePrevbtn = () => {
      setcurrentPage(currentPage - 1);
  
      if ((currentPage - 1) % pageNumberLimit === 0) {
        setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
        setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
      }
    };
  
    let pageIncrementBtn = null;
    if (pages.length > maxPageNumberLimit) {
      pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
    }
  
    let pageDecrementBtn = null;
    if (minPageNumberLimit >= 1) {
      pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
    }
  
    
  
    return (
      <>
      <div className="body3">
      <Filter/>
         
        {renderCard(currentItems)}
        {/* itemsPerPage={itemsPerPage}
        totalcard= {card.length}
        pages= {pages} */}
        <ul className="pageNumbers">
          <li>
            <button
              onClick={handlePrevbtn}
              disabled={currentPage === pages[0] ? true : false}
            >
              Back
            </button>
          </li>
          {pageDecrementBtn}
          {renderPageNumbers}
          {pageIncrementBtn}
  
          <li>
            <button
              onClick={handleNextbtn}
              disabled={currentPage === pages[pages.length - 1] ? true : false}
            >
              Next
            </button>
          </li>
        </ul>
        </div>
      </>
    );
  }
  


  function mapStateToProps(state) {
    return {
        breeds: state.breeds,
        filteredBreeds: state.filteredBreeds,
        
    };
}

function mapDispatchToProps(dispatch) {
    return {
      getAllBreeds: breeds => dispatch(getAllBreeds(breeds)),
      
    };
}
  export default connect(mapStateToProps, mapDispatchToProps) (PaginationComponent);








  // let button = false;
  // let button1 = false;

  // if(page > 0 && page < 168 ){
  //   button = true;
  // }
  // console.log(page);
  // if(page == 168 ){
  //   button1 = true;
  // }
//   {button ? <div className={style.container}>
//   <button className={style.button} onClick={prev_Page}>
//     Back
//   </button>

//   <button className={style.button} onClick={next_Page}>
//     Next
//   </button>
// </div> : button1?
//         <button className={style.button} onClick={prev_Page}>
//         Back
//       </button>
//       :
// <div><button className={style.button} onClick={next_Page}>
//     Next
//   </button></div>