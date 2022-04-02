import React, { useState, useEffect } from "react";
import { externalData } from "../data/data";
import Category from "../components/Category";
import Feature from "../components/Feature";
import Game from "../components/Game";
import Search from "../components/Search";
import ScrollToTop from "../components/ScrollToTop";

export default function Home({
  cartsArr,
  featsArr,
  externalData: externalGamesData,
}) {
  const [games] = useState(externalGamesData);
  const [filterGames, setFilterGames] = useState(externalGamesData);
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState(cartsArr);
  const [feats, setFeats] = useState(featsArr);
  const [activeClass, setActiveClass] = useState("all");

  useEffect(() => {
    let cartsArr = [];
    let featsArr = [];

    games.forEach((game) => {
      game?.cats?.forEach((category) => {
        cartsArr.push(category.title);
      });
    });
    setCategories([...new Set(cartsArr)]);

    games.forEach((game) => {
      if (game.feats.length > 0) {
        game?.feats?.forEach((feature) => {
          featsArr.push(feature.title.toLowerCase());
        });
      }
    });
    setFeats([...new Set(featsArr)]);
  }, [games]);

  useEffect(() => {
    const filterGamesBySearch = (games, search) => {
      if (!search) {
        return games;
      }

      setActiveClass("all");
      return games.filter((game) => {
        return game?.name.toLowerCase().includes(search.toLowerCase());
      });
    };

    setFilterGames(filterGamesBySearch(games, search));
  }, [games, search]);

  const selectByCategory = (category) => {
    setSearch("");
    if ("all" === category) {
      setFilterGames(games);
      return;
    }
    let catArr = [];
    games.forEach((game) => {
      game?.cats?.forEach((cats) => {
        // eslint-disable-next-line no-unused-expressions
        if (cats.title.toLowerCase().includes(category.toLowerCase())) {
          catArr.push(game);
        }
      });
    });
    setFilterGames(catArr);
  };

  const selectByFeature = (feat) => {
    setSearch("");
    let featsArr = [];
    games.forEach((game) => {
      game?.feats?.forEach((feature) => {
        // eslint-disable-next-line no-unused-expressions
        if (feature.title.toLowerCase().includes(feat.toLowerCase())) {
          featsArr.push(game);
        }
      });
    });
    setFilterGames(featsArr);
  };

  return (
    <div className="App">
      <div className="section section-padding mt-n10">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <Search search={search} setSearch={setSearch} />
              <Category
                selectByCategory={selectByCategory}
                setActiveClass={setActiveClass}
                activeClass={activeClass}
                categories={categories}
              />
              <Feature
                selectByFeature={selectByFeature}
                setActiveClass={setActiveClass}
                activeClass={activeClass}
                feats={feats}
              />
            </div>
            <div className="col-lg-8">
              <Game games={filterGames} />
            </div>
          </div>
        </div>
        <ScrollToTop />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  let cartsArr = [];
  let featsArr = [];

  externalData.forEach((game) => {
    game?.cats?.forEach((category) => {
      cartsArr.push(category.title);
    });
  });

  externalData.forEach((game) => {
    if (game.feats.length > 0) {
      game?.feats?.forEach((feature) => {
        featsArr.push(feature.title.toLowerCase());
      });
    }
  });

  // Pass data to the page via props

  return { props: { cartsArr, featsArr, externalData } };
}
