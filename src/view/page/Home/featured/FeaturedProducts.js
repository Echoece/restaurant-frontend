import React, {useEffect, useState} from 'react';
import {getAllFood} from "../../../../service/food/foodService";

import a from '../../Menu/items/1.jpg';
import b from '../../Menu/items/2.jpg';
import c from '../../Menu/items/3.jpg';
import d from '../../Menu/items/4.jpg';
import e from '../../Menu/items/5.jpg';
import f from '../../Menu/items/6.jpg';
import g from '../../Menu/items/7.jpg';
import Avatar from '@mui/material/Avatar';
function FeaturedProducts() {
    const [food, setFood] = useState(null);
    const images = [a, b, c, d, e, f, g];


    useEffect(() => {
        const fetchData = async () => {
            const result = await getAllFood();
            setFood(result.data);
        };
        fetchData();
    }, []);

    const demoData = [];
    if(food!==null){
        for (let i=0; i<5; i++) {
            demoData.push(food[i])
        }
    }


    console.log(demoData)

    return (
            <div className='menu-container'>


                <h1 className='text-center' style={{color:'#e1cfcf', fontSize: '40px'}}>Featured Food</h1>
                <hr/>
                <div className="item-cards">
                    {demoData.map(element =>
                        <div key={element.id} className="item-card" >
                        <div>                        
                        <Avatar alt="" src={images[Math.floor(Math.random() * 6)]} height='150px' width='150px' style={{marginBottom: '10px'}}sx={{ width: 150, height: 150 }}/>
                        </div>
                        <div className="mx-4">
                        <h3 className='h3' style={{whiteSpace:'initial'}}>{element.name}</h3>
                        

                        {!element.itemProperty.length ?
                            <h3 className='h4 text-warning'>Price : {element.price} $</h3>
                            :
                            <h3 className='h4 text-warning'>
                                {element.itemProperty.map(flavour =>
                                <span><b>{flavour.name}</b> : {flavour.price}$ </span>
                            )}
                            </h3>
                        }
                        <p className='item-description h5 text-light'>{element.description}</p>
                        </div>
                        
                    </div>
                    )}

                </div>
            </div>
        );

        
}

export default FeaturedProducts;
