# Next JS (App Router) + X Integration
This repo demonstrates a simple way to integrate Next JS (App Router) with X. Here're the list of integrations:
1. Authentication with OAuth2
2. User profile fetching (username, image, follow count)

## X developer portal setup
1. Login to X.
2. Head to https://developer.twitter.com/en/portal/dashboard. You can refer to this video for initial X developer account setup: https://www.youtube.com/watch?v=Ns9xH-5v3Po.
3. Create a project. On the project page, setup user authentication settings.<br/><img src="./public/screenshots/user_authen_settings.png" style="max-width: 400px" />

4. Set app permission to be `Read and write and Direct message`.<br/><img src="./public/screenshots/user_authen_settings.png" style="max-width: 400px"/>

5. Select type of app. Add a correct callback URL.<br/><img src="./public/screenshots/callback.png" style="max-width: 400px"/>

6. On the project page, navigate to `Keys and tokens` tab. Get `Client ID` and `Secret`. Refer to the provided screenshot.<br/><img src="./public/screenshots/getting_id.png" style="max-width: 400px"/>

## Next JS project setup
1. Copy `.env.example` file to your project and rename to `.env.local`. Fill in your own `Client ID` and `Secret` retrived in the previous step.
2. Install dependencies `npm i -s next-auth passport-twitter`.
3. Create an API handler of next auth. Follow this folder structure: `app/api/auth/[...nextauth]/route.ts`.
4. Copy the content in `app/api/auth/[...nextauth]/route.ts` to your project.
5. Add `SessionProvider` on the root-level `template.tsx`. See the example on the `app/template.tsx` file.
6. Use `TwitterLogin` on your project. See the example of usage in the `app/page.tsx` and `components/TwitterLogin.tsx` files.