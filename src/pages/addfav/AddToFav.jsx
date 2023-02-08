import React from "react";
import { useSelector,useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { actions } from "../../redux/Store";
import "./addfav.css";
const AddFav = () => {
    const dispatch = useDispatch();
    const FavItems = useSelector((state) => state.favourite) || 0 || [];

    //Removing sing Item from Cart..............
    // const removeItem = (itemId) => {
    //     if (itemId) {
    //         dispatch(actions.removeToCart(itemId));
    //        // alert(`Id:${itemId} removed Succesful..!`);
        
    //     }

    // }
    //Removing all items to Cart.........

    const clearFav = () => {
        if (FavItems) {
            dispatch(actions.clearToFav());
        
        }
    }
    return (
        <>
           
            <div className='cart-container'>
                <h2 className='cart-title'>Your Favourite !</h2>

                <div className='cart-top'>


                    <span>
                       
                        <Link to=''>WishList({FavItems?.length})</Link>
                    </span>{FavItems.length === 0 ? (<span></span>) :
                        <button className='prcd-btn' onClick={clearFav}>Clear All !</button>
                        }



                </div>
                <hr></hr>
                {(FavItems?.length === 0 )? (<h2 className="empty-div">Empty</h2>) : FavItems?.map((items) => {

                    return (<>

                        <div className='cart-middle'>
                            <div className='img-fluid'>
                                <img src={`https://image.tmdb.org/t/p/original${items ? items.poster_path : ""}`} alt='abc' />
                                <span className='cart-item-details'>
                                    <span>{items ? items.original_title : ""}</span>
                                    <span>Id:{items.id}</span>
                                    <span><b>Relesed Date: {items ? items.release_date : ""}</b></span>
                                </span>
                            </div>
                            <span className='inc-btn'>

                                <span> Ratings: {items ? items.vote_average : ""}</span>

                            </span>
                            {/* <i class="fa-sharp fa-2x fa-solid fa-xmark" onClick={() => removeItem(items.item?.[0].id)}></i> */}
                        </div>
                    </>)
                })}



                <div>

                </div>
                <br />
                {FavItems.length === 0 ? (<div className='prcd-btn-div'>
                    <Link to="/"> <button className='prcd-btn'>Back To Home !</button></Link>

                </div>) : (
                    <div className='prcd-btn-div'>
                        <Link to="/"> <button className='prcd-btn'>Back To Home </button></Link><br />


                    </div>

                )}



            </div>
           
        </>
    )
}

export default AddFav;