import React from "react";
import {Card, CardFooter, Image, Button} from "@nextui-org/react";
import { toast } from "react-toastify";

export default function Merchandise() {
  const handleClick = () => {
    alert("notified")
   return toast.success(
      "Notified!",
      {
        style: {
          background: "#D9D9D6",
          color: "white",
        },
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        closeButton: true,
      }
    );
  }
  return (
    <>
    <div className="flex pt-5 justify-evenly">
      <Card isFooterBlurred radius="lg" className="border-none w-52 hover:scale-110">
        <Image
          alt="Woman listing to music"
          className="object-cover"
          src="https://th.bing.com/th/id/OIP.p4ig2DG0mR85j3nidzWnrAHaFS?pid=ImgDet&rs=1"
        />
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-black/80">Available soon.</p>
          <Button
            className="text-tiny text-white bg-black/20"
            variant="flat"
            color="default"
            radius="lg"
            size="sm"
            onClick={handleClick}
          >
            Notify me
          </Button>
        </CardFooter>
      </Card>
            
      <Card isFooterBlurred radius="lg" className="border-none w-52 hover:scale-110">
        <Image
          alt="Woman listing to music"
          className="object-cover"
          src="https://th.bing.com/th/id/OIP.p4ig2DG0mR85j3nidzWnrAHaFS?pid=ImgDet&rs=1"
        />
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-black/80">Available soon.</p>
          <Button
            className="text-tiny text-white bg-black/20"
            variant="flat"
            color="default"
            radius="lg"
            size="sm"
          >
            Notify me
          </Button>
        </CardFooter>
      </Card>

      <Card isFooterBlurred radius="lg" className="border-none w-52 hover:scale-110">
        <Image
          alt="Woman listing to music"
          className="object-cover"
          src="https://th.bing.com/th/id/OIP.p4ig2DG0mR85j3nidzWnrAHaFS?pid=ImgDet&rs=1"
        />
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-black/80">Available soon.</p>
          <Button
            className="text-tiny text-white bg-black/20"
            variant="flat"
            color="default"
            radius="lg"
            size="sm"
          >
            Notify me
          </Button>
        </CardFooter>
      </Card>  
      </div>    
    </>
  );
}
