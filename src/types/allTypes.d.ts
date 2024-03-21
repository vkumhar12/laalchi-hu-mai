interface NEWARRIVALPROPS {
  id: string;
  title: string;
  link: string;
  image: string;
  text: string;
}

type GetHelpArrayType = {
  title: string;
  url: string;
};
type OptionType = {
  value: string;
  label: string;
};

type CartType = {
  cartItems: [
    {
      productDetails: [
        {
          color: string;
          createdAt: string;
          createdBy: string;
          desc: string;
          mrp: number;
          name: string;
          productCode: string;
          quality: string;
          sellingPrice: number;
          updatedAt: string;
          __v: number;
          _id: string;
        }
      ];
      subTotal: number;
      quantity: number;
    }
  ];
  total: number;
  _id: string;
};

type ResType =
  | {
      results: any;
      status: number;
    }
  | undefined;
