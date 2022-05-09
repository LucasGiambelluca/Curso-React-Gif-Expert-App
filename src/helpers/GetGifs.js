export const getGif = async (category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?key=FDLzeCzgpnxOmmS3l2X37X1JCSeXJY0L&q=${encodeURI(category)}&limit=10`
    const response = await fetch(url)

    const {data} = await response.json();

    const gif = data.map(img=>{
        return{
            id:img.id,
            title:img.title,
            url:img.images.downsized_medium.url,
        }
    })
    return gif;
}
