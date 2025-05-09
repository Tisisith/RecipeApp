import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
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
      <section className="latest mx-27 mt-10 mb-30 flex flex-wrap gap-7">
        <div className="latest_news flex-col">
          <img
            className="mb-6 h-150 w-4xl"
            src="https://www.allrecipes.com/thmb/qFsINJ4P8twXS2ts5OUNrgVe674=/3000x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/AR_BreakfastClubDI_Hero-Desktop-Final-6c42338d0508441b8b5074ed35cdb546.jpg"
          ></img>
          <h3 className="mb-5">IN THE KITCHEN</h3>
          <h2 className="mb-4 text-3xl font-bold">The Breakfast Club</h2>
          <p className="w-[58rem]">
            No matter how you start your day, Nelson's recipes has you covered
            for breakfast. Here, wee share the best avocado toast, must-make
            breakfast margaritas, tips for the crispiest hash browns, and so
            much more.
          </p>
        </div>
        <div className="the_latest flex-col">
          <h2 className="mb-3 text-5xl">The Latest</h2>
          <hr className="mb-5 w-[30rem] border-3 border-amber-500"></hr>
          <div className="first mb-7 flex gap-6">
            <img
              className="h-30 w-50"
              src="https://cdn.tictuk.com/04d917c0-7bcd-6ced-acad-3e4db2bcbfd5/menus/BMEAL2.jpg"
            ></img>
            <div>
              <h3>Fast Food | 8 Hours Ago</h3>
              <p className="w-50 font-bold">
                Learn How to Create Your Own KFC Menu
              </p>
            </div>
          </div>
          <hr className="border-0.1 mb-5 w-[30rem] border-gray-300"></hr>
          <div className="second mb-7 flex gap-6">
            <img
              className="h-30 w-50"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRUbuOughXgxQBbRB7ycgxcSdAAej2pONT4A&s"
            ></img>
            <div>
              <h3>Grocery | 8 Hours Ago</h3>
              <p className="w-50 font-bold">
                Puregold Adopts 10 New Sauce Brands from the US{" "}
              </p>
            </div>
          </div>
          <hr className="border-0.1 mb-5 w-[30rem] border-gray-300"></hr>
          <div className="second mb-7 flex gap-6">
            <img
              className="h-30 w-50"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Dmf3JlAcKAYe7mvq-EmdTp2PpeoPL5jifA&s"
            ></img>
            <div>
              <h3>Fast Food | 8 Hours Ago</h3>
              <p className="w-50 font-bold">
                15-Minute Fast Food Favorites You Can Make at Home
              </p>
            </div>
          </div>
          <hr className="border-0.1 mb-5 w-[30rem] border-gray-300"></hr>
          <div className="second mb-7 flex gap-6">
            <img
              className="h-30 w-50"
              src="https://www.foodandwine.com/thmb/ckc6L6xKox0WfpfO6dMkuVGPQOY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Angel-Food-Cake-with-Three-Berry-Compote-FT-RECIPE0323-541a780b871441e0ab14383ee38acc44.jpg"
            ></img>
            <div>
              <h3>Desserts | 8 Hours Ago</h3>
              <p className="w-50 font-bold">
                Best Berry Desserts We Filipinos Love
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
