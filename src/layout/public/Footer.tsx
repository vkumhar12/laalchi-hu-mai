// import { useFormik } from "formik";
// import Link from "next/link";
// import {
//   FaLinkedin,
//   FaSquareFacebook,
//   FaTwitter,
//   FaYoutube,
// } from "react-icons/fa6";
// import * as Yup from "yup";

// const Footer = () => {
//   const validationSchema = Yup.object({
//     email: Yup.string().email("Invalid email").required("Email is required"),
//   });
//   const formik = useFormik({
//     initialValues: {
//       email: "",
//     },
//     validationSchema,
//     onSubmit: (values) => {
//       // Handle form submission here
//       console.log("Form submitted with values:", values);
//     },
//   });
//   return (
//     <div>
//       <div className="relative overflow-hidden bg-[#F5F8F9]">
//         <section className="]  bottom-spacing p-3">
//           <div className="main-container">
//             <div className="flex flex-wrap">
//               <div className="w-full lg:w-1/3 flex flex-col gap-6">
//                 <img
//                   src="/logo.png"
//                   alt="Preservica Logo"
//                   className="w-[162px] lg:pb-0 pb-6 z-[10]"
//                 />
//                 <ul className="space-y-1 hidden lg:block">
//                   <li className="text-sm font-normal z-[10]">
//                     North America:
//                     <a href="tel:+1 617 294 6676" className="z-[10]">
//                       {" "}
//                       +1 617 294 6676
//                     </a>
//                   </li>
//                   <li className="text-sm font-normal z-[10]">
//                     International:
//                     <a href="tel:+44 (0)1235 428 900" className="z-[10]">
//                       {" "}
//                       +44 (0)1235 428 900
//                     </a>
//                   </li>
//                 </ul>
//                 <div className="z-[10] text-sm font-semibold text-gray-900 hidden lg:inline">
//                   <a href="mailto:info@preservica.com">info@preservica.com</a>
//                 </div>
//                 <p className="text-xs font-normal text-gray-900  pr-12 hidden lg:block z-[10]">
//                   Copyright 2023 Preservica. Registered in England and Wales
//                   under company number 7998621. Registered office: 32 The
//                   Quadrant, Abingdon Science Park, Abingdon, Oxfordshire OX14
//                   3YS
//                 </p>
//               </div>
//               <div className="w-full lg:w-1/3 flex flex-col gap-6">
//                 <h3 className="text-xl font-semibold text-gray-900 hidden lg:block z-[10]">
//                   Quick Links
//                 </h3>
//                 <div>
//                   <ul className="grid lg:grid-cols-1 grid-cols-2 gap-3 lg:gap-0 lg:space-y-2 ">
//                     <li className="w-full text-base font-normal text-gray-900 lg:text-gray-600 z-[10]"></li>
//                     <li className="w-full text-base font-normal text-gray-900 lg:text-gray-600 z-[10]">
//                       <Link href="">Resources</Link>
//                     </li>
//                     <li className="w-full text-base font-normal text-gray-900 lg:text-gray-600 z-[10]">
//                       <Link href="">Careers</Link>
//                     </li>
//                     <li className="w-full text-base font-normal text-gray-900 cursor-pointer lg:text-gray-600 z-[10]">
//                       <Link href="" className="cursor-pointer">
//                         Contact us
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="w-full lg:w-1/3 flex flex-col gap-3 lg:pt-0 pt-6">
//                 <h3 className="text-xl font-semibold text-gray-900">
//                   Preserve Today newsletter
//                 </h3>
//                 <p className="text-base font-normal lg:pb-3 ">
//                   Stay updated on the latest digital preservation industry news.
//                 </p>
//                 <div>
//                   <form onSubmit={formik.handleSubmit}>
//                     <div className="bg-white lg:bg-gray-100 p-1 border border-gray-300 rounded-lg w-full lg:max-w-sm">
//                       <div className="flex">
//                         <div className="flex-grow items-center">
//                           <input
//                             type="email"
//                             name="email"
//                             id="email"
//                             value={formik.values.email}
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             placeholder="Enter your email address"
//                             className={`bg-white h-full lg:bg-gray-100 border-none w-full ${
//                               formik.touched.email && formik.errors.email
//                                 ? "border-red-500"
//                                 : ""
//                             }`}
//                           />
//                           {formik.touched.email && formik.errors.email ? (
//                             <div className="text-red-500">
//                               {formik.errors.email}
//                             </div>
//                           ) : null}
//                         </div>
//                         <div>
//                           <button
//                             type="submit"
//                             data-freeform-action="submit"
//                             className="btn-gradient"
//                             data-original-text="Submit"
//                             data-loading-text="null"
//                           >
//                             Submit
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </form>
//                 </div>

//                 <ul className="space-y-1 pt-3 pb-6  lg:hidden">
//                   <li className="text-sm font-normal z-[10]">
//                     North America:
//                     <a href="tel:+1 617 294 6676" className="z-[10]">
//                       {" "}
//                       +1 617 294 6676
//                     </a>
//                   </li>
//                   <li className="text-sm font-normal z-[10]">
//                     International:
//                     <a href="tel:+44 (0)1235 428 900" className="z-[10]">
//                       {" "}
//                       +44 (0)1235 428 900
//                     </a>
//                   </li>
//                 </ul>

//                 <div className="text-sm font-semibold text-gray-900 lg:hidden">
//                   <a href="mailto:info@preservica.com" className="z-[10]">
//                     info@preservica.com
//                   </a>
//                 </div>

//                 <p className="text-xs font-normal text-gray-900 pt-6 pb-3 lg:hidden">
//                   {`Copyright 2023 Preservica. Registered in England and Wales under company number 7998621. Registered office: 32 The Quadrant, Abingdon Science Park, Abingdon, Oxfordshire OX14 3YS`}
//                 </p>

//                 <div className="flex items-center gap-3 pb-3 pt-4">
//                   <button>
//                     <Link
//                       href=""
//                       className="bg-gradient-to-br from-[#DAF3FC] to-[#D6D4EA] text-[#503A8A] bg-slate-200 rounded-lg h-10 w-10 flex justify-center items-center"
//                     >
//                       <FaSquareFacebook className="h-6 w-6" />
//                     </Link>
//                   </button>
//                   <button>
//                     <Link
//                       href=""
//                       className="bg-gradient-to-br from-[#DAF3FC] to-[#D6D4EA] text-[#503A8A] bg-slate-200 rounded-lg h-10 w-10 flex justify-center items-center"
//                     >
//                       <FaTwitter className="h-6 w-6" />
//                     </Link>
//                   </button>
//                   <button>
//                     <Link
//                       href=""
//                       className="bg-gradient-to-br from-[#DAF3FC] to-[#D6D4EA] text-[#503A8A] bg-slate-200 rounded-lg h-10 w-10 flex justify-center items-center"
//                     >
//                       <FaYoutube className="h-6 w-6" />
//                     </Link>
//                   </button>
//                   <button>
//                     <Link
//                       href=""
//                       className="bg-gradient-to-br from-[#DAF3FC] to-[#D6D4EA] text-[#503A8A] bg-slate-200 rounded-lg h-10 w-10 flex justify-center items-center"
//                     >
//                       <FaLinkedin className="h-6 w-6" />
//                     </Link>
//                   </button>
//                 </div>

//                 <nav>
//                   <ul className="flex flex-wrap items-center gap-4 ">
//                     <Link href="">
//                       <li className="text-gray-600 underline hover:text-blue-500 ">
//                         Quality
//                       </li>
//                     </Link>
//                     <Link href="">
//                       <li className="text-gray-600 underline hover:text-blue-500">
//                         Information security
//                       </li>
//                     </Link>
//                     <li className="text-gray-600 underline hover:text-blue-500">
//                       <Link href="">Terms</Link>
//                     </li>
//                     <li className="text-gray-600 underline hover:text-blue-500">
//                       <Link href="">Privacy</Link>
//                     </li>
//                     <li className="text-gray-600 underline hover:text-blue-500">
//                       <Link href="">Cookies</Link>
//                     </li>
//                     <li className="text-gray-600 underline hover:text-blue-500">
//                       <Link href="">Accessibility</Link>
//                     </li>
//                   </ul>
//                 </nav>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Footer;

export default function Footer() {
  return <div>Chal Nikal Laude Footer dekhe ga</div>;
}
