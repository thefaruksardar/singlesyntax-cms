export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard",
    "/addpost",
    "/posts",
    "/comments",
    "/media",
    "/settings",
    "/profile",
  ],
};
