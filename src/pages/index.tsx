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
            <Testimonial />
          </div>
        </div>
        <div className="top-spacing main-container bottom-spacing ">
          <OrderReport />
        </div>
        <div>
          <SpecialOffer />
        </div>
        <div>
          <NewArrivals />
        </div>
      </div>
    </Layout>
  );
}
