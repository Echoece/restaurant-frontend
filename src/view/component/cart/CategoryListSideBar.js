import React from 'react';

function CategoryListSideBar(props) {
    const {element, index, handleCategoryFilter} = props;
    return (
        <p  key={index}
           className='text-center btn card'
           onClick={(event) => handleCategoryFilter(index, event)}>
            {element}
        </p>
    );
}

export default CategoryListSideBar;
