import { NextResponse } from "next/server";
import type {NextRequest} from "next/server";

let locales = ['en', 'es']

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest) {
  // Check if the user has a preferred locale
  return 'es';
}

export function middleware(request:NextRequest) {

  // Redirect if there is no locale
  const locale = getLocale(request)

  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  const response = NextResponse.next();
  // Set a cookie to remember the user's preferred locale
  response.cookies.set('lang', locale)
  return response;
}
