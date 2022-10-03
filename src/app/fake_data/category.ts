export interface ISubsCategory {
  name: string;
  url: string;
  isActive: boolean;
  id: number;
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
    url: "thuc_uong",
    category: "drinks",
    des: "danh mục đồ uống",
    isActive: false,
    id: 1,
    subsCategory: [
      {
        name: "cà phê",
        url: "/ca_phe",
        isActive: false,
        id: 11,
      },
      {
        name: "trà sữa",
        url: "/tra_sua",
        isActive: false,
        id: 12,
      },
      {
        name: "trà",
        url: "/tra",
        isActive: false,
        id: 13,
      },
      {
        name: "sinh tố",
        url: "/sinh_to",
        isActive: false,
        id: 14,
      },
      {
        name: "nước khoáng",
        url: "/nuoc_khoang",
        isActive: false,
        id: 15,
      },
    ],
  },
  {
    name: "Món ăn",
    url: "mon_an",
    category: "foods",
    des: "danh mục món ăn",
    id: 2,
    isActive: false,
    subsCategory: [
      {
        name: "Phở",
        url: "/pho",
        isActive: false,
        id: 21,
      },
      {
        name: "Cơm",
        url: "/com",
        isActive: false,
        id: 22,
      },
      {
        name: "Bánh mỳ",
        url: "/banh_my",
        isActive: false,
        id: 23,
      },
      {
        name: "Bún",
        url: "/pho_bo",
        isActive: false,
        id: 24,
      },
      {
        name: "Miến",
        url: "/pho_bo",
        isActive: false,
        id: 25,
      },
    ],
  },
  {
    name: "rau quả",
    url: "rau_qua",
    category: "fruits",
    des: "danh mục hoa quả",
    isActive: false,
    id: 3,
    subsCategory: [
      {
        name: "trái cây",
        url: "/trai_cay",
        isActive: false,
        id: 31,
      },
      {
        name: "rau xanh",
        url: "/rau_xanh",
        isActive: false,
        id: 32,
      },
      {
        name: "sa lát",
        url: "/sa_lat",
        isActive: false,
        id: 33,
      },
    ],
  },
];
