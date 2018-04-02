package def.threejs.THREE;
@jsweet.lang.Interface
public abstract class Shader extends def.js.Object {
    public Uniforms uniforms;
    public String vertexShader;
    public String fragmentShader;
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class Uniforms extends def.js.Object {
        native public IUniform $get(String uniform);
    }
}

