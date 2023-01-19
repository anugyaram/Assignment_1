import React from "react";
import Table from "react-bootstrap/Table";

const CardsDetails = () => {
  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Item Details Page</h2>

        <section className="container mt-3">
          <div className="item_details">
            <div className="items_img">
              <img src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp" />
            </div>

            <div className="details">
              <Table>
                <tr>
                  <td>
                    <p>
                      <strong>Restaurant</strong>: Massala Theoryy
                    </p>
                    <p>
                      <strong>Price</strong>: ₹ 350
                    </p>
                    <p>
                      <strong>Dishes</strong>: Massala Theoryy
                    </p>
                    <p>
                      <strong>Total</strong>: ₹ 350
                    </p>
                  </td>
                  <td>
                  <p>
                      <strong>Rating</strong>: <span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}> 3.5 ★</span>
                    </p>
                    <p>
                      <strong>Order Review</strong>: 1175 + order placed from here recently
                    </p>
                    <p>
                      <strong>Remove</strong> <i class="fa-solid fa-trash" style={{color:"red",fontSize:20,cursor:"pointer"}}></i>
                    </p>
                  </td>
                </tr>
              </Table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CardsDetails;
