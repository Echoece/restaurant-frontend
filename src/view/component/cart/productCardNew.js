import React, {useState} from 'react';
import Input from "../../util/form/input";

function ProductCardNew(props) {
    const {element, handleAddToCart, images, key}= props;
    const [quantity, setQuantity] = useState('1');

    const QuantityChangeHandle =(event)=> {
        const value = parseInt(event.currentTarget.value);

        ( value <= 50 && value > 0  )? setQuantity( value.toString() ): setQuantity('');
    }

    return (
        <div key={key} className="col">
            <div className="card w-75 mb-3">
                <div className="card-body">
                    <img src={images[Math.floor(Math.random() * 6)]} className="card-img-top"
                         alt="..."/>
                    <h6 className="card-title">{element.name}</h6>
                    {!element.itemProperty.length ?
                        <p className="card-text"><b>Price</b> : {element.price} $</p>
                        :
                        <div>
                            <b> Price : </b> {element.itemProperty.map(flavour =>
                            <span><b>{flavour.name}</b> : {flavour.price} $</span>
                        )}
                        </div>
                    }
                    <br/>
                    {/* const {name,label,value,onChange,error,help_text,type,placeholder} = this.props;*/}
                    <div className='text-center'>
                        <Input name='quantity'
                               help_text='max amount : 50'
                               label='Amount'
                               onChange={QuantityChangeHandle}
                               type='number'
                               value={quantity}
                        />
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ProductCardNew;
