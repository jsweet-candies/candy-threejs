package def.threejs.three;
import def.dom.ImageData;
public class CompressedTexture extends Texture {
    public CompressedTexture(ImageData[] mipmaps, double width, double height, PixelFormat format, TextureDataType type, Mapping mapping, Wrapping wrapS, Wrapping wrapT, TextureFilter magFilter, TextureFilter minFilter, double anisotropy){}
    public Image image;
    @jsweet.lang.Name("clone")
    native public CompressedTexture Clone();
    native public CompressedTexture copy(CompressedTexture source);
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class Image extends def.js.Object {
        public double width;
        public double height;
    }
    public CompressedTexture(ImageData[] mipmaps, double width, double height, PixelFormat format, TextureDataType type, Mapping mapping, Wrapping wrapS, Wrapping wrapT, TextureFilter magFilter, TextureFilter minFilter){}
    public CompressedTexture(ImageData[] mipmaps, double width, double height, PixelFormat format, TextureDataType type, Mapping mapping, Wrapping wrapS, Wrapping wrapT, TextureFilter magFilter){}
    public CompressedTexture(ImageData[] mipmaps, double width, double height, PixelFormat format, TextureDataType type, Mapping mapping, Wrapping wrapS, Wrapping wrapT){}
    public CompressedTexture(ImageData[] mipmaps, double width, double height, PixelFormat format, TextureDataType type, Mapping mapping, Wrapping wrapS){}
    public CompressedTexture(ImageData[] mipmaps, double width, double height, PixelFormat format, TextureDataType type, Mapping mapping){}
    public CompressedTexture(ImageData[] mipmaps, double width, double height, PixelFormat format, TextureDataType type){}
    public CompressedTexture(ImageData[] mipmaps, double width, double height, PixelFormat format){}
    public CompressedTexture(ImageData[] mipmaps, double width, double height){}
    protected CompressedTexture(){}
}

