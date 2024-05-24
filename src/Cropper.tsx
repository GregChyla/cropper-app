import React, { useRef, useEffect } from "react";
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.css";

function ImageCropper() {
  const imageElement = useRef(null);
  let cropper: Cropper | null = null;

  const image =
    "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  useEffect(() => {
    if (imageElement.current) {
      cropper = new Cropper(imageElement.current, {
        aspectRatio: 5 / 3,
        viewMode: 1,
        crop(event: Cropper.CropEvent<HTMLImageElement>) {
          console.log("Crop event", event.detail);
        },
      });
    }

    // Clean up on unmount
    return () => {
      if (cropper) {
        cropper.destroy();
        cropper = null;
      }
    };
  }, []);

  const click = () => {
    console.log("In click", cropper);
    if (cropper) {
      const canvas: HTMLCanvasElement = cropper.getCroppedCanvas({
        // must be aligned to aspect ratio
        width: 500,
        height: 300,
      });
      // const img  = canvas.toDataURL('image/png')
      canvas.toBlob(function (blob) {
        let newImg = document.createElement("img"),
          url = URL.createObjectURL(blob!);

        newImg.onload = function () {
          // no longer need to read the blob, so it's revoked
          URL.revokeObjectURL(url);
        };

        newImg.src = url;
        window.open(url, "_blank");
      });
    }
  };

  return (
    <div>
      <img ref={imageElement} src={image} alt="Zdjęcie do przycięcia" />
      <button onClick={click}>GET CANVAS</button>
    </div>
  );
}

export default ImageCropper;
