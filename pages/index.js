import Image from "next/image";
import Logo from "../public/Logo.svg";
import BigBall from "../public/BigBall.svg";
import SmallBall from "../public/SmallBall.svg";
import TextBox from "../public/TextBox.svg";
import { useEffect, useState } from "react";
import NormalWeight from "../public/NormalWeight.png";
import Underweight from "../public/Underweight.png";
import Overweight from "../public/Overweight.png";
import Obesity from "../public/Obesity.png";
import { ClockLoader } from "react-spinners";
import LogoNu from "../public/LogoNu.png";

export default function Home() {
  const [formSubmitInfo, setFormSubmitInfo] = useState({
    name: "",
    age: 0,
    gender: "",
    height: 0,
    weight: 0,
  });
  const [error, setError] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [bmi, setBmi] = useState(0);
  const [bmiType, setBmiType] = useState("");
  const [loading, setLoading] = useState(true);

  const handleFormSubmit = () => {
    if (formSubmitInfo.name === "") {
      setError(true);
    } else if (formSubmitInfo.age === 0) {
      setError(true);
    } else if (formSubmitInfo.gender === "") {
      setError(true);
    } else if (formSubmitInfo.height === 0) {
      setError(true);
    } else if (formSubmitInfo.weight === 0) {
      setError(true);
    } else {
      setError(false);
      setShowPopup(true);
      calculateBmi();
    }
  };

  const calculateBmi = () => {
    const heightInMeters = formSubmitInfo.height / 100;
    const bmi = formSubmitInfo.weight / (heightInMeters * heightInMeters);
    setBmi(Math.floor(bmi));
  };

  const calculateBmiType = () => {
    setLoading(true);
    if (bmi < 18.5) {
      setBmiType("Underweight");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setBmiType("Normal weight");
    } else if (bmi >= 25 && bmi <= 29.9) {
      setBmiType("Overweight");
    } else if (bmi >= 30) {
      setBmiType("Obesity");
    }
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  };

  useEffect(() => {
    calculateBmiType();
  }, [bmi]);

  const showNutritionSchedule = () => {
    if (bmiType === "Underweight") {
      return (
        <div className="w-rem30 h-96 flex justify-center items-center flex-col mt-44 mx-auto ">
          <h1 className="text-white font-black text-2xl mb-3">
            Nutrition Schedule
          </h1>
          <Image src={Underweight} alt="NormalWeight" className="w-rem55" />
        </div>
      );
    } else if (bmiType === "Normal weight") {
      return (
        <div className="w-rem30 h-96 flex justify-center items-center flex-col mt-44 mx-auto ">
          <h1 className="text-white font-black text-2xl mb-3">
            Nutrition Schedule
          </h1>
          <Image src={NormalWeight} alt="NormalWeight" className="w-rem55" />
        </div>
      );
    } else if (bmiType === "Overweight") {
      return (
        <div className="w-rem30 h-96 flex justify-center items-center flex-col mt-44 mx-auto ">
          <h1 className="text-white font-black text-2xl mb-3">
            Nutrition Schedule
          </h1>
          <Image src={Overweight} alt="NormalWeight" className="w-rem55" />
        </div>
      );
    } else if (bmiType === "Obesity") {
      return (
        <div className="w-rem30 h-96 flex justify-center items-center flex-col mt-44 mx-auto ">
          <h1 className="text-white font-black text-2xl mb-3">
            Nutrition Schedule
          </h1>
          <Image src={Obesity} alt="NormalWeight" className="w-rem55" />
        </div>
      );
    }
  };

  return (
    <main>
      <header className="relative w-screen h-screen">
        <div className="w-full h-full flex justify-center items-center">
          <Image src={Logo} alt="Logo" className="w-rem55" />
        </div>
        <Image
          src={BigBall}
          alt="BigBall"
          className="absolute top-0 left-1/4"
        />
        <Image
          src={BigBall}
          alt="BigBall"
          className="absolute top-60 -right-20 rotate-90"
        />
        <Image
          src={BigBall}
          alt="BigBall"
          className="absolute top-96 -left-20 -rotate-90"
        />
        <Image
          src={SmallBall}
          alt="BigBall"
          className="absolute top-full left-0"
        />
      </header>
      <div className="relative w-full h-rem100">
        <div className="w-full h-full flex justify-center items-center">
          <Image src={TextBox} alt="TextBox" className="w-rem65" />
        </div>
        <Image
          src={BigBall}
          alt="BigBall"
          className="absolute top-1/2 rotate-90 w-96 -right-16 "
        />
      </div>
      <footer className="relative w-full h-rem60 bg-primaryGreen">
        <div className="w-11/12 h-rem60 mx-auto flex justify-center items-center flex-col">
          <h1 className="text-secondaryGreen font-black border-b-2 border-secondaryGreen mb-20 text-2xl">
            Nutrition Schedule
          </h1>
          <div className="grid gap-3">
            <input
              type="text"
              placeholder="Name"
              onChange={(e) =>
                setFormSubmitInfo({ ...formSubmitInfo, name: e.target.value })
              }
              className="bg-primaryGray border-none rounded-2xl w-rem26 h-10 pl-4 text-primaryBlue focus:outline-none"
            />
            <input
              type="Number"
              placeholder="Age"
              onChange={(e) =>
                setFormSubmitInfo({ ...formSubmitInfo, age: e.target.value })
              }
              className="bg-primaryGray border-none rounded-2xl w-rem26 h-10 pl-4 text-primaryBlue focus:outline-none"
            />
            <input
              type="text"
              placeholder="Gender"
              onChange={(e) =>
                setFormSubmitInfo({ ...formSubmitInfo, gender: e.target.value })
              }
              className="bg-primaryGray border-none rounded-2xl w-rem26 h-10 pl-4 text-primaryBlue focus:outline-none"
            />
            <input
              type="Number"
              placeholder="Height"
              onChange={(e) =>
                setFormSubmitInfo({ ...formSubmitInfo, height: e.target.value })
              }
              className="bg-primaryGray border-none rounded-2xl w-rem26 h-10 pl-4 text-primaryBlue focus:outline-none"
            />
            <input
              type="Number"
              placeholder="Weight"
              onChange={(e) =>
                setFormSubmitInfo({ ...formSubmitInfo, weight: e.target.value })
              }
              className="bg-primaryGray border-none rounded-2xl w-rem26 h-10 pl-4 text-primaryBlue focus:outline-none"
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm mt-7">
              Please fill all the fields
            </p>
          )}
          <button
            onClick={handleFormSubmit}
            className="bg-secondaryGreen text-primaryLightGreen w-52 h-10 rounded-2xl mt-20 hover:scale-105 active:scale-95 transition-all"
          >
            Submit
          </button>
        </div>
        <Image
          src={LogoNu}
          alt="small Logo"
          className="absolute bottom-3 w-24 left-4 opacity-50"
        />
      </footer>
      {showPopup ? (
        <div className="">
          <div
            onClick={() => {
              setShowPopup(!showPopup);
            }}
            className="fixed left-0 top-0 w-screen h-screen bg-black opacity-70 z-10"
          ></div>
          <div className="fixed top-1/2 left-1/2 -translate-x-2/4 -translate-y-1/2  w-9/12 h-5/6 bg-secondaryGreen rounded-3xl z-30">
            {loading ? (
              <div className="w-full h-full flex justify-center items-center flex-col">
                <ClockLoader
                  color={"#fff"}
                  loading={loading}
                  size={200}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
                <h1 className="font-black text-white text-2xl mt-14">
                  Building Your Nutrition Schedule...
                </h1>
              </div>
            ) : (
              showNutritionSchedule()
            )}
          </div>
        </div>
      ) : null}
    </main>
  );
}
