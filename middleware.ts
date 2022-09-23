import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";

export function middleware(request: NextRequest) {
  const chosenColor = request.cookies.get("chosenColor");
  const url = request.nextUrl.clone();
  if (request.nextUrl.pathname.startsWith("/welcome")) {
    return NextResponse.next();
  }
  if (url.pathname == "/" && chosenColor == undefined) {
    url.pathname = "/welcome";
    return NextResponse.redirect(url);
  }
}
