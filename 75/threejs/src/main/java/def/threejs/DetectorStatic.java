package def.threejs;
import def.dom.HTMLElement;
@jsweet.lang.Interface
public abstract class DetectorStatic extends def.js.Object {
    public Boolean canvas;
    public Boolean webgl;
    public Boolean workers;
    public Boolean fileapi;
    native public HTMLElement getWebGLErrorMessage();
    native public void addGetWebGLMessage(Parameters parameters);
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class Parameters extends def.js.Object {
        @jsweet.lang.Optional
        public String id;
        @jsweet.lang.Optional
        public HTMLElement parent;
    }
    native public void addGetWebGLMessage();
}

