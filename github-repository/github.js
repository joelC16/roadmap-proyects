export default async function getRandomRepositoryByLanguage(language) {
    try {
        const randomPage = Math.floor(Math.random() * 30) + 1;
        const response = await fetch(`https://api.github.com/search/repositories?q=language:${language}&per_page=10&page=${randomPage}`);

        const data = await response.json();
        if (!data.items || data.items.length === 0) {
            throw new Error("No repositories found.");
        }

        const randomRepository = Math.floor(Math.random() * data.items.length);
        return data.items[randomRepository];
    } catch (error) {
        console.error("Failed to fetch repository:", error);
        throw error;
    }
}
