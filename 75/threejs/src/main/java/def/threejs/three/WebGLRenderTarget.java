package def.threejs.three;
public class WebGLRenderTarget extends RenderTarget {
    public WebGLRenderTarget(double width, double height, WebGLRenderTargetOptions options){}
    public String uuid;
    public double width;
    public double height;
    public Vector4 scissor;
    public Boolean scissorTest;
    public Vector4 viewpport;
    public Texture texture;
    public Boolean depthBuffer;
    public Boolean stencilBuffer;
    public Object wrapS;
    public Object wrapT;
    public Object magFilter;
    public Object minFilter;
    public Object anisotropy;
    public Object offset;
    public Object repeat;
    public Object format;
    public Object type;
    public Object generateMipmaps;
    native public void setSize(double width, double height);
    @jsweet.lang.Name("clone")
    native public WebGLRenderTarget Clone();
    native public WebGLRenderTarget copy(WebGLRenderTarget source);
    native public void dispose();
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
    public WebGLRenderTarget(double width, double height){}
    protected WebGLRenderTarget(){}
}

