package def.threejs.three;
import def.dom.HTMLImageElement;
import def.dom.HTMLVideoElement;
import def.dom.ImageData;
import def.dom.HTMLCanvasElement;
public class Texture extends def.js.Object {
    public Texture(HTMLImageElement image, Mapping mapping, Wrapping wrapS, Wrapping wrapT, TextureFilter magFilter, TextureFilter minFilter, PixelFormat format, TextureDataType type, double anisotropy){}
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
    native public void addEventListener(String type, java.util.function.Consumer<Event> listener);
    native public void hasEventListener(String type, java.util.function.Consumer<Event> listener);
    native public void removeEventListener(String type, java.util.function.Consumer<Event> listener);
    native public void dispatchEvent(EventData event);
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class EventData extends def.js.Object {
        public String type;
        native public java.lang.Object $get(String attachment);
    }
    public Texture(HTMLImageElement image, Mapping mapping, Wrapping wrapS, Wrapping wrapT, TextureFilter magFilter, TextureFilter minFilter, PixelFormat format, TextureDataType type){}
    public Texture(HTMLImageElement image, Mapping mapping, Wrapping wrapS, Wrapping wrapT, TextureFilter magFilter, TextureFilter minFilter, PixelFormat format){}
    public Texture(HTMLImageElement image, Mapping mapping, Wrapping wrapS, Wrapping wrapT, TextureFilter magFilter, TextureFilter minFilter){}
    public Texture(HTMLImageElement image, Mapping mapping, Wrapping wrapS, Wrapping wrapT, TextureFilter magFilter){}
    public Texture(HTMLImageElement image, Mapping mapping, Wrapping wrapS, Wrapping wrapT){}
    public Texture(HTMLImageElement image, Mapping mapping, Wrapping wrapS){}
    public Texture(HTMLImageElement image, Mapping mapping){}
    public Texture(HTMLImageElement image){}
    public Texture(HTMLCanvasElement image, Mapping mapping, Wrapping wrapS, Wrapping wrapT, TextureFilter magFilter, TextureFilter minFilter, PixelFormat format, TextureDataType type, double anisotropy){}
    public Texture(HTMLVideoElement image, Mapping mapping, Wrapping wrapS, Wrapping wrapT, TextureFilter magFilter, TextureFilter minFilter, PixelFormat format, TextureDataType type, double anisotropy){}
    public Texture(HTMLCanvasElement image, Mapping mapping, Wrapping wrapS, Wrapping wrapT, TextureFilter magFilter, TextureFilter minFilter, PixelFormat format, TextureDataType type){}
    public Texture(HTMLVideoElement image, Mapping mapping, Wrapping wrapS, Wrapping wrapT, TextureFilter magFilter, TextureFilter minFilter, PixelFormat format, TextureDataType type){}
    public Texture(HTMLCanvasElement image, Mapping mapping, Wrapping wrapS, Wrapping wrapT, TextureFilter magFilter, TextureFilter minFilter, PixelFormat format){}
    public Texture(HTMLVideoElement image, Mapping mapping, Wrapping wrapS, Wrapping wrapT, TextureFilter magFilter, TextureFilter minFilter, PixelFormat format){}
    public Texture(HTMLCanvasElement image, Mapping mapping, Wrapping wrapS, Wrapping wrapT, TextureFilter magFilter, TextureFilter minFilter){}
    public Texture(HTMLVideoElement image, Mapping mapping, Wrapping wrapS, Wrapping wrapT, TextureFilter magFilter, TextureFilter minFilter){}
    public Texture(HTMLVideoElement image, Mapping mapping, Wrapping wrapS, Wrapping wrapT, TextureFilter magFilter){}
    public Texture(HTMLCanvasElement image, Mapping mapping, Wrapping wrapS, Wrapping wrapT, TextureFilter magFilter){}
    public Texture(HTMLVideoElement image, Mapping mapping, Wrapping wrapS, Wrapping wrapT){}
    public Texture(HTMLCanvasElement image, Mapping mapping, Wrapping wrapS, Wrapping wrapT){}
    public Texture(HTMLVideoElement image, Mapping mapping, Wrapping wrapS){}
    public Texture(HTMLCanvasElement image, Mapping mapping, Wrapping wrapS){}
    public Texture(HTMLCanvasElement image, Mapping mapping){}
    public Texture(HTMLVideoElement image, Mapping mapping){}
    public Texture(HTMLVideoElement image){}
    public Texture(HTMLCanvasElement image){}
    protected Texture(){}
}

