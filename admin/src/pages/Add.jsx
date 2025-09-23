import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Sidebar from "../components/sidebar";

import upload from "../assets/upload.jpg";

function Add() {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);

  const [preview1, setPreview1] = useState(upload);
  const [preview2, setPreview2] = useState(upload);
  const [preview3, setPreview3] = useState(upload);
  const [preview4, setPreview4] = useState(upload);

  // Preview updates and cleanup
  useEffect(() => {
    if (image1) {
      const objectUrl = URL.createObjectURL(image1);
      setPreview1(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    } else setPreview1(upload);
  }, [image1]);

  useEffect(() => {
    if (image2) {
      const objectUrl = URL.createObjectURL(image2);
      setPreview2(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    } else setPreview2(upload);
  }, [image2]);

  useEffect(() => {
    if (image3) {
      const objectUrl = URL.createObjectURL(image3);
      setPreview3(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    } else setPreview3(upload);
  }, [image3]);

  useEffect(() => {
    if (image4) {
      const objectUrl = URL.createObjectURL(image4);
      setPreview4(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    } else setPreview4(upload);
  }, [image4]);

  return (
    <div className="w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] overflow-x-hidden relative">
      <Nav />
      <Sidebar />

      <div className="w-[82%] h-[100%] flex items-center justify-start overflow-x-hidden absolute right-0">
        <form className="w-[90%] md:w-[90%] h-[100%] mt-[70px] flex flex-col gap-[30px] py-[60px] px-[30px] md:px-[60px]">
          <div className="w-[400px] h-[50px] text-[25px] md:text-[40px] text-white">
            Add Product
          </div>
          <div className="w-[80%] h-[130px] flex items-start justify-center flex-col mt-[20px] gap-[10px]">
            <p className="text-[20px] md:text-[25px] font-semibold">
              Upload Images
            </p>

            <div className="w-[100%] h-[100%] flex items-center justify-start gap-4">
              {[1, 2, 3, 4].map((num) => {
                const image = eval(`image${num}`);
                const preview = eval(`preview${num}`);
                const setImage = eval(`setImage${num}`);
                return (
                  <label
                    key={num}
                    htmlFor={`image${num}`}
                    className="w-[65px] h-[65px] md:w-[100px] md:h-[100px] cursor-pointer hover:border-[#46d1f7]"
                  >
                    <img
                      src={preview}
                      alt={`preview${num}`}
                      className="w-[80%] h-[80%] rounded-lg shadow-2xl hover:border-[#1d1d1d] border-[2px]"
                    />
                    <input
                      id={`image${num}`}
                      type="file"
                      hidden
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                  </label>
                );
              })}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Add;
