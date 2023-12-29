// // client/src/components/Sidebar/Sidebar.js
// import React, { useState } from 'react';
// import './Sidebar.css';
//
// const Sidebar = ({ categories, names, filterByCategory, filterByName, showAll }) => {
//     const [selectedCategory, setSelectedCategory] = useState(null);
//
//     const handleCategoryClick = (category) => {
//         setSelectedCategory(category);
//         filterByCategory(category);
//     };
//
//     return (
//         <div className="sidebar">
//             <div>
//                 <h3>Categories</h3>
//                 <ul>
//                     {categories.map((category) => (
//                         <li
//                             key={category}
//                             onClick={() => handleCategoryClick(category)}
//                             className={category === selectedCategory ? 'selected' : ''}
//                         >
//                             {category}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//             {selectedCategory && (
//                 <div>
//                     <h3>Names</h3>
//                     <ul>
//                         {names.map((name) => (
//                             <li key={name} onClick={() => filterByName(name)}>
//                                 {name}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//             <button onClick={showAll}>Show All</button>
//         </div>
//     );
// };
//
// export default Sidebar;



// client/src/components/Sidebar/Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ categories, namesByCategory, filterByCategory, filterByName, showAll }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        filterByCategory(category);
    };

    const handleNameClick = (name) => {
        filterByName(name);
    };

    const handleShowAll = () => {
        setSelectedCategory(null);
        showAll();
    };

    return (
        <div className="sidebar">
            <div>
                <h3>Категория</h3>
                <ul>
                    {categories.map((category) => (
                        <li
                            key={category}
                            onClick={() => handleCategoryClick(category)}
                            className={selectedCategory === category ? 'active' : ''}
                        >
                            {category}
                        </li>
                    ))}
                </ul>
            </div>
            {selectedCategory && (
                <div>
                    <h3>Тип</h3>
                    <ul>
                        {namesByCategory[selectedCategory].map((name) => (
                            <li key={name} onClick={() => handleNameClick(name)}>
                                {name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <button onClick={handleShowAll}>Show All</button>
        </div>
    );
};

export default Sidebar;
