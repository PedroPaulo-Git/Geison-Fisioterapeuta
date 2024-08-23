
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Testemunhas = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3
  };
  return (
    <div className=" bg-[#d7faf5] flex justify-center w-full py-56 pt-36">
        
<section>
  <div className="max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
      <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Don't just take our word for it...
        </h2>

        <p className="mt-4 text-gray-700">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas veritatis illo placeat
          harum porro optio fugit a culpa sunt id!
        </p>
      </div>

      <div className="-mx-6 lg:col-span-2 lg:mx-0">
      <Slider {...settings}>
          <div className="mt-4">
            <p className="text-2xl font-bold text-rose-600 sm:text-3xl">Stayin' Alive 1</p>

            <p className="mt-4 leading-relaxed text-gray-700">
              No, Rose, they are not breathing. And they have no arms or legs … Where are they? You
              know what? If we come across somebody with no arms or legs, do we bother resuscitating
              them? I mean, what quality of life do we have there?
            </p>
          </div>
          <div className="mt-4">
            <p className="text-2xl font-bold text-rose-600 sm:text-3xl">Stayin' Alive 2</p>

            <p className="mt-4 leading-relaxed text-gray-700">
              No, Rose, they are not breathing. And they have no arms or legs … Where are they? You
              know what? If we come across somebody with no arms or legs, do we bother resuscitating
              them? I mean, what quality of life do we have there?
            </p>
          </div>
          <div className="mt-4">
            <p className="text-2xl font-bold text-rose-600 sm:text-3xl">Stayin' Alive 3</p>

            <p className="mt-4 leading-relaxed text-gray-700">
              No, Rose, they are not breathing. And they have no arms or legs … Where are they? You
              know what? If we come across somebody with no arms or legs, do we bother resuscitating
              them? I mean, what quality of life do we have there?
            </p>
          </div>
        </Slider>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
