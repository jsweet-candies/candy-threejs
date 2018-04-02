package def.threejs.THREE;
public class WebGLRenderTarget extends EventDispatcher {
    public WebGLRenderTarget(double width, double height, WebGLRenderTargetOptions options){}
    public String uuid;
    public double width;
    public double height;
    public Vector4 scissor;
    public Boolean scissorTest;
    public Vector4 viewport;
    public Texture texture;
    public Boolean depthBuffer;
    public Boolean stencilBuffer;
    public Texture depthTexture;
    /**
     * @deprecated Use {@link Texture#wrapS texture.wrapS} instead.
     */
    public Object wrapS;
    /**
     * @deprecated Use {@link Texture#wrapT texture.wrapT} instead.
     */
    public Object wrapT;
    /**
     * @deprecated Use {@link Texture#magFilter texture.magFilter} instead.
     */
    public Object magFilter;
    /**
     * @deprecated Use {@link Texture#minFilter texture.minFilter} instead.
     */
    public Object minFilter;
    /**
     * @deprecated Use {@link Texture#anisotropy texture.anisotropy} instead.
     */
    public Object anisotropy;
    /**
     * @deprecated Use {@link Texture#offset texture.offset} instead.
     */
    public Object offset;
    /**
     * @deprecated Use {@link Texture#repeat texture.repeat} instead.
     */
    public Object repeat;
    /**
     * @deprecated Use {@link Texture#format texture.format} instead.
     */
    public Object format;
    /**
     * @deprecated Use {@link Texture#type texture.type} instead.
     */
    public Object type;
    /**
     * @deprecated Use {@link Texture#generateMipmaps texture.generateMipmaps} instead.
     */
    public Object generateMipmaps;
    native public void setSize(double width, double height);
    @jsweet.lang.Name("clone")
    native public WebGLRenderTarget Clone();
    native public WebGLRenderTarget copy(WebGLRenderTarget source);
    native public void dispose();
    public WebGLRenderTarget(double width, double height){}
    protected WebGLRenderTarget(){}
}

