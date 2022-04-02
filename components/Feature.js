import React from "react";

const Feature = ({ feats, selectByFeature, activeClass, setActiveClass }) => {
  return (
    <div className="sidebar-widget">
      <h4 className="widget-title">Features</h4>

      <div className="widget-category">
        <ul className="category-list">
          {feats &&
            feats?.map((feat, index) => (
              <li
                key={index}
                onClick={() => {
                  selectByFeature(feat);
                  setActiveClass(feat);
                }}
                className={activeClass === feat ? " active_item" : ""}
              >
                {feat}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Feature;
