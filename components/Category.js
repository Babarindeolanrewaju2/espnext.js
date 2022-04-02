import React from "react";

const Category = ({
  categories,
  selectByCategory,
  activeClass,
  setActiveClass,
}) => {
  return (
    <div className="sidebar-widget">
      <h4 className="widget-title">Category</h4>

      <div className="widget-category">
        <ul className="category-list">
          <li
            onClick={() => {
              selectByCategory("all");
              setActiveClass("all");
            }}
            className={activeClass === "all" ? " active_item" : ""}
          >
            All games
          </li>
          {categories?.map((category, index) => (
            <li
              key={index}
              onClick={() => {
                selectByCategory(category);
                setActiveClass(category);
              }}
              className={activeClass === category ? " active_item" : ""}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
