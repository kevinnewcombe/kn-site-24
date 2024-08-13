import axios, { HttpStatusCode } from "axios";
import { NextResponse } from "next/server";
import qs from "qs";
type ResponseData = {
  success: boolean,
  challenge_ts: string,
  hostname: string,
  score: number,
  action: string,
}
export async function POST(req: Request) {
  const body = await req.json();
  const email = body.email;
  const captchaToken = body.captchaToken;
  if (!captchaToken) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: HttpStatusCode.Unauthorized }
    );
  }
  if (!email) {
    return NextResponse.json(
      { error: "Email is required" },
      { status: HttpStatusCode.BadRequest }
    );
  }
  const options = {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    data: qs.stringify({
      secret: process.env.recaptchaSecretKey,
      response: captchaToken,
    }),
    url: "https://www.google.com/recaptcha/api/siteverify",
  };
  const response = await axios(options);
  if (response.data.success === false) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: HttpStatusCode.Unauthorized }
    );
  }else{
    // captcha returned response.data with a `score` value
    return NextResponse.json(response.data);
  }
}
