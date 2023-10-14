export async function getData() {
    try {
        const catFactResponse = await fetch('https://catfact.ninja/fact');
        const catFactData = await catFactResponse.json();
        console.log(catFactData);
        
        if (catFactData && catFactData.fact) {
            const catFactWords = catFactData.fact.split(' ').slice(0, 4).join('%20');
            const catFactImageUrl = `https://cataas.com/cat/says/${catFactWords}`;
            
            return catFactImageUrl;
        } else {
            throw new Error('No se pudo');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}
