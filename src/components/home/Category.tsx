import { ProductCard } from "../all-category";

export default function Category() {
  return (
    <section className="">
      <div className="w-full flex flex-col gap-4">
        <div className="relative">
          <h1 className="text-8xl tracking-widest text-gray-200 font-semibold">
            Features
          </h1>
          <h1 className="graph-title absolute bottom-6 left-2 ">
            ---Featured Products---
          </h1>
        </div>

        <div className="flex flex-col admin-gap">
          <hr />
          <div>
            <ProductCard />
          </div>
        </div>
      </div>
    </section>
  );
}
