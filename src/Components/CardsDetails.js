import React, { useEffect,useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DTL,ADD,REM } from '../redux/actions/action';

const CardsDetails = () => {

  const [data,setData] = useState([]); 
  //console.log(data)

  const {id} = useParams();
  console.log(id)

  const history = useNavigate();

  const dispatch = useDispatch();

  const getdata = useSelector((state) => state.cartreducer.carts)
  //console.log(getdata);

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id
    });
    setData(comparedata);
  }

  useEffect(() => {
    compare();
  },[id])

  //add date
  const send = (e) => {
    //console.log(e);
    dispatch(ADD(e));

  }

  const dlt = (id) => {
    dispatch(DTL(id))
    history("/");
  }

  //remove one
  const remove = (item) =>{
    dispatch(REM(item))
  }

  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Item Details Page</h2>

        <section className="container mt-3">
          <div className="item_details">
            {
              data.map((element) => {
                return(
                  <>
<div className="items_img">
              <img src={element.imgdata} alt=""/>
            </div>

            <div className="details">
              <Table>
                <tr>
                  <td>
                    <p>
                      <strong>Restaurant</strong>: {element.rname}
                    </p>
                    <p>
                      <strong>Price</strong>: ₹ {element.price}
                    </p>
                    <p>
                      <strong>Dishes</strong>: {element.address}
                    </p>
                    <p>
                      <strong>Total</strong>: ₹ {element.price * element.qnty}
                    </p>
                    <div className="mt-5 d-flex justify-content-between align-items-center" style={{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}>
                      <span style={{fontSize:24}} onClick={element.qnty <= 1 ? ()=>dlt(element.id) : ()=>remove(element)}>-</span>
                      <span style={{fontSize:22}}>{element.qnty}</span>
                      <span style={{fontSize:24}} onClick={() =>send(element)}>+</span>
                    </div>
                  </td>
                  <td>
                  <p>
                      <strong>Rating</strong>: <span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}> {element.rating} ★</span>
                    </p>
                    <p>
                      <strong>Order Review</strong>: {element.somedata}
                    </p>
                    <p>
                      <strong>Remove</strong> <i class="fa-solid fa-trash" style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={()=>dlt(element.id)}></i>
                    </p>
                  </td>
                </tr>
              </Table>
            </div>
                  </>
                )
              })
            }
            
          </div>
        </section>
      </div>
    </>
  );
};

export default CardsDetails;
