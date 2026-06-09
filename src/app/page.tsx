import GiftPostcard from "@/components/GiftPostcard";
import { HeartPlus, LockKeyhole, Package, Quote } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home |Planet Earth Store",
  description: "Home page of Planet Earth Store",
};

const page = () => {
  return (
    <>
      <section className="grid place-items-center bg-[url(/home-banner.jpg)] bg-cover bg-center py-64">
        <div className="grid place-items-center gap-6">
          <h1 className="text-earth-dark text-8xl font-semibold tracking-widest">
            EARTH
          </h1>
          <p className="text-4xl font-light tracking-widest uppercase">
            MULTIPURPUS STORE
          </p>
          <Link
            href={"/"}
            className="bg-earth-light hover:bg-earth-dark mt-4 rounded-se px-8 py-2 text-xl text-white uppercase">
            Shop Now
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-3 gap-6 border-b border-gray-300 px-48 py-28">
        <div className="grid gap-1">
          <Image
            src={"/poster1.jpg"}
            alt="poster1"
            height={350}
            width={350}
            className="aspect-square h-auto w-auto rounded-sm"
          />
          <div className="text-gray-500">Poster</div>
          <div className="text-lg font-bold uppercase">Poster V1</div>
          <div className="font-semibold">₹239.00</div>
        </div>
        <div className="grid gap-1">
          <Image
            src={"/poster2.jpg"}
            alt="poster2"
            height={350}
            width={350}
            className="aspect-square h-auto w-auto rounded-sm"
          />
          <div className="text-gray-500">Poster</div>
          <div className="text-lg font-bold uppercase">POSTER V2</div>
          <div className="font-semibold">₹212.00</div>
        </div>
        <div className="grid gap-1">
          <Image
            src={"/poster3.jpg"}
            alt="poster3.jpg"
            height={350}
            width={350}
            className="aspect-square h-auto w-auto rounded-sm"
          />
          <div className="text-gray-500">Poster</div>
          <div className="text-lg font-bold uppercase">Poster V2</div>
          <div className="font-semibold">₹251.00</div>
        </div>
      </section>

      <section className="space-y-8 px-48 py-28">
        <div className="text-5xl font-semibold uppercase">
          What Our Customers Say
        </div>

        <div className="grid grid-cols-3 gap-28">
          <div className="space-y-8">
            <div className="">
              Fast shipping and excellent customer service. The product was even
              better than expected. I will definitely be a returning customer.
            </div>
            <div className="flex justify-between">
              <div className="space-y-6">
                <Image
                  src={"/avatar-1.jpeg"}
                  alt="avatar-1"
                  width={40}
                  height={40}
                  className="aspect-square h-10 w-10 rounded-full"
                />

                <div className="font-bold uppercase">Jennifer Lewis</div>
              </div>
              <Quote className="text-earth-light fill-earth-light" />
            </div>
          </div>

          <div className="space-y-8">
            <div className="">
              Great user experience on your website. I found exactly what I was
              looking for at a great price. I will definitely be telling my
              friends.
            </div>
            <div className="flex justify-between">
              <div className="space-y-6">
                <Image
                  src={"/avatar-2.jpeg"}
                  alt="avatar-2.jpeg"
                  width={40}
                  height={40}
                  className="aspect-square h-10 w-10 rounded-full"
                />
                <div className="font-bold uppercase">Alicia Heart</div>
              </div>
              <Quote className="text-earth-light fill-earth-light" />
            </div>
          </div>

          <div className="space-y-8">
            <div className="">
              Thank you for the excellent shopping experience. It arrived
              quickly and was exactly as described.I will definitely be shopping
              with you again in the future.
            </div>

            <div className="flex justify-between">
              <div className="space-y-6">
                <Image
                  src={"/avatar-3.jpeg"}
                  alt="avatar-3.jpeg"
                  height={40}
                  width={40}
                  className="aspect-square h-10 w-10 rounded-full"
                />
                <div className="font-bold uppercase">Juan Carlos</div>
              </div>

              <Quote className="text-earth-light fill-earth-light" />
            </div>
          </div>
        </div>
      </section>

      <GiftPostcard />

      <section className="grid grid-cols-3 gap-8 px-48 py-16">
        <div className="flex items-center gap-4 border-r border-gray-300">
          <div className="bg-earth-light rounded-full p-3">
            <LockKeyhole className="text-white" />
          </div>

          <div className="">
            <div className="text-lg font-semibold uppercase">
              Secure Payment
            </div>
            <div className="">All our payments our SSL secured</div>
          </div>
        </div>

        <div className="flex items-center gap-4 border-r border-gray-300">
          <div className="bg-earth-light rounded-full p-3">
            <Package className="text-white" />
          </div>
          <div className="">
            <div className="text-lg font-semibold uppercase">
              Delivered With Care
            </div>
            <div className="">Super fast shipping to your door</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-earth-light rounded-full p-3">
            <HeartPlus className="text-white" />
          </div>
          <div className="">
            <div className="text-lg font-semibold uppercase">
              Excellent Service
            </div>
            <div className="">Live chat and phone support</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
