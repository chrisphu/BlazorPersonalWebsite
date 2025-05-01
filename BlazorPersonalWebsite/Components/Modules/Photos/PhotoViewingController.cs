using Microsoft.AspNetCore.Components;
namespace BlazorPersonalWebsite.Components.Modules.Photos;

// Need to inherit ComponentBase otherwise there are issues with .razor pages inheriting this class returning
// "<PageName>.BuildRenderTree(RenderTreeBuilder)': no suitable method found to override"
public class PhotoViewingController : ComponentBase
{
    protected bool PhotoViewDisplay = false;
    protected string PhotoSrc = "";
    
    protected void ShowPhotoView(string src = "")
    {
        PhotoSrc = src;
        PhotoViewDisplay = true;
    }
    
    protected void HidePhotoView()
    {
        PhotoViewDisplay = false;
    }
}