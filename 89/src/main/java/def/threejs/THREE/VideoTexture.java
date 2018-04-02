package def.threejs.THREE;
import def.dom.HTMLVideoElement;
public class VideoTexture extends Texture {
    public VideoTexture(HTMLVideoElement video, Mapping mapping, Wrapping wrapS, Wrapping wrapT, TextureFilter magFilter, TextureFilter minFilter, PixelFormat format, TextureDataType type, double anisotropy){}
    public VideoTexture(HTMLVideoElement video, Mapping mapping, Wrapping wrapS, Wrapping wrapT, TextureFilter magFilter, TextureFilter minFilter, PixelFormat format, TextureDataType type){}
    public VideoTexture(HTMLVideoElement video, Mapping mapping, Wrapping wrapS, Wrapping wrapT, TextureFilter magFilter, TextureFilter minFilter, PixelFormat format){}
    public VideoTexture(HTMLVideoElement video, Mapping mapping, Wrapping wrapS, Wrapping wrapT, TextureFilter magFilter, TextureFilter minFilter){}
    public VideoTexture(HTMLVideoElement video, Mapping mapping, Wrapping wrapS, Wrapping wrapT, TextureFilter magFilter){}
    public VideoTexture(HTMLVideoElement video, Mapping mapping, Wrapping wrapS, Wrapping wrapT){}
    public VideoTexture(HTMLVideoElement video, Mapping mapping, Wrapping wrapS){}
    public VideoTexture(HTMLVideoElement video, Mapping mapping){}
    public VideoTexture(HTMLVideoElement video){}
    protected VideoTexture(){}
}

