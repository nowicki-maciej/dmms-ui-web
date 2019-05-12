export const USER_ROLE = {
  name: "ROLE_USER",
  isAlso: [],
};

export const ADMIN_ROLE = {
  name: "ROLE_ADMIN",
  isAlso: [USER_ROLE],
};


export const ROLES = [
  ADMIN_ROLE,
  USER_ROLE
];
