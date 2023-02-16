import React, {useEffect, useState} from 'react';
import {getAllFood} from "../../../service/food/foodService";
import a from './items/1.jpg';
import b from './items/2.jpg';
import c from './items/3.jpg';
import d from './items/4.jpg';
import e from './items/5.jpg';
import f from './items/6.jpg';
import g from './items/7.jpg';
import Loading from "../../util/loading";
import Cart from "../../../service/products/cart/cart";
import ProductCard from "../../component/cart/ProductCard";
import CategoryListSideBar from "../../component/cart/CategoryListSideBar";

function Menu() {
    const [food, setFood] = useState(null);
    const [filteredFood, setFilteredFood] = useState(null);
    const [cart, setCart] = useState({
            purchaseStatus: 'shopping',
            itemDetails: []
        }
    );

    const images = [a, b, c, d, e, f, g];

    useEffect(() => {
        const fetchData = async () => {
            const result = await getAllFood();
            setFood(result.data);
        };
        fetchData();
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

    //          cart handlers/ replace cart with cart.data and purchaseStatus with cart.purchaseStatus
    //-------------------------------------

    // buy all item handler
    const CartBuyAllHandler = async () => {
        const goods = cart.itemDetails;

        // creating DTO object for checkout request
        let productList = [];

        // fix item id,
        goods.map(
            element => productList.push(
                {item: {id: element.product.id}, quantity: element.quantity, productName: element.name, price: element.quantity * element.price}
            )
        );

       // const {data} = await checkout(productList);

        /*if (data === 'success!')
            setCart({purchaseStatus: 'success', data: []})
        else*/
            setCart({purchaseStatus: 'failed', itemDetails: []})

    }

    // removing single item handler
    const RemoveItemHandler = (product) => {
        let allProduct = cart.itemDetails;
        allProduct = allProduct.filter(element => element.product !== product);
        setCart({...cart , itemDetails: allProduct});
    }

    // delete all item handler
    const CartDeleteAllHandler = () => {
        setCart({...cart , itemDetails: []})
    }

    // adding product in cart, may have some room for improvement in the logic (to-do)
    const AddToCartHandle = (product, quantity) => {

        const items = cart.itemDetails;

        const productDetail = {
            product: product,
            name : product.name,
            quantity: parseInt(quantity),
            totalCost: product.price * parseInt(quantity),
        }

        // checking if the product is already present in the cart
        const isPresent = items.find(element => element.product === product);
        let updatedCart;

        // if product is not present in the cart, add the product
        if (!isPresent) {
            updatedCart = [...items, productDetail];
        }

        // if present, update the product quantity and total price
        else {
            items.forEach(element => {
                if (element.product === product) {
                    element.quantity += parseInt(quantity);
                    element.totalCost += product.price * parseInt(quantity);
                }
            })
            updatedCart = items;
        }

        // finally update the state with updated cart
        setCart({itemDetails: updatedCart, purchaseStatus: 'shopping'});
    }

    //-----------------------------------------------------------------------------

    if (food !== null) {
        const allCategories = getAllCategories();
        let tempFood = food;
        if (filteredFood)
            tempFood = filteredFood;

        return (
            // category list rendering
            <div className='container-fluid row'>
                <div className="col-3 mt-3">
                    <p className='text-center card btn' onClick={(event) => {
                        setFilteredFood(null)
                    }}>All Categories</p>
                    {
                        allCategories.map((element, index) =>
                            <CategoryListSideBar
                                key = {index}
                                element = {element}
                                index = {index}
                                handleCategoryFilter = {handleCategoryFilter}
                            />
                        )
                    }
                </div>

                {/* food list rendering*/}
                <div className="col-5">
                    <div className="row row-cols-1 row-cols-md-2 g-1">
                        {
                            tempFood.map(element =>
                                <ProductCard
                                    key = {element.id}
                                    element = {element}
                                    images = {images}
                                    handleAddToCart = {AddToCartHandle}
                                />
                            )
                        }
                    </div>
                </div>

                <div className="col-4">
                    <Cart items={cart.itemDetails}
                          status={cart.purchaseStatus}
                          buyAll={CartBuyAllHandler}
                          deleteOne={RemoveItemHandler}
                          deleteAll={CartDeleteAllHandler}/>
                </div>
            </div>
        )
    } else
        return (
            <div className='container d-flex justify-content-center'>
                <Loading color='#79edda' type='spin'/>
            </div>
        )
    }

export default Menu;
