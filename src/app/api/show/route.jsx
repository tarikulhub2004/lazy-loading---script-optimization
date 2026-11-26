export async function GET() {
    await new Promise((resolve) => setTimeout(resolve, 4000));

    return new Response("console.log('Script Loading')", {
        headers: {
            "Content-type": "application/javascript"
        }
    })
}

