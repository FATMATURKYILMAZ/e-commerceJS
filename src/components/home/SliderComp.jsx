import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComp = () => {
    const settings = {
        //dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className='max-w-5xl mx-auto mt-8'>
            <Slider {...settings}>
                {/* First Slide */}
                <div className='flex items-center bg-gray-100 px-10 py-10'>
                    <div className='flex w-full'>
                        <div className='w-1/2 flex flex-col justify-center pr-8'>
                            <h2 className='text-5xl font-bold mb-4'>En Kaliteli Ayakkabılar Burada</h2>
                            <p className='text-lg mb-6'>
                                Geniş ürün yelpazemiz sayesinde spor ayakkabılardan klasik modellere, her tarza uygun kaliteli ayakkabıları en uygun fiyatlarla sizlere sunuyoruz. İster günlük kullanım için rahat bir seçenek, ister özel bir davet için şık bir çift ayakkabı arıyor olun, her ihtiyacınıza uygun, bütçe dostu alternatiflerimizle yanınızdayız. En popüler markaların en sevilen modellerini bir arada bulabileceğiniz sitemizle, kaliteyi uygun fiyatla keşfedin!
                            </p>
                            <button className='bg-gray-200 text-2xl font-medium rounded-full px-8 py-3'>İncele</button>
                        </div>
                        <div className='w-1/2'>
                            <img src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9666574d-f12c-46c8-b04b-fc50b3581e91/AIR+JORDAN+1+MID.png' alt='Shoe' className='w-full h-auto object-contain' />
                        </div>
                    </div>
                </div>

                {/* Second Slide */}
                <div className='flex items-center bg-gray-100 px-10 py-10'>
                    <div className='flex w-full'>
                        <div className='w-1/2 flex flex-col justify-center pr-8'>
                            <h2 className='text-5xl font-bold mb-4'>En Kaliteli Ayakkabılar Burada</h2>
                            <p className='text-lg mb-6'>
                                Geniş ürün yelpazemiz sayesinde spor ayakkabılardan klasik modellere, her tarza uygun kaliteli ayakkabıları en uygun fiyatlarla sizlere sunuyoruz. İster günlük kullanım için rahat bir seçenek, ister özel bir davet için şık bir çift ayakkabı arıyor olun, her ihtiyacınıza uygun, bütçe dostu alternatiflerimizle yanınızdayız. En popüler markaların en sevilen modellerini bir arada bulabileceğiniz sitemizle, kaliteyi uygun fiyatla keşfedin!
                            </p>
                            <button className='bg-gray-200 text-2xl font-medium rounded-full px-8 py-3'>İncele</button>
                        </div>
                        <div className='w-1/2'>
                            <img src='https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/f08ce2eb-eb27-4e71-a66d-b6f9f4f87a8d/W+NIKE+DUNK+LOW+LX.png' alt='Shoe' className='w-full h-auto object-contain' />
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default SliderComp;
