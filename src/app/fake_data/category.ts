export interface ISubsCategory {
  name: string;
  url: string;
  isActive: boolean;
}

export interface ICategory {
  name: string;
  url: string;
  id: number;
  category: string;
  des?: string;
  isActive: boolean;
  subsCategory: ISubsCategory[];
}

export const category: ICategory[] = [
  {
    name: "Thức uống",
    url: "/thuc_uong",
    category: "drinks",
    des: "danh mục đồ uống",
    isActive: false,
    id: 1,
    subsCategory: [
      {
        name: "cà phê đen",
        url: "/ca_phe_den",
        isActive: false,
      },
      {
        name: "cà phê đen",
        url: "/ca_phe_den",
        isActive: false,
      },
      {
        name: "cà phê đen",
        url: "/ca_phe_den",
        isActive: false,
      },
      {
        name: "cà phê đen",
        url: "/ca_phe_den",
        isActive: false,
      },
      {
        name: "cà phê đen",
        url: "/ca_phe_den",
        isActive: false,
      },
    ],
  },
  {
    name: "Món ăn",
    url: "/mon_an",
    category: "foods",
    des: "danh mục món ăn",
    id: 2,
    isActive: false,
    subsCategory: [
      {
        name: "Phở bò",
        url: "/pho_bo",
        isActive: false,
      },
      {
        name: "Phở bò",
        url: "/pho_bo",
        isActive: false,
      },
      {
        name: "Phở bò",
        url: "/pho_bo",
        isActive: false,
      },
      {
        name: "Phở bò",
        url: "/pho_bo",
        isActive: false,
      },
      {
        name: "Phở bò",
        url: "/pho_bo",
        isActive: false,
      },
    ],
  },
  {
    name: "Hoa quả",
    url: "/hoa_qua",
    category: "fruits",
    des: "danh mục hoa quả",
    isActive: false,
    id: 3,
    subsCategory: [
      {
        name: "Táo",
        url: "/táo",
        isActive: false,
      },
      {
        name: "Táo",
        url: "/táo",
        isActive: false,
      },
      {
        name: "Táo",
        url: "/táo",
        isActive: false,
      },
      {
        name: "Táo",
        url: "/táo",
        isActive: false,
      },
      {
        name: "Táo",
        url: "/táo",
        isActive: false,
      },
      {
        name: "Táo",
        url: "/táo",
        isActive: false,
      },
      {
        name: "Táo",
        url: "/táo",
        isActive: false,
      },
    ],
  },
];
