import Button from '@mui/material/Button';
import './menu.css';
import React, {useEffect, useState} from 'react';
import {getAllFood} from "../../../service/food/foodService";
import a from './items/1.jpg';
import b from './items/2.jpg';
import c from './items/3.jpg';
import d from './items/4.jpg';
import e from './items/5.jpg';
import f from './items/6.jpg';
import g from './items/7.jpg';
import Avatar from '@mui/material/Avatar';


function MenuTest() {
    const [food, setFood] = useState(null);
    const [filteredFood, setFilteredFood] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const images = [a, b, c, d, e, f, g];

    useEffect(() => {
        const fetchData = async () => {
            const result = await getAllFood();
            setFood(result.data);
        };
        fetchData();
        console.log(food)
    }, []);


    const getAllCategories = () => {
        const allCategories = [];

        food.map(element => {
            const category = element.category;
            if (!allCategories.includes(category) && category !== 'DONAIR SAUCE TOPPINGS')
                allCategories.push(category)
        })
        return allCategories;
    }



    const handleCategoryFilter = (index, event) => {
        event.preventDefault();
        const categories = getAllCategories();
        const name = categories[index];

        const filtered = food.filter(element => element.category === name);
        setFilteredFood(filtered);
    }


    if (food !== null){
        const allCategories = getAllCategories();
        let tempFood = food;
        if (filteredFood)
            tempFood = filteredFood;
/*
        const groupByCategory = {};
        tempFood.forEach(element => {
            if(!(element.category in groupByCategory))
                Object.assign(groupByCategory, `${element.category}` : `${element}`)
        })
        console.log(groupByCategory)*/


    return (
        <div className='menu-container'>
            <h1 className='text-center' style={{color:'#e1cfcf'}}>Our Menu</h1>
            <div className="menu-categories">
                <span className='menu-category' onClick={(event) => {
                    setFilteredFood(null)}}><Button variant="contained" className="my-2" size="large"><h3>All Category</h3></Button></span>
                <br/>
                <hr/>
                {allCategories.map( (element, index)  => <span key={index} className='menu-category' onClick={(event)=>handleCategoryFilter(index, event)}> <Button variant="contained" className="my-2" size="large"><h3>{element}</h3></Button></span>)}
                <hr/>
            </div>


            <div className="item-cards col-8">
                {tempFood.map(element =>
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
    );}
}

export default MenuTest;
