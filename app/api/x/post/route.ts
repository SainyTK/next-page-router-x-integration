import { TwitterApi } from 'twitter-api-v2';

export async function POST(request: Request) {
    const authorizationHeader = request.headers.get('Authorization') || "";
    const bearerToken = authorizationHeader ? authorizationHeader.replace('Bearer ', "") : "";
    const twitterClient = new TwitterApi(bearerToken);

    const jsonBody = await request.json();
    const text = jsonBody.text;

    const { data } = await twitterClient.v2.tweet(text);

    return Response.json(data);
}