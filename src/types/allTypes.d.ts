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
type ResType =
  | {
      results: any;
      status: number;
    }
  | undefined;
