/* eslint-disable @next/next/no-img-element */
export const orderReportArray = [
  {
    id: "1",
    title: "Products Dileverd",
    count: "1000+",
    imageUrl: "trophy.png",
  },
  {
    id: "2",
    title: "Clients Served",
    count: "450+",
    imageUrl: "clients.png",
  },
  {
    id: "3",
    title: "Associated Brands",
    count: "200+",
    imageUrl: "brands.png",
  },
  {
    id: "4",
    title: "Happy Customers",
    count: "2500+",
    imageUrl: "customer.png",
  },
];

const OrderReport = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="w-full md:w-2/5 flex justify-center items-center">
        <img src="count.jpg" alt="Customer" className="w-96" />
      </div>
      <div className="w-full md:w-3/5 flex flex-col admin-gap">
        <div className="flex flex-col gap-2">
          <h1 className="graph-title text-4xl text-center">{`1000's of Order Completed & Still Counting`}</h1>
          <p className="description text-center">
            We are your one-top shop for all your branding needs. Our Paltform
            offers printing, desgining, and fulfillment services for your
            promotional products
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-2 admin-gap">
            {orderReportArray?.map((item, index) => (
              <div
                className="p-5 border rounded-md flex   gap-20 items-center"
                key={index}
              >
                <img src={item?.imageUrl} alt="Trophy" className="w-20 h-20" />
                <div className="flex flex-col gap-2 justify-center items-center">
                  <h1 className="text-2xl font-semibold text-orange">
                    {item?.count}
                  </h1>
                  <h1 className="text-xl font-semibold text-primary-text">
                    {item?.title}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderReport;
