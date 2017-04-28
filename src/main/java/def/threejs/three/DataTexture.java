package def.threejs.three;
import def.dom.ImageData;
public class DataTexture extends Texture {
    public DataTexture(Object data, double width, double height, PixelFormat format, TextureDataType type, Mapping mapping, Wrapping wrapS, Wrapping wrapT, TextureFilter magFilter, TextureFilter minFilter, double anisotropy){}
    public Image image;
    @jsweet.lang.Name("clone")
    native public DataTexture Clone();
    native public DataTexture copy(DataTexture source);
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class Image extends def.js.Object {
        public ImageData data;
        public double width;
        public double height;
    }
    public DataTexture(Object data, double width, double height, PixelFormat format, TextureDataType type, Mapping mapping, Wrapping wrapS, Wrapping wrapT, TextureFilter magFilter, TextureFilter minFilter){}
    protected DataTexture(){}
}

