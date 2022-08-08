import Image from "next/future/image";
import { useCallback, useEffect } from "react";
import contentEval from "../../../lib/contentEval";
import useGalleryState from "../../hooks/useGalleryHook";
import ImageClose from "./SVG/imageClose";
import LeftChevron from "./SVG/leftChevron";
import RightChevron from "./SVG/rightChevron";

export default function GalleryModal({
  gallery,
  caption,
  setViewModal,
  imgNumber,
}) {
  const [imgValue, setImgValue, imgRef] = useGalleryState(imgNumber.current);

  useEffect(() => {
    console.log(gallery);
    document.addEventListener("keydown", keyDownHandler, false);

    return () => {
      document.removeEventListener("keydown", keyDownHandler, false);
    };
  }, []);

  function keyDownHandler(e) {
    console.log("Key Pressed: ", e.key);

    if (e.key === "Escape") {
      e.preventDefault();
      closeModal();
    }

    if (e.key === "ArrowLeft") {
      e.preventDefault();
      navLeftHandle();
    }

    if (e.key === "ArrowRight") {
      e.preventDefault();
      navRightHandle();
    }
  }

  function closeModal() {
    setViewModal(false);
  }

  const navLeftHandle = useCallback(() => {
    console.log("Current Image: ", imgRef.current);
    if (imgRef.current <= 0) {
      const endImg = gallery.length - 1;
      setImgValue(endImg);
      return;
    }
    const prevImg = imgRef.current - 1;
    setImgValue(prevImg);
  }, [imgValue, gallery]);

  const navRightHandle = useCallback(() => {
    if (imgRef.current >= gallery.length - 1) {
      setImgValue(0);
      return;
    }
    const nextImg = imgRef.current + 1;
    setImgValue(nextImg);
  }, [imgValue, gallery]);

  return (
    <div className="post__modal">
      <div className="post__modal--content">
        <div className="post__modal--image">
          <Image
            src={gallery[imgValue].src}
            alt={gallery[imgValue].alt}
            width={gallery[imgValue].width}
            height={gallery[imgValue].height}
          />
          <button className="post__modal--image--button" onClick={closeModal}>
            <ImageClose />
          </button>
        </div>
        {caption && (
          <p className="post__modal--caption">{contentEval(caption)}</p>
        )}
      </div>
      <div className="post__modal--navigation">
        <button
          className="post__modal--navigation-left"
          onClick={navLeftHandle}
        >
          <LeftChevron />
        </button>
        <button
          className="post__modal--navigation-right"
          onClick={navRightHandle}
        >
          <RightChevron />
        </button>
      </div>
      <div className="post__modal--background" onClick={closeModal} />
    </div>
  );
}
