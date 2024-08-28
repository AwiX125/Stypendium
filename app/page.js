import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

import codeImg1 from "@/public/Code_1.png";
import codeImg2 from "@/public/Code_2.png";

import courseImg from "@/public/courseimg.jpg";

import electronicImg from "@/public/electronic/22.jpg";

export default function Home() {
  const imageSizes = {
    width: 700,
    height: 500,
  };
  const linkedImageSizes = {
    width: 200,
    height: 100,
  };
  return (
    <main className="flex-wrap flex-shrink whitespace-nowrap flex flex-col items-center justify-center">
      <section className="main-text flex items-center justify-center flex-col">
        <h2 className="text-3xl md:text-7xl mt-10">Strona</h2>
        <p>
          Została stworzona w celach dokumentacji rezultatu opisanego w IPRZU
        </p>
        <p>Strona powstała w oparciu o Framework biblioteki React - Next.JS.</p>
        <p>Poniżej znajdują się zdjęcia kodu</p>
        <figure className="main-figure">
          <Image
            src={codeImg1}
            className="main-figure-image"
            alt="Zdjęcie kodu numer 1"
            width={imageSizes.width}
            height={imageSizes.height}
          />
          <figcaption>Zdjęcie kodu nr. 1</figcaption>
        </figure>
        <figure className="main-figure">
          <Image
            className="main-figure-image"
            src={codeImg2}
            alt="Zdjęcie kodu numer 2"
            width={imageSizes.width}
            height={imageSizes.height}
          />
          <figcaption>Zdjęcie kodu nr. 2</figcaption>
        </figure>
      </section>
      <section className="main-text flex items-center justify-center flex-col mt-20">
        <h2 className="text-3xl md:text-7xl mt-10">Kurs z j.Angielskiego</h2>
        <p>Na stronie znajduje się certyfikat ukończenia kursu</p>
        <Link
          className=" text-blue-500 font-extrabold p-2 shadow-lg shadow-gray"
          href="/kurs-angielski"
        >
          <div className="flex items-end flex-col">
            <FaExternalLinkAlt className="absolute z-10 m-2" />
            <Image
              src={courseImg}
              className="blur-sm hover:blur-none transition-all"
              width={linkedImageSizes.width}
              height={linkedImageSizes.height}
              alt="Odnośnik do strony z certyfikatem"
            />
            <p>Odsyłacz</p>
          </div>
        </Link>
      </section>
      <section className="main-text flex items-center justify-center flex-col mt-20">
        <h2 className="text-3xl md:text-7xl mt-10">Układy elektroniczne</h2>
        <p>Na stronie znajdują się również zdjęcia układów elektronicznych</p>
        <Link
          className=" text-blue-500 font-extrabold p-2 shadow-lg shadow-gray"
          href="/elektronika"
        >
          <div className="flex items-end flex-col">
            <FaExternalLinkAlt className="absolute z-10 m-2" />
            <Image
              src={electronicImg}
              className="blur-sm hover:blur-none transition-all"
              width={linkedImageSizes.width}
              height={linkedImageSizes.height}
              alt="Odnośnik do zdjęć układów elektronicznych"
            />
            <p>Odsyłacz</p>
          </div>
        </Link>
      </section>
    </main>
  );
}
