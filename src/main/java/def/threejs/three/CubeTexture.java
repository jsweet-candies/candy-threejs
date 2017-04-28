package def.threejs.three;
public class CubeTexture extends Texture {
    public CubeTexture(Object[] images, Mapping mapping, Wrapping wrapS, Wrapping wrapT, TextureFilter magFilter, TextureFilter minFilter, PixelFormat format, TextureDataType type, double anisotropy){}
    public Object images;
    native public CubeTexture copy(CubeTexture source);
    public CubeTexture(Object[] images, Mapping mapping, Wrapping wrapS, Wrapping wrapT, TextureFilter magFilter, TextureFilter minFilter, PixelFormat format, TextureDataType type){}
    public CubeTexture(Object[] images, Mapping mapping, Wrapping wrapS, Wrapping wrapT, TextureFilter magFilter, TextureFilter minFilter, PixelFormat format){}
    public CubeTexture(Object[] images, Mapping mapping, Wrapping wrapS, Wrapping wrapT, TextureFilter magFilter, TextureFilter minFilter){}
    public CubeTexture(Object[] images, Mapping mapping, Wrapping wrapS, Wrapping wrapT, TextureFilter magFilter){}
    public CubeTexture(Object[] images, Mapping mapping, Wrapping wrapS, Wrapping wrapT){}
    public CubeTexture(Object[] images, Mapping mapping, Wrapping wrapS){}
    public CubeTexture(Object[] images, Mapping mapping){}
    public CubeTexture(Object[] images){}
    public CubeTexture(){}
}

