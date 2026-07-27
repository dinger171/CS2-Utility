export async function getNades() {
    const response = await fetch(
        "http://[2a0d:3344:5230:2c00::115]:3000/api/nades"
    );

    return await response.json();
}