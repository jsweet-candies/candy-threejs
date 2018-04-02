package def.threejs.THREE;
import def.dom.HTMLImageElement;
import def.dom.HTMLVideoElement;
import def.dom.ImageData;
import def.dom.HTMLCanvasElement;
public class Texture extends EventDispatcher {
    public Texture(HTMLImageElement image, Mapping mapping, Wrapping wrapS, Wrapping wrapT, TextureFilter magFilter, TextureFilter minFilter, PixelFormat format, TextureDataType type, double anisotropy, TextureEncoding encoding){}
    public double id;
    public String uuid;
    public String name;
    public String sourceFile;
    public Object image;
    public ImageData[] mipmaps;
    public Mapping mapping;
    public Wrapping wrapS;
    public Wrapping wrapT;
    public TextureFilter magFilter;
    public TextureFilter minFilter;
    public double anisotropy;
    public PixelFormat format;
    public TextureDataType type;
    public Vector2 offset;
    public Vector2 repeat;
    public Vector2 center;
    public double rotation;
    public Boolean generateMipmaps;
    public Boolean premultiplyAlpha;
    public Boolean flipY;
    public double unpackAlignment;
    public TextureEncoding encoding;
    public double version;
    public Boolean needsUpdate;
    public java.lang.Runnable onUpdate;
    public static Object DEFAULT_IMAGE;
    public static Object DEFAULT_MAPPING;
    @jsweet.lang.Name("clone")
    native public Texture Clone();
    native public Texture copy(Texture source);
    native public Object toJSON(Object meta);
    native public void dispose();
    native public void transformUv(Vector uv);
    public Texture(HTMLImageElement image, Mapping mapping, Wrapping wrapS, Wrapping wrapT, TextureFilter magFilter, TextureFilter minFilter, PixelFormat format, TextureDataType type, double anisotropy){}
    public Texture(HTMLImageElement image, Mapping mapping, Wrapping wrapS, Wrapping wrapT, TextureFilter magFilter, TextureFilter minFilter, PixelFormat format, TextureDataType type){}
    public Texture(HTMLImageElement image, Mapping mapping, Wrapping wrapS, Wrapping wrapT, TextureFilter magFilter, TextureFilter minFilter, PixelFormat format){}
    public Texture(HTMLImageElement image, Mapping mapping, Wrapping wrapS, Wrapping wrapT, TextureFilter magFilter, TextureFilter minFilter){}
    public Texture(HTMLImageElement image, Mapping mapping, Wrapping wrapS, Wrapping wrapT, TextureFilter magFilter){}
    public Texture(HTMLImageElement image, Mapping mapping, Wrapping wrapS, Wrapping wrapT){}
    public Texture(HTMLImageElement image, Mapping mapping, Wrapping wrapS){}
    public Texture(HTMLImageElement image, Mapping mapping){}
    public Texture(HTMLImageElement image){}
    public Texture(){}
    public Texture(HTMLVideoElement image, Mapping mapping, Wrapping wrapS, Wrapping wrapT, TextureFilter magFilter, TextureFilter minFilter, PixelFormat format, TextureDataType type, double anisotropy, TextureEncoding encoding){}
    public Texture(HTMLCanvasElement image, Mapping mapping, Wrapping wrapS, Wrapping wrapT, TextureFilter magFilter, TextureFilter minFilter, PixelFormat format, TextureDataType type, double anisotropy, TextureEncoding encoding){}
    public Texture(HTMLCanvasElement image, Mapping mapping, Wrapping wrapS, Wrapping wrapT, TextureFilter magFilter, TextureFilter minFilter, PixelFormat format, TextureDataType type, double anisotropy){}
    public Texture(HTMLVideoElement image, Mapping mapping, Wrapping wrapS, Wrapping wrapT, TextureFilter magFilter, TextureFilter minFilter, PixelFormat format, TextureDataType type, double anisotropy){}
    public Texture(HTMLCanvasElement image, Mapping mapping, Wrapping wrapS, Wrapping wrapT, TextureFilter magFilter, TextureFilter minFilter, PixelFormat format, TextureDataType type){}
    public Texture(HTMLVideoElement image, Mapping mapping, Wrapping wrapS, Wrapping wrapT, TextureFilter magFilter, TextureFilter minFilter, PixelFormat format, TextureDataType type){}
    public Texture(HTMLVideoElement image, Mapping mapping, Wrapping wrapS, Wrapping wrapT, TextureFilter magFilter, TextureFilter minFilter, PixelFormat format){}
    public Texture(HTMLCanvasElement image, Mapping mapping, Wrapping wrapS, Wrapping wrapT, TextureFilter magFilter, TextureFilter minFilter, PixelFormat format){}
    public Texture(HTMLVideoElement image, Mapping mapping, Wrapping wrapS, Wrapping wrapT, TextureFilter magFilter, TextureFilter minFilter){}
    public Texture(HTMLCanvasElement image, Mapping mapping, Wrapping wrapS, Wrapping wrapT, TextureFilter magFilter, TextureFilter minFilter){}
    public Texture(HTMLVideoElement image, Mapping mapping, Wrapping wrapS, Wrapping wrapT, TextureFilter magFilter){}
    public Texture(HTMLCanvasElement image, Mapping mapping, Wrapping wrapS, Wrapping wrapT, TextureFilter magFilter){}
    public Texture(HTMLCanvasElement image, Mapping mapping, Wrapping wrapS, Wrapping wrapT){}
    public Texture(HTMLVideoElement image, Mapping mapping, Wrapping wrapS, Wrapping wrapT){}
    public Texture(HTMLVideoElement image, Mapping mapping, Wrapping wrapS){}
    public Texture(HTMLCanvasElement image, Mapping mapping, Wrapping wrapS){}
    public Texture(HTMLVideoElement image, Mapping mapping){}
    public Texture(HTMLCanvasElement image, Mapping mapping){}
    public Texture(HTMLCanvasElement image){}
    public Texture(HTMLVideoElement image){}
}

