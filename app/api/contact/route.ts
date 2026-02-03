import { NextResponse } from "next/server";

function getSafeRedirect(redirectParam: string | null) {
  if (redirectParam && redirectParam.startsWith("/")) {
    return redirectParam;
  }
  return "/contact?submitted=1";
}

export async function POST(request: Request) {
  const url = new URL(request.url);
  const redirectParam = url.searchParams.get("redirect");
  const safeRedirect = getSafeRedirect(redirectParam);
  const origin = request.headers.get("origin") ?? url.origin;
  const redirectUrl = new URL(safeRedirect, origin);

  return NextResponse.redirect(redirectUrl, { status: 303 });
}
