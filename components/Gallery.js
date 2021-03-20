export default function GalleryComponent({src}) 
{
    return (
        <>
            <img className={'h-44 w-48'} src={src} alt={''} />
        </>
    )
}