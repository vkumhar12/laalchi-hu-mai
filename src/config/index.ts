const configs = {
  serverUrl: process.env.NEXT_PUBLIC_BASE_URL,
  department: {
    [process.env.NEXT_PUBLIC_ADMIN as string]: "ADMIN",
    [process.env.NEXT_PUBLIC_HR as string]: "HR",
    [process.env.NEXT_PUBLIC_CLIENT as string]: "CLIENT",
    ["HOD"]: "HOD",
    ["HR_HOD"]: "HR_HOD",
    ["SUPER_ADMIN"]: "SUPER_ADMIN",
  },
};

export { configs };
