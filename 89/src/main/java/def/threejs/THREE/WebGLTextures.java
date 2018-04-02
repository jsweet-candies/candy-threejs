package def.threejs.THREE;
import def.js.Function;
public class WebGLTextures extends def.js.Object {
    public WebGLTextures(Object gl, Object extensions, Object state, Object properties, Object capabilities, Function paramThreeToGL, Object info){}
    native public void setTexture2D(Object texture, double slot);
    native public void setTextureCube(Object texture, double slot);
    native public void setTextureCubeDynamic(Object texture, double slot);
    native public void setupRenderTarget(Object renderTarget);
    native public void updateRenderTargetMipmap(Object renderTarget);
    protected WebGLTextures(){}
}

