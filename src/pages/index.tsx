import {
  Category,
  HeroSlider,
  OrderReport,
  SpecialOffer,
  Testimonial,
} from "@/components/home";
import NewArrivals from "@/components/home/NewArrival";
import Layout from "@/layout/public";

export default function HomePage() {
  return (
    <Layout title="Laalchi Hu Mai">
      <div className="">
        <div className="main-container w-full">
          <HeroSlider />
        </div>
        <div className="main-container bg-slate-50">
          <div className="top-spacing ">
            <Category />
          </div>
          <div className="top-spacing">
            <NewArrivals />
          </div>
        </div>
        <div className=" main-container bottom-spacing ">
          <SpecialOffer />
        </div>
        <div className="bottom-spacing">
          <OrderReport />
        </div>
        <div className="bottom-spacing">
          <Testimonial />
        </div>
      </div>
    </Layout>
  );
}
