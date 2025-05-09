import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";

const Ingredients = () => {
  return (
    <main className="font-sans">
      <section className="main_header mx-23 bg-[#FFFDF6]">
        <div className="flex gap-12">
          <a href="#">
            {" "}
            <img
              className="h-[10rem] w-[10rem] bg-[antiquewhite]"
              src="/foodpics/image.png"
              alt="logo"
            ></img>
          </a>
          <input
            className="mt-15 h-6 w-[15rem]"
            type="text"
            placeholder="Find a recipe or ingredient..."
          ></input>
          <div className="login mt-15 inline-flex">
            <img
              className="mt-0.5 h-5"
              src="https://static.vecteezy.com/system/resources/thumbnails/007/033/146/small/profile-icon-login-head-icon-vector.jpg"
            ></img>
            <p>
              <a href="">Login</a>|<a href="">Magazine ˅</a>|
              <a href="">Newsletter</a>|{" "}
              <a href="">
                🩷
                <span className="text-[pink]">my</span>recipes
              </a>
            </p>
          </div>
        </div>
        <div className="main_options mx-5 flex flex-wrap gap-12 pb-5 font-bold">
          <button className="hover:underline hover:decoration-red-500 hover:underline-offset-10">
            Dinners
          </button>
          <button className="hover:underline hover:decoration-red-500 hover:underline-offset-10">
            Meals
          </button>
          <Link
            to="/ingredients"
            className="hover:underline hover:decoration-red-500 hover:underline-offset-10"
          >
            Ingredients
          </Link>

          <button className="hover:underline hover:decoration-red-500 hover:underline-offset-10">
            Occasions
          </button>
          <button className="hover:underline hover:decoration-red-500 hover:underline-offset-10">
            Cuisines
          </button>
          <button className="hover:underline hover:decoration-red-500 hover:underline-offset-10">
            Kitchens
          </button>
          <button className="hover:underline hover:decoration-red-500 hover:underline-offset-10">
            Tips
          </button>
          <button className="hover:underline hover:decoration-red-500 hover:underline-offset-10">
            News
          </button>
          <button className="hover:underline hover:decoration-red-500 hover:underline-offset-10">
            Features
          </button>
          <button className="hover:underline hover:decoration-red-500 hover:underline-offset-10">
            About Me
          </button>
        </div>
      </section>

      <div className="trust_header flex h-25 w-[100%] flex-wrap gap-10 bg-[#1E3E62]">
        <div className="trust_items py-6.5">
          <h1 className="mx-27 text-3xl font-bold text-[white]">
            Taguig's{" "}
            <span className="text-[yellow]">#1 Trusted Recipe Resource </span>
            since 1997
          </h1>
        </div>
      </div>
      <div className="ingredient_search h-45 w-full bg-[#E9F5BE] px-28 py-9 font-serif">
        <h2 className="text-3xl font-extrabold">Ingredients A-Z</h2>
        <input
          type="text"
          placeholder="🔍 Search"
          className="mt-5 w-130 border bg-amber-50 p-3"
        ></input>
      </div>
      <div className="find_by_letter mx-28 mt-7">
        <p className="text-2xl font-bold">Find a topic by its first letter:</p>
        <div className="letters mt mt-3 flex flex-wrap gap-2">
          <button className="letter">A</button>
          <button className="letter">B</button>
          <button className="letter">C</button>
          <button className="letter">D</button>
          <button className="letter">E</button>
          <button className="letter">F</button>
          <button className="letter">G</button>
          <button className="letter">H</button>
          <button className="letter">I</button>
          <button className="letter">J</button>
          <button className="letter">K</button>
          <button className="letter">L</button>
          <button className="letter">M</button>
          <button className="letter">N</button>
          <button className="letter">O</button>
          <button className="letter">Q</button>
          <button className="letter">R</button>
          <button className="letter">S</button>
          <button className="letter">T</button>
          <button className="letter">U</button>
          <button className="letter">V</button>
          <button className="letter">W</button>
          <button className="letter">X</button>
          <button className="letter">Y</button>
          <button className="letter">Z</button>
        </div>
      </div>
    </main>
  );
};

export default Ingredients;
