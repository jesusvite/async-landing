const linkVideos = 'https://youtube-v3-alternative.p.rapidapi.com/channel?id=UCn51E6eKnnLklWOcdFT3w5A&sort_by=newest';
const content = null || document.getElementById('content')
const options = {
	method: 'GET',
	headers: {
        // options
		'X-RapidAPI-Key': '86bd18448fmshd3f111af24532d5p1eba68jsnfea1dc1bdbfe',
		'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
	}
};

async function getData(url){
    const response = await fetch(url, options)
    const datos = response.json()
    return datos;
}
(
    async function (){
        try {
            const response = await getData(linkVideos);
            const result = `${video.meta.map(video => `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.meta.thumbnail.url}" alt="" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.meta.title}
                    </h3>
                </div>
            </div>
            `).slice(0,4).join('')}
            `;
            content.innerHTML = result;
          
        } catch (error) {
            console.error(error);
        }
        
    }
)()



