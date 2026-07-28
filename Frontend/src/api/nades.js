export async function getNades() {
    const response = await fetch(
        "https://cs2-utility-backend.zickit.workers.dev"
    );

    return await response.json();
}