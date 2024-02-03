export const footerArray = [];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
          <h2 style={{ color: "white" }} className="font-bold mb-4">
            SOES STORE
          </h2>
          <p style={{ color: "white" }}>
            ADDRESS OFFICE 1
            <br />
            460 West 34th Street, 15th floor, New York
            <br />
            Email: support@soestore.com
            <br />
            Phone: +323.3242.5334
            <br />
            Fax: +323.3242.5333
          </p>
          <br />
          <p style={{ color: "white" }}>
            ADDRESS OFFICE 2
            <br />
            PO Box 16122 Collins Victoria 3000 Australia
            <br />
            Email: support@soestore.com.au
            <br />
            Phone:+322.3242.5336
            <br />
            Fax:+323.3242.5333
          </p>
        </div>
        <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
          <h2 style={{ color: "white" }} className="font-bold mb-4">
            FIND OUR STORE
          </h2>
          <ul>
            <li>
              <a
                href="#"
                style={{ color: "#6B7280" }}
                className="hover:text-white"
              >
                COUPON CODE
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ color: "#6B7280" }}
                className="hover:text-white"
              >
                SIGNUP FOR EMAIL
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ color: "#6B7280" }}
                className="hover:text-white"
              >
                SITE FEEDBACK
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ color: "#6B7280" }}
                className="hover:text-white"
              >
                CAREERS
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
          <h2 style={{ color: "white" }} className="font-bold mb-4">
            GET HELP
          </h2>
          <ul>
            <li>
              <a
                href="#"
                style={{ color: "#6B7280" }}
                className="hover:text-white"
              >
                Order Status
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ color: "#6B7280" }}
                className="hover:text-white"
              >
                Shipping And Delivery
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ color: "#6B7280" }}
                className="hover:text-white"
              >
                Returns
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ color: "#6B7280" }}
                className="hover:text-white"
              >
                Payment Options
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ color: "#6B7280" }}
                className="hover:text-white"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
          <h2 style={{ color: "white" }} className="font-bold mb-4">
            PRODUCTS
          </h2>
          <ul>
            <li>
              <a
                href="#"
                style={{ color: "#6B7280" }}
                className="hover:text-white"
              >
                Shoes
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ color: "#6B7280" }}
                className="hover:text-white"
              >
                Clothings
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ color: "#6B7280" }}
                className="hover:text-white"
              >
                Accessories
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ color: "#6B7280" }}
                className="hover:text-white"
              >
                Football Shoes
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
